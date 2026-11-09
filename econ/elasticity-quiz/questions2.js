/* =====================================================================
   Multiple choice bank, part 2: income elasticity (YED) and Engel curves,
   cross-price elasticity (XED), price elasticity of supply (PES), and
   graph / application questions. Same Q(...) format as questions.js.
   Topics: yed, xed, pes, graph
   ===================================================================== */

/* ---- YED: calculating and interpreting ---- */
Q("yed", "A consumer's income rises from $80,000 to $100,000. Her spending on holidays rises from $8,000 to $10,000. Her YED for holidays is:",
  ["+1.0", "+0.25", "+4.0", "0"],
  "Income rose 20,000 ÷ 80,000 = +25%. Holiday spending rose 2,000 ÷ 8,000 = +25%. YED = 25 ÷ 25 = +1.0. Positive, so holidays are a normal good, and exactly unit income elastic.");
Q("yed", "Using the same consumer (income up 25%), her gym membership spending stays the same. Her YED for gym membership is:",
  ["0", "+1.0", "−1.0", "Undefined"],
  "%ΔQ = 0, so YED = 0 ÷ 25 = 0. Demand for the gym doesn't respond to income at all: neither a normal nor an inferior good in this range.");
Q("yed", "Using the same consumer (income up 25%), her spending on locally produced clothes falls from $2,000 to $1,500. Her YED for those clothes is:",
  ["−1.0", "+1.0", "−0.25", "−4.0"],
  "%ΔQ = −500 ÷ 2,000 = −25%. YED = −25 ÷ 25 = −1.0. Negative, so locally produced clothes are an inferior good for her: as income rises she buys more expensive or branded clothes instead.");
Q("yed", "A positive YED means the good is:",
  ["A normal good", "An inferior good", "A substitute", "A complement"],
  "Positive: demand rises when income rises, so the good is normal. Negative: demand falls when income rises, so it is inferior.");
Q("yed", "A negative YED means the good is:",
  ["An inferior good", "A normal good", "A luxury good", "A complement"],
  "As income rises, people buy less of it, which is the definition of an inferior good. Examples: instant noodles, bus travel, own-brand products.");
Q("yed", "Income rises by 10% and demand for a good rises by 20%. YED = +2. This good is best described as:",
  ["A normal luxury good (income elastic)", "A normal necessity (income inelastic)", "An inferior good", "A substitute"],
  "Positive means normal. Above 1 means demand grows faster than income: income elastic, typical of luxuries such as holidays or sports cars.");
Q("yed", "Income rises by 10% and demand for a good rises by 3%. YED = +0.3. This good is best described as:",
  ["A normal necessity (income inelastic)", "A luxury (income elastic)", "An inferior good", "Perfectly income inelastic"],
  "Positive and below 1: demand rises, but more slowly than income. That fits necessities such as basic food and utilities.");
Q("yed", "Income rises by 8% and demand for a good falls by 4%. The YED is:",
  ["−0.5", "+0.5", "−2.0", "+2.0"],
  "YED = −4 ÷ 8 = −0.5. Negative: inferior good. Its size is below 1 but the sign is what matters most.");
Q("yed", "During a recession income falls by 10% and demand for a restaurant's meals falls by 15%. The YED is:",
  ["+1.5", "−1.5", "+0.67", "−0.67"],
  "YED = %ΔQ ÷ %ΔY = (−15) ÷ (−10) = +1.5. Two negatives make a positive: a normal, income elastic good. The restaurant is hit hard by the downturn.");
Q("yed", "Income rises from $2,000 to $2,400 per month and a household's purchases of a good rise from 50 to 56 units. The YED is:",
  ["+0.6", "+1.67", "+0.12", "+2.4"],
  "%ΔY = 400 ÷ 2,000 = +20%. %ΔQ = 6 ÷ 50 = +12%. YED = 12 ÷ 20 = +0.6, a normal necessity.");
