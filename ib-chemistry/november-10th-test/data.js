/* =====================================================================
   IB Chemistry: November 10th Test (moles, percent composition, formulas)
   Covers worksheets 3.1 - 3.6.
   Q(topic, question, [correct, wrong, wrong, wrong], explanation)
     - The FIRST option is always the correct one; options are shuffled on screen.
   Atomic masses used everywhere (2 decimals, like the green data sheet):
     H 1.01  C 12.01  N 14.01  O 16.00  Na 22.99  Mg 24.31  Al 26.98  S 32.07
     Cl 35.45  K 39.10  Ca 40.08  Cr 52.00  Fe 55.85  Co 58.93  Cu 63.55  P 30.97
   ===================================================================== */

const TOPICS = {
  mm:   "Molar mass",
  conv: "Mole conversions",
  cnt:  "Counting particles & atoms",
  pc:   "Percent composition",
  lab:  "Lab mass data",
  emp:  "Empirical formulas",
  mf:   "Molecular formulas",
};

const QS = [];
const Q = (t, q, o, e) => QS.push({ id: QS.length, t, q, o, e });

/* ---------- Molar mass ---------- */
Q("mm", "What is the molar mass of aluminum sulfate, Al₂(SO₄)₃?",
  ["342.17 g/mol", "150.03 g/mol", "214.17 g/mol", "278.20 g/mol"],
  "The subscript 3 outside the parentheses multiplies everything inside: 2 Al + 3 S + 12 O = 2(26.98) + 3(32.07) + 12(16.00) = 53.96 + 96.21 + 192.00 = 342.17 g/mol.");
Q("mm", "What is the molar mass of magnesium hydroxide, Mg(OH)₂?",
  ["58.33 g/mol", "41.32 g/mol", "57.32 g/mol", "42.33 g/mol"],
  "Mg(OH)₂ has 1 Mg, 2 O and 2 H: 24.31 + 2(16.00) + 2(1.01) = 58.33 g/mol. Forgetting the 2 on (OH) gives 41.32.");
Q("mm", "What is the molar mass of ammonium sulfate, (NH₄)₂SO₄?",
  ["132.17 g/mol", "114.12 g/mol", "128.13 g/mol", "84.17 g/mol"],
  "(NH₄)₂ is 2 N and 8 H, plus 1 S and 4 O: 2(14.01) + 8(1.01) + 32.07 + 4(16.00) = 28.02 + 8.08 + 32.07 + 64.00 = 132.17 g/mol.");
Q("mm", "Calcium phosphate is Ca₃(PO₄)₂. How many oxygen atoms are in ONE formula unit?",
  ["8", "4", "2", "6"],
  "The 2 outside the parentheses multiplies the 4 inside: 2 × 4 = 8 oxygen atoms (and 3 Ca, 2 P).");

/* ---------- Mole conversions ---------- */
Q("conv", "How many moles are in 25.0 g of NaCl (58.44 g/mol)?",
  ["0.428 mol", "1460 mol", "2.34 mol", "0.0171 mol"],
  "n = m ÷ M = 25.0 ÷ 58.44 = 0.428 mol. Multiplying instead of dividing gives the huge wrong answer 1460.");
Q("conv", "What is the mass of 2.50 mol of CaCO₃ (100.09 g/mol)?",
  ["250. g", "40.0 g", "0.0250 g", "25.0 g"],
  "m = n × M = 2.50 × 100.09 = 250. g.");
Q("conv", "How many molecules are in 36.0 g of water (18.02 g/mol)?",
  ["1.20 × 10²⁴", "3.61 × 10²⁴", "6.02 × 10²³", "2.00"],
  "36.0 ÷ 18.02 = 2.00 mol, and 2.00 × 6.02 × 10²³ = 1.20 × 10²⁴ molecules. (3.61 × 10²⁴ is the number of ATOMS, since each molecule has 3 atoms.)");
Q("conv", "What is the mass of one copper atom (Cu = 63.55 g/mol)?",
  ["1.06 × 10⁻²² g", "63.55 g", "9.47 × 10²¹ g", "3.83 × 10²⁵ g"],
  "One mole has 6.02 × 10²³ atoms and a mass of 63.55 g, so one atom is 63.55 ÷ 6.02 × 10²³ = 1.06 × 10⁻²² g. A single atom must be tiny.");
Q("conv", "What is the mass of 3.01 × 10²³ molecules of ammonia, NH₃ (17.04 g/mol)?",
  ["8.52 g", "17.04 g", "5.13 × 10²⁴ g", "34.1 g"],
  "3.01 × 10²³ ÷ 6.02 × 10²³ = 0.500 mol, and 0.500 × 17.04 = 8.52 g. Always go through moles.");
