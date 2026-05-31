/* ============================================================
   Shared portfolio behaviors + renderers (V2).
   Loaded after the project data files on every page.
   ============================================================ */

/* ordered category filter set */
window.CATEGORIES = ["All", "Medical Devices", "Wearables", "Haptics", "Biomechanics", "Mechanical"];

/* find a project + its neighbours (by array order) */
window.getProject = function (id) {
  const list = window.PROJECTS || [];
  const i = list.findIndex(p => p.id === id);
  return {
    project: list[i],
    index: i,
    prev: i > 0 ? list[i - 1] : null,
    next: i >= 0 && i < list.length - 1 ? list[i + 1] : null
  };
};

/* ---------- brand logo lockup (placeholder hero) ---------- */
window.renderLogo = function (spec) {
  spec = spec || {};
  const name = spec.name || "";
  const accent = spec.accent || "";
  const tag = spec.tag || "";
  const mark = spec.mark || "";
  return `<div class="logo-lockup">
    <div class="logo-mark">${mark}</div>
    <div class="lw-name">${name}${accent ? `<span>${accent}</span>` : ""}</div>
    ${tag ? `<div class="lw-tag">${tag}</div>` : ""}
  </div>`;
};

/* ---------- figures ---------- */
/* slot: { src, cap }  →  light figure plate with mono caption bar.
   no src → dark hatched placeholder plate. */
window.figure = function (slot, figno, opts) {
  opts = opts || {};
  const cover = opts.cover ? " cover" : "";
  const cap = slot && slot.cap
    ? `<div class="figcap">${figno ? `<span class="fno">FIG ${figno}</span>` : ""}<span>${slot.cap}</span></div>`
    : "";
  if (slot && slot.src) {
    return `<div class="figplate${cover}"><div class="fimg"><img src="${slot.src}" alt="${(slot.cap || "").replace(/"/g, "&quot;")}" loading="lazy"></div>${cap}</div>`;
  }
  const label = (slot && slot.label) || "Figure";
  const note = (slot && slot.note) || "image to be added";
  return `<div class="figplate"><div class="fimg" style="background:var(--surface);background-image:repeating-linear-gradient(-45deg,rgba(255,255,255,.02) 0 11px,transparent 11px 22px);flex-direction:column;gap:8px;padding:18px;text-align:center">
    <span style="font-family:var(--mono);font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--text-dim);border:1px solid var(--border-2);padding:6px 12px">${label}</span>
    <span style="font-family:var(--mono);font-size:11px;color:var(--text-faint)">${note}</span>
  </div>${cap}</div>`;
};

