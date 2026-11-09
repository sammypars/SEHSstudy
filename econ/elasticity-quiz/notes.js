/* =====================================================================
   Study notes with worked examples. NOTES[id] = { nav, title, html(), init() }
   Buttons with data-quiz="topic" or data-drill="kind" start practice from
   inside a note (wired up in index.html). Diagrams come from ELD.
   ===================================================================== */
const ex = (title, body) => `<div class="ex"><div class="exh">Worked example · ${title}</div>${body}</div>`;
const practice = (quiz, drill, extra) => `<div class="row">${quiz ? `<button class="btn primary" type="button" data-quiz="${quiz}">Quiz me on this</button>` : ""}${drill ? `<button class="btn" type="button" data-drill="${drill}">Calculation drill</button>` : ""}${extra || ""}</div>`;
const fig = (svg, cap) => `<figure class="nfig"><div class="qfig">${svg}</div>${cap ? `<figcaption>${cap}</figcaption>` : ""}</figure>`;

const NOTES = {};

/* ------------------------------------------------------------ PED */
NOTES.ped = {
  nav: "Price elasticity of demand", title: "Price elasticity of demand (PED)",
  html() {
    return `<div class="eyebrow">Study · Elasticity</div><h1>Price elasticity of demand</h1>
<p class="lede">The law of demand says quantity demanded falls when price rises. PED measures <i>how much</i> it falls: how responsive buyers are to a price change.</p>
<div class="card prose"><h2>The formula</h2>
<div class="formula">PED = <span>% change in quantity demanded</span> ÷ <span>% change in price</span></div>
<p>Percent change = (new − old) ÷ <b>old</b> × 100. The IB course uses the starting value as the base. Because price and quantity move in opposite directions PED comes out negative, so we <b>drop the minus sign</b> and compare the size with 1.</p>
<div class="tablewrap"><table class="table"><tr><th>PED value</th><th>Name</th><th>Meaning</th><th>Curve</th></tr>
<tr><td class="mono">0</td><td>Perfectly inelastic</td><td>Quantity does not change at all</td><td>Vertical</td></tr>
<tr><td class="mono">0 to 1</td><td>Inelastic</td><td>%ΔQd is smaller than %ΔP</td><td>Steep</td></tr>
<tr><td class="mono">1</td><td>Unit elastic</td><td>%ΔQd equals %ΔP</td><td>Rectangular hyperbola</td></tr>
<tr><td class="mono">1 to ∞</td><td>Elastic</td><td>%ΔQd is bigger than %ΔP</td><td>Flat</td></tr>
<tr><td class="mono">∞</td><td>Perfectly elastic</td><td>Buyers take any amount at one price, none above it</td><td>Horizontal</td></tr></table></div>
<div class="callout"><b>Elasticity is not slope.</b> A straight demand line has the same slope everywhere but its elasticity changes along it: elastic near the top (high price, low quantity), inelastic near the bottom.</div></div>
<div class="card prose"><h2>Four steps for any PED question</h2>
<ol><li>Find %ΔP = (new price − old price) ÷ old price.</li><li>Find %ΔQ the same way.</li><li>Divide: PED = %ΔQ ÷ %ΔP, with <b>quantity on top</b>. Ignore the sign.</li><li>Compare with 1: above is elastic, below is inelastic. Say what it means in the context.</li></ol></div>
${ex("percentages given", `<p>When the price of gasoline rises 6%, quantity demanded falls 3%.</p><p>PED = 3 ÷ 6 = <b>0.5</b>, which is less than 1, so demand is <b>inelastic</b>. A 6% price rise only trims quantity by 3%: gasoline is a necessity with few short-run substitutes.</p>`)}
${ex("prices and quantities given", `<p>A pizza's price rises from $10 to $12 and monthly sales fall from 1,500 to 1,000.</p>
<div class="tablewrap"><table class="table"><tr><th>Step</th><th>Working</th><th>Result</th></tr><tr><td>%ΔP</td><td class="mono">(12 − 10) ÷ 10</td><td class="mono">+20%</td></tr><tr><td>%ΔQ</td><td class="mono">(1,000 − 1,500) ÷ 1,500</td><td class="mono">−33.3%</td></tr><tr><td>PED</td><td class="mono">33.3 ÷ 20</td><td class="mono"><b>1.67</b></td></tr></table></div>
<p>1.67 is greater than 1, so demand is <b>elastic</b>. (The midpoint method would use the average of the two values as the base and give 2.2. Both agree it is elastic.)</p>`)}
${ex("working backwards", `<p>A good has PED = 0.4. Its price is cut by 20%. By how much does quantity demanded rise?</p><p>%ΔQ = PED × %ΔP = 0.4 × 20% = <b>+8%</b>. Price down, quantity up.</p>`)}
<div class="card prose"><h2>Determinants of PED</h2>
<ul><li><b>Availability of substitutes.</b> More and closer substitutes mean more elastic. One brand of cereal is elastic; breakfast food in general is not.</li>
<li><b>Necessity or luxury.</b> Necessities (insulin, basic food) are inelastic; luxuries (cruises, sports cars) are elastic.</li>
<li><b>Proportion of income.</b> Cheap items like salt or gum hardly dent a budget, so they are inelastic; big-ticket items are more elastic.</li>
<li><b>Time.</b> Demand is more elastic in the long run: people find alternatives, change habits, replace cars.</li>
<li><b>Addiction or habit.</b> Cigarettes and coffee are more inelastic.</li>
<li><b>Width of market definition.</b> The narrower the definition (Brand X), the more elastic.</li></ul></div>
<div class="card prose"><h2>Where elasticity changes along a straight line</h2>${fig(ELD.demandRegions(), "Upper half elastic, midpoint unit elastic, lower half inelastic. Total revenue is at its maximum at the unit-elastic point.")}</div>
${practice("ped", "ped")}`;
  },
};