Q("conv", "Which is the correct two-step path to convert GRAMS of a substance into MOLECULES?",
  ["grams ÷ molar mass, then × 6.02 × 10²³", "grams × molar mass, then ÷ 6.02 × 10²³", "grams × 6.02 × 10²³, then ÷ molar mass", "grams ÷ 6.02 × 10²³, then × molar mass"],
  "Grams → moles (divide by molar mass) → particles (multiply by Avogadro's number). Moles is always the middle step.");

/* ---------- Counting particles & atoms ---------- */
Q("cnt", "How many TOTAL atoms are in 0.250 mol of Al₂(SO₄)₃?",
  ["2.56 × 10²⁴", "1.51 × 10²³", "1.81 × 10²⁴", "4.25"],
  "Each formula unit has 2 + 3 + 12 = 17 atoms. Atoms = 0.250 × 17 × 6.02 × 10²³ = 2.56 × 10²⁴. (1.81 × 10²⁴ counts only the O atoms.)");
Q("cnt", "How many OXYGEN atoms are in 0.250 mol of Al₂(SO₄)₃?",
  ["1.81 × 10²⁴", "2.56 × 10²⁴", "6.02 × 10²³", "1.51 × 10²³"],
  "12 O per formula unit: 0.250 × 12 × 6.02 × 10²³ = 1.81 × 10²⁴ O atoms.");
Q("cnt", "How many hydrogen atoms are in 2.00 mol of ethanol, C₂H₆O?",
  ["7.22 × 10²⁴", "1.20 × 10²⁴", "3.61 × 10²⁴", "1.08 × 10²⁵"],
  "2.00 mol × 6.02 × 10²³ = 1.20 × 10²⁴ molecules, and each has 6 H atoms: 6 × 1.20 × 10²⁴ = 7.22 × 10²⁴.");
Q("cnt", "How many total atoms are in 10.0 g of CO₂ (44.01 g/mol)?",
  ["4.10 × 10²³", "1.37 × 10²³", "6.02 × 10²³", "4.10 × 10²²"],
  "10.0 ÷ 44.01 = 0.227 mol; × 6.02 × 10²³ = 1.37 × 10²³ molecules; × 3 atoms each = 4.10 × 10²³ atoms.");
Q("cnt", "Which sample contains the greatest number of molecules?",
  ["1.00 g of H₂", "1.00 g of H₂O", "1.00 g of CO₂", "1.00 g of NH₃"],
  "Same mass, so the smallest molar mass wins. H₂ (2.02 g/mol) gives 0.495 mol; H₂O gives 0.0555, NH₃ 0.0587 and CO₂ 0.0227.");
Q("cnt", "What is the mass of ONE molecule of glucose, C₆H₁₂O₆ (180.18 g/mol)?",
  ["2.99 × 10⁻²² g", "180.18 g", "3.34 × 10²¹ g", "1.08 × 10²⁶ g"],
  "180.18 ÷ 6.02 × 10²³ = 2.99 × 10⁻²² g.");

/* ---------- Percent composition ---------- */
Q("pc", "What is the percent nitrogen by mass in (NH₄)₂SO₄ (132.17 g/mol)?",
  ["21.2%", "10.6%", "24.6%", "6.11%"],
  "There are TWO N atoms: 2(14.01) = 28.02. 28.02 ÷ 132.17 × 100 = 21.2%. Using one N gives 10.6%.");
Q("pc", "What is the percent calcium by mass in CaCO₃ (100.09 g/mol)?",
  ["40.04%", "12.00%", "47.96%", "59.96%"],
  "40.08 ÷ 100.09 × 100 = 40.04%.");
Q("pc", "How many grams of iron are in 50.0 g of Fe₂O₃ (159.70 g/mol)?",
  ["35.0 g", "15.0 g", "17.5 g", "69.9 g"],
  "Fe is 2(55.85) = 111.70 of 159.70, which is 69.94%. 50.0 × 0.6994 = 35.0 g. (17.5 g uses only one Fe.)");
Q("pc", "What mass of Fe₂O₃ (69.94% Fe) contains 100.0 g of iron?",
  ["143 g", "69.9 g", "230. g", "159.7 g"],
  "Divide the mass of the element by its decimal fraction: 100.0 ÷ 0.6994 = 143 g. The compound must weigh MORE than the iron in it.");
