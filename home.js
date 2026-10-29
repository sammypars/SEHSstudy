/* =====================================================================
   "All classes" home button, shared by every study site.
   Put <a data-home></a> where it should go and load this script:
     <script src="../../home.js"></script>
   It links to the SEHS Study hub (the repo root), works on GitHub Pages,
   locally and when opened from the file system, and follows the FR / EN
   toggle when lang.js is on the page. On phones it shrinks to an icon.
   ===================================================================== */
(function () {
  const css = `
  .homebtn{display:inline-flex;align-items:center;gap:7px;flex:none;text-decoration:none;font:inherit;font-size:13.5px;font-weight:600;
    color:var(--ink,inherit);background:var(--surface,var(--card,transparent));border:1px solid var(--line,#ccc);border-radius:999px;padding:6px 12px 6px 9px;line-height:1.2;white-space:nowrap}
  .homebtn:hover{border-color:var(--accent,currentColor);color:var(--accent,inherit)}
  .homebtn:focus-visible{outline:2px solid var(--accent,#36c);outline-offset:2px}
  .homebtn svg{width:16px;height:16px;flex:none}
  @media (max-width:880px){.homebtn.compact{padding:6px 8px}.homebtn.compact .homebtn-t{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}}`;

  function init() {
    const s = document.createElement("style");
    s.textContent = css;
    document.head.appendChild(s);
    const en = window.LANG === "en" || (!window.LANG && document.documentElement.lang === "en");
    const native = document.documentElement.getAttribute("data-default-lang");
    const label = en || !window.LANG ? "All classes" : native === "es" ? "Todas las clases" : "Toutes les classes";
    document.querySelectorAll("a[data-home]").forEach((a) => {
      const depth = parseInt(a.getAttribute("data-home") || "2", 10);
      let href = "../".repeat(isNaN(depth) ? 2 : depth);
      if (location.protocol === "file:") href += "index.html";
      a.href = href;
      a.classList.add("homebtn");
      a.setAttribute("aria-label", label);
      a.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20h14V9.5"/><path d="M10 20v-5h4v5"/></svg><span class="homebtn-t">${label}</span>`;
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