/* ---------- charts (SVG, dark theme) ---------- */
window.renderChart = function (spec) {
  const W = spec.w || 660, H = spec.h || 360;
  const padL = spec.padL || 64, padR = 22, padT = 18, padB = 48;
  const pw = W - padL - padR, ph = H - padT - padB;
  let s = `<svg class="chart" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet">`;

  if (spec.type === "bar") {
    const bars = spec.bars, max = spec.max || Math.max(...bars.map(b => b.value)) * 1.1;
    const n = bars.length, gap = 30, bw = (pw - gap * (n - 1)) / n;
    // y gridlines
    const steps = spec.ySteps || 5;
    for (let i = 0; i <= steps; i++) {
      const v = max * i / steps, y = padT + ph * (1 - i / steps);
      s += `<line class="grid" x1="${padL}" y1="${y}" x2="${padL + pw}" y2="${y}"/>`;
      s += `<text class="tick" x="${padL - 10}" y="${y + 3}" text-anchor="end">${(+v.toFixed(1))}</text>`;
    }
    bars.forEach((b, i) => {
      const x = padL + i * (bw + gap), bh = ph * (b.value / max), y = padT + ph - bh;
      s += `<rect class="bar" x="${x}" y="${y}" width="${bw}" height="${bh}"/>`;
      s += `<text class="barval" x="${x + bw / 2}" y="${y - 8}" text-anchor="middle">${b.value}${spec.unit || ""}</text>`;
      s += `<text class="barlbl" x="${x + bw / 2}" y="${padT + ph + 20}" text-anchor="middle">${b.label}</text>`;
    });
    if (spec.yLabel) s += `<text class="alabel" transform="translate(16,${padT + ph / 2}) rotate(-90)" text-anchor="middle">${spec.yLabel}</text>`;
    s += `</svg>`;
    return s;
  }

  // scatter / line — supports log Y
  const xr = spec.x, yr = spec.y;
  const xmin = xr.min, xmax = xr.max;
  const ylog = !!yr.log;
  const ly = v => ylog ? Math.log10(v) : v;
  const ymin = ly(yr.min), ymax = ly(yr.max);
  const px = x => padL + pw * (x - xmin) / (xmax - xmin);
  const py = y => padT + ph * (1 - (ly(y) - ymin) / (ymax - ymin));

  // grid + y ticks
  (yr.ticks || []).forEach(t => {
    const y = py(t);
    s += `<line class="grid" x1="${padL}" y1="${y}" x2="${padL + pw}" y2="${y}"/>`;
    const lbl = ylog ? `10^${Math.round(Math.log10(t))}` : t;
    s += `<text class="tick" x="${padL - 10}" y="${y + 3}" text-anchor="end">${ylog ? expo(t) : t}</text>`;
  });
  // x ticks
  (xr.ticks || []).forEach(t => {
    const x = px(t);
    s += `<line class="grid" x1="${x}" y1="${padT}" x2="${x}" y2="${padT + ph}"/>`;
    s += `<text class="tick" x="${x}" y="${padT + ph + 18}" text-anchor="middle">${t}</text>`;
  });
  // axes
  s += `<line class="axis" x1="${padL}" y1="${padT}" x2="${padL}" y2="${padT + ph}"/>`;
  s += `<line class="axis" x1="${padL}" y1="${padT + ph}" x2="${padL + pw}" y2="${padT + ph}"/>`;
  // line
  if (spec.line) {
    const d = spec.points.map((p, i) => `${i ? "L" : "M"}${px(p.x).toFixed(1)},${py(p.y).toFixed(1)}`).join(" ");
    s += `<path class="ln" d="${d}"/>`;
  }
  // points
  if (!spec.noPoints) spec.points.forEach(p => { s += `<circle class="pt" cx="${px(p.x).toFixed(1)}" cy="${py(p.y).toFixed(1)}" r="${spec.r || 3}"/>`; });
  // labels
  if (xr.label) s += `<text class="alabel" x="${padL + pw / 2}" y="${H - 8}" text-anchor="middle">${xr.label}</text>`;
  if (yr.label) s += `<text class="alabel" transform="translate(16,${padT + ph / 2}) rotate(-90)" text-anchor="middle">${yr.label}</text>`;
  s += `</svg>`;
  return s;

  function expo(t) {
    const e = Math.round(Math.log10(t));
    return "10" + String(e).split("").map(c => "⁰¹²³⁴⁵⁶⁷⁸⁹"[+c] || c).join("");
  }
};

/* ---------- flow / architecture diagram ---------- */
window.renderFlow = function (spec) {
  const nodes = spec.nodes.map(n =>
    `<div class="node ${n.accent || ""}">
      <span class="ntag">${n.tag}</span>
      <span class="nh">${n.h}</span>
      ${n.p ? `<span class="np">${n.p}</span>` : ""}
    </div>`).join("");
  let out = `<div class="flow${spec.loop ? " loop" : ""}">${nodes}</div>`;
  if (spec.loop && spec.returnLabel) out += `<div class="flow-return">${spec.returnLabel}</div>`;
  return out;
};

/* ---------- equations (KaTeX) ---------- */
window.renderEq = function (tex, caption) {
  let body = tex;
  try {
    if (window.katex) body = katex.renderToString(tex, { displayMode: true, throwOnError: false });
  } catch (e) { body = tex; }
  return `<div class="eqblock">${body}</div>${caption ? `<div class="eqcap">${caption}</div>` : ""}`;
};

/* ---------- scroll reveal ---------- */
window.initReveal = function () {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
  els.forEach(e => io.observe(e));
};

/* ---------- lightbox ---------- */
window.initLightbox = function () {
  if (document.getElementById("lightbox")) return;
  const lb = document.createElement("div");
  lb.className = "lightbox"; lb.id = "lightbox";
  lb.innerHTML = `<div class="lb-close" id="lbClose">Close ✕</div><div class="lb-inner"><div id="lbImg"></div></div>`;
  document.body.appendChild(lb);
  const close = () => lb.classList.remove("open");
  lb.addEventListener("click", e => { if (e.target === lb || e.target.classList.contains("lb-inner")) close(); });
  document.getElementById("lbClose").addEventListener("click", close);
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
  window.openLightbox = function (slot) {
    document.getElementById("lbImg").innerHTML = window.figure(slot, null);
    lb.classList.add("open");
  };
};