Q("yed", "Income rises 10%, and a family goes out to eat 50% more often. YED is:",
  ["+5", "+0.2", "+50", "−5"],
  "YED = 50 ÷ 10 = +5. Very income elastic: restaurant meals are a luxury for this family.");
Q("yed", "Which good is most likely to have a negative YED?",
  ["Bus tickets in a wealthy city", "Foreign holidays", "Gym memberships", "Organic food"],
  "As people get richer they switch from the bus to cars or taxis, so bus travel can be an inferior good. Holidays, gyms and organic food are normal goods.");
Q("yed", "Which is the best example of a good with a high positive YED (greater than +1)?",
  ["Luxury cruises", "Table salt", "Instant noodles", "Basic bread"],
  "Luxuries are bought much more as incomes grow. Necessities have low positive YED and inferior goods have negative YED.");
Q("yed", "Why should a firm selling a good with a high positive YED worry in a recession?",
  ["Falling incomes cause a larger percentage fall in demand for its product", "Falling incomes raise demand for its product", "Its demand is perfectly inelastic", "Its supply will fall"],
  "With YED > 1, a 5% fall in incomes could mean a 10% or larger fall in sales. Firms with inferior goods (YED < 0) can actually gain customers in a recession.");
Q("yed", "A good has a YED of 0. This means:",
  ["Changes in income do not affect the quantity demanded", "The good is inferior", "The good is a luxury", "Demand is perfectly elastic"],
  "Quantity demanded does not respond to income at all, as with the consumer's gym membership in the textbook example.");

/* ---- Engel curve ---- */
Q("yed", "An Engel curve shows the relationship between:",
  ["Income and the quantity demanded of a good", "Price and quantity demanded", "Price and quantity supplied", "Income and price"],
  "Engel curves plot how much of a good people buy at different income levels. Its slope links straight to YED.");
Q("yed", "The Engel curve for a good is flat across a range of incomes. In that range, YED is:",
  ["0", "Positive and elastic", "Negative", "Equal to 1"],
  "A flat curve means quantity does not change as income changes: %ΔQ = 0, so YED = 0.");
Q("yed", "The Engel curve for a good slopes downward at high incomes. In that range the good is:",
  ["Inferior, with a negative YED", "A luxury", "A necessity with YED between 0 and 1", "A complement"],
  "Quantity falls as income rises, so YED is negative: an inferior good. In the potato story, richer people substitute meat and vegetables for potatoes.");
Q("yed", "In the Irish potato story, very poor households buy sharply more potatoes as their income rises. In that phase the YED is:",
  ["Positive and greater than 1 (elastic)", "Positive and between 0 and 1", "Zero", "Negative"],
  "At very low incomes quantity demanded rises by a bigger percentage than income, so YED is a large positive number, for example +2 or +3.");
Q("yed", "In the middle phase of the potato Engel curve, households buy the same amount as incomes rise. A suitable YED value is:",
  ["0", "+2", "−2", "+1"],
  "Quantity doesn't change, so YED = 0. The households are full but still can't afford meat, so they neither buy more potatoes nor drop them.");
Q("yed", "In the third phase of the potato Engel curve, richer households replace potatoes with meat and vegetables. A suitable YED value is:",
  ["−0.8 (negative, inelastic)", "+0.8", "+3", "0"],
  "Potatoes become an inferior good, so YED is negative. Any negative value is acceptable, for example −0.5 or −1.5.");
Q("yed", "Which set of YED values fits the three phases of the potato Engel curve, in order of rising income?",
  ["+2.5, 0, −0.8", "−0.8, 0, +2.5", "0, +2.5, −0.8", "+2.5, −0.8, 0"],
  "Rising steeply (large positive), then flat (zero), then falling (negative). The exact numbers can vary, the pattern can't.");

/* ---- XED ---- */
Q("xed", "XED is calculated as:",
  ["%ΔQd of good A ÷ %ΔP of good B", "%ΔQd of good A ÷ %ΔP of good A", "%ΔQd of good A ÷ %ΔIncome", "%ΔQs of good A ÷ %ΔP of good A"],
  "Cross-price elasticity compares the change in demand for one good with the price change of a different good.");