Q("pc", "What is the percent water by mass in CuSO₄·5H₂O (249.72 g/mol)?",
  ["36.08%", "56.4%", "7.22%", "18.02%"],
  "5 H₂O = 5(18.02) = 90.10 g. 90.10 ÷ 249.72 × 100 = 36.08%. The whole is the HYDRATE (249.72), not the anhydrous salt.");
Q("pc", "What is the percent oxygen by mass in Mg(OH)₂ (58.33 g/mol)?",
  ["54.9%", "27.4%", "38.7%", "65.1%"],
  "Two O atoms: 2(16.00) = 32.00. 32.00 ÷ 58.33 × 100 = 54.9%.");

/* ---------- Lab mass data ---------- */
Q("lab", "Crucible 15.20 g; crucible + magnesium 15.68 g; crucible + magnesium oxide after burning 15.99 g. What percent of the oxide is magnesium?",
  ["60.8%", "39.2%", "3.0%", "98.1%"],
  "Mg = 15.68 − 15.20 = 0.48 g. MgO (the whole) = 15.99 − 15.20 = 0.79 g. 0.48 ÷ 0.79 × 100 = 60.8%. (39.2% is the oxygen.)");
Q("lab", "Crucible 20.10 g; crucible + copper(II) oxide 21.30 g; crucible + copper after heating in hydrogen 21.06 g. What percent of the copper(II) oxide is copper?",
  ["80.0%", "20.0%", "98.9%", "4.6%"],
  "Copper oxide (the whole) = 21.30 − 20.10 = 1.20 g. Copper = 21.06 − 20.10 = 0.96 g. 0.96 ÷ 1.20 × 100 = 80.0%.");
Q("lab", "In a burning-metal lab, which mass goes in the DENOMINATOR when finding the percent metal in the oxide?",
  ["The mass of the oxide (crucible + oxide − empty crucible)", "The mass of the metal before burning", "The mass of the oxygen that was gained", "The mass of the empty crucible"],
  "Percent by mass = part ÷ whole × 100, and the whole is the compound that formed: the metal oxide.");

/* ---------- Empirical formulas ---------- */
Q("emp", "A compound is 40.0% C, 6.7% H and 53.3% O by mass. What is its empirical formula?",
  ["CH₂O", "C₂H₄O₂", "CHO", "CH₄O"],
  "Take 100 g: C 40.0 ÷ 12.01 = 3.33, H 6.7 ÷ 1.01 = 6.63, O 53.3 ÷ 16.00 = 3.33. Divide by 3.33: 1 : 2 : 1, so CH₂O.");
Q("emp", "A compound is 30.4% N and 69.6% O by mass. What is its empirical formula?",
  ["NO₂", "N₂O₄", "NO", "N₂O"],
  "N 30.4 ÷ 14.01 = 2.17; O 69.6 ÷ 16.00 = 4.35. Dividing by 2.17 gives 1 : 2, so NO₂. (N₂O₄ would be a MOLECULAR formula.)");
Q("emp", "An iron oxide is 69.9% Fe and 30.1% O by mass. What is its empirical formula?",
  ["Fe₂O₃", "FeO", "Fe₃O₄", "Fe₃O₂"],
  "Fe 69.9 ÷ 55.85 = 1.25 mol; O 30.1 ÷ 16.00 = 1.88 mol. Ratio 1 : 1.5, so multiply both by 2 to get 2 : 3, Fe₂O₃.");
Q("emp", "A compound is 32.4% Na, 22.6% S and 45.0% O. What is its empirical formula?",
  ["Na₂SO₄", "Na₂SO₃", "NaSO₂", "Na₂S₂O₄"],
  "Na 32.4 ÷ 22.99 = 1.41; S 22.6 ÷ 32.07 = 0.705; O 45.0 ÷ 16.00 = 2.81. Divide by 0.705: 2 : 1 : 4, so Na₂SO₄.");
Q("emp", "A sample contains 6.35 g Cu, 3.21 g S and 6.40 g O. What is its empirical formula?",
  ["CuSO₄", "CuSO₃", "Cu₂SO₄", "CuS₂O₄"],
  "Cu 6.35 ÷ 63.55 = 0.100; S 3.21 ÷ 32.07 = 0.100; O 6.40 ÷ 16.00 = 0.400. Ratio 1 : 1 : 4, so CuSO₄.");
Q("emp", "A compound contains 2.40 g C and 0.60 g H. What is its empirical formula?",
  ["CH₃", "CH₂", "C₂H₅", "CH"],
  "C 2.40 ÷ 12.01 = 0.200; H 0.60 ÷ 1.01 = 0.594. Ratio 1 : 2.97, which rounds to 1 : 3, so CH₃.");