/* ------------------------------------------------------------ Revenue */
NOTES.rev = {
  nav: "Total revenue and PED", title: "Total revenue and elasticity",
  html() {
    return `<div class="eyebrow">Study · Elasticity</div><h1>Total revenue and elasticity</h1>
<p class="lede">Total revenue = price × quantity. Whether a price change helps a firm's revenue depends on PED. This is the single most useful application of elasticity.</p>
<div class="card prose"><h2>The total revenue test</h2>
<div class="tablewrap"><table class="table"><tr><th>Demand is…</th><th>Price rises</th><th>Price falls</th><th>Why</th></tr>
<tr><td><b>Elastic</b> (PED &gt; 1)</td><td class="dn">Revenue falls</td><td class="up">Revenue rises</td><td>%ΔQ bigger than %ΔP</td></tr>
<tr><td><b>Inelastic</b> (PED &lt; 1)</td><td class="up">Revenue rises</td><td class="dn">Revenue falls</td><td>%ΔQ smaller than %ΔP</td></tr>
<tr><td><b>Unit elastic</b> (PED = 1)</td><td>No change</td><td>No change</td><td>Percentages cancel out</td></tr></table></div>
<div class="callout">Quick rule: if price and revenue move in <b>opposite</b> directions, demand is elastic. If they move in the <b>same</b> direction, demand is inelastic.</div></div>
${ex("price rises and revenue falls", `<p>A shop sells 100 items at $10 each. It raises the price to $12 and sells 75.</p>${fig(ELD.revenueBoxes(10, 100, 12, 75, 14, 120), "The orange box (after) is smaller than the blue box (before): what the firm gained on price it lost on quantity.")}
<p>TR before = $10 × 100 = $1,000. TR after = $12 × 75 = $900. PED = 25 ÷ 20 = 1.25, so demand is elastic and the price rise cut revenue.</p>`)}
${ex("price rises and revenue rises", `<p>A cinema raises tickets from $20 to $24 (+20%). Weekly sales fall from 200 to 190 (−5%).</p><p>PED = 5 ÷ 20 = 0.25, inelastic. TR goes from $4,000 to $4,560: higher, as expected.</p>`)}
<div class="card prose"><h2>Real-world uses</h2>
<ul><li><b>Pricing:</b> a firm with inelastic demand can raise revenue by raising price; a firm with elastic demand should consider sales and discounts.</li>
<li><b>Farmers:</b> food demand is inelastic, so a bumper harvest (supply rises) makes price fall by a larger percentage than quantity rises, and farm revenue <i>falls</i>. A poor harvest can raise revenue.</li>
<li><b>Taxes:</b> governments put indirect taxes on goods with inelastic demand (cigarettes, petrol) because quantity hardly falls and tax revenue stays high.</li>
<li><b>Price discrimination:</b> charge groups with inelastic demand (business travellers) more than groups with elastic demand (students).</li></ul></div>
${practice("rev", "rev")}`;
  },
};

