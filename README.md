# SEHS Study

Test review sites, organized by class. The home page (`index.html`) links to each one.

```
index.html                     hub page (edit the CLASSES list to add a class or test)
ask-ai.js                      shared "Ask a follow-up" box shown after a wrong answer
lang.js                        shared FR / EN toggle for the French sites
home.js                        shared "All classes" button back to this hub page
device.js                      phone / touch vs desktop tuning, and remembers the light / dark choice (load first in <head> on every page)
econ/
  unit-1-test/
    index.html                 IB Econ study lab (Units 1–2); #ds is the Demand & Supply notes page
                               (determinants live in DETS, examples come from the EV event list)
    markets-practice.html      Markets test practice; shift, double-shift and disequilibrium problems come in
                               versions A–D (VERSIONS list), determinant answers in DETANS; open with ?v=B etc.
ap-french/
  unit-2-vocab-test/
    index.html                 Thème 2 vocab: flashcards, multiple choice, spelling (words are in the VOCAB list at the top of the script)
spanish-4/
  unit-1-test/
    index.html                 IB Spanish 4 Unit 1 study site (Spanish, with the ES / EN toggle)
    vocab.js                   every "vocabulario disponible" list with English, plus connectors and data language
    notes.js                   study notes (Spanish + English) and the listening practice clips
    drills.js                  question banks for connectors, gerunds, email / infographic rules, text-type choice
    tests.js                   the five practice tests (writing task, reading, vocabulary)
ap-calc/
  unit-2-test/
    index.html                 AP Calc AB Unit 2 (derivatives): dashboard, multiple choice, FRQs, memorize drill, mock test
    questions.js               multiple choice bank (TOPICS list + Q(...) lines; first option is the correct one)
    frq.js                     AP-style free response questions with solutions and 9-point scoring guides
    formulas.js                formula sheet (SHEET) and the flashcard / quick-fire deck (DRILL)
    plot.js                    draws graphs (SVG) and value tables for questions
hota/
  october-mc-test/
    index.html                 HOTA Unit 2 multiple choice review (in French)
    data.js                    all questions, dates, people, quotes, vocab and notes (French)
    data.en.js                 the same content in English, used when the toggle is on EN
```

## Adding a new test

1. Make a folder: `<class>/<test-name>/` with its own `index.html`.
2. Add it to the `CLASSES` list in the root `index.html`.
3. Load `<script src="../../device.js"></script>` first thing in `<head>`. It hides keyboard hints on touch screens, makes buttons finger-sized, stops iPhones zooming into text boxes, and pins the Next / Check button to the bottom on phones. Use `.touch-only` / `.mouse-only` for text that should differ (e.g. "swipe" vs "press →").
4. Give it the home button: `<script src="../../home.js"></script>` and `<a data-home></a>` at the top of the page (add `class="compact"` in a sidebar so it shrinks to an icon on phones).

## Adding HOTA material

Everything lives in `hota/october-mc-test/data.js`:

- `Q(...)` lines are written questions. The first option is the correct answer; options are shuffled when shown.
- `CHRONO`, `PEOPLE`, `QUOTES` and `LEX` feed the auto-generated quizzes.
- `NOTES` holds the lesson review sheets; `CARD_DEFAULT` is the starting index card.
- Add the English version of anything new to `data.en.js`, in the same order (question ids are their position in the list).

## Ask a follow-up (AI help on missed questions)

`ask-ai.js` adds a box under any wrong answer with buttons that open ChatGPT or Claude with the question, the choices, your answer, the right answer and the site's explanation already filled in, so you can keep asking. Gemini can't be prefilled, so its button copies the question and opens Gemini. No API key or server is involved.

To use it on a new test page, add `<script src="../../ask-ai.js"></script>` and put `AskAI.box({...})` in the feedback after a wrong answer (the options are listed at the top of `ask-ai.js`).

## Spanish 4 practice tests

Each test in `spanish-4/unit-1-test/tests.js` has a writing task (`type` is the right answer: "correo" or "infografia"), a reading text with questions (`mc`, `tf` with a justification, or `word`), and vocabulary items. The first option is always the correct one; options are shuffled on screen. "Grade with AI" sends the student's text, the task and an IB-style rubric (criteria A, B, C out of 30) to ChatGPT, Claude or Gemini through `ask-ai.js` (pass `prompt:` for a custom prompt).

## French and Spanish sites: always add the language toggle

`lang.js` works for both: set `data-default-lang="fr"` or `"es"` on `<html>`. The steps below say FR, but they're the same for ES.

## French sites: always add the FR / EN toggle

Every site for a class taught in French gets a French / English switch that changes the whole page, questions included. The choice is shared across all the sites.

1. In `<head>`, before any other script: `<script src="../../lang.js"></script>`, and set `<html lang="fr" data-default-lang="fr">`.
2. Put `<span data-langtoggle></span>` where the switch should appear (somewhere visible on phones too).
3. Static text: add `data-en="English text"` to the element. Text built in JavaScript: write `L("français", "English")`.
4. Content: keep the English version alongside the French (like `data.en.js` for HOTA, or a third English item in each AP French `VOCAB` entry) and swap it in when `LANG === "en"`.
5. Pass `lang: LANG` to `AskAI.box(...)` so the AI answers in the language the page is in.

## AP Calc material

Math is written in LaTeX between `$...$` and rendered with KaTeX. Strings are written as M`...` so backslashes don't need doubling. Don't use a bare `<` inside math (the browser reads it as a tag); write `\lt`.

- **Multiple choice** (`questions.js`): `Q("2.4", question, [correct, wrong, wrong, wrong], explanation, {g, tb, calc})`. `g` is a graph spec (see the top of `plot.js`, give it a `desc` so "Ask AI" knows what the graph shows), `tb` is a table as rows (`[["x",1,2],["f(x)",3,4]]`), `calc: true` marks a calculator question. Add a new topic to `TOPICS` and it shows up on the dashboard and in the filters.
- **FRQs** (`frq.js`): each part has a prompt, a worked answer and a list of points; keep each FRQ at 9 points. "Grade my work with AI" sends the question, the student's typed work and the scoring guide.
- **Formula sheet / memorize** (`formulas.js`): `SHEET` rows are `[prompt, answer]`; memorize mode covers the answers. `FLASH` holds the flashcard decks (`{id, name, cards:[[front, back], ...]}`); a new deck shows up as its own chip, and "All cards" mixes them. `DRILL` rows are `[prompt, correct, wrong, wrong, wrong]` for quick-fire.
- Flashcards run from the arrow keys: ↑/↓ (or Space) flip, → flips then marks "got it", ← marks "again" (or goes back a card before flipping). Quick-fire: A–D or 1–4 to answer, → or Enter for the next one.
- For a new unit, copy the folder to `ap-calc/unit-3-test/` and replace the three data files.