Q("emp", "A mole ratio comes out as 1 : 1.5. What should you do next?",
  ["Multiply every number by 2", "Round 1.5 up to 2", "Round 1.5 down to 1", "Multiply every number by 3"],
  "Never round a .5. Multiply ALL the ratios by 2 to get 2 : 3. (.33 or .67 → ×3, .25 or .75 → ×4, .2/.4/.6/.8 → ×5.)");
Q("emp", "A compound is 40.9% C, 4.58% H and 54.5% O. After dividing by the smallest mole value the ratio is 1 : 1.33 : 1. What is the empirical formula?",
  ["C₃H₄O₃", "CHO", "C₃H₃O₃", "C₂H₃O₂"],
  "1.33 is 4/3, so multiply everything by 3: C 3, H 4, O 3 → C₃H₄O₃.");
Q("emp", "Which of these is ALREADY an empirical formula (cannot be reduced)?",
  ["C₃H₈", "C₄H₁₀", "C₂H₆", "C₆H₆"],
  "C₃H₈: 3 and 8 share no common factor. C₄H₁₀ → C₂H₅, C₂H₆ → CH₃ and C₆H₆ → CH.");
Q("emp", "What is the empirical formula of C₆H₁₂N₆O₉?",
  ["C₂H₄N₂O₃", "C₃H₆N₃O₄", "C₂H₄N₂O₉", "C₆H₁₂N₆O₉"],
  "Divide every subscript by the greatest common factor, 3: C₂H₄N₂O₃. (Subscripts must stay whole numbers.)");

/* ---------- Molecular formulas ---------- */
Q("mf", "The empirical formula is CH₂O and the molar mass is 180.18 g/mol. What is the molecular formula?",
  ["C₆H₁₂O₆", "C₃H₆O₃", "C₂H₄O₂", "C₁₂H₂₄O₁₂"],
  "Empirical mass = 12.01 + 2.02 + 16.00 = 30.03. 180.18 ÷ 30.03 = 6, so multiply every subscript by 6: C₆H₁₂O₆.");
Q("mf", "The empirical formula is NO₂ and the molar mass is 92.02 g/mol. What is the molecular formula?",
  ["N₂O₄", "NO₂", "N₃O₆", "N₄O₈"],
  "Empirical mass = 14.01 + 32.00 = 46.01. 92.02 ÷ 46.01 = 2, so N₂O₄.");
Q("mf", "A hydrocarbon has empirical formula CH and a molar mass of 78.12 g/mol. What is its molecular formula?",
  ["C₆H₆", "C₂H₂", "C₄H₄", "C₈H₈"],
  "Empirical mass = 13.02. 78.12 ÷ 13.02 = 6, so C₆H₆ (benzene).");
Q("mf", "A compound has empirical formula CH₂ and a molar mass between 50 and 60 g/mol. What is its molecular formula?",
  ["C₄H₈", "C₃H₆", "C₅H₁₀", "C₂H₄"],
  "CH₂ = 14.03 g/mol. Multiples: 28.06, 42.09, 56.12, 70.15. Only 56.12 (×4) falls between 50 and 60: C₄H₈.");

/* ---------- Written practice ----------
   W(title, text, [[part label, answer, work], ...])  - shown with a reveal button.
   ---------------------------------------------------------------------- */
const TEACHER = [];
const NEWW = [];
const T = (title, text, parts) => TEACHER.push({ title, text, parts });
const W = (title, text, parts) => NEWW.push({ title, text, parts });

/* The 12 problems from the teacher's study guide (answers match the posted key) */
T("1. Calcium phosphate, Ca₃(PO₄)₂", "a) What is its molar mass? b) What is the mass of 0.123 mol? c) Convert 5.0 g into moles.", [
  ["a", "310.18 g/mol", "3(40.08) + 2(30.97) + 8(16.00) = 120.24 + 61.94 + 128.00"],
  ["b", "38.2 g", "0.123 mol × 310.18 g/mol"],
  ["c", "0.016 mol", "5.0 g ÷ 310.18 g/mol"]]);
T("2. Ibuprofen, C₁₃H₁₈O₂ (4.00 × 10²² molecules)", "a) What is its mass? b) How many total atoms? c) How many carbon atoms?", [
  ["a", "13.7 g", "Molar mass = 13(12.01) + 18(1.01) + 2(16.00) = 206.31. Moles = 4.00 × 10²² ÷ 6.02 × 10²³ = 0.0664 mol. Mass = 0.0664 × 206.31"],
  ["b", "1.32 × 10²⁴ atoms", "33 atoms per molecule (13 + 18 + 2) × 4.00 × 10²²"],
  ["c", "5.20 × 10²³ C atoms", "13 × 4.00 × 10²²"]]);
