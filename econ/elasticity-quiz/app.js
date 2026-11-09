/* =====================================================================
   Elasticity quiz: core app. Storage, router, dashboard, notes pages,
   multiple choice sessions and the calculation drill.
   Worksheets, written questions and practice tests are in app-work.js.
   ===================================================================== */
const $ = (s) => document.querySelector(s), $$ = (s) => [...document.querySelectorAll(s)];
const LET = "ABCDEF";
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
const SUBJ = "IB Economics (elasticity: PED, YED, XED, PES)";
const TOPICS = {
  ped: { n: "Price elasticity of demand", u: "PED" },
  pedd: { n: "Determinants of PED", u: "PED" },
  rev: { n: "Total revenue and elasticity", u: "Revenue" },
  yed: { n: "Income elasticity and Engel curves", u: "YED" },
  xed: { n: "Cross-price elasticity", u: "XED" },
  pes: { n: "Price elasticity of supply", u: "PES" },
  graph: { n: "Graphs and applications", u: "Diagrams" },
};
const NOTE_ORDER = ["ped", "rev", "yed", "xed", "pes", "shifts", "cheat"];

/* ---------- storage ---------- */
let store = { stats: {}, missed: [], total: 0, drill: {}, ws: {}, tests: {} };
try { const s = JSON.parse(localStorage.getItem("elast.v1") || "null"); if (s) store = Object.assign(store, s); } catch (e) {}
function save() { try { localStorage.setItem("elast.v1", JSON.stringify(store)); } catch (e) {} }
function record(topic, id, ok) {
  const s = store.stats[topic] || (store.stats[topic] = { a: 0, c: 0 });
  s.a++; if (ok) s.c++; store.total++;
  const i = store.missed.indexOf(id);
  if (!ok && i < 0) store.missed.push(id);
  if (ok && i >= 0) store.missed.splice(i, 1);
  save(); updateNav();
}

/* ---------- router ---------- */
const VIEWS = {};
const NAV = () => [
  ["Study", [["home", "Dashboard"]]],
  ["Notes", NOTE_ORDER.map((id) => ["n-" + id, NOTES[id].nav])],
  ["Practice", [["practice", "Quiz", store.missed.length], ["drill", "Calculation drill"], ["worksheets", "Worksheets"], ["written", "Written questions"]]],
  ["Test yourself", [["tests", "Practice tests"]]],
];
function buildNav() {
  $("#nav").innerHTML = NAV().map(([g, items]) => `<div class="navgroup">${g}</div>` + items.map(([h, l, c]) => `<a href="#${h}" data-v="${h}">${l}${c ? `<span class="count">${c}</span>` : ""}</a>`).join("")).join("");
}
function updateNav() {
  buildNav();
  const v = (location.hash || "#home").slice(1);
  $$("#nav a").forEach((a) => { const h = a.dataset.v; a.classList.toggle("on", h === v || (v.startsWith("ws-") && h === "worksheets") || (v.startsWith("test-") && h === "tests")); });
}
function resolve(v) {
  if (VIEWS[v]) return VIEWS[v];
  if (v.startsWith("n-") && NOTES[v.slice(2)]) return () => viewNote(v.slice(2));
  if (v.startsWith("ws-") && VIEWS.ws) return () => VIEWS.ws(v.slice(3));
  if (v.startsWith("test-") && VIEWS.test) return () => VIEWS.test(v.slice(5));
  return viewHome;
}
function render() { if (typeof onLeave === "function") onLeave(); const v = (location.hash || "#home").slice(1); PROBS = {}; resolve(v)(); updateNav(); }
function go(h) { if (location.hash === "#" + h) render(); else location.hash = "#" + h; }

/* ---------- notes ---------- */
function viewNote(id) {
  $("#view").innerHTML = NOTES[id].html();
  if (NOTES[id].init) NOTES[id].init();
}

