# SEHS Study

Test review sites, organized by class. The home page (`index.html`) links to each one.

```
index.html                     hub page (edit the CLASSES list to add a class or test)
ask-ai.js                      shared "Ask a follow-up" box shown after a wrong answer
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
    data.js                    all questions, dates, people, quotes, vocab and notes
```

## Adding a new test

1. Make a folder: `<class>/<test-name>/` with its own `index.html`.
2. Add it to the `CLASSES` list in the root `index.html`.

## Adding HOTA material

Everything lives in `hota/october-mc-test/data.js`:

- `Q(...)` lines are written questions. The first option is the correct answer; options are shuffled when shown.
- `CHRONO`, `PEOPLE`, `QUOTES` and `LEX` feed the auto-generated quizzes.
- `NOTES` holds the lesson review sheets; `CARD_DEFAULT` is the starting index card.

## Ask a follow-up (AI help on missed questions)

`ask-ai.js` adds a box under any wrong answer with buttons that open ChatGPT or Claude with the question, the choices, your answer, the right answer and the site's explanation already filled in, so you can keep asking. Gemini can't be prefilled, so its button copies the question and opens Gemini. No API key or server is involved.

To use it on a new test page, add `<script src="../../ask-ai.js"></script>` and put `AskAI.box({...})` in the feedback after a wrong answer (the options are listed at the top of `ask-ai.js`).
