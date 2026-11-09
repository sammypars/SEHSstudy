/* =====================================================================
   Multiple choice bank, part 1: price elasticity of demand, its
   determinants, and total revenue.
   Q(topic, question, [correct, wrong, wrong, wrong], explanation)
   The first option is always the correct one; options are shuffled on screen.
   Topics: ped, pedd, rev  (part 2 in questions2.js: yed, xed, pes, graph)
   ===================================================================== */
const BANK = [];
function Q(t, q, o, e) { BANK.push({ t, q, o, e }); }

/* ---- PED: calculating and reading the number ---- */
Q("ped", "When the price of gasoline rises by 6%, the quantity demanded falls by 3%. What is the PED and is demand elastic or inelastic?",
  ["0.5; inelastic", "2.0; elastic", "0.5; elastic", "18; elastic"],
  "PED = %ΔQd ÷ %ΔP = −3 ÷ 6 = −0.5. We drop the minus sign and read the size: 0.5 is below 1, so demand is price inelastic. Quantity responds less than proportionately.");
Q("ped", "The price of butter falls by 10% and the quantity demanded rises by 13%. The PED is:",
  ["1.3, so demand is elastic", "0.77, so demand is inelastic", "1.3, so demand is inelastic", "13, so demand is elastic"],
  "PED = 13 ÷ 10 = 1.3. Anything above 1 is elastic: quantity rose by a bigger percentage than price fell.");
Q("ped", "The price of haircuts rises by 15% and the number of haircuts demanded falls by 25%. The PED is about:",
  ["1.67 (elastic)", "0.6 (inelastic)", "1.67 (inelastic)", "0.4 (elastic)"],
  "PED = 25 ÷ 15 = 1.67. Always put %ΔQ on top and %ΔP on the bottom. 1.67 > 1, so elastic. The flipped answer 0.6 comes from dividing the wrong way round.");
Q("ped", "The price of personal computers falls by 20% and quantity demanded rises by 8%. The PED is:",
  ["0.4 (inelastic)", "2.5 (elastic)", "0.4 (elastic)", "1.6 (inelastic)"],
  "PED = 8 ÷ 20 = 0.4, below 1, so inelastic. Even a big price cut only produced a small rise in quantity.");
Q("ped", "A pizza's price rises from $10 to $12 and monthly sales fall from 1,500 to 1,000. Using the IB method (percent changes from the starting values), the PED is:",
  ["1.67", "0.6", "2.5", "0.33"],
  "%ΔP = 2 ÷ 10 = +20%. %ΔQ = −500 ÷ 1,500 = −33.3%. PED = 33.3 ÷ 20 = 1.67, elastic. (The midpoint method would give 2.2; the IB syllabus uses start values.)");
Q("ped", "The price of strawberries falls from $12 to $10 per flat and weekly sales rise from 300 to 450 flats. The PED is:",
  ["3.0", "0.33", "1.5", "2.0"],
  "%ΔP = −2 ÷ 12 = −16.7%. %ΔQ = +150 ÷ 300 = +50%. PED = 50 ÷ 16.7 = 3.0. Very elastic: a small price cut brings a big jump in sales.");
Q("ped", "A price rise from $20 to $25 reduces quantity demanded from 400 to 300. Demand is:",
  ["Unit elastic (PED = 1)", "Elastic (PED = 2)", "Inelastic (PED = 0.5)", "Perfectly inelastic"],
  "%ΔP = +25% and %ΔQ = −100 ÷ 400 = −25%. PED = 25 ÷ 25 = 1. Unit elastic: percentage changes are equal. (Strictly, unit elasticity is exact only for very small changes; with big jumps the start-value method is an approximation.)");
Q("ped", "Price falls from $5 to $4 and quantity demanded rises from 200 to 260. The PED is:",
  ["1.5", "0.67", "3.0", "0.3"],
  "%ΔP = −1 ÷ 5 = −20%. %ΔQ = +60 ÷ 200 = +30%. PED = 30 ÷ 20 = 1.5, elastic.");
