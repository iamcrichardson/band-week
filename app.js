/* =====================================================================
   ROUTINES — edit this list to swap moves.
   Each move needs: name, cue (one line of form advice), and q
   (the words used for the "Watch a demo" YouTube search).

   Optional extras on a move:
     band: which band it uses, shown on the timer (e.g. "Loop band")
     alt:  a second version you can pick with a toggle on the home screen,
           written as { name, cue, q, band }
     sides: true  — do the left side, a short "Switch sides" pause, then
                    the right side, every round (both get the same time)
   Optional extras on a routine:
     short:     a short name for the tab bar at the bottom
     note:      one line of helper text shown above its list
     timing:    { ready, work, rest, switch, rounds } to override the defaults below
     workLabel: what the timer says during each move (default "Go")
     doneLine:  the line under "[Routine]: sorted." at the end
   ===================================================================== */
const ROUTINES = [
  {
    id: "A",
    title: "Legs + glutes",
    short: "Legs",
    equipment: "Fabric loop band, medium",
    moves: [
      { name: "Banded squat", cue: "Band above knees. Sit back like there's a chair, push knees out against the band.", q: "banded squat mini loop band form" },
      { name: "Glute bridge", cue: "On your back, band above knees. Squeeze your bum to lift hips, pause at the top.", q: "banded glute bridge form" },
      { name: "Side steps", cue: "Band above knees, slight squat. Small steps sideways, 4 one way then 4 back.", q: "banded lateral walk form" },
      { name: "Clamshells", sides: true, cue: "Lie on your side, knees bent, band above knees. Open the top knee, keep feet together.", q: "banded clamshell exercise form" },
      { name: "Kickbacks", sides: true, cue: "On hands and knees, band above knees. Push one heel up to the ceiling, lower with control.", q: "banded donkey kick on all fours form" },
    ],
  },
  {
    id: "B",
    title: "Arms, shoulders + back",
    short: "Arms",
    equipment: "Loop band (light, around wrists) or long band (under your feet)",
    note: "Long band too hard or too easy? Stand with feet wider for more tension, closer for less.",
    moves: [
      {
        name: "Band pull-apart", band: "Loop band", cue: "Light band around wrists, arms straight out in front. Pull hands apart, squeeze shoulder blades.", q: "mini band pull apart wrists form",
        alt: { name: "Bent-over row", band: "Long band", cue: "Stand on the band, hinge forward with a flat back. Pull your elbows back past your ribs, squeeze, lower slowly.", q: "resistance band bent over row standing on band" },
      },
      {
        name: "Overhead pull-down", band: "Loop band", cue: "Arms up overhead, band around wrists. Pull elbows down to your sides like a goalpost, then reach up.", q: "mini band overhead lat pulldown form",
        alt: { name: "Single-arm overhead press", band: "Long band", sides: true, cue: "Stand on one end of the band, hold the other end at your shoulder. Press straight up without arching your back, lower slowly.", q: "single arm resistance band overhead press standing on band" },
      },
      {
        name: "Elbow-tucked rotations", band: "Loop band", cue: "Elbows glued to your sides, bent 90°. Rotate forearms outward against the band.", q: "mini band external rotation elbows at side",
        alt: { name: "Bicep curl", band: "Long band", cue: "Stand on the band, palms forward, elbows pinned to your sides. Curl up, lower slowly.", q: "resistance band bicep curl standing on band" },
      },
      {
        name: "Counter push-up", band: "Loop band", cue: "Hands on the kitchen counter, body in a straight line. Lower chest towards the edge, push away.", q: "incline push up kitchen counter beginner",
        alt: { name: "Overhead tricep extension", band: "Long band", cue: "Stand on the band with one foot, hold the other end behind your head with both hands. Straighten your arms up, bend back down.", q: "resistance band overhead tricep extension standing" },
      },
      {
        name: "Wall slides", band: "Loop band", cue: "Forearms on a wall, band around wrists. Press out gently and slide arms up, then back down.", q: "banded wall slide forearms mini band",
        alt: { name: "Single-arm lateral raise", band: "Long band", sides: true, cue: "Stand on one end of the band, hold the other end by your side. Lift your arm out to shoulder height with a slight bend in the elbow, lower slowly.", q: "single arm resistance band lateral raise standing on band" },
      },
    ],
  },
  {
    id: "C",
    title: "Core",
    short: "Core",
    equipment: "Band only for the last move",
    moves: [
      { name: "Dead bug", cue: "On your back, arms up, knees over hips. Lower opposite arm and leg slowly, keep lower back on the floor.", q: "dead bug exercise beginner form" },
      { name: "Bird dog", cue: "On hands and knees. Reach opposite arm and leg out long, pause, come back. Alternate.", q: "bird dog exercise form" },
      { name: "Side plank on knees", sides: true, cue: "On your forearm, knees bent and stacked. Lift hips and hold.", q: "modified side plank on knees form" },
      { name: "Heel taps", cue: "On your back, knees bent, head lifted. Reach side to side to tap each heel.", q: "lying heel taps ab exercise" },
      { name: "Banded toe taps", cue: "On your back, band just above your knees, knees over hips at 90°. Keep your ribs down, lower one foot to tap the floor, alternate.", q: "banded toe taps mini band core" },
    ],
  },
  {
    id: "S",
    title: "Morning stretch",
    short: "Stretch",
    equipment: "No band needed. A mat, rug or your bed is fine.",
    note: "Go gently: stretch to mild tension, never pain. If stiffness hangs around, or you get numbness or tingling, check in with a GP or physio.",
    timing: { ready: 10, work: 40, rest: 10, rounds: 1 },
    workLabel: "Stretch",
    doneLine: "Nice and loose. Come back any morning you like.",
    moves: [
      { name: "Knee hugs", cue: "Lie on your back and hug both knees towards your chest. Rock gently side to side if it feels good.", q: "knees to chest stretch lower back" },
      { name: "Knee rolls", cue: "On your back, knees bent, feet flat, arms out. Slowly let both knees fall to one side, then the other. Keep your shoulders down.", q: "lying knee rolls lower back mobility" },
      { name: "Chin tucks", cue: "Sit or stand tall. Gently slide your chin straight back, like making a double chin. Hold a moment, release, repeat.", q: "chin tucks neck exercise" },
      { name: "Neck side stretch", sides: true, cue: "Sit or stand tall, shoulders relaxed. Tilt your ear towards your shoulder until you feel a gentle stretch. No pulling.", q: "neck side stretch ear to shoulder" },
      { name: "Shoulder rolls", cue: "Sit or stand tall, arms relaxed. Slowly roll your shoulders up, back and down in big circles.", q: "shoulder rolls stretch" },
    ],
  },
];

