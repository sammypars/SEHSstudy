/* =====================================================================
   Class worksheets, the written-question bank and the practice tests.
   Needs diagrams.js, questions.js, questions2.js and problems.js first.

   WORKSHEETS  the two handouts, turned into checkable problems
   WRITTEN     IB-style short answers with a model answer and marking points
   TESTS       four fixed practice tests; buildTest(i) returns their contents

   Answer keys: a number is checked within tol; {gt:x} {lt:x} {eq:x} accept a
   range of examples; an array of strings accepts any of them.
   ===================================================================== */
const INTERP = [
  ["unitnormal", "Normal good, unit income elastic: demand rises in proportion to income"],
  ["luxury", "Normal luxury: demand rises by more than income does"],
  ["necessity", "Normal necessity: demand rises, but by less than income does"],
  ["zero", "Income has no effect on how much she buys (YED = 0)"],
  ["inferior", "Inferior good: she buys less as her income rises"],
];
const PEDF = (sel) => [{ k: "val", label: "PED (2 decimal places)", type: "num" }, { k: "cls", label: "Demand is…", type: "sel", opts: PED_OPTS }];
const fx = (n, q, E, steps, extra) => Object.assign({ n, q, fields: PEDF(), ans: { val: E, cls: cls.ped(E) }, tol: 0.03, steps }, extra || {});

/* market numbers used by the sports car / chocolate worksheet */
const CARS = ELD.market({ m: 0.25, n: 0.4, shift: 2, aria: "Sports car market: supply shifts left" });
const CHOC = ELD.market({ m: 3, n: 2, shift: 2, aria: "Chocolate market: supply shifts left" });

