/* =====================================================================
   HOTA · Nov. 12 quiz · English version of data.js
   Loaded after data.js. When the page is set to English, it replaces the
   French content with this translation. KEEP IT IN STEP WITH data.js:
   same Q(...) lines in the same order (question ids are their position),
   same CHRONO / PEOPLE / QUOTES / LEX / NOTES entries.
   ===================================================================== */
if (LANG === "en") {

TOPICS = {
  const: { n: "The Constitution and slavery (1787)", u: "Guide · Part 1" },
  abo: { n: "The abolitionist movement (1810s–1850s)", u: "Guide · Part 2" },
  comp: { n: "Political crises and compromises", u: "Guide · Part 3" },
  dred: { n: "Dred Scott v. Sandford (1857)", u: "Guide · Part 3" },
  elec: { n: "Lincoln-Douglas (1858) and the 1860 election", u: "Guide · Part 3" },
  war: { n: "The Civil War and emancipation (1861–1865)", u: "Guide · Part 4" },
  rec1: { n: "Presidential Reconstruction and justice", u: "Guide · Part 5 · Slides" },
  rec2: { n: "Radical Reconstruction (1866–1877)", u: "Guide · Part 5 · Slides" },
  klan: { n: "The Klan, the backlash and the end of Reconstruction", u: "Guide · Part 5 · Slides" },
  chrono: { n: "Timeline", u: "Generated", gen: 1 },
  pers: { n: "People", u: "Generated", gen: 1 },
  cit: { n: "Who said it?", u: "Generated", gen: 1 },
  lex: { n: "Vocabulary", u: "Generated", gen: 1 }
};

BANK.length = 0;

Q("const","Under the Three-Fifths Clause (Article I, Section 2, Clause 3), how was an enslaved person counted in the census?",
 ["As three fifths of a person","As a whole person","Not counted at all","As two fifths of a person"],
 "The Constitution adds to the number of free persons “three fifths of all other Persons.” So five enslaved people counted as three free people.",
 [null,"That is what the South wanted, to get even more representatives. The compromise split the difference.","That is what the North wanted. The compromise was a middle ground.","The figure is three fifths, not two."]);
Q("const","The census determined all of these things EXCEPT one. Which one?",
 ["The number of senators from each state","The number of representatives in the House","The number of presidential electors","The amount of direct taxes owed to the federal government"],
 "Every state has two senators whatever its population. The census set (1) House representatives, (2) electors and (3) direct taxes.",
 [null,"That is the first effect of the census.","Electors depend on the number of representatives, so on the census.","Direct taxes were divided by population."]);
Q("const","What was the main advantage of the Three-Fifths Clause for the Southern states?",
 ["More House seats and more electors","Less direct tax to pay","Gradual abolition of slavery","Control of the Senate"],
 "Counting enslaved people (even at 3/5) raised the South's official population, so its seats and electors, even though those people could not vote.",
 [null,"It is the opposite: being counted also raised the South's direct taxes.","The clause protected slavery; it set up no abolition.","The Senate doesn't depend on population: two senators per state."]);
Q("const","What “price” did the South pay for the Three-Fifths Clause?",
 ["It paid more direct tax than if enslaved people were not counted","It lost seats in the House","It had to stop the slave trade immediately","It could no longer elect a president"],
 "The South pays more taxes… but gets greater representation in the House.",
 [null,"The South gained seats; it didn't lose them.","The slave trade was protected until 1808 by a different clause.","Its electors increased thanks to the clause."]);
Q("const","What does Article I, Section 9, Clause 1 (the Slave Trade Clause) say?",
 ["Congress cannot ban the importation of enslaved people before 1808","Fugitive slaves must be returned to their owners","Enslaved people count as three fifths","Slavery is banned north of 36°30'"],
 "This clause protects the slave trade (“Migration or Importation of such Persons”) until 1808, with a tax of at most 10 dollars per person.",
 [null,"That is Article IV, Section 2, Clause 3.","That is Article I, Section 2, Clause 3.","That is the Missouri Compromise (1820), not the Constitution."]);
Q("const","What does Article IV, Section 2, Clause 3 (the Fugitive Slave Clause) say?",
 ["A person “held to Service” who escapes to another state must be returned","Congress can tax the importation of slaves up to 10 dollars","Each state decides by vote whether to accept slavery","Enslaved people can buy their freedom"],
 "Even in a free state, an escaped person “shall be delivered up” to their owner. So free states could not shelter fugitives.",
 [null,"That is Article I, Section 9.","That is popular sovereignty (1850–1854), not the 1787 Constitution.","The Constitution says nothing like that."]);
Q("const","Does the word “slavery” appear in the 1787 Constitution?",
 ["No: it uses euphemisms like “other Persons” or “Person held to Service or Labour”","Yes, in the Preamble","Yes, in the Tenth Amendment","Yes, in the Bill of Rights"],
 "The framers avoided the word while protecting the institution, which was called “the peculiar institution.”",
 [null,"The Preamble talks about justice and liberty, never slavery.","The Tenth Amendment is about powers reserved to the states.","The Bill of Rights does not mention slavery."]);
Q("const","Which of these is NOT a protection of slavery in the 1787 Constitution?",
 ["A requirement that every state abolish slavery in 1808","The Three-Fifths Clause","The Slave Trade Clause","The Fugitive Slave Clause"],
 "1808 was only the date before which Congress could not ban importation. The Constitution never required an end to slavery itself.",
 [null,"It is a protection: it increased the South's political power.","It is a protection: Congress could not ban the trade before 1808.","It is a protection: fugitives had to be returned."]);
Q("const","What happened to the importation of enslaved people in 1808?",
 ["Congress could ban it (law effective January 1, 1808), but the domestic slave trade continued","Slavery was abolished in the United States","The clause was extended for 20 more years","The census stopped counting enslaved people"],
 "The ban only ended importation from abroad. People continued to be sold from state to state.",
 [null,"Slavery lasted until 1865.","Congress actually voted the ban.","The Three-Fifths Clause stayed in force until the war."]);
Q("const","Who told the 1787 Convention that “interest alone” governed this question and that religion and humanity had nothing to do with it?",
 ["John Rutledge of South Carolina","Luther Martin","Benjamin Franklin","Oliver Ellsworth"],
 "Rutledge added that the North would profit by carrying the South's products. It is an economic argument, not a moral one.",
 [null,"Martin wanted the power to ban or tax the trade, on moral grounds.","Franklin spoke about the Constitution's flaws on September 17.","Ellsworth said: “Let every State import what it pleases.”"]);
Q("const","What does Charles Pinckney's statement (South Carolina would never accept a ban on the slave trade) show about how the framers protected slavery?",
 ["The protections were compromises: the South threatened not to join the Union without them","All Northern states wanted to protect the trade","The Constitution was against slavery","South Carolina wanted to abolish slavery"],
 "To get the Union, the framers gave in to the Deep South on slavery. This is how the class describes protection of slavery by compromise.",
 [null,"Delegates like Luther Martin opposed it.","It actually protected the institution.","That is the opposite of its position."]);
Q("const","Which states wanted enslaved people counted fully for representation?",
 ["The Southern states, who also wanted to limit the taxes that came with it","The Northern states","Only the Middle states","No state"],
 "The South wanted as many representatives as possible (so count everyone) but pay the fewest taxes. Three fifths is the midpoint between the two positions.",
 [null,"The North did not want those people to increase the South's power.","The debate mainly opposed North and South.","The compromise was negotiated precisely because the South wanted it."]);
Q("abo","What did the American Colonization Society (founded 1816) want?",
 ["Gradual abolition and the resettlement of free Black people in Africa (Liberia)","Immediate abolition and racial equality in the United States","Protecting slavery in the territories","A Black state in Texas"],
 "Its capital, Monrovia, was named for President James Monroe. The underlying idea: America is a white society.",
 [null,"That is the position of the immediate abolitionists of the 1830s.","That was not its goal.","The project aimed at Africa."]);
Q("abo","Why did most free African Americans oppose colonization?",
 ["They considered themselves Americans, born here, and did not want to be sent to Africa","They supported slavery","The trip was too expensive","They wanted to go to Canada"],
 "In 1817 about 3,000 free Black people in Philadelphia met to declare that they were Americans.",
 [null,"They were against slavery.","Their objection was one of principle.","Some did, but that was not the main reason."]);
Q("abo","What central idea separates “immediate” abolitionism of the 1830s from colonization?",
 ["Slavery is a sin that must end at once, and Black people are equal members of the republic","Slavery should end gradually and Black people should leave","Slavery is a states' right","Slavery will vanish by itself with industry"],
 "Immediate abolitionists also wanted to fight racism. The unit's essential question: what views existed among abolitionists?",
 [null,"That is the colonizationists' position.","That is a proslavery argument.","That was not the abolitionists' claim."]);
Q("abo","Who published the Appeal in 1829, calling on Black Americans to resist slavery?",
 ["David Walker","William Lloyd Garrison","Frederick Douglass","Theodore Weld"],
 "Walker, a free Black man in Boston, wrote a radical text that alarmed the South.",
 [null,"Garrison launched The Liberator in 1831.","Douglass published his Narrative in 1845.","Weld was a white abolitionist of the 1830s, a pamphleteer."]);
Q("abo","Which newspaper did William Lloyd Garrison launch in 1831, with the words “I will be heard”?",
 ["The Liberator","The North Star","Uncle Tom's Cabin","The Appeal"],
 "Garrison called the Constitution “a covenant with death” because of its protections of slavery. He wanted to dissolve the Union, which most abolitionists rejected.",
 [null,"That is Frederick Douglass's paper (1847).","That is a novel by Harriet Beecher Stowe (1852).","That is David Walker's text (1829)."]);
Q("abo","What was the “moral suasion” used by the American Anti-Slavery Society (1833)?",
 ["Convincing people that slavery is a sin through pamphlets, newspapers, petitions and speeches, without violence","An armed uprising against slaveholders","Buying the freedom of enslaved people","Forming a political party"],
 "The society had about 100,000 members by the end of the 1830s. Many “non-resistants” were pacifists.",
 [null,"It ruled out violence.","That is not the method described.","The Liberty Party was a separate project, born of the 1840 split."]);
Q("abo","What is the title of Frederick Douglass's autobiography (1845), and what did he deliver in Rochester in 1852?",
 ["Narrative of the Life of Frederick Douglass; the speech “What to the Slave is the Fourth of July?”","The Liberator; “I have a dream”","Uncle Tom's Cabin; the Seneca Falls Declaration","The Appeal; the Gettysburg Address"],
 "Douglass, born into slavery, escaped and became one of the greatest abolitionist speakers and writers. In 1852 he asked what the national holiday means to an enslaved person.",
 [null,"The Liberator was Garrison's paper, and “I have a dream” dates from 1963.","Uncle Tom's Cabin is by Stowe.","The Appeal is Walker's, and Gettysburg is a Lincoln speech (1863)."]);
Q("abo","What role did Harriet Tubman play in the abolitionist movement?",
 ["She escaped, then returned to guide others to freedom on the Underground Railroad","She wrote Uncle Tom's Cabin","She led the Harpers Ferry raid","She founded the American Colonization Society"],
 "The Underground Railroad was a secret network helping fugitives.",
 [null,"That was Harriet Beecher Stowe.","That was John Brown (1859).","That society dates from 1816 and had a different aim."]);
Q("abo","What effect did Uncle Tom's Cabin (Harriet Beecher Stowe, 1852) have?",
 ["A bestseller that brought the horror of slavery to a wide audience, especially in the North","It was banned across the North","It defended slavery","It was little read"],
 "The novel pushed many Northern readers to see slavery as a moral evil.",
 [null,"It was widely read in the North.","It denounced it.","It sold hundreds of thousands of copies in its first year."]);
Q("abo","What was the “gag rule” adopted in 1836?",
 ["A House rule that automatically set aside antislavery petitions; repealed in 1844 thanks to John Quincy Adams","A law banning enslaved people from reading","A law forcing the return of fugitives","A law banning the slave trade"],
 "The North saw it as a threat to its own freedoms (petition, speech): slavery also threatened free white Northerners.",
 [null,"That is not the gag rule.","That is the Fugitive Slave Act.","It was not about the slave trade."]);
Q("abo","What happened to the abolitionist Elijah Lovejoy in 1837?",
 ["He was killed by a mob attacking his printing press in Illinois","He was elected president","He moved to Liberia","He was freed from slavery by the Supreme Court"],
 "Violence against abolitionists (Lovejoy, 1837; Pennsylvania Hall burned, 1838) showed the limits of free speech in the North.",
 [null,"He was never president.","That is not what happened to him.","Lovejoy was a white abolitionist, not an enslaved person."]);
Q("abo","Who were Angelina and Sarah Grimké?",
 ["Sisters from the South who became abolitionists and women's rights activists","Two free Black women in Philadelphia who opposed colonization","The founders of the American Colonization Society","The authors of the Declaration of Independence"],
 "They tied abolition to the equality of the sexes, which led later to Seneca Falls (1848).",
 [null,"That is not their story.","They were abolitionists.","It was not them."]);
Q("abo","Who was John Brown, and what happened at Harpers Ferry in 1859?",
 ["A white abolitionist who attacked a federal arsenal to arm enslaved people; he became a martyr in the North and a nightmare in the South","The leader of the Confederacy","The judge in the Dred Scott case","A free Black man who left America for Liberia"],
 "The raid failed and Brown was hanged, one year before the 1860 election.",
 [null,"That was Jefferson Davis.","That was Roger Taney.","Brown was a white abolitionist."]);
Q("comp","What problem led to the Missouri Compromise (1819–1820)?",
 ["Missouri wanted to join as a slave state when there were 11 free and 11 slave states","California wanted to enter as a free state","Kansas was at war","South Carolina refused the tariff"],
 "The North feared an imbalance in the Senate if a 12th slave state entered.",
 [null,"That is the Compromise of 1850.","That is 1854–1856.","That is the nullification crisis (1832)."]);
Q("comp","What did the Missouri Compromise (1820) provide?",
 ["Missouri enters as a slave state, Maine as a free state, and no slavery north of 36°30' in the Louisiana Purchase","California enters as a free state","Popular sovereignty in all territories","A stronger fugitive slave law"],
 "The compromise kept the 12/12 balance in the Senate and drew the 36°30' line.",
 [null,"That is the Compromise of 1850.","That is the Kansas-Nebraska Act (1854).","That is the Compromise of 1850."]);
Q("comp","Why did California ask to join the Union as a free state in 1849–1850?",
 ["Its population had exploded with the Gold Rush, after the Mexican Cession","It had won a war against Mexico","Missouri demanded it","It wanted to become a slave state"],
 "The Treaty of Guadalupe Hidalgo (1848) ended the Mexican-American War. One more free state broke the Senate balance.",
 [null,"It was the United States that won the war.","That is not the case.","It asked to enter as a free state."]);
Q("comp","Which of these was part of the Compromise of 1850?",
 ["A stronger fugitive slave law","Repeal of the Missouri Compromise","A total ban on slavery in the West","South Carolina's secession"],
 "Compromise of 1850: California a free state; popular sovereignty for the rest of the Mexican Cession; a stronger fugitive slave law.",
 [null,"That is the Kansas-Nebraska Act (1854).","The rest of the territory was left to popular sovereignty.","That is December 1860."]);
Q("comp","What is “popular sovereignty”?",
 ["The settlers of a territory decide by vote whether it will be free or slave","Congress decides for each territory","The Supreme Court decides","The president decides"],
 "It is Stephen Douglas's central idea, applied in 1850 and then in 1854.",
 [null,"That is exactly what popular sovereignty avoids.","Dred Scott (1857) would limit territories' power instead.","That is not the case."]);
Q("comp","What did the Fugitive Slave Act of 1850 require?",
 ["Citizens had to help capture fugitives, and the accused person had no jury and no right to testify","Fugitives were automatically free in the North","Only Southern states had to obey it","It abolished the slave trade"],
 "Federal commissioners judged the cases and were paid more (10 dollars) if they ruled the person was enslaved than if they freed them (5 dollars). Aiding a fugitive could mean a 1,000 dollar fine and jail.",
 [null,"It was the opposite.","It applied to free states too.","It was not about the slave trade."]);
Q("comp","What effect did the Fugitive Slave Act of 1850 have in the North?",
 ["It outraged many Northerners, made slavery more visible, and strengthened opposition to slavery","It calmed the debate on slavery","It made the North favor slavery","It had no effect"],
 "It forced the North to take part in slavery. Many free Black people in the North were also at risk of capture.",
 [null,"It inflamed it instead.","Opposition grew.","It had a major political and moral impact."]);
Q("comp","What did the Kansas-Nebraska Act (1854) do?",
 ["It essentially repealed the Missouri Compromise: Kansas and Nebraska would decide on slavery by popular sovereignty","It admitted Kansas as a free state","It banned slavery in Nebraska","It ended the slave trade"],
 "Kansas and Nebraska lay north of 36°30', so were closed to slavery before 1854. The law, backed by Stephen Douglas, also helped give birth to the Republican Party.",
 [null,"Kansas joined the Union only in 1861.","It left the choice to the settlers.","The trade had been banned since 1808."]);
Q("comp","What was “Bleeding Kansas”?",
 ["The violence and election fraud in Kansas as pro- and antislavery settlers clashed after 1854","A Civil War battle","An epidemic of 1854","An abolitionist newspaper"],
 "It is the direct result of popular sovereignty: each side wanted to win the vote on slavery.",
 [null,"It took place before the war (1854–1856).","It was not an epidemic.","It was not a newspaper."]);
Q("comp","Put in order: Missouri Compromise, Kansas-Nebraska Act, Compromise of 1850, Dred Scott decision.",
 ["Missouri (1820) → 1850 → Kansas-Nebraska (1854) → Dred Scott (1857)","1850 → Missouri → Dred Scott → Kansas-Nebraska","Kansas-Nebraska → Missouri → 1850 → Dred Scott","Missouri → Kansas-Nebraska → 1850 → Dred Scott"],
 "Each step undid a bit more of the previous solution: the 36°30' line, then popular sovereignty, then the Court's decision.",
 [null,"The Missouri Compromise is the oldest (1820).","Kansas-Nebraska (1854) comes after 1850.","1850 comes before 1854."]);
Q("dred","Why did Dred Scott claim he was free?",
 ["He had lived in a free state (Illinois) and a free territory (Fort Snelling) before being taken back to Missouri","He had bought his freedom","He was born free","Lincoln had freed him"],
 "It was common for people taken into free territory to sue their owner. Fort Snelling was free because of the Missouri Compromise.",
 [null,"Mrs. Emerson refused to let him buy his freedom in 1846.","He was born into slavery in Virginia around 1799.","Lincoln was not president in 1857."]);
Q("dred","Who was the Chief Justice who wrote the majority opinion in Dred Scott v. Sandford (1857)?",
 ["Roger B. Taney","Benjamin R. Curtis","John Marshall","Stephen Douglas"],
 "The decision was 7–2.",
 [null,"Curtis wrote the dissent.","Marshall died in 1835.","Douglas was a senator, not a judge."]);
Q("dred","What was the Supreme Court's vote in Dred Scott v. Sandford?",
 ["7–2","9–0","5–4","6–3"],
 "The two dissenting justices were John McLean and Benjamin R. Curtis.",
 [null,"There were two dissenters.","The majority was larger.","Seven justices joined Taney."]);
Q("dred","According to Taney's majority opinion, could a Black person descended from enslaved people be a citizen of the United States?",
 ["No, so she could not sue in federal courts","Yes, if born in a free state","Yes, if she had lived in free territory","Only if Congress decided so"],
 "Taney wrote that Black people were not included in the “people” of the Constitution.",
 [null,"The decision denies citizenship in every case.","That was Scott's argument, rejected by the Court.","The Court held it was a constitutional question."]);
Q("dred","What did Taney's opinion say about slavery in the territories?",
 ["Congress could not exclude it, so the Missouri Compromise was unconstitutional","Congress could ban it everywhere","Settlers could always vote to ban it","Slavery was banned in all territories"],
 "Enslaved people were treated as property protected by the Constitution. This also threatened popular sovereignty.",
 [null,"It was the opposite.","That is Douglas's Freeport Doctrine, which tried to get around the decision.","It was the opposite."]);
Q("dred","What was Justice Benjamin R. Curtis's position in his dissent?",
 ["Free Black people were citizens in several states at the time of the Constitution, and Congress could regulate slavery in the territories","He agreed with Taney on every point","He wanted to abolish slavery nationwide","He wanted the Court not to hear the case"],
 "For Curtis, the Missouri Compromise was therefore constitutional and Scott could be a citizen.",
 [null,"He was a dissenter.","His dissent was about citizenship and Congress's power.","He wrote an opinion on the merits."]);
Q("dred","How did Frederick Douglass react to the Dred Scott decision?",
 ["He rejected it as a perversion of the Constitution and said the Court did not have the last word; he believed the struggle would go on","He accepted the decision as just","He left the United States for Liberia","He called for the North to secede"],
 "Douglass was one of the antislavery responses, along with Lincoln.",
 [null,"He fought it.","He opposed colonization.","That was not his position."]);
Q("dred","How did Abraham Lincoln respond to the Dred Scott decision (1857)?",
 ["He challenged Taney: the Founders meant “all men are created equal” to include Black people too; he wanted to overturn the decision by political means","He approved Taney's decision","He refused to obey it by taking up arms","He called for the end of the Republican Party"],
 "Lincoln feared the decision was part of a “machinery” that could make slavery legal nationwide. He developed this in the “House Divided” speech (1858).",
 [null,"He opposed it.","He wanted to change it through politics and elections.","He was becoming a leader of it."]);
Q("dred","Why did the Dred Scott decision deepen the nation's division?",
 ["It opened all territories to slavery and made compromise impossible, which outraged the North","It abolished slavery","It gave citizenship to everyone","It was accepted by everyone"],
 "The decision also strengthened the Republican Party and Lincoln's career.",
 [null,"It did the opposite.","It denied citizenship to Black Americans.","The North strongly rejected it."]);
Q("elec","What office were Lincoln and Douglas competing for in the 1858 debates?",
 ["A U.S. Senate seat from Illinois","The presidency","Governor of Illinois","Supreme Court justice"],
 "There were seven outdoor debates that drew national attention.",
 [null,"The presidential race is 1860.","It was the U.S. Senate.","That is not the case."]);
Q("elec","What was the outcome of the 1858 Lincoln-Douglas debates?",
 ["Lincoln lost the election, but the debates made him famous and damaged Douglas's career","Lincoln won the Senate seat","Douglas left politics","Both were elected"],
 "That national visibility helped Lincoln win the presidency in 1860.",
 [null,"Douglas kept his seat.","Douglas ran for president in 1860.","There was only one seat."]);
Q("elec","What does Lincoln mean by “A house divided against itself cannot stand” (1858)?",
 ["The country cannot endure permanently half slave and half free; it will become all one or all the other","The Union will soon dissolve","Each state must decide alone","North and South should separate"],
 "Lincoln says he does not expect the Union to be dissolved, but that it will cease to be divided.",
 [null,"He says he does not expect the Union to dissolve.","That is closer to Douglas's idea.","It is the opposite."]);
Q("elec","According to Lincoln, what is the “machinery” threatening to spread slavery?",
 ["The combination of the Nebraska doctrine (popular sovereignty) and the Dred Scott decision","The Missouri Compromise","The Emancipation Proclamation","The Republican Party"],
 "For Lincoln, these two elements, with Douglas's moral indifference (“care not”), form a plan to spread slavery.",
 [null,"The Missouri Compromise limited slavery.","It does not exist yet in 1858.","That was his own party."]);
Q("elec","What was Douglas's “Freeport Doctrine” (August 27, 1858)?",
 ["A territory can keep slavery out by refusing to pass the local police regulations it needs, despite Dred Scott","Territories must accept slavery","Congress can ban slavery","The Supreme Court is always right"],
 "“Slavery cannot exist a day or an hour anywhere, unless it is supported by local police regulations.” Douglas added that he was not for dissolving the Union under any circumstances.",
 [null,"Douglas said the opposite.","Dred Scott forbade it.","Douglas says the decision changes nothing in practice."]);
Q("elec","According to the class summary, what is the key difference between Lincoln and Douglas?",
 ["Douglas defends popular sovereignty; Lincoln opposes the extension of slavery","Douglas wants immediate abolition; Lincoln wants secession","They agree on everything","Douglas wants Congress to protect slavery; Lincoln wants immediate abolition"],
 "Lincoln was not an immediate abolitionist in 1858: he wanted to stop slavery's spread.",
 [null,"Neither defended that.","They disagreed.","Neither held these positions."]);
Q("elec","What was the main issue of the 1860 election?",
 ["Slavery, especially in the new territories","Tariffs only","The war with Mexico","Women's suffrage"],
 "The four candidates differed mostly on slavery in the West.",
 [null,"Tariffs mattered, but they were not the main issue.","It had ended in 1848.","It was not an election issue."]);
Q("elec","What was Lincoln's (Republican) platform in 1860?",
 ["Keep slavery where it exists, no slavery in the new territories; for Homesteads, tariffs and the transcontinental railroad","Abolish slavery everywhere immediately","Protect slaveholders' rights in the territories","Popular sovereignty and against higher tariffs"],
 "Lincoln did not propose abolition in the South, only stopping the spread of slavery.",
 [null,"That was not his platform.","That is Breckinridge.","That is Douglas."]);
Q("elec","Which 1860 candidate was the Southern Democrat who defended slaveholders' rights in the territories?",
 ["John Breckinridge","Stephen Douglas","John Bell","Abraham Lincoln"],
 "The Democrats split: Douglas for the North, Breckinridge for the South.",
 [null,"Douglas was the Northern Democrat.","Bell was the Constitutional Union candidate.","Lincoln was a Republican."]);
Q("elec","Which 1860 candidate represented the Constitutional Union Party?",
 ["John Bell","John Breckinridge","Stephen Douglas","Abraham Lincoln"],
 "Its platform: “no political principle other than the Constitution of the country, the Union of the States, and the Enforcement of the Laws.”",
 [null,"Breckinridge was the Southern Democrat.","Douglas was the Northern Democrat.","Lincoln was a Republican."]);
Q("elec","Why is the 1860 election often seen as the “final catalyst” of the war?",
 ["Lincoln's election, opposed to the spread of slavery, pushed Southern states to secede","Lincoln declared war on the South on Election Day","The South won the election","It abolished slavery"],
 "South Carolina seceded in December 1860, before Lincoln's inauguration. Seven states formed the Confederacy within three months.",
 [null,"The fighting began at Fort Sumter in April 1861.","Lincoln won.","It did not abolish it."]);
Q("war","What was Lincoln's first war aim in 1861?",
 ["Preserve the Union, not abolish slavery","Abolish slavery immediately","Win the vote for Black men","Gain new territory from Mexico"],
 "Lincoln argued that if a side that lost an election could simply leave, democracy failed: “ballots are the rightful and peaceful successors of bullets.” In August 1862 he wrote to Horace Greeley that his paramount object was to save the Union.",
 [null,"That aim came later.","That was not a war aim in 1861.","That is not the point."]);
Q("war","Why was Lincoln careful with the border states (Maryland, Kentucky, Missouri, Delaware)?",
 ["They kept slavery but stayed in the Union, and they were strategic; losing them would have weakened the Union","They had seceded","They were free states","They had voted for Lincoln"],
 "Emancipation too fast risked pushing them toward the Confederacy.",
 [null,"They stayed in the Union.","They were slave states.","That was not the reason."]);
Q("war","What was Lincoln's plan to end slavery during the first two years of the war?",
 ["Gradual emancipation led by the states with national funding, with compensation for owners and colonization","Immediate emancipation without compensation","A war of extermination against the South","A national referendum"],
 "The Delaware plan (November 1861) failed even in a state where slavery was marginal.",
 [null,"That is what he adopted from 1862–1863.","That is not an emancipation plan.","No referendum was planned."]);
Q("war","What pushed Lincoln toward emancipation in summer 1862?",
 ["Thousands of enslaved people fled to Union lines, the war was stalled, abolitionists were gaining ground and the North needed soldiers","The end of the war","A crushing victory at Gettysburg","A request from the South"],
 "Congress also acted in summer 1862: abolishing slavery in Washington, enlisting Black soldiers, freeing slaves of pro-Confederate owners.",
 [null,"The war lasted until 1865.","Gettysburg took place in July 1863.","That is not the case."]);
Q("war","When was the Battle of Antietam, and why does it matter?",
 ["September 17, 1862: the bloodiest day of the war, a Union victory that let Lincoln announce the preliminary Proclamation","July 1863: the biggest battle of the war","April 12, 1861: the start of the war","April 9, 1865: the end of the war"],
 "Antietam (Maryland) turned back Lee's first invasion of the North. The victory also reduced the risk of British or French intervention.",
 [null,"Those are the dates for Gettysburg.","That is Fort Sumter.","That is Appomattox."]);
Q("war","Why did Seward advise Lincoln to wait before issuing the Emancipation Proclamation?",
 ["To issue it after a military victory, so it would not look like a gesture of desperation","Because he opposed ending slavery","Because the Supreme Court had forbidden it","Because Lincoln had not yet been elected"],
 "Lincoln presented the preliminary Proclamation to his cabinet on July 22, 1862, then issued it September 22, five days after Antietam.",
 [null,"His advice was about timing.","There was no such ruling.","Lincoln had been president since 1861."]);
Q("war","When did the Emancipation Proclamation take effect, and what power did Lincoln rely on?",
 ["January 1, 1863, as Commander in Chief, as “a fit and necessary war measure”","July 4, 1863, by a vote of Congress","December 18, 1865, by the 13th Amendment","June 19, 1865, by a Supreme Court ruling"],
 "Because it was a war measure, it only targeted areas in rebellion.",
 [null,"It was a presidential order.","The 13th Amendment came almost three years later.","June 19, 1865 is Juneteenth."]);
Q("war","What did the Emancipation Proclamation do, and what did it NOT do?",
 ["It declared about 3.1 million people free in rebel areas, but left about 750,000 enslaved in the border states and occupied zones","It abolished slavery nationwide that day","It gave citizenship to the formerly enslaved","It freed only Northern slaves"],
 "Foner: emancipation was a process, not a single event.",
 [null,"Slavery was abolished everywhere only by the 13th Amendment.","Citizenship comes with the 14th Amendment.","It targeted rebel areas."]);
Q("war","What important new element did the Proclamation bring to the Union army?",
 ["Black men of “suitable condition” would be received into the army and navy; about 200,000 would serve","Black men are barred from the army","Black men may only cook for the army","Black men can command white regiments"],
 "This contribution played a critical role in Union victory.",
 [null,"It changed exactly that.","They would be received as soldiers.","The text says nothing of the kind."]);
Q("war","Who pushed Lincoln to add the closing words calling the Proclamation an “act of justice”?",
 ["Salmon P. Chase, Secretary of the Treasury","William Seward","Ulysses S. Grant","Stephen Douglas"],
 "Foner calls the text “dull and legalistic”: a military order without inspiring language. Chase insisted at the last minute.",
 [null,"Seward had advised waiting for a victory.","Grant was a general.","Douglas died in 1861."]);
Q("war","What does Foner mean by “double emancipation”?",
 ["The Proclamation emancipated the slaves (their freedom depended on Union victory) and Lincoln himself, who abandoned his earlier ideas about abolition and the place of Black Americans","It freed Black people in the North and South","It was signed twice","It freed slaves and women"],
 "After the Proclamation Lincoln no longer spoke publicly of colonization. In 1864 he refused to withdraw it to get peace.",
 [null,"That is not the meaning.","That is not what “double” means.","Women are not involved."]);
Q("war","When and where was the Battle of Gettysburg?",
 ["July 1–3, 1863, in Pennsylvania","September 17, 1862, in Maryland","April 12, 1861, in South Carolina","April 9, 1865, in Virginia"],
 "Lee invaded Pennsylvania for the second time and was driven back.",
 [null,"That is Antietam.","That is Fort Sumter.","That is Appomattox."]);
Q("war","Why is Gettysburg considered a turning point of the war?",
 ["Lee's invasion of the North was repelled: the largest battle in North America, after which the South never again mounted a major invasion of the North","The Confederates captured Washington","Lincoln signed the Emancipation Proclamation there","The war ended there"],
 "Vicksburg, where Grant gained control of the Mississippi, fell the next day, cutting the South in two.",
 [null,"They never took it.","It dates from January 1, 1863.","It ended in April 1865."]);
Q("war","What does Lincoln answer in 1864 to those asking him to withdraw the Proclamation to get peace?",
 ["He refuses: he would be “damned in time and eternity” if he went back","He agrees to save the Union","He proposes a referendum","He resigns"],
 "This shows how his war aims evolved: from the Union alone to the Union and an end to slavery.",
 [null,"He refuses.","No referendum was planned.","He stays president."]);
Q("rec1","What does Section 1 of the 13th Amendment (ratified December 18, 1865) say?",
 ["Slavery and involuntary servitude are banned, except as punishment for a crime of which the person has been duly convicted","Slavery is banned without any exception","Black people are citizens","Black men have the right to vote"],
 "The crime exception later allowed abuses (vagrancy laws, Black Codes). Section 2 gives Congress the power to enforce the amendment.",
 [null,"There is an exception: crime.","Citizenship comes with the 14th Amendment.","The vote comes with the 15th Amendment."]);
Q("rec1","What pressing questions did Reconstruction face, according to Foner?",
 ["When and how to readmit the South, whether to punish it, what rights to give the formerly enslaved, and what racial justice looks like","How to finance the war and pay the soldiers","How to abolish slavery","How to punish Lincoln"],
 "The war had ended slavery and settled secession, but the country still had to be put back together.",
 [null,"Those are wartime questions.","The war and the 13th Amendment had ended it.","That is not the topic."]);
Q("rec1","What separates Lincoln's approach (Presidential Reconstruction) from the Radical Congress's?",
 ["Lincoln wanted leniency and reconciliation; Congress wanted to punish Southerners, because Confederate leaders were traitors","Lincoln wanted to punish the South; Congress wanted to forgive","They agreed on everything","Lincoln wanted secession"],
 "For Lincoln the Confederate states had never really left the Union: they had “rebelled.” He ended his Second Inaugural with “With malice toward none; with charity for all.”",
 [null,"It is reversed.","They disagreed.","He thought it illegal."]);
Q("rec1","What was Lincoln's plan (Proclamation of Amnesty, the 10 Percent Plan)?",
 ["Pardons for almost all Southerners except high-ranking Confederate officials; a state is readmitted when 10% of 1860 voters pledge loyalty and disavow secession (and ratify the 13th Amendment)","50% of voters must pledge loyalty","The army rules the South for 10 years","Freed people receive 10 acres"],
 "This is the “presidential” position: lenient and quick.",
 [null,"That is the condition of the Wade-Davis Bill.","The army governed the South only from 1867.","No land is provided."]);
Q("rec1","What did Congress's Wade-Davis Bill provide?",
 ["50% of voters loyal, ratification of the 13th Amendment, civil rights for the formerly enslaved, no power for former Confederate leaders; Lincoln vetoed it","Lincoln's plan","The law that created the Freedmen's Bureau","A colonization plan"],
 "It is the Radical Congress's tougher answer to the 10 Percent Plan.",
 [null,"Lincoln opposed it.","That is a different law.","That is not the subject."]);
Q("rec1","What were the consequences of Johnson's Presidential Reconstruction?",
 ["Many former Confederates regained or kept power, freed people had no protection, and the South still looked like the pre-war South","Black men won the vote","Former Confederate leaders were tried","Land was distributed to freed people"],
 "Johnson declared Reconstruction “complete” in December 1865 (“Mission Accomplished”). White supremacy, the Southern aristocracy and the Democratic Party were restored.",
 [null,"That is not true before 1867–1870.","They were mostly pardoned.","It was returned."]);
Q("rec1","What does “land justice” mean during Reconstruction?",
 ["The question of who deserves Southern land: former owners or those who had worked it for generations","The right to vote for local officials","Access to schools","Labor contracts"],
 "The class's four “justices”: political, land, economic (labor) and educational.",
 [null,"That is political justice.","That is educational justice.","That is labor justice."]);
Q("rec1","What did Sherman's Special Field Order No. 15 (January 1865), the origin of “forty acres and a mule,” establish?",
 ["A reserve of coastal land in South Carolina and Georgia divided into 40-acre plots for Black families","The abolition of slavery nationwide","The enlistment of Black soldiers","The end of the war"],
 "The order fed freed people's hope for economic independence.",
 [null,"That is the 13th Amendment.","That is the Emancipation Proclamation.","The war ended in April 1865."]);
Q("rec1","What did President Johnson decide about the land from Sherman's order?",
 ["He returned it to former Confederate owners who swore loyalty to the Union","He confirmed it to Black families","He doubled it","He sold it cheaply to Black families"],
 "Johnson and his supporters argued confiscation would deepen the gap between Confederates and Unionists. Without redistribution most freed people stayed poor and landless.",
 [null,"He did the opposite.","He took it away.","He gave it back to the owners."]);
Q("rec1","What was the Freedmen's Bureau, created at the end of the war?",
 ["A federal agency in charge of refugees, freedmen and abandoned lands, which also set up schools and helped with health","A Southern army","A political party","A Confederate bank"],
 "It was led by O. O. Howard, with under 1,000 agents across the South. By 1869 nearly 3,000 schools depended on it.",
 [null,"It was a federal agency.","It was not a party.","It was federal."]);
Q("rec1","What were the Black Codes?",
 ["Southern laws that restricted Black people's rights, forced labor, limited property and voting, and included vagrancy laws","Laws that protected Black civil rights","The first laws on Black education","Northern laws against slavery"],
 "Foner: the death of slavery did not automatically mean the birth of freedom. These laws aimed to preserve slavery in practice and trap Black people in dependency. The class counts them among the Jim Crow laws.",
 [null,"They did the opposite.","They were not about education.","They were Southern laws."]);
Q("rec1","What is sharecropping?",
 ["A system where a family farms a landowner's plot in exchange for a share of the crop; described as “slavery by another name”","A system where workers own the land","Wage work in factories","A form of colonization"],
 "The system trapped families in debt and made generational wealth very hard to build.",
 [null,"It is the opposite.","Sharecropping is agricultural.","It is not colonization."]);
Q("rec1","What happened with educational justice during Reconstruction?",
 ["Major progress: Black literacy rose by 400% with new schools, often founded by Black women without state support","No change","All schools were funded by planters","Education was banned for Black people"],
 "A slogan of the Freedmen's Bureau convention: “Knowledge is Power.”",
 [null,"There was major progress.","That is not the case.","They founded schools."]);
Q("rec2","What was the effect of the 1866 elections?",
 ["Republicans won a veto-proof majority in Congress, which ended Presidential Reconstruction and opened Radical Reconstruction","Democrats won the majority","Johnson won a second term","The elections were canceled"],
 "With that majority Congress could override Johnson's vetoes. Radical Reconstruction runs from 1866–1867 to 1877.",
 [null,"It is the opposite.","He did not get a second term.","They took place."]);
Q("rec2","What does the Civil Rights Act of 1866 do?",
 ["It gives a national definition of citizenship and affirms equality before the law, with free-labor rights (contracts, lawsuits, protection of property); Johnson vetoed it and Congress overrode him","It gives Black men the vote","It abolishes slavery","It creates the five military districts"],
 "It is the first major law to attack the Black Codes. It led to the 14th Amendment.",
 [null,"That is the 15th Amendment.","That is the 13th Amendment.","Those are the Reconstruction Acts of 1867."]);
Q("rec2","Which of these is part of the 14th Amendment?",
 ["Birthright citizenship and “equal protection of the laws”","The abolition of slavery","Women's right to vote","A ban on racial voting restrictions"],
 "The 14th Amendment also bars former Confederate officeholders from office again and bars repayment of Confederate debts. It penalizes a state that denies adult men the vote. Every Southern state except Tennessee rejected it.",
 [null,"That is the 13th Amendment.","That is not the 14th Amendment.","That is the 15th Amendment."]);
Q("rec2","What did the Reconstruction Acts of 1867 provide?",
 ["The South was divided into five military districts until new state constitutions were approved that included male suffrage without regard to race and ratified the 14th Amendment","They returned all land to planters","They abolished slavery","They expelled Black people to Africa"],
 "Former Confederate leaders were excluded from the constitutional conventions. They opened “interracial democracy.”",
 [null,"Johnson had already done that.","That is the 13th Amendment.","Colonization had been abandoned."]);
Q("rec2","Why was President Johnson impeached in 1868?",
 ["For firing Secretary of War Stanton in violation of the Tenure of Office Act; the House impeached him but the Senate acquitted him","For declaring war on Mexico","For losing an election","For freeing slaves"],
 "The Tenure of Office Act (1867) barred the president from removing appointed officials without Congress's consent. It was really a conflict between Democrat Johnson and the Radical Republicans.",
 [null,"That was not the reason.","That was not the reason.","Emancipation is tied to Lincoln."]);
Q("rec2","What does the 1868 election (Grant vs. Horatio Seymour) show?",
 ["Grant won but narrowly in the popular vote (about 300,000 of 6 million), after an openly racist Democratic campaign; this led to the 15th Amendment","Johnson was reelected","Grant won in a landslide","Seymour won"],
 "The Black vote was decisive for Grant, which convinced Republicans to protect it with an amendment.",
 [null,"Johnson was not the candidate.","The popular-vote margin was small.","Grant won."]);
Q("rec2","What did the 15th Amendment (ratified 1870) do, and what did it NOT do?",
 ["It bars denying the vote on the basis of race, but it did not give women the vote or stop indirect disenfranchisement (literacy tests, poll taxes)","It gives women the vote","It grants birthright citizenship","It abolishes slavery"],
 "It opened the way to a new interracial democracy, but the exclusion of a large part of the American population (women) continued.",
 [null,"Women won the vote only in 1920.","That is the 14th Amendment.","That is the 13th Amendment."]);
Q("rec2","What were the successes of Radical Reconstruction, according to the class?",
 ["More than 2,000 Black officeholders, a sharp rise in Black voting in the South, and a solid public school system built by the new Black leaders","The end of the Klan","Land redistribution","The abolition of farm labor"],
 "Hiram Revels, the first Black senator (Mississippi, 1870), is a symbol.",
 [null,"The Klan actually grew.","Land was not redistributed.","That is not the case."]);
Q("klan","What does “backlash” mean, and what idea does David Blight express with “Every revolution we have causes a counter-revolution”?",
 ["A backlash is a strong reaction against a change; Reconstruction, like other American revolutions, caused a counter-revolution","A backlash is a political alliance; revolutions always succeed","A backlash is a military victory; the war changed nothing","A backlash is a compromise; revolutions are peaceful"],
 "Blight is a historian. The class asked students to agree or disagree with this statement.",
 [null,"The word means a reaction.","That is not the meaning.","The word means a reaction."]);
Q("klan","How does Foner describe the Ku Klux Klan?",
 ["The greatest example of homegrown terrorism in American history; it grew prominent in the 1868 elections and mainly targeted Southern Republican voters","A group defending Black people","A Union militia","An official political party"],
 "According to the class the Klan formed in 1865. Its violence eroded trust in the legitimacy of Republican governments: a government that cannot protect its citizens is a failure.",
 [null,"It was the opposite.","It opposed the Union.","It was a secret terrorist society."]);
Q("klan","What are the Enforcement Acts (Force Acts) of 1870–1871?",
 ["Laws passed by Congress to fight terrorist societies like the Klan, authorizing the use of the army against them","Laws that limited Black voting","Tariff laws","Laws that freed Johnson"],
 "Under Grant, federal action weakened the Klan for a time.",
 [null,"It is the opposite.","They were not about tariffs.","Johnson was acquitted in 1868."]);
Q("klan","According to Philip Zimbardo, how does dehumanization make violence possible?",
 ["When some see other human beings as excluded from the moral order, ordinary and even idealistic people can commit cruel acts","It makes people more empathetic","It only affects criminals","It reduces violence"],
 "The class discusses the factors that made Klan violence possible and acceptable to so many Americans.",
 [null,"It does the opposite.","Zimbardo says normal people can take part.","It facilitates it."]);
Q("klan","According to Zimbardo, what is the effect of anonymity (masks, robes, not being recognized)?",
 ["It reduces the sense of personal accountability, especially when an authority gives permission for violence","It increases personal accountability","It has no effect","It makes people more honest"],
 "The Klan acted masked and in secret, which illustrates this factor.",
 [null,"It reduces it.","Zimbardo sees it as an important factor.","It has the opposite effect."]);
Q("klan","According to Ervin Staub, how do shame and humiliation contribute to violence?",
 ["Groups proud of their superiority react strongly when events contradict their image, and seek to reassert their identity, often through violence","They push people to forgive","They reduce anger","They exist only in individuals"],
 "For many white Southerners, defeat and Black equality could be felt as humiliation.",
 [null,"They push to reassert identity.","They increase the motivation for violence.","Staub also speaks of groups and nations."]);
Q("klan","According to Staub, what role do bystanders play?",
 ["They define the meaning of events and, by passivity or participation, can affirm perpetrators or promote empathy","They have no role","They are always the victims","They are always the perpetrators"],
 "Many Northerners lost interest in Reconstruction, which left the field open to perpetrators of violence.",
 [null,"Staub says they exert powerful influence.","They are not directly affected.","They are witnesses."]);
Q("klan","Which factors helped end Reconstruction?",
 ["Disillusion among some Republicans and Northern liberals, resurgent racism in the North, the 1873 depression, and the victory of Democratic “Redeemers” in the South","Grant's defeat in 1872","A Southern victory in the war","The return of legal slavery"],
 "Grant was reelected in 1872, but liberal reformers and Democrats agreed on the need for a new approach to the South.",
 [null,"Grant was reelected in 1872.","The North won.","The 13th Amendment banned it."]);
Q("klan","What was the “Bargain of 1877”?",
 ["After the disputed election of Hayes, he recognized the Southern Democrats' rights and pulled soldiers from political offices in South Carolina and Louisiana; Democrats accepted his victory","A deal between Lincoln and Lee","A treaty with Mexico","A congressional law giving Black men the vote"],
 "Although Black people kept voting and holding office in some states into the 1890s, the Reconstruction era ended in 1877.",
 [null,"Lee had surrendered in 1865.","Unrelated.","That is the 15th Amendment (1870)."]);
Q("klan","What is “Jim Crow”?",
 ["A minstrel-show character (blackface) that became the name for segregation laws after the Civil War","A real person, a Southern senator","The name of an 1877 treaty","A Union political party"],
 "Jim Crow laws enforced segregation, limited Black voters' power, prescribed Black labor and limited Black property. They run from the Civil War to the 1960s civil rights era.",
 [null,"He was not a real person.","It is not a treaty.","It is not a party."]);

CHRONO = [
 ["The Constitutional Convention and the Constitution", 1787.09, "1787"],
 ["Congress may ban the importation of slaves (Slave Trade Clause)", 1808.01, "1808"],
 ["Founding of the American Colonization Society", 1816.12, "1816"],
 ["The Missouri Compromise", 1820.03, "1820"],
 ["David Walker's Appeal", 1829.09, "1829"],
 ["First issue of The Liberator (Garrison)", 1831.01, "1831"],
 ["Founding of the American Anti-Slavery Society", 1833.12, "1833"],
 ["The gag rule against antislavery petitions", 1836.05, "1836"],
 ["Elijah Lovejoy is killed by a mob", 1837.11, "1837"],
 ["The gag rule is repealed", 1844.12, "1844"],
 ["Douglass's Narrative", 1845.05, "1845"],
 ["The Compromise of 1850 and the Fugitive Slave Act", 1850.09, "1850"],
 ["Uncle Tom's Cabin (Stowe)", 1852.03, "1852"],
 ["Douglass: “What to the Slave is the Fourth of July?”", 1852.07, "1852"],
 ["The Kansas-Nebraska Act", 1854.05, "1854"],
 ["The Dred Scott v. Sandford decision", 1857.03, "1857"],
 ["Lincoln's “House Divided” speech (Springfield)", 1858.0616, "June 1858"],
 ["The Lincoln-Douglas debates (Freeport, August 27)", 1858.0827, "August 1858"],
 ["John Brown raids Harpers Ferry", 1859.1, "1859"],
 ["Lincoln is elected president", 1860.1106, "November 1860"],
 ["South Carolina secedes", 1860.12, "December 1860"],
 ["Lincoln presents the preliminary Proclamation to his cabinet", 1862.0722, "July 22, 1862"],
 ["The Battle of Antietam", 1862.0917, "September 17, 1862"],
 ["The preliminary Emancipation Proclamation", 1862.0922, "September 22, 1862"],
 ["The Emancipation Proclamation takes effect", 1863.0101, "January 1, 1863"],
 ["The Battle of Gettysburg", 1863.0701, "July 1–3, 1863"],
 ["Sherman's Special Field Order No. 15 (“40 acres and a mule”)", 1865.0116, "January 1865"],
 ["Creation of the Freedmen's Bureau", 1865.0303, "March 1865"],
 ["Lincoln's Second Inaugural Address", 1865.0304, "March 4, 1865"],
 ["Ratification of the 13th Amendment", 1865.1218, "December 18, 1865"],
 ["The Southern Black Codes (e.g., Mississippi)", 1865.11, "1865–1866"],
 ["The Civil Rights Act", 1866.04, "1866"],
 ["Midterm elections: Republican majority in Congress", 1866.11, "November 1866"],
 ["The Reconstruction Acts (five military districts)", 1867.03, "1867"],
 ["Johnson is impeached, then acquitted", 1868.02, "1868"],
 ["Grant is elected president", 1868.11, "November 1868"],
 ["The 14th Amendment (ratified)", 1868.07, "July 1868"],
 ["The 15th Amendment (ratified)", 1870.02, "February 1870"],
 ["The Enforcement Acts against the Klan", 1870.05, "1870–1871"],
 ["Grant's reelection; the Liberal Republicans", 1872.11, "1872"],
 ["Economic depression", 1873.09, "1873"],
 ["The Bargain of 1877: end of Reconstruction", 1877.03, "1877"]
];

PEOPLE = [
 ["John Rutledge","South Carolina delegate in 1787: “interest alone” governs; the North will profit by carrying the South's products.","The framers of 1787"],
 ["Luther Martin","Delegate who wanted to be able to ban or tax the slave trade, as contrary to the principles of the Revolution.","The framers of 1787"],
 ["Oliver Ellsworth","Delegate: “Let every State import what it pleases.”","The framers of 1787"],
 ["Charles Pinckney","South Carolina delegate: his state would never accept a ban on the slave trade.","The framers of 1787"],
 ["Benjamin Franklin","Accepted the Constitution “with all its faults” on September 17, 1787.","The framers of 1787"],
 ["James Madison","Delegate whose notes are a major source on the Convention debates (including August 21).","The framers of 1787"],
 ["William Lloyd Garrison","White abolitionist, founder of The Liberator (1831): “I will be heard”; wanted to dissolve the Union.","Abolitionists"],
 ["David Walker","Free Black man of Boston, author of the Appeal (1829), a radical call to resistance.","Abolitionists"],
 ["Frederick Douglass","Formerly enslaved speaker and writer: Narrative (1845), July 4, 1852 speech; responded to Dred Scott.","Abolitionists"],
 ["Harriet Tubman","Escaped, then returned to guide others on the Underground Railroad.","Abolitionists"],
 ["Harriet Beecher Stowe","Author of Uncle Tom's Cabin (1852), an antislavery novel widely read in the North.","Abolitionists"],
 ["Theodore Weld","White moral-suasion abolitionist: “slavery is a sin.”","Abolitionists"],
 ["Angelina et Sarah Grimké","Southern sisters who became abolitionists and women's rights advocates.","Abolitionists"],
 ["Elijah Lovejoy","Abolitionist killed by a mob in Illinois in 1837.","Abolitionists"],
 ["John Quincy Adams","Former president and congressman who led the fight against the gag rule, repealed in 1844.","Abolitionists"],
 ["John Brown","White abolitionist who raided the Harpers Ferry arsenal in 1859.","Abolitionists"],
 ["Henry Clay","Senator and compromise architect, tied to the Missouri Compromise and that of 1850.","Politics and the courts"],
 ["Stephen Douglas","Illinois senator, defender of popular sovereignty; Freeport Doctrine; Northern Democrat in 1860.","Politics and the courts"],
 ["Roger B. Taney","Chief Justice: majority opinion (7–2) in Dred Scott: no citizenship for Black Americans; Missouri Compromise unconstitutional.","Politics and the courts"],
 ["Benjamin R. Curtis","Dissenting justice in Dred Scott: free Black people were citizens; Congress could regulate the territories.","Politics and the courts"],
 ["Dred Scott","Enslaved man who sued for his freedom after living in a free state and free territory.","Politics and the courts"],
 ["John Breckinridge","Southern Democrat in 1860: slaveholders' rights in the territories.","Politics and the courts"],
 ["John Bell","Constitutional Union Party candidate in 1860.","Politics and the courts"],
 ["Abraham Lincoln","Republican, 16th president: “House Divided” (1858), Emancipation Proclamation, 10 Percent Plan.","Civil War"],
 ["Robert E. Lee","Confederate general: his invasion of the North was turned back at Antietam (1862) and Gettysburg (1863).","Civil War"],
 ["William Seward","Secretary of State: advised waiting for a victory before the Proclamation.","Civil War"],
 ["Salmon P. Chase","Treasury Secretary: pushed Lincoln to close the Proclamation with “an act of justice.”","Civil War"],
 ["William T. Sherman","Union general: Special Field Order No. 15 (January 1865), “40 acres and a mule.”","Reconstruction"],
 ["Andrew Johnson","President (1865–1869): lenient Presidential Reconstruction; land returned; impeached in 1868.","Reconstruction"],
 ["Edwin Stanton","Secretary of War, ally of the Radicals; his firing led to Johnson's impeachment.","Reconstruction"],
 ["Thaddeus Stevens","Radical Republican who wanted to confiscate planters' land for the formerly enslaved.","Reconstruction"],
 ["O. O. Howard","Head of the Freedmen's Bureau (1865–1870).","Reconstruction"],
 ["Ulysses S. Grant","President (1869–1877): elected 1868, reelected 1872; fought the Klan with the Enforcement Acts.","Reconstruction"],
 ["Horatio Seymour","Democrat defeated by Grant in 1868 after an openly racist campaign.","Reconstruction"],
 ["Hiram Revels","First Black U.S. senator (Mississippi, 1870).","Reconstruction"],
 ["Rutherford B. Hayes","President whose disputed election led to the Bargain of 1877 and the end of Reconstruction.","Reconstruction"],
 ["Eric Foner","Historian of Reconstruction: the Klan as homegrown terrorism; “double emancipation”; “The Emancipation of Abe Lincoln.”","Historians and thinkers"],
 ["David Blight","Historian: “Every revolution we have causes a counter-revolution.”","Historians and thinkers"],
 ["Philip Zimbardo","Psychologist: dehumanization and anonymity make violence possible.","Historians and thinkers"],
 ["Ervin Staub","Psychologist: shame and humiliation, and the role of bystanders, help explain group violence.","Historians and thinkers"]
];

QUOTES = [
 ["“A house divided against itself cannot stand.”","Abraham Lincoln","Springfield speech, June 16, 1858"],
 ["“Slavery cannot exist a day or an hour anywhere, unless it is supported by local police regulations.”","Stephen Douglas","Freeport debate, August 27, 1858"],
 ["“I am not for the dissolution of the Union under any circumstances.”","Stephen Douglas","Freeport debate, 1858"],
 ["“Ballots are the rightful and peaceful successors of bullets.”","Abraham Lincoln","Message to Congress, July 4, 1861"],
 ["“With malice toward none; with charity for all…”","Abraham Lincoln","Second Inaugural Address, March 4, 1865"],
 ["“A fit and necessary war measure.”","Abraham Lincoln","Emancipation Proclamation, January 1, 1863"],
 ["“I should be damned in time and eternity.”","Abraham Lincoln","1864: refusing to withdraw the Proclamation"],
 ["“Let every State import what it pleases.”","Oliver Ellsworth","1787 Convention"],
 ["“Religion and humanity had nothing to do with this question. Interest alone is the governing principle with nations.”","John Rutledge","1787 Convention, August 21"],
 ["“I will be heard.”","William Lloyd Garrison","The Liberator, 1831"],
 ["“What to the Slave is the Fourth of July?”","Frederick Douglass","Rochester, 1852"],
 ["“Knowledge is Power.”","Freedmen's Bureau Convention","Education during Reconstruction"],
 ["“Every revolution we have causes a counter-revolution.”","David Blight","Historian, on the backlash"],
 ["“Dehumanization occurs whenever some human beings consider other human beings to be excluded from the moral order of being a human person.”","Philip Zimbardo","Psychologist, on Klan violence"],
 ["“Mission Accomplished!”","Andrew Johnson","Reconstruction declared “complete,” December 1865"]
];

LEX = [
 ["Le compromis des trois cinquièmes","Three-Fifths Clause","An enslaved person counts as 3/5 of a person in the census (representation and taxes)."],
 ["La clause de la traite","Slave Trade Clause","Article I, Section 9: Congress cannot ban the importation of slaves before 1808."],
 ["La clause des esclaves fugitifs","Fugitive Slave Clause","Article IV: a person who escapes to another state must be returned to the owner."],
 ["L'institution particulière","The peculiar institution","A euphemism for slavery."],
 ["Le recensement","Census","The population count that sets House seats, electors and direct taxes."],
 ["La colonisation","Colonization","A plan to end slavery gradually and send free Black people to Africa (Liberia)."],
 ["L'abolition immédiate","Immediate abolition","An end to slavery without delay, with Black people as equals in the republic."],
 ["La persuasion morale","Moral suasion","Convincing people that slavery is a sin, without violence."],
 ["Le Chemin de fer souterrain","Underground Railroad","A secret network that helped enslaved people escape."],
 ["La souveraineté populaire","Popular sovereignty","Settlers of a territory vote on whether to allow slavery."],
 ["La ligne 36°30'","The 36°30' line","Missouri Compromise boundary: no slavery to the north in the Louisiana Purchase."],
 ["La loi sur les esclaves fugitifs","Fugitive Slave Act","1850 law: citizens must help capture fugitives; no jury or testimony for the accused."],
 ["Bleeding Kansas","Bleeding Kansas","Violence between pro- and antislavery settlers in Kansas after 1854."],
 ["L'opinion dissidente","Dissent","A justice's opinion disagreeing with the majority (Curtis in Dred Scott)."],
 ["La sécession","Secession","To withdraw formally from a union."],
 ["Le commandant en chef","Commander in Chief","The president as head of the armed forces; the power cited for the Emancipation Proclamation."],
 ["L'émancipation graduelle","Gradual emancipation","A plan of slow abolition, with compensation to owners, led by the states."],
 ["Les États frontaliers","Border states","Slave states that stayed in the Union (Maryland, Kentucky, Missouri, Delaware)."],
 ["La Reconstruction présidentielle","Presidential Reconstruction","The lenient plan of Lincoln and then Johnson (10% of voters, pardons)."],
 ["La Reconstruction radicale (congressionnelle)","Radical (Congressional) Reconstruction","Congress's plan: civil rights, 14th and 15th Amendments, Reconstruction Acts (1867)."],
 ["Les Black Codes","Black Codes","Southern laws that restricted Black people's rights and forced their labor."],
 ["Les lois sur le vagabondage","Vagrancy laws","Laws that allowed arresting Black people without work and forcing them to labor."],
 ["Le métayage","Sharecropping","Farming an owner's land for a share of the crop; “slavery by another name.”"],
 ["Le Freedmen's Bureau","Freedmen's Bureau","Federal agency (1865) for refugees, freedmen and abandoned lands; schools and health."],
 ["La justice territoriale","Land justice","Who deserves the land: “40 acres and a mule” (Sherman's order) versus return to Confederates."],
 ["La protection égale de la loi","Equal protection of the laws","A 14th Amendment phrase, still debated today."],
 ["La citoyenneté de naissance","Birthright citizenship","Being born in the United States makes someone a citizen (14th Amendment)."],
 ["La démocratie interraciale","Interracial democracy","Black and white participation in government after the Reconstruction Acts."],
 ["La mise en accusation","Impeachment","House proceeding against an official; Johnson (1868), acquitted by the Senate."],
 ["Le Tenure of Office Act","Tenure of Office Act","1867 law: the president cannot remove appointed officials without Congress's consent."],
 ["La privation du droit de vote","Disenfranchisement","Keeping citizens from voting, e.g., through literacy tests or poll taxes."],
 ["Le backlash","Backlash","A strong reaction against social or political change."],
 ["Les Enforcement Acts","Enforcement Acts (Force Acts)","1870–1871 laws against terrorist societies like the Klan."],
 ["La déshumanisation","Dehumanization","Seeing human beings as excluded from the moral order (Zimbardo)."],
 ["Les Redeemers","Redeemers","White Southern Democrats who regained power and ended Reconstruction."],
 ["Le Bargain of 1877","Bargain of 1877","Compromise after Hayes's disputed election: troops withdrawn, end of Reconstruction."],
 ["Jim Crow","Jim Crow","A minstrel character that became the name for segregation laws."]
];

NOTES = [
 { id:"p1", t:"Part 1 · The Constitution and slavery (1787)", topics:["const"], q:"Did the Constitution establish a just government?", html:`
  <h3>How the framers protected slavery</h3>
  <ul><li><b>Three-Fifths Clause (Art. I, Sec. 2, Cl. 3)</b>: an enslaved person counts as 3/5. The census sets (1) representatives, (2) electors, (3) direct taxes. The South pays more tax BUT gains seats. Not senators: 2 per state.</li>
  <li><b>Slave Trade Clause (Art. I, Sec. 9, Cl. 1)</b>: Congress cannot ban importation before <b>1808</b>; tax of at most $10 per person. After 1808 the domestic trade continued.</li>
  <li><b>Fugitive Slave Clause (Art. IV, Sec. 2, Cl. 3)</b>: a person “held to Service” who escapes must be “delivered up.”</li>
  <li>The word “slavery” never appears: “other Persons,” “Person held to Service or Labour.” “The peculiar institution.”</li></ul>
  <h3>The Convention debates (Madison's notes, August 21)</h3>
  <ul><li><b>Luther Martin</b>: allow banning or taxing the slave trade; contrary to the principles of the Revolution.</li>
  <li><b>Rutledge</b>: “Interest alone”; the North will profit as the carrier.</li>
  <li><b>Ellsworth</b>: “Let every State import what it pleases.”</li>
  <li><b>Pinckney</b>: South Carolina will never accept a ban on the slave trade.</li>
  <li><b>Franklin</b> (Sept. 17): accepts the Constitution “with all its faults.”</li></ul>
` },
 { id:"p2", t:"Part 2 · The abolitionist movement (1810s–1850s)", topics:["abo"], q:"What range of views existed among abolitionists?", html:`
  <h3>Colonization or immediate abolition?</h3>
  <table class="table"><tr><th></th><th>Colonization</th><th>Immediate abolition</th></tr>
  <tr><td>When</td><td>American Colonization Society, 1816</td><td>1830s</td></tr>
  <tr><td>Idea</td><td>Gradual abolition + send Black people to Africa (Liberia, Monrovia). America is a white society.</td><td>Slavery is a sin; end it at once; Black people are equal members; fight racism.</td></tr>
  <tr><td>Black reaction</td><td>Most opposed it (1817: 3,000 free Black people in Philadelphia: “we are Americans”).</td><td>Strong Black support and leadership.</td></tr></table>
  <h3>Key abolitionists</h3>
  <ul><li><b>David Walker</b>: Appeal (1829). <b>Garrison</b>: The Liberator (1831), “I will be heard”; Constitution = “a covenant with death”; wanted to dissolve the Union.</li>
  <li><b>American Anti-Slavery Society (1833)</b>: moral suasion, pamphlets, petitions; <b>Theodore Weld</b>. Many “non-resistants” (pacifists).</li>
  <li><b>Frederick Douglass</b>: Narrative (1845); “What to the Slave is the Fourth of July?” (1852).</li>
  <li><b>Harriet Tubman</b>: Underground Railroad. <b>Stowe</b>: Uncle Tom's Cabin (1852). <b>Grimké sisters</b>: abolition and women's rights.</li>
  <li><b>John Brown</b>: Harpers Ferry (1859), a federal arsenal.</li></ul>
  <h3>Opposition and free speech</h3>
  <ul><li><b>Gag rule (1836)</b> against petitions; repealed in 1844 thanks to <b>John Quincy Adams</b>.</li>
  <li><b>Elijah Lovejoy</b> killed by a mob (1837). Pennsylvania Hall burned (1838).</li></ul>
` },
 { id:"p3", t:"Part 3 · Compromises, crises and Dred Scott", topics:["comp", "dred"], q:"To what extent did the compromises delay the crisis?", html:`
  <h3>The legislative compromises</h3>
  <table class="table"><tr><th>Law</th><th>Content</th></tr>
  <tr><td><b>Missouri 1820</b></td><td>11 free / 11 slave. MO slave, ME free. No slavery north of <b>36°30'</b> (Louisiana Purchase).</td></tr>
  <tr><td><b>Compromise of 1850</b></td><td>California free (Gold Rush). Mexican Cession (Guadalupe Hidalgo, 1848): <b>popular sovereignty</b>. Stronger <b>Fugitive Slave Act</b>.</td></tr>
  <tr><td><b>Fugitive Slave Act 1850</b></td><td>Citizens must help; no jury or testimony for the accused; commissioners paid $10 (enslaved) vs. $5 (free); aiding a fugitive: $1,000 fine and jail. Outrage in the North.</td></tr>
  <tr><td><b>Kansas-Nebraska 1854</b></td><td>Effectively repeals the Missouri Compromise; popular sovereignty → <b>Bleeding Kansas</b>; birth of the Republican Party.</td></tr></table>
  <h3>Dred Scott v. Sandford (1857)</h3>
  <ul><li>Born into slavery in Virginia. Lived in <b>Illinois</b> (free) and at <b>Fort Snelling</b> (free by the Missouri Compromise). Sued Irene Emerson after she refused to let him buy his freedom (1846).</li>
  <li><b>Taney, majority (7–2)</b>: (1) a Black person descended from enslaved people cannot be a citizen; (2) Congress cannot exclude slavery from the territories → Missouri Compromise unconstitutional.</li>
  <li><b>Curtis, dissenting</b> (with McLean): free Black people were citizens in several states at the time of the Constitution; Congress could regulate the territories.</li>
  <li><b>Antislavery responses</b>: Douglass rejects the decision as a perversion of the Constitution; Lincoln challenges Taney (the Declaration includes all men) and wants it overturned through politics.</li></ul>
` },
 { id:"p4", t:"Part 3 (cont.) · Lincoln-Douglas (1858) and the 1860 election", topics:["elec"], q:"To what extent did popular sovereignty reflect the divisions over slavery?", html:`
  <h3>The Lincoln-Douglas debates (1858)</h3>
  <ul><li>Seven debates for an Illinois U.S. Senate seat. Lincoln lost but became famous.</li>
  <li><b>Lincoln, Springfield</b>: “A house divided against itself cannot stand.” The “machinery” = Nebraska doctrine + Dred Scott + Douglas's “care not.”</li>
  <li><b>Douglas, Freeport (Aug. 27)</b>: a territory can exclude slavery through “unfriendly legislation”: without local police regulations, slavery cannot exist. Never for dissolving the Union.</li>
  <li>Summary: Douglas = popular sovereignty; Lincoln = against the extension of slavery.</li></ul>
  <h3>The 1860 election</h3>
  <table class="table"><tr><th>Candidate</th><th>Slavery</th></tr>
  <tr><td><b>Lincoln</b> (Republican)</td><td>Keep it where it exists; not in the new territories. Homesteads, tariffs, railroad.</td></tr>
  <tr><td><b>Douglas</b> (Northern Democrat)</td><td>Popular sovereignty.</td></tr>
  <tr><td><b>Breckinridge</b> (Southern Democrat)</td><td>Slaveholders' rights in the territories.</td></tr>
  <tr><td><b>Bell</b> (Constitutional Union)</td><td>“The Constitution, the Union and the enforcement of the laws.”</td></tr></table>
  <ul><li>Secession: South Carolina (December 1860); 7 states within 3 months. No “good riddance”: if the loser can leave, democracy fails.</li></ul>
` },
 { id:"p5", t:"Part 4 · The Civil War and emancipation (1861–1865)", topics:["war"], q:"To what extent did the Emancipation Proclamation change the war and Lincoln?", html:`
  <h3>The evolution of Lincoln's war aims</h3>
  <ul><li><b>1861</b>: preserve the Union, not abolish slavery; be careful with the border states. Plan: gradual emancipation led by the states, with compensation and colonization (failed in Delaware, 1861).</li>
  <li><b>Summer 1862</b>: fugitives toward Union lines, military stalemate, abolitionist pressure, need for soldiers; Congress acts (Washington, Black soldiers).</li>
  <li>July 22, 1862: preliminary Proclamation to the cabinet; <b>Seward</b>: wait for a victory.</li>
  <li><b>Antietam (Sept. 17, 1862)</b>: bloodiest day; Union victory; preliminary Proclamation on Sept. 22.</li>
  <li>After that: immediate, with no compensation or colonization. 1864: refuses to withdraw it.</li></ul>
  <h3>The Proclamation (January 1, 1863)</h3>
  <ul><li>Commander in Chief: “a fit and necessary war measure.” Text “dull and legalistic”; <b>Chase</b>: “act of justice.”</li>
  <li>Rebel areas only: about <b>3.1 million</b> free; about <b>750,000</b> left enslaved (border states, occupied zones).</li>
  <li>Black men received into the army and navy: about <b>200,000</b>. Nationwide abolition: 13th Amendment (December 1865).</li>
  <li><b>Foner</b>: “double emancipation” (the slaves AND Lincoln).</li></ul>
  <h3>Gettysburg (July 1–3, 1863)</h3>
  <ul><li>Lee's second invasion of the North; Pennsylvania; the largest battle in North America; the Union wins. Vicksburg (Grant, Mississippi) falls the next day.</li></ul>
` },
 { id:"p6", t:"Part 5 · Presidential Reconstruction and the four justices", topics:["rec1"], q:"Did Reconstruction end in 1877, or does the work continue?", html:`
  <h3>Starting questions and two approaches</h3>
  <ul><li><b>13th Amendment</b> (Dec. 18, 1865): ends slavery except as punishment for crime; Section 2: Congress can enforce it.</li>
  <li>Questions: readmit the South? punish it? what rights? what does racial justice look like?</li>
  <li><b>Lincoln / Johnson (presidential)</b>: leniency, reconciliation; amnesty except high officials; 10% of voters pledge loyalty (“Mission Accomplished,” Dec. 1865).</li>
  <li><b>Congress (radical)</b>: punish the leaders; Wade-Davis (50%, civil rights, Lincoln's veto).</li>
  <li>Consequences of Johnson's plan: former Confederates in power, no protection for freed people, white supremacy restored.</li></ul>
  <h3>The four justices</h3>
  <table class="table"><tr><th>Justice</th><th>Key points</th></tr>
  <tr><td><b>Political</b></td><td>Citizenship, the vote (see part 6).</td></tr>
  <tr><td><b>Land</b></td><td>Sherman's Special Field Order No. 15: “40 acres and a mule”; Johnson returns the land to loyal Confederates.</td></tr>
  <tr><td><b>Economic (labor)</b></td><td>Freedmen's Bureau; Black Codes and vagrancy laws; sharecropping = “slavery by another name.”</td></tr>
  <tr><td><b>Educational</b></td><td>Progress: Black literacy +400%; schools often founded by Black women; “Knowledge is Power.”</td></tr></table>
` },
 { id:"p7", t:"Part 6 · Radical Reconstruction, the Klan and the end (1866–1877)", topics:["rec2", "klan"], q:"To what extent was Reconstruction a second American revolution?", html:`
  <h3>Radical Reconstruction</h3>
  <ul><li><b>1866</b>: Republican majority in Congress. <b>Civil Rights Act of 1866</b>: national citizenship, equality before the law, free-labor rights; Johnson's veto overridden.</li>
  <li><b>14th Amendment</b>: birthright citizenship; “equal protection of the laws”; former Confederates barred from office; Confederate debts not repaid.</li>
  <li><b>Reconstruction Acts (1867)</b>: 5 military districts; universal male suffrage without regard to race; ratify the 14th Amendment; interracial democracy.</li>
  <li><b>Tenure of Office Act</b>; Johnson fires Stanton; impeachment (1868), acquitted. <b>Grant</b> elected in 1868 (margin of about 300,000 votes).</li>
  <li><b>15th Amendment</b> (ratified 1870): no denial of the vote by race; BUT women excluded and indirect disenfranchisement (literacy tests, poll taxes).</li>
  <li><b>Successes</b>: over 2,000 Black officeholders; Black voting up sharply; public school system; Revels, first Black senator.</li></ul>
  <h3>Backlash and the end</h3>
  <ul><li><b>Black Codes</b>, then Jim Crow. <b>Ku Klux Klan</b>: “the greatest example of homegrown terrorism” (Foner); active in the 1868 elections.</li>
  <li><b>Enforcement Acts (1870–1871)</b>: the army against terrorist societies.</li>
  <li>Why the violence? <b>Dehumanization</b>, <b>anonymity</b> (Zimbardo); <b>shame and humiliation</b>, the role of <b>bystanders</b> (Staub).</li>
  <li>End: divided Republicans, Northern racism, the <b>1873 depression</b>, the <b>Redeemers</b>' victory. <b>Bargain of 1877</b>: Hayes's disputed election, troops pulled from South Carolina and Louisiana.</li></ul>
` }
];

CARD_DEFAULT = `FRONT · 1787 → 1860
1787 The Constitution protects slavery without naming it: an enslaved person counts as 3/5 of a person in the census (this is used to count representatives, presidential electors and direct taxes; the Senate is unaffected, 2 senators per state). The South gains seats, but also pays more in taxes.
1787 Congress cannot ban the importation of enslaved people before 1808 (tax of at most $10 per person). The fugitive clause (Art. IV) requires that a person “held to Service” who escapes be returned. The word “slavery” is never written: the text says “other Persons,” and people called it “the peculiar institution.”
1787 Convention debate (Madison's notes): Luther Martin wants to be able to ban or tax the slave trade; Rutledge answers that only “interest” matters and the North will profit by carrying the goods; Ellsworth: each state decides; Pinckney: South Carolina will refuse any ban; Franklin signs “with all its faults.”
1808 Importing enslaved people becomes legally banned, but the trade inside the country continues.
1816 The American Colonization Society is founded: gradual abolition and sending Black people to Africa (Liberia) because America was seen as a white society. Most free Black people refuse (“we are Americans”). In the 1830s, abolitionists instead demand immediate emancipation and equality for Black people.
1820 Missouri Compromise: Missouri enters as a slave state and Maine as a free state, keeping the balance at 12 to 12; slavery is banned north of the 36°30' line in the Louisiana Purchase territory.
1829–1838 David Walker writes the Appeal (1829). William Lloyd Garrison founds The Liberator (1831), says “I will be heard” and calls the Constitution a “covenant with death.” The American Anti-Slavery Society (1833) uses moral suasion. The gag rule (1836) blocks petitions; John Quincy Adams gets it repealed in 1844. Elijah Lovejoy is killed by a mob in 1837.
1845–1852 Frederick Douglass publishes his Narrative (1845), then “What to the Slave is the Fourth of July?” (1852). Harriet Tubman helps enslaved people escape on the Underground Railroad. Harriet Beecher Stowe publishes Uncle Tom's Cabin (1852).
1848 The Treaty of Guadalupe Hidalgo gives the U.S. new Mexican lands; the question is whether slavery will be allowed there, hence popular sovereignty (residents vote).
1850 Compromise of 1850: California enters as a free state; the Southwest territories use popular sovereignty; the Fugitive Slave Act is made harsher: no jury or testimony for the accused, the commissioner gets $10 if he rules the person enslaved versus $5 if he frees them, and helping a fugitive costs $1,000 and jail. The North is outraged.
1854 Kansas-Nebraska Act: popular sovereignty replaces the Missouri Compromise, causing the violence of “Bleeding Kansas” and the birth of the Republican Party.
1857 Dred Scott v. Sandford: Dred Scott was born enslaved, lived in Illinois and Fort Snelling (free places) and sued for his freedom. Justice Taney, with a 7–2 majority, rules that a descendant of enslaved people cannot be a citizen and that Congress has no power to ban slavery in the territories (so the Missouri Compromise is unconstitutional). Justice Curtis dissents. Douglass and Lincoln challenge the decision.
1858 Lincoln-Douglas debates (7 debates; Lincoln loses the election). Lincoln: “A house divided against itself cannot stand” (the nation cannot stay half free, half slave). Douglas, at Freeport (Aug. 27): a territory can keep slavery out by not passing laws to protect it (“unfriendly legislation”). 1859: John Brown attacks the federal arsenal at Harpers Ferry.
1860 Election: Lincoln (Republican) wants to stop slavery from spreading; Douglas (Northern Democrat) defends popular sovereignty; Breckinridge (Southern Democrat) defends slaveholders' rights in the territories; Bell (Constitutional Union) says “the Constitution, the Union and the laws.” In December South Carolina secedes; seven states follow within three months.

BACK · 1861 → 1877
1861 The war begins at Fort Sumter (April). Lincoln wants to save the Union, not abolish slavery, and is careful with the border states. His plan: gradual emancipation, with compensation for owners and colonization of Black people; it fails in Delaware.
1862 In the summer, enslaved people flee to Union lines, the war is stalemated and the Union needs soldiers. Seward advises waiting for a victory before announcing emancipation. After the victory at Antietam (Sept. 17, the bloodiest day), Lincoln issues the preliminary Proclamation (Sept. 22).
1863 On January 1, the Emancipation Proclamation: Lincoln acts as commander in chief (“war measure”). It frees only the enslaved people in rebel regions: about 3.1 million are free and about 750,000 (border states, occupied areas) are not. About 200,000 Black men serve as soldiers. Foner calls it a “double emancipation”: of the enslaved people and of Lincoln himself.
1863 Gettysburg (July 1–3): Lee invades Pennsylvania and the Union wins the largest battle in North America; Vicksburg (Grant) falls on July 4. 1864: Lincoln refuses to withdraw the Proclamation.
1865 Sherman's Special Field Order No. 15 promises land to freed people (“40 acres and a mule”). In March, the Freedmen's Bureau is created. The 13th Amendment (Dec. 18) abolishes slavery except as punishment for a crime, and Section 2 lets Congress enforce it.
1865 Two plans: Lincoln (10% of voters swear loyalty) versus Wade-Davis (50%, civil rights, but Lincoln vetoes it). President Johnson grants pardons, returns land to former Confederates and declares Reconstruction finished (“Mission Accomplished”). The South passes the Black Codes and vagrancy laws.
The 4 justices: political (citizenship and the vote); land (the land promise is broken); labor (Freedmen's Bureau, then sharecropping = “slavery by another name”); education (Black literacy +400%, schools often founded by Black women).
1866 The Civil Rights Act grants citizenship and equality before the law (Congress overrides Johnson's veto). The 14th Amendment: citizenship for anyone born in the U.S., equal protection of the laws, former Confederates barred from office.
1867 The Reconstruction Acts divide the South into 5 military districts and require Black men's right to vote and ratification of the 14th Amendment. 1868: Johnson fires Stanton despite the Tenure of Office Act, the House impeaches him, but he is acquitted; Grant is elected president.
1870 The 15th Amendment bans denying the vote because of race, but women are excluded and literacy tests and poll taxes are used. Enforcement Acts (1870–1871): the army against the Ku Klux Klan, which Foner calls “the greatest example of homegrown terrorism.” Zimbardo: dehumanization and anonymity; Staub: shame, humiliation and the role of bystanders.
Successes of Reconstruction: over 2,000 Black officials elected, Hiram Revels is the first Black senator, public schools, Black voting.
1873–1877 The 1873 depression, divided Republicans and Northern racism weaken Reconstruction; the “Redeemers” (Southern Democrats) retake power. Bargain of 1877: Hayes becomes president after a disputed election and pulls the troops out of South Carolina and Louisiana.`;

} /* end if (LANG === "en") */
