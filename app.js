/* =====================================================================
   ROUTINES — edit this list to swap moves.
   Each move needs: name, cue (one line of form advice), and search
   (the words used for the "Watch a demo" YouTube search).
   ===================================================================== */
const ROUTINES = [
  {
    id: "A",
    title: "Legs + glutes",
    equipment: "Fabric loop band, medium",
    moves: [
      { name: "Banded squat", cue: "Band above knees. Sit back like there's a chair, push knees out against the band.", search: "banded squat mini loop band form" },
      { name: "Glute bridge", cue: "On your back, band above knees. Squeeze your bum to lift hips, pause at the top.", search: "banded glute bridge form" },
      { name: "Side steps", cue: "Band above knees, slight squat. Small steps sideways, 4 one way then 4 back.", search: "banded lateral walk form" },
      { name: "Clamshells", cue: "Lie on your side, knees bent, band above knees. Open the top knee, keep feet together. Switch sides at round two.", search: "banded clamshell exercise form" },
      { name: "Kickbacks", cue: "On hands and knees, band above knees. Push one heel up to the ceiling. Alternate legs.", search: "banded donkey kick on all fours form" },
    ],
  },
  {
    id: "B",
    title: "Arms, shoulders + back",
    equipment: "Fabric loop band, light, around wrists",
    moves: [
      { name: "Band pull-apart", cue: "Light band around wrists, arms straight out in front. Pull hands apart, squeeze shoulder blades.", search: "mini band pull apart wrists form" },
      { name: "Overhead pull-down", cue: "Arms up overhead, band around wrists. Pull elbows down to your sides like a goalpost, then reach up.", search: "mini band overhead lat pulldown form" },
      { name: "Elbow-tucked rotations", cue: "Elbows glued to your sides, bent 90°. Rotate forearms outward against the band.", search: "mini band external rotation elbows at side" },
      { name: "Counter push-up", cue: "Hands on the kitchen counter, body in a straight line. Lower chest towards the edge, push away.", search: "incline push up kitchen counter beginner" },
      { name: "Wall slides", cue: "Forearms on a wall, band around wrists. Press out gently and slide arms up, then back down.", search: "banded wall slide forearms mini band" },
    ],
  },
  {
    id: "C",
    title: "Core",
    equipment: "Band only for the last move",
    moves: [
      { name: "Dead bug", cue: "On your back, arms up, knees over hips. Lower opposite arm and leg slowly, keep lower back on the floor.", search: "dead bug exercise beginner form" },
      { name: "Bird dog", cue: "On hands and knees. Reach opposite arm and leg out long, pause, come back. Alternate.", search: "bird dog exercise form" },
      { name: "Side plank on knees", cue: "On your forearm, knees bent and stacked. Lift hips and hold. Switch sides at round two.", search: "modified side plank on knees form" },
      { name: "Heel taps", cue: "On your back, knees bent, head lifted. Reach side to side to tap each heel.", search: "lying heel taps ab exercise" },
      { name: "Banded toe taps", cue: "On your back, band around feet, knees at 90°. Lower one foot to tap the floor, alternate.", search: "banded toe taps mini band core" },
    ],
  },
];

/* Timing, in seconds */
const READY_SECS = 10;
const WORK_SECS = 35;
const REST_SECS = 15;
const ROUNDS = 2;

/* ===================================================================== */

const $ = (id) => document.getElementById(id);
const STORAGE_KEY = "bandweek.lastTab";

const demoUrl = (phrase) =>
  "https://www.youtube.com/results?search_query=" + encodeURIComponent(phrase);

function store(key, value) {
  try { localStorage.setItem(key, value); } catch (e) { /* private mode etc. */ }
}
function recall(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}

function showScreen(id) {
  for (const s of ["home", "timer", "done"]) $(s).hidden = s !== id;
  window.scrollTo(0, 0);
}

/* ---------- Home ---------- */

let selected = 0;

function buildTabs() {
  const tabs = $("tabs");
  ROUTINES.forEach((r, i) => {
    const b = document.createElement("button");
    b.className = "tab";
    b.id = "tab-" + r.id;
    b.setAttribute("role", "tab");
    b.setAttribute("aria-controls", "panel");
    b.innerHTML = `<span class="tab-letter">${r.id}</span><span class="tab-label"></span>`;
    b.querySelector(".tab-label").textContent = r.title;
    b.addEventListener("click", () => selectTab(i));
    tabs.appendChild(b);
  });

  // Arrow keys move between tabs
  tabs.addEventListener("keydown", (e) => {
    const dir = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (!dir) return;
    const next = (selected + dir + ROUTINES.length) % ROUTINES.length;
    selectTab(next);
    tabs.children[next].focus();
  });
}

