# SEHS Study

Test review sites, organized by class. The home page (`index.html`) links to each one.

```
index.html                     hub page (edit the CLASSES list to add a class or test)
econ/
  unit-1-test/
    index.html                 IB Econ study lab (Units 1–2)
    markets-practice.html      Markets test practice
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
