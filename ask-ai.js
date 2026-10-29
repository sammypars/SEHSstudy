/* =====================================================================
   Ask AI: follow-up help on a missed question
   Shared by every study site. Include it with
     <script src="../../ask-ai.js"></script>
   then put AskAI.box({...}) into the feedback HTML after a wrong answer:
     AskAI.box({
       lang: "en" | "fr",          // language of the site (and the AI's reply)
       subject: "IB Economics",     // class / test name
       question: "...",             // question text (HTML is stripped)
       options: ["...", ...],       // optional answer choices
       correct: 0,                  // index of the correct option, or answer text
       picked: 2,                   // index the student picked, or their answer text
       explanation: "..."           // the site's own explanation, if any
     })
   No API key, no server: the buttons open the AI's own site with the
   question already filled in (Gemini can't prefill, so it copies instead).
   ===================================================================== */
(function () {
  const store = [];
  const LET = "ABCDEFGH";
  const T = {
    en: {
      title: "Still confused? Ask a follow-up",
      sub: "Opens an AI tutor with this question already loaded. Keep asking until it clicks.",
      gem: "Gemini (copies question)",
      copied: "Copied. Paste it into Gemini.",
    },
    fr: {
      title: "Toujours pas clair ? Pose une question",
      sub: "Ouvre un tuteur IA avec cette question déjà chargée. Continue à demander jusqu'à ce que tu comprennes.",
      gem: "Gemini (copie la question)",
      copied: "Copié. Colle-le dans Gemini.",
    },
  };

  function text(html) {
    const d = document.createElement("div");
    d.innerHTML = String(html == null ? "" : html);
    return (d.textContent || "").replace(/\s+/g, " ").trim();
  }
  function opt(c, options) {
    if (c == null) return "";
    if (typeof c === "number" && options) return LET[c] + ". " + text(options[c]);
    return text(c);
  }

  function prompt(c) {
    const fr = c.lang === "fr";
    const L = [];
    L.push(
      fr
        ? `Je suis un élève de lycée et je révise pour un contrôle (${c.subject}). Le cours est en français. J'ai raté cette question et je veux vraiment comprendre.`
        : `I'm a high school student studying for a test (${c.subject}). I got this practice question wrong and want to really understand it.`
    );
    L.push("");
    L.push((fr ? "Question : " : "Question: ") + text(c.question));
    if (c.options && c.options.length)
      c.options.forEach((o, i) => L.push(`${LET[i]}. ${text(o)}`));
    if (c.picked != null && c.picked !== "")
      L.push((fr ? "Ma réponse : " : "My answer: ") + opt(c.picked, c.options));
    if (c.correct != null)
      L.push((fr ? "Bonne réponse : " : "Correct answer: ") + opt(c.correct, c.options));
    if (c.explanation)
      L.push((fr ? "Explication du site : " : "The study site's explanation: ") + text(c.explanation));
    L.push("");
    L.push(
      fr
        ? "Explique-moi simplement pourquoi ma réponse est fausse et pourquoi la bonne réponse est correcte, avec un exemple concret. Réponds en français, de façon courte. Ensuite, pose-moi une question rapide pour vérifier que j'ai compris. Je te poserai d'autres questions après."
        : "Explain simply why my answer is wrong and why the correct one is right, with a concrete example. Keep it short. Then ask me one quick question to check I understood. I'll ask follow-ups after that."
    );
    let p = L.join("\n");
    if (p.length > 1800) p = p.slice(0, 1800) + "…";
    return p;
  }

  function box(c) {
    c = Object.assign({ lang: "en", subject: "a class" }, c);
    const id = store.push({ p: prompt(c), lang: c.lang }) - 1;
    const t = T[c.lang] || T.en;
    return `<div class="askai" data-askai="${id}">
      <div class="askai-h">${t.title}</div>
      <div class="askai-s">${t.sub}</div>
      <div class="askai-b">
        <button type="button" data-ai="chatgpt">ChatGPT</button>
        <button type="button" data-ai="claude">Claude</button>
        <button type="button" data-ai="gemini">${t.gem}</button>
      </div>
      <div class="askai-n" aria-live="polite"></div>
    </div>`;
  }

  // Pull the question straight from the page, for checks that don't have a data object handy
  function fromDom(el, c) {
    const q = el && el.querySelector(".prompt");
    return box(Object.assign({ question: q ? q.innerHTML : "" }, c));
  }

  async function copy(s) {
    try { await navigator.clipboard.writeText(s); return true; } catch (e) {}
    try {
      const t = document.createElement("textarea");
      t.value = s; t.style.position = "fixed"; t.style.opacity = "0";
      document.body.appendChild(t); t.select();
      const ok = document.execCommand("copy"); t.remove(); return ok;
    } catch (e) { return false; }
  }

  document.addEventListener("click", async (e) => {
    const b = e.target.closest(".askai button[data-ai]");
    if (!b) return;
    e.stopPropagation();
    const wrap = b.closest(".askai");
    const item = store[+wrap.dataset.askai];
    if (!item) return;
    const p = item.p;
    const q = encodeURIComponent(p);
    const ai = b.dataset.ai;
    if (ai === "chatgpt") window.open("https://chatgpt.com/?q=" + q, "_blank", "noopener");
    else if (ai === "claude") window.open("https://claude.ai/new?q=" + q, "_blank", "noopener");
    else {
      const ok = await copy(p);
      wrap.querySelector(".askai-n").textContent = ok ? (T[item.lang] || T.en).copied : "";
      window.open("https://gemini.google.com/app", "_blank", "noopener");
    }
  });

  // Styles: use each site's own color tokens when they exist
  const css = `
  .askai{margin-top:4px;padding:14px 16px;border-radius:10px;border:1px dashed var(--line,#ccc);background:var(--sunk,var(--bg,transparent));display:flex;flex-direction:column;gap:6px}
  .askai-h{font-weight:600;font-size:15px}
  .askai-s{font-size:13px;color:var(--muted,#666);max-width:70ch}
  .askai-b{display:flex;flex-wrap:wrap;gap:8px;margin-top:4px}
  .askai-b button{font:inherit;font-size:14px;padding:7px 14px;border-radius:999px;border:1px solid var(--line,#ccc);background:var(--surface,var(--card,transparent));color:var(--ink,inherit);cursor:pointer}
  .askai-b button:hover{border-color:var(--accent,var(--ink,#333))}
  .askai-n{font-size:12px;color:var(--muted,#666);min-height:1em}`;
  const s = document.createElement("style");
  s.textContent = css;
  document.head.appendChild(s);

  window.AskAI = { box, fromDom, prompt };
})();