Q("xed", "The price of Pepsi rises by 10% and the quantity demanded of Coke rises by 5%. The XED of Coke with respect to Pepsi is:",
  ["+0.5, so they are substitutes", "−0.5, so they are complements", "+2, so they are substitutes", "0, so they are unrelated"],
  "XED = 5 ÷ 10 = +0.5. A positive sign means substitutes: when one gets dearer, buyers switch to the other.");
Q("xed", "The price of printers rises by 10% and the quantity demanded of printer ink falls by 8%. The XED is:",
  ["−0.8, so they are complements", "+0.8, so they are substitutes", "−1.25, so they are substitutes", "0, so they are unrelated"],
  "XED = −8 ÷ 10 = −0.8. Negative means complements: fewer printers bought means less ink needed.");
Q("xed", "Two goods have a XED close to zero. They are:",
  ["Unrelated", "Close substitutes", "Close complements", "Inferior goods"],
  "A change in the price of one has almost no effect on demand for the other.");
Q("xed", "Which pair is most likely to have a large positive XED?",
  ["Two brands of petrol", "Cars and petrol", "Bread and a laptop", "Tennis rackets and tennis balls"],
  "Close substitutes have a large positive XED. Cars and petrol, rackets and balls are complements (negative). Bread and a laptop are unrelated (near zero).");
Q("xed", "Which pair is most likely to have a strongly negative XED?",
  ["Smartphones and phone cases", "Butter and margarine", "Tea and coffee", "Two airlines on the same route"],
  "Complements are used together, so a price rise for one cuts demand for the other. The other pairs are substitutes.");
Q("xed", "A rival airline raises fares by 5% and your airline's bookings rise by 10%. The XED is:",
  ["+2, so the airlines are close substitutes", "+0.5, so they are complements", "−2, so they are complements", "+2, so they are complements"],
  "XED = 10 ÷ 5 = +2. A large positive value: customers switch readily between the airlines, so they are close substitutes.");
Q("xed", "The price of good B falls by 5% and the quantity demanded of good A falls by 10%. The XED is:",
  ["+2, so they are substitutes", "−2, so they are complements", "+0.5, so they are substitutes", "−0.5, so they are complements"],
  "XED = (−10) ÷ (−5) = +2. Both fall, so the sign is positive: substitutes. People switched from A to the now-cheaper B.");
Q("xed", "How does the size of the XED value change as two substitutes become closer substitutes?",
  ["It gets larger and more positive", "It gets closer to zero", "It becomes negative", "It becomes exactly 1"],
  "The closer the substitute, the more buyers switch, so the positive value grows.");

/* ---- PES ---- */
Q("pes", "PES is calculated as:",
  ["%ΔQs ÷ %ΔP", "%ΔQd ÷ %ΔP", "%ΔP ÷ %ΔQs", "ΔQs ÷ ΔP"],
  "Price elasticity of supply compares the percentage change in quantity supplied with the percentage change in the good's own price. It is positive because of the law of supply.");
Q("pes", "A 10% price rise leads to a 5% rise in quantity supplied. PES is:",
  ["0.5, so supply is inelastic", "2.0, so supply is elastic", "0.5, so supply is elastic", "5, so supply is inelastic"],
  "PES = 5 ÷ 10 = 0.5 < 1: inelastic. Producers respond less than proportionately.");
Q("pes", "A 5% price rise leads to a 15% rise in quantity supplied. PES is:",
  ["3, so supply is elastic", "0.33, so supply is inelastic", "3, so supply is inelastic", "10, so supply is elastic"],
  "PES = 15 ÷ 5 = 3 > 1, elastic.");
Q("pes", "The price of a good rises from $4 to $5 and quantity supplied rises from 200 to 260. PES is:",
  ["1.2", "0.83", "0.3", "2.4"],
  "%ΔP = 1 ÷ 4 = +25%. %ΔQs = 60 ÷ 200 = +30%. PES = 30 ÷ 25 = 1.2, elastic.");