/* Default timing, in seconds (a routine can override these with "timing") */
const READY_SECS = 10;
const WORK_SECS = 35;
const REST_SECS = 15;
const SWITCH_SECS = 10;   // the pause to swap sides on a two-sided move
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
  $("tabs").hidden = id !== "home";
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
    b.innerHTML = `<span class="tab-pill"><span class="tab-letter">${r.id}</span></span><span class="tab-label"></span>`;
    b.querySelector(".tab-label").textContent = r.short || r.title;
    b.setAttribute("aria-label", r.title);
    b.addEventListener("click", () => {
      if (i !== selected) window.scrollTo(0, 0);
      selectTab(i);
    });
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
  $("panel-title").textContent = r.title;
  $("equipment").textContent = r.equipment;
  $("note").textContent = r.note || "";
  $("note").hidden = !r.note;

  const list = $("moves");
  list.innerHTML = "";
  r.moves.forEach((m, i) => {
    const li = document.createElement("li");
    li.innerHTML = `<div class="setup" role="img"></div><p class="move-title"></p><p class="move-cue-small"></p><a class="demo-link" target="_blank" rel="noopener">Watch a demo</a>`;
    if (m.alt) li.querySelector(".move-title").after(buildToggle(r, m, i, li));
    fillMove(li, resolveMove(r, m));
    list.appendChild(li);
  });
  updateLength();
}

