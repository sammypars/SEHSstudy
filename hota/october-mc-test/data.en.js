/* =====================================================================
   HOTA · Unit 2 · English version of data.js
   Loaded after data.js. When the page is set to English, it replaces the
   French content with this translation. KEEP IT IN STEP WITH data.js:
   same Q(...) lines in the same order (question ids are their position),
   same CHRONO / PEOPLE / QUOTES / LEX / NOTES entries.
   ===================================================================== */
if (LANG === "en") {

TOPICS = {
  const: { n: "The Constitution and slavery", u: "Lesson 1" },
  res:   { n: "Resistance", u: "Lessons 1–2" },
  abo:   { n: "Abolitionism and feminism", u: "Lesson 2 · Foner" },
  src:   { n: "Primary sources", u: "Readings" },
  cause: { n: "Causes of the Civil War", u: "Lesson 3" },
  comp:  { n: "The compromises and Dred Scott", u: "Lesson 3" },
  elec:  { n: "Lincoln-Douglas, 1860 and secession", u: "Lesson 4" },
  war:   { n: "The battles and the end of the war", u: "Lesson 5" },
  ib:    { n: "IB history skills", u: "Method" },
  chrono:{ n: "Timeline", u: "Generated", gen: 1 },
  pers:  { n: "People", u: "Generated", gen: 1 },
  cit:   { n: "Who said it?", u: "Generated", gen: 1 },
  lex:   { n: "Vocabulary", u: "Generated", gen: 1 }
};

BANK.length = 0;

/* ---------------- Lesson 1: the Constitution and slavery ---------------- */
Q("const","Under the three-fifths compromise, how was an enslaved person counted in the census?",
 ["As three fifths of a person","As a whole person","Not counted at all","As two fifths of a person"],
 "The Constitution (Article I, Section 2) adds to the number of free persons \"three fifths of all other Persons.\" So five enslaved people counted as three free people.",
 [null,"That is what the South wanted, to get even more representatives. The compromise split the difference.","That is what the North wanted. The compromise was exactly a middle ground between the two positions.","The figure is three fifths, not two."]);
Q("const","The census count determined all of these things EXCEPT one. Which one?",
 ["The number of senators from each state","The number of representatives in the House of Representatives","The number of presidential electors","The amount of direct taxes paid to the federal government"],
 "Every state has two senators, whatever its population. The census determined (1) House representatives, (2) electors and (3) direct taxes.",
 [null,"That is the first effect of the census we saw in class.","The number of electors depends on the number of representatives, so on the census.","Direct taxes were divided by population, which is the downside of the compromise for the South."]);
Q("const","What was the main advantage of the three-fifths compromise for the Southern states?",
 ["Greater representation in the House of Representatives","Less direct tax to pay","The gradual abolition of slavery","Control of the Senate"],
 "Counting enslaved people (even at 3/5) raised the South's official population, and so its House seats and electors, even though those people could not vote.",
 [null,"It is the opposite: being counted also raised the South's direct taxes. That was the price of the compromise.","The compromise protected slavery; it set up no abolition.","The Senate doesn't depend on population: two senators per state."]);
Q("const","What \"price\" did the South pay for the three-fifths compromise?",
 ["It paid more direct tax than if enslaved people were not counted","It lost seats in the House","It had to stop the slave trade immediately","It could no longer elect a president"],
 "The class notes sum it up: \"The South pays more taxes… BUT the Southern states get greater representation in the House.\"",
 [null,"The South gained seats; it didn't lose them.","The slave trade was protected until 1808 by a different clause.","The South's electors went up thanks to the compromise."]);
Q("const","What does Article I, Section 9, Clause 1 of the Constitution say?",
 ["Congress cannot ban the importation of enslaved people before 1808","Fugitive slaves must be returned to their owners","Enslaved people count as three fifths","Slavery is banned north of 36°30'"],
 "This clause protects the slave trade (\"Migration or Importation of such Persons\") until 1808, with a maximum tax of 10 dollars per person.",
 [null,"That is Article IV, Section 2, Clause 3 (the fugitive slave clause).","That is Article I, Section 2, Clause 3.","That is the Missouri Compromise (1820), not the Constitution."]);
Q("const","What does Article IV, Section 2, Clause 3 of the Constitution say?",
 ["A person \"held to service\" who escapes to another state must be returned","Congress can tax the importation of slaves up to 10 dollars","Each state decides by vote whether to accept slavery","Enslaved people can buy their freedom"],
 "This is the fugitive slave clause: even in a free state, an escaped person \"shall be delivered up\" to their owner. So free states could not protect fugitives.",
 [null,"That is Article I, Section 9.","That is the idea of popular sovereignty (1850–1854), not the 1787 Constitution.","The Constitution says nothing like that."]);
Q("const","Does the word \"slavery\" appear in the 1787 Constitution?",
 ["No: it uses euphemisms like \"other Persons\" or \"Person held to Service or Labour\"","Yes, in the Preamble","Yes, in the Tenth Amendment","Yes, in the Bill of Rights"],
 "The framers avoided the word while protecting the institution, which was called \"the peculiar institution.\"",
 [null,"The Preamble talks about \"justice\" and \"liberty,\" never slavery.","The Tenth Amendment is about powers reserved to the states.","The Bill of Rights does not mention slavery."]);
Q("const","What paradox does the class point out about Thomas Jefferson?",
 ["He called slavery a \"hideous blot\" but held more than 100 people in slavery while writing the Declaration","He was an abolitionist and never owned slaves","He wrote the three-fifths compromise","He voted against the Declaration of Independence"],
 "Jefferson said slavery was \"morally depraved\" and a \"hideous blot\" on America, while he himself held more than 100 people in slavery.",
 [null,"Jefferson was a slaveholder. That is exactly the contradiction.","The compromise was negotiated at the 1787 Convention; Jefferson was in France at the time.","Jefferson is the main author of the Declaration."]);
Q("const","How many people did George Washington hold in slavery during his life, according to the class?",
 ["More than 600","None","About 10","More than 100,000"],
 "Washington held more than 600 people in slavery, even though he denounced slavery as \"repugnant.\"",
 [null,"Washington was a slaveholder, like most of the Founding Fathers.","The class figure is much higher.","That figure is impossible for a single plantation."]);
Q("const","According to the class, which of these Founding Fathers was NOT a slaveholder?",
 ["John Adams","Thomas Jefferson","George Washington","James Madison"],
 "The class notes say: \"Except for John Adams, most of the Founding Fathers were slaveholders.\"",
 [null,"Jefferson held more than 100 people in slavery.","Washington held more than 600.","Madison, from Virginia, was also a slaveholder."]);
Q("const","What happened to the passage of the Declaration of Independence that called the slave trade an \"execrable commerce\"?",
 ["It was cut","It became the First Amendment","It was added to the Constitution","It ended the slave trade in 1776"],
 "Jefferson wrote a passage against the slave trade, but it was removed from the final text, largely because of Southern delegates.",
 [null,"The First Amendment is about freedom of speech and religion.","The Constitution actually protected the slave trade until 1808.","The slave trade continued legally until 1808."]);
Q("const","Which description fits the Federalist party?",
 ["Strong central government, loose interpretation of the Constitution, industrial economy, Northeast","States' rights, strict interpretation, agriculture, South and West","Immediate abolition of slavery","A special alliance with France"],
 "The Federalists (Hamilton, Adams, Jay…) wanted to ratify the Constitution and a strong federal government. They favored Britain and industry, and were strong in the Northeast.",
 [null,"That is the profile of the Anti-Federalists.","Neither party supported immediate abolition.","The Anti-Federalists favored France; the Federalists favored Britain."]);
Q("const","Which description fits the Anti-Federalists?",
 ["Fear of a tyrannical central government, states' rights, strict interpretation","Quick ratification of the Constitution","The industrial economy of the Northeast","A special relationship with Britain"],
 "The Anti-Federalists (Jefferson, Monroe, Patrick Henry, George Mason…) opposed ratification, defended state power and were strong in the farming South and West.",
 [null,"They opposed ratification.","Their preferred economy was agriculture.","They favored France."]);
Q("const","Which of these men was an Anti-Federalist?",
 ["Patrick Henry","Alexander Hamilton","John Jay","Benjamin Franklin"],
 "Patrick Henry is on the class list of Anti-Federalists, along with Jefferson, Monroe, Richard Henry Lee, Melancton Smith, George Mason and George Clinton.",
 [null,"Hamilton was the leader of the Federalists.","John Jay (later a Supreme Court justice) was a Federalist.","Franklin is on the class list of Federalists."]);
Q("const","Which of these men was a Federalist?",
 ["Alexander Hamilton","Thomas Jefferson","James Monroe","George Mason"],
 "Hamilton supported a strong central government and an industrial economy.",
 [null,"Jefferson (3rd president) was an Anti-Federalist.","Monroe (5th president) was an Anti-Federalist.","George Mason was an Anti-Federalist."]);
Q("const","Why was the Anti-Federalists' defense of states' rights tied to slavery?",
 ["A weak federal government and strict interpretation kept Washington from acting against slavery in the Southern states","The Anti-Federalists wanted the federal government to abolish slavery","States' rights had nothing to do with the Southern economy","All the Federalists defended slavery"],
 "The farming South depended on forced labor. Limiting central power protected slavery from federal interference. This argument comes back later with the nullification crisis and secession.",
 [null,"It is the opposite: less federal power meant less risk to slavery.","The South's farm economy rested on slavery; that is the central link.","Federalists like Pinckney defended slavery, but not all of them; and the question is about the Anti-Federalists."]);
Q("const","How did English America define race, according to the class?",
 ["A binary system, white and non-white, where \"one drop\" of non-white ancestry was enough","A complex casta system with several categories","By place of birth (Europe or the Americas)","Race did not exist as a legal category"],
 "In English America you had to be \"100%\" white; \"one drop\" made someone non-white.",
 [null,"That is the Latin American system.","The peninsular/creole distinction belongs to the Latin American casta system.","Race was in fact a central legal category."]);
Q("const","In Latin America's casta system, who were the creoles?",
 ["White people born in the Americas","White people born in Europe","People of mixed white and non-white ancestry","Enslaved people"],
 "Peninsulares: white people born in Europe. Creoles: white people born in the Americas. Mestizos: people of mixed ancestry.",
 [null,"Those are the peninsulares.","Those are the mestizos.","Enslaved people were a separate category."]);
Q("const","What difference does the class draw between Latin America and English America?",
 ["Latin America offered more varied paths to freedom and social advancement","Latin America had no slavery","English America had more racial categories","There was no difference"],
 "The more complex casta system allowed more mobility than the English binary system.",
 [null,"Slavery also existed in Latin America.","Latin America is the one that had more categories.","The class is comparing two different systems."]);
Q("const","Which crops especially required the labor of enslaved people in the United States?",
 ["Tobacco, rice, indigo and cotton","Wheat, oats and barley","Potatoes and apples","Midwestern corn and soybeans"],
 "The South's plantation crops demanded huge amounts of labor. Cotton became the most important one in the 19th century.",
 [null,"These are grains grown mostly by small farmers in the North.","These are not plantation crops.","Soybeans were not an important crop at the time."]);
Q("const","Based on the class discussion, why was race \"invented\"?",
 ["To justify slavery and a hierarchy that exploited the labor of enslaved people","Because science had proved biological differences","To organize the census","To encourage equality"],
 "Race is a social construct: it was used to justify enslaving certain people for their labor.",
 [null,"Race has no solid biological basis; it is a social category.","The census used race, but that is not why it was invented.","It was used to justify inequality."]);
Q("const","What is the essential question of the lesson on the Constitution and slavery?",
 ["Did the Constitution establish a just government?","Who won the Civil War?","Why was Lincoln elected?","What is popular sovereignty?"],
 "The whole lesson (3/5, the slave trade, the fugitive clause, slaveholding Founding Fathers) is there to answer this question.",
 [null,"The war is studied later (lesson 5).","The 1860 election is lesson 4.","Popular sovereignty comes up with the Compromise of 1850 (lesson 3)."]);

/* ---------------- Sources: how the framers protected slavery ---------------- */
Q("src","At the 1787 Convention, what did Luther Martin propose (Madison's notes, August 21)?",
 ["Allowing the importation of slaves to be banned or taxed","Abolishing slavery immediately in every state","Counting slaves as whole persons","Letting each state import whatever it wants"],
 "Martin said the 3/5 compromise encouraged the slave trade, that slavery weakened one part of the Union, and that it went against the principles of the Revolution.",
 [null,"Martin was talking about the slave trade, not general abolition.","That was not his proposal.","That is Ellsworth's position."]);
Q("src","Who said at the Convention: \"Religion and humanity had nothing to do with this question. Interest alone is the governing principle with nations\"?",
 ["John Rutledge","Luther Martin","Benjamin Franklin","Oliver Ellsworth"],
 "Rutledge (South Carolina) said the real question was whether the Southern states would be part of the Union.",
 [null,"Martin wanted to limit the slave trade for moral reasons.","Franklin gave a speech about the Constitution's flaws, not this one.","Ellsworth said the morality of slavery belonged to the states."]);
Q("src","According to Rutledge, why should the Northern states not oppose an increase in the number of slaves?",
 ["They would become the carriers of the goods produced by slaves","They could buy slaves too","Slavery was going to disappear on its own","The Bible allowed it"],
 "Rutledge makes an economic self-interest argument: Northern shipping would profit from Southern products.",
 [null,"That is not his argument.","He doesn't predict the end of slavery.","He says religion has nothing to do with it."]);
Q("src","What was Oliver Ellsworth's position on the slave trade?",
 ["Let each state import what it pleases; the morality of slavery belongs to the states","Ban the slave trade immediately","Tax each imported slave at 100 dollars","Abolish slavery in the territories"],
 "\"Let every State import what it pleases.\" Ellsworth added that the old confederation had not interfered.",
 [null,"He wanted to leave the clause as it was.","The Constitution sets a maximum of 10 dollars.","He doesn't talk about the territories."]);
Q("src","What did Charles Pinckney declare at the Convention?",
 ["South Carolina would never accept the Constitution if it banned the slave trade","South Carolina wanted to abolish slavery","The slave trade went against the principles of the Revolution","Slaves should be counted as whole persons"],
 "It is a threat: without protection for the slave trade, South Carolina would not join the Union. This pressure explains the compromises of 1787.",
 [null,"That is the opposite of his position.","That is Luther Martin's argument.","That is not what this excerpt says."]);
Q("src","When Luther Martin says slavery \"weakened one part of the Union which the other parts were bound to protect,\" he means that…",
 ["the North would have to help put down possible slave revolts in the South","the South was weaker economically","slaves might vote","the South would lose seats"],
 "The risk of insurrection made the South vulnerable, and the rest of the Union would be obliged to defend it.",
 [null,"He is talking about security, not the economy.","Slaves did not vote.","The compromise actually gave the South more seats."]);
Q("src","In his speech of September 17, 1787, what does Benjamin Franklin say about the Constitution?",
 ["He accepts it \"with all its faults\" because he doesn't expect anything better","He rejects it because it protects slavery","He thinks it is perfect","He asks for a new convention"],
 "Franklin sacrifices his objections \"to the public good\" and asks the delegates to recommend it unanimously.",
 [null,"He accepts it, even though he doesn't approve of every part.","He says it is \"near to perfection,\" not perfect, and that an assembly of men cannot produce anything perfect.","He doubts another convention could do better."]);
Q("src","Why does Franklin say an assembly cannot produce a perfect constitution?",
 ["Because it also brings together men's prejudices, passions, errors and local interests","Because there were not enough delegates","Because Britain opposed it","Because the Convention was too short"],
 "This is his justification for compromise: men bring their wisdom, but also their flaws.",
 [null,"He doesn't talk about the number of delegates.","Britain is not mentioned.","He doesn't talk about how long it lasted."]);
Q("src","What is one limitation of James Madison's notes on the Convention as a historical source?",
 ["They are one delegate's summaries, not a word-for-word transcript","They were written 200 years after the Convention","Madison was not there","They only talk about the economy"],
 "Origin: a delegate who was there, which gives them great value. Limitation: his perspective and his choices in summarizing shape what he reports.",
 [null,"Madison took them during the Convention.","Madison was a delegate from Virginia.","They report moral and political debates about slavery."]);

/* ---------------- Resistance ---------------- */
Q("res","Which is an example of \"everyday\" resistance to slavery?",
 ["Deliberately working slowly or badly","Armed revolt","Arson","Running away"],
 "Everyday forms: working slowly, faking illness, breaking tools, taking food, keeping one's own language, culture and religion, learning to read.",
 [null,"Armed revolt is an \"extreme\" form.","Arson is in the \"extreme\" column in the class notes.","Running away is classed as an \"extreme\" form."]);
Q("res","Which is an example of \"extreme\" resistance according to the class?",
 ["Openly defying orders","Pretending to be sick","Keeping one's own religion","Taking food"],
 "Extreme forms: openly defying orders, arson, running away, armed revolt.",
 [null,"Faking illness is an everyday form.","Keeping one's culture and religion is an everyday form.","Taking food or goods is an everyday form."]);
Q("res","Keeping one's language, culture, customs and religion is classed as…",
 ["a form of everyday resistance","a form of extreme resistance","collaboration with slaveholders","a form of political abolitionism"],
 "Preserving one's identity was a way of refusing to be reduced to \"property.\"",
 [null,"The class puts it in the \"everyday\" column.","It is actually a refusal of domination.","Abolitionism is a political and moral movement, mostly in the North."]);
Q("res","What was the Underground Railroad?",
 ["A secret network of routes and safe houses that helped enslaved people escape to the North and Canada","A real underground train line","The transcontinental railroad","A federal law on fugitive slaves"],
 "It was not a train: the vocabulary (conductors, stations) was a code for a hidden escape network.",
 [null,"The name is a metaphor.","The transcontinental railroad was part of Lincoln's 1860 platform.","The Fugitive Slave Act did the opposite: it required fugitives to be returned."]);
Q("res","What kind of resistance did Harriet Tubman practice?",
 ["She escaped, then went back to the South many times to guide others to freedom","She led an armed revolt in Virginia in 1831","She attacked the arsenal at Harpers Ferry","She published The Liberator"],
 "Tubman is the most famous \"conductor\" on the Underground Railroad. Her effective method: organized escape, in secret, at night.",
 [null,"That is Nat Turner.","That is John Brown.","That is William Lloyd Garrison."]);
Q("res","Who was Nat Turner?",
 ["An enslaved man who led an armed revolt in Virginia in 1831","A white abolitionist who attacked Harpers Ferry","The judge in the Dred Scott decision","A newspaper editor in Boston"],
 "Turner, an enslaved preacher, led the deadliest revolt in US history, a few months after the first issue of The Liberator.",
 [null,"That is John Brown, in 1859.","That is Roger B. Taney.","That is Garrison."]);
Q("res","Who was John Brown?",
 ["A white abolitionist who attacked the federal arsenal at Harpers Ferry in 1859 to arm enslaved people","An enslaved man who led a revolt in 1831","The Constitutional Union candidate in 1860","A Confederate general"],
 "Brown wanted to start an insurrection. He was captured, tried and hanged. He became a martyr in the North and terrified the South.",
 [null,"That is Nat Turner.","That is John Bell.","Brown was an enemy of slavery."]);
Q("res","What is one SIMILARITY between Nat Turner's revolt and John Brown's raid?",
 ["Both were violent, both failed, and both increased Southern slaveholders' fear","Both were led by enslaved people","Both succeeded in freeing thousands of people","Both happened during the Civil War"],
 "Both ended with the execution of their leader and strengthened fear and repression in the South.",
 [null,"Brown was a free white man from the North.","Both failed militarily.","Turner: 1831; Brown: 1859. The war starts in 1861."]);
Q("res","What is one DIFFERENCE between Nat Turner's revolt and John Brown's raid?",
 ["Turner was enslaved and led enslaved people; Brown was a white abolitionist who attacked a federal arsenal","Turner succeeded, Brown failed","Turner was a pacifist","Brown acted in 1831 and Turner in 1859"],
 "The main difference is who acted and against what: a Virginia plantation area for Turner, federal property for Brown.",
 [null,"Both failed.","Turner led an armed revolt.","The dates are reversed: Turner 1831, Brown 1859."]);
Q("res","What was one consequence of Nat Turner's revolt?",
 ["Harsher laws in the South, for example against learning to read and against gatherings","The abolition of slavery in Virginia","The Missouri Compromise","Lincoln's election"],
 "The South responded with more repression and with fear that Northern abolitionists were encouraging revolts.",
 [null,"Virginia strengthened slavery.","The Missouri Compromise dates from 1820, before the revolt.","Lincoln was elected in 1860, almost 30 years later."]);
Q("res","Why did John Brown's raid (1859) have such a big political impact?",
 ["It made Brown a martyr in the North and convinced the South that the North wanted to destroy slavery, right before the 1860 election","It freed all the slaves in Virginia","It was approved by Congress","It ended the war"],
 "The raid deepened the North–South divide at the worst possible moment, a year before Lincoln's election.",
 [null,"The raid failed within days.","Congress did not approve it; Brown was hanged for treason.","The war had not started yet."]);
Q("res","Why weren't there more large slave revolts in the United States?",
 ["Surveillance, armed patrols and brutal reprisals made revolts extremely dangerous","Enslaved people accepted their condition","Slavery was mild in the United States","Abolitionists organized all the revolts"],
 "Slaveholders controlled the weapons, the roads and the law, and reprisals also hit families. So resistance often took everyday forms.",
 [null,"The many forms of everyday resistance show they did not accept it.","Slavery rested on violence.","Most abolitionists rejected violence (moral suasion)."]);
Q("res","What conclusion can be drawn from the small number of large revolts?",
 ["It was not acceptance: resistance mostly took everyday, hidden forms","Slavery was not violent","Enslaved people were not organized at all","Revolts had no impact"],
 "The small number of revolts reflects the strength of repression, not consent.",
 [null,"The crushing of revolts actually shows how violent the system was.","The Underground Railroad shows a high level of organization.","Turner and Brown had a huge impact on fear and politics."]);

/* ---------------- Foner ch. 12: abolitionism and feminism ---------------- */
Q("abo","Before the 1830s, who were almost the only people challenging the existence of slavery, according to Foner?",
 ["Quakers, enslaved people and free Black people","Southern planters","US presidents","New York merchants"],
 "Foner writes that for a long time, only Quakers, slaves and free Black people seemed willing to challenge slavery.",
 [null,"Planters defended slavery.","Several presidents were slaveholders or favored colonization.","Many merchants had business ties to the South."]);
Q("abo","What did the American Colonization Society (1816) propose?",
 ["The gradual abolition of slavery and the resettlement of Black Americans in Africa","Immediate abolition and equal rights","The expansion of slavery westward","Women's right to vote"],
 "\"Colonization\" meant deporting freed people to Africa, the Caribbean or Central America. The society founded Liberia.",
 [null,"That is the program of the militant abolitionists of the 1830s.","That was not its goal.","Women's suffrage comes up at Seneca Falls in 1848."]);
Q("abo","Liberia's capital, Monrovia, is named after…",
 ["James Monroe","James Madison","Henry Clay","John Marshall"],
 "Liberia, on the coast of West Africa, was founded by the American Colonization Society; its capital honors President Monroe.",
 [null,"The city is not named after Madison.","Clay supported colonization, but Monrovia comes from Monroe.","Marshall also supported colonization, but it isn't him."]);
Q("abo","Which of these men SUPPORTED colonization, according to Foner?",
 ["Henry Clay","William Lloyd Garrison","David Walker","Frederick Douglass"],
 "Henry Clay, John Marshall and Andrew Jackson supported the American Colonization Society.",
 [null,"Garrison wrote Thoughts on African Colonization against colonization.","Walker demanded that Black people claim their rights as Americans.","Douglass wanted equality in the United States."]);
Q("abo","According to Foner, what idea was colonization based on?",
 ["America was fundamentally a white society; Black people could never be equal there","Black people should have the same rights as white people","Africa needed workers","Slavery was going to spread everywhere"],
 "Foner compares colonization to the removal of Native Americans: both rested on the idea of a white America.",
 [null,"That is the opposite of colonization.","That is not Foner's argument.","Colonization aimed at a gradual end to slavery."]);
Q("abo","How did most African Americans react to the idea of colonization?",
 ["They firmly opposed it and insisted they were Americans","They all accepted it","They ignored it","They asked to go to Europe"],
 "In 1817, about 3,000 free Black people met in Philadelphia and declared they were entitled to the same liberty and rights as white people.",
 [null,"A few thousand went to Liberia, but most opposed it.","Colonization actually mobilized free Black people.","Europe is not mentioned."]);
Q("abo","How was the abolitionism of the 1830s different from the earlier movement?",
 ["It demanded immediate abolition and equality for freed Black people as members of the republic","It wanted gradual emancipation and colonization","It refused to talk about religion","It supported states' rights"],
 "The new generation saw slavery as a sin and a contradiction of the Declaration of Independence. It also wanted to fight racism.",
 [null,"That is the older approach it rejected.","Its conviction was in fact religious: slavery is a sin.","States' rights were mostly used to defend slavery."]);
Q("abo","Who wrote An Appeal to the Coloured Citizens of the World (1829)?",
 ["David Walker","Frederick Douglass","Theodore Weld","Henry Highland Garnet"],
 "Walker, a free Black man born in North Carolina who ran a clothing store in Boston, warned that the nation would face divine punishment.",
 [null,"Douglass published his Narrative in 1845.","Weld was a speaker trained in the revivals.","Garnet made his call for rebellion in 1843."]);
Q("abo","What newspaper did William Lloyd Garrison launch in 1831?",
 ["The Liberator","The Columbian Orator","The Dial","The Free Woman"],
 "The Liberator, a Boston weekly, gave the new abolitionism a \"permanent voice.\"",
 [null,"The Columbian Orator is the book Douglass read as a child.","The Dial was the transcendentalists' magazine (Margaret Fuller).","The Free Woman was a feminist newspaper in Paris (1832)."]);
Q("abo","\"I will be as harsh as truth… I will not equivocate… I will be heard.\" Who wrote this?",
 ["William Lloyd Garrison","Abraham Lincoln","Stephen Douglas","Catharine Beecher"],
 "This is Garrison's announcement in the first issue of The Liberator: no moderation on slavery.",
 [null,"Lincoln was much more cautious about slavery.","Douglas defended popular sovereignty.","Beecher opposed a public role for women abolitionists."]);
Q("abo","Which of Garrison's ideas did most abolitionists REJECT?",
 ["That the North should repudiate the Constitution and dissolve the Union","Immediate abolition","That Black people should be part of American society","That slavery was a sin"],
 "Garrison called the Constitution a \"covenant with the devil\" and burned it, but most abolitionists did not want to leave the Union.",
 [null,"His call for immediate abolition found a wide audience.","His pamphlet against colonization convinced many people.","That idea was shared by the movement."]);
Q("abo","What did Garrison call the Constitution?",
 ["A covenant with the devil","The most perfect document in the world","A guarantee of liberty for all","A temporary law"],
 "For Garrison, the Constitution protected slavery. Douglass, by contrast, came to think it offered no national protection to slavery.",
 [null,"He condemned it.","He thought the opposite.","He didn't describe it that way."]);
Q("abo","When was the American Anti-Slavery Society founded?",
 ["1833","1816","1848","1860"],
 "Between 1833 and the end of the decade, about 100,000 Northerners joined local abolitionist groups.",
 [null,"1816 is the founding of the American Colonization Society.","1848 is the Seneca Falls Convention.","1860 is Lincoln's election."]);
Q("abo","What technology helped abolitionists spread their message?",
 ["The steam press, which printed millions of pamphlets, petitions and newspapers","Radio","Wireless telegraph","Television"],
 "Abolitionists took advantage of steam printing and of the literacy produced by public schools.",
 [null,"Radio did not exist yet.","That is not mentioned and did not exist yet.","Anachronism."]);
Q("abo","Who was Theodore Weld?",
 ["A young minister, converted by Charles G. Finney, who trained speakers to carry the message \"slavery is a sin\"","The author of Uncle Tom's Cabin","The president of the American Colonization Society","A Southern senator"],
 "Weld used the methods of religious revivals: fervent preaching and a call to give up one's sins.",
 [null,"That is Harriet Beecher Stowe.","He was an abolitionist, not a colonizationist.","He came out of the Northern religious movement."]);
Q("abo","What is \"moral suasion\"?",
 ["Convincing slaveholders of their sin and the North of its complicity, without violence","Organizing armed revolts","Creating a political party to win elections","Buying slaves' freedom"],
 "This was the abolitionists' main strategy. Many were pacifists (\"non-resistants\").",
 [null,"Most abolitionists rejected violence.","They relied first on public opinion, not parties.","That was not their strategy."]);
Q("abo","Who were the \"non-resistants\"?",
 ["Pacifist abolitionists who wanted to remove coercion from all human relationships","Slaveholders who refused to resist the North","Confederate soldiers","Enslaved people who did not resist"],
 "Their pacifism explains the strategy of moral suasion.",
 [null,"The term refers to abolitionists.","It is not a military term.","The term doesn't refer to enslaved people."]);
Q("abo","Why did many Southerners believe abolitionists wanted to start an insurrection?",
 ["Nat Turner's revolt broke out a few months after The Liberator was launched","Garrison had organized Nat Turner's revolt","The abolitionists had an army","Lincoln had announced it"],
 "Foner points out that Turner didn't even know who Garrison was, but the coincidence strengthened the South's fear.",
 [null,"Turner had no connection to Garrison.","They were mostly pacifists.","Lincoln was not yet a national figure."]);
Q("abo","What is the \"birthright citizenship\" that abolitionists defended?",
 ["Everyone born in the United States is a citizen, with full equality, whatever their race","Only children of white citizens are citizens","Citizenship depends on owning property","Each state decides citizenship"],
 "This idea would be written into the Constitution after the Civil War. The conventions of \"colored citizens\" defended it.",
 [null,"That is what abolitionists fought against (and what Dred Scott would affirm).","That is not the idea.","Abolitionists wanted a national citizenship protected by the federal government."]);
Q("abo","What victories did free Black people and their allies win in the North before the war?",
 ["The repeal of Ohio's Black Laws (1849) and the integration of Boston's schools (1855)","The right to vote in every Northern state","The end of slavery in the South","The repeal of the Fugitive Slave Act"],
 "Their efforts often failed, but these victories helped create a new language of citizens' rights.",
 [null,"Most Northern states still denied them the vote.","Slavery in the South only ends with the war.","In fact, the Compromise of 1850 strengthened that law."]);
Q("abo","Which national symbol got its name from the abolitionists?",
 ["The Liberty Bell","The American flag","The Statue of Liberty","The American eagle"],
 "The bell was simply called the Old State House Bell. Abolitionists adopted it to link their cause to the founders' ideals.",
 [null,"The flag already existed under that name.","The Statue of Liberty arrives in 1886.","That is not mentioned."]);
Q("abo","Who wrote An Appeal in Favor of That Class of Americans Called Africans (1833)?",
 ["Lydia Maria Child","Angelina Grimké","Catharine Beecher","Harriet Tubman"],
 "The title sums up the abolitionist position: slaves and free Black people are members of the national community.",
 [null,"Angelina Grimké wrote a letter in The Liberator in 1837.","Beecher opposed public action by women abolitionists.","Tubman is known for the Underground Railroad."]);
Q("abo","What is Uncle Tom's Cabin?",
 ["Harriet Beecher Stowe's novel (1852), the most widely read antislavery work of the time","Frederick Douglass's autobiography","A pamphlet by David Walker","A Supreme Court decision"],
 "Published as a book in 1852, it sold more than a million copies by 1854. It draws partly on Josiah Henson's autobiography.",
 [null,"Douglass wrote Narrative of the Life of Frederick Douglass (1845).","Walker wrote the Appeal (1829).","It is a novel."]);
Q("abo","What did Henry Highland Garnet proclaim in 1843?",
 ["That enslaved people should rise up to break their chains","That colonization was the answer","That the Constitution was perfect","That women should vote"],
 "His position clashed so much with moral suasion that the published record of the convention left out his speech.",
 [null,"Garnet was a Black abolitionist, opposed to colonization.","That was not his message.","That was not the topic of his speech."]);
Q("abo","What dates did free Black communities in the North celebrate instead of July 4?",
 ["January 1 (end of the slave trade, 1808) and August 1 (emancipation in the British West Indies)","December 25 and May 1","June 19 and April 14","September 17 and July 22"],
 "These \"freedom celebrations\" rejected the United States' claim to be a land of liberty.",
 [null,"Those are not the dates of this alternative calendar.","June 19 (Juneteenth) is from 1865, after the war.","Those are dates from 1787 and 1862."]);
Q("abo","Who was Elijah P. Lovejoy?",
 ["An antislavery editor killed by a mob in 1837 in Alton, Illinois, while defending his press","A Supreme Court justice","The first president of the American Anti-Slavery Society","A Union general"],
 "He became the movement's \"first martyr.\" Attacks on freedom of the press rallied many Northerners.",
 [null,"It isn't him.","That is not mentioned.","He died in 1837, long before the war."]);
Q("abo","What was the \"gag rule\" adopted by the House in 1836?",
 ["A rule that blocked consideration of petitions against slavery","A law that banned abolitionist newspapers","A rule that banned women from speaking in public","A law that returned fugitive slaves"],
 "It was repealed in 1844, mostly thanks to the opposition of former president John Quincy Adams.",
 [null,"It was mobs and the postal service (Amos Kendall) that burned abolitionist literature.","That is not the gag rule.","That is the Fugitive Slave Act."]);
Q("abo","Who won the repeal of the gag rule in 1844?",
 ["John Quincy Adams","Andrew Jackson","John C. Calhoun","Henry Clay"],
 "The former president, a representative from Massachusetts starting in 1831, opposed it relentlessly.",
 [null,"Jackson was president when abolitionist literature was being burned.","Calhoun defended slavery.","It isn't him."]);
Q("abo","What effect did the mob attacks and the gag rule have on Northern opinion?",
 ["Many concluded that slavery also threatened white Americans' liberties, like free speech","The abolitionist movement disappeared","The North adopted slavery","The South accepted abolition"],
 "William Jay: \"we are now fighting for freedom of speech, of the press and of conscience.\" The movement widened its support.",
 [null,"The movement grew instead of disappearing.","It is the opposite.","The South became more defensive."]);
Q("abo","Who led the anti-abolitionist mobs in Northern cities?",
 ["\"Gentlemen of property and standing,\" often merchants tied to the Southern trade","Enslaved people","Women abolitionists","Union soldiers"],
 "These men feared the movement would disrupt the Union, the profits of forced labor and white supremacy.",
 [null,"That is not the case.","Women were the base of the abolitionist movement.","There was no war yet."]);
Q("abo","What happened at Pennsylvania Hall in 1838?",
 ["A Philadelphia mob burned down this abolitionist meeting hall","Abolitionists founded the Liberty Party there","The Constitution was signed there","Lincoln gave a speech there"],
 "Before setting the fire, the mob \"patriotically\" carried a portrait of George Washington to safety.",
 [null,"The Liberty Party was founded in 1840.","The Constitution was signed at Independence Hall in 1787.","It has nothing to do with Lincoln."]);
Q("abo","Who were the Grimké sisters?",
 ["Daughters of a South Carolina slaveholder who became Quakers and abolitionists","Two fugitive slaves from Maryland","The founders of the American Colonization Society","The wives of two presidents"],
 "Angelina and Sarah Grimké lectured against slavery. Massachusetts ministers denounced them because women were speaking in public.",
 [null,"They came from a wealthy slaveholding family.","They were abolitionists.","That is not the case."]);
Q("abo","What book did Sarah Grimké publish in 1838?",
 ["Letters on the Equality of the Sexes, which called for \"equal pay for equal work\" among other things","Uncle Tom's Cabin","Woman in the Nineteenth Century","Sociology for the South"],
 "She asked why a tailor earned \"two or three times as much\" as a woman for the same work.",
 [null,"That is Harriet Beecher Stowe.","That is Margaret Fuller (1845).","That is George Fitzhugh, a defender of slavery."]);
Q("abo","In her 1837 letter (The Liberator), what argument does Angelina Grimké make?",
 ["Rights come from the moral nature of human beings, so sex gives men no extra rights","Women should stay in the domestic sphere","Heaven made man superior and woman subordinate","Women should not sign petitions"],
 "\"Whatever it is morally right for man to do, it is morally right for woman to do.\" The fight against slavery led her to women's rights.",
 [null,"That is Catharine Beecher's position.","That is Beecher, not Grimké.","It is Beecher who says petitions are outside the \"female sphere.\""]);
Q("abo","According to Catharine Beecher (1837), how should women use their power?",
 ["Through peaceful influence and love, in the domestic and social circle","By voting","By giving abolitionist lectures","By signing petitions to Congress"],
 "For Beecher, \"heaven\" had made man the superior. Petitions and party conflict were outside the female sphere.",
 [null,"She did not call for the vote.","She was specifically criticizing the Grimkés' tours.","She says petitions are \"entirely outside\" women's duty."]);
Q("abo","Who organized the Seneca Falls Convention (1848)?",
 ["Elizabeth Cady Stanton and Lucretia Mott","Harriet Tubman and Sojourner Truth","Angelina and Sarah Grimké","Margaret Fuller and Dorothea Dix"],
 "They had been excluded from the World Anti-Slavery Convention in London in 1840 because they were women.",
 [null,"They were not the organizers.","The Grimkés had withdrawn from public debate before 1848.","Fuller was in Europe; Dix was reforming asylums."]);
Q("abo","What document is the Seneca Falls Declaration of Sentiments modeled on?",
 ["The Declaration of Independence","The Constitution","The Compromise of 1850","The Liberator"],
 "It takes \"all men are created equal\" and adds women: \"all men and women are created equal.\"",
 [null,"The model is the 1776 Declaration.","It is not a model for a declaration of rights.","That is a newspaper, not a model text."]);
Q("abo","What is the FIRST grievance in the Declaration of Sentiments?",
 ["Denying women the right to vote","The ban on wearing pants","The ban on traveling alone","Denying primary education"],
 "\"He has never permitted her to exercise her inalienable right to the elective franchise.\" Seneca Falls marks the start of a 70-year struggle for suffrage.",
 [null,"The \"bloomer\" costume came later and is not in the Declaration.","That is not a grievance in the text.","The text mainly talks about access to colleges (higher education)."]);
Q("abo","\"And aren't I a woman?\" Who said this in 1851?",
 ["Sojourner Truth","Elizabeth Cady Stanton","Harriet Beecher Stowe","Lucretia Mott"],
 "Born into slavery in New York around 1799 and free in 1827, Truth asked the movement to also think about poor and working women.",
 [null,"Stanton wrote the Declaration of Sentiments.","Stowe wrote Uncle Tom's Cabin.","Mott co-organized Seneca Falls."]);
Q("abo","What is Dorothea Dix known for?",
 ["More humane treatment of the mentally ill; 28 states built mental hospitals","The first feminist newspaper","Universal public schooling","The Underground Railroad"],
 "Before her, mentally ill people were often locked in jails with debtors and criminals.",
 [null,"It isn't her.","That is Horace Mann.","That is Harriet Tubman."]);
Q("abo","What was the immediate cause of the split in the abolitionist movement in 1840?",
 ["A disagreement over women's role, after Abby Kelley was elected to an American Anti-Slavery Society committee","A disagreement over colonization","Garrison's death","Lincoln's election"],
 "The dissidents founded the American and Foreign Anti-Slavery Society, then the Liberty Party.",
 [null,"That is not the cause in 1840.","Garrison died much later.","Lincoln was elected 20 years later."]);
Q("abo","What was the Liberty Party?",
 ["An abolitionist party that ran James G. Birney for president in 1840 (about 7,000 votes)","Lincoln's party in 1860","Jefferson's party","The women's party at Seneca Falls"],
 "It wanted to make abolitionism a political movement, unlike Garrison, who refused to vote.",
 [null,"Lincoln was a Republican.","Jefferson was an Anti-Federalist.","It is not a women's party."]);
Q("abo","According to Foner, what was the abolitionists' greatest achievement before 1840?",
 ["Breaking the \"conspiracy of silence\" that blocked public debate about slavery","Abolishing slavery in the South","Electing an abolitionist president","Winning women the vote"],
 "By 1840, more than 1,000 local antislavery societies existed in the North.",
 [null,"Slavery was only abolished after the war.","Birney got only about 7,000 votes.","Women's suffrage comes in the 20th century."]);
Q("abo","What did the feminist movement of the time borrow from abolitionism?",
 ["The idea of universal liberty and equality, and the analogy of \"the slavery of sex\"","The idea that women are naturally inferior","The strategy of armed revolt","Colonization in Africa"],
 "The Grimkés were the first to apply the abolitionist doctrine of universal liberty to women.",
 [null,"That is the idea feminists were fighting.","That is not the case.","That is not the case."]);
Q("abo","Horace Mann is known for…",
 ["education reform: tax-funded public schools","defending slavery","the Seneca Falls Convention","founding Liberia"],
 "By 1860, every Northern state had a public school system. The South, where Black literacy was seen as a danger, lagged far behind.",
 [null,"It isn't him.","It isn't him.","It isn't him."]);

/* ---------------- Douglass and Fitzhugh ---------------- */
Q("src","In what year did Frederick Douglass publish his Narrative?",
 ["1845","1838","1852","1863"],
 "The first of his three autobiographies came out in 1845, seven years after his escape.",
 [null,"1838 is the year he escaped to the North.","1852 is the year of his Fourth of July speech.","1863 is when the Emancipation Proclamation took effect."]);
Q("src","What book did Douglass read around age 12?",
 ["The Columbian Orator","Uncle Tom's Cabin","The Liberator","Sociology for the South"],
 "In it he found a dialogue between a master and a slave, and a speech by Sheridan on Catholic emancipation.",
 [null,"That novel is from 1852.","That is a newspaper launched in 1831.","That is a proslavery book from 1854."]);
Q("src","What lesson does Douglass take from the dialogue between the master and the slave?",
 ["The power of truth over the conscience, even a slaveholder's","That escape is impossible","That masters are always cruel","That education is useless"],
 "In the dialogue, the slave's arguments convince the master to free him voluntarily.",
 [null,"That is not the lesson of the dialogue.","The dialogue ends with a voluntary emancipation.","It is the opposite: reading gives him words to think with."]);
Q("src","Why did Douglass sometimes feel that being able to read was \"a curse rather than a blessing\"?",
 ["Reading showed him his miserable condition without giving him the remedy","He didn't understand the books","His master punished him every day","He preferred working in the fields"],
 "\"It had given me a view of my wretched condition, without the remedy. It opened my eyes to the horrible pit, but to no ladder upon which to get out.\"",
 [null,"He understood very well; that's the problem.","That is not the reason he gives.","That is not what he says."]);
Q("src","How did Douglass react when two Irishmen advised him to run away to the North?",
 ["He pretended not to be interested, because he feared a trap","He ran away that same night","He reported them to his master","He asked them for money"],
 "Some white people encouraged escape and then captured fugitives for the reward. But he remembered their advice and decided to escape.",
 [null,"He was too young and wanted to learn to write first.","He did not report them.","That is not in the text."]);
Q("src","Why did Douglass want to learn to write before escaping?",
 ["So he could write his own pass","To write to the president","To become a lawyer","To write a novel"],
 "A forged pass could let him travel without being stopped.",
 [null,"That is not the reason.","That is not in the text.","That is not the reason."]);
Q("src","How did Douglass escape in 1838?",
 ["By borrowing the free papers of a Black sailor","Through armed revolt","By buying his freedom","Thanks to the Emancipation Proclamation"],
 "That is what the introduction to the excerpt in Voices of Freedom says.",
 [null,"He did not revolt with weapons.","He did not buy it.","The Proclamation dates from 1863."]);
Q("src","Who is Douglass's Narrative mainly written for, and what effect does that have?",
 ["White Northern readers; it shows his intelligence and humanity to refute proslavery arguments","Southern slaveholders, to threaten them","Enslaved people, who could not read","The British government"],
 "The Northern audience explains its tone: eloquent, moral, and focused on the link between education and freedom.",
 [null,"The book was published in Boston for a Northern audience.","Most enslaved people were not allowed to learn to read.","That is not the main audience."]);
Q("src","Why does Douglass link education and freedom so strongly?",
 ["Learning to read gave him the words to think about his condition and refute the arguments for slavery","Because school was mandatory","Because he wanted to become a teacher","Because all slaves were allowed to read"],
 "His master had predicted that reading would make him discontented. That discontent is what led him to want freedom.",
 [null,"Enslaved people were not allowed to go to school.","That is not the reason.","On the contrary, it was banned or discouraged."]);
Q("src","What did George Fitzhugh argue in Sociology for the South (1854)?",
 ["He rejected Jeffersonian ideals of liberty and equality; slavery was better than \"free society\"","He called for immediate abolition","He defended women's rights","He supported colonization in Liberia"],
 "Fitzhugh pushed the proslavery argument to the extreme: masters and slaves supposedly shared a \"community of interests\" unknown in free society.",
 [null,"He was a defender of slavery.","That is not his topic.","That is not his argument."]);
Q("src","According to the introduction in Voices of Freedom, which was NOT a pillar of proslavery ideology?",
 ["Gradual abolition","Racism","Bible passages","The idea that slavery guaranteed equality among white people"],
 "Racism, the Bible (\"servants, obey your masters\") and equality among white people were the main justifications.",
 [null,"Racism is described as a pillar.","Slaveholders quoted the Bible.","Some defenders said slavery guaranteed white equality."]);

/* ---------------- Lesson 3: causes of the Civil War ---------------- */
Q("cause","Which of these is NOT one of the six factors behind the origins of the Civil War covered in class?",
 ["The War of 1812","States' rights and dual federalism","The nullification crisis","Sectionalism"],
 "The six factors: political divisions, states' rights and dual federalism, the nullification crisis, sectionalism, modernization and industrialization, North/South economic differences. All tied to slavery.",
 [null,"That is one of the six factors.","That is one of the six factors.","That is one of the six factors."]);
Q("cause","What does the class link ALL the factors of the Civil War to?",
 ["Slavery","Religion","Immigration","Foreign policy"],
 "\"All of it was tied to slavery!!!!\" Even tariffs and states' rights come back to defending slavery.",
 [null,"That is not the common thread of the class.","That is not the common thread of the class.","That is not the common thread of the class."]);
Q("cause","Which amendment is the basis for the \"States' Rights\" argument?",
 ["The 10th Amendment: powers not delegated to the United States are reserved to the states or the people","The 1st Amendment","The 2nd Amendment","The 13th Amendment"],
 "\"The powers not delegated to the United States by the Constitution, nor prohibited by it to the States, are reserved to the States respectively, or to the people.\"",
 [null,"The 1st Amendment protects freedom of speech and religion.","The 2nd Amendment is about weapons.","The 13th Amendment (1865) abolishes slavery."]);
Q("cause","The nullification crisis (1832–1833) pitted…",
 ["South Carolina against the federal government, over tariffs and states' rights","the North against the South over Kansas","Lincoln against Douglas","Federalists against Anti-Federalists over ratification"],
 "It was a constitutional crisis: could a state refuse to apply a federal law?",
 [null,"Kansas is 1854 and \"Bleeding Kansas.\"","The Lincoln-Douglas debates are in 1858.","Ratification is 1787–1788."]);
Q("cause","Who did the Tariff of 1828 favor?",
 ["Manufacturing in New England and the North","Southern cotton planters","Western farmers","Britain"],
 "By taxing British imports, the tariff protected domestic industries from foreign competition.",
 [null,"The South felt the tariff hurt it.","That is not the class's perspective.","The tariff was specifically taxing British goods."]);
Q("cause","What was the South's view of the Tariff of 1828?",
 ["It hurt the farming South by raising the price of imported goods, to the benefit of Northern industry","It protected Southern cotton","It helped the South sell to the British","It had no effect on the South"],
 "The South imported a lot of manufactured goods and exported its cotton: the tariff cost it a lot.",
 [null,"It protected industry, not cotton.","The South feared British retaliation against cotton.","The South felt directly targeted."]);
Q("cause","What is John C. Calhoun's doctrine of nullification?",
 ["A state can declare void the federal laws it considers unconstitutional","The president can cancel laws passed by Congress","The Supreme Court cannot rule on states","Territories decide slavery for themselves"],
 "Calhoun, the vice president, supplied the theory: South Carolina declared the tariff void in 1832 and threatened to secede.",
 [null,"That is not nullification.","That is not the doctrine.","That is popular sovereignty."]);
Q("cause","How did the nullification crisis end?",
 ["Jackson mobilized the army against secession, and a compromise tariff gradually lowered the duties","South Carolina seceded in 1832","The Supreme Court sided with Calhoun","The tariff was raised"],
 "Military escalation + a tariff compromise. But Calhoun's legacy remained.",
 [null,"South Carolina secedes in 1860, not 1832.","That is not how the crisis ended.","It was gradually lowered."]);
Q("cause","What was the long-term impact of the nullification crisis?",
 ["Calhoun's arguments provided the theoretical justification for secession in 1860–1861","It ended the debate over states' rights","It abolished slavery in South Carolina","It created the Republican Party"],
 "The class notes: \"Calhoun's arguments provided the theoretical justification for secession that was later invoked during the Civil War.\"",
 [null,"The debate continued until the war.","That is not the case.","The Republican Party was born in 1854."]);
Q("cause","What is sectionalism?",
 ["Putting the interests of one's own region ahead of the nation's; the opposite of nationalism","Dividing a state into counties","The union of all the states","A law about Western territories"],
 "North, South and West had different interests (industry, slavery, expansion).",
 [null,"That is not the historical meaning of the word.","That is closer to nationalism.","It is not a law."]);
Q("cause","Which description fits the North in the sectionalism chart?",
 ["Industry, factories, urbanization, opposition to slavery","Dependence on agriculture, slaveholders as political leaders","\"Rugged individualism\" and new regions","An economy based on cotton"],
 "The North was industrializing and urbanizing; it also feared losing workers to westward expansion.",
 [null,"That is the South.","That is the West.","That is the South."]);
Q("cause","Which description fits the South in the sectionalism chart?",
 ["Dependence on agriculture, slaveholders as political leaders, slavery as a cultural value","Factories and urbanization","Individualism and free land","Opposition to slavery"],
 "For the South, the economy and slavery were also cultural values to defend.",
 [null,"That is the North.","That is closer to the West.","That is the North."]);
Q("cause","What big question did the West raise?",
 ["Would the new regions be free or slave?","Should factories be built?","Should they stay in the British Union?","Should tariffs be abolished?"],
 "Westward expansion kept reigniting the conflict: the Missouri Compromise, the Compromise of 1850, Kansas-Nebraska.",
 [null,"That is not the central question.","Anachronism.","That is not the question tied to the West."]);
Q("cause","What are the themes (concepts) of IB history?",
 ["Change and continuity, causation and consequence, significance, perspective","Geography, economics, politics, religion","Dates, places, people, battles","Thesis, antithesis, synthesis, conclusion"],
 "The lesson 3 objectives ask you to explain how the causes of the war illustrate these themes.",
 [null,"Those are not the IB concepts.","Those are not the IB concepts.","That is an essay structure."]);
Q("cause","Which example best illustrates the IB theme of \"causation and consequence\"?",
 ["The Kansas-Nebraska Act led to the violence of \"Bleeding Kansas\"","Lincoln and Douglas saw popular sovereignty differently","Slavery continued despite the Revolution","Liberia still exists"],
 "A law (cause) produces a direct effect (consequence). The other examples illustrate perspective, continuity, or nothing clear.",
 [null,"That is an example of perspective.","That is an example of continuity.","It is not connected to the class."]);

/* ---------------- The compromises and Dred Scott ---------------- */
Q("comp","What problem triggered the Missouri Compromise (1819–1820)?",
 ["Missouri wanted to become a slave state when there were 11 free states and 11 slave states","California wanted to enter as a free state","Kansas was at war","South Carolina rejected the tariff"],
 "The North was worried about the imbalance in the Senate if a 12th slave state came in.",
 [null,"That is the Compromise of 1850.","That is 1854–1856.","That is the nullification crisis."]);
Q("comp","What did the Missouri Compromise provide?",
 ["Missouri enters as a slave state, Maine as a free state, and no slavery north of 36°30' in the Louisiana Purchase","California enters as a free state","Popular sovereignty in all territories","A stronger fugitive slave law"],
 "The compromise keeps the 12/12 balance and draws the 36°30' line.",
 [null,"That is 1850.","That is the Kansas-Nebraska Act (1854).","That is the Compromise of 1850."]);
Q("comp","What did the 36°30' line mean?",
 ["No slavery in the Louisiana Purchase territory north of that latitude (except Missouri)","The border with Mexico","The edge of the Confederacy","The front line at Gettysburg"],
 "It is the Missouri Compromise line. In practice it is cancelled by the Kansas-Nebraska Act.",
 [null,"It is not the Mexican border.","The Confederacy dates from 1861.","It is not military."]);
Q("comp","Why did California ask to join the Union in 1849–1850?",
 ["It had a huge population because of the 1849 Gold Rush","It had won a war against Mexico","It wanted to become a slave state","Missouri demanded it"],
 "The Gold Rush made its population explode; it asked to enter as a free state, which broke the balance.",
 [null,"It was the United States that won the war.","It wanted to enter as a free state.","That is not the case."]);
Q("comp","What treaty ended the Mexican-American War (1846–1848)?",
 ["The Treaty of Guadalupe Hidalgo","The Treaty of Paris","The Compromise of 1850","The Kansas-Nebraska Act"],
 "Mexico gave up today's Arizona, New Mexico, Utah, Nevada, Colorado and Wyoming for 15 million dollars (the Mexican Cession).",
 [null,"The Treaty of Paris (1783) ends the American Revolution.","It is not a treaty.","That is an 1854 law."]);
Q("comp","Which of these was part of the Compromise of 1850?",
 ["A stronger fugitive slave law","Cancelling the Missouri Compromise","A total ban on slavery in the West","South Carolina's secession"],
 "Compromise of 1850: California a free state; popular sovereignty for the rest of the Mexican Cession; a stronger fugitive slave law.",
 [null,"That is the Kansas-Nebraska Act (1854).","The rest of the territory decides by popular sovereignty.","That is December 1860."]);
Q("comp","What is \"popular sovereignty\"?",
 ["The residents of a territory decide by vote whether it will be free or slave","Congress decides for each territory","The Supreme Court decides","The president decides"],
 "It is Stephen Douglas's central idea, applied in 1850 and then in 1854.",
 [null,"That is exactly what popular sovereignty avoids.","Dred Scott (1857) actually limits the territories' power.","That is not the case."]);
Q("comp","What did the Kansas-Nebraska Act (1854) do?",
 ["It essentially cancelled the Missouri Compromise: all Western territories decide by popular sovereignty","It brought Kansas in as a free state","It banned slavery in Nebraska","It ended the slave trade"],
 "Kansas and Nebraska were north of 36°30', so closed to slavery before 1854.",
 [null,"Kansas doesn't join the Union until 1861.","It left the choice to the residents.","The slave trade had been banned since 1808."]);
Q("comp","What is \"Bleeding Kansas\"?",
 ["The violence and election fraud in Kansas after a flood of pro- and antislavery settlers arrived","A Civil War battle","An epidemic in 1854","The name of an abolitionist newspaper"],
 "It is the direct consequence of the Kansas-Nebraska Act: each side wanted to win the vote on slavery.",
 [null,"It happens before the war (1854–1856).","It is not an epidemic.","It is not a newspaper."]);
Q("comp","Why did Dred Scott claim he was free?",
 ["He had lived in a free state (Illinois) and a free territory (Fort Snelling) before being brought back to Missouri","He had bought his freedom","He was born free","Lincoln had freed him"],
 "It was common for slaves taken into free territory to sue their master and win their freedom.",
 [null,"Mrs. Emerson refused to let him buy his freedom in 1846.","He was born into slavery in Virginia around 1799.","Lincoln was not president in 1857."]);
Q("comp","Why was Fort Snelling (in today's Minnesota) free territory?",
 ["The 1820 Missouri Compromise banned slavery there","The Compromise of 1850 had decided it","The residents had voted","The Emancipation Proclamation"],
 "Fort Snelling was north of 36°30' in the former Louisiana territory.",
 [null,"The Compromise of 1850 covers the Mexican Cession.","That is not the case.","The Proclamation dates from 1863."]);
Q("comp","Who did Dred Scott sue?",
 ["Irene Emerson, Dr. Emerson's widow, for \"false imprisonment\" and assault","President Buchanan","Judge Taney","Abraham Lincoln"],
 "Dr. John Emerson, an army surgeon, died in 1843 and left his property, including the Scotts, to his widow.",
 [null,"That is not the case.","Taney wrote the decision; he wasn't the opposing party.","That is not the case."]);
Q("comp","What triggered Dred Scott's lawsuit in 1846?",
 ["Mrs. Emerson refused to let him work to buy his freedom","He had been sold to Louisiana","He had tried to escape","He wanted to vote"],
 "He wanted to earn and save money to buy his freedom. After the refusal, he sued.",
 [null,"That is not part of the story.","That is not part of the story.","That is not the case."]);
Q("comp","Who wrote the Supreme Court decision in the Dred Scott case (1857)?",
 ["Chief Justice Roger B. Taney","John Marshall","Stephen Douglas","John C. Calhoun"],
 "Taney appears on the slide next to Scott.",
 [null,"Marshall died in 1835.","Douglas was a senator.","Calhoun died in 1850."]);
Q("comp","According to the Dred Scott decision, could a Black person descended from slaves be a citizen of the United States?",
 ["No, so they could not sue in federal court","Yes, if born in a free state","Yes, if they had lived in free territory","Only if Congress decided so"],
 "Lincoln sums it up in his speech: no descendant of a slave imported from Africa can be a citizen in the sense of the Constitution.",
 [null,"The decision denies citizenship in every case.","That is Scott's argument, rejected by the Court.","The Court says it is a constitutional question."]);
Q("comp","What did the Dred Scott decision say about slavery in the territories?",
 ["Neither Congress nor a territorial legislature can exclude it, so the Missouri Compromise was unconstitutional","Congress can ban it everywhere","Residents can always vote to ban it","Slavery is banned in all territories"],
 "Slaves were seen as property protected by the Constitution. This also threatened popular sovereignty.",
 [null,"It is the opposite.","That is Douglas's Freeport Doctrine, which tries to get around the decision.","It is the opposite."]);
Q("comp","Why did the Dred Scott decision deepen the country's division?",
 ["It opened all territories to slavery and made compromise impossible, which outraged the North","It abolished slavery","It gave citizenship to everyone","Everyone accepted it"],
 "For Lincoln, it was part of a \"machinery\" that could make slavery legal everywhere.",
 [null,"It did the opposite.","It denied citizenship to Black people.","The North rejected it fiercely."]);
Q("comp","Put in order: the Missouri Compromise, the Kansas-Nebraska Act, the Compromise of 1850, the Dred Scott decision.",
 ["Missouri (1820) → 1850 → Kansas-Nebraska (1854) → Dred Scott (1857)","1850 → Missouri → Dred Scott → Kansas-Nebraska","Kansas-Nebraska → Missouri → 1850 → Dred Scott","Missouri → Kansas-Nebraska → 1850 → Dred Scott"],
 "Each step destroyed a bit more of the previous solution: the 36°30' line, then popular sovereignty, then the Court's decision.",
 [null,"The Missouri Compromise is the oldest (1820).","Kansas-Nebraska (1854) comes after 1850.","1850 comes before 1854."]);

/* ---------------- Lesson 4: Lincoln-Douglas, 1860, secession ---------------- */
Q("elec","What office were Lincoln and Douglas competing for in their 1858 debates?",
 ["A US Senate seat from Illinois","The presidency","Governor of Illinois","Supreme Court justice"],
 "There were seven outdoor debates that drew the attention of the whole country.",
 [null,"The presidential race is 1860.","It was the US Senate.","That is not the case."]);
Q("elec","What was the result of the 1858 Lincoln-Douglas debates?",
 ["Lincoln lost the election, but the debates made him famous and damaged Douglas's career","Lincoln won the Senate seat","Douglas quit politics","Both were elected"],
 "That national visibility helped Lincoln win the presidency in 1860.",
 [null,"Douglas kept his seat.","Douglas was a candidate in 1860.","There was only one seat."]);
Q("elec","What does Lincoln mean by \"A house divided against itself cannot stand\" (1858)?",
 ["The country cannot permanently stay half slave and half free; it will become all one thing or all the other","The Union is about to dissolve","Each state must decide alone","The North and South should be separated"],
 "Lincoln says he does not expect the Union to be dissolved, but that it will stop being divided.",
 [null,"He explicitly says he does not expect dissolution.","That is closer to Douglas's idea.","It is the opposite."]);
Q("elec","According to Lincoln, what is the \"machinery\" threatening to spread slavery?",
 ["The combination of the Nebraska doctrine (Kansas-Nebraska) and the Dred Scott decision","The Missouri Compromise","The Emancipation Proclamation","The Republican Party"],
 "For Lincoln, these two pieces, plus Douglas's \"care not\" policy, form a plan to extend slavery.",
 [null,"The Missouri Compromise limited slavery.","It doesn't exist yet in 1858.","That is his own party."]);
Q("elec","What next Supreme Court decision did Lincoln fear?",
 ["A decision saying a state cannot exclude slavery, which would make it legal in every state","A decision abolishing slavery","A decision giving women the vote","A decision banning secession"],
 "Lincoln notes that Dred Scott doesn't say whether a state can exclude slavery: it is a \"nice little niche\" that could be filled.",
 [null,"That was not his fear.","That is not the topic.","That is not the topic."]);
Q("elec","How does Lincoln sum up the \"squatter sovereignty\" argument as it was used?",
 ["If one man chooses to enslave another, no third man has a right to object","Every man is free","Congress must protect liberty","The territories must be free"],
 "Lincoln says the idea of the \"sacred right of self-government\" was \"perverted\" to protect slavery.",
 [null,"That is the opposite of his criticism.","That is not his phrasing.","That is not his phrasing."]);
Q("elec","What is the \"care not\" policy Lincoln blames Douglas for?",
 ["Not caring whether slavery is \"voted down or voted up\"","Refusing to campaign","Not being interested in the West","Rejecting tariffs"],
 "For Lincoln, this moral indifference prepares public opinion to accept slavery everywhere.",
 [null,"That is not what it means.","Douglas actually wanted to acquire more territory.","That is not what it means."]);
Q("elec","What is Douglas's \"Freeport Doctrine\" (August 27, 1858)?",
 ["A territory can exclude slavery by refusing to pass the local police regulations it needs, despite Dred Scott","Territories must accept slavery","Congress can ban slavery","The Supreme Court is always right"],
 "\"Slavery cannot exist a day or an hour anywhere, unless it is supported by local police regulations.\" \"Unfriendly legislation\" is enough to stop it.",
 [null,"Douglas said the opposite.","Dred Scott ruled that out; Douglas does not defend that power for Congress.","Douglas says the Court's decision changes nothing in practice."]);
Q("elec","What question does Douglas throw back at Lincoln in his Freeport answer?",
 ["Will he vote to admit another slave state?","Does he support colonization?","Does he support the Tariff of 1828?","Does he want to be president?"],
 "Douglas accuses him of not being straight: if he thinks the Union must be all free, how could he accept a new slave state?",
 [null,"That is not the question.","That is not the question.","That is not the question."]);
Q("elec","What does Douglas say about the Union in the Freeport debate?",
 ["He is not for dissolving the Union under any circumstances; the Union is the hope of Europe's oppressed","He is ready to dissolve the Union","The Union should become all slave","The Union is a \"covenant with the devil\""],
 "Douglas presents himself as the defender of the Union against a Lincoln who would put it at risk.",
 [null,"It is the opposite.","That is not what he says.","That is Garrison on the Constitution."]);
Q("elec","According to the summary done in class, what was Douglas's point of view?",
 ["Popular sovereignty","Immediate abolition","Congress banning slavery in the territories","Secession"],
 "Douglas: territory residents decide. Lincoln: against the spread of slavery, with an opposite reading of popular sovereignty.",
 [null,"Douglas was not an abolitionist.","That is closer to the Republican position.","Douglas was against dissolving the Union."]);
Q("elec","Why is the 1860 election often seen as the \"final catalyst\" for the war?",
 ["Lincoln's election, as someone opposed to the spread of slavery, pushed the Southern states to secede","Lincoln declared war on the South the day he was elected","The South won the election","It abolished slavery"],
 "South Carolina secedes in December 1860, even before Lincoln's inauguration.",
 [null,"Lincoln doesn't declare war; the conflict begins at Fort Sumter in April 1861.","Lincoln won.","It didn't abolish it."]);
Q("elec","What was the main debate in the 1860 election?",
 ["Slavery, especially in the new territories","Only tariffs","The war with Mexico","Women's right to vote"],
 "The four candidates differ mainly on their position on slavery in the West.",
 [null,"Tariffs mattered, but they weren't the main debate.","That ended in 1848.","That was not an election issue."]);
Q("elec","Which 1860 candidate was the Southern Democrat?",
 ["John Breckinridge","Stephen Douglas","John Bell","Abraham Lincoln"],
 "The Democrats split: Douglas for the North, Breckinridge for the South.",
 [null,"Douglas was the Northern Democrat.","Bell was the Constitutional Union candidate.","Lincoln was a Republican."]);
Q("elec","Which 1860 candidate represented the Constitutional Union Party?",
 ["John Bell","John Breckinridge","Stephen Douglas","Abraham Lincoln"],
 "His platform: \"no political principle other than the Constitution of the country, the Union of the States, and the Enforcement of the Laws.\"",
 [null,"Breckinridge was the Southern Democrat.","Douglas was the Northern Democrat.","Lincoln was a Republican."]);
Q("elec","What was Lincoln's (Republican) platform in 1860?",
 ["Keep slavery where it exists, no slavery in the new territories, support for Homesteads, tariffs and the transcontinental railroad","Abolish slavery everywhere immediately","Protect slaveholders' rights in the territories","Popular sovereignty and against higher tariffs"],
 "Lincoln did not propose abolition in the South, only stopping the spread of slavery.",
 [null,"That was not his platform in 1860.","That is Breckinridge.","That is Douglas."]);
Q("elec","What was Breckinridge's (Southern Democrat) platform?",
 ["Slaveholders' rights in the new territories, against Homesteads and against tariffs","No slavery in the new territories","Popular sovereignty","Only the Constitution, the Union and the laws"],
 "He also wanted a railroad from the Mississippi to the Pacific (a Southern route).",
 [null,"That is Lincoln.","That is Douglas.","That is Bell."]);
Q("elec","What did Lincoln and Douglas agree on in 1860?",
 ["Homesteads and the transcontinental railroad","Higher tariffs","Slavery in the new territories","Slaveholders' rights"],
 "Both supported Homesteads (land for settlers) and the railroad. They disagreed on tariffs and on slavery in the West.",
 [null,"Lincoln was for higher tariffs, Douglas against.","Lincoln: no slavery; Douglas: popular sovereignty.","Neither defended slaveholders' rights in the territories."]);
Q("elec","What is secession?",
 ["Formally withdrawing from an alliance or union","Cancelling a federal law","Abolishing slavery","Electing a new president"],
 "That is the class definition. South Carolina is the first state to secede.",
 [null,"That is nullification.","That is not what it means.","That is not what it means."]);
Q("elec","Which state was the first to secede, and when?",
 ["South Carolina, in December 1860, before Lincoln's inauguration","Virginia, in April 1861","Texas, in 1845","Missouri, in 1820"],
 "The class slide gives December 24, 1860. (The ordinance of secession was passed on December 20; the declaration of causes followed on the 24th.)",
 [null,"Virginia secedes after Fort Sumter.","Texas joins the Union in 1845.","Missouri joins the Union in 1821."]);
Q("elec","How many states had seceded and formed the Confederacy about three months after South Carolina?",
 ["7","2","11","20"],
 "Seven Deep South states formed the Confederacy in early 1861. Others, like Virginia, followed after Fort Sumter (11 in all).",
 [null,"That is too few.","11 is the final total, after Fort Sumter.","There were not that many slave states."]);
Q("elec","Why couldn't Lincoln just say \"good riddance\" to the South?",
 ["If a minority that loses an election can leave the Union, democratic government fails","Because he wanted to abolish slavery right away","Because the South was richer than the North","Because the Constitution allowed secession"],
 "For Lincoln, what was at stake was the survival of democracy: \"ballots are the rightful and peaceful successors of bullets.\"",
 [null,"Emancipation was not his original goal.","That is not the argument.","Lincoln actually thought secession was illegal."]);
Q("elec","Inquiry question 3: \"To what extent did popular sovereignty reflect the political divisions over slavery?\" Which opening sentence is best?",
 ["Sources A and B show to a large extent that popular sovereignty reflected the divisions over slavery, because Lincoln and Douglas interpreted it in opposite ways.","I think Lincoln was right.","Source A is a speech and Source B is a debate.","Lincoln was tall and Douglas was short."],
 "A good answer reuses the language of the question (\"to what extent,\" \"popular sovereignty,\" \"divisions\") and takes a clear position.",
 [null,"Avoid \"I think\"; say \"the source argues / suggests.\"","That is a description, not an answer to the question.","That is not relevant."]);

/* ---------------- Lesson 5: the battles and the end of the war ---------------- */
Q("war","What did Southerners demand about Fort Sumter after South Carolina seceded?",
 ["That the North give up control of the fort; President Buchanan refused","That the North send more soldiers there","That the fort become the capital","That Lincoln sign a peace there"],
 "Fort Sumter, in Charleston harbor, was federal property in the heart of the first state to secede.",
 [null,"They wanted the soldiers to leave.","The Confederate capital became Richmond.","That is not the case."]);
Q("war","What was Lincoln's dilemma at Fort Sumter?",
 ["Give in (breaking his promise to hold federal defenses) or defend the fort (breaking his promise not to use force first)","Choosing between two generals","Choosing between France and Britain","Choosing between emancipation and colonization"],
 "Giving in would discourage Northerners; defending it would require a major military action.",
 [null,"That is not the dilemma.","Not related.","Not related."]);
Q("war","What did Lincoln choose to do at Fort Sumter?",
 ["Resupply the fort with food only, no ammunition","Bombard Charleston","Abandon the fort","Send the whole army"],
 "This choice left the Confederates responsible for firing first.",
 [null,"He didn't want to attack first.","He didn't want to break his promise.","He didn't send an army."]);
Q("war","What happened at Fort Sumter in April 1861?",
 ["The Confederates opened fire on April 12 and the garrison surrendered about a day and a half later","The Union won a major victory","Lincoln was assassinated","The South surrendered"],
 "Afterward, Lincoln raised an army and patriotism surged on both sides.",
 [null,"It was a Union defeat.","Lincoln was assassinated in April 1865.","The South surrendered at Appomattox in 1865."]);
Q("war","What was one consequence of Fort Sumter in April 1861?",
 ["Virginia seceded and Richmond became the capital of the Confederacy","California left the Union","The war ended","The Emancipation Proclamation was signed"],
 "Virginia, a large Upper South state, joined the Confederacy after Lincoln's call for troops.",
 [null,"That is not the case.","The war began.","That comes in 1862–1863."]);
Q("war","Why is the Battle of Bull Run (First Manassas, July 1861) important?",
 ["It is the \"first\" real battle between two armies; the Union defeat shows the war will last far longer than 90 days","The Union won the war there","It is the bloodiest battle","It split the South in two"],
 "The discouraged North realized it had to prepare for a long war.",
 [null,"It was a Union defeat.","The bloodiest day is Antietam.","That is Vicksburg."]);
Q("war","What was the Anaconda Plan?",
 ["A Union plan to strangle the South with a coastal blockade and control of the Mississippi","A Confederate plan to invade Washington","The plan for colonization in Liberia","Sherman's plan for the March to the Sea"],
 "Like a snake squeezing its prey: block the ports and cut the South along the river.",
 [null,"It was a Union plan.","Not related.","Sherman's march comes in 1864."]);
Q("war","Why was keeping the border states in the Union a key goal for Lincoln?",
 ["Maryland surrounds Washington, D.C.; Kentucky and Missouri control important rivers","They had the most factories","They were all free states","They wanted immediate emancipation"],
 "The border states were slave states that stayed in the Union.",
 [null,"That is not the reason given in class.","They were slave states.","That is not the case."]);
Q("war","What complication did the border states create for Lincoln?",
 ["Their citizens kept their constitutional rights and could use them to undermine the Union; ¼ to ½ of their soldiers fought for the Confederacy","They refused to pay taxes","They wanted to join Mexico","They demanded abolition"],
 "This is also why Lincoln avoided emancipation at first: he didn't want to push these states toward the Confederacy.",
 [null,"That is not the case.","That is not the case.","They were slave states."]);
Q("war","What was Lincoln's main war aim at the start of the war?",
 ["Preserving the Union, and democracy with it","Abolishing slavery","Conquering Mexico","Punishing South Carolina"],
 "The class stresses: \"Still not emancipation…\" Emancipation is only a secondary goal until 1862.",
 [null,"Emancipation comes later, under pressure.","That is not the case.","That is not the stated goal."]);
Q("war","In his message to Congress on July 4, 1861, what does Lincoln want to show?",
 ["That those who win an election can also put down a rebellion: ballots replace bullets","That slavery must be abolished","That the South has the right to leave","That the war will be short"],
 "\"Ballots are the rightful and peaceful successors of bullets.\" Popular government is an \"experiment\" that must survive.",
 [null,"He doesn't talk about that in this passage.","He says the opposite.","That is not in the passage."]);
Q("war","What were Lincoln's terms for peace?",
 ["No secession, rejoining the United States and unconditional surrender; emancipation only second","A negotiated peace between two countries","Emancipation above all","The South keeps its territories"],
 "The Union, and so democracy, was at stake.",
 [null,"He refused to recognize the Confederacy.","Emancipation was secondary.","That is not the case."]);
Q("war","Which of these did NOT increase the pressure on Lincoln in the summer of 1862?",
 ["The Union victory at Gettysburg","Pressure from abolitionists","The risk of intervention by Britain and France","Enslaved people fleeing to Union camps"],
 "Gettysburg happens in July 1863, a year later. The other factors (along with defeats that were eroding support for the war) are the ones from class.",
 [null,"That is a summer 1862 factor.","That is a summer 1862 factor.","That is a summer 1862 factor: they arrived as refugees."]);
Q("war","On July 22, 1862, Lincoln presented the preliminary Emancipation Proclamation to his cabinet. What did William Seward advise?",
 ["To wait for a military victory, or it would look like \"the last shriek\" of an exhausted government","To publish it immediately","To abandon it","To put it to a vote in the South"],
 "Seward: \"Postpone its issue, until you can give it to the country supported by military success.\"",
 [null,"It is the opposite.","He only wanted to delay it.","That is not the case."]);
Q("war","Why is the Battle of Antietam (September 17, 1862) important?",
 ["It is the bloodiest day of the war; the Union victory lets Lincoln issue the Emancipation Proclamation","It ended the war","It split the South in two","It is the first battle of the war"],
 "The South pulled back from Maryland into Virginia. With this victory, the risk of foreign intervention dropped.",
 [null,"The war lasts until 1865.","That is Vicksburg.","That is Bull Run (or Fort Sumter)."]);
Q("war","Why did the Emancipation Proclamation reduce the risk of European intervention?",
 ["Most Europeans disapproved of slavery; the war became a war against slavery","Europe had signed a treaty with Lincoln","France was allied with the Confederacy","Britain needed the North's cotton"],
 "After the Proclamation, it was politically hard for Britain or France to support a slaveholding country.",
 [null,"That is not the case.","It was not officially.","The cotton came from the South."]);
Q("war","What effect did the Proclamation have on enslaved people who escaped?",
 ["They were accepted as refugees and many fought in the Union army","They were sent back to their masters","They were sent to Liberia","Nothing changed"],
 "The Proclamation says the military and naval authorities \"will recognize and maintain the freedom of said persons.\"",
 [null,"It is the opposite.","That is not the case.","The refugees' status changed."]);
Q("war","When did the Emancipation Proclamation take effect?",
 ["January 1, 1863","July 4, 1861","June 19, 1865","September 17, 1862"],
 "Announced in September 1862 after Antietam, it took effect on January 1, 1863.",
 [null,"That is Lincoln's message to Congress.","That is Juneteenth.","That is Antietam."]);
Q("war","What is one important limitation of the Emancipation Proclamation?",
 ["It only applied to areas in rebellion, not to the border states that stayed in the Union","It freed every slave in the country immediately","It banned Black men from joining the army","Lincoln rejected it"],
 "It was a war measure by Lincoln as commander in chief. Full abolition comes with the 13th Amendment (1865).",
 [null,"It didn't cover the border states; and in the South, freedom depended on the army's advance (hence Juneteenth).","It actually allowed Black men to enlist.","Lincoln signed it."]);
Q("war","Why is Gettysburg (1863) a turning point in the war?",
 ["Lee's invasion of the North fails; it is the largest battle in North America and the Confederate army never comes north again","Grant takes control of the Mississippi there","The South wins the war there","Lincoln is assassinated there"],
 "After his successes, Lee tried to invade Pennsylvania. It was his biggest failure.",
 [null,"That is Vicksburg.","The South loses.","Lincoln gave a famous speech there, but he was assassinated in Washington in 1865."]);
Q("war","Why is Vicksburg (1863) a turning point in the war?",
 ["Grant's victory gives the Union control of the Mississippi and splits the South in two","It is the first battle of the war","Lee invades the North there","The South surrenders there"],
 "Symbolically, Vicksburg falls the day after the South's defeat at Gettysburg (July 1863).",
 [null,"That is Bull Run.","That is Gettysburg.","That is Appomattox (1865)."]);
Q("war","What was Grant's \"war of attrition\"?",
 ["Sacrificing many soldiers, knowing the North had replacements and the South did not","A war without battles","A naval blockade","A peace negotiation"],
 "The South had no replacements and suffered more desertions. Grant was nicknamed the \"Butcher of Men.\"",
 [null,"It was actually a war of very deadly battles.","That is the Anaconda Plan.","That is not the case."]);
Q("war","What was the goal of Sherman's March to the Sea (1864)?",
 ["To inspire terror and completely subdue the Confederate forces","To free Maryland","To take Fort Sumter","To protect Washington"],
 "Sherman destroyed the South's resources (from Georgia to the sea) to break its will to fight.",
 [null,"Maryland was in the Union.","That is not the goal.","That is not the goal."]);
Q("war","What happened on April 9, 1865?",
 ["The South surrendered at Appomattox","Lincoln was assassinated","Fort Sumter was attacked","Juneteenth"],
 "Lee surrendered to Grant at Appomattox, Virginia.",
 [null,"That is April 14, 1865.","That is April 1861.","That is June 19, 1865."]);
Q("war","What happened on April 14, 1865?",
 ["Lincoln was assassinated","The South surrendered","The Proclamation took effect","South Carolina seceded"],
 "Five days after Appomattox.",
 [null,"That is April 9, 1865.","That is January 1, 1863.","That is December 1860."]);
Q("war","What does Juneteenth (June 19, 1865) celebrate?",
 ["General Granger arriving in Galveston, Texas, to announce to enslaved people that they were free","The signing of the Constitution","The victory at Gettysburg","Lincoln's election"],
 "Granger was enforcing the Proclamation issued more than two and a half years earlier, two months after Lee's surrender.",
 [null,"That is 1787.","That is July 1863.","That is November 1860."]);
Q("war","How much time passed between the Emancipation Proclamation (January 1, 1863) and Juneteenth?",
 ["More than two and a half years","Two weeks","Ten years","One day"],
 "In Confederate areas, freedom depended on the Union army arriving. Texas, far away, was one of the last.",
 [null,"It is much longer.","That is too long.","It is much longer."]);
Q("war","Put these events in order: Antietam, Fort Sumter, Gettysburg, Appomattox.",
 ["Fort Sumter (1861) → Antietam (1862) → Gettysburg (1863) → Appomattox (1865)","Antietam → Fort Sumter → Appomattox → Gettysburg","Fort Sumter → Gettysburg → Antietam → Appomattox","Gettysburg → Antietam → Fort Sumter → Appomattox"],
 "Start of the war, the victory that allows the Proclamation, the turning point, the surrender.",
 [null,"Fort Sumter is the start of the war.","Antietam (1862) comes before Gettysburg (1863).","Gettysburg is in 1863, after the other two."]);

/* ---------------- IB skills ---------------- */
Q("ib","In a source analysis (Paper 1), what phrasing does the teacher recommend?",
 ["\"The source argues / suggests / proposes that…\"","\"I think that…\"","\"I believe that…\"","\"In my opinion, it's insanely biased\""],
 "\"I think\" weakens the argument and is already implied. Also avoid the pronouns I and you, and slang.",
 [null,"To avoid, according to the overall feedback.","To avoid, according to the overall feedback.","Avoid slang and casual expressions."]);
Q("ib","According to the Paper 1 feedback, what was the most common mistake?",
 ["Describing the content without coming back to the inquiry question","Using too many quotations","Writing too little","Writing in pen"],
 "Restate the inquiry question and use its language throughout your answer.",
 [null,"That is not the main mistake mentioned.","That is not the main mistake.","The teacher actually asks you to write in pen."]);
Q("ib","What should you look at first to analyze a source's origin?",
 ["The dates, the titles and the author","The length of the text","The color of the document","The number of paragraphs"],
 "\"Look at the dates! Look at the titles.\" Use the information available without unfounded assumptions.",
 [null,"That is not the origin.","Not relevant.","Not relevant."]);
Q("ib","A \"to what extent\" question asks you to…",
 ["weigh the evidence for and against and give a nuanced judgment","tell the events in order","say yes or no without justifying","list dates"],
 "You need a clear position (\"to a large extent,\" \"to some extent\") backed up by the sources.",
 [null,"Narrating is not analyzing.","You have to justify.","Dates alone don't answer."]);
Q("ib","How should you start question 3 (comparing sources) on Paper 1?",
 ["With a sentence that restates the inquiry question, for example \"Sources A, B and C present different perspectives on…\"","With a long quotation","With \"I think that\"","With the author's biography"],
 "Then keep using the language of the question, and finish with a conclusion that comes back to the question.",
 [null,"That is not the best opening.","To avoid.","That is not the recommended opening."]);
Q("ib","What does the Faith Ringgold painting studied in class (\"The Flag is Bleeding,\" 1967) show?",
 ["An American flag bleeding in front of white people and a Black man; it asks whether we can ever be united","The signing of the Constitution","The Battle of Gettysburg","A portrait of Lincoln"],
 "Painted during the racial violence of the 1960s, the work is used as an exercise: observe, evidence, analyze.",
 [null,"That is not the subject.","That is not the subject.","That is not the subject."]);
Q("ib","What are the three steps for analyzing an image in class?",
 ["Observe, evidence, analyze","Read, copy, summarize","Date, sign, file","Describe, judge, forget"],
 "What do you observe? What does the image mean? How do you know?",
 [null,"Those are not the steps.","Those are not the steps.","Those are not the steps."]);

/* ---------------- Timeline (generated questions) ---------------- */
/* [event, sortKey (YYYY.MMDD), label shown as the answer] */
CHRONO = [
 ["The Constitutional Convention and the Constitution", 1787.09, "1787"],
 ["Legal end of the importation of slaves (slave trade)", 1808.01, "1808"],
 ["Founding of the American Colonization Society", 1816.12, "1816"],
 ["The Missouri Compromise", 1820.03, "1820"],
 ["The Tariff of 1828", 1828.05, "1828"],
 ["David Walker's Appeal", 1829.09, "1829"],
 ["First issue of The Liberator (Garrison)", 1831.01, "1831"],
 ["Nat Turner's revolt", 1831.08, "1831"],
 ["The nullification crisis", 1832.11, "1832–1833"],
 ["Founding of the American Anti-Slavery Society", 1833.12, "1833"],
 ["The House adopts the gag rule", 1836.05, "1836"],
 ["Elijah Lovejoy killed in Alton, Illinois", 1837.11, "1837"],
 ["Douglass escapes to the North", 1838.09, "1838"],
 ["Split in the abolitionist movement; Liberty Party", 1840.05, "1840"],
 ["Henry Highland Garnet's speech calling for rebellion", 1843.08, "1843"],
 ["Repeal of the gag rule", 1844.12, "1844"],
 ["Publication of Frederick Douglass's Narrative", 1845.05, "1845"],
 ["The Mexican-American War", 1846.04, "1846–1848"],
 ["The Seneca Falls Convention", 1848.07, "1848"],
 ["The California Gold Rush", 1849.01, "1849"],
 ["The Compromise of 1850", 1850.09, "1850"],
 ["Sojourner Truth: \"Aren't I a woman?\"", 1851.05, "1851"],
 ["Uncle Tom's Cabin published as a book", 1852.03, "1852"],
 ["Douglass: \"What to the Slave is the Fourth of July?\"", 1852.07, "1852"],
 ["The Kansas-Nebraska Act", 1854.05, "1854"],
 ["The Dred Scott decision", 1857.03, "1857"],
 ["The Lincoln-Douglas debates", 1858.08, "1858"],
 ["John Brown's raid on Harpers Ferry", 1859.10, "1859"],
 ["Lincoln's election", 1860.11, "November 1860"],
 ["South Carolina secedes", 1860.12, "December 1860"],
 ["Attack on Fort Sumter", 1861.0412, "April 1861"],
 ["Lincoln's message to Congress (\"ballots… bullets\")", 1861.0704, "July 4, 1861"],
 ["Battle of Bull Run (First Manassas)", 1861.0721, "July 1861"],
 ["Lincoln presents the Proclamation to his cabinet", 1862.0722, "July 22, 1862"],
 ["Battle of Antietam", 1862.0917, "September 17, 1862"],
 ["The Emancipation Proclamation takes effect", 1863.0101, "January 1, 1863"],
 ["Battle of Gettysburg", 1863.0701, "July 1863"],
 ["Fall of Vicksburg", 1863.0704, "July 1863"],
 ["Sherman's March to the Sea", 1864.11, "1864"],
 ["The South surrenders at Appomattox", 1865.0409, "April 9, 1865"],
 ["Lincoln's assassination", 1865.0414, "April 14, 1865"],
 ["Juneteenth in Galveston, Texas", 1865.0619, "June 19, 1865"]
];

/* ---------------- People ---------------- */
/* [name, description, group] */
PEOPLE = [
 ["Thomas Jefferson","Author of the Declaration of Independence; Anti-Federalist; called slavery a \"hideous blot\" while holding more than 100 people in slavery.","Founders"],
 ["George Washington","First president; held more than 600 people in slavery during his life while calling slavery \"repugnant.\"","Founders"],
 ["John Adams","According to the class, the one exception among the Founding Fathers: he was not a slaveholder.","Founders"],
 ["Alexander Hamilton","Leader of the Federalists: strong central government, industrial economy.","Founders"],
 ["Patrick Henry","Anti-Federalist who feared a tyrannical central government.","Founders"],
 ["Benjamin Franklin","Accepted the Constitution \"with all its faults\" on September 17, 1787.","Founders"],
 ["Luther Martin","Delegate who wanted to allow the slave trade to be banned or taxed, as contrary to the principles of the Revolution.","Founders"],
 ["John Rutledge","South Carolina delegate: \"Religion and humanity had nothing to do with this question.\"","Founders"],
 ["Charles Pinckney","Delegate: South Carolina would never accept a Constitution that banned the slave trade.","Founders"],
 ["James Madison","Took notes on the debates at the 1787 Convention.","Founders"],
 ["Harriet Tubman","Escaped slavery, then went back to the South to guide others on the Underground Railroad.","Resistance"],
 ["Nat Turner","Enslaved preacher who led an armed revolt in Virginia in 1831.","Resistance"],
 ["John Brown","White abolitionist who attacked the arsenal at Harpers Ferry in 1859; hanged, he became a martyr in the North.","Resistance"],
 ["Frederick Douglass","Formerly enslaved speaker and editor; Narrative (1845); \"What to the Slave is the Fourth of July?\" speech (1852).","Abolition"],
 ["William Lloyd Garrison","Editor of The Liberator (1831); wanted immediate abolition; called the Constitution a \"covenant with the devil.\"","Abolition"],
 ["David Walker","Free Black man in Boston, author of the Appeal to the Coloured Citizens of the World (1829).","Abolition"],
 ["Theodore Weld","Minister converted by Finney who trained speakers: \"slavery is a sin.\"","Abolition"],
 ["Henry Highland Garnet","Black abolitionist who called on enslaved people to revolt in 1843.","Abolition"],
 ["Harriet Beecher Stowe","Author of Uncle Tom's Cabin (1852), the most widely read antislavery work.","Abolition"],
 ["Elijah P. Lovejoy","Antislavery editor killed by a mob in Alton, Illinois, in 1837: the movement's first martyr.","Abolition"],
 ["John Quincy Adams","Former president and Massachusetts representative who got the gag rule repealed in 1844.","Abolition"],
 ["Lydia Maria Child","Author of An Appeal in Favor of That Class of Americans Called Africans (1833).","Abolition"],
 ["James G. Birney","Liberty Party candidate for president in 1840 (about 7,000 votes).","Abolition"],
 ["Angelina Grimké","Daughter of a South Carolina slaveholder; 1837 letter: what is morally right for man is right for woman.","Women"],
 ["Sarah Grimké","Author of Letters on the Equality of the Sexes (1838); \"equal pay for equal work.\"","Women"],
 ["Catharine Beecher","Answered the Grimkés that heaven had made man superior and woman subordinate (1837).","Women"],
 ["Elizabeth Cady Stanton","Main author of the Declaration of Sentiments; co-organizer of Seneca Falls (1848).","Women"],
 ["Lucretia Mott","Co-organizer of Seneca Falls after being excluded from the London convention in 1840.","Women"],
 ["Sojourner Truth","Born into slavery in New York; \"And aren't I a woman?\" (1851).","Women"],
 ["Dorothea Dix","Campaigner for humane treatment of the mentally ill; 28 states built hospitals.","Women"],
 ["Margaret Fuller","Author of Woman in the Nineteenth Century (1845), the first woman literary critic at the New York Tribune.","Women"],
 ["Horace Mann","Education reformer: tax-funded public schools in the North.","Reforms"],
 ["George Fitzhugh","Proslavery author of Sociology for the South (1854) who rejected the ideals of liberty and equality.","Sources"],
 ["John C. Calhoun","Vice president; theorist of nullification: a state can void a federal law.","Causes"],
 ["Andrew Jackson","President who mobilized the army against South Carolina during the nullification crisis.","Causes"],
 ["Henry Clay","Politician who supported the American Colonization Society.","Causes"],
 ["Dred Scott","Enslaved man who sued for his freedom because he had lived in Illinois and at Fort Snelling.","Causes"],
 ["Roger B. Taney","Chief Justice who wrote the Dred Scott decision (1857).","Causes"],
 ["Irene Emerson","Dr. Emerson's widow, sued by Dred Scott after she refused to let him buy his freedom.","Causes"],
 ["Stephen Douglas","Northern Democrat, champion of popular sovereignty; Freeport Doctrine (1858).","1860"],
 ["Abraham Lincoln","Republican; \"A house divided against itself cannot stand\"; elected president in 1860.","1860"],
 ["John Breckinridge","Southern Democratic candidate in 1860: slaveholders' rights in the territories.","1860"],
 ["John Bell","Constitutional Union candidate in 1860: the Constitution, the Union and the laws.","1860"],
 ["James Buchanan","President who refused to hand Fort Sumter over to the South.","War"],
 ["William Seward","Secretary of State who advised waiting for a victory before issuing the Proclamation.","War"],
 ["Robert E. Lee","Confederate general; his invasion of the North fails at Gettysburg; surrenders at Appomattox.","War"],
 ["Ulysses S. Grant","Union general: victory at Vicksburg, war of attrition, nicknamed the \"Butcher of Men.\"","War"],
 ["William T. Sherman","Union general who led the March to the Sea (1864) to inspire terror.","War"],
 ["Gordon Granger","Union general who announced freedom in Galveston, Texas, on June 19, 1865.","War"],
 ["Faith Ringgold","Artist of \"The American People Series #18: The Flag is Bleeding\" (1967).","Method"]
];

/* ---------------- Quotes ---------------- */
/* [quote, author, context] */
QUOTES = [
 ["\"A house divided against itself cannot stand.\"","Abraham Lincoln","Springfield speech, June 16, 1858"],
 ["\"I believe this government cannot endure permanently half slave and half free.\"","Abraham Lincoln","Springfield speech, 1858"],
 ["\"Ballots are the rightful and peaceful successors of bullets.\"","Abraham Lincoln","Message to Congress, July 4, 1861"],
 ["\"Slavery cannot exist a day or an hour anywhere, unless it is supported by local police regulations.\"","Stephen Douglas","Freeport debate, 1858"],
 ["\"I am not for the dissolution of the Union under any circumstances.\"","Stephen Douglas","Freeport debate, 1858"],
 ["\"I will be as harsh as truth, and as uncompromising as justice… I will be heard.\"","William Lloyd Garrison","The Liberator, 1831"],
 ["\"Religion and humanity had nothing to do with this question. Interest alone is the governing principle with nations.\"","John Rutledge","1787 Convention"],
 ["\"Let every State import what it pleases.\"","Oliver Ellsworth","1787 Convention"],
 ["\"South Carolina can never receive the plan if it prohibits the slave trade.\"","Charles Pinckney","1787 Convention"],
 ["\"I agree to this Constitution, with all its faults.\"","Benjamin Franklin","September 17, 1787"],
 ["\"It opened my eyes to the horrible pit, but to no ladder upon which to get out.\"","Frederick Douglass","Narrative, 1845"],
 ["\"What, to the Slave, is the Fourth of July?\"","Frederick Douglass","Rochester, 1852"],
 ["\"Whatever it is morally right for man to do, it is morally right for woman to do.\"","Angelina Grimké","The Liberator, 1837"],
 ["\"Heaven has appointed to one sex the superior, and to the other the subordinate station.\"","Catharine Beecher","Essay on Slavery and Abolitionism, 1837"],
 ["\"We hold these truths to be self-evident: that all men and women are created equal.\"","Elizabeth Cady Stanton","Declaration of Sentiments, Seneca Falls, 1848"],
 ["\"And aren't I a woman?\"","Sojourner Truth","Women's rights convention, 1851"],
 ["\"Either the theory of our government is false, or women have a right to vote.\"","Lydia Maria Child","Quoted by Foner"],
 ["\"It may be viewed as the last measure of an exhausted government, a cry for help.\"","William Seward","To Lincoln's cabinet, July 1862"],
 ["\"We recognize no political principle other than the Constitution of the country, the Union of the States, and the Enforcement of the Laws.\"","John Bell","Constitutional Union Party, 1860"],
 ["\"The powers not delegated to the United States by the Constitution… are reserved to the States respectively, or to the people.\"","The 10th Amendment","US Constitution"]
];

/* ---------------- Vocabulary FR / EN ---------------- */
/* [term FR, English, definition] (French terms kept: the test is in French) */
LEX = [
 ["Le compromis des trois cinquièmes","Three-Fifths Compromise","An enslaved person counts as 3/5 of a person in the census (representation and taxes)."],
 ["La clause des esclaves fugitifs","Fugitive Slave Clause","Article IV: a person who escapes to another state must be returned to their owner."],
 ["L'institution particulière","The peculiar institution","A euphemism for slavery."],
 ["Le recensement","Census","The population count that sets House seats, electors and direct taxes."],
 ["Les grands électeurs","Electors","The people who officially elect the president."],
 ["Le fédéralisme dual","Dual federalism","The idea that the federal government and the states each have their own separate sphere of power."],
 ["Les droits des États","States' rights","The doctrine that states keep the powers not delegated (10th Amendment)."],
 ["La nullité","Nullification","Calhoun's doctrine: a state can declare an unconstitutional federal law void."],
 ["Les droits de douane","Tariffs","Taxes on imported goods; the source of the 1832 crisis."],
 ["Le sectionnalisme","Sectionalism","Putting the interests of one's region ahead of the nation's."],
 ["La souveraineté populaire","Popular sovereignty","The residents of a territory vote on whether it will be free or slave."],
 ["La cession mexicaine","Mexican Cession","Land given up by Mexico in 1848 (Treaty of Guadalupe Hidalgo)."],
 ["La sécession","Secession","Formally withdrawing from an alliance or union."],
 ["Les États frontaliers","Border states","Slave states that stayed in the Union (Maryland, Kentucky, Missouri, Delaware)."],
 ["La colonisation","Colonization","The plan to resettle freed Black people in Africa (Liberia) or elsewhere."],
 ["L'abolition immédiate","Immediate abolition","Ending slavery right away, without compensation or deportation."],
 ["La persuasion morale","Moral suasion","Convincing through moral and religious arguments rather than force or politics."],
 ["La citoyenneté de naissance","Birthright citizenship","Everyone born in the United States is a citizen, whatever their race."],
 ["La gag rule","Gag rule","House rule (1836–1844) that blocked consideration of antislavery petitions."],
 ["Le suffrage des femmes","Woman suffrage","Women's right to vote, demanded at Seneca Falls (1848)."],
 ["Le chemin de fer souterrain","Underground Railroad","A secret network that helped enslaved people escape to the North and Canada."],
 ["La résistance quotidienne","Everyday resistance","Quiet resistance: working slowly, faking illness, keeping one's culture, learning to read."],
 ["Le laissez-passer","Pass","A document that let an enslaved person travel; Douglass wanted to write his own."],
 ["Les Homesteads","Homesteads","Western land given to settlers; Lincoln and Douglas both supported it."],
 ["Le plan Anaconda","Anaconda Plan","A coastal blockade and control of the Mississippi to strangle the South."],
 ["La guerre d'attrition","War of attrition","Wearing the enemy down with losses it cannot replace."],
 ["La capitulation inconditionnelle","Unconditional surrender","Surrendering without any conditions; Lincoln's demand."],
 ["La Proclamation d'émancipation","Emancipation Proclamation","Lincoln's war measure freeing slaves in areas in rebellion (effective January 1, 1863)."],
 ["Le tournant","Turning point","A moment that changes the direction of the war (Gettysburg, Vicksburg)."],
 ["La question d'enquête","Inquiry question","The question your whole Paper 1 answer must keep coming back to."]
];

/* ---------------- Review sheets (notes by lesson) ---------------- */
NOTES = [
 { id:"l1", t:"Lesson 1 · The Constitution, slavery and resistance", topics:["const","res"], q:"Did the Constitution establish a just government?", html:`
  <h3>Race in the Americas</h3>
  <ul><li><b>English America</b>: binary system, white / non-white; \"one drop\" is enough (one-drop rule).</li>
  <li><b>Latin America</b>: casta system, more complex: <i>peninsulares</i> (white people born in Europe), <i>creoles</i> (white people born in the Americas), <i>mestizos</i> (mixed ancestry), Indigenous people, enslaved people. More varied paths to freedom.</li>
  <li>Race is a social construct that was used to justify slavery. Plantation crops: tobacco, rice, indigo, cotton.</li></ul>
  <h3>Federalists and Anti-Federalists</h3>
  <table class="table"><tr><th></th><th>Federalists</th><th>Anti-Federalists</th></tr>
  <tr><td>Who</td><td>Hamilton, Adams, Madison, Franklin, Jay, Pinckney</td><td>Jefferson, Monroe, Patrick Henry, R. H. Lee, M. Smith, G. Mason, G. Clinton</td></tr>
  <tr><td>Constitution</td><td>For ratification; loose interpretation</td><td>Against; strict interpretation</td></tr>
  <tr><td>Power</td><td>Strong central government</td><td>State power, fear of tyranny</td></tr>
  <tr><td>Allies · economy · region</td><td>Britain · industry · Northeast</td><td>France · agriculture · South and West</td></tr></table>
  <h3>Slavery and the Founding Fathers</h3>
  <ul><li>\"All men are created equal,\" but except for John Adams, most of the founders were slaveholders.</li>
  <li><b>Jefferson</b>: slavery is \"morally depraved,\" a \"hideous blot\"; he holds more than 100 people in slavery.</li>
  <li><b>Washington</b>: more than 600 people in slavery; calls slavery \"repugnant.\"</li>
  <li>The passage of the Declaration that called the slave trade an \"execrable commerce\" was <b>cut</b>.</li></ul>
  <h3>How the Constitution protects slavery</h3>
  <ul><li><b>Art. I, s. 2, cl. 3 · three fifths</b>: the census sets (1) representatives, (2) electors, (3) direct taxes. The South pays more tax BUT gains seats.</li>
  <li><b>Art. I, s. 9, cl. 1 · the slave trade</b>: no ban before 1808; maximum tax of $10 per person.</li>
  <li><b>Art. IV, s. 2, cl. 3 · fugitives</b>: an escaped person must be \"delivered up.\"</li>
  <li>The word \"slavery\" never appears: \"other Persons,\" \"Person held to Service or Labour.\"</li></ul>
  <h3>The 1787 Convention (Madison's notes, August 21)</h3>
  <ul><li><b>Luther Martin</b>: allow the slave trade to be banned or taxed; it goes against the principles of the Revolution.</li>
  <li><b>Rutledge</b>: \"Interest alone\"; the North will carry the South's products.</li>
  <li><b>Ellsworth</b>: \"Let every State import what it pleases.\"</li>
  <li><b>Pinckney</b>: South Carolina will never accept a ban on the slave trade.</li>
  <li><b>Franklin</b> (Sept. 17): accepts the Constitution \"with all its faults.\"</li></ul>
  <h3>Resistance</h3>
  <table class="table"><tr><th>Everyday</th><th>\"Extreme\"</th></tr>
  <tr><td>Working slowly or badly · faking illness · breaking tools · taking food · keeping one's language, culture, religion · learning to read and write</td><td>Openly defying orders · arson · running away · armed revolt</td></tr></table>
  <ul><li><b>Underground Railroad</b>: a secret network; <b>Harriet Tubman</b> goes back to guide others.</li>
  <li><b>Nat Turner (1831, Virginia)</b>: revolt by an enslaved preacher → harsher laws, Southern fear.</li>
  <li><b>John Brown (1859, Harpers Ferry)</b>: white abolitionist attacks a federal arsenal → martyr in the North, terror in the South, a year before 1860.</li>
  <li>Few large revolts: surveillance, patrols, reprisals. It was not acceptance.</li></ul>`},
 { id:"l2", t:"Lesson 2 · Abolitionism (Foner, ch. 12)", topics:["abo"], q:"What were the different points of view among abolitionists?", html:`
  <h3>Before 1830: colonization</h3>
  <ul><li><b>American Colonization Society (1816)</b>: gradual abolition + resettling Black people in Africa → <b>Liberia</b>, capital Monrovia (James Monroe).</li>
  <li>Supporters: Henry Clay, John Marshall, Andrew Jackson. Basic idea: America is a white society.</li>
  <li>Most African Americans oppose it: in 1817, 3,000 free Black people in Philadelphia declare that they are Americans.</li></ul>
  <h3>Militant abolitionism (1830s)</h3>
  <ul><li>Slavery is a sin and contradicts the Declaration. <b>Immediate</b> abolition; Black people as equal members of the republic; fight racism.</li>
  <li><b>David Walker</b>, Appeal (1829). <b>Garrison</b>, The Liberator (1831): \"I will be heard\"; Constitution = \"covenant with the devil\"; wanted to dissolve the Union (rejected by most).</li>
  <li><b>American Anti-Slavery Society (1833)</b>: ~100,000 members by the end of the decade; steam press, pamphlets, petitions. <b>Theodore Weld</b>: \"slavery is a sin.\"</li>
  <li><b>Moral suasion</b>: convincing without violence; many \"non-resistants\" (pacifists). Turner (1831) heightens Southern fear.</li></ul>
  <h3>Citizenship and a new vision</h3>
  <ul><li><b>Birthright citizenship</b>: born in the US = citizen, equal, whatever one's race. Victories: Ohio's Black Laws repealed (1849), Boston schools integrated (1855).</li>
  <li>Lydia Maria Child, Appeal (1833). The <b>Liberty Bell</b> owes its name to the abolitionists.</li></ul>
  <h3>Black abolitionists</h3>
  <ul><li><b>Douglass</b>: Narrative (1845); \"What to the Slave is the Fourth of July?\" (Rochester, 1852).</li>
  <li><b>Uncle Tom's Cabin</b> (Stowe, 1852): more than a million copies by 1854.</li>
  <li><b>Henry Highland Garnet</b> (1843) calls for rebellion. Alternative holidays: January 1 and August 1 instead of July 4.</li></ul>
  <h3>Opposition and free speech</h3>
  <ul><li>Mobs led by \"gentlemen of property and standing.\" <b>Elijah Lovejoy</b> killed (1837). <b>Pennsylvania Hall</b> burned (1838).</li>
  <li><b>Gag rule</b> (1836) against petitions; repealed in 1844 thanks to <b>John Quincy Adams</b>. The North sees that slavery also threatens its own liberties.</li></ul>
  <h3>Origins of feminism</h3>
  <ul><li>Women form the base of the movement. <b>Dorothea Dix</b>: mental hospitals.</li>
  <li><b>The Grimké sisters</b>: Angelina (1837 letter: rights based on moral being); Sarah, Letters on the Equality of the Sexes (1838). <b>Catharine Beecher</b> replies: woman is subordinate, domestic influence only.</li>
  <li><b>Seneca Falls (1848)</b>: Stanton and Mott (excluded in London in 1840). Declaration of Sentiments modeled on the Declaration of Independence; 1st grievance: the right to vote.</li>
  <li><b>Sojourner Truth</b> (1851): \"And aren't I a woman?\" Margaret Fuller (1845). Amelia Bloomer.</li>
  <li><b>The 1840 split</b> over women's role (Abby Kelley) → American and Foreign Anti-Slavery Society; <b>Liberty Party</b> (Birney, ~7,000 votes).</li>
  <li>Greatest achievement: breaking the \"conspiracy of silence\" about slavery.</li></ul>
  <h3>Sources: Douglass and Fitzhugh</h3>
  <ul><li><b>Douglass</b>: The Columbian Orator around age 12; reading, \"a curse rather than a blessing\": it shows \"the horrible pit, but no ladder.\" Distrust of the two Irishmen; learning to write to make his own pass. Audience: white Northern readers.</li>
  <li><b>Fitzhugh</b>, Sociology for the South (1854): rejects Jeffersonian liberty and equality; proslavery pillars: racism, the Bible, equality among white people.</li></ul>`},
 { id:"l3", t:"Lesson 3 · The causes of the Civil War and Dred Scott", topics:["cause","comp"], q:"What was the cause of the American Civil War?", html:`
  <h3>Six factors, all tied to slavery</h3>
  <ol><li>Political divisions</li><li>States' rights and dual federalism (10th Amendment)</li><li>The nullification crisis</li><li>Sectionalism</li><li>Modernization and industrialization</li><li>North / South economic differences</li></ol>
  <p class="small muted">IB themes: change and continuity · causation and consequence · significance · perspective.</p>
  <h3>The nullification crisis (1832–1833)</h3>
  <ul><li>Tariff of 1828: protects Northern industry (taxes British imports); for the South, it hurts agriculture.</li>
  <li><b>Calhoun</b> (vice president): a state can void a federal law. 1832: South Carolina declares the tariff void and threatens secession.</li>
  <li><b>Jackson</b> mobilizes the army; compromise tariff. Legacy: the theory of secession.</li></ul>
  <h3>Sectionalism</h3>
  <table class="table"><tr><th>North</th><th>South</th><th>West</th></tr>
  <tr><td>Industry, factories, urbanization; antislavery</td><td>Dependence on agriculture; slaveholders as leaders; slavery = cultural value</td><td>\"Rugged individualism\"; new regions: free or slave?</td></tr></table>
  <p>Lincoln: \"A house divided against itself cannot stand.\"</p>
  <h3>The compromises</h3>
  <table class="table"><tr><th>Law</th><th>Content</th></tr>
  <tr><td><b>Missouri 1820</b></td><td>11 free / 11 slave. MO slave, ME free. No slavery north of <b>36°30'</b> (Louisiana Purchase).</td></tr>
  <tr><td><b>1850</b></td><td>California free (Gold Rush 1849). Mexican Cession (Guadalupe Hidalgo, 1848, $15M): <b>popular sovereignty</b>. Stronger fugitive slave law.</td></tr>
  <tr><td><b>Kansas-Nebraska 1854</b></td><td>In practice cancels the Missouri Compromise; popular sovereignty everywhere in the West → <b>Bleeding Kansas</b> (violence, fraud).</td></tr></table>
  <h3>Dred Scott (1857)</h3>
  <ul><li>Born into slavery in Virginia (~1799). Dr. Emerson takes him to <b>Illinois</b> (free state, 1834) then to <b>Fort Snelling</b> (free under the Missouri Compromise, 1836). Marries Harriet; back to Missouri (1838).</li>
  <li>Emerson dies (1843); his widow <b>Irene</b> refuses to let him buy his freedom (1846) → lawsuit for \"false imprisonment.\"</li>
  <li><b>Chief Justice Taney</b>: (1) a Black person descended from slaves cannot be a citizen; (2) neither Congress nor a territory can exclude slavery → the Missouri Compromise is unconstitutional; (3) status is decided by the courts of the slave state.</li></ul>`},
 { id:"l4", t:"Lesson 4 · Lincoln-Douglas, the 1860 election and secession", topics:["elec"], q:"To what extent did popular sovereignty reflect the political divisions over slavery?", html:`
  <h3>The Lincoln-Douglas debates (1858)</h3>
  <ul><li>Seven debates for the Illinois Senate seat. Lincoln loses the election but becomes famous; Douglas's career is damaged.</li>
  <li><b>Lincoln, Springfield (June 16)</b>: \"A house divided…\"; not permanently half slave; all one thing or all the other. The \"machinery\" = the Nebraska doctrine + Dred Scott + Douglas's \"care not.\" Fear: a decision that would make slavery legal in every state. \"Squatter sovereignty\" perverted: if one man enslaves another, no one can object.</li>
  <li><b>Douglas, Freeport (August 27)</b>: the <b>Freeport Doctrine</b>: a territory can exclude slavery through \"unfriendly legislation,\" since slavery cannot exist without local police regulations, whatever the Supreme Court says. For acquiring more territory; never for dissolving the Union.</li>
  <li>Class summary: Douglas = popular sovereignty. Lincoln = opposite interpretation, against the spread of slavery.</li></ul>
  <h3>The 1860 election: the final catalyst</h3>
  <table class="table"><tr><th>Candidate</th><th>Slavery</th><th>Other</th></tr>
  <tr><td><b>Lincoln</b> (Republican, a new party)</td><td>Keep it where it exists; not in the new territories</td><td>For Homesteads, tariffs, transcontinental railroad</td></tr>
  <tr><td><b>Douglas</b> (Northern Democrat)</td><td>Keep it; popular sovereignty in the territories</td><td>For Homesteads and the railroad; against higher tariffs</td></tr>
  <tr><td><b>Breckinridge</b> (Southern Democrat)</td><td>Slaveholders' rights in the territories</td><td>Against Homesteads and tariffs; Mississippi-to-Pacific railroad</td></tr>
  <tr><td><b>Bell</b> (Constitutional Union)</td><td colspan="2">\"No principle except the Constitution, the Union and the enforcement of the laws\"</td></tr></table>
  <h3>Secession</h3>
  <ul><li>Definition: formally withdrawing from a union.</li>
  <li><b>South Carolina</b>: December 1860 (the class says the 24th; the ordinance is dated the 20th), before Lincoln's inauguration.</li>
  <li>Within 3 months, <b>7 states</b> form the Confederacy.</li>
  <li>Why not \"good riddance\"? The survival of the Union and of democracy.</li></ul>`},
 { id:"l5", t:"Lesson 5 · The battles, emancipation and the end of the war", topics:["war"], q:"Why are some battles turning points?", html:`
  <h3>The beginning</h3>
  <ul><li><b>Fort Sumter</b>: Buchanan refuses to give it up. Lincoln's dilemma: give in (breaking his promise to hold federal defenses) or defend it (firing first). His choice: <b>food only, no ammunition</b>. The Confederates fire on <b>April 12, 1861</b>; surrender 1.5 days later; Lincoln raises the army.</li>
  <li>April 1861: <b>Virginia</b> secedes; <b>Richmond</b> becomes the capital.</li>
  <li><b>Bull Run / First Manassas (July 1861)</b>: first real battle; Union defeat; the war will last far longer than 90 days.</li>
  <li><b>Anaconda Plan</b>: blockade + Mississippi to strangle the South.</li></ul>
  <h3>Lincoln's goals</h3>
  <ul><li>First <b>preserve the Union</b> (and democracy worldwide), not emancipation. \"Ballots are the rightful and peaceful successors of bullets\" (July 4, 1861).</li>
  <li><b>Border states</b>: Maryland (around D.C.), Kentucky and Missouri (rivers). Their citizens keep their rights; ¼ to ½ of their soldiers fight for the South.</li>
  <li>Peace terms: no secession, unconditional surrender; emancipation second.</li></ul>
  <h3>Emancipation</h3>
  <ul><li>Summer 1862: abolitionist pressure, risk of British and French intervention, refugees in Union camps, defeats.</li>
  <li><b>July 22, 1862</b>: preliminary Proclamation to the cabinet; <b>Seward</b>: wait for a victory.</li>
  <li><b>Antietam (Sept. 17, 1862)</b>: bloodiest day; Union victory → Proclamation; less risk of intervention (Europe disapproves of slavery).</li>
  <li>Effective <b>January 1, 1863</b>. Only in areas in rebellion. Refugees are accepted; many join the army.</li></ul>
  <h3>The turning points and the end</h3>
  <ul><li><b>Gettysburg (July 1863)</b>: Lee's invasion of Pennsylvania; largest battle in North America; the South never comes north again.</li>
  <li><b>Vicksburg (July 1863)</b>: Grant controls the Mississippi; the South is cut in two; the day after Gettysburg.</li>
  <li><b>Grant</b>: war of attrition (\"Butcher of Men\"). <b>Sherman</b>: March to the Sea (1864), terror.</li>
  <li><b>Appomattox: April 9, 1865</b>. <b>Lincoln assassinated: April 14, 1865</b>.</li>
  <li><b>Juneteenth: June 19, 1865</b>: General Granger in Galveston, Texas; more than 2½ years after the Proclamation.</li></ul>`}
];

/* ---------------- Index card: default suggested content ---------------- */
CARD_DEFAULT = `FRONT
1787 Constitution: 3/5 (seats + electors + taxes) · slave trade protected until 1808 (max $10) · fugitive clause (Art. IV)
Federalists: Hamilton, Adams, Jay · strong center, loose, UK, industry, NE
Anti-Federalists: Jefferson, Monroe, P. Henry, Mason · states, strict, France, agriculture, S + W
Convention: Martin (tax the trade) · Rutledge ("interest alone") · Ellsworth (each state) · Pinckney (SC refuses) · Franklin ("with all its faults")
Everyday resistance: slow, sick, tools, culture, reading · extreme: defiance, arson, escape, revolt
Turner 1831 VA (enslaved) · Brown 1859 Harpers Ferry (white, arsenal) · Tubman (UGRR)
ACS 1816 → Liberia/Monrovia (Clay, Marshall, Jackson) · Walker 1829 · Liberator 1831 · AASS 1833
Moral suasion · non-resistants · gag rule 1836–44 (JQ Adams) · Lovejoy 1837 · Penn. Hall 1838
Grimké (A. 1837; S. 1838) vs Beecher · Seneca Falls 1848 (Stanton, Mott) · Truth 1851 · 1840 split → Liberty Party (Birney)
Douglass: Narrative 1845 · Columbian Orator · "pit, no ladder" · write his own pass · July 4, 1852
Fitzhugh 1854: against liberty/equality

BACK
6 factors: politics · states' rights (10th Am.) · nullification · sectionalism · industrialization · N/S economy → SLAVERY
Nullification 1832–33: 1828 tariff · Calhoun · Jackson + compromise tariff
MO 1820: MO slave, ME free, 36°30' · 1850: CA free, pop. sov., fugitive law + · K-N 1854: cancels MO → Bleeding Kansas
Dred Scott 1857 (Taney): not a citizen · Congress can't exclude → MO unconstitutional
1858 L-D: House divided · machinery · Freeport (local police)
1860: Lincoln R (not in territories, tariffs) · Douglas ND (pop. sov.) · Breckinridge SD (slaveholders' rights) · Bell CU (Constitution, Union, laws)
SC Dec. 1860 · 7 states in 3 months
Sumter Apr. 12, 1861 (food) · VA → Richmond · Bull Run July 1861 · Anaconda
Antietam Sept. 17, 1862 → Proclamation (Jan. 1, 1863, rebel areas) · Seward: wait
Gettysburg July 1863 (Lee) · Vicksburg July 1863 (Grant, Mississippi)
Sherman 1864 · Appomattox Apr. 9, 1865 · Lincoln † Apr. 14 · Juneteenth June 19, 1865 (Granger, Galveston)`;

} /* end if (LANG === "en") */