Q("pes", "The price of a good rises from $50 to $55 and quantity supplied rises from 1,000 to 1,050. PES is:",
  ["0.5", "2.0", "5.0", "0.05"],
  "%ΔP = 5 ÷ 50 = +10%. %ΔQs = 50 ÷ 1,000 = +5%. PES = 5 ÷ 10 = 0.5, inelastic.");
Q("pes", "The price of a good falls by 20% and quantity supplied falls by 10%. PES is:",
  ["0.5", "2", "−0.5", "−2"],
  "PES = (−10) ÷ (−20) = +0.5. Price and quantity supplied move in the same direction, so PES is positive.");
Q("pes", "A perfectly price inelastic supply (PES = 0) is shown by:",
  ["A vertical supply curve", "A horizontal supply curve", "A straight line through the origin", "A very flat supply curve"],
  "Quantity supplied cannot change whatever the price, as with original paintings by a dead artist or a stadium with fixed seats in the short run.");
Q("pes", "A perfectly price elastic supply (PES = ∞) is shown by:",
  ["A horizontal supply curve", "A vertical supply curve", "A steep upward-sloping line", "A line through the origin"],
  "Producers will supply any amount at one price, but nothing below it.");
Q("pes", "A straight-line supply curve that passes through the origin has a PES of:",
  ["Exactly 1 everywhere", "Greater than 1", "Less than 1", "0"],
  "Any straight line from the origin means the percentage changes in P and Q are always equal, so unit elastic.");
Q("pes", "A straight-line supply curve that hits the vertical (price) axis above the origin has a PES that is:",
  ["Greater than 1", "Less than 1", "Exactly 1", "0"],
  "Starting from a positive price at Q = 0 makes the curve flatter than a line from the origin at every point, so PES > 1. A curve that cuts the horizontal axis has PES < 1.");
Q("pes", "Which firm is likely to have the most elastic supply in the short run?",
  ["A factory with spare capacity and large stocks of finished goods", "A farm growing a tree crop that takes five years to mature", "A hotel that is fully booked", "A fishing fleet with a fixed quota"],
  "Spare capacity and stocks let firms raise output quickly. The others are constrained by time, space or rules.");
Q("pes", "Why is the supply of cocoa very price inelastic in the short run?",
  ["Cocoa trees take years to mature and bear fruit only at certain times", "Cocoa has many substitutes", "Cocoa is a luxury", "Cocoa factories have spare capacity"],
  "Time and production constraints: when prices spike, farmers can't produce more cocoa quickly. Time is the main determinant of PES.");
Q("pes", "Why is the supply of sports cars likely to be price elastic?",
  ["Factories often have spare production capacity to raise output", "Sports cars are necessities", "They take years to produce", "Demand for them is inelastic"],
  "Manufacturing plants with unused capacity can ramp up output when prices rise. Spare capacity, stocks and mobile factors of production all increase PES.");
Q("pes", "Which is NOT a determinant of price elasticity of supply?",
  ["Availability of substitutes for consumers", "Spare capacity", "Length of time to adjust", "Ease of switching factors of production"],
  "Substitutes for consumers belong to PED. PES depends on spare capacity, stocks, time, how mobile resources are, and how easy it is to store the product.");
Q("pes", "In general, PES is more elastic in the _____ run than in the _____ run.",
  ["long; short", "short; long", "long; long", "short; short"],
  "Given enough time firms can build factories, plant trees, train workers and enter the market, so supply becomes more responsive.");
Q("pes", "Fresh strawberries have a very inelastic supply in the short run. The best reason is:",
  ["Growing takes time and the crop is perishable and hard to stockpile", "They are a luxury", "Consumers can switch to other fruit", "The government regulates them"],
  "Plants take months to grow and perishable goods can't be held in stock, so output can't rise quickly when the price goes up.");
