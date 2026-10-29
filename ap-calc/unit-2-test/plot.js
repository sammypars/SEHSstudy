/* =====================================================================
   Graphs and value tables for the AP Calc site.
     plot({x:[-4,6], y:[-3,5], pieces:[...], desc:"..."})  -> SVG string
   pieces:
     {seg:[[x,y],[x,y],...], c:0}     straight segments joined in order
     {fn:x=>..., a:-2, b:3, c:1}      a curve sampled between a and b
     {dot:[[x,y]...], c:0}            closed (filled) endpoint
     {open:[[x,y]...], c:0}           open circle (hole)
     {text:"f(x)", at:[x,y], c:0}     label in the plot's coordinates
     {dash:[[x,y],[x,y]], c:2}        dashed line (tangent / secant)
   c picks the colour: 0 = main, 1 = second function, 2 = helper line.
   desc is plain text describing the graph; the "Ask AI" box sends it so
   the tutor knows what the picture shows.

     table([["x",-2,0,1],["f(x)",3,4,-5]])  -> HTML value table
   ===================================================================== */
(function () {
  let n = 0;
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
  const r2 = (v) => Math.round(v * 100) / 100;

  function plot(s) {
    const [x0, x1] = s.x, [y0, y1] = s.y;
    const u = s.u || 30, pad = 24;
    const W = (x1 - x0) * u + pad * 2, H = (y1 - y0) * u + pad * 2;
    const X = (x) => r2(pad + (x - x0) * u), Y = (y) => r2(pad + (y1 - y) * u);
    const id = "clip" + ++n;
    const step = s.lab || 1;
    let o = `<svg class="plot" viewBox="0 0 ${W} ${H}" style="max-width:${Math.min(W, s.max || 540)}px" role="img" aria-label="${esc(s.desc || "graph")}">`;
    o += `<defs><clipPath id="${id}"><rect x="${X(x0)}" y="${Y(y1)}" width="${(x1 - x0) * u}" height="${(y1 - y0) * u}"/></clipPath></defs>`;
    // grid
    o += `<g class="g-grid">`;
    for (let x = Math.ceil(x0); x <= x1; x++) o += `<line x1="${X(x)}" y1="${Y(y0)}" x2="${X(x)}" y2="${Y(y1)}"/>`;
    for (let y = Math.ceil(y0); y <= y1; y++) o += `<line x1="${X(x0)}" y1="${Y(y)}" x2="${X(x1)}" y2="${Y(y)}"/>`;
    o += `</g><g class="g-axis">`;
    const ax = y0 <= 0 && y1 >= 0 ? 0 : y0, ay = x0 <= 0 && x1 >= 0 ? 0 : x0;
    o += `<line x1="${X(x0)}" y1="${Y(ax)}" x2="${X(x1)}" y2="${Y(ax)}"/><line x1="${X(ay)}" y1="${Y(y0)}" x2="${X(ay)}" y2="${Y(y1)}"/></g>`;
    // tick labels
    o += `<g class="g-lab">`;
    for (let x = Math.ceil(x0 / step) * step; x <= x1; x += step) {
      if (x === 0 || x === x0 || x === x1) continue;
      o += `<text x="${X(x)}" y="${Y(ax) + 13}" text-anchor="middle">${x < 0 ? "−" + -x : x}</text>`;
    }
    for (let y = Math.ceil(y0 / step) * step; y <= y1; y += step) {
      if (y === 0 || y === y0 || y === y1) continue;
      o += `<text x="${X(ay) - 5}" y="${Y(y) + 3.5}" text-anchor="end">${y < 0 ? "−" + -y : y}</text>`;
    }
    if (x0 <= 0 && x1 >= 0 && y0 <= 0 && y1 >= 0) o += `<text x="${X(0) - 5}" y="${Y(0) + 13}" text-anchor="end">0</text>`;
    o += `</g><g clip-path="url(#${id})">`;
    const pts = [];
    for (const p of s.pieces || []) {
      const c = "c" + (p.c || 0);
      if (p.seg) o += `<polyline class="g-ln ${c}" points="${p.seg.map(([a, b]) => X(a) + "," + Y(b)).join(" ")}"/>`;
      if (p.dash) o += `<polyline class="g-ln g-dash ${c}" points="${p.dash.map(([a, b]) => X(a) + "," + Y(b)).join(" ")}"/>`;
      if (p.fn) {
        const N = p.n || 260;
        let d = "", pen = false;
        for (let i = 0; i <= N; i++) {
          const x = p.a + ((p.b - p.a) * i) / N, y = p.fn(x);
          if (!isFinite(y) || Math.abs(y) > 1e3) { pen = false; continue; }
          d += (pen ? "L" : "M") + X(x) + " " + Y(y);
          pen = true;
        }
        o += `<path class="g-ln ${c}" d="${d}"/>`;
      }
      if (p.dot) p.dot.forEach(([a, b]) => pts.push(`<circle class="g-dot ${c}" cx="${X(a)}" cy="${Y(b)}" r="4"/>`));
      if (p.open) p.open.forEach(([a, b]) => pts.push(`<circle class="g-open ${c}" cx="${X(a)}" cy="${Y(b)}" r="4"/>`));
      if (p.text) pts.push(`<text class="g-name ${c}" x="${X(p.at[0])}" y="${Y(p.at[1])}">${esc(p.text)}</text>`);
    }
    o += `</g>${pts.join("")}</svg>`;
    return o;
  }

  function fmt(v) {
    if (typeof v === "number") return "$" + (v < 0 ? "-" + -v : v) + "$";
    return v.indexOf("$") >= 0 ? v : "$" + v + "$";
  }
  function table(rows) {
    return `<div class="vt-wrap"><table class="vt">${rows
      .map((r, i) => `<tr>${r.map((c, j) => (j === 0 ? `<th>${fmt(c)}</th>` : `<td${i === 0 ? ' class="h"' : ""}>${fmt(c)}</td>`)).join("")}</tr>`)
      .join("")}</table></div>`;
  }
  function tableText(rows) {
    return rows.map((r) => r.join(" | ")).join("; ");
  }

  window.PLOT = { plot, table, tableText };
})();