// How long the selected routine takes, shown above the list and on Start
function updateLength() {
  const r = ROUTINES[selected];
  const timing = timingFor(r);
  const moves = r.moves.map((m) => resolveMove(r, m));
  const secs = buildPlan(moves, timing).reduce((t, s) => t + s.secs, 0);
  const mins = Math.round(secs / 60);
  const twoSided = moves.filter((m) => m.sides).length;
  $("panel-meta").textContent = [
    `About ${mins} min`,
    timing.rounds > 1 ? `${timing.rounds} rounds` : "",
    twoSided ? "both sides timed for you" : "",
  ].filter(Boolean).join(" · ");
  $("start").textContent = `Start · ${mins} min`;
  $("start").setAttribute("aria-label", `Start ${r.title}, about ${mins} minutes`);
}

// Put a move's setup picture into a .setup box (hidden if there isn't one)
function showPicture(box, m) {
  box.innerHTML = drawPose(m.name);
  box.hidden = !box.innerHTML;
  box.setAttribute("aria-label", "Setup for " + m.name);
}

function fillMove(li, m) {
  showPicture(li.querySelector(".setup"), m);
  li.querySelector(".move-title").textContent = m.name;
  li.querySelector(".move-cue-small").textContent = m.cue;
  const a = li.querySelector(".demo-link");
  a.href = demoUrl(m.q);
  a.setAttribute("aria-label", "Watch a demo of " + m.name);
}

/* ---------- Band choice (a saved preference, not tracking) ---------- */

const CHOICE_KEY = "bandweek.bandChoice";
// Shorter wording for the toggle buttons
const TOGGLE_LABELS = { "Loop band": "Loop" };

let choices = {};
try { choices = JSON.parse(recall(CHOICE_KEY)) || {}; } catch (e) { choices = {}; }

const choiceKey = (routine, move) => routine.id + ":" + move.name;

function resolveMove(routine, move) {
  return move.alt && choices[choiceKey(routine, move)] === "alt" ? move.alt : move;
}

function buildToggle(routine, move, index, li) {
  const group = document.createElement("div");
  group.className = "band-toggle";
  group.setAttribute("role", "radiogroup");
  group.setAttribute("aria-label", `Band for move ${index + 1}, ${move.name}`);

  const current = resolveMove(routine, move) === move.alt ? "alt" : "main";
  for (const [value, version] of [["main", move], ["alt", move.alt]]) {
    const band = version.band || (value === "main" ? "Loop band" : "Long band");
    const label = document.createElement("label");
    label.innerHTML = `<input type="radio"><span></span>`;
    const input = label.querySelector("input");
    input.name = `band-${routine.id}-${index}`;
    input.value = value;
    input.checked = value === current;
    input.addEventListener("change", () => {
      choices[choiceKey(routine, move)] = value;
      store(CHOICE_KEY, JSON.stringify(choices));
      fillMove(li, version);
      updateLength();
    });
    label.querySelector("span").textContent = TOGGLE_LABELS[band] || band;
    input.setAttribute("aria-label", `${band}: ${version.name}`);
    group.appendChild(label);
  }
  return group;
}

/* ---------- Sound, voice + vibration ---------- */

// What you'd like to hear (or feel). A saved preference, not tracking.
const SOUND_KEY = "bandweek.sound";
const soundPrefs = { voice: true, beeps: true, vibrate: true };
try { Object.assign(soundPrefs, JSON.parse(recall(SOUND_KEY)) || {}); } catch (e) { /* defaults */ }
const saveSoundPrefs = () => store(SOUND_KEY, JSON.stringify(soundPrefs));

let audio = null;
let master = null;

function initAudio() {
  // Must run inside a tap so phones let the sound play
  try {
    if (!audio) {
      audio = new (window.AudioContext || window.webkitAudioContext)();
      // A compressor lets the beeps be loud without crackling
      const squash = audio.createDynamicsCompressor();
      squash.threshold.value = -20;
      squash.ratio.value = 6;
      master = audio.createGain();
      master.gain.value = 1.6;
      master.connect(squash).connect(audio.destination);
    }
    if (audio.state === "suspended") audio.resume();
    // A silent blip fully "unlocks" audio on older iOS
    const o = audio.createOscillator(), g = audio.createGain();
    g.gain.value = 0;
    o.connect(g).connect(audio.destination);
    o.start(); o.stop(audio.currentTime + 0.01);
  } catch (e) { audio = null; }
  unlockVoice();
}