const WORKSHEETS = [
  {
    id: "ped", title: "PED worksheet", sub: "Seven problems: compute the PED, say whether it is elastic or inelastic, and explain the revenue effect.",
    items: [
      fx("1", "When the price of gasoline increased by 6%, the amount demanded by consumers dropped by 3%.", 0.5, "PED = %ΔQd ÷ %ΔP = 3 ÷ 6 = <b>0.5</b>. Less than 1: <b>inelastic</b>. Gasoline is a necessity with few short-run substitutes."),
      fx("2", "When the price of butter decreased by 10%, the quantity that consumers demanded increased by 13%.", 1.3, "PED = 13 ÷ 10 = <b>1.3</b>. Greater than 1: <b>elastic</b>. Margarine is a close substitute."),
      fx("3", "When the price of haircuts increased by 15%, the number of haircuts demanded by consumers decreased by 25%.", 1.67, "PED = 25 ÷ 15 = <b>1.67</b>. Greater than 1: <b>elastic</b>. Customers can stretch the time between haircuts."),
      fx("4", "When the price of personal computers decreased by 20%, the quantity of computers demanded increased by 8%.", 0.4, "PED = 8 ÷ 20 = <b>0.4</b>. Less than 1: <b>inelastic</b>."),
      fx("5", "The price of a twelve-inch pizza increases from $10 to $12. The quantity sold during the month decreases from 1,500 to 1,000 pizzas. Calculate the price elasticity of demand.", 1.67,
        "%ΔP = 2 ÷ 10 = +20%. %ΔQ = −500 ÷ 1,500 = −33.3%. PED = 33.3 ÷ 20 = <b>1.67</b> (elastic). If your teacher uses the midpoint method: %ΔP = 2 ÷ 11 = 18.2% and %ΔQ = 500 ÷ 1,250 = 40%, giving 2.2. Both are elastic. The IB course uses the first method.", { alt: 2.2 }),
      fx("6", "The price of strawberries declines from $12 per flat to $10 per flat. The number of flats sold per week increases from 300 to 450. Calculate the price elasticity of demand.", 3,
        "%ΔP = −2 ÷ 12 = −16.7%. %ΔQ = +150 ÷ 300 = +50%. PED = 50 ÷ 16.7 = <b>3.0</b> (elastic). Midpoint method gives 2.2, also elastic.", { alt: 2.2 }),
    ],
    written: 0,
  },
  {
    id: "yed", title: "Income elasticity practice (Blink & Dorton p. 76)", sub: "A consumer's income rises from $80,000 to $100,000 a year (+25%). Work out her YED for three goods and explain each number.",
    context: "Following a salary rise, her income goes from <b>$80,000</b> to <b>$100,000</b>. The next year her spending on <b>holidays</b> rises from $8,000 to $10,000, her spending on <b>gym membership</b> stays the same, and her spending on <b>locally produced clothes</b> falls from $2,000 to $1,500.",
    items: [
      { n: "1", q: "Calculate her income elasticity of demand for holidays.", fields: [{ k: "val", label: "YED (include the sign)", type: "num" }], ans: { val: 1 }, tol: 0.03, steps: "%ΔIncome = 20,000 ÷ 80,000 = +25%. %ΔSpending = 2,000 ÷ 8,000 = +25%. YED = 25 ÷ 25 = <b>+1.0</b>." },
      { n: "2", q: "Explain what the value of her income elasticity of demand for holidays means.", fields: [{ k: "mean", label: "The value means…", type: "sel", opts: INTERP }], ans: { mean: "unitnormal" }, steps: "YED is positive, so holidays are a <b>normal good</b>. It equals 1, so a 1% rise in income leads to a 1% rise in demand: demand is <b>unit income elastic</b>." },
      { n: "3", q: "Calculate her income elasticity of demand for gym membership.", fields: [{ k: "val", label: "YED (include the sign)", type: "num" }], ans: { val: 0 }, tol: 0.03, steps: "%ΔSpending = 0 ÷ 25% = <b>0</b>." },
      { n: "4", q: "Explain what the value of her income elasticity of demand for gym membership means.", fields: [{ k: "mean", label: "The value means…", type: "sel", opts: INTERP }], ans: { mean: "zero" }, steps: "YED of 0 means her demand for gym membership does not change when income changes. It is neither normal nor inferior at this income level: perfectly income inelastic." },
      { n: "5", q: "Calculate her income elasticity of demand for locally produced clothes.", fields: [{ k: "val", label: "YED (include the sign)", type: "num" }], ans: { val: -1 }, tol: 0.03, steps: "%ΔSpending = −500 ÷ 2,000 = −25%. YED = −25 ÷ 25 = <b>−1.0</b>." },
      { n: "6", q: "Explain what the value of her income elasticity of demand for locally produced clothes means.", fields: [{ k: "mean", label: "The value means…", type: "sel", opts: INTERP }], ans: { mean: "inferior" }, steps: "A negative YED means an <b>inferior good</b>: as her income rises she buys less of it (probably switching to branded or imported clothes). The size, 1, means a 1% rise in income cuts demand by 1%." },
    ],
    written: 4,
  },
  {
    id: "engel", title: "Engel curve: the Irish potato", sub: "Draw one Engel curve with three phases, then put a YED value next to each phase.",
    context: "After the English took the best land in Ireland, most people depended on potatoes: a fast-growing, high-calorie crop. <b>Phase 1:</b> at very low incomes people buy far more potatoes as income grows, because they are starving and potatoes are the cheapest food. <b>Phase 2:</b> at medium incomes they buy the same amount as income grows: they are full, but still can't afford meat. <b>Phase 3:</b> at higher incomes they replace potatoes with meat, vegetables and other foods.",
    items: [{
      n: "Engel curve", q: "Sketch the curve on paper first (income on the horizontal axis, quantity of potatoes on the vertical). Then choose the right kind of YED for each phase and give an example value.", draw: true,
      fields: [
        { k: "s1", label: "Phase 1 YED is…", type: "sel", opts: [["pos_el", "Positive and elastic (above +1)"], ["pos_in", "Positive and inelastic (0 to +1)"], ["zero", "Zero"], ["neg", "Negative"]] },
        { k: "v1", label: "Example YED, phase 1", type: "num" },
        { k: "s2", label: "Phase 2 YED is…", type: "sel", opts: [["pos_el", "Positive and elastic (above +1)"], ["pos_in", "Positive and inelastic (0 to +1)"], ["zero", "Zero"], ["neg", "Negative"]] },
        { k: "v2", label: "Example YED, phase 2", type: "num" },
        { k: "s3", label: "Phase 3 YED is…", type: "sel", opts: [["pos_el", "Positive and elastic (above +1)"], ["pos_in", "Positive and inelastic (0 to +1)"], ["zero", "Zero"], ["neg", "Negative"]] },
        { k: "v3", label: "Example YED, phase 3", type: "num" },
      ],
      ans: { s1: "pos_el", v1: { gt: 1 }, s2: "zero", v2: { eq: 0 }, s3: "neg", v3: { lt: 0 } },
      steps: "<b>Phase 1:</b> steep upward slope. Quantity rises by a bigger percentage than income, so YED is positive and elastic, for example <b>+2.5</b>. <b>Phase 2:</b> flat. Quantity does not change, so YED = <b>0</b>. <b>Phase 3:</b> downward slope. Potatoes are now an inferior good, so YED is <b>negative</b>, for example <b>−0.8</b> (inelastic) or −1.5 (elastic). Any negative number is correct.",
      fig: "engel",
    }],
    written: 1,
  },
  {
    id: "shift", title: "Supply shifts: sports cars vs chocolate", sub: "The same leftward shift of supply in two markets with different elasticities. Compare the effects.",
    context: "<b>Sports cars</b> have elastic PED (luxuries) and elastic PES (factories often have spare capacity). A pandemic temporarily cuts supply. <b>Chocolate</b> has inelastic PED (addictive) and inelastic PES (cocoa trees take about five years to mature). A drought wrecks the cocoa harvest. Both supply curves shift left by the same distance.",
    items: [
      { n: "1", q: "Which product had the bigger change in <b>price</b>?", fields: [{ k: "a", label: "Bigger price change", type: "sel", opts: [["choc", "Chocolate"], ["car", "Sports cars"], ["same", "The same"]] }], ans: { a: "choc" }, steps: `Chocolate. With steep (inelastic) curves, consumers keep buying and producers can't respond, so price has to jump: here about <b>+${CHOC.dP}%</b>, against about +${CARS.dP}% for sports cars.`, fig: "markets" },
      { n: "2", q: "Which product had the bigger change in <b>quantity</b>?", fields: [{ k: "a", label: "Bigger quantity change", type: "sel", opts: [["choc", "Chocolate"], ["car", "Sports cars"], ["same", "The same"]] }], ans: { a: "car" }, steps: `Sports cars. With flat (elastic) curves, buyers walk away and producers adjust, so quantity moves a lot: about <b>${CARS.dQ}%</b>, against ${CHOC.dQ}% for chocolate.`, fig: "markets" },
      { n: "3", q: "What happened to total revenue in the <b>sports car</b> market?", fields: [{ k: "a", label: "Sports car total revenue", type: "sel", opts: [["fall", "Fell"], ["rise", "Rose"], ["same", "Stayed the same"]] }], ans: { a: "fall" }, steps: `It fell. Demand is elastic, so the price rise is outweighed by the fall in quantity: P × Q went from 5 × 5 = 25 to ${CARS.p2} × ${CARS.q2} = <b>${CARS.tr2}</b> (these are the units on the graph).`, fig: "markets" },
      { n: "4", q: "What happened to total revenue in the <b>chocolate</b> market?", fields: [{ k: "a", label: "Chocolate total revenue", type: "sel", opts: [["fall", "Fell"], ["rise", "Rose"], ["same", "Stayed the same"]] }], ans: { a: "rise" }, steps: `It rose. Demand is inelastic, so the price rise outweighs the small fall in quantity: P × Q went from 25 to ${CHOC.p2} × ${CHOC.q2} = <b>${CHOC.tr2}</b>.`, fig: "markets" },
    ],
    written: 2,
  },
];

