/* =====================================================================
   Calculation problems for the elasticity quiz.
   Part 1: random problem generators (PED, YED, XED, PES, total revenue).
           gen(kind, seed) always returns the same problem for the same seed,
           so a practice test can be fixed while drills stay endless.
   Part 2 (further down): the class worksheets, the written-question bank,
           and the four practice tests (TESTS, buildTest).

   A problem looks like:
     { kind, q: "html prompt", fields: [{k, label, type: "num"|"sel", opts?}],
       ans: { k: number | string | [accepted...] }, tol, steps: "html worked solution" }
   ===================================================================== */
function rng(seed) { let a = seed >>> 0; return function () { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
const pick = (r, a) => a[Math.floor(r() * a.length)];
function shuf(a, r) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
const r2 = (x) => Math.round(x * 100) / 100;
const isInt = (x) => Math.abs(x - Math.round(x)) < 1e-9;
const money = (x) => "$" + (Number.isInteger(x) ? x.toLocaleString("en-US") : x.toFixed(2));
const sgn = (x) => (x > 0 ? "+" : x < 0 ? "−" : "") + Math.abs(x);
const mn = (x) => String(x).replace("-", "−");
const par = (x) => x < 0 ? "(−" + Math.abs(x) + ")" : String(x);
const num = (x) => Number.isInteger(x) ? x.toLocaleString("en-US") : String(r2(x));

const PED_OPTS = [["elastic", "Elastic (greater than 1)"], ["inelastic", "Inelastic (less than 1)"], ["unit", "Unit elastic (exactly 1)"]];
const PES_OPTS = [["elastic", "Elastic (greater than 1)"], ["inelastic", "Inelastic (less than 1)"], ["unit", "Unit elastic (exactly 1)"], ["zero", "Perfectly inelastic (0)"]];
const YED_OPTS = [["inferior", "Inferior good (negative YED)"], ["zero", "Zero YED (income has no effect)"], ["necessity", "Normal good, income inelastic (between 0 and 1)"], ["unit", "Normal good, unit income elastic (exactly 1)"], ["luxury", "Normal good, income elastic (greater than 1)"]];
const XED_OPTS = [["sub", "Substitutes (positive XED)"], ["comp", "Complements (negative XED)"], ["none", "Unrelated (XED close to 0)"]];
const REV_OPTS = [["elastic", "Elastic"], ["inelastic", "Inelastic"], ["unit", "Unit elastic"]];

const cls = {
  ped: (v) => { v = Math.abs(v); return Math.abs(v - 1) < 1e-9 ? "unit" : v > 1 ? "elastic" : "inelastic"; },
  pes: (v) => v === 0 ? "zero" : Math.abs(v - 1) < 1e-9 ? "unit" : v > 1 ? "elastic" : "inelastic",
  yed: (v) => v < 0 ? "inferior" : v === 0 ? "zero" : Math.abs(v - 1) < 1e-9 ? "unit" : v > 1 ? "luxury" : "necessity",
  xed: (v) => v > 0.2 ? "sub" : v < -0.2 ? "comp" : "none",
};
const WORD = { elastic: "elastic", inelastic: "inelastic", unit: "unit elastic", zero: "perfectly inelastic", inferior: "an inferior good", luxury: "a normal good that is income elastic (a luxury)", necessity: "a normal good that is income inelastic (a necessity)", sub: "substitutes", comp: "complements", none: "unrelated" };

const G_PED = ["gasoline", "butter", "haircuts", "personal computers", "movie tickets", "bottled water", "pizza slices", "concert tickets", "bus rides", "coffee", "video games", "sneakers", "gym passes", "strawberries", "headphones", "electricity", "salt", "cruise holidays"];
const G_PES = ["wheat", "smartphones", "pizzas", "T-shirts", "apartments in a small town", "wind turbines", "bicycles", "concert tickets", "bread", "laptops", "cocoa", "oranges"];
const G_YED_NEG = ["instant noodles", "bus rides", "store-brand cereal", "second-hand clothes", "canned beans"];
const G_YED_NEC = ["bread", "electricity", "milk", "toothpaste", "basic phone plans"];
const G_YED_LUX = ["restaurant meals", "foreign holidays", "designer clothes", "organic food", "sports cars", "gym memberships"];
const PAIRS_SUB = [["Pepsi", "Coke"], ["butter", "margarine"], ["tea", "coffee"], ["rideshare trips", "taxi rides"], ["streaming subscriptions", "cinema tickets"], ["Brand X cereal", "Brand Y cereal"]];
const PAIRS_COMP = [["printers", "printer ink"], ["cars", "gasoline"], ["hot dogs", "hot dog buns"], ["tennis rackets", "tennis balls"], ["smartphones", "phone cases"], ["video game consoles", "video games"]];
const PAIRS_NONE = [["bread", "laptops"], ["salt", "bicycles"], ["haircuts", "printer ink"]];

/* find numbers that come out clean; retries until the filter passes */
var FIND_MISS = 0;
function find(r, fn) { for (let i = 0; i < 400; i++) { const x = fn(); if (x) return x; } FIND_MISS++; return null; }

/* ---------- PED / PES ---------- */
function genElastic(kind, form, seed) {
  const r = rng(seed), supply = kind === "pes";
  const good = pick(r, supply ? G_PES : G_PED);
  const Es = supply ? [0.25, 0.5, 0.8, 1, 1.2, 1.5, 2, 3, 4] : [0.2, 0.4, 0.5, 0.6, 0.8, 1, 1.25, 1.5, 2, 2.5, 3];
  const E = pick(r, Es), up = r() < 0.6;
  const sign = up ? 1 : -1, name = supply ? "PES" : "PED", qn = supply ? "quantity supplied" : "quantity demanded";
  const qDir = supply ? sign : -sign;           // direction Q moves
  const up_ = (x) => x > 0 ? "rose" : "fell";
  let q, steps, P1, P2, Q1, Q2, pctP, pctQ, val;
  if (form === "pct") {
    const hit = find(r, () => { const p = pick(r, [4, 5, 6, 8, 10, 12, 15, 20, 25, 30, 40]); const v = E * p; return isInt(v) && v <= 90 ? p : 0; });
    pctP = hit || 10; pctQ = Math.round(E * pctP); val = r2(pctQ / pctP);
    q = `When the price of ${good} ${up ? "increased" : "decreased"} by ${pctP}%, the ${qn} of ${good} ${up_(qDir)} by ${pctQ}%. Calculate the ${name} and say whether ${supply ? "supply" : "demand"} is elastic or inelastic.`;
    steps = `${name} = %Δ${supply ? "Qs" : "Qd"} ÷ %ΔP = ${pctQ} ÷ ${pctP} = <b>${val}</b>. ` + (supply ? "" : "(Ignore the minus sign.) ");
  } else {
    const f = find(r, () => {
      const p1 = pick(r, [4, 5, 8, 10, 12, 20, 25, 40, 50]), pc = pick(r, [10, 20, 25, 50]);
      const p2 = p1 * (1 + sign * pc / 100), q1 = pick(r, [100, 200, 400, 500, 800, 1000, 1500, 2000]);
      const q2 = q1 * (1 + qDir * E * pc / 100);
      if (!(isInt(p2 * 2) && isInt(q2) && q2 > 0)) return null;
      return { p1, p2, q1, q2, pc };
    }) || { p1: 10, p2: 12, q1: 1000, q2: 800, pc: 20 };
    P1 = f.p1; P2 = f.p2; Q1 = f.q1; Q2 = Math.round(f.q2);
    pctP = r2((P2 - P1) / P1 * 100); pctQ = r2((Q2 - Q1) / Q1 * 100);
    const E2 = r2(Math.abs(pctQ) / Math.abs(pctP));
    val = E2;
    q = `The price of ${good} ${up ? "increases" : "decreases"} from ${money(P1)} to ${money(P2)}. The ${qn} ${up_(Q2 - Q1)} from ${num(Q1)} to ${num(Q2)}. Calculate the ${name} and say whether ${supply ? "supply" : "demand"} is elastic or inelastic.`;
    steps = `%ΔP = (${num(P2)} − ${num(P1)}) ÷ ${num(P1)} = ${sgn(pctP)}%. %Δ${supply ? "Qs" : "Qd"} = (${num(Q2)} − ${num(Q1)}) ÷ ${num(Q1)} = ${sgn(pctQ)}%. ${name} = ${Math.abs(pctQ)} ÷ ${Math.abs(pctP)} = <b>${E2}</b>. `;
  }
  const c = (supply ? cls.pes : cls.ped)(val);
  steps += `${val > 1 ? "Greater than" : val < 1 ? "Less than" : "Equal to"} 1, so ${supply ? "supply" : "demand"} is <b>${WORD[c]}</b>.` + (form === "val" && !supply ? ` (The midpoint method divides by the average instead of the start value; the IB course uses the start value.)` : "");
  return { kind, form, q, fields: [{ k: "val", label: `${name} (2 decimal places)`, type: "num" }, { k: "cls", label: supply ? "Supply is…" : "Demand is…", type: "sel", opts: supply ? PES_OPTS : PED_OPTS }], ans: { val, cls: c }, tol: 0.03, steps };
}

/* ---------- YED ---------- */
function genYED(form, seed) {
  const r = rng(seed);
  const E = pick(r, [-1.5, -1, -0.5, 0, 0.4, 0.5, 0.8, 1, 1.5, 2, 3, 4]);
  const good = pick(r, E < 0 ? G_YED_NEG : E === 0 ? ["table salt", "a gym membership"] : E < 1 ? G_YED_NEC : G_YED_LUX);
  const up = r() < 0.7, sg = up ? 1 : -1;
  let q, steps, pI, pQ;
  if (form === "pct") {
    pI = find(r, () => { const p = pick(r, [4, 5, 8, 10, 20, 25]); return isInt(E * p) ? p : 0; }) || 10;
    pQ = Math.round(E * pI);
    q = `When consumers' incomes ${up ? "rose" : "fell"} by ${pI}%, the quantity demanded of ${good} ${pQ * sg > 0 ? "rose" : pQ * sg < 0 ? "fell" : "did not change"}${pQ ? " by " + Math.abs(pQ) + "%" : ""}. Calculate the YED and describe the good.`;
    steps = `YED = %ΔQd ÷ %ΔIncome = ${par(pQ * sg)} ÷ ${par(sg * pI)} = <b>${mn(r2(pQ / pI))}</b>. `;
  } else {
    const f = find(r, () => {
      const i1 = pick(r, [2000, 2400, 2500, 3000, 4000, 40000, 80000]), p = pick(r, [5, 10, 20, 25]);
      const q1 = pick(r, [20, 40, 50, 100, 200, 500]), q2 = q1 * (1 + E * p / 100 * sg);
      return isInt(q2) && isInt(i1 * p / 100) ? { i1, i2: i1 * (1 + sg * p / 100), q1, q2 } : null;
    }) || { i1: 2000, i2: 2400, q1: 50, q2: 50 + 50 * E * 0.2 };
    pI = r2((f.i2 - f.i1) / f.i1 * 100); pQ = r2((f.q2 - f.q1) / f.q1 * 100);
    q = `A household's income ${up ? "rises" : "falls"} from ${money(f.i1)} to ${money(f.i2)} a month. Its monthly purchases of ${good} go from ${num(f.q1)} to ${num(f.q2)} units. Calculate the YED and describe the good.`;
    steps = `%ΔY = (${num(f.i2)} − ${num(f.i1)}) ÷ ${num(f.i1)} = ${sgn(pI)}%. %ΔQd = (${num(f.q2)} − ${num(f.q1)}) ÷ ${num(f.q1)} = ${sgn(pQ)}%. YED = ${par(pQ)} ÷ ${par(pI)} = <b>${mn(r2(pQ / pI))}</b>. `;
  }
  const E2 = r2(pQ / pI), c = cls.yed(E2);
  steps += `Sign matters here: ${E2 < 0 ? "negative, so the good is inferior" : E2 === 0 ? "zero, so income has no effect on demand" : "positive, so it is a normal good, and " + (E2 > 1 ? "above 1 means income elastic" : E2 === 1 ? "exactly 1 means unit income elastic" : "below 1 means income inelastic")}.`;
  return { kind: "yed", form, q, fields: [{ k: "val", label: "YED (include the sign)", type: "num" }, { k: "cls", label: "The good is…", type: "sel", opts: YED_OPTS }], ans: { val: E2, cls: c }, tol: 0.03, steps };
}

/* ---------- XED ---------- */
function genXED(seed) {
  const r = rng(seed);
  const t = pick(r, ["sub", "sub", "comp", "comp", "none"]);
  const pair = pick(r, t === "sub" ? PAIRS_SUB : t === "comp" ? PAIRS_COMP : PAIRS_NONE);
  const E = t === "sub" ? pick(r, [0.5, 1, 1.5, 2, 3]) : t === "comp" ? -pick(r, [0.5, 1, 2, 3]) : 0;
  const pB = find(r, () => { const p = pick(r, [5, 10, 20, 25]); return isInt(E * p) ? p : 0; }) || 10;
  const up = r() < 0.65, sg = up ? 1 : -1, pQ = Math.round(E * pB);
  const q = `The price of ${pair[0]} ${up ? "rises" : "falls"} by ${pB}%. As a result, the quantity demanded of ${pair[1]} ${pQ * sg > 0 ? "rises" : pQ * sg < 0 ? "falls" : "does not change"}${pQ ? " by " + Math.abs(pQ) + "%" : ""}. Calculate the cross-price elasticity of demand (XED) of ${pair[1]} with respect to ${pair[0]} and say what it shows.`;
  const steps = `XED = %ΔQd of ${pair[1]} ÷ %ΔP of ${pair[0]} = ${par(pQ * sg)} ÷ ${par(sg * pB)} = <b>${mn(r2(pQ / pB))}</b>. ${E > 0 ? "Positive: the goods are substitutes." : E < 0 ? "Negative: the goods are complements." : "Zero: the goods are unrelated."}`;
  return { kind: "xed", q, fields: [{ k: "val", label: "XED (include the sign)", type: "num" }, { k: "cls", label: "The goods are…", type: "sel", opts: XED_OPTS }], ans: { val: r2(pQ / pB), cls: cls.xed(pQ / pB) }, tol: 0.03, steps };
}

/* ---------- Total revenue test ---------- */
function genRev(seed) {
  const r = rng(seed), E = pick(r, [0.4, 0.5, 0.6, 0.8, 1.25, 1.5, 2, 2.5]), up = r() < 0.55, sg = up ? 1 : -1;
  const f = find(r, () => {
    const p1 = pick(r, [10, 20, 25, 40, 50]), pc = pick(r, [10, 20, 25]), q1 = pick(r, [100, 200, 400, 500]);
    const p2 = p1 * (1 + sg * pc / 100), q2 = q1 * (1 - sg * E * pc / 100);
    if (!(isInt(p2) && isInt(q2) && q2 > 0)) return null;
    // keep the revenue check honest: with big changes TR must still move the way the PED says
    const trUp = p2 * q2 > p1 * q1, trDown = p2 * q2 < p1 * q1;
    const wantUp = (up && E < 1) || (!up && E > 1);
    return (wantUp ? trUp : trDown) ? { p1, p2, q1, q2 } : null;
  }) || { p1: 10, p2: 12, q1: 100, q2: 75 };
  const tr1 = f.p1 * f.q1, tr2 = f.p2 * f.q2, c = cls.ped(r2(Math.abs((f.q2 - f.q1) / f.q1) / Math.abs((f.p2 - f.p1) / f.p1)));
  const good = pick(r, ["a theatre", "a café", "a bike shop", "a school bookstore", "a food truck", "a gym", "a taxi company"]);
  const q = `${good[0].toUpperCase() + good.slice(1)} ${up ? "raises" : "cuts"} its price from ${money(f.p1)} to ${money(f.p2)} and sales ${up ? "fall" : "rise"} from ${num(f.q1)} to ${num(f.q2)} a week. Find total revenue before and after, calculate the PED, and say whether demand is elastic or inelastic.`;
  const steps = `TR before = ${money(f.p1)} × ${num(f.q1)} = ${money(tr1)}. TR after = ${money(f.p2)} × ${num(f.q2)} = ${money(tr2)}. PED = ${r2(Math.abs((f.q2 - f.q1) / f.q1 * 100))} ÷ ${r2(Math.abs((f.p2 - f.p1) / f.p1 * 100))} = <b>${E}</b> → <b>${WORD[c]}</b>. Check with the revenue test: price ${up ? "up" : "down"} and revenue ${tr2 > tr1 ? "up" : tr2 < tr1 ? "down" : "unchanged"}, so demand is ${tr2 === tr1 ? "unit elastic" : (up === (tr2 > tr1)) ? "inelastic" : "elastic"}.`;
  return { kind: "rev", q, fig: { p1: f.p1, q1: f.q1, p2: f.p2, q2: f.q2 }, fields: [{ k: "tr1", label: "Total revenue before ($)", type: "num" }, { k: "tr2", label: "Total revenue after ($)", type: "num" }, { k: "val", label: "PED (2 decimal places)", type: "num" }, { k: "cls", label: "Demand is…", type: "sel", opts: REV_OPTS }], ans: { tr1, tr2, val: E, cls: c }, tol: 0.03, steps };
}

/* kinds: ped-pct ped-val pes-pct pes-val yed-pct yed-val xed rev */
function gen(kind, seed) {
  switch (kind) {
    case "ped-pct": return genElastic("ped", "pct", seed);
    case "ped-val": return genElastic("ped", "val", seed);
    case "pes-pct": return genElastic("pes", "pct", seed);
    case "pes-val": return genElastic("pes", "val", seed);
    case "yed-pct": return genYED("pct", seed);
    case "yed-val": return genYED("val", seed);
    case "xed": return genXED(seed);
    case "rev": return genRev(seed);
  }
}
const CALC_KINDS = {
  ped: { name: "Price elasticity of demand", kinds: ["ped-pct", "ped-val"] },
  yed: { name: "Income elasticity of demand", kinds: ["yed-pct", "yed-val"] },
  xed: { name: "Cross-price elasticity", kinds: ["xed"] },
  pes: { name: "Price elasticity of supply", kinds: ["pes-pct", "pes-val"] },
  rev: { name: "Total revenue and elasticity", kinds: ["rev"] },
};
