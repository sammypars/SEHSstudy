/* =====================================================================
   Elasticity quiz: worksheets, written questions and practice tests.
   Loaded after app.js (uses its helpers: probCard, gradeProb, showExpl...).
   ===================================================================== */
let TIMER = null, TEST = null;
function onLeave() { if (TIMER) { clearInterval(TIMER); TIMER = null; } TEST = null; }

/* ---------- written questions (shared by the written page, worksheets, tests) ---------- */
function writtenCard(idx, pre, label) {
  const w = WRITTEN[idx];
  return `<div class="card prob" id="wc_${pre}"><span class="num">${label || "Written question"} · ${w.marks} marks</span><div class="prompt">${w.q}</div>
  <textarea id="wt_${pre}" placeholder="Write your answer here, or on paper" aria-label="Your answer"></textarea>
  <div class="row"><button class="btn primary" type="button" data-wr="show" data-pre="${pre}" data-i="${idx}">Show model answer</button><button class="btn" type="button" data-wr="grade" data-pre="${pre}" data-i="${idx}">Grade with AI</button></div>
  <div id="wg_${pre}"></div><div id="wm_${pre}" hidden></div></div>`;
}
function writtenModel(idx, pre) {
  const w = WRITTEN[idx], saved = (store.ws.written || {})[idx] || 0;
  return `<div class="expl"><div class="why"><h4>Model answer</h4><p>${w.model}</p></div>
  <div class="why"><h4>Mark yourself: tick each point you made</h4><div class="pts">${w.points.map((p, k) => `<label><input type="checkbox" data-pt="${pre}" data-i="${idx}"> <span>${p}</span></label>`).join("")}</div></div>
  <div class="small"><b>Your score:</b> <span class="mono" id="ws_${pre}">0 / ${w.marks}</span></div></div>`;
}
document.addEventListener("click", (e) => {
  const b = e.target.closest("[data-wr]"); if (!b) return;
  const pre = b.dataset.pre, idx = +b.dataset.i, w = WRITTEN[idx];
  if (b.dataset.wr === "show") { const m = document.getElementById("wm_" + pre); m.hidden = false; m.innerHTML = writtenModel(idx, pre); m.scrollIntoView({ block: "nearest", behavior: "smooth" }); return; }
  const text = (document.getElementById("wt_" + pre).value || "").trim(), box = document.getElementById("wg_" + pre);
  if (!text) { box.innerHTML = `<div class="callout">Type your answer in the box first, then press Grade with AI.</div>`; return; }
  const prompt = `I'm an IB Economics student studying elasticity. Please mark my answer to this question out of ${w.marks}.\n\nQuestion: ${w.q}\n\nMy answer: ${text}\n\nMarking points:\n${w.points.map((p, k) => `${k + 1}. ${p}`).join("\n")}\n\nTell me my score, which marking points I earned, and exactly what to add or fix. Keep it short and use IB Economics terms.`;
  box.innerHTML = AskAI.box({ lang: "en", subject: SUBJ, prompt, title: "Grade my answer with AI", sub: "Opens an AI tutor with your answer and the marking points already loaded." });
});
document.addEventListener("change", (e) => {
  const c = e.target.closest("[data-pt]"); if (!c) return;
  const pre = c.dataset.pt, idx = +c.dataset.i, w = WRITTEN[idx];
  const n = Math.min(w.marks, document.querySelectorAll(`[data-pt="${pre}"]:checked`).length);
  document.getElementById("ws_" + pre).textContent = `${n} / ${w.marks}`;
  (store.ws.written || (store.ws.written = {}))[idx] = Math.max(n, (store.ws.written[idx] || 0)); save();
  if (TEST && TEST.submitted && document.getElementById("tsum")) testTotal();
});

VIEWS.written = () => {
  $("#view").innerHTML = `<div class="eyebrow">Practice</div><h1>Written questions</h1>
  <p class="lede">IB-style explain and calculate questions. Write your answer, compare it with the model answer and tick the marking points you earned, or send your answer to an AI tutor to be graded.</p>
  ${WRITTEN.map((w, i) => writtenCard(i, "w" + i, "Question " + (i + 1))).join("")}`;
};