/* ------------------------------------------------------------ YED */
NOTES.yed = {
  nav: "Income elasticity and Engel curves", title: "Income elasticity of demand (YED)",
  html() {
    return `<div class="eyebrow">Study · Elasticity</div><h1>Income elasticity of demand</h1>
<p class="lede">YED measures how much demand for a good changes when consumers' incomes change. Unlike PED, <b>the sign matters</b>.</p>
<div class="card prose"><h2>The formula</h2><div class="formula">YED = <span>% change in quantity demanded</span> ÷ <span>% change in income</span></div>
<div class="tablewrap"><table class="table"><tr><th>YED</th><th>Type of good</th><th>Meaning</th><th>Examples</th></tr>
<tr><td class="mono">&lt; 0</td><td>Inferior</td><td>Demand falls as income rises</td><td>Instant noodles, bus rides, own-brand goods</td></tr>
<tr><td class="mono">0</td><td>Income has no effect</td><td>Demand unchanged by income</td><td>Salt, some memberships</td></tr>
<tr><td class="mono">0 to +1</td><td>Normal necessity</td><td>Demand rises, but slower than income (income inelastic)</td><td>Bread, electricity, basic clothing</td></tr>
<tr><td class="mono">+1</td><td>Normal, unit elastic</td><td>Demand rises in proportion to income</td><td>The holidays below</td></tr>
<tr><td class="mono">&gt; +1</td><td>Normal luxury</td><td>Demand rises faster than income (income elastic)</td><td>Cruises, sports cars, restaurants</td></tr></table></div></div>
${ex("Blink & Dorton, p. 76", `<p>A consumer's income rises from $80,000 to $100,000 (<b>+25%</b>). Her spending on holidays rises from $8,000 to $10,000, gym membership stays the same, and locally produced clothes fall from $2,000 to $1,500.</p>
<div class="tablewrap"><table class="table"><tr><th>Good</th><th>%ΔQ</th><th>YED</th><th>Meaning</th></tr>
<tr><td>Holidays</td><td class="mono">+25%</td><td class="mono"><b>+1.0</b></td><td>Normal good, unit income elastic: demand grows in step with income</td></tr>
<tr><td>Gym membership</td><td class="mono">0%</td><td class="mono"><b>0</b></td><td>Income has no effect on her demand</td></tr>
<tr><td>Local clothes</td><td class="mono">−25%</td><td class="mono"><b>−1.0</b></td><td>Inferior good: she buys less as she gets richer</td></tr></table></div>`)}
<div class="card prose"><h2>Engel curves</h2><p>An Engel curve shows how the quantity demanded of a good changes as income changes. Its shape tells you the YED at each income level. Many textbooks plot income on the vertical axis; here income is on the horizontal axis so the three phases read left to right.</p>
<div class="row"><button class="btn" type="button" id="swapax">Swap the axes</button><span class="small muted">Same curve, axes flipped.</span></div>
<div id="engelbox">${fig(ELD.engel(false), "Engel curve for potatoes in 1800s Ireland. 1: steep rise, 2: flat, 3: falling.")}</div>
<div class="tablewrap"><table class="table"><tr><th>Phase</th><th>Story</th><th>Shape</th><th>Example YED</th></tr>
<tr><td>1</td><td>Starving: spend extra income on cheap calories</td><td>Steep upward</td><td class="mono">+2.5 (positive, elastic)</td></tr>
<tr><td>2</td><td>Full, but can't afford meat</td><td>Flat</td><td class="mono">0</td></tr>
<tr><td>3</td><td>Switch to meat and vegetables</td><td>Downward</td><td class="mono">−0.8 (negative, inferior)</td></tr></table></div></div>
<div class="card prose"><h2>Why firms care</h2><ul><li>High positive YED: sales boom in expansions and slump in recessions (luxury cars, restaurants).</li><li>Low positive YED: stable sales through the cycle (food staples, utilities).</li><li>Negative YED: sales can <i>rise</i> in a recession (discount stores, instant noodles).</li></ul></div>
${practice("yed", "yed")}`;
  },
  init() {
    let swap = false;
    const b = document.getElementById("swapax");
    if (b) b.onclick = () => { swap = !swap; document.getElementById("engelbox").innerHTML = fig(ELD.engel(swap), swap ? "Axes swapped: income vertical, quantity horizontal." : "Income horizontal, quantity vertical."); };
  },
};

