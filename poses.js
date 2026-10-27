/* =====================================================================
   SETUP PICTURES — simple line drawings of each move's position.
   Matched to moves by name. If a move has no entry here, it just
   shows without a picture (so swapping moves never breaks anything).

   Drawings use a 120 x 96 grid, floor at y = 82 (each picture is then
   zoomed to fit its figure). Each entry can have:
     head:  [x, y]                      the head (a circle)
     body:  [[x, y, x, y, ...], ...]    lines for torso, arms, legs
     far:   [[...]]                     limbs further away (drawn fainter)
     band:  [[...]]                     the band (drawn in the accent colour)
     wall:  x                           a wall at this x position
     counter: [x1, y1, x2, y2]          a box (kitchen counter)
     arrows: [[x1, y1, x2, y2], ...]    direction-of-movement arrows
   ===================================================================== */

// A standing figure seen from the front, reused by several moves
const STAND_FRONT = {
  head: [60, 22],
  body: [
    [60, 28, 60, 54],                   // torso
    [52, 31, 68, 31],                   // shoulders
    [56, 54, 64, 54],                   // hips
    [56, 54, 55, 67, 54, 81],           // left leg
    [64, 54, 65, 67, 66, 81],           // right leg
  ],
};
const front = (arms, band, extra = {}) =>
  ({ ...STAND_FRONT, body: [...STAND_FRONT.body, ...arms], band, ...extra });