Q("ped", "Concert tickets rise from $50 to $60 and attendance falls from 1,000 to 900. The PED is:",
  ["0.5", "2.0", "0.1", "1.0"],
  "%ΔP = +20%. %ΔQ = −100 ÷ 1,000 = −10%. PED = 10 ÷ 20 = 0.5, inelastic.");
Q("ped", "A price rise from $8 to $10 cuts weekly sales from 500 to 350. The PED is:",
  ["1.2", "0.83", "0.3", "6.0"],
  "%ΔP = +2 ÷ 8 = +25%. %ΔQ = −150 ÷ 500 = −30%. PED = 30 ÷ 25 = 1.2, elastic.");
Q("ped", "A 5% price rise causes a 15% fall in quantity demanded. The PED is:",
  ["3", "0.33", "10", "0.75"],
  "PED = 15 ÷ 5 = 3. Strongly elastic.");
Q("ped", "A good has a PED of 0.3. If its price rises by 20%, quantity demanded will fall by about:",
  ["6%", "67%", "20%", "0.3%"],
  "Rearrange the formula: %ΔQ = PED × %ΔP = 0.3 × 20 = 6%.");
Q("ped", "A good has a PED of 2. If its price falls by 5%, quantity demanded will rise by about:",
  ["10%", "2.5%", "5%", "7%"],
  "%ΔQ = PED × %ΔP = 2 × 5 = 10%. Price down, quantity up.");
Q("ped", "What does a PED of 1.0 mean?",
  ["A given percent change in price causes the same percent change in quantity demanded", "Demand does not respond to price at all", "Quantity demanded responds infinitely to a price change", "Total revenue always rises when price rises"],
  "PED = 1 is called unit elasticity: %ΔQd = %ΔP in size. At that point a price change leaves total revenue unchanged.");
Q("ped", "Which shows a perfectly price inelastic demand (PED = 0)?",
  ["A vertical demand curve", "A horizontal demand curve", "A downward-sloping straight line through the middle of the graph", "A demand curve that is steeper than the supply curve"],
  "If quantity demanded does not change at all when price changes, the demand curve is vertical. Think of a life-saving drug with no substitute.");
Q("ped", "Which shows a perfectly price elastic demand (PED = ∞)?",
  ["A horizontal demand curve", "A vertical demand curve", "A very steep demand curve", "A demand curve that shifts right"],
  "At one price consumers will buy any amount; raise it even slightly and quantity demanded drops to zero. That is a horizontal line.");
Q("ped", "Why do economists usually ignore the minus sign when reporting PED?",
  ["Because the law of demand makes it negative almost every time, so the size is what matters", "Because PED can never be negative", "Because a negative PED means demand is inelastic", "Because price and quantity are measured in different units"],
  "Price and quantity demanded move in opposite directions, so PED is almost always negative. We report the absolute value and compare it with 1.");
Q("ped", "A PED of −0.8 means that a 10% rise in price will cause quantity demanded to:",
  ["Fall by 8%", "Rise by 8%", "Fall by 12.5%", "Fall by 0.8%"],
  "%ΔQd = −0.8 × 10% = −8%. The size 0.8 is below 1, so demand is inelastic.");
Q("ped", "Which statement about elastic demand (PED > 1) is correct?",
  ["Quantity demanded changes by a larger percentage than price", "Quantity demanded changes by a smaller percentage than price", "Quantity demanded does not change", "Price changes by a larger percentage than quantity"],
  "Elastic means consumers are responsive: %ΔQd > %ΔP.");
Q("ped", "The price of an item falls from $2.50 to $2.00 and quantity demanded rises from 100 to 110. The PED is:",
  ["0.5", "2.0", "0.1", "1.1"],
  "%ΔP = −0.50 ÷ 2.50 = −20%. %ΔQ = +10 ÷ 100 = +10%. PED = 10 ÷ 20 = 0.5, inelastic.");

