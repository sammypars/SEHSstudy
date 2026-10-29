# SEHS Study

Test review sites, organized by class. The home page (`index.html`) links to each one.

```
index.html                     hub page (edit the CLASSES list to add a class or test)
ask-ai.js                      shared "Ask a follow-up" box shown after a wrong answer
lang.js                        shared FR / EN toggle for the French sites
econ/
  unit-1-test/
    index.html                 IB Econ study lab (Units 1–2)
    markets-practice.html      Markets test practice
ap-french/
  unit-2-vocab-test/
    index.html                 Thème 2 vocab: flashcards, multiple choice, spelling (words are in the VOCAB list at the top of the script)
hota/
  october-mc-test/
    index.html                 HOTA Unit 2 multiple choice review (in French)
    data.js                    all questions, dates, people, quotes, vocab and notes (French)
    data.en.js                 the same content in English, used when the toggle is on EN
```

## Adding a new test

1. Make a folder: `<class>/<test-name>/` with its own `index.html`.
2. Add it to the `CLASSES` list in the root `index.html`.

## Adding HOTA material

Everything lives in `hota/october-mc-test/data.js`:

- `Q(...)` lines are written questions. The first option is the correct answer; options are shuffled when shown.
- `CHRONO`, `PEOPLE`, `QUOTES` and `LEX` feed the auto-generated quizzes.
- `NOTES` holds the lesson review sheets; `CARD_DEFAULT` is the starting index card.
- Add the English version of anything new to `data.en.js`, in the same order (question ids are their position in the list).

## Ask a follow-up (AI help on missed questions)

`ask-ai.js` adds a box under any wrong answer with buttons that open ChatGPT or Claude with the question, the choices, your answer, the right answer and the site's explanation already filled in, so you can keep asking. Gemini can't be prefilled, so its button copies the question and opens Gemini. No API key or server is involved.

To use it on a new test page, add `<script src="../../ask-ai.js"></script>` and put `AskAI.box({...})` in the feedback after a wrong answer (the options are listed at the top of `ask-ai.js`).

## French sites: always add the FR / EN toggle

Every site for a class taught in French gets a French / English switch that changes the whole page, questions included. The choice is shared across all the sites.

1. In `<head>`, before any other script: `<script src="../../lang.js"></script>`, and set `<html lang="fr" data-default-lang="fr">`.
2. Put `<span data-langtoggle></span>` where the switch should appear (somewhere visible on phones too).
3. Static text: add `data-en="English text"` to the element. Text built in JavaScript: write `L("français", "English")`.
4. Content: keep the English version alongside the French (like `data.en.js` for HOTA, or a third English item in each AP French `VOCAB` entry) and swap it in when `LANG === "en"`.
5. Pass `lang: LANG` to `AskAI.box(...)` so the AI answers in the language the page is in.
