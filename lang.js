/* =====================================================================
   Native / EN language toggle, shared by the French and Spanish study sites.
   Load it in <head>, BEFORE any other script:
     <html lang="fr" data-default-lang="fr">   (French site)
     <html lang="es" data-default-lang="es">   (Spanish site)
     <script src="../../lang.js"></script>
   It sets:
     LANG        "fr" / "es" (the site's own language) or "en"
     L(native, en)  returns the string for the current language
   and, once the page loads:
     - swaps the text of any element with data-en="English text"
     - draws the FR | EN switch inside any element with data-langtoggle
   The English choice is remembered across all the sites (and can be forced
   with ?lang=en or ?lang=fr / ?lang=es in the URL). Switching reloads the page.
   ===================================================================== */
(function () {
  const KEY = "sehs.lang";
  const root = document.documentElement;
  let saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  let fromUrl = null;
  try { fromUrl = new URL(location.href).searchParams.get("lang"); } catch (e) {}
  const def = root.getAttribute("data-default-lang") || "fr";
  const ok = (v) => v === def || v === "en";
  // "en" carries across sites; any other saved value means "the site's own language"
  const lang = ok(fromUrl) ? fromUrl : saved === "en" ? "en" : def;
  if (ok(fromUrl)) { try { localStorage.setItem(KEY, fromUrl); } catch (e) {} }

  window.LANG = lang;
  window.L = (fr, en) => (lang === "en" ? en : fr);
  root.lang = lang;

  function setLang(v) {
    if (v === lang) return;
    let stored = false;
    try { localStorage.setItem(KEY, v); stored = localStorage.getItem(KEY) === v; } catch (e) {}
    if (stored) {
      // drop a ?lang= left in the URL so the saved choice wins next time
      try {
        const u = new URL(location.href);
        if (u.searchParams.has("lang")) { u.searchParams.delete("lang"); location.replace(u.href); return; }
      } catch (e) {}
      location.reload();
    } else {
      const u = new URL(location.href);
      u.searchParams.set("lang", v);
      location.replace(u.href);
    }
  }
  window.setLang = setLang;

  const css = `
  .langtog{display:inline-flex;border:1px solid var(--line,#ccc);border-radius:999px;padding:2px;gap:2px;background:var(--surface,var(--card,transparent));flex:none}
  .langtog button{font:inherit;font-size:12px;font-weight:600;letter-spacing:.04em;border:0;background:transparent;color:var(--muted,#666);padding:4px 10px;border-radius:999px;cursor:pointer}
  .langtog button[aria-pressed="true"]{background:var(--ink,currentColor);color:var(--surface,var(--card,var(--bg,Canvas)))}
  .langtog button:focus-visible{outline:2px solid var(--accent,#36c);outline-offset:1px}`;

  function init() {
    const s = document.createElement("style");
    s.textContent = css;
    document.head.appendChild(s);
    if (lang === "en") {
      document.querySelectorAll("[data-en]").forEach((el) => { el.textContent = el.getAttribute("data-en"); });
      document.querySelectorAll("[data-en-title]").forEach((el) => { el.title = el.getAttribute("data-en-title"); });
      document.querySelectorAll("[data-en-placeholder]").forEach((el) => { el.placeholder = el.getAttribute("data-en-placeholder"); });
      const t = root.getAttribute("data-en-doc-title");
      if (t) document.title = t;
    }
    document.querySelectorAll("[data-langtoggle]").forEach((box) => {
      box.innerHTML = `<div class="langtog" role="group" aria-label="${lang === "en" ? "Language" : def === "es" ? "Idioma" : "Langue"}">
        <button type="button" data-l="${def}" aria-pressed="${lang === def}" title="${def === "es" ? "Español" : "Français"}">${def.toUpperCase()}</button>
        <button type="button" data-l="en" aria-pressed="${lang === "en"}" title="English">EN</button></div>`;
      box.querySelectorAll("button").forEach((b) => (b.onclick = () => setLang(b.dataset.l)));
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