/* ---- Determinants of PED ---- */
Q("pedd", "Which good is most likely to have a very inelastic demand?",
  ["Insulin for a person with diabetes", "A particular brand of cereal", "Restaurant meals", "A holiday in Spain"],
  "A life-saving necessity with no substitutes: people keep buying it whatever the price. The others have close substitutes or can be skipped.");
Q("pedd", "Which good is most likely to have a very elastic demand?",
  ["One brand of bottled water", "Electricity", "Cigarettes for an addicted smoker", "Table salt"],
  "A single brand has lots of close substitutes (other brands). The more substitutes, the more elastic the demand.");
Q("pedd", "Demand for a good is usually more elastic in the long run than in the short run because:",
  ["Consumers have more time to find substitutes and change habits", "Prices are more stable over time", "Firms increase supply over time", "Income rises over time"],
  "Time is a determinant of PED. When gas prices jump, people can't change their commute right away, but over a few years they buy efficient cars or move closer to work.");
Q("pedd", "Why is demand for salt very price inelastic?",
  ["It takes up a tiny proportion of income and is a necessity", "It has many substitutes", "It is a luxury good", "It is very expensive"],
  "A doubling of the price of salt barely dents anyone's budget, so people don't change how much they buy. Small proportion of income means inelastic.");
Q("pedd", "A narrowly defined product such as 'Brand X cereal' will usually have _____ demand than a broadly defined product such as 'breakfast food'.",
  ["More elastic", "Less elastic", "Perfectly inelastic", "Unit elastic"],
  "Narrow definitions have many close substitutes (other cereals). Broad categories have few (you still need some breakfast), so they are less elastic.");
Q("pedd", "Which is NOT a determinant of price elasticity of demand?",
  ["The cost of producing the good", "The availability of substitutes", "The proportion of income spent on it", "Whether it is a necessity or a luxury"],
  "Production costs affect supply. The determinants of PED are substitutes, necessity vs luxury, proportion of income, time, and (sometimes) addiction or habit.");
Q("pedd", "Demand for cigarettes among addicted smokers is inelastic mainly because:",
  ["Addiction makes consumers keep buying despite price rises", "Cigarettes are cheap", "There are many substitutes", "Cigarettes are a luxury"],
  "Habit and addiction reduce responsiveness to price. That is why governments can raise tax revenue from tobacco.");
Q("pedd", "A luxury good such as a sports car tends to have a demand that is:",
  ["Elastic", "Inelastic", "Perfectly inelastic", "Always unit elastic"],
  "Luxuries can be postponed or skipped if the price goes up, so quantity demanded is quite responsive. Necessities are inelastic.");
Q("pedd", "Gasoline demand is inelastic in the short run but more elastic over ten years. Which is the best explanation?",
  ["Over time drivers can switch to hybrid or electric cars, public transit or move closer to work", "Gasoline becomes a luxury over time", "The supply of gasoline becomes elastic over time", "Gasoline prices stop changing"],
  "More time means more substitutes become available, so the same price change causes a bigger change in quantity demanded.");
Q("pedd", "A pack of gum costs $1 and a 10% price rise barely changes how much gum people buy. Which determinant is the main reason?",
  ["It is a tiny proportion of income", "It is a luxury good", "It has a very long time horizon", "It is a broadly defined market"],
  "A 10-cent rise is trivial next to anyone's budget, so buyers hardly react. The smaller the share of income a good takes, the more inelastic the demand.");

/* ---- Total revenue and elasticity ---- */
Q("rev", "A firm's demand is elastic. If it raises its price, total revenue will:",
  ["Fall", "Rise", "Stay the same", "Rise only in the long run"],
  "Elastic means %ΔQ > %ΔP. The quantity lost outweighs the higher price per unit, so revenue (P × Q) falls.");