const POSES = {
  /* ----- A: Legs + glutes ----- */
  "Banded squat": {
    head: [60, 30],
    body: [
      [60, 36, 60, 58], [52, 39, 68, 39], [55, 58, 65, 58],
      [55, 58, 46, 66, 50, 81], [65, 58, 74, 66, 70, 81],
      [52, 39, 48, 49, 57, 46], [68, 39, 72, 49, 63, 46],
    ],
    band: [[49, 63, 71, 63]],
  },
  "Glute bridge": {
    head: [17, 75],
    body: [[25, 79, 58, 62], [58, 62, 76, 54, 80, 81], [25, 79, 48, 81]],
    band: [[70.6, 51.5, 74.2, 59.7]],
  },
  "Side steps": {
    head: [60, 24],
    body: [
      [60, 30, 60, 55], [52, 33, 68, 33], [55, 55, 65, 55],
      [55, 55, 48, 68, 45, 81], [65, 55, 72, 68, 75, 81],
      [52, 33, 44, 44, 55, 54], [68, 33, 76, 44, 65, 54],
    ],
    band: [[50, 64, 70, 64]],
    arrows: [[36, 90, 18, 90], [84, 90, 102, 90]],
  },
  "Clamshells": {
    head: [14, 66],
    body: [[22, 74, 58, 76], [22, 74, 12, 80], [58, 75, 84, 56]],
    far: [[58, 77, 86, 80], [84, 56, 66, 79], [86, 80, 66, 81]],
    band: [[78, 60, 79, 79]],
    arrows: [[96, 66, 94, 50]],
  },
  "Kickbacks": {
    head: [22, 52],
    body: [[25, 55, 30, 58, 64, 58], [30, 58, 30, 81], [64, 58, 80, 52, 82, 32]],
    far: [[64, 58, 62, 80, 82, 81]],
    band: [[62.5, 74.5, 76, 53.5]],
    arrows: [[92, 44, 92, 28]],
  },

  /* ----- B: Arms, shoulders + back (loop band) ----- */
  "Band pull-apart": front([[52, 31, 30, 36], [68, 31, 90, 36]], [[30, 36, 90, 36]],
    { arrows: [[24, 46, 12, 46], [96, 46, 108, 46]] }),
  "Overhead pull-down": front([[52, 31, 42, 38, 41, 24], [68, 31, 78, 38, 79, 24]], [[41, 25, 79, 25]]),
  "Elbow-tucked rotations": front([[52, 31, 51, 44, 38, 46], [68, 31, 69, 44, 82, 46]], [[38, 46, 82, 46]],
    { arrows: [[30, 56, 18, 56], [90, 56, 102, 56]] }),
  "Counter push-up": {
    head: [42, 34],
    body: [[86, 81, 77, 70, 67, 60, 48, 40], [48, 40, 31, 57]],
    counter: [8, 57, 34, 82],
  },
  "Wall slides": {
    head: [50, 22],
    body: [[50, 28, 51, 54], [51, 54, 52, 67, 52, 81], [50, 31, 37, 38, 37, 20]],
    band: [[35, 24, 40, 24]],
    wall: 34,
    arrows: [[26, 42, 26, 18]],
  },

  /* ----- B: long band alternatives ----- */
  "Bent-over row": {
    head: [36, 36],
    body: [[74, 50, 44, 40], [74, 50, 66, 66, 70, 81], [46, 41, 47, 64]],
    far: [[74, 50, 70, 66, 76, 81]],
    band: [[70, 81, 47, 65]],
    arrows: [[38, 66, 38, 50]],
  },
  "Single-arm overhead press": front([[68, 31, 72, 19, 71, 6], [52, 31, 51, 44, 51, 56]], [[66, 81, 71, 7]]),
  "Bicep curl": front([[52, 31, 50, 44, 49, 35], [68, 31, 70, 44, 71, 35]], [[54, 81, 49, 36], [66, 81, 71, 36]]),
  "Overhead tricep extension": {
    head: [58, 22],
    body: [[60, 28, 60, 54], [60, 54, 61, 67, 60, 81], [60, 31, 57, 18, 58, 5]],
    far: [[60, 54, 57, 67, 53, 81]],
    band: [[64, 81, 67, 50, 64, 22, 58, 6]],
  },
  "Single-arm lateral raise": front([[68, 31, 80, 32, 92, 34], [52, 31, 51, 44, 51, 56]], [[66, 81, 92, 35]]),

  /* ----- C: Core ----- */
  "Dead bug": {
    head: [21, 76],
    body: [[30, 79, 60, 79], [30, 79, 8, 70], [60, 79, 80, 74, 98, 72]],
    far: [[30, 79, 30, 56], [60, 79, 60, 61, 77, 61]],
  },
  "Bird dog": {
    head: [26, 50],
    body: [[29, 54, 34, 58, 66, 58], [34, 58, 10, 59], [66, 58, 88, 57, 106, 57]],
    far: [[34, 58, 34, 81], [66, 58, 66, 81, 86, 81]],
  },
  "Side plank on knees": {
    head: [21, 60],
    body: [[30, 63, 86, 81], [30, 63, 30, 81, 14, 81], [31, 62, 33, 40]],
    far: [[86, 81, 100, 74]],
    arrows: [[58, 92, 58, 80]],
  },
  "Heel taps": {
    head: [27, 67],
    body: [[33, 71, 60, 79], [60, 79, 74, 60, 86, 81], [35, 72, 62, 76]],
  },
  "Banded toe taps": {
    head: [21, 76],
    body: [[30, 79, 60, 79], [30, 79, 52, 81], [60, 79, 73, 65, 86, 81]],
    far: [[60, 79, 60, 60, 78, 60]],
    band: [[60, 64, 70, 68]],
    arrows: [[94, 66, 94, 78]],
  },

  /* ----- S: Morning stretch ----- */
  "Knee hugs": {
    head: [21, 76],
    body: [[30, 79, 60, 79], [60, 79, 40, 62, 54, 52], [30, 79, 32, 66, 46, 57]],
    far: [[60, 79, 44, 60, 58, 51]],
    arrows: [[66, 60, 58, 66]],
  },
  "Knee rolls": {
    head: [21, 76],
    body: [[30, 79, 62, 79], [30, 79, 46, 81], [62, 79, 74, 60, 86, 81]],
    far: [[62, 79, 82, 66, 92, 78]],
    arrows: [[68, 50, 58, 50], [80, 50, 90, 50]],
  },
  "Cat-cow": {
    head: [24, 64],
    body: [[28, 62, 32, 58, 48, 49, 66, 58], [32, 58, 31, 81], [66, 58, 66, 81, 86, 81]],
    arrows: [[48, 42, 48, 30]],
  },
  "Thread the needle": {
    head: [33, 75],
    body: [[70, 58, 42, 72], [70, 58, 70, 81, 90, 81], [42, 73, 62, 80]],
    far: [[46, 70, 38, 81]],
    arrows: [[48, 89, 64, 89]],
  },
  "Child's pose": {
    head: [37, 76],
    body: [[78, 64, 62, 61, 46, 72], [78, 64, 56, 81, 84, 81], [46, 72, 30, 80, 12, 80]],
  },
  "Chin tucks": {
    head: [60, 21],
    body: [
      [60, 27, 60, 54], [60, 54, 61, 67, 60, 81], [60, 31, 61, 44, 61, 56],
      [55, 21, 53, 22],                 // nose, so you can see which way the head faces
    ],
    far: [[60, 54, 57, 67, 54, 81]],
    arrows: [[68, 16, 78, 16]],
  },
  "Neck side stretch": front(
    [[60, 28, 57, 26], [52, 31, 51, 44, 51, 56], [68, 31, 69, 44, 69, 56]], [],
    { head: [55, 22], arrows: [[47, 11, 42, 17]] }),
  "Shoulder rolls": front(
    [[52, 31, 51, 44, 51, 56], [68, 31, 69, 44, 69, 56]], [],
    { arrows: [[46, 34, 46, 22], [74, 34, 74, 22]] }),
};