/* ---------- dashboard ---------- */
function bankIds(topic) { return BANK.map((b, i) => b.t === topic ? i : -1).filter((i) => i >= 0); }
function shuffle(a) { return shuf(a, Math.random); }
function viewHome() {
  const tot = store.total, cor = Object.values(store.stats).reduce((a, s) => a + s.c, 0);
  const dr = Object.values(store.drill).reduce((a, s) => ({ a: a.a + s.a, c: a.c + s.c }), { a: 0, c: 0 });
  const cards = Object.keys(TOPICS).map((t) => {
    const s = store.stats[t] || { a: 0, c: 0 }, pct = s.a ? Math.round(s.c / s.a * 100) : 0;
    return `<button class="topic" type="button" data-quiz="${t}"><span class="u">${TOPICS[t].u}</span><span class="n">${TOPICS[t].n}</span><div class="bar"><i style="width:${pct}%"></i></div><span class="s"><span>${s.a ? pct + "% of " + s.a : "Not started"}</span><span>${bankIds(t).length} questions</span></span></button>`;
  }).join("");
  const notes = NOTE_ORDER.map((id, i) => `<a class="link-card" href="#n-${id}"><span class="u">Note ${i + 1}</span><b>${NOTES[id].nav}</b></a>`).join("");
  $("#view").innerHTML = `
  <div class="eyebrow">IB Economics · Elasticity</div>
  <h1>Elasticity quiz</h1>
  <p class="lede">Price, income and cross-price elasticity of demand, and price elasticity of supply. Worked examples, ${BANK.length} multiple choice questions, calculation problems that never run out, the class worksheets, and four practice tests.</p>
  <div class="hero">
    <div class="card" style="display:flex;flex-direction:column;gap:16px">
      <div class="grid3">
        <div class="stat"><b>${tot}</b><span>questions answered</span></div>
        <div class="stat"><b>${tot ? Math.round(cor / tot * 100) + "%" : "–"}</b><span>accuracy</span></div>
        <div class="stat"><b>${dr.c}</b><span>drill problems solved</span></div>
      </div>
      <div class="row"><button class="btn primary" id="qs" type="button">Quick 15 mixed</button><button class="btn" id="rv" type="button" ${store.missed.length ? "" : "disabled"}>Review ${store.missed.length || ""} mistakes</button><a class="btn ghost" href="#drill">Calculation drill</a></div>
    </div>
    <div class="test-card"><span class="eyebrow">Suggested order</span><b style="font-size:18px">Notes, then questions, then tests</b>
      <ul><li>Read a note and follow the worked examples</li><li>Quiz yourself on that topic</li><li>Do 5 calculation drills of each type</li><li>Finish the class worksheets</li><li>Sit a practice test without notes</li></ul>
      <a class="btn" href="#tests">Practice tests</a></div>
  </div>
  <h2>Practice by topic</h2><div class="grid3">${cards}</div>
  <h2>Notes with worked examples</h2><div class="grid3">${notes}</div>
  <h2>Worksheets and tests</h2>
  <div class="grid3"><a class="link-card" href="#worksheets"><span class="u">Class handouts</span><b>Worksheets</b><span>PED worksheet, income elasticity practice, Engel curve, supply shifts</span></a>
  <a class="link-card" href="#written"><span class="u">IB style</span><b>Written questions</b><span>Explain and calculate, with model answers and AI grading</span></a>
  <a class="link-card" href="#tests"><span class="u">Timed</span><b>Practice tests A–D</b><span>15 multiple choice, 5 calculations, 2 written</span></a></div>`;
  $("#qs").onclick = () => startQuiz(Object.keys(TOPICS), 15, "Quick 15 mixed");
  $("#rv").onclick = () => startQuiz(null, 0, "Review mistakes", store.missed.slice());
}

