/* =====================================================================
   Phone / touch vs desktop tuning, shared by every study site.
   Load it in <head> (before the page draws):  <script src="../../device.js"></script>

   It tags <html> with classes that stay current as the window changes:
     is-touch | is-mouse          main input is a finger or a mouse/trackpad
     is-phone | is-tablet | is-desktop   by screen width
   and exposes window.DEVICE = { touch, phone, tablet, desktop }.

   What it changes on its own, with no page edits needed:
     touch   keyboard-shortcut hints are hidden (anything with .kbd keys)
             buttons, choices and menus get finger-sized tap targets
             text boxes and menus use 16px text so iPhones don't zoom in
     phone   the Next / Check button sticks to the bottom of the screen
             after answering, the explanation scrolls into view
   Pages can also use .touch-only / .mouse-only to show different text.
   ===================================================================== */
(function () {
  const root = document.documentElement;
  const mqTouch = matchMedia("(hover: none) and (pointer: coarse)");
  const mqPhone = matchMedia("(max-width: 640px)");
  const mqTablet = matchMedia("(min-width: 641px) and (max-width: 1024px)");
  const D = (window.DEVICE = {});

  function apply() {
    D.touch = mqTouch.matches || (navigator.maxTouchPoints > 0 && !matchMedia("(hover: hover)").matches);
    D.phone = mqPhone.matches;
    D.tablet = !D.phone && mqTablet.matches;
    D.desktop = !D.phone && !D.tablet;
    root.classList.toggle("is-touch", D.touch);
    root.classList.toggle("is-mouse", !D.touch);
    root.classList.toggle("is-phone", D.phone);
    root.classList.toggle("is-tablet", D.tablet);
    root.classList.toggle("is-desktop", D.desktop);
  }
  apply();
  [mqTouch, mqPhone, mqTablet].forEach((m) => m.addEventListener && m.addEventListener("change", apply));

  const css = `
  .is-touch .mouse-only,.is-mouse .touch-only{display:none!important}
  .is-touch .kbd,.is-touch :is(span,p,div):has(> .kbd){display:none!important}

  .is-touch :is(button,.btn,select,.opt,.chip,.tab,[role=tab],.seg button,.homebtn){min-height:44px}
  .is-touch .langtog button{min-height:36px;min-width:40px}
  .is-touch :is(.star,.accents button){min-width:44px;min-height:44px}
  .is-touch .nav a{min-height:40px;display:inline-flex;align-items:center}
  .is-touch :is(nav > a,.links a){min-height:40px;display:inline-flex;align-items:center;padding-inline:6px}
  .is-touch :is(label):has(> input[type=checkbox],> input[type=radio]){min-height:40px}
  .is-touch input[type=checkbox],.is-touch input[type=radio]{width:20px;height:20px}
  .is-touch :is(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea){font-size:16px!important}
  .is-touch :is(button,a,.opt,[role=button]){-webkit-tap-highlight-color:transparent;touch-action:manipulation}

  .is-phone :is(.qfoot,.row:has(> #next),.row:has(> #chk)){position:sticky;bottom:0;z-index:6;
    background:var(--bg,Canvas);margin-inline:-4px;padding:10px 4px calc(10px + env(safe-area-inset-bottom,0px));
    box-shadow:0 -1px 0 var(--line,rgba(0,0,0,.1))}
  .is-phone :is(.qfoot,.row:has(> #next)) :is(#next){flex:1}
  .is-phone .row:has(> #chk) > *{flex:1}`;
  const s = document.createElement("style");
  s.textContent = css;
  (document.head || root).appendChild(s);

  // On phones, bring the explanation into view after an answer is checked.
  const FB = ".feedback, .fb, .explain:not([hidden])";
  let t = null;
  new MutationObserver((muts) => {
    if (!D.phone) return;
    for (const m of muts) {
      const hit = [...m.addedNodes].find((n) => n.nodeType === 1 && (n.matches(FB) || n.querySelector(FB)));
      const el = hit && (hit.matches(FB) ? hit : hit.querySelector(FB));
      if (el) {
        clearTimeout(t);
        t = setTimeout(() => {
          const r = el.getBoundingClientRect();
          if (r.top > innerHeight * 0.55) el.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 60);
        return;
      }
    }
  }).observe(root, { childList: true, subtree: true });
})();