/* ---------- IB-style written questions ---------- */
const WRITTEN = [
  { q: "An increase in the price of a product whose demand is elastic can reduce the total revenue of the firm. How can this be true?", marks: 3,
    model: "Total revenue = price × quantity. If demand is elastic (PED > 1), the percentage fall in quantity demanded is bigger than the percentage rise in price. The firm gets more per unit but loses so many sales that the loss outweighs the gain. Example: price from $10 to $12 (+20%) and sales from 100 to 75 (−25%) means PED = 1.25 and revenue falls from $1,000 to $900.",
    points: ["States that TR = P × Q", "Explains that elastic demand means %ΔQ is bigger than %ΔP", "Concludes TR falls, ideally with a numerical or diagram example"] },
  { q: "Explain, using an Engel curve for potatoes, how the income elasticity of demand changes as income rises from very low to high levels.", marks: 3,
    model: "At very low incomes the curve slopes steeply upward: quantity rises by a bigger percentage than income, so YED is positive and greater than 1 (for example +2.5). At medium incomes the curve is flat: quantity stays the same as income rises, so YED = 0. At high incomes the curve slopes downward as people substitute meat and vegetables for potatoes: potatoes are an inferior good and YED is negative (for example −0.8).",
    points: ["Phase 1: positive and elastic (steep upward slope)", "Phase 2: zero (flat)", "Phase 3: negative, inferior good (downward slope), with a reason"] },
  { q: "The supply of cocoa is price inelastic and the supply of sports cars is price elastic. Explain why.", marks: 3,
    model: "Cocoa trees take about five years to mature and bear fruit only twice a year, so when the price rises farmers cannot quickly raise output: time is the main determinant of PES. Sports cars are made in factories that often have spare capacity and can hold stocks, so firms can raise output quickly when price rises; spare capacity, stocks and mobile factors of production all make supply more elastic.",
    points: ["Names a determinant of PES (time, spare capacity, stocks, mobility)", "Applies it to cocoa: long growing time means inelastic", "Applies it to sports cars: spare capacity and stocks mean elastic"] },
  { q: "Explain why a government wishing to raise tax revenue from an indirect tax would prefer to tax a good with inelastic demand rather than elastic demand.", marks: 3,
    model: "An indirect tax raises the price consumers pay. If demand is inelastic, quantity demanded falls by a smaller percentage than price rises, so the government still collects the tax on most of the original quantity and revenue stays high. If demand is elastic, the same tax causes a large fall in quantity, so the government collects tax on far fewer units. Examples of inelastic goods: cigarettes and petrol.",
    points: ["Tax raises price", "Inelastic demand: quantity falls little", "Elastic demand: quantity falls a lot, so less tax collected"] },
  { q: "Distinguish between a normal good and an inferior good, using income elasticity of demand. Give an example of each.", marks: 3,
    model: "A normal good has a positive YED: demand rises as income rises (example: foreign holidays, YED above 1; or bread, YED between 0 and 1). An inferior good has a negative YED: demand falls as income rises because consumers switch to higher-quality alternatives (example: instant noodles or bus travel).",
    points: ["Normal good: positive YED, demand rises with income", "Inferior good: negative YED, demand falls with income", "A suitable example of each"] },
  { q: "Distinguish between price elasticity of demand and cross-price elasticity of demand.", marks: 3,
    model: "PED measures the responsiveness of quantity demanded of a good to a change in its own price: %ΔQd ÷ %ΔP. XED measures the responsiveness of quantity demanded of one good to a change in the price of another good: %ΔQd of A ÷ %ΔP of B. PED is almost always negative (we ignore the sign); XED's sign tells us the relationship: positive for substitutes, negative for complements.",
    points: ["PED: own price change", "XED: price change of a different good", "Sign of XED shows substitutes (+) or complements (−)"] },
  { q: "A drought reduces the supply of cocoa. Demand for chocolate is price inelastic. Explain the effect on the price of chocolate and on the total revenue of cocoa producers.", marks: 4,
    model: "Supply shifts left, creating a shortage at the old price, so the equilibrium price rises and quantity falls. Because demand is inelastic, consumers keep buying, so price rises by a larger percentage than quantity falls. Total revenue (P × Q) therefore rises for producers who still have a crop, even though they sell fewer units.",
    points: ["Supply shifts left (with diagram)", "Price rises, quantity falls", "Inelastic demand: %ΔP bigger than %ΔQ", "Total revenue rises"] },
  { q: "A firm's price rises from $20 to $24 and its monthly sales fall from 400 to 300. Calculate the PED, and state what this suggests the firm should do with price if it wants more revenue.", marks: 4,
    model: "%ΔP = 4 ÷ 20 = +20%. %ΔQ = −100 ÷ 400 = −25%. PED = 25 ÷ 20 = 1.25, so demand is elastic. Total revenue fell from $8,000 (20 × 400) to $7,200 (24 × 300), confirming that raising price lowered revenue. With elastic demand the firm should lower its price: the percentage rise in sales would be bigger than the percentage fall in price, so revenue would rise.",
    points: ["%ΔP = +20% and %ΔQ = −25%", "PED = 1.25, elastic", "Notes TR falls when price rises (or calculates TR)", "Recommends a price cut and explains why"] },
];

