/* =====================================================================
   Elasticity diagrams (SVG strings), styled by the page's CSS classes
   (.ax .axl .tick .cd .cs .cl .guide .dot .gap .pc). All curves are
   straight lines so the numbers printed next to each graph are exact.
   ===================================================================== */
const ELD = (() => {
  const W = 380, H = 290, L = 54, Rt = 358, T = 18, B = 248;
  let N = 0;
  const f2 = (x) => Math.round(x * 100) / 100;
  const X = (q) => L + (q / 10) * (Rt - L);
  const Y = (p) => B - (p / 10) * (B - T);

  function axes(xl, yl, aria) {
    return `<svg viewBox="0 0 ${W} ${H}" class="mkt" role="img" aria-label="${aria}"><path class="ax" d="M${L} ${T - 4}V${B}H${Rt + 4}"/>` +
      (yl.length > 2 ? `<text class="axl" x="${L + 8}" y="${T - 6}">${yl}</text>` : `<text class="axl" x="${L - 10}" y="${T + 6}" text-anchor="end">${yl}</text>`) +
      `<text class="axl" x="${Rt}" y="${B + 24}" text-anchor="end">${xl}</text>`;
  }

  /* Demand and supply through (5,5). m = demand steepness, n = supply steepness,
     shift = horizontal distance the supply curve moves LEFT (negative = right). */
  function market(o) {
    const m = o.m, n = o.n, sh = o.shift || 0;
    const q2 = (5 * m + (5 - sh) * n) / (m + n);
    const p2 = 5 - m * (q2 - 5);
    const id = "k" + ++N;
    const clip = (a, b) => {
      // line P = a + b*Q clipped to the 0..10 box
      let q0 = 0, q1 = 10;
      if (b !== 0) {
        const qa = (0 - a) / b, qb = (10 - a) / b;
        q0 = Math.max(0, Math.min(qa, qb)); q1 = Math.min(10, Math.max(qa, qb));
      }
      return `<line x1="${X(q0)}" y1="${Y(a + b * q0)}" x2="${X(q1)}" y2="${Y(a + b * q1)}"/>`;
    };
    const dA = 5 + 5 * m, sA = 5 - 5 * n, s2A = 5 - (5 - sh) * n;
    let g = axes("Q", "P", o.aria || "Demand and supply diagram");
    g += `<g class="cd" id="${id}d">${clip(dA, -m)}</g>`;
    g += `<g class="cs${sh ? " base" : ""}">${clip(sA, n)}</g>`;
    if (sh) g += `<g class="cs">${clip(s2A, n)}</g>`;
    const lab = (cls, txt, q, p, dy) => `<text class="cl ${cls}" x="${X(q)}" y="${Y(p) + dy}">${txt}</text>`;
    const dq = Math.min(9.4, (dA - 0.6) / m), dp = dA - m * dq;
    g += lab("d", "D", Math.min(9.3, dq), Math.max(0.7, dp), -6);
    const sq = Math.min(9.3, (9.4 - sA) / n);
    g += lab("s", sh ? "S1" : "S", Math.max(0.6, sq - 0.2), sA + n * Math.max(0.6, sq - 0.2), sh ? 16 : -6);
    if (sh) {
      const q = Math.min(9.3, (9.4 - s2A) / n);
      g += lab("s", "S2", Math.max(0.4, q - 0.2), s2A + n * Math.max(0.4, q - 0.2), -6);
    }
    const close = sh && Math.abs(Y(p2) - Y(5)) < 14;
    const dy1 = close ? (p2 > 5 ? 12 : -4) : 4, dy2 = close ? (p2 > 5 ? -4 : 12) : 4;
    const pt = (q, p, tp, tq, dy) => `<path class="guide" d="M${L} ${Y(p)}H${X(q)}V${B}"/><circle class="dot" cx="${X(q)}" cy="${Y(p)}" r="3.6"/>` +
      `<text class="tick" x="${L - 6}" y="${Y(p) + dy}" text-anchor="end">${tp}</text><text class="tick" x="${X(q)}" y="${B + 15}" text-anchor="middle">${tq}</text>`;
    g += pt(5, 5, sh ? "P1" : "Pe", sh ? "Q1" : "Qe", dy1);
    if (sh) g += pt(q2, p2, "P2", "Q2", dy2);
    g += "</svg>";
    const r = { svg: g, p1: 5, q1: 5, p2: f2(p2), q2: f2(q2) };
    r.dP = f2((p2 - 5) / 5 * 100); r.dQ = f2((q2 - 5) / 5 * 100);
    r.tr1 = 25; r.tr2 = f2(p2 * q2);
    return r;
  }

  /* Engel curve: income on x, quantity on y (swap = income on y). Three phases. */
  function engel(swap) {
    const pts = [[0, 0.2], [1.4, 3.6], [2.6, 5.4], [3.4, 6.2], [4.4, 6.5], [6.2, 6.5], [7.4, 6.1], [8.6, 4.6], [9.4, 3.2]];
    const pa = (xy) => swap ? [xy[1], xy[0]] : xy;
    const path = pts.map((p, i) => { const [a, b] = pa(p); return (i ? "L" : "M") + X(a).toFixed(1) + " " + Y(b).toFixed(1); }).join("");
    let g = axes(swap ? "Quantity of potatoes" : "Income", swap ? "Income" : "Quantity", "Engel curve with three phases");
    g += `<path class="cd" d="${path}" style="stroke-linejoin:round"/>`;
    const tag = (a, b, txt, dx, dy) => { const [x, y] = swap ? [b, a] : [a, b]; return `<text class="cl d" x="${X(x) + dx}" y="${Y(y) + dy}">${txt}</text>`; };
    g += tag(1.4, 3.6, "1", swap ? 8 : 6, swap ? -4 : 16);
    g += tag(5.3, 6.5, "2", swap ? 14 : -4, swap ? 4 : -9);
    g += tag(8.0, 5.4, "3", swap ? -14 : 8, swap ? 4 : -4);
    return g + "</svg>";
  }

  /* Three PES shapes for the notes (D is not drawn). */
  function supplyShape(kind) {
    let g = axes("Q", "P", "Supply curve shape: " + kind);
    if (kind === "inelastic") g += `<g class="cs"><line x1="${X(5)}" y1="${Y(0)}" x2="${X(5)}" y2="${Y(9.5)}"/></g><text class="cl s" x="${X(5) + 8}" y="${Y(9)}">S (PES = 0)</text>`;
    else if (kind === "elastic") g += `<g class="cs"><line x1="${X(0)}" y1="${Y(5)}" x2="${X(9.5)}" y2="${Y(5)}"/></g><text class="cl s" x="${X(6)}" y="${Y(5) - 8}">S (PES = ∞)</text>`;
    else if (kind === "unit") g += `<g class="cs"><line x1="${X(0)}" y1="${Y(0)}" x2="${X(9)}" y2="${Y(9)}"/></g><text class="cl s" x="${X(6.2)}" y="${Y(7.4)}">S (PES = 1)</text>`;
    else if (kind === "steep") g += `<g class="cs"><line x1="${X(3)}" y1="${Y(0.5)}" x2="${X(6)}" y2="${Y(9.5)}"/></g><text class="cl s" x="${X(6.2)}" y="${Y(9)}">S (PES &lt; 1)</text>`;
    else g += `<g class="cs"><line x1="${X(0)}" y1="${Y(3)}" x2="${X(9.5)}" y2="${Y(6)}"/></g><text class="cl s" x="${X(6.4)}" y="${Y(5.9) - 10}">S (PES &gt; 1)</text>`;
    return g + "</svg>";
  }

  /* Straight-line demand with elastic / unit / inelastic regions. */
  function demandRegions() {
    let g = axes("Q", "P", "Straight-line demand curve split into elastic and inelastic parts");
    g += `<g class="cd"><line x1="${X(0)}" y1="${Y(10)}" x2="${X(10)}" y2="${Y(0)}"/></g><path class="guide" d="M${X(5)} ${Y(5)}V${B}M${L} ${Y(5)}H${X(5)}"/><circle class="dot" cx="${X(5)}" cy="${Y(5)}" r="3.6"/>`;
    g += `<text class="cl d" x="${X(1.2)}" y="${Y(7.6)}">elastic (PED &gt; 1)</text><text class="cl d" x="${X(5.4)}" y="${Y(5) - 8}">unit (PED = 1)</text><text class="cl d" x="${X(6.0)}" y="${Y(2.2)}">inelastic (PED &lt; 1)</text>`;
    return g + "</svg>";
  }

  /* Total revenue rectangles before / after a price change (P x Q). */
  function revenueBoxes(p1, q1, p2, q2, pmax, qmax) {
    const w = 380, h = 280, l = 54, r = 350, t = 20, b = 236;
    const x = (q) => l + (q / qmax) * (r - l), y = (p) => b - (p / pmax) * (b - t);
    let g = `<svg viewBox="0 0 ${w} ${h}" class="mkt" role="img" aria-label="Total revenue rectangles before and after the price change"><path class="ax" d="M${l} ${t - 4}V${b}H${r + 4}"/>`;
    g += `<text class="axl" x="${l - 10}" y="${t + 6}" text-anchor="end">P</text><text class="axl" x="${r}" y="${b + 24}" text-anchor="end">Q</text>`;
    g += `<rect x="${l}" y="${y(p1)}" width="${x(q1) - l}" height="${b - y(p1)}" style="fill:var(--dem);opacity:.22;stroke:var(--dem)"/>`;
    g += `<rect x="${l}" y="${y(p2)}" width="${x(q2) - l}" height="${b - y(p2)}" style="fill:var(--sup);opacity:.22;stroke:var(--sup)"/>`;
    g += `<text class="tick" x="${l - 6}" y="${y(p1) + 4}" text-anchor="end">$${p1}</text><text class="tick" x="${l - 6}" y="${y(p2) + 4}" text-anchor="end">$${p2}</text>`;
    g += `<text class="tick" x="${x(q1)}" y="${b + 15}" text-anchor="middle">${q1}</text><text class="tick" x="${x(q2)}" y="${b + 15}" text-anchor="middle">${q2}</text>`;
    g += `<text class="cl d" x="${r}" y="${t + 8}" text-anchor="end">before: $${p1} × ${q1} = $${p1 * q1}</text><text class="cl s" x="${r}" y="${t + 24}" text-anchor="end">after: $${p2} × ${q2} = $${p2 * q2}</text>`;
    return g + "</svg>";
  }

  /* Blank axes for "draw it yourself" tasks. */
  function blank(xl, yl) { return axes(xl, yl, "Blank axes") + "</svg>"; }

  return { market, engel, supplyShape, demandRegions, revenueBoxes, blank, f2 };
})();