/* ------------------------------------------------------------ XED */
NOTES.xed = {
  nav: "Cross-price elasticity", title: "Cross-price elasticity of demand (XED)",
  html() {
    return `<div class="eyebrow">Study · Elasticity</div><h1>Cross-price elasticity of demand</h1>
<p class="lede">XED measures how demand for one good responds to a change in the price of a <i>different</i> good. The sign shows how the two goods are related.</p>
<div class="card prose"><h2>The formula</h2><div class="formula">XED = <span>% change in quantity demanded of good A</span> ÷ <span>% change in price of good B</span></div>
<div class="tablewrap"><table class="table"><tr><th>XED</th><th>Relationship</th><th>Example</th></tr>
<tr><td class="mono">Positive</td><td>Substitutes. Bigger value means closer substitutes.</td><td>Pepsi and Coke, butter and margarine</td></tr>
<tr><td class="mono">Negative</td><td>Complements. Bigger size means stronger complements.</td><td>Printers and ink, cars and gasoline</td></tr>
<tr><td class="mono">≈ 0</td><td>Unrelated</td><td>Bread and laptops</td></tr></table></div></div>
${ex("substitutes", `<p>The price of Pepsi rises 10% and the quantity demanded of Coke rises 5%. XED = 5 ÷ 10 = <b>+0.5</b>: substitutes (not very close).</p>`)}
${ex("complements", `<p>The price of printers rises 10% and the quantity demanded of printer ink falls 8%. XED = −8 ÷ 10 = <b>−0.8</b>: complements.</p>`)}
${ex("both fall", `<p>The price of B falls 5% and the quantity demanded of A falls 10%. XED = (−10) ÷ (−5) = <b>+2</b>: substitutes. People switched from A to the now cheaper B.</p>`)}
<div class="callout">Use: a firm that knows its product is a close substitute for a rival's (large positive XED) can expect big gains if the rival raises prices, and big losses if it cuts them.</div>
${practice("xed", "xed")}`;
  },
};

/* ------------------------------------------------------------ PES */
NOTES.pes = {
  nav: "Price elasticity of supply", title: "Price elasticity of supply (PES)",
  html() {
    return `<div class="eyebrow">Study · Elasticity</div><h1>Price elasticity of supply</h1>
<p class="lede">PES measures how much quantity supplied responds when the price changes. By the law of supply it is positive.</p>
<div class="card prose"><h2>The formula</h2><div class="formula">PES = <span>% change in quantity supplied</span> ÷ <span>% change in price</span></div>
<div class="tablewrap"><table class="table"><tr><th>PES value</th><th>Name</th><th>Curve</th></tr>
<tr><td class="mono">0</td><td>Perfectly inelastic</td><td>Vertical</td></tr><tr><td class="mono">0 to 1</td><td>Inelastic</td><td>Steep; meets the horizontal (Q) axis</td></tr>
<tr><td class="mono">1</td><td>Unit elastic</td><td>Straight line through the origin</td></tr><tr><td class="mono">1 to ∞</td><td>Elastic</td><td>Flat; meets the vertical (P) axis</td></tr><tr><td class="mono">∞</td><td>Perfectly elastic</td><td>Horizontal</td></tr></table></div>
<div class="grid3" style="grid-template-columns:repeat(auto-fit,minmax(200px,1fr))"><div class="qfig">${ELD.supplyShape("inelastic")}</div><div class="qfig">${ELD.supplyShape("unit")}</div><div class="qfig">${ELD.supplyShape("elastic")}</div></div></div>
${ex("calculating PES", `<p>The price of a good rises from $4 to $5 and quantity supplied rises from 200 to 260.</p><p>%ΔP = 1 ÷ 4 = +25%. %ΔQs = 60 ÷ 200 = +30%. PES = 30 ÷ 25 = <b>1.2</b>: elastic.</p>`)}
<div class="card prose"><h2>Determinants of PES</h2>
<ul><li><b>Time.</b> The longer the time period, the more elastic. Firms can build, hire and plant.</li>
<li><b>Spare capacity.</b> Unused factory capacity lets output rise fast (sports cars).</li>
<li><b>Stocks.</b> Firms with inventories can sell more at once.</li>
<li><b>Mobility of factors of production.</b> If workers and equipment can move between uses easily, supply is elastic.</li>
<li><b>Storability and perishability.</b> Fresh strawberries can't be stockpiled, so short-run supply is inelastic.</li>
<li><b>Production lag.</b> Cocoa trees take about five years to mature: inelastic.</li></ul></div>
${practice("pes", "pes")}`;
  },
};