function beep(freq, length = 0.18, volume = 0.5, delay = 0) {
  if (!audio || !soundPrefs.beeps) return;
  try {
    if (audio.state === "suspended") audio.resume();
    const t = audio.currentTime + delay;
    const o = audio.createOscillator(), g = audio.createGain();
    o.type = "triangle";   // brighter than a pure tone, so it cuts through
    o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(volume, t + 0.01);
    g.gain.setValueAtTime(volume, t + length * 0.6);
    g.gain.exponentialRampToValueAtTime(0.0001, t + length);
    o.connect(g).connect(master);
    o.start(t);
    o.stop(t + length + 0.02);
  } catch (e) { /* ignore */ }
}

function buzz(pattern) {
  if (!soundPrefs.vibrate || !navigator.vibrate) return;
  try { navigator.vibrate(pattern); } catch (e) { /* ignore */ }
}

// Each cue has its own shape, so you can tell them apart without looking
const sounds = {
  go:     () => { beep(880, 0.16); beep(880, 0.16, 0.5, 0.2); beep(1320, 0.5, 0.6, 0.4); buzz([500]); },
  rest:   () => { beep(784, 0.3); beep(523, 0.55, 0.5, 0.32); buzz([200, 120, 200]); },
  switch: () => { beep(660, 0.18); beep(990, 0.18, 0.5, 0.22); beep(660, 0.3, 0.5, 0.44); buzz([150, 100, 150, 100, 150]); },
  tick:   () => { beep(1047, 0.1, 0.4); buzz(60); },
  finish: () => { beep(784, 0.2); beep(988, 0.2, 0.5, 0.22); beep(1319, 0.6, 0.6, 0.44); buzz([300, 150, 300, 150, 600]); },
};

// Spoken cues, using the phone's own voice
const canSpeak = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
let voice = null;
let speakTimer = 0;

function pickVoice() {
  try {
    const all = speechSynthesis.getVoices();
    voice = all.find((v) => v.lang === "en-GB" && v.localService)
      || all.find((v) => v.lang === "en-GB")
      || all.find((v) => /^en/i.test(v.lang)) || null;
  } catch (e) { voice = null; }
}
if (canSpeak) {
  pickVoice();
  try { speechSynthesis.addEventListener("voiceschanged", pickVoice); } catch (e) { /* old browsers */ }
}

function speakNow(text, volume = 1) {
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    if (voice) u.voice = voice;
    u.lang = voice ? voice.lang : "en-GB";
    u.volume = volume;
    speechSynthesis.speak(u);
  } catch (e) { /* ignore */ }
}

// Say something just after the beep (a newer cue replaces an older one)
function say(text, delay = 700) {
  clearTimeout(speakTimer);
  if (!canSpeak || !soundPrefs.voice) return;
  speakTimer = setTimeout(() => speakNow(text), delay);
}

// Phones only allow speech that starts from a tap, so prime it on Start
let voiceUnlocked = false;
function unlockVoice() {
  if (!canSpeak || voiceUnlocked) return;
  voiceUnlocked = true;
  speakNow(" ", 0);
}

function stopVoice() {
  clearTimeout(speakTimer);
  try { if (canSpeak) speechSynthesis.cancel(); } catch (e) { /* ignore */ }
}

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

const PHASES = { ready: "Get ready", work: "Go", rest: "Breathe · next up" };
const SIDE_LABELS = { 1: "Left side", 2: "Right side" };
const RING_LENGTH = 2 * Math.PI * 54; // matches the circle's r in index.html

const timingFor = (routine) =>
  ({ ready: READY_SECS, work: WORK_SECS, rest: REST_SECS, switch: SWITCH_SECS, rounds: ROUNDS, ...routine.timing });