/* ---------- multiple choice sessions ---------- */
let S = null, setup = { topics: ["ped", "rev", "yed", "pes"], n: 20 };
function buildPool(topics, n) {
  const lists = topics.map((t) => shuffle(bankIds(t))), out = []; let k = 0;
  while ((!n || out.length < n) && lists.some((l) => l.length)) { const l = lists[k % lists.length]; if (l.length) out.push(l.shift()); k++; }
  return shuffle(out);
}
function startQuiz(topics, n, label, ids) {
  ids = ids || buildPool(topics, n);
  if (!ids.length) return;
  S = { ids, i: 0, label: label || "Practice set", res: [], cur: null, answered: false };
  go("practice");
}
function viewPractice() {
  if (S) return renderQuiz();
  $("#view").innerHTML = `<div class="eyebrow">Practice</div><h1>Build a question set</h1>
  <div class="card" style="display:flex;flex-direction:column;gap:18px">
    <div><div class="label">Topics</div><div class="chips" id="tp">${Object.keys(TOPICS).map((t) => `<button class="chip" type="button" data-t="${t}" aria-pressed="${setup.topics.includes(t)}">${TOPICS[t].n} · ${bankIds(t).length}</button>`).join("")}</div></div>
    <div><div class="label">Length</div><div class="seg" id="len">${[10, 20, 40, 0].map((n) => `<button type="button" data-n="${n}" aria-pressed="${setup.n === n}">${n || "All"}</button>`).join("")}</div></div>
    <div class="row"><button class="btn ghost" id="all" type="button">Select all topics</button><button class="btn primary" id="go" type="button">Start</button></div>
  </div>`;
  $$("#tp .chip").forEach((b) => b.onclick = () => { const t = b.dataset.t, i = setup.topics.indexOf(t); if (i >= 0) setup.topics.splice(i, 1); else setup.topics.push(t); b.setAttribute("aria-pressed", i < 0); });
  $$("#len button").forEach((b) => b.onclick = () => { setup.n = +b.dataset.n; $$("#len button").forEach((x) => x.setAttribute("aria-pressed", x === b)); });
  $("#all").onclick = () => { setup.topics = Object.keys(TOPICS); $$("#tp .chip").forEach((b) => b.setAttribute("aria-pressed", true)); };
  $("#go").onclick = () => { if (setup.topics.length) startQuiz(setup.topics.slice(), setup.n, "Practice set"); };
}
VIEWS.practice = viewPractice;
function prepare() {
  const b = BANK[S.ids[S.i]];
  const ord = shuffle(b.o.map((t, i) => ({ t, c: i === 0 })));
  S.cur = { id: S.ids[S.i], t: b.t, q: b.q, o: ord.map((x) => x.t), a: ord.findIndex((x) => x.c), e: b.e };
  S.answered = false;
}
function renderQuiz() {
  if (!S.cur) prepare();
  const q = S.cur, n = S.ids.length;
  $("#view").innerHTML = `
  <div class="qhead"><span class="qtag">${esc(S.label)} · ${S.i + 1} of ${n}</span><div class="progress"><i style="width:${(S.i / n) * 100}%"></i></div><button class="btn ghost small" id="quit" type="button">End session</button></div>
  <div class="card" style="display:flex;flex-direction:column;gap:18px"><span class="qtag">${TOPICS[q.t].u} · ${TOPICS[q.t].n}</span><div class="qtext">${esc(q.q)}</div>
    <div class="opts">${q.o.map((o, j) => `<button class="opt" type="button" data-j="${j}"><span class="k">${LET[j]}</span><span style="min-width:0;flex:1">${esc(o)}</span></button>`).join("")}</div></div>
  <div id="fb"></div>
  <div class="qfoot"><span class="small muted">Keys: <span class="kbd">A</span>–<span class="kbd">D</span> or <span class="kbd">1</span>–<span class="kbd">4</span> to answer, <span class="kbd">Enter</span> for next</span><button class="btn primary" id="next" type="button" disabled>Next question</button></div>`;
  $$(".opt").forEach((b) => b.onclick = () => answer(+b.dataset.j));
  $("#next").onclick = nextQ; $("#quit").onclick = finish;
}
function answer(j) {
  if (S.answered) return; S.answered = true;
  const q = S.cur, ok = j === q.a;
  S.res.push({ id: q.id, ok, t: q.t, q: q.q }); record(q.t, q.id, ok);
  $$(".opt").forEach((b, k) => { b.disabled = true; if (k === q.a) b.classList.add("right"); else if (k === j) b.classList.add("wrong"); else b.classList.add("dim"); });
  $("#fb").innerHTML = `<div class="feedback ${ok ? "ok" : "no"}"><div class="verdict">${ok ? "Correct" : "Not quite. The answer is " + LET[q.a]}</div>
    <div class="why"><h4>${ok ? "Why" : "Why " + LET[q.a] + " is correct"}</h4><p>${esc(q.e)}</p></div>
    ${ok ? "" : AskAI.box({ subject: SUBJ, question: q.q, options: q.o, correct: q.a, picked: j, explanation: q.e })}</div>`;
  const nb = $("#next"); nb.disabled = false; nb.textContent = S.i + 1 >= S.ids.length ? "See results" : "Next question"; nb.focus();
}
function nextQ() { if (!S.answered) return; S.i++; if (S.i >= S.ids.length) { finish(); return; } S.cur = null; renderQuiz(); window.scrollTo({ top: 0 }); }
function finish() {
  const res = S.res, c = res.filter((x) => x.ok).length, n = res.length, label = S.label; S = null;
  const by = {}; res.forEach((x) => { (by[x.t] = by[x.t] || { a: 0, c: 0 }).a++; if (x.ok) by[x.t].c++; });
  const miss = res.filter((x) => !x.ok);
  $("#view").innerHTML = `<div class="eyebrow">Session complete</div><h1>${esc(label)}</h1>
  <div class="card row" style="justify-content:space-between;gap:24px"><div><div class="score">${n ? Math.round(c / n * 100) : 0}%</div><div class="muted">${c} of ${n} correct</div></div>
  <div style="flex:1;min-width:220px;display:flex;flex-direction:column;gap:10px">${Object.keys(by).map((t) => `<div><div class="row small" style="justify-content:space-between"><span>${TOPICS[t].n}</span><span class="mono">${by[t].c}/${by[t].a}</span></div><div class="bar"><i style="width:${by[t].c / by[t].a * 100}%"></i></div></div>`).join("")}</div></div>
  ${miss.length ? `<div class="row" style="justify-content:space-between"><h2>Questions you missed</h2><button class="btn primary" id="retry" type="button">Retry these ${miss.length}</button></div><div class="missed">${miss.map((x) => `<div>${esc(x.q)}</div>`).join("")}</div>` : `<div class="callout">Clean sheet. Try a longer set, or move on to a practice test.</div>`}
  <div class="row"><button class="btn" id="again" type="button">New practice set</button><a class="btn ghost" href="#home">Dashboard</a></div>`;
  if (miss.length) $("#retry").onclick = () => startQuiz(null, 0, "Retry missed", miss.map((x) => x.id));
  $("#again").onclick = () => go("practice");
  updateNav();
}
document.addEventListener("keydown", (e) => {
  if (!S || (location.hash || "#home") !== "#practice" || e.target.closest("input,textarea,select")) return;
  if (S.answered) { if (e.key === "Enter") nextQ(); return; }
  const k = "abcd".indexOf(e.key.toLowerCase()), d = "1234".indexOf(e.key), j = k >= 0 ? k : d;
  if (j >= 0 && j < S.cur.o.length) answer(j);
});