/* ------------------------------------------------------------ Shifts lab */
NOTES.shifts = {
  nav: "Supply shifts lab", title: "Same shift, different elasticity",
  html() {
    return `<div class="eyebrow">Study · Elasticity in action</div><h1>Same shift, different elasticity</h1>
<p class="lede">Shift supply left by exactly the same amount in a market with elastic curves (sports cars) and one with inelastic curves (chocolate). The elasticities decide <i>how the damage is split</i> between price and quantity.</p>
<div class="card" style="display:flex;flex-direction:column;gap:14px">
<div class="row"><label class="small" for="shiftamt"><b>Leftward shift of supply:</b> <span id="shiftval" class="mono">2.0</span> units</label><input type="range" id="shiftamt" min="0" max="3" step="0.5" value="2" style="flex:1;min-width:160px;accent-color:var(--accent)"></div>
<div class="grid2"><div><h3>Sports cars</h3><p class="small muted">Elastic demand, elastic supply (spare factory capacity)</p><div class="qfig" id="labcars"></div></div>
<div><h3>Chocolate</h3><p class="small muted">Inelastic demand, inelastic supply (cocoa takes years to grow)</p><div class="qfig" id="labchoc"></div></div></div>
<div class="tablewrap"><table class="table" id="labtable"></table></div></div>
<div class="card prose"><h2>Why it happens</h2><ul><li><b>Elastic demand (flat D):</b> a small price rise makes buyers walk away, so quantity falls a lot and price barely moves. Revenue falls.</li>
<li><b>Inelastic demand (steep D):</b> buyers keep buying, so the shortage is rationed by a big price rise and quantity hardly falls. Revenue rises.</li>
<li>Ask: which product had the bigger change in price? The inelastic one. Which had the bigger change in quantity? The elastic one.</li></ul></div>
<div class="card" style="display:flex;flex-direction:column;gap:12px"><h2>Build your own market</h2>
<div class="row"><label class="small">Demand <select id="bd" class="sel"><option value="0.25">Elastic</option><option value="3">Inelastic</option></select></label>
<label class="small">Supply <select id="bs" class="sel"><option value="0.4">Elastic</option><option value="2">Inelastic</option></select></label>
<label class="small">Shock <select id="bk" class="sel"><option value="2">Supply falls (left)</option><option value="-2">Supply rises (right)</option></select></label></div>
<div class="grid2"><div class="qfig" id="byo"></div><div class="prose" id="byotxt"></div></div></div>
${practice("graph", null)}`;
  },
  init() {
    const row = (label, r) => `<tr><td>${label}</td><td class="mono">${r.p1} → ${r.p2}</td><td class="mono">${r.dP > 0 ? "+" : ""}${r.dP}%</td><td class="mono">${r.q1} → ${r.q2}</td><td class="mono">${r.dQ > 0 ? "+" : ""}${r.dQ}%</td><td class="mono">${r.tr1} → ${r.tr2}</td></tr>`;
    const draw = () => {
      const s = +document.getElementById("shiftamt").value;
      document.getElementById("shiftval").textContent = s.toFixed(1);
      const a = ELD.market({ m: 0.25, n: 0.4, shift: s, aria: "Sports car market" }), b = ELD.market({ m: 3, n: 2, shift: s, aria: "Chocolate market" });
      document.getElementById("labcars").innerHTML = a.svg; document.getElementById("labchoc").innerHTML = b.svg;
      document.getElementById("labtable").innerHTML = `<tr><th>Market</th><th>Price</th><th>%ΔP</th><th>Quantity</th><th>%ΔQ</th><th>Total revenue</th></tr>${row("Sports cars", a)}${row("Chocolate", b)}`;
    };
    document.getElementById("shiftamt").oninput = draw; draw();
    const byo = () => {
      const m = +document.getElementById("bd").value, n = +document.getElementById("bs").value, k = +document.getElementById("bk").value;
      const r = ELD.market({ m, n, shift: k, aria: "Your market" });
      document.getElementById("byo").innerHTML = r.svg;
      const pBig = Math.abs(r.dP) > Math.abs(r.dQ);
      document.getElementById("byotxt").innerHTML = `<p>Price: <b>${r.p1} → ${r.p2}</b> (${r.dP > 0 ? "+" : ""}${r.dP}%).<br>Quantity: <b>${r.q1} → ${r.q2}</b> (${r.dQ > 0 ? "+" : ""}${r.dQ}%).<br>Total revenue: <b>${r.tr1} → ${r.tr2}</b> (${r.tr2 > r.tr1 ? "up" : r.tr2 < r.tr1 ? "down" : "no change"}).</p><p class="small muted">${pBig ? "Price moves by a bigger percentage than quantity, so revenue moves in the same direction as price." : "Quantity moves by a bigger percentage than price, so revenue moves in the direction of quantity."}</p>`;
    };
    ["bd", "bs", "bk"].forEach((id) => document.getElementById(id).onchange = byo); byo();
  },
};