// The whole workout as a flat list of intervals
function buildPlan(moves, timing) {
  // Every piece of work in order; two-sided moves become two pieces
  const works = [];
  for (let round = 1; round <= timing.rounds; round++) {
    moves.forEach((m, i) => {
      if (m.sides) works.push({ move: i, round, side: 1 }, { move: i, round, side: 2 });
      else works.push({ move: i, round });
    });
  }
  const plan = [{ type: "ready", secs: timing.ready, ...works[0] }];
  works.forEach((w, i) => {
    plan.push({ type: "work", secs: timing.work, ...w });
    const next = works[i + 1];
    if (!next) return;
    // Swapping sides of the same move only needs a short pause
    const switching = next.side === 2;
    plan.push({ type: "rest", secs: switching ? timing.switch : timing.rest, ...next, switching });
  });
  return plan;
}

function phaseLabel(step) {
  if (step.type === "work") return run.routine.workLabel || PHASES.work;
  if (step.type === "rest" && step.switching) return "Switch sides";
  return PHASES[step.type];
}

const run = {
  routine: null,
  rounds: ROUNDS,
  moves: [],      // the chosen version of each move for this workout
  plan: [],
  secsAfter: [],  // seconds left in the workout after each interval
  totalSecs: 0,
  index: 0,
  endsAt: 0,      // performance.now() timestamp when the current interval ends
  remaining: 0,   // ms left, used while paused
  paused: false,
  lastShownSec: null,
  frame: 0,
  interval: 0,
};

const formatTime = (secs) => `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, "0")}`;

function startWorkout() {
  initAudio();
  lockScreen();
  run.routine = ROUTINES[selected];
  // Use whichever version (loop / long band) is picked for each move
  run.moves = run.routine.moves.map((m) => resolveMove(run.routine, m));
  const timing = timingFor(run.routine);
  run.rounds = timing.rounds;
  run.plan = buildPlan(run.moves, timing);
  run.secsAfter = run.plan.map((_, i) => run.plan.slice(i + 1).reduce((t, s) => t + s.secs, 0));
  run.totalSecs = run.secsAfter[0] + run.plan[0].secs;
  run.paused = false;
  $("t-routine").textContent = run.routine.title;
  buildTimeline();
  showScreen("timer");
  try { history.pushState({ inWorkout: true }, ""); } catch (e) { /* ignore */ }
  enterInterval(0, performance.now());
  playCue(run.plan[0]);
  setPausedUI(false);
  loop();
  // Backup ticker in case animation frames are throttled
  clearInterval(run.interval);
  run.interval = setInterval(tick, 250);
}

function buildTimeline() {
  const line = $("timeline");
  line.innerHTML = "";
  run.plan.forEach((step, i) => {
    const seg = document.createElement("span");
    seg.className = "seg seg-" + step.type;
    seg.style.flexGrow = step.secs;
    // A small gap where round two starts
    if (i > 0 && step.round > run.plan[i - 1].round) seg.classList.add("round-start");
    line.appendChild(seg);
  });
}

function enterInterval(index, startTime) {
  run.index = index;
  const step = run.plan[index];
  run.endsAt = startTime + step.secs * 1000;
  run.lastShownSec = null;
  [...$("timeline").children].forEach((seg, i) => {
    seg.style.setProperty("--p", i < index ? 1 : 0);
    seg.classList.toggle("is-current", i === index);
  });
  renderStep(step);
}

function renderStep(step) {
  const moves = run.moves;
  const move = moves[step.move];
  const timer = $("timer");
  timer.classList.toggle("is-ready", step.type === "ready");
  timer.classList.toggle("is-rest", step.type === "rest");

  $("phase").textContent = run.paused ? "Paused" : phaseLabel(step);
  const position = `move ${step.move + 1} of ${moves.length}`;
  $("position").textContent = run.rounds > 1
    ? `Round ${step.round} of ${run.rounds} · ${position}`
    : position[0].toUpperCase() + position.slice(1);
  $("t-name").textContent = move.name;
  // Small label under the name: which band, and/or which side
  const chip = [move.band, SIDE_LABELS[step.side]].filter(Boolean).join(" · ");
  $("t-band").textContent = chip;
  $("t-band").hidden = !chip;
  $("t-cue").textContent = move.cue;
  $("t-demo").href = demoUrl(move.q);
  showPicture($("t-pic"), move);
  $("timer").classList.toggle("has-pic", !$("t-pic").hidden);

  // "Up next" only during work, and not on the very last move
  const next = run.plan.slice(run.index + 1).find((s) => s.type === "work");
  const showNext = step.type === "work" && next;
  $("t-then").textContent = !showNext ? ""
    : moves[next.move].name + (next.side ? " · " + SIDE_LABELS[next.side].toLowerCase() : "");
  $("next-card").hidden = !showNext;

  $("announce").textContent = `${phaseLabel(step)}. ${move.name}.`;
}