T("3. Sulfur trioxide gas, SO₃", "a) Convert 8.4 g into molecules. b) How many total atoms are in that sample?", [
  ["a", "6.3 × 10²² molecules", "Molar mass 80.07. 8.4 ÷ 80.07 = 0.105 mol × 6.02 × 10²³"],
  ["b", "2.5 × 10²³ atoms", "4 atoms per molecule × 6.3 × 10²²"]]);
T("4. One cobalt atom", "What is the mass of a single cobalt atom, in grams?", [
  ["", "9.79 × 10⁻²³ g", "58.93 g/mol ÷ 6.02 × 10²³ atoms/mol"]]);
T("5. Table sugar, C₁₂H₂₂O₁₁ (one cup ≈ 290 g)", "a) How many sucrose molecules is that? b) What is the mass of one molecule?", [
  ["a", "5.1 × 10²³ molecules", "Molar mass = 12(12.01) + 22(1.01) + 11(16.00) = 342.34. 290 ÷ 342.34 = 0.847 mol × 6.02 × 10²³"],
  ["b", "5.69 × 10⁻²² g", "342.34 ÷ 6.02 × 10²³"]]);
T("6. Potassium thiosulfate, K₂S₂O₃", "a) What percent sulfur (by mass) does it contain? b) What mass of it would contain 75 g of sulfur?", [
  ["a", "33.70% S", "Molar mass = 2(39.10) + 2(32.07) + 3(16.00) = 190.34. 64.14 ÷ 190.34 × 100"],
  ["b", "220 g", "75 ÷ 0.3370 = 222.6 g, which is 220 g to 2 significant figures"]]);
T("7. Gold extraction lab", "Empty flask 23.22 g; flask + gold nitrate 25.12 g; empty beaker 33.30 g; beaker + dry gold 34.26 g. Find the percent gold (by mass) in the gold nitrate.", [
  ["", "51% Au", "Gold nitrate = 25.12 − 23.22 = 1.90 g. Gold = 34.26 − 33.30 = 0.96 g. 0.96 ÷ 1.90 × 100"]]);
T("8. Burning iron", "Crucible 16.78 g; crucible + iron powder 18.14 g; crucible + iron oxide after burning 18.50 g. Find the percent iron in the iron oxide that formed.", [
  ["", "79.1% Fe", "Iron = 18.14 − 16.78 = 1.36 g. Iron oxide (the whole) = 18.50 − 16.78 = 1.72 g. 1.36 ÷ 1.72 × 100"]]);
T("9. Shrink to empirical", "Give the empirical formula of each: C₄H₈, C₄H₁₀, C₆H₁₄O₄, C₆H₁₂N₆O₉, C₁₂H₂₀.", [
  ["", "CH₂, C₂H₅, C₃H₇O₂, C₂H₄N₂O₃, C₃H₅", "Divide by the greatest common factor: 4, 2, 2, 3, 4"]]);
T("10. Hexane (C and H only), 83.6% carbon", "a) Find the empirical formula. b) The molar mass is between 75 and 100 amu; find the molecular formula.", [
  ["a", "C₃H₇", "100 g: 83.6 g C and 16.4 g H. C 83.6 ÷ 12.01 = 6.96; H 16.4 ÷ 1.01 = 16.2. Divide by 6.96: 1 : 2.33, so ×3 gives 3 : 7"],
  ["b", "C₆H₁₄", "Empirical mass = 3(12.01) + 7(1.01) = 43.10. Only ×2 (86.2) is between 75 and 100"]]);
T("11. Iron, sulfur, oxygen", "A compound holds 11.7 g iron, 10.1 g sulfur and 20.2 g oxygen. Find the empirical formula.", [
  ["", "Fe₂S₃O₁₂", "Fe 11.7 ÷ 55.85 = 0.2095; S 10.1 ÷ 32.07 = 0.3149; O 20.2 ÷ 16.00 = 1.2625. Divide by 0.2095: 1 : 1.5 : 6.03, so ×2 gives 2 : 3 : 12 (this is Fe₂(SO₄)₃ written as one formula)"]]);