/* ---------- problem cards (drill, worksheets, tests) ---------- */
let PROBS = {};
function fieldHtml(pre, f) {
  const id = `${pre}_${f.k}`;
  if (f.type === "sel") return `<label class="f">${f.label}<select id="${id}"><option value="">Choose…</option>${f.opts.map(([v, t]) => `<option value="${v}">${esc(t)}</option>`).join("")}</select></label>`;
  return `<label class="f">${f.label}<input type="number" step="any" id="${id}" autocomplete="off"></label>`;
}
function probCard(p, pre, o) {
  PROBS[pre] = p; o = o || {};
  return `<div class="card prob" id="card_${pre}">${o.label ? `<span class="num">${o.label}</span>` : ""}${p.context ? `<div class="ctx">${p.context}</div>` : ""}<div class="prompt">${p.q}</div>
  ${p.draw ? `<div class="qfig">${ELD.blank("Income", "Quantity of potatoes")}</div>` : ""}
  <div class="fields">${p.fields.map((f) => fieldHtml(pre, f)).join("")}</div>
  ${o.noCheck ? "" : `<div class="row"><button class="btn primary" type="button" data-check="${pre}">Check</button></div>`}<div class="expl" id="ex_${pre}" hidden></div></div>`;
}
function valOk(ans, raw, tol, alt) {
  if (raw === "" || raw == null) return false;
  if (ans && typeof ans === "object" && !Array.isArray(ans)) { const v = parseFloat(raw); if (isNaN(v)) return false; if ("gt" in ans) return v > ans.gt; if ("lt" in ans) return v < ans.lt; if ("eq" in ans) return Math.abs(v - ans.eq) <= (tol || 0.03); return false; }
  if (typeof ans === "number") { const v = parseFloat(raw); if (isNaN(v)) return false; return Math.abs(v - ans) <= (tol || 0.03) || (alt != null && Math.abs(v - alt) <= (tol || 0.03)); }
  if (Array.isArray(ans)) return ans.includes(raw);
  return raw === ans;
}
function ansText(p, vals) {
  return p.fields.map((f) => {
    const a = vals ? vals[f.k] : p.ans[f.k];
    if (f.type === "sel") { const hit = f.opts.find((o) => o[0] === (Array.isArray(a) ? a[0] : a)); return `${f.label.replace("…", "")} ${hit ? hit[1] : "(no answer)"}`; }
    if (!vals && a && typeof a === "object") return `${f.label}: any ${"gt" in a ? "number above " + a.gt : "lt" in a ? "number below " + a.lt : a.eq}`;
    return `${f.label}: ${a === "" || a == null ? "(no answer)" : a}`;
  }).join("; ");
}
/* marks the inputs and returns { ok, vals } */
function gradeProb(p, pre) {
  let ok = true; const vals = {};
  p.fields.forEach((f) => {
    const el = document.getElementById(`${pre}_${f.k}`); if (!el) return;
    vals[f.k] = el.value;
    const good = valOk(p.ans[f.k], el.value, p.tol, f.k === "val" ? p.alt : null);
    el.classList.remove("right", "wrongf"); el.classList.add(good ? "right" : "wrongf"); ok = ok && good;
    el.oninput = el.onchange = () => el.classList.remove("right", "wrongf");
  });
  return { ok, vals };
}
function revFig(p) { if (!p.fig || typeof p.fig !== "object") return ""; const f = p.fig; return `<div class="qfig">${ELD.revenueBoxes(f.p1, f.q1, f.p2, f.q2, Math.ceil(Math.max(f.p1, f.p2) * 1.2), Math.ceil(Math.max(f.q1, f.q2) * 1.2))}</div>`; }
function showExpl(p, pre, g, extra) {
  const ex = document.getElementById("ex_" + pre); ex.hidden = false; ex.className = "expl " + (g.ok ? "good" : "bad");
  ex.innerHTML = `<span class="verdict ${g.ok ? "good" : "bad"}">${g.ok ? "Correct." : "Not quite."}</span><div>${p.steps}</div>${revFig(p)}${p.fig === "engel" ? `<div class="qfig">${ELD.engel(false)}</div>` : ""}${p.fig === "markets" ? `<div class="grid2"><div class="qfig">${CARS.svg}</div><div class="qfig">${CHOC.svg}</div></div><p class="small muted">Left: sports cars (elastic). Right: chocolate (inelastic). Same leftward shift of supply in both.</p>` : ""}${extra || ""}${g.ok ? "" : AskAI.box({ subject: SUBJ, question: p.q, correct: ansText(p), picked: ansText(p, g.vals), explanation: p.steps.replace(/<[^>]+>/g, "") })}`;
}
const PROBCB = {};
document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-check]");
  if (t) { const pre = t.dataset.check, p = PROBS[pre]; if (!p) return; const g = gradeProb(p, pre); showExpl(p, pre, g); if (PROBCB[pre]) PROBCB[pre](g.ok); return; }
  const qz = e.target.closest("[data-quiz]");
  if (qz) { const topic = qz.dataset.quiz; startQuiz([topic], 0, TOPICS[topic].n); return; }
  const dr = e.target.closest("[data-drill]");
  if (dr) { drill.kind = dr.dataset.drill; drill.p = null; go("drill"); }
});