// Draw the ring, timeline and clocks for the time left in this interval
function paint(msLeft) {
  const step = run.plan[run.index];
  const done = Math.min(1, Math.max(0, 1 - msLeft / (step.secs * 1000)));
  $("ring").style.strokeDasharray = RING_LENGTH;
  $("ring").style.strokeDashoffset = RING_LENGTH * done;
  $("timeline").children[run.index].style.setProperty("--p", done);

  const secsLeft = Math.ceil(msLeft / 1000);
  if (secsLeft !== run.lastShownSec) {
    // Ticks on the last 3 seconds
    if (run.lastShownSec !== null && !run.paused && secsLeft <= 3 && secsLeft >= 1) sounds.tick();
    run.lastShownSec = secsLeft;
    $("count").textContent = secsLeft;
    const workoutLeft = run.secsAfter[run.index] + secsLeft;
    $("t-left").textContent = formatTime(workoutLeft) + " left";
    $("timeline").setAttribute("aria-valuenow",
      Math.round(100 * (1 - workoutLeft / run.totalSecs)));
  }
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
  if (changed) playCue(run.plan[run.index]);

  paint(run.endsAt - now);
}

// The sound, buzz and spoken line for the start of an interval
function playCue(step) {
  const move = run.moves[step.move];
  const side = step.side ? ", " + SIDE_LABELS[step.side].toLowerCase() : "";
  if (step.type === "work") {
    sounds.go();
    say(`Go. ${move.name}${side}.`);
  } else if (step.type === "rest" && step.switching) {
    sounds.switch();
    say("Switch sides. Right side next.");
  } else if (step.type === "rest") {
    sounds.rest();
    say(`Rest. Next up, ${move.name}${side}.`);
  } else {
    say(`Get ready. First up, ${move.name}${side}.`, 0);
  }
}

function loop() {
  cancelAnimationFrame(run.frame);
  const step = () => {
    tick();
    if (!$("timer").hidden) run.frame = requestAnimationFrame(step);
  };
  run.frame = requestAnimationFrame(step);
}

function setPausedUI(paused) {
  $("timer").classList.toggle("is-paused", paused);
  $("pause").setAttribute("aria-label", paused ? "Resume" : "Pause");
  $("pause").querySelector(".i-pause").hidden = paused;
  $("pause").querySelector(".i-play").hidden = !paused;
  $("phase").textContent = paused ? "Paused" : phaseLabel(run.plan[run.index]);
}

function togglePause() {
  if (!run.paused) {
    run.paused = true;
    run.remaining = run.endsAt - performance.now();
  } else {
    initAudio();
    run.paused = false;
    run.endsAt = performance.now() + run.remaining;
    run.lastShownSec = Math.ceil(run.remaining / 1000);
  }
  setPausedUI(run.paused);
}

// Jump to an interval and start it from the top (used by Skip and Back)
function jumpTo(index) {
  if (run.paused) {
    initAudio();
    run.paused = false;
    setPausedUI(false);
  }
  enterInterval(index, performance.now());
  playCue(run.plan[index]);
  tick();
}

function skip() {
  const nextIndex = run.index + 1;
  if (nextIndex >= run.plan.length) { finishWorkout(); return; }
  jumpTo(nextIndex);
}

// Back: restart this move if you're a few seconds in, otherwise go to the
// previous move (stepping over the rest in between)
function back() {
  const step = run.plan[run.index];
  const msLeft = run.paused ? run.remaining : run.endsAt - performance.now();
  const elapsed = step.secs * 1000 - msLeft;
  let target = run.index;
  if (elapsed < 3000 && run.index > 0) {
    target = run.index - 1;
    if (run.plan[target].type === "rest" && target > 0) target--;
  }
  jumpTo(target);
}