T("12. Potassium + chromium + oxygen", "2.21 g K, 2.94 g Cr and 3.17 g O react to form one compound. a) Percent chromium by mass? b) Empirical formula?", [
  ["a", "35.3% Cr", "Total = 2.21 + 2.94 + 3.17 = 8.32 g. 2.94 ÷ 8.32 × 100"],
  ["b", "K₂Cr₂O₇", "K 2.21 ÷ 39.10 = 0.0565; Cr 2.94 ÷ 52.00 = 0.0565; O 3.17 ÷ 16.00 = 0.198. Divide by 0.0565: 1 : 1 : 3.5, so ×2 gives 2 : 2 : 7"]]);

/* New written practice (same style, different numbers) */
W("A. Aluminum sulfate, Al₂(SO₄)₃", "a) Molar mass? b) Mass of 0.0500 mol? c) Moles in 25.0 g? d) How many oxygen atoms are in 25.0 g?", [
  ["a", "342.17 g/mol", "2(26.98) + 3(32.07) + 12(16.00)"],
  ["b", "17.1 g", "0.0500 × 342.17"],
  ["c", "0.0731 mol", "25.0 ÷ 342.17"],
  ["d", "5.28 × 10²³ O atoms", "0.0731 mol × 12 O × 6.02 × 10²³"]]);
W("B. Aspirin, C₉H₈O₄ (one 0.500 g tablet)", "a) Molar mass? b) How many molecules in the tablet? c) How many carbon atoms? d) Mass of one molecule?", [
  ["a", "180.17 g/mol", "9(12.01) + 8(1.01) + 4(16.00)"],
  ["b", "1.67 × 10²¹ molecules", "0.500 ÷ 180.17 = 2.78 × 10⁻³ mol × 6.02 × 10²³"],
  ["c", "1.50 × 10²² C atoms", "9 × 1.67 × 10²¹"],
  ["d", "2.99 × 10⁻²² g", "180.17 ÷ 6.02 × 10²³"]]);
W("C. Ammonium nitrate, NH₄NO₃", "a) Percent nitrogen by mass? b) What mass of NH₄NO₃ contains 100. g of nitrogen?", [
  ["a", "35.0% N", "Molar mass = 2(14.01) + 4(1.01) + 3(16.00) = 80.06. 28.02 ÷ 80.06 × 100"],
  ["b", "286 g", "100. ÷ 0.3500"]]);
W("D. Zinc sulfide lab", "Crucible 18.45 g; crucible + zinc 19.75 g; crucible + zinc sulfide 20.39 g. Find the percent zinc in the zinc sulfide.", [
  ["", "67.0% Zn", "Zn = 19.75 − 18.45 = 1.30 g. ZnS (the whole) = 20.39 − 18.45 = 1.94 g. 1.30 ÷ 1.94 × 100"]]);
W("E. Calcium, phosphorus, oxygen", "A compound is 38.7% Ca, 20.0% P and 41.3% O by mass. Find its empirical formula.", [
  ["", "Ca₃P₂O₈ (that is Ca₃(PO₄)₂)", "Ca 38.7 ÷ 40.08 = 0.966; P 20.0 ÷ 30.97 = 0.646; O 41.3 ÷ 16.00 = 2.58. Divide by 0.646: 1.50 : 1 : 4.00, so ×2 gives 3 : 2 : 8"]]);
W("F. Unknown hydrocarbon", "A hydrocarbon is 85.7% C and 14.3% H by mass, with a molar mass of 56.1 g/mol. Find the empirical and molecular formulas.", [
  ["empirical", "CH₂", "C 85.7 ÷ 12.01 = 7.14; H 14.3 ÷ 1.01 = 14.2. Ratio 1 : 2"],
  ["molecular", "C₄H₈", "CH₂ = 14.03. 56.1 ÷ 14.03 = 4, so ×4"]]);
W("G. Rust sample", "A 3.00 g sample of rust contains 2.10 g Fe, and the rest is oxygen. a) Percent iron? b) Empirical formula?", [
  ["a", "70.0% Fe", "2.10 ÷ 3.00 × 100"],
  ["b", "Fe₂O₃", "O = 3.00 − 2.10 = 0.90 g. Fe 2.10 ÷ 55.85 = 0.0376; O 0.90 ÷ 16.00 = 0.0563. Ratio 1 : 1.5, so ×2 gives 2 : 3"]]);
W("H. Hydrated copper sulfate", "5.00 g of hydrated copper(II) sulfate, CuSO₄·xH₂O, is heated until 3.20 g of anhydrous CuSO₄ remains. Find x.", [
  ["", "x = 5", "Water lost = 5.00 − 3.20 = 1.80 g = 1.80 ÷ 18.02 = 0.0999 mol. CuSO₄ = 3.20 ÷ 159.62 = 0.0200 mol. Ratio 0.0999 : 0.0200 = 5 : 1, so CuSO₄·5H₂O"]]);