function selectTab(i) {
  selected = i;
  const r = ROUTINES[i];
  store(STORAGE_KEY, r.id);

  [...$("tabs").children].forEach((b, j) => {
    b.setAttribute("aria-selected", j === i ? "true" : "false");
    b.tabIndex = j === i ? 0 : -1;
  });
  $("panel").setAttribute("aria-labelledby", "tab-" + r.id);
  $("equipment").textContent = r.equipment;

  const list = $("moves");
  list.innerHTML = "";
  for (const m of r.moves) {
    const li = document.createElement("li");
    li.innerHTML = `<p class="move-title"></p><p class="move-cue-small"></p><a class="demo-link" target="_blank" rel="noopener">Watch a demo</a>`;
    li.querySelector(".move-title").textContent = m.name;
    li.querySelector(".move-cue-small").textContent = m.cue;
    const a = li.querySelector("a");
    a.href = demoUrl(m.search);
    a.setAttribute("aria-label", "Watch a demo of " + m.name);
    list.appendChild(li);
  }
  $("start").setAttribute("aria-label", `Start routine ${r.id}: ${r.title}`);
}

/* ---------- Sound ---------- */

let audio = null;

function initAudio() {
  // Must run inside a tap so iOS lets the sound play
  try {
    if (!audio) audio = new (window.AudioContext || window.webkitAudioContext)();
    if (audio.state === "suspended") audio.resume();
    // A silent blip fully "unlocks" audio on older iOS
    const o = audio.createOscillator(), g = audio.createGain();
    g.gain.value = 0;
    o.connect(g).connect(audio.destination);
    o.start(); o.stop(audio.currentTime + 0.01);
  } catch (e) { audio = null; }
}

function beep(freq, length = 0.18, volume = 0.3, delay = 0) {
  if (!audio) return;
  try {
    if (audio.state === "suspended") audio.resume();
    const t = audio.currentTime + delay;
    const o = audio.createOscillator(), g = audio.createGain();
    o.type = "sine";
    o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(volume, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + length);
    o.connect(g).connect(audio.destination);
    o.start(t);
    o.stop(t + length + 0.02);
  } catch (e) { /* ignore */ }
}

const sounds = {
  work: () => beep(880, 0.35, 0.35),
  rest: () => beep(440, 0.4, 0.3),
  tick: () => beep(660, 0.06, 0.15),
  finish: () => { beep(988, 0.18, 0.35); beep(1319, 0.3, 0.35, 0.22); },
};

/* ---------- Wake lock ---------- */

let wakeLock = null;

async function lockScreen() {
  try {
    if ("wakeLock" in navigator && !wakeLock) {
      wakeLock = await navigator.wakeLock.request("screen");
      wakeLock.addEventListener("release", () => { wakeLock = null; });
    }
  } catch (e) { wakeLock = null; }
}

function unlockScreen() {
  try { if (wakeLock) wakeLock.release(); } catch (e) { /* ignore */ }
  wakeLock = null;
}

/* ---------- Timer ---------- */

// The whole workout as a flat list of intervals
function buildPlan(routine) {
  const n = routine.moves.length;
  const plan = [{ type: "ready", secs: READY_SECS, move: 0, round: 1 }];
  for (let round = 1; round <= ROUNDS; round++) {
    for (let i = 0; i < n; i++) {
      plan.push({ type: "work", secs: WORK_SECS, move: i, round });
      const isLast = round === ROUNDS && i === n - 1;
      if (!isLast) {
        const nextMove = (i + 1) % n;
        const nextRound = i === n - 1 ? round + 1 : round;
        plan.push({ type: "rest", secs: REST_SECS, move: nextMove, round: nextRound });
      }
    }
  }
  return plan;
}

const run = {
  routine: null,
  plan: [],
  index: 0,
  endsAt: 0,      // performance.now() timestamp when the current interval ends
  remaining: 0,   // ms left, used while paused
  paused: false,
  lastShownSec: null,
  frame: 0,
  interval: 0,
};

function startWorkout() {
  initAudio();
  lockScreen();
  run.routine = ROUTINES[selected];
  run.plan = buildPlan(run.routine);
  run.paused = false;
  $("pause").textContent = "Pause";
  showScreen("timer");
  enterInterval(0, performance.now());
  loop();
  // Backup ticker in case animation frames are throttled
  clearInterval(run.interval);
  run.interval = setInterval(tick, 250);
}