/* ---------- Ending a workout ---------- */

let resumeAfterDialog = false;

function askToEnd() {
  const dialog = $("confirm-end");
  if (typeof dialog.showModal !== "function") {
    if (window.confirm("End this workout?")) stopWorkout();
    return;
  }
  resumeAfterDialog = !run.paused;
  if (!run.paused) togglePause();
  dialog.returnValue = "";
  dialog.showModal();
}

$("confirm-end").addEventListener("close", () => {
  if ($("confirm-end").returnValue === "end") stopWorkout();
  else if (resumeAfterDialog) togglePause();
});

function stopTimer() {
  cancelAnimationFrame(run.frame);
  clearInterval(run.interval);
  unlockScreen();
  stopVoice();
}

function stopWorkout() {
  stopTimer();
  goHome();
}

// Back to the routine list, tidying up the workout's history entry
function goHome() {
  showScreen("home");
  if (history.state && history.state.inWorkout) history.back();
  if (reloadPending) location.reload();
}

function finishWorkout() {
  stopTimer();
  sounds.finish();
  say("All done. Nice work.", 900);
  $("done-title").textContent = `${run.routine.title}: sorted.`;
  $("done-sub").textContent = run.routine.doneLine || "That's this one covered for the week.";
  showScreen("done");
  $("close").focus();
}

// Phones drop the wake lock when the app is hidden; take it back on return
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible" && !$("timer").hidden) {
    lockScreen();
    try { if (audio && audio.state !== "running") audio.resume(); } catch (e) { /* ignore */ }
    tick();
  }
});

// The phone's Back button / swipe: mid-workout it asks first, never just quits
window.addEventListener("popstate", () => {
  if (!$("timer").hidden) {
    try { history.pushState({ inWorkout: true }, ""); } catch (e) { /* ignore */ }
    if ($("sound-sheet").open) $("sound-sheet").close();
    else if ($("confirm-end").open) $("confirm-end").close("keep");
    else askToEnd();
  } else if (!$("done").hidden) {
    showScreen("home");
    if (reloadPending) location.reload();
  }
});

/* ---------- Sound settings sheet ---------- */

function openSoundSheet() {
  const sheet = $("sound-sheet");
  sheet.querySelectorAll("[data-pref]").forEach((box) => {
    box.checked = !!soundPrefs[box.dataset.pref];
  });
  if (typeof sheet.showModal === "function") sheet.showModal();
}

$("sound-sheet").querySelectorAll("[data-pref]").forEach((box) => {
  box.addEventListener("change", () => {
    soundPrefs[box.dataset.pref] = box.checked;
    saveSoundPrefs();
    if (!box.checked && box.dataset.pref === "voice") stopVoice();
  });
});

$("test-sound").addEventListener("click", () => {
  initAudio();
  sounds.go();
  say("Go. This is how the cues sound.", 800);
  if (!soundPrefs.voice && !soundPrefs.beeps && !soundPrefs.vibrate) {
    $("test-sound").textContent = "Everything is switched off";
    setTimeout(() => { $("test-sound").textContent = "Test sound"; }, 2000);
  }
});

/* ---------- Wire up ---------- */

// Set when a new version of the app is ready; applied once you're not mid-workout
let reloadPending = false;

buildTabs();
const savedId = recall(STORAGE_KEY);
const savedIndex = ROUTINES.findIndex((r) => r.id === savedId);
selectTab(savedIndex >= 0 ? savedIndex : 0);

$("start").addEventListener("click", startWorkout);
$("pause").addEventListener("click", togglePause);
$("skip").addEventListener("click", skip);
$("back").addEventListener("click", back);
$("stop").addEventListener("click", askToEnd);
$("close").addEventListener("click", goHome);
$("open-sound").addEventListener("click", openSoundSheet);
$("timer-sound").addEventListener("click", openSoundSheet);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });

  // When a new version takes over, reload to show it, but never mid-workout
  const hadController = !!navigator.serviceWorker.controller;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (!hadController) return;
    if ($("timer").hidden) location.reload();
    else reloadPending = true;
  });
}