/* ---------- worksheets ---------- */
VIEWS.worksheets = () => {
  $("#view").innerHTML = `<div class="eyebrow">Practice</div><h1>Class worksheets</h1>
  <p class="lede">The handouts, turned into checkable problems with worked solutions.</p>
  <div class="grid2">${WORKSHEETS.map((w) => {
    const done = Object.keys(store.ws[w.id] || {}).length, n = w.items.length;
    return `<a class="link-card" href="#ws-${w.id}"><span class="u">${done} of ${n} solved</span><b>${w.title}</b><span>${w.sub}</span></a>`;
  }).join("")}</div>`;
};
VIEWS.ws = (id) => {
  const w = WORKSHEETS.find((x) => x.id === id); if (!w) return VIEWS.worksheets();
  const got = store.ws[id] || (store.ws[id] = {});
  const n = w.items.length;
  $("#view").innerHTML = `<div class="eyebrow">Worksheet</div><h1>${w.title}</h1><p class="lede">${w.sub}</p>
  ${w.context ? `<div class="ctx">${w.context}</div>` : ""}
  <div class="sticky-score"><span class="chipx" id="wsscore">${Object.keys(got).length} of ${n} solved</span><a class="btn ghost small" href="#worksheets">All worksheets</a></div>
  ${w.items.map((it, i) => probCard(it, `ws_${id}_${i}`, { label: (w.id === "engel" ? "" : "Problem ") + it.n })).join("")}
  ${w.written != null ? writtenCard(w.written, "wsw" + id, w.id === "ped" ? "Problem 7" : "Explain it in words") : ""}`;
  w.items.forEach((it, i) => { PROBCB[`ws_${id}_${i}`] = (ok) => { if (ok) { got[i] = true; save(); } $("#wsscore").textContent = `${Object.keys(got).length} of ${n} solved`; }; });
};