/* ---------- Memorize: flashcards [prompt, answer] ---------- */
const CARDS = [
  ["Avogadro's number", "6.02 × 10²³ particles per mole (NOT on your data sheet, so memorize it)"],
  ["Grams → moles", "Divide by molar mass: n = m ÷ M"],
  ["Moles → grams", "Multiply by molar mass: m = n × M"],
  ["Moles → particles", "Multiply by 6.02 × 10²³"],
  ["Particles → moles", "Divide by 6.02 × 10²³"],
  ["Grams → particles", "Two steps through moles: ÷ molar mass, then × 6.02 × 10²³"],
  ["Mass of ONE atom or molecule", "Molar mass ÷ 6.02 × 10²³"],
  ["Total atoms in n moles of a compound", "n × 6.02 × 10²³ × (atoms per formula)"],
  ["Subscript outside parentheses", "Multiplies EVERYTHING inside: Ca₃(PO₄)₂ has 8 O"],
  ["Percent composition of an element", "(subscript × atomic mass) ÷ molar mass of compound × 100"],
  ["Percent by mass from lab data", "mass of part ÷ mass of whole × 100"],
  ["Mass of compound containing X g of an element", "X ÷ (decimal fraction of that element)"],
  ["Empirical formula: 5 steps", "Grams (100 g if %) → moles → divide by smallest → fix fractions → write subscripts"],
  ["Ratio ends in .5", "Multiply all by 2"],
  ["Ratio ends in .33 or .67", "Multiply all by 3"],
  ["Ratio ends in .25 or .75", "Multiply all by 4"],
  ["Ratio ends in .2, .4, .6 or .8", "Multiply all by 5"],
  ["When can you round a ratio?", "Only when it is within about 0.1 of a whole number (2.97 → 3)"],
  ["Molecular formula multiplier", "molar mass ÷ empirical formula mass (a whole number)"],
  ["Reduce a formula to empirical", "Divide every subscript by their greatest common factor"],
  ["Hydrate formula CuSO₄·xH₂O", "Find moles of water and moles of anhydrous salt; x is their ratio"],
  ["Significant figures", "Match the least precise measurement given (usually 2 or 3 sig figs)"],
];

/* ---------- Formula sheet (button on every page) ---------- */
const SHEET = [
  { h: "Core", rows: [
    ["Moles from mass", "n = m ÷ M"],
    ["Particles from moles", "N = n × 6.02 × 10²³"],
    ["Molar mass", "Add (subscript × atomic mass) for every atom"],
    ["Mass of one particle", "M ÷ 6.02 × 10²³"],
  ]},
  { h: "Percent composition", rows: [
    ["Element in a formula", "(subscript × atomic mass) ÷ M × 100"],
    ["Lab data", "mass of part ÷ mass of whole × 100"],
    ["Mass of compound with X g of element", "X ÷ decimal fraction"],
    ["Percent water in a hydrate", "(x × 18.02) ÷ M of hydrate × 100"],
  ]},
  { h: "Formulas", rows: [
    ["Empirical", "grams → moles → ÷ smallest → fix fractions (.5 ×2, .33 ×3, .25 ×4, .2 ×5)"],
    ["Molecular", "multiplier = molar mass ÷ empirical mass; multiply all subscripts"],
    ["Reduce", "divide all subscripts by the greatest common factor"],
  ]},
  { h: "Atomic masses used in the practice problems", rows: [
    ["H, C, N, O", "1.01, 12.01, 14.01, 16.00"],
    ["Na, Mg, Al, P, S, Cl", "22.99, 24.31, 26.98, 30.97, 32.07, 35.45"],
    ["K, Ca, Cr, Fe, Co, Cu, Zn", "39.10, 40.08, 52.00, 55.85, 58.93, 63.55, 65.38"],
  ]},
];