Q("pes", "A firm can store large inventories of its product cheaply. Compared with a firm that cannot store, its supply is likely to be:",
  ["More elastic", "Less elastic", "Perfectly inelastic", "Unaffected"],
  "Stocks can be sold when the price rises, giving a fast response in quantity supplied.");

/* ---- Graph and application questions ---- */
Q("graph", "Sports cars have elastic demand and elastic supply. A pandemic shifts supply to the left. Compared with the market for chocolate (inelastic demand and supply) with an identical shift, sports cars will see:",
  ["A smaller change in price and a larger change in quantity", "A larger change in price and a smaller change in quantity", "The same change in price and quantity", "No change in price"],
  "With flat curves, buyers walk away quickly as the price rises, so price barely moves and quantity falls a lot. With steep curves the opposite: price jumps and quantity barely moves.");
Q("graph", "A drought shifts the supply of cocoa left. Demand for chocolate is inelastic. Compared with an elastic-demand good with the same supply shift, price will:",
  ["Rise by more", "Rise by less", "Fall", "Not change"],
  "Inelastic demand means consumers keep buying, so the shortage has to be rationed by a large price rise.");
Q("graph", "Supply decreases in a market with inelastic demand. What happens to total revenue?",
  ["It rises, because price rises by a bigger percentage than quantity falls", "It falls, because quantity falls", "It stays the same", "It cannot be known"],
  "Inelastic demand: %ΔP > %ΔQ, so P × Q goes up. Farmers sometimes do better with a poor harvest than a great one.");
Q("graph", "Supply decreases in a market with elastic demand. What happens to total revenue?",
  ["It falls, because quantity falls by a bigger percentage than price rises", "It rises, because price rises", "It stays the same", "It cannot be known"],
  "Elastic demand: %ΔQ > %ΔP, so P × Q goes down.");
Q("graph", "Supply increases (shifts right) in a market with inelastic demand. The result is:",
  ["A large fall in price and a small rise in quantity", "A small fall in price and a large rise in quantity", "A large rise in price", "No change in price"],
  "Buyers don't buy much more as the price falls, so the extra supply can only clear at a much lower price.");
Q("graph", "Demand increases in a market where supply is very inelastic, such as housing in the short run. The main effect is:",
  ["A large rise in price and a small rise in quantity", "A small rise in price and a large rise in quantity", "A fall in price", "No change in price or quantity"],
  "Producers can't expand output quickly, so the extra demand is rationed through price.");
Q("graph", "Demand increases in a market where supply is very elastic, such as a factory with lots of spare capacity. The main effect is:",
  ["A small rise in price and a large rise in quantity", "A large rise in price and a small rise in quantity", "A large fall in price", "No change"],
  "Firms can easily produce more, so quantity expands and price barely moves.");
Q("graph", "A government wants to raise as much tax revenue as possible from a tax that raises price. Which good is the best target?",
  ["Cigarettes, with inelastic demand", "Designer handbags, with elastic demand", "A brand of cereal, with elastic demand", "Holiday flights, with elastic demand"],
  "With inelastic demand, quantity falls only a little when the tax is added, so the government keeps collecting tax on almost the same quantity.");
Q("graph", "A cinema wants to increase revenue. Student demand is elastic and adult demand is inelastic. A good strategy is:",
  ["Discount student tickets and raise adult tickets", "Raise student tickets and discount adult tickets", "Discount both", "Raise both"],
  "Cutting the price in an elastic market raises revenue; raising the price in an inelastic market raises revenue. Charging each group a different price is price discrimination.");
Q("graph", "On a demand and supply diagram, the same leftward shift of supply is drawn in two markets. In market A demand is steep; in market B demand is flat. Which statement is correct?",
  ["Market A has the larger price change; market B has the larger quantity change", "Market A has the larger quantity change; market B has the larger price change", "Both have the same price change", "Neither market's price changes"],
  "Steep demand means inelastic: price moves a lot, quantity little. Flat demand means elastic: quantity moves a lot, price little.");