function enterInterval(index, startTime) {
  run.index = index;
  const step = run.plan[index];
  run.endsAt = startTime + step.secs * 1000;
  run.lastShownSec = null;
  renderStep(step);
}

function renderStep(step) {
  const moves = run.routine.moves;
  const move = moves[step.move];
  const timer = $("timer");
  timer.classList.toggle("is-ready", step.type === "ready");
  timer.classList.toggle("is-rest", step.type === "rest");

  const phase = { ready: "Get ready", work: "Go", rest: "Breathe · next up" }[step.type];
  $("phase").textContent = phase;
  $("position").textContent = `Round ${step.round} of ${ROUNDS} · move ${step.move + 1} of ${moves.length}`;
  $("t-name").textContent = move.name;
  $("t-cue").textContent = move.cue;
  $("t-demo").href = demoUrl(move.search);

  // "Then: …" only during work, and not on the very last move
  const next = run.plan[run.index + 2]; // index+1 is the rest
  $("t-then").textContent = step.type === "work" && next ? `Then: ${moves[next.move].name}` : "";

  $("announce").textContent = `${phase}. ${move.name}.`;
}

function tick() {
  if (run.paused || $("timer").hidden) return;
  const now = performance.now();

  // Catch up if the phone lagged past one or more interval ends
  let changed = false;
  while (now >= run.endsAt) {
    const nextIndex = run.index + 1;
    if (nextIndex >= run.plan.length) { finishWorkout(); return; }
    enterInterval(nextIndex, run.endsAt);
    changed = true;
  }
  if (changed) {
    const t = run.plan[run.index].type;
    if (t === "work") sounds.work();
    else if (t === "rest") sounds.rest();
  }

  const msLeft = run.endsAt - now;
  const secsLeft = Math.ceil(msLeft / 1000);
  if (secsLeft !== run.lastShownSec) {
    // Ticks on the last 3 seconds
    if (run.lastShownSec !== null && secsLeft <= 3 && secsLeft >= 1) sounds.tick();
    run.lastShownSec = secsLeft;
    $("count").textContent = secsLeft;
  }

  const total = run.plan[run.index].secs * 1000;
  $("bar").style.transform = `scaleX(${Math.min(1, 1 - msLeft / total)})`;
}

function loop() {
  cancelAnimationFrame(run.frame);
  const step = () => {
    tick();
    if (!$("timer").hidden) run.frame = requestAnimationFrame(step);
  };
  run.frame = requestAnimationFrame(step);
}

function togglePause() {
  if (!run.paused) {
    run.paused = true;
    run.remaining = run.endsAt - performance.now();
    $("pause").textContent = "Resume";
    $("phase").textContent = "Paused";
  } else {
    initAudio();
    run.paused = false;
    run.endsAt = performance.now() + run.remaining;
    $("pause").textContent = "Pause";
    renderStep(run.plan[run.index]);
    run.lastShownSec = Math.ceil(run.remaining / 1000);
  }
}

function skip() {
  const nextIndex = run.index + 1;
  if (nextIndex >= run.plan.length) { finishWorkout(); return; }
  if (run.paused) togglePause();
  enterInterval(nextIndex, performance.now());
  const t = run.plan[run.index].type;
  if (t === "work") sounds.work();
  else if (t === "rest") sounds.rest();
  tick();
}

function stopTimer() {
  cancelAnimationFrame(run.frame);
  clearInterval(run.interval);
  unlockScreen();
}

function stopWorkout() {
  stopTimer();
  showScreen("home");
}

function finishWorkout() {
  stopTimer();
  sounds.finish();
  $("done-title").textContent = `${run.routine.title}: sorted.`;
  showScreen("done");
  $("close").focus();
}

// Phones drop the wake lock when the app is hidden; take it back on return
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible" && !$("timer").hidden) {
    lockScreen();
    tick();
  }
});

/* ---------- Wire up ---------- */

buildTabs();
const savedId = recall(STORAGE_KEY);
const savedIndex = ROUTINES.findIndex((r) => r.id === savedId);
selectTab(savedIndex >= 0 ? savedIndex : 0);

$("start").addEventListener("click", startWorkout);
$("pause").addEventListener("click", togglePause);
$("skip").addEventListener("click", skip);
$("stop").addEventListener("click", stopWorkout);
$("close").addEventListener("click", () => showScreen("home"));

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