Q("rev", "A firm's demand is inelastic. If it raises its price, total revenue will:",
  ["Rise", "Fall", "Stay the same", "Fall to zero"],
  "Inelastic means %ΔQ < %ΔP. The higher price per unit more than makes up for the few customers lost.");
Q("rev", "A firm's demand is unit elastic. If it changes its price, total revenue will:",
  ["Stay the same", "Rise", "Fall", "Double"],
  "With PED = 1 the percent change in price exactly cancels the percent change in quantity, so P × Q is unchanged.");
Q("rev", "A firm facing elastic demand cuts its price. Total revenue will:",
  ["Rise", "Fall", "Stay the same", "Become zero"],
  "Elastic demand means the extra customers outweigh the lower price per unit. Price cut leads to higher revenue.");
Q("rev", "A firm facing inelastic demand cuts its price. Total revenue will:",
  ["Fall", "Rise", "Stay the same", "Double"],
  "Few extra customers come, so the lower price per unit drags revenue down. A bad idea if demand is inelastic.");
Q("rev", "A firm's PED is 0.4. To raise total revenue it should:",
  ["Raise price", "Lower price", "Keep price the same", "Increase advertising only"],
  "Inelastic demand: revenue moves in the same direction as price, so raise it.");
Q("rev", "A firm's PED is 1.8. To raise total revenue it should:",
  ["Lower price", "Raise price", "Keep price the same", "Raise price and cut output"],
  "Elastic demand: revenue moves opposite to price, so lower the price and sell a lot more.");
Q("rev", "A shop sells 100 items at $10. It raises the price to $12 and sells 75. What happens to total revenue, and what does that say about demand?",
  ["Revenue falls from $1,000 to $900, so demand is elastic", "Revenue rises from $1,000 to $1,200, so demand is inelastic", "Revenue falls from $1,000 to $900, so demand is inelastic", "Revenue stays at $1,000, so demand is unit elastic"],
  "TR before = 10 × 100 = $1,000. TR after = 12 × 75 = $900. Price rose and revenue fell, so demand is elastic (PED = 25 ÷ 20 = 1.25).");
Q("rev", "A firm with PED = 0.6 raises its price by 10%. Roughly what happens to total revenue?",
  ["It rises by about 3–4%", "It falls by about 6%", "It rises by 10%", "It stays the same"],
  "Quantity falls 0.6 × 10 = 6%. Revenue = 1.10 × 0.94 = 1.034 of the old level, up about 3.4%.");
Q("rev", "On a straight-line demand curve, total revenue is highest at the point where:",
  ["PED = 1 (the midpoint)", "PED = 0", "PED = ∞", "Price is highest"],
  "Above the midpoint demand is elastic (cut price to raise TR); below it demand is inelastic (raise price to raise TR). TR peaks where PED = 1.");
Q("rev", "On a straight-line downward-sloping demand curve, the upper-left part is _____ and the lower-right part is _____.",
  ["Elastic; inelastic", "Inelastic; elastic", "Elastic; elastic", "Unit elastic; unit elastic"],
  "At high prices and low quantities a given $ change is a small % of the price but a big % of the quantity, so demand is elastic. The opposite holds at the bottom. The slope is constant, but elasticity is not.");
Q("rev", "A bumper harvest shifts the supply of wheat right. Demand for food is inelastic. What happens to farmers' total revenue?",
  ["It falls, because price drops by a larger percentage than quantity rises", "It rises, because quantity increases", "It stays the same", "It rises, because price falls"],
  "With inelastic demand, a big price fall brings only a small rise in quantity sold: P × Q falls. That is the 'farmer's paradox'.");
Q("rev", "Which of these is the correct statement of the total revenue test?",
  ["If price and total revenue move in opposite directions, demand is elastic", "If price and total revenue move in the same direction, demand is elastic", "If total revenue never changes, demand is inelastic", "If price rises and quantity rises, demand is inelastic"],
  "Opposite directions: elastic. Same direction: inelastic. No change: unit elastic.");