/* ---------- Study guide notes ---------- */
const NOTES = [
  { id: "moles", title: "The mole and conversions", html: `
    <p>One mole is <b>6.02 × 10²³</b> particles. The molar mass in g/mol is the mass of one mole. This number is <b>not given</b> on test day, so memorize it.</p>
    <table class="nt"><tr><th>You have</th><th>You want</th><th>Do this</th></tr>
    <tr><td>Grams</td><td>Moles</td><td>÷ molar mass</td></tr>
    <tr><td>Moles</td><td>Grams</td><td>× molar mass</td></tr>
    <tr><td>Moles</td><td>Particles</td><td>× 6.02 × 10²³</td></tr>
    <tr><td>Particles</td><td>Moles</td><td>÷ 6.02 × 10²³</td></tr>
    <tr><td>Grams</td><td>Particles</td><td>grams → moles → particles</td></tr>
    <tr><td>One particle</td><td>Mass (g)</td><td>molar mass ÷ 6.02 × 10²³</td></tr></table>
    <p class="tip"><b>Moles is always the middle step.</b> Never go straight from grams to particles.</p>` },
  { id: "mass", title: "Molar mass and counting atoms", html: `
    <p>Multiply each subscript by the atomic mass, then add. A subscript outside parentheses multiplies everything inside: <b>Ca₃(PO₄)₂</b> is 3 Ca, 2 P and 2 × 4 = <b>8 O</b>.</p>
    <p>For "total atoms", add all the subscripts (C₁₃H₁₈O₂ has 13 + 18 + 2 = 33 atoms per molecule) and multiply by the number of molecules. For "atoms of one element", multiply by only that subscript.</p>
    <p class="tip">Read the question twice: <b>total atoms</b> and <b>atoms of one element</b> are different answers.</p>` },
  { id: "pc", title: "Percent composition", html: `
    <p><b>From a formula:</b> (subscript × atomic mass) ÷ molar mass of the compound × 100.</p>
    <p><b>From lab data:</b> subtract containers to get masses, then part ÷ whole × 100. Mass of compound = (container + compound) − empty container.</p>
    <p><b>Mass of compound that contains X g of an element:</b> X ÷ decimal fraction (75 g ÷ 0.3370 = 222.6 g).</p>
    <p class="tip">In the burning-iron lab the whole is the <b>iron oxide</b> (crucible + oxide − crucible), not the iron.</p>` },
  { id: "emp", title: "Empirical formulas: 5 steps", html: `
    <ol><li><b>Grams.</b> If you are given percentages, pretend you have 100 g so each % becomes grams.</li>
    <li><b>Moles.</b> Divide each mass by that element's atomic mass.</li>
    <li><b>Divide.</b> Divide every mole value by the smallest one.</li>
    <li><b>Fix the fractions.</b> Multiply everything by the same small number if needed.</li>
    <li><b>Write the formula.</b> The whole numbers become the subscripts.</li></ol>
    <table class="nt"><tr><th>Decimal</th><th>Multiply by</th><th>Example</th></tr>
    <tr><td>.5</td><td>2</td><td>1 : 1.5 → 2 : 3</td></tr>
    <tr><td>.33 / .67</td><td>3</td><td>1 : 2.33 → 3 : 7</td></tr>
    <tr><td>.25 / .75</td><td>4</td><td>1 : 1.25 → 4 : 5</td></tr>
    <tr><td>.2 .4 .6 .8</td><td>5</td><td>1 : 1.4 → 5 : 7</td></tr></table>
    <p class="tip">Never round 1.5 to 1 or 2. Only round when you are within about 0.1 of a whole number, and keep 3 or 4 digits until the end.</p>` },
  { id: "mf", title: "Molecular formulas and reducing", html: `
    <p>Multiplier = <b>molar mass ÷ empirical mass</b>. It must come out as a whole number. Multiply every subscript by it.</p>
    <p>Example: CH₂ (14.03) with molar mass 56.12 gives 4, so C₄H₈. If only a range is given (75 to 100), pick the multiple that lands inside it.</p>
    <p>To reduce a formula to empirical, divide every subscript by their greatest common factor: C₆H₁₂N₆O₉ ÷ 3 = C₂H₄N₂O₃.</p>` },
  { id: "mist", title: "Mistakes that cost points", html: `
    <ul><li>Multiplying by 6.02 × 10²³ when you should divide (or the reverse). Ask: should the answer be huge or tiny?</li>
    <li>Using atomic number instead of atomic mass.</li>
    <li>Forgetting that a subscript outside parentheses multiplies the whole group.</li>
    <li>Going from grams to particles without passing through moles.</li>
    <li>Rounding mole ratios too early.</li>
    <li>Using the wrong "whole" in a lab percent problem.</li>
    <li>Missing units or the right number of significant figures.</li>
    <li>Calculator: use the EE or ×10ˣ key for scientific notation.</li></ul>` },
];

/* ---------- The "November 10th Test" (fixed): question ids from QS, in order ---------- */
const TEST_IDS = [0, 2, 4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 22, 23, 25, 27, 29, 33, 35, 37];
/* written part of the test: indexes into NEWW (D zinc sulfide lab, E empirical, F hydrocarbon, H hydrate) */
const TEST_WRITTEN = [3, 4, 5, 7];