/* ---------- practice tests ---------- */
VIEWS.tests = () => {
  $("#view").innerHTML = `<div class="eyebrow">Test yourself</div><h1>Practice tests</h1>
  <p class="lede">Each test has 15 multiple choice questions, 5 calculations and 2 written questions, with nothing checked until you submit. Leaving the page resets a test in progress. Try one with your notes closed.</p>
  <div class="grid2">${TESTS.map((t) => { const r = store.tests[t.id]; return `<a class="link-card" href="#test-${t.id}"><span class="u">${t.minutes} minutes</span><b>${t.name}</b><span>${r ? `Best ${r.best}% · last ${r.last}%` : "Not attempted"}</span></a>`; }).join("")}</div>`;
};
VIEWS.test = (L) => {
  const i = TESTS.findIndex((t) => t.id === L); if (i < 0) return VIEWS.tests();
  const meta = TESTS[i], b = buildTest(i);
  const mcQs = b.mc.map((k) => { const q = BANK[k], ord = shuffle(q.o.map((t, j) => ({ t, c: j === 0 }))); return { id: k, t: q.t, q: q.q, o: ord.map((x) => x.t), a: ord.findIndex((x) => x.c), e: q.e }; });
  const probs = b.calc.map((c) => gen(c.kind, c.seed));
  TEST = { i, meta, mcQs, probs, wr: b.wr, submitted: false };
  $("#view").innerHTML = `<div class="eyebrow">Practice test · ${meta.minutes} minutes</div><h1>${meta.name}</h1>
  <div class="sticky-score"><span class="chipx" id="tans">0 of ${mcQs.length} MC answered</span><span class="chipx" id="ttime">${meta.minutes}:00</span><button class="btn small" id="tstart" type="button">Start timer</button><a class="btn ghost small" href="#tests">All tests</a></div>
  <div id="tsum"></div>
  <h2>Part 1 · Multiple choice</h2>
  ${mcQs.map((q, n) => `<div class="card prob" id="tm${n}"><span class="num">Question ${n + 1} of ${mcQs.length}</span><div class="prompt">${esc(q.q)}</div>
    <div class="opts">${q.o.map((o, j) => `<label class="opt"><input type="radio" name="tm${n}" value="${j}"><span class="k">${LET[j]}</span><span style="min-width:0;flex:1">${esc(o)}</span></label>`).join("")}</div><div id="tmx${n}"></div></div>`).join("")}
  <h2>Part 2 · Calculations</h2>
  ${probs.map((p, j) => probCard(p, `tc${j}`, { label: "Calculation " + (j + 1), noCheck: true })).join("")}
  <h2>Part 3 · Written</h2>
  ${b.wr.map((k, j) => `<div class="card prob" id="twc${j}"><span class="num">Written ${j + 1} · ${WRITTEN[k].marks} marks</span><div class="prompt">${WRITTEN[k].q}</div><textarea id="twt${j}" aria-label="Your answer" placeholder="Write your answer here, or on paper"></textarea><div id="twm${j}"></div></div>`).join("")}
  <div class="row"><button class="btn primary" id="tsubmit" type="button">Submit test</button><span class="small muted">You can still change answers until you submit.</span></div>`;
  $$("#view label.opt input").forEach((inp) => inp.onchange = () => {
    if (TEST.submitted) return;
    inp.closest(".opts").querySelectorAll(".opt").forEach((l) => l.classList.toggle("picked", l.contains(inp) && inp.checked));
    $("#tans").textContent = `${$$("#view .card input[type=radio]:checked").length} of ${mcQs.length} MC answered`;
  });
  $("#tstart").onclick = () => {
    if (TIMER) { clearInterval(TIMER); TIMER = null; $("#tstart").textContent = "Start timer"; return; }
    let left = meta.minutes * 60; $("#tstart").textContent = "Pause timer";
    TIMER = setInterval(() => { left--; const m = Math.floor(Math.max(left, 0) / 60), s = Math.max(left, 0) % 60; $("#ttime").textContent = left > 0 ? `${m}:${String(s).padStart(2, "0")}` : "Time's up"; if (left <= 0) { clearInterval(TIMER); TIMER = null; } }, 1000);
  };
  $("#tsubmit").onclick = submitTest;
};
function submitTest() {
  if (!TEST || TEST.submitted) return;
  const T = TEST; T.submitted = true;
  if (TIMER) { clearInterval(TIMER); TIMER = null; }
  let mc = 0, calc = 0;
  T.mcQs.forEach((q, n) => {
    const box = $("#tm" + n), pick = box.querySelector("input:checked"), j = pick ? +pick.value : -1, ok = j === q.a; if (ok) mc++;
    record(q.t, q.id, ok);
    box.querySelectorAll(".opt").forEach((l, k) => { l.classList.add("locked"); l.querySelector("input").disabled = true; l.classList.remove("picked"); if (k === q.a) l.classList.add("right"); else if (k === j) l.classList.add("wrong"); });
    $("#tmx" + n).innerHTML = `<div class="expl ${ok ? "good" : "bad"}"><span class="verdict ${ok ? "good" : "bad"}">${ok ? "Correct." : j < 0 ? "No answer. The answer is " + LET[q.a] + "." : "Not quite. The answer is " + LET[q.a] + "."}</span><div>${esc(q.e)}</div>${ok ? "" : AskAI.box({ subject: SUBJ, question: q.q, options: q.o, correct: q.a, picked: j < 0 ? null : j, explanation: q.e })}</div>`;
  });
  T.probs.forEach((p, j) => { const pre = "tc" + j, g = gradeProb(p, pre); if (g.ok) calc++; showExpl(p, pre, g); });
  T.wr.forEach((k, j) => {
    $("#twt" + j).readOnly = true;
    $("#twm" + j).innerHTML = `<div id="twh${j}"></div>` + writtenModel(k, "tw" + j) + `<div class="row" style="margin-top:8px"><button class="btn small" type="button" data-wr="grade" data-pre="twg${j}" data-i="${k}">Grade with AI</button></div><div id="wg_twg${j}"></div>`;
  });
  // the AI grade button reads its text from wt_<pre>; point it at the test's textarea
  T.wr.forEach((k, j) => { const ta = $("#twt" + j); ta.id = "wt_twg" + j; });
  T.auto = { mc, calc };
  $("#tsubmit").disabled = true;
  testTotal(true);
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function testTotal(first) {
  const T = TEST, wmax = T.wr.reduce((a, k) => a + WRITTEN[k].marks, 0), autoMax = T.mcQs.length + T.probs.length;
  const wscore = T.wr.reduce((a, k, j) => a + Math.min(WRITTEN[k].marks, document.querySelectorAll(`[data-pt="tw${j}"]:checked`).length), 0);
  const total = T.auto.mc + T.auto.calc + wscore, max = autoMax + wmax, pct = Math.round(total / max * 100);
  $("#tsum").innerHTML = `<div class="card row" style="justify-content:space-between;gap:24px"><div><div class="score">${pct}%</div><div class="muted">${total} of ${max} marks</div></div>
  <div style="flex:1;min-width:220px;display:flex;flex-direction:column;gap:8px"><div class="row small" style="justify-content:space-between"><span>Multiple choice</span><span class="mono">${T.auto.mc} / ${T.mcQs.length}</span></div>
  <div class="row small" style="justify-content:space-between"><span>Calculations (all parts right)</span><span class="mono">${T.auto.calc} / ${T.probs.length}</span></div>
  <div class="row small" style="justify-content:space-between"><span>Written (self-marked)</span><span class="mono">${wscore} / ${wmax}</span></div>
  <p class="small muted">Tick the marking points under each written answer to update your total. Scroll down to read every explanation.</p></div></div>
  <div class="row"><a class="btn primary" href="#test-${T.meta.id}" onclick="setTimeout(render,0)">Retake this test</a><a class="btn ghost" href="#tests">All tests</a></div>`;
  const r = store.tests[T.meta.id] || { best: 0, last: 0 }; r.last = pct; r.best = Math.max(r.best, pct); store.tests[T.meta.id] = r; save();
  if (first) $("#tans").textContent = "Submitted";
}