/* ---------- Practice tests ---------- */
const TEST_PLAN = { ped: 3, pedd: 2, rev: 2, yed: 3, xed: 1, pes: 2, graph: 2 };
const TESTS = [
  { id: "A", name: "Practice Test A", minutes: 35 },
  { id: "B", name: "Practice Test B", minutes: 35 },
  { id: "C", name: "Practice Test C", minutes: 35 },
  { id: "D", name: "Practice Test D", minutes: 35 },
];
function buildTest(i) {
  const mc = [];
  Object.keys(TEST_PLAN).forEach((t, ti) => {
    const pool = shuf(BANK.map((b, k) => b.t === t ? k : -1).filter((k) => k >= 0), rng(7000 + ti * 31));
    const n = TEST_PLAN[t];
    for (let j = 0; j < n; j++) mc.push(pool[(i * n + j) % pool.length]);
  });
  const calcKinds = ["ped-pct", "ped-val", i % 2 ? "yed-val" : "yed-pct", i % 2 ? "pes-pct" : "pes-val", "rev"];
  const calc = calcKinds.map((k, j) => ({ seed: 8100 + i * 40 + j * 7, kind: k }));
  const wr = [i * 2, i * 2 + 1];
  return { mc: shuf(mc, rng(500 + i)), calc, wr };
}