// Build the SVG markup for a move's picture (or "" if there isn't one)
function drawPose(name) {
  const p = POSES[name];
  if (!p) return "";
  const line = (pts, cls) => `<polyline class="${cls}" points="${pts.join(" ")}"/>`;

  // Zoom in on the figure: fit a 5:4 frame around everything, plus a margin
  const xs = [], ys = [82];
  for (const pts of [...(p.body || []), ...(p.far || []), ...(p.band || []), ...(p.arrows || [])]) {
    pts.forEach((v, i) => (i % 2 ? ys : xs).push(v));
  }
  if (p.head) { xs.push(p.head[0] - 5, p.head[0] + 5); ys.push(p.head[1] - 5); }
  if (p.counter) { xs.push(p.counter[0], p.counter[2]); ys.push(p.counter[1]); }
  if (p.wall != null) xs.push(p.wall);
  let x = Math.min(...xs) - 7, y = Math.min(...ys) - 7;
  let w = Math.max(...xs) + 7 - x, h = Math.max(...ys) + 5 - y;
  if (w / h > 1.25) { y -= (w / 1.25 - h) / 2; h = w / 1.25; }
  else { x -= (h * 1.25 - w) / 2; w = h * 1.25; }

  let s = `<svg viewBox="${x} ${y} ${w} ${h}" aria-hidden="true" focusable="false">`;
  s += `<line class="pz-prop" x1="${x}" y1="82" x2="${x + w}" y2="82"/>`;
  if (p.wall != null) s += `<line class="pz-prop" x1="${p.wall}" y1="${y}" x2="${p.wall}" y2="82"/>`;
  if (p.counter) {
    const [x1, y1, x2, y2] = p.counter;
    s += `<rect class="pz-prop" x="${x1}" y="${y1}" width="${x2 - x1}" height="${y2 - y1}" rx="1.5"/>`;
  }
  for (const [x1, y1, x2, y2] of p.arrows || []) {
    // Shaft plus a small arrowhead at the end
    const len = Math.hypot(x2 - x1, y2 - y1), dx = (x2 - x1) / len, dy = (y2 - y1) / len;
    const bx = x2 - dx * 4, by = y2 - dy * 4;
    s += line([x1, y1, x2, y2], "pz-arrow");
    s += line([bx - dy * 3, by + dx * 3, x2, y2, bx + dy * 3, by - dx * 3], "pz-arrow");
  }
  for (const f of p.far || []) s += line(f, "pz-far");
  for (const b of p.body || []) s += line(b, "pz-body");
  if (p.head) s += `<circle class="pz-head" cx="${p.head[0]}" cy="${p.head[1]}" r="5"/>`;
  for (const b of p.band || []) s += line(b, "pz-band");
  return s + `</svg>`;
}