/* ---------- calculation drill ---------- */
const drill = { kind: "ped", p: null, seed: 0 };
function newDrill() {
  const ks = CALC_KINDS[drill.kind].kinds;
  drill.seed = 1 + Math.floor(Math.random() * 2e9);
  drill.p = gen(ks[Math.floor(Math.random() * ks.length)], drill.seed); drill.done = false;
}
function viewDrill() {
  if (!drill.p) newDrill();
  const s = store.drill[drill.kind] || { a: 0, c: 0 };
  $("#view").innerHTML = `<div class="eyebrow">Practice</div><h1>Calculation drill</h1>
  <p class="lede">Endless generated problems with fresh numbers every time. Work it out on paper, type the answer, then read the worked solution. Use the IB method: percent changes from the starting value.</p>
  <div class="chips" id="dk">${Object.keys(CALC_KINDS).map((k) => `<button class="chip" type="button" data-k="${k}" aria-pressed="${k === drill.kind}">${CALC_KINDS[k].name}</button>`).join("")}</div>
  <div class="row small muted"><span>This type: <b class="mono">${s.c}/${s.a}</b> solved first try</span></div>
  ${probCard(drill.p, "dr", { label: CALC_KINDS[drill.kind].name })}
  <div class="row"><button class="btn" id="nd" type="button">New problem</button></div>`;
  PROBCB.dr = (ok) => { if (drill.done) return; drill.done = true; const r = store.drill[drill.kind] || (store.drill[drill.kind] = { a: 0, c: 0 }); r.a++; if (ok) r.c++; save(); };
  $$("#dk .chip").forEach((b) => b.onclick = () => { drill.kind = b.dataset.k; drill.p = null; viewDrill(); });
  $("#nd").onclick = () => { newDrill(); viewDrill(); window.scrollTo({ top: 0 }); };
}
VIEWS.drill = viewDrill;

/* ---------- start ---------- */
function start() {
  window.addEventListener("hashchange", () => { render(); window.scrollTo({ top: 0 }); });
  $("#themeBtn").onclick = () => { const r = document.documentElement, cur = r.getAttribute("data-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"); r.setAttribute("data-theme", cur === "dark" ? "light" : "dark"); };
  render();
}