/* ------------------------------------------------------------ Cheat sheet */
NOTES.cheat = {
  nav: "Formula sheet", title: "Formula sheet",
  html() {
    const rows = [
      ["PED", "%ΔQd ÷ %ΔP", "Ignore sign. Above 1 elastic, below 1 inelastic. Elastic: price up, TR down."],
      ["YED", "%ΔQd ÷ %ΔIncome", "Keep sign. Positive normal, negative inferior. Above +1 luxury."],
      ["XED", "%ΔQd of A ÷ %ΔP of B", "Positive substitutes, negative complements, about 0 unrelated."],
      ["PES", "%ΔQs ÷ %ΔP", "Always positive. Above 1 elastic, below 1 inelastic."],
      ["% change", "(new − old) ÷ old × 100", "Always divide by the starting value (IB method)."],
      ["Total revenue", "Price × Quantity", "Compare before and after a price change."],
    ];
    const terms = [
      ["Price elasticity of demand", "The responsiveness of quantity demanded to a change in the good's own price."],
      ["Income elasticity of demand", "The responsiveness of quantity demanded to a change in consumers' incomes."],
      ["Cross-price elasticity of demand", "The responsiveness of quantity demanded of one good to a change in the price of another good."],
      ["Price elasticity of supply", "The responsiveness of quantity supplied to a change in the good's own price."],
      ["Normal good", "A good with positive YED: demand rises when income rises."],
      ["Inferior good", "A good with negative YED: demand falls when income rises."],
      ["Luxury", "A normal good with YED above 1: demand rises by a bigger percentage than income."],
      ["Necessity", "A normal good with YED between 0 and 1."],
      ["Substitutes", "Goods that can replace each other; positive XED."],
      ["Complements", "Goods used together; negative XED."],
      ["Engel curve", "A curve showing the relationship between income and the quantity demanded of a good."],
      ["Total revenue", "The price per unit times the quantity sold."],
      ["Spare capacity", "Unused productive capacity; it makes supply more elastic."],
      ["Perfectly inelastic", "Elasticity of 0: quantity does not respond at all. Vertical curve."],
      ["Perfectly elastic", "Elasticity of ∞: quantity responds without limit. Horizontal curve."],
    ];
    return `<div class="eyebrow">Reference</div><h1>Formula sheet and key terms</h1>
<div class="card"><div class="tablewrap"><table class="table"><tr><th>Measure</th><th>Formula</th><th>Reading it</th></tr>${rows.map((r) => `<tr><td><b>${r[0]}</b></td><td class="mono">${r[1]}</td><td>${r[2]}</td></tr>`).join("")}</table></div></div>
<div class="card prose"><h2>Key terms</h2><div class="terms">${terms.map((t) => `<div class="term"><b>${t[0]}</b><p>${t[1]}</p></div>`).join("")}</div></div>`;
  },
};
