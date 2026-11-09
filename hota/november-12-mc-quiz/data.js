/* =====================================================================
   HOTA · Interro à choix multiple du 12 novembre
   Matière : guide d'étude « Esclavage et Reconstruction » + diapos U2L6–L8.
   All course content lives in this file. To add material later:
   - new written questions: add Q(...) lines (first option = correct answer;
     options are shuffled when shown)
   - new dates: add to CHRONO, people to PEOPLE, quotes to QUOTES,
     vocabulary to LEX, review notes to NOTES
   ===================================================================== */

let TOPICS = {
  const: { n: "La Constitution et l'esclavage (1787)", u: "Guide · Partie 1" },
  abo: { n: "Le mouvement abolitionniste (1810–1850)", u: "Guide · Partie 2" },
  comp: { n: "Les compromis et les crises politiques", u: "Guide · Partie 3" },
  dred: { n: "Dred Scott c. Sandford (1857)", u: "Guide · Partie 3" },
  elec: { n: "Lincoln-Douglas (1858) et l'élection de 1860", u: "Guide · Partie 3" },
  war: { n: "La guerre civile et l'émancipation (1861–1865)", u: "Guide · Partie 4" },
  rec1: { n: "Reconstruction présidentielle et justice", u: "Guide · Partie 5 · Diapos" },
  rec2: { n: "Reconstruction radicale (1866–1877)", u: "Guide · Partie 5 · Diapos" },
  klan: { n: "Le Klan, le backlash et la fin de la Reconstruction", u: "Guide · Partie 5 · Diapos" },
  bonus: { n: "Bonus : au-delà du guide", u: "Hors du guide" },
  chrono: { n: "Chronologie", u: "Généré", gen: 1 },
  pers: { n: "Personnages", u: "Généré", gen: 1 },
  cit: { n: "Qui a dit ça ?", u: "Généré", gen: 1 },
  lex: { n: "Vocabulaire", u: "Généré", gen: 1 }
};

const BANK = [];
function Q(t, q, o, e, w) { BANK.push({ t, q, o, e, w }); }

Q("const","Selon le compromis des trois cinquièmes (article I, section 2, clause 3), comment une personne en esclavage était-elle comptée dans le recensement ?",
 ["Comme les trois cinquièmes d'une personne, pas une entière","Comme une personne entière, égale à un citoyen libre de l'époque","Comme rien : les personnes en esclavage étaient exclues","Comme les deux cinquièmes d'une personne, pour les impôts"],
 "La Constitution ajoute au nombre de personnes libres « three fifths of all other Persons ». Cinq personnes en esclavage comptaient donc comme trois personnes libres.",
 [null,"C'est ce que voulait le Sud pour avoir encore plus de représentants. Le compromis a coupé la poire en deux.","C'est ce que voulait le Nord. Le compromis est un entre-deux.","Le chiffre est trois cinquièmes, pas deux."]);
Q("const","Le recensement déterminait toutes ces choses SAUF une. Laquelle ?",
 ["Le nombre de sénateurs de chaque État","Le nombre de représentants à la Chambre","Le nombre de grands électeurs pour la présidentielle","Le montant des impôts directs au gouvernement fédéral"],
 "Chaque État a deux sénateurs, quelle que soit sa population. Le recensement fixait (1) les représentants, (2) les grands électeurs et (3) les impôts directs.",
 [null,"C'est le premier effet du recensement.","Les grands électeurs dépendent du nombre de représentants, donc du recensement.","Les impôts directs étaient répartis selon la population."]);
Q("const","Quel était le principal avantage du compromis des trois cinquièmes pour les États du Sud ?",
 ["Plus de sièges à la Chambre et plus de grands électeurs","Une facture d'impôts directs plus légère pour chaque État","Un plan de fin progressive de l'esclavage dans le pays","Le contrôle du Sénat grâce à des sénateurs en plus"],
 "Compter les personnes en esclavage (même aux 3/5) augmentait la population officielle du Sud, donc ses sièges et ses grands électeurs, alors que ces personnes ne pouvaient pas voter.",
 [null,"C'est l'inverse : être compté augmentait aussi les impôts directs du Sud.","Le compromis protégeait l'esclavage, il ne prévoyait aucune abolition.","Le Sénat ne dépend pas de la population : deux sénateurs par État."]);
Q("const","Quel « prix » le Sud payait-il pour le compromis des trois cinquièmes ?",
 ["Il payait plus d'impôts directs, car ces personnes étaient comptées","Il perdait des sièges à la Chambre au profit des États du Nord","Il devait cesser immédiatement d'importer des personnes en esclavage","Il ne pouvait plus participer à l'élection du président"],
 "Le Sud paie plus d'impôts… mais obtient une plus grande représentation à la Chambre.",
 [null,"Le Sud gagnait des sièges, il n'en perdait pas.","La traite était protégée jusqu'en 1808 par une autre clause.","Ses grands électeurs augmentaient grâce au compromis."]);
Q("const","Que dit l'article I, section 9, clause 1 (la clause de la traite) ?",
 ["Le Congrès ne peut pas interdire l'importation de personnes en esclavage avant 1808","Les personnes en esclavage qui s'échappent doivent être rendues à leurs propriétaires","Les personnes en esclavage comptent pour trois cinquièmes d'une personne au recensement","L'esclavage est interdit au nord de la ligne 36°30' du territoire de la Louisiane"],
 "Cette clause protège la traite (« Migration or Importation of such Persons ») jusqu'en 1808, avec une taxe maximale de 10 dollars par personne.",
 [null,"C'est l'article IV, section 2, clause 3.","C'est l'article I, section 2, clause 3.","C'est le compromis du Missouri (1820), pas la Constitution."]);
Q("const","Que dit l'article IV, section 2, clause 3 (la clause des esclaves fugitifs) ?",
 ["Une personne « tenue au service » qui fuit dans un autre État doit être rendue","Le Congrès peut taxer l'importation d'esclaves jusqu'à 10 dollars par personne","Chaque nouvel État décide par un vote populaire s'il autorise l'esclavage","Les personnes en esclavage ont le droit de racheter leur liberté à leur maître"],
 "Même dans un État libre, une personne échappée « shall be delivered up » à son propriétaire. Les États libres ne pouvaient donc pas protéger les fugitifs.",
 [null,"C'est l'article I, section 9.","C'est la souveraineté populaire (1850-1854), pas la Constitution de 1787.","La Constitution ne dit rien de tel."]);
Q("const","Le mot « esclavage » apparaît-il dans la Constitution de 1787 ?",
 ["Non : seuls des euphémismes comme « other Persons » apparaissent","Oui, il est nommé dans le préambule, à côté de la liberté","Oui, il apparaît dans le dixième amendement sur les pouvoirs des États","Oui, il apparaît dans la Déclaration des droits comme institution protégée"],
 "Les rédacteurs ont évité le mot tout en protégeant l'institution, que l'on appelait « l'institution particulière » (the peculiar institution).",
 [null,"Le préambule parle de justice et de liberté, jamais d'esclavage.","Le dixième amendement parle des pouvoirs réservés aux États.","La Déclaration des droits ne mentionne pas l'esclavage."]);
Q("const","Laquelle de ces affirmations N'est PAS une protection de l'esclavage dans la Constitution de 1787 ?",
 ["Une règle imposant à chaque État d'abolir l'esclavage en 1808","Le compromis des trois cinquièmes, qui augmentait la représentation du Sud","La clause de la traite, qui retardait toute interdiction jusqu'en 1808","La clause des esclaves fugitifs, qui exigeait de rendre les évadés"],
 "1808 est seulement la date avant laquelle le Congrès ne pouvait pas interdire l'importation. La Constitution n'a jamais imposé la fin de l'esclavage lui-même.",
 [null,"C'est bien une protection : il augmentait le pouvoir politique du Sud.","C'est bien une protection : le Congrès ne pouvait pas interdire la traite avant 1808.","C'est bien une protection : les fugitifs devaient être rendus."]);
Q("const","Que s'est-il passé avec l'importation d'esclaves en 1808 ?",
 ["Le Congrès a pu l'interdire, mais le commerce intérieur a continué","L'esclavage a été aboli dans l'ensemble des États-Unis","L'interdiction a été reportée de vingt ans par le Congrès","Le recensement a cessé de compter les personnes en esclavage comme des personnes"],
 "L'interdiction ne mettait fin qu'à l'importation depuis l'étranger. Des personnes continuaient à être vendues d'un État à l'autre.",
 [null,"L'esclavage a duré jusqu'en 1865.","Le Congrès a au contraire voté l'interdiction.","Le compromis des trois cinquièmes est resté en vigueur jusqu'à la guerre."]);
Q("const","Quels États voulaient que les personnes en esclavage soient comptées entièrement pour la représentation ?",
 ["Les États du Sud, pour gagner plus de sièges à la Chambre","Les États du Nord, pour limiter le pouvoir des propriétaires","Seulement les États du Centre, qui avaient peu d'esclaves","Aucun État : les rédacteurs voulaient tous les exclure du décompte"],
 "Le Sud voulait le plus de représentants possible (donc compter tout le monde) mais payer le moins d'impôts. Les trois cinquièmes sont le milieu entre les deux positions.",
 [null,"Le Nord ne voulait pas que ces personnes augmentent le pouvoir du Sud.","Le débat opposait surtout le Nord et le Sud.","Le compromis a justement été négocié parce que le Sud le voulait."]);
Q("const","Que désigne « l'institution particulière » (the peculiar institution) ?",
 ["L'esclavage, nommé par un euphémisme plutôt que par son vrai nom","Le collège électoral, qui donnait plus d'influence au Sud","Le Sénat, où chaque État a deux membres quelle que soit sa taille","Le recensement, qui comptait la population du pays tous les dix ans"],
 "« L'institution particulière » était un euphémisme pour l'esclavage, comme les « other Persons » et « Person held to Service or Labour » de la Constitution.",
 [null,"Le collège électoral est une autre institution.","Le Sénat n'a jamais porté ce nom.","Le recensement est un décompte, pas une institution."]);
Q("const","Quelle clause a laissé l'importation de personnes en esclavage continuer vingt ans de plus ?",
 ["La clause de la traite, qui interdisait toute prohibition avant 1808","Le compromis des trois cinquièmes, qui fixait le décompte des personnes","La clause des esclaves fugitifs, qui exigeait de rendre les évadés","La clause de suprématie, qui faisait du droit fédéral la loi suprême"],
 "La clause de la traite (article I, section 9) empêchait le Congrès d'interdire l'importation avant 1808, vingt ans après 1787.",
 [null,"Cette clause portait sur la représentation et les impôts, pas sur la traite.","Cette clause concerne les personnes qui s'échappent.","Cette clause concerne l'autorité du droit fédéral."]);
Q("const","Quelle affirmation soutient le mieux l'idée que la Constitution n'a pas créé un gouvernement juste ?",
 ["Elle protégeait l'esclavage par les clauses des trois cinquièmes, de la traite et des fugitifs","Elle obligeait chaque État à mettre fin à l'esclavage vingt ans après sa ratification","Elle permettait aux personnes en esclavage de voter dans les États du Sud une fois comptées","Elle abolissait l'esclavage dans les États du Nord et le laissait légal dans le Sud"],
 "Ces trois clauses sont la principale preuve que les rédacteurs protégeaient l'esclavage, même sans écrire le mot.",
 [null,"La Constitution ne fixait aucune date pour mettre fin à l'esclavage.","Les personnes en esclavage ne pouvaient pas voter.","La Constitution n'a aboli l'esclavage nulle part."]);
Q("abo","Que voulait l'American Colonization Society (fondée en 1816) ?",
 ["Une abolition graduelle et l'envoi des Noirs libres en Afrique (Liberia)","L'abolition immédiate et l'égalité raciale dans le pays tout entier","La protection de l'esclavage dans tous les nouveaux territoires de l'Ouest","La création d'un État noir séparé au Texas pour les personnes libérées"],
 "Sa capitale, Monrovia, porte le nom du président James Monroe. L'idée de fond : l'Amérique est une société blanche.",
 [null,"C'est la position des abolitionnistes immédiats des années 1830.","Ce n'est pas son but.","Le projet visait l'Afrique."]);
Q("abo","Pourquoi la plupart des Afro-Américains libres s'opposaient-ils à la colonisation ?",
 ["Ils se voyaient comme des Américains et refusaient d'être envoyés en Afrique","Ils approuvaient l'esclavage et voulaient qu'il continue dans le Sud","Ils trouvaient la traversée de l'Atlantique beaucoup trop coûteuse","Ils préféraient s'installer au Canada plutôt que de partir pour l'Afrique occidentale"],
 "En 1817, environ 3 000 Noirs libres de Philadelphie se sont réunis pour affirmer qu'ils étaient Américains.",
 [null,"Ils étaient contre l'esclavage.","Leur objection était de principe.","Certains l'ont fait, mais ce n'est pas la raison principale."]);
Q("abo","Quelle idée centrale distingue l'abolitionnisme « immédiat » des années 1830 de la colonisation ?",
 ["L'esclavage est un péché à abolir tout de suite, et les Noirs sont égaux","L'esclavage doit finir progressivement et les Noirs doivent quitter le pays","L'esclavage relève des droits des États, et le Congrès ne peut pas y toucher","L'esclavage disparaîtra tout seul avec le développement industriel du Sud"],
 "Les abolitionnistes immédiats voulaient aussi combattre le racisme. La question essentielle de la leçon : quels étaient les points de vue divers parmi les abolitionnistes ?",
 [null,"C'est la position des colonisateurs.","C'est un argument proesclavagiste.","Ce n'est pas la thèse des abolitionnistes."]);
Q("abo","Qui a publié l'Appeal en 1829, appelant les Noirs à résister à l'esclavage ?",
 ["David Walker","William Lloyd Garrison","Frederick Douglass","Theodore Weld"],
 "Walker, Noir libre de Boston, a écrit un texte radical qui a inquiété le Sud.",
 [null,"Garrison lance The Liberator en 1831.","Douglass publie son Narrative en 1845.","Weld est un abolitionniste blanc des années 1830, auteur de pamphlets."]);
Q("abo","Quel journal William Lloyd Garrison a-t-il lancé en 1831, avec les mots « I will be heard » ?",
 ["The Liberator","The North Star","Uncle Tom's Cabin","The Appeal"],
 "Garrison appelait la Constitution un « pacte avec la mort » à cause de ses protections de l'esclavage. Il voulait dissoudre l'Union, ce que la plupart des abolitionnistes rejetaient.",
 [null,"C'est le journal de Frederick Douglass (1847).","C'est un roman de Harriet Beecher Stowe (1852).","C'est le texte de David Walker (1829)."]);
Q("abo","Qu'est-ce que la « persuasion morale » (moral suasion) utilisée par l'American Anti-Slavery Society (1833) ?",
 ["Convaincre le public que l'esclavage est un péché, avec des pamphlets, sans violence","Un soulèvement armé organisé contre les propriétaires, pour en finir par la force","Récolter de l'argent dans le Nord pour racheter la liberté des esclaves un par un","Fonder un nouveau parti politique pour gagner des élections et voter des lois"],
 "La société comptait environ 100 000 membres à la fin des années 1830. Beaucoup de « non-résistants » étaient pacifistes.",
 [null,"Elle excluait la violence.","Ce n'est pas la méthode décrite.","Le Liberty Party est un projet distinct, né de la scission de 1840."]);
Q("abo","Quel est le titre du récit autobiographique de Frederick Douglass (1845) et que prononce-t-il à Rochester en 1852 ?",
 ["Narrative of the Life of Frederick Douglass ; « What to the Slave is the Fourth of July? »","The Liberator ; le discours « I have a dream » prononcé à Washington en 1963","Uncle Tom's Cabin ; la Déclaration de sentiments lue par des militantes des droits des femmes à Seneca Falls","The Appeal ; l'adresse de Gettysburg prononcée par Lincoln en novembre 1863"],
 "Douglass, né en esclavage, s'est échappé et est devenu l'un des plus grands orateurs et écrivains abolitionnistes. En 1852, il demande ce que la fête nationale signifie pour une personne asservie.",
 [null,"The Liberator est le journal de Garrison, et « I have a dream » date de 1963.","Uncle Tom's Cabin est de Stowe.","L'Appeal est de Walker, et Gettysburg est un discours de Lincoln (1863)."]);
Q("abo","Quel rôle Harriet Tubman a-t-elle joué dans le mouvement abolitionniste ?",
 ["Elle a fui l'esclavage, puis guidé d'autres personnes par le Chemin de fer souterrain","Elle a écrit le roman à succès Uncle Tom's Cabin, lu dans tout le Nord","Elle a dirigé l'attaque armée contre l'arsenal fédéral de Harpers Ferry, en Virginie, en 1859","Elle a fondé l'American Colonization Society pour envoyer les Noirs en Afrique"],
 "Le Chemin de fer souterrain était un réseau secret d'aide aux fugitifs.",
 [null,"C'est Harriet Beecher Stowe.","C'est John Brown (1859).","Cette société date de 1816 et défendait un autre projet."]);
Q("abo","Quel effet Uncle Tom's Cabin (Harriet Beecher Stowe, 1852) a-t-il eu ?",
 ["Un best-seller qui a montré l'horreur de l'esclavage à un large public du Nord","Il a été interdit dans tout le Nord, si bien que très peu de gens l'ont lu","Il a défendu l'esclavage comme une institution bienveillante pour les esclaves","Il s'est très peu vendu et n'a presque pas changé l'opinion sur l'esclavage"],
 "Le roman a poussé beaucoup de lecteurs du Nord à voir l'esclavage comme un mal moral.",
 [null,"Il a été largement lu dans le Nord.","Il l'a dénoncé.","Il s'est vendu à des centaines de milliers d'exemplaires dès la première année."]);
Q("abo","Qu'était la « gag rule » (règle du bâillon) adoptée en 1836 ?",
 ["Une règle de la Chambre qui écartait automatiquement les pétitions contre l'esclavage","Une loi du Sud qui interdisait aux personnes en esclavage d'apprendre à lire","Une loi qui obligeait les États du Nord à rendre les personnes en esclavage en fuite","Une loi qui interdisait l'importation de personnes en esclavage venues d'Afrique"],
 "Le Nord y a vu une menace pour ses propres libertés (pétition, expression) : l'esclavage menaçait aussi les Blancs libres.",
 [null,"Ce n'est pas la gag rule.","C'est la loi sur les esclaves fugitifs.","Elle ne portait pas sur la traite."]);
Q("abo","Qui étaient Angelina et Sarah Grimké ?",
 ["Des sœurs du Sud devenues abolitionnistes et défenseures des droits des femmes","Deux Noires libres de Philadelphie qui ont mené la lutte contre la colonisation","Deux sœurs qui ont contribué à fonder l'American Colonization Society en 1816","Deux sœurs qui ont aidé à rédiger la Déclaration d'indépendance en 1776"],
 "Elles ont lié l'abolition à l'égalité des sexes, ce qui a conduit plus tard à Seneca Falls (1848).",
 [null,"Ce n'est pas leur histoire.","Elles étaient abolitionnistes.","Ce n'est pas elles."]);
Q("abo","Qui était John Brown, et que s'est-il passé à Harpers Ferry en 1859 ?",
 ["Un abolitionniste blanc qui a attaqué un arsenal fédéral pour armer des esclaves","Le politicien du Sud devenu président de la Confédération en 1861","Le juge de la Cour suprême qui a rédigé l'opinion majoritaire de Dred Scott","Un abolitionniste noir libre qui a quitté l'Amérique pour s'installer au Liberia"],
 "L'attaque a échoué et Brown a été pendu, un an avant l'élection de 1860.",
 [null,"C'est Jefferson Davis.","C'est Roger Taney.","Brown était un abolitionniste blanc."]);
Q("abo","Comment William Lloyd Garrison a-t-il qualifié la Constitution, et pourquoi ?",
 ["« Un pacte avec la mort », parce qu'elle protégeait l'esclavage dans l'Union","« Une maison divisée », parce qu'elle séparait le Nord et le Sud","« Une déclaration des droits pour tous », parce qu'elle protégeait la liberté d'expression","« Une mesure de guerre juste et nécessaire », parce qu'elle servait la guerre"],
 "Garrison a appelé la Constitution « un pacte avec la mort » (a covenant with death) et voulait dissoudre l'Union plutôt que de la partager avec les esclavagistes.",
 [null,"« Une maison divisée » est une expression de Lincoln en 1858.","Garrison pensait qu'elle protégeait l'esclavage, pas les droits.","Cette expression vient de la Proclamation d'émancipation."]);
Q("abo","En quoi l'American Anti-Slavery Society (1833) différait-elle de la Colonization Society ?",
 ["Elle exigeait l'abolition immédiate et l'égalité plutôt que le départ vers l'Afrique","Elle soutenait l'abolition graduelle et l'envoi des Noirs libres au Liberia","Elle défendait l'esclavage dans les territoires tout en s'opposant à la traite","Elle préférait les soulèvements armés et refusait pamphlets et pétitions"],
 "La Société voulait l'abolition immédiate et l'égalité dans la république, par la persuasion morale, alors que la Colonization Society (1816) voulait une abolition graduelle et le départ vers l'Afrique.",
 [null,"C'est la description de la Colonization Society.","La Société s'opposait à l'esclavage partout.","Elle utilisait la persuasion morale, avec pamphlets et pétitions, pas la violence."]);
Q("abo","De quoi parlait surtout le discours de Frederick Douglass de 1852, « What to the Slave is the Fourth of July? » ?",
 ["De l'hypocrisie de fêter la liberté alors que des millions de personnes restaient en esclavage","D'un plan détaillé pour envoyer les affranchis dans de nouvelles colonies au Liberia","D'un appel aux États du Sud pour quitter l'Union pacifiquement","D'une défense de la Constitution comme un texte purement esclavagiste"],
 "À Rochester, Douglass demandait pourquoi la nation fêtait la liberté alors que des millions de personnes étaient encore en esclavage.",
 [null,"Douglass s'opposait à la colonisation.","Il ne demandait pas la sécession.","Il ne disait pas cela ; il dénonçait l'hypocrisie de la nation."]);
Q("comp","Quel problème a provoqué le compromis du Missouri (1819-1820) ?",
 ["Le Missouri demandait à entrer comme État esclavagiste, rompant l'équilibre 11 à 11","La Californie demandait à entrer comme État libre après la ruée vers l'or de 1849","Le Kansas était déchiré par des affrontements entre colons pro- et anti-esclavagistes","La Caroline du Sud refusait le tarif fédéral et menaçait de quitter l'Union"],
 "Le Nord s'inquiétait du déséquilibre au Sénat si un 12e État esclavagiste entrait.",
 [null,"C'est le compromis de 1850.","C'est 1854-1856.","C'est la crise de la nullité (1832)."]);
Q("comp","Que prévoyait le compromis du Missouri (1820) ?",
 ["Le Missouri esclavagiste, le Maine libre, et pas d'esclavage au nord de 36°30'","La Californie admise comme État libre, les autres territoires laissés au vote des colons","La souveraineté populaire appliquée à tous les territoires, par vote des colons","Une loi plus sévère sur les esclaves fugitifs, avec des amendes pour les aider"],
 "Le compromis préserve l'équilibre 12/12 au Sénat et trace la ligne 36°30'.",
 [null,"C'est le compromis de 1850.","C'est l'acte Kansas-Nebraska (1854).","C'est le compromis de 1850."]);
Q("comp","Pourquoi la Californie demandait-elle à entrer dans l'Union comme État libre en 1849-1850 ?",
 ["Sa population avait explosé avec la ruée vers l'or après la Cession mexicaine","Elle venait de gagner une guerre contre le Mexique et voulait son propre État","Le Congrès lui avait ordonné de devenir un État libre pour punir le Sud","Ses colons voulaient un État esclavagiste, mais le Congrès a refusé"],
 "Le traité de Guadalupe Hidalgo (1848) a mis fin à la guerre américano-mexicaine. L'entrée d'un État libre de plus brisait l'équilibre au Sénat.",
 [null,"Ce sont les États-Unis qui ont gagné la guerre.","Ce n'est pas le cas.","Elle demandait à entrer comme État libre."]);
Q("comp","Lequel de ces éléments faisait partie du compromis de 1850 ?",
 ["Une loi plus forte sur les esclaves fugitifs","L'annulation du compromis du Missouri","L'interdiction totale de l'esclavage dans l'Ouest","La sécession de la Caroline du Sud"],
 "Compromis de 1850 : Californie État libre ; souveraineté populaire pour le reste de la Cession mexicaine ; loi plus forte sur les esclaves fugitifs.",
 [null,"C'est l'acte Kansas-Nebraska (1854).","Le reste du territoire est laissé à la souveraineté populaire.","C'est décembre 1860."]);
Q("comp","Qu'est-ce que la « souveraineté populaire » (popular sovereignty) ?",
 ["Les habitants d'un territoire votent pour décider s'il sera libre ou esclavagiste","Le Congrès décide séparément pour chaque territoire, par un vote des deux chambres","La Cour suprême tranche le statut de chaque territoire, au cas par cas","Le président décide pour chaque territoire au moment de son admission"],
 "C'est l'idée centrale de Stephen Douglas, appliquée en 1850 puis en 1854.",
 [null,"C'est justement ce que la souveraineté populaire évite.","Dred Scott (1857) limitera au contraire le pouvoir des territoires.","Ce n'est pas le cas."]);
Q("comp","Que prévoyait la loi sur les esclaves fugitifs (Fugitive Slave Act) de 1850 ?",
 ["Les citoyens devaient aider à capturer les fugitifs ; l'accusé n'avait pas de jury","Les fugitifs devenaient automatiquement libres une fois arrivés dans le Nord","Seuls les États du Sud devaient la respecter, tandis que le Nord en était exempté","Elle mettait fin à la traite et interdisait toute importation de personnes asservies"],
 "Des commissaires fédéraux jugeaient les cas et touchaient plus (10 dollars) s'ils décidaient que la personne était esclave que s'ils la libéraient (5 dollars). Aider un fugitif pouvait coûter 1 000 dollars d'amende et de la prison.",
 [null,"C'est l'inverse.","Elle s'appliquait aussi aux États libres.","Elle ne portait pas sur la traite."]);
Q("comp","Quel effet la loi sur les esclaves fugitifs de 1850 a-t-elle eu dans le Nord ?",
 ["Elle a indigné beaucoup de Nordistes et renforcé l'opposition à l'esclavage","Elle a calmé le débat sur l'esclavage en satisfaisant le Nord et le Sud","Elle a rendu la plupart des Nordistes plus tolérants envers l'esclavage du Sud","Elle n'a eu presque aucun effet sur l'opinion publique dans le Nord"],
 "Elle obligeait le Nord à participer à l'esclavage. Beaucoup de personnes libres du Nord ont aussi été menacées d'être capturées.",
 [null,"Elle l'a au contraire enflammé.","L'opposition a augmenté.","Elle a eu un impact politique et moral important."]);
Q("comp","Qu'a fait l'acte Kansas-Nebraska (1854) ?",
 ["Il a en pratique annulé le compromis du Missouri, par la souveraineté populaire","Il a fait entrer le Kansas et le Nebraska tout de suite comme États libres","Il a interdit l'esclavage partout au Nebraska et dans toutes les plaines du Nord","Il a mis fin à la traite et fermé les derniers ports esclavagistes du Sud"],
 "Le Kansas et le Nebraska étaient au nord de 36°30', donc fermés à l'esclavage avant 1854. La loi, soutenue par Stephen Douglas, a aussi contribué à la naissance du Parti républicain.",
 [null,"Le Kansas n'entre dans l'Union qu'en 1861.","Il laissait le choix aux habitants.","La traite est interdite depuis 1808."]);
Q("comp","Qu'est-ce que « Bleeding Kansas » ?",
 ["Violences et fraudes électorales au Kansas entre colons pro- et anti-esclavagistes","Une grande bataille de la Guerre civile livrée au Kansas dès la première année","Une épidémie mortelle qui a frappé les colons du Kansas et du Nebraska pendant l'année 1854","Un journal abolitionniste imprimé au Kansas et attaqué par les sudistes"],
 "C'est la conséquence directe de la souveraineté populaire : chaque camp voulait gagner le vote sur l'esclavage.",
 [null,"Elle a lieu avant la guerre (1854-1856).","Ce n'est pas une épidémie.","Ce n'est pas un journal."]);
Q("comp","Mettez dans l'ordre : compromis du Missouri, acte Kansas-Nebraska, compromis de 1850, décision Dred Scott.",
 ["Missouri → 1850 → Kansas-Nebraska → Dred Scott","1850 → Missouri → Dred Scott → Kansas-Nebraska","Kansas-Nebraska → Missouri → 1850 → Dred Scott","Missouri → Kansas-Nebraska → 1850 → Dred Scott"],
 "Chaque étape a détruit un peu plus la solution précédente : la ligne 36°30', puis la souveraineté populaire, puis la décision de la Cour.",
 [null,"Le compromis du Missouri est le plus ancien (1820).","Kansas-Nebraska (1854) vient après 1850.","1850 vient avant 1854."]);
Q("comp","Pourquoi l'équilibre entre États libres et esclavagistes comptait-il tant au Sénat ?",
 ["Avec deux sénateurs par État, un camp pouvait bloquer les lois sur l'esclavage","Les sièges du Sénat étaient répartis selon la population de chaque État","Le Sénat choisissait le président quand les grands électeurs étaient à égalité","Le Sénat contrôlait seul le recensement et les impôts directs"],
 "Chaque État a deux sénateurs quelle que soit sa population : le camp avec le plus d'États pouvait bloquer les lois sur l'esclavage. D'où l'importance de l'admission conjointe du Missouri (esclavagiste) et du Maine (libre).",
 [null,"Les sièges du Sénat ne dépendent pas de la population.","C'est un rôle de la Chambre, pas du Sénat.","Le recensement et les impôts directs ne relevaient pas du Sénat."]);
Q("comp","Pourquoi la loi sur les esclaves fugitifs de 1850 a-t-elle fâché des Nordistes qui n'étaient pas abolitionnistes ?",
 ["Elle forçait les citoyens à aider à capturer les fugitifs, sans jury pour l'accusé","Elle interdisait tous les journaux et pamphlets antiesclavagistes imprimés au Nord","Elle faisait payer par les États du Nord les dettes des esclavagistes du Sud","Elle étendait la ligne 36°30' à toute la Cession mexicaine"],
 "La loi faisait de chaque citoyen un acteur de l'esclavage et refusait jury et témoignage aux accusés, ce qui a retourné beaucoup de Nordistes modérés contre l'esclavage.",
 [null,"La loi ne portait pas sur les journaux.","Elle n'avait rien à voir avec des dettes.","La ligne 36°30' date du compromis de 1820, pas de la loi de 1850."]);
Q("comp","Comment l'acte Kansas-Nebraska a-t-il contribué à créer le Parti républicain ?",
 ["La colère d'avoir rouvert des terres fermées à l'esclavage a poussé ses opposants à former un parti","Des planteurs du Sud l'ont formé pour défendre la ligne du compromis du Missouri contre tout changement","Des banquiers du Nord l'ont formé pour obtenir des tarifs plus bas et une banque nationale","D'anciens Whigs l'ont formé pour rétablir et renforcer la loi sur les esclaves fugitifs"],
 "En annulant l'interdiction du compromis du Missouri, la loi ouvrait le Kansas et le Nebraska à l'esclavage par la souveraineté populaire. Des opposants du Nord à l'extension de l'esclavage ont formé le Parti républicain en 1854.",
 [null,"Le Parti républicain s'opposait à l'extension de l'esclavage.","Le parti n'était pas fondé sur les banques ou les tarifs.","Le parti s'opposait à l'extension de l'esclavage, pas à son renforcement."]);
Q("dred","Pourquoi Dred Scott affirmait-il qu'il était libre ?",
 ["Il avait vécu dans un État libre et un territoire libre avant de revenir au Missouri","Il avait racheté sa liberté à Mme Emerson plusieurs années avant l'ouverture du procès","Il était né libre en Virginie, puis avait été réduit en esclavage à tort","Le président Lincoln l'avait libéré par un ordre spécial avant le procès"],
 "Il était courant que des personnes emmenées en territoire libre poursuivent leur maître en justice. Fort Snelling était libre à cause du compromis du Missouri.",
 [null,"Mme Emerson a refusé qu'il achète sa liberté en 1846.","Il est né en esclavage en Virginie vers 1799.","Lincoln n'était pas président en 1857."]);
Q("dred","Qui était le juge en chef de la Cour suprême qui a rédigé la décision majoritaire dans Dred Scott c. Sandford (1857) ?",
 ["Roger B. Taney","Benjamin R. Curtis","John Marshall","Stephen Douglas"],
 "La décision a été prise par 7 voix contre 2.",
 [null,"Curtis a rédigé l'opinion dissidente.","Marshall est mort en 1835.","Douglas était sénateur, pas juge."]);
Q("dred","Selon l'opinion majoritaire de Taney, une personne noire descendant d'esclaves pouvait-elle être citoyenne des États-Unis ?",
 ["Non, et elle n'avait donc pas le droit de saisir les tribunaux fédéraux","Oui, mais seulement si elle était née dans un État libre du Nord","Oui, si elle avait vécu en territoire libre comme Fort Snelling","Seulement si le Congrès votait une loi lui accordant la citoyenneté"],
 "Taney a écrit que les Noirs n'étaient pas inclus dans le « peuple » de la Constitution.",
 [null,"La décision refuse la citoyenneté dans tous les cas.","C'est l'argument de Scott, rejeté par la Cour.","La Cour a posé que c'était une question constitutionnelle."]);
Q("dred","Que disait l'opinion de Taney au sujet de l'esclavage dans les territoires ?",
 ["Le Congrès ne pouvait pas l'exclure, rendant le compromis du Missouri inconstitutionnel","Le Congrès pouvait l'interdire dans tout territoire, par un vote à la majorité","Les colons pouvaient encore voter pour l'interdire avant que leur territoire devienne un État","L'esclavage était désormais interdit dans tous les territoires des États-Unis"],
 "Les personnes asservies étaient traitées comme une propriété protégée par la Constitution. Cela menaçait aussi la souveraineté populaire.",
 [null,"C'est le contraire.","C'est la doctrine de Freeport de Douglas, qui essaie de contourner la décision.","C'est le contraire."]);
Q("dred","Quelle était la position du juge Benjamin R. Curtis dans son opinion dissidente ?",
 ["Des Noirs libres étaient citoyens dans certains États ; le Congrès régulait les territoires","Il soutenait pleinement Taney sur la citoyenneté noire et sur les territoires","Il soutenait que l'esclavage devait être aboli dans tous les États par amendement","Il soutenait que la Cour aurait dû refuser de juger l'affaire de Dred Scott dès le tout départ"],
 "Pour Curtis, le compromis du Missouri était donc constitutionnel et Scott pouvait être citoyen.",
 [null,"Il était dissident.","Sa dissidence portait sur la citoyenneté et sur le pouvoir du Congrès.","Il a rédigé une opinion sur le fond."]);
Q("dred","Comment Frederick Douglass a-t-il réagi à la décision Dred Scott ?",
 ["Il l'a rejetée comme une perversion de la Constitution et a juré de continuer","Il l'a acceptée comme une lecture juste de la Constitution et a appelé au calme","Il a perdu espoir en l'Amérique et quitté le pays pour s'installer au Liberia","Il a demandé aux États du Nord de faire sécession de l'Union immédiatement"],
 "Douglass faisait partie des réponses antiesclavagistes, avec Lincoln.",
 [null,"Il l'a combattue.","Il s'opposait à la colonisation.","Ce n'est pas sa position."]);
Q("dred","Comment Abraham Lincoln a-t-il répondu à la décision Dred Scott (1857) ?",
 ["Il a contesté Taney : « tous les hommes sont créés égaux » inclut aussi les Noirs","Il a salué la décision de Taney comme sage et a demandé au Nord de l'accepter","Il a refusé de la respecter et appelé à la résistance armée dans les territoires","Il a demandé aux républicains de dissoudre leur parti et de rejoindre les démocrates"],
 "Lincoln craignait que cette décision fasse partie d'une « machinerie » qui rendrait l'esclavage légal dans tout le pays. Il l'a développé dans le discours « House Divided » (1858).",
 [null,"Il s'y opposait.","Il voulait la changer par des moyens politiques et électoraux.","Il en devenait un chef."]);
Q("dred","Pourquoi la décision Dred Scott a-t-elle approfondi la division du pays ?",
 ["Elle a ouvert tous les territoires à l'esclavage et bloqué tout compromis","Elle a aboli l'esclavage dans tous les territoires et réjoui le Nord","Elle a donné la citoyenneté à tous les Noirs américains et irrité le Sud","Elle a été acceptée par le Nord et le Sud comme un règlement définitif"],
 "La décision a aussi renforcé le Parti républicain et la carrière de Lincoln.",
 [null,"Elle a fait le contraire.","Elle a refusé la citoyenneté aux Noirs.","Le Nord l'a violemment rejetée."]);
Q("dred","Pourquoi Taney a-t-il déclaré le compromis du Missouri inconstitutionnel ?",
 ["Le Congrès ne pouvait pas interdire l'esclavage dans les territoires, donc la ligne 36°30' était nulle","Le Missouri n'avait jamais été admis comme État dans l'Union en vertu du compromis","Seul le président, et non le Congrès, pouvait décider du statut d'un territoire","La loi sur les esclaves fugitifs de 1850 l'avait déjà remplacé comme loi fédérale"],
 "Taney a jugé que le Congrès n'avait aucun pouvoir d'exclure l'esclavage des territoires : l'interdiction du compromis du Missouri au nord de 36°30' ne pouvait donc tenir.",
 [null,"Le Missouri est bien entré dans l'Union, comme État esclavagiste, en 1821.","La décision disait que le Congrès n'avait pas ce pouvoir ; elle ne le donnait pas au président.","La loi de 1850 n'a pas remplacé le compromis du Missouri."]);
Q("dred","Quelles deux questions le procès de Dred Scott soulevait-il ?",
 ["Vivre en territoire libre le rendait-il libre, et pouvait-il agir en justice comme citoyen","Le Congrès pouvait-il taxer les esclavagistes du Missouri, et l'Illinois pouvait-il l'extrader","Le président pouvait-il le libérer par ses pouvoirs de guerre, et pouvait-il voter","La Virginie pouvait-elle le réclamer, et Fort Snelling faisait-il partie de l'Illinois"],
 "Scott soutenait que ses années en Illinois et à Fort Snelling, deux lieux libres, l'avaient rendu libre. La Cour devait aussi décider si un descendant de personnes en esclavage pouvait agir en justice comme citoyen.",
 [null,"L'affaire ne portait ni sur les impôts ni sur l'extradition.","Les pouvoirs de guerre viennent plus tard, en 1863.","L'affaire portait sur son séjour en lieux libres et sur la citoyenneté."]);
Q("elec","Pour quel poste Lincoln et Douglas se sont-ils affrontés lors des débats de 1858 ?",
 ["Un siège de sénateur de l'Illinois","La présidence des États-Unis en 1858","Le poste de gouverneur de l'Illinois","Un siège à la Cour suprême des États-Unis"],
 "Il y a eu sept débats en plein air qui ont attiré l'attention de tout le pays.",
 [null,"La présidentielle, c'est 1860.","C'était le Sénat des États-Unis.","Ce n'est pas le cas."]);
Q("elec","Quel a été le résultat des débats Lincoln-Douglas de 1858 ?",
 ["Lincoln a perdu le siège, mais les débats l'ont fait connaître dans tout le pays","Lincoln a gagné le siège au Sénat et Douglas a perdu sa place en politique","Douglas s'est retiré de la politique après les débats et n'est jamais revenu au Sénat","Les deux hommes ont été élus et se sont partagé le siège de l'Illinois"],
 "Cette visibilité nationale aide Lincoln à gagner la présidence en 1860.",
 [null,"Douglas a gardé son siège.","Douglas est candidat à la présidence en 1860.","Il n'y avait qu'un siège."]);
Q("elec","Que veut dire Lincoln avec « A house divided against itself cannot stand » (1858) ?",
 ["Le pays ne peut pas rester moitié esclavagiste, moitié libre ; il deviendra l'un ou l'autre","L'Union va bientôt se dissoudre, et il avertit qu'elle ne peut pas être sauvée","Chaque État devrait décider seul s'il autorise l'esclavage, sans aucune intervention du Congrès","Le Nord et le Sud devraient se séparer pacifiquement en deux nations"],
 "Lincoln dit qu'il ne s'attend pas à ce que l'Union soit dissoute, mais qu'elle cessera d'être divisée.",
 [null,"Il dit qu'il ne s'attend pas à la dissolution de l'Union.","C'est plutôt l'idée de Douglas.","C'est le contraire."]);
Q("elec","Qu'est-ce que la « doctrine de Freeport » de Douglas (27 août 1858) ?",
 ["Un territoire pouvait écarter l'esclavage en refusant les lois locales nécessaires","Les territoires devaient accepter l'esclavage après Dred Scott, sans issue légale","Seul le Congrès pouvait interdire l'esclavage dans les territoires, malgré Dred Scott","Les décisions de la Cour suprême devaient être acceptées comme définitives en tout"],
 "« Slavery cannot exist a day or an hour anywhere, unless it is supported by local police regulations. » Douglas a ajouté qu'il n'était pour la dissolution de l'Union en aucune circonstance.",
 [null,"Douglas disait le contraire.","Dred Scott l'interdisait.","Douglas dit que la décision ne change rien en pratique."]);
Q("elec","Selon le résumé fait en classe, quelle est la différence essentielle entre Lincoln et Douglas ?",
 ["Douglas défend la souveraineté populaire ; Lincoln s'oppose à l'extension de l'esclavage","Douglas réclame l'abolition immédiate partout ; Lincoln réclame la sécession du Sud","Ils étaient d'accord sur l'esclavage et ne divergeaient que sur les tarifs et le rail","Douglas veut protéger l'esclavage au Congrès ; Lincoln veut l'abolition immédiate"],
 "Lincoln n'était pas un abolitionniste immédiat en 1858 : il voulait arrêter l'extension de l'esclavage.",
 [null,"Aucun des deux ne défendait cela.","Ils étaient en désaccord.","Ni l'un ni l'autre ne défendait ces positions."]);
Q("elec","Quel était le principal débat de l'élection de 1860 ?",
 ["L'esclavage, en particulier dans les nouveaux territoires","Les tarifs douaniers et les banques, avant toute autre question","Les conditions de la paix après la guerre avec le Mexique","Le droit de vote des femmes aux élections fédérales"],
 "Les quatre candidats se distinguaient surtout par leur position sur l'esclavage dans l'Ouest.",
 [null,"Les tarifs comptaient, mais ce n'était pas le débat principal.","Elle s'était terminée en 1848.","Ce n'était pas un enjeu électoral."]);
Q("elec","Quel était le programme de Lincoln (républicain) en 1860 ?",
 ["Empêcher l'extension de l'esclavage aux nouveaux territoires, sans l'abolir ailleurs","Abolir l'esclavage dans tous les États de l'Union d'un coup, par amendement","Garantir aux esclavagistes le droit d'emmener des esclaves dans tous les territoires","Laisser les colons voter sur l'esclavage dans chaque territoire et baisser les tarifs"],
 "Lincoln ne proposait pas l'abolition dans le Sud, seulement d'arrêter l'extension de l'esclavage.",
 [null,"Ce n'était pas son programme.","C'est Breckinridge.","C'est Douglas."]);
Q("elec","Quel candidat de 1860 était le démocrate du Sud, défenseur des droits des esclavagistes dans les territoires ?",
 ["John Breckinridge","Stephen Douglas","John Bell","Abraham Lincoln"],
 "Les démocrates se sont divisés : Douglas pour le Nord, Breckinridge pour le Sud.",
 [null,"Douglas était le démocrate du Nord.","Bell était le candidat de l'Union constitutionnelle.","Lincoln était républicain."]);
Q("elec","Pourquoi l'élection de 1860 est-elle souvent considérée comme le « catalyseur final » de la guerre ?",
 ["Lincoln, opposé à l'extension de l'esclavage, a gagné, et le Sud a fait sécession","Lincoln a déclaré la guerre aux États du Sud dès le lendemain de son élection victorieuse","Le candidat sudiste a remporté la présidence et le Nord a fait sécession","L'élection a elle-même aboli l'esclavage dans tous les États du Sud"],
 "La Caroline du Sud fait sécession en décembre 1860, avant même l'investiture de Lincoln. Sept États forment la Confédération en trois mois.",
 [null,"Le conflit commence à Fort Sumter en avril 1861.","Lincoln a gagné.","Elle ne l'a pas aboli."]);
Q("elec","Pourquoi la réponse de Douglas à Freeport l'a-t-elle desservi auprès des démocrates du Sud ?",
 ["Elle suggérait qu'un territoire pouvait exclure l'esclavage malgré Dred Scott","Elle demandait au Congrès d'interdire immédiatement l'esclavage dans tout le pays","Elle rejetait la souveraineté populaire et se rangeait du côté des républicains","Elle approuvait la sécession du Sud si Lincoln gagnait la présidentielle de 1860"],
 "À Freeport, Douglas a dit qu'un territoire pouvait exclure l'esclavage par une « législation hostile », ce qui semblait contourner Dred Scott. Les démocrates du Sud se sont fâchés et le parti s'est divisé en 1860 (Douglas contre Breckinridge).",
 [null,"Douglas n'a jamais réclamé d'interdiction nationale.","Il défendait toujours la souveraineté populaire.","Il disait n'avoir jamais été pour la dissolution de l'Union."]);
Q("elec","Quels candidats ont divisé le Parti démocrate en 1860, aidant Lincoln à gagner ?",
 ["Douglas, démocrate du Nord, et Breckinridge, démocrate du Sud","Douglas, démocrate du Nord, et Bell, de l'Union constitutionnelle","Breckinridge, démocrate du Sud, et Lincoln, républicain","Bell, de l'Union constitutionnelle, et Lincoln, républicain"],
 "Les démocrates se sont divisés : Douglas représentait ceux du Nord et Breckinridge ceux du Sud. L'opposition étant divisée (avec Bell en quatrième candidat), Lincoln l'a emporté.",
 [null,"Bell appartenait à un autre parti, l'Union constitutionnelle.","Lincoln était républicain, pas démocrate.","Aucun des deux n'était démocrate."]);
Q("war","Quel était le premier objectif de guerre de Lincoln en 1861 ?",
 ["Préserver l'Union, sans encore abolir l'esclavage","Abolir immédiatement l'esclavage dans tous les États","Obtenir le droit de vote pour les hommes noirs partout","Acquérir de nouveaux territoires mexicains dans le Sud-Ouest"],
 "Lincoln disait que si une minorité qui perd une élection pouvait quitter l'Union, la démocratie échouait : « ballots are the rightful and peaceful successors of bullets ». En août 1862, il écrit à Horace Greeley que son but principal est de sauver l'Union.",
 [null,"C'est un objectif qui vient plus tard.","Ce n'est pas un objectif de guerre en 1861.","Ce n'est pas le sujet."]);
Q("war","Pourquoi Lincoln ménageait-il les États frontaliers (Maryland, Kentucky, Missouri, Delaware) ?",
 ["Ils avaient l'esclavage mais restaient dans l'Union, et les perdre l'aurait affaiblie","Ils avaient déjà rejoint la Confédération et devaient être repris par la force","C'étaient des États libres dont Lincoln avait besoin pour pouvoir voter le 13e amendement","Ils avaient massivement voté pour Lincoln en 1860 et attendaient une récompense"],
 "Une émancipation trop rapide risquait de les pousser vers la Confédération.",
 [null,"Ils sont restés dans l'Union.","Ils étaient esclavagistes.","Ce n'est pas la raison."]);
Q("war","Quel était le plan de Lincoln pour mettre fin à l'esclavage pendant les deux premières années de la guerre ?",
 ["Une émancipation graduelle par les États, avec indemnisation et colonisation","Une émancipation immédiate de tous, sans indemnisation des propriétaires","Une guerre totale pour ruiner l'économie du Sud jusqu'à la fin de l'esclavage","Un référendum national où chaque électeur trancherait le sort de l'esclavage"],
 "Le plan pour le Delaware (novembre 1861) a échoué même dans un État où l'esclavage était marginal.",
 [null,"C'est ce qu'il adopte à partir de 1862-1863.","Ce n'est pas un plan d'émancipation.","Aucun référendum n'est prévu."]);
Q("war","Qu'est-ce qui a poussé Lincoln vers l'émancipation à l'été 1862 ?",
 ["Des personnes asservies fuyaient vers l'Union, la guerre s'enlisait, il fallait des soldats","La guerre venait de se terminer par une victoire de l'Union, laissant Lincoln libre d'agir","Une victoire écrasante de l'Union à Gettysburg qui lui a montré que le moment était venu","Une demande officielle des dirigeants du Sud de mettre fin à l'esclavage contre la paix"],
 "Le Congrès a aussi agi à l'été 1862 : abolition de l'esclavage à Washington, enrôlement de soldats noirs, libération des esclaves de propriétaires pro-confédérés.",
 [null,"La guerre durait jusqu'en 1865.","Gettysburg a lieu en juillet 1863.","Ce n'est pas le cas."]);
Q("war","Quand la bataille d'Antietam a-t-elle eu lieu, et pourquoi est-elle importante ?",
 ["17 septembre 1862 : une victoire de l'Union qui permet à Lincoln d'annoncer l'émancipation","Du 1er au 3 juillet 1863 : la plus grande bataille de la guerre, en Pennsylvanie","12 avril 1861 : les premiers coups de feu de la guerre, dans la rade de Charleston","9 avril 1865 : la reddition du général Lee face à Grant, qui met fin à la guerre en Virginie"],
 "Antietam (Maryland) a repoussé la première invasion du Nord par Lee. La victoire a aussi réduit le risque d'une intervention britannique ou française.",
 [null,"Ce sont les dates de Gettysburg.","C'est Fort Sumter.","C'est Appomattox."]);
Q("war","Quand la Proclamation d'émancipation est-elle entrée en vigueur, et sur quel pouvoir Lincoln s'appuyait-il ?",
 ["Le 1er janvier 1863, comme commandant en chef, par « mesure de guerre nécessaire »","Le 4 juillet 1863, par un vote des deux chambres du Congrès, le jour de l'Indépendance","Le 18 décembre 1865, à la suite de la ratification du 13e amendement par les États","Le 19 juin 1865, par un jugement de la Cour suprême rendu à la fin de la guerre"],
 "Parce que c'était une mesure de guerre, elle ne visait que les régions en rébellion.",
 [null,"C'est un ordre du président.","Le 13e amendement vient presque trois ans plus tard.","Le 19 juin 1865 est Juneteenth."]);
Q("war","Qu'est-ce que la Proclamation d'émancipation a fait, et que n'a-t-elle PAS fait ?",
 ["Elle a libéré les esclaves des régions rebelles (3,1 millions), mais pas ceux des États frontaliers","Elle a aboli l'esclavage dans tous les États et territoires dès le jour même, y compris à la frontière","Elle a donné la pleine citoyenneté à toutes les personnes libérées, avec le droit de vote","Elle a libéré seulement les personnes asservies dans les États du Nord et la frontière"],
 "Foner : l'émancipation est un processus, pas un événement unique.",
 [null,"L'esclavage n'est aboli partout que par le 13e amendement.","La citoyenneté vient avec le 14e amendement.","Elle visait les régions en rébellion."]);
Q("war","Quelle nouveauté importante la Proclamation introduit-elle pour l'armée de l'Union ?",
 ["Les hommes noirs seraient reçus dans l'armée et la marine ; environ 200 000 y ont servi","Les hommes noirs restaient exclus du service de soldat dans l'armée et la marine","Les hommes noirs ne pouvaient servir que comme cuisiniers et ouvriers derrière le front","Les hommes noirs pouvaient être nommés officiers à la tête de régiments blancs"],
 "Cet apport a joué un rôle critique dans la victoire de l'Union.",
 [null,"Elle change précisément cela.","Ils seront reçus comme soldats.","Le texte ne dit rien de tel."]);
Q("war","Que veut dire Foner par « double émancipation » ?",
 ["Elle a libéré les esclaves et Lincoln lui-même, qui a changé de vues sur l'abolition","Elle a libéré les Noirs du Nord et ceux du Sud exactement au même moment","Elle a libéré les esclaves et retiré au Congrès tout pouvoir sur l'esclavage","Elle a libéré les esclaves et accordé de nouveaux droits légaux aux femmes en 1863"],
 "Après la Proclamation, Lincoln n'a plus parlé publiquement de colonisation. En 1864, il a refusé de la retirer pour obtenir la paix.",
 [null,"Ce n'est pas le sens.","Ce n'est pas le sens de « double ».","Les femmes ne sont pas concernées."]);
Q("war","Quand la bataille de Gettysburg a-t-elle eu lieu, et où ?",
 ["Du 1er au 3 juillet 1863, en Pennsylvanie","Le 17 septembre 1862, dans le Maryland","Le 12 avril 1861, en Caroline du Sud","Le 9 avril 1865, en Virginie"],
 "Lee a envahi la Pennsylvanie pour la deuxième fois et a été repoussé.",
 [null,"C'est Antietam.","C'est Fort Sumter.","C'est Appomattox."]);
Q("war","Pourquoi Gettysburg est-elle considérée comme un tournant de la guerre ?",
 ["L'invasion du Nord par Lee a été repoussée ; le Sud n'a plus jamais envahi en force","Les Confédérés ont pris Washington et forcé l'Union à demander la paix immédiatement","Lincoln y a signé la Proclamation d'émancipation le deuxième jour des combats","La guerre y a pris fin quand Lee a rendu toute son armée au général Grant"],
 "Vicksburg, où Grant a pris le contrôle du Mississippi, est tombée le lendemain, ce qui a coupé le Sud en deux.",
 [null,"Ils ne l'ont jamais prise.","Elle date du 1er janvier 1863.","Elle se termine en avril 1865."]);
Q("war","Comment la Proclamation d'émancipation a-t-elle changé le but de la guerre ?",
 ["La fin de l'esclavage est devenue un but de guerre à côté de la préservation de l'Union","La préservation de l'Union n'était plus un but pour le gouvernement du Nord","La guerre a été déclarée gagnée dès que les esclaves ont été libérés","La guerre est devenue un combat pour donner la citoyenneté complète aux Noirs"],
 "Après janvier 1863, la fin de l'esclavage s'est ajoutée à la préservation de l'Union comme but de guerre, et les hommes noirs ont pu s'enrôler.",
 [null,"L'Union est restée un but central.","La guerre a continué jusqu'en 1865.","La citoyenneté est venue plus tard, avec le 14e amendement."]);
Q("war","Qu'a accompli le 13e amendement que la Proclamation d'émancipation n'avait pas accompli ?",
 ["Il a aboli l'esclavage dans tout le pays, pas seulement dans les régions rebelles","Il a libéré seulement les personnes en esclavage vivant dans les États frontaliers","Il a donné la citoyenneté et le droit de vote à tous les anciens esclaves","Il a annulé la Proclamation et mis fin aux combats de la guerre"],
 "La Proclamation ne couvrait que les régions rebelles. Le 13e amendement (décembre 1865) a mis fin à l'esclavage dans tout le pays, sauf comme punition d'un crime.",
 [null,"Les États frontaliers étaient justement ce que la Proclamation laissait de côté ; l'amendement les couvre.","La citoyenneté vient avec le 14e amendement.","La guerre s'était terminée plus tôt en 1865, et la Proclamation n'a pas été annulée."]);
Q("war","Quelles deux victoires de l'Union ont eu lieu début juillet 1863 ?",
 ["Gettysburg en Pennsylvanie et Vicksburg sur le Mississippi","Antietam dans le Maryland et Fort Sumter en Caroline du Sud","Appomattox en Virginie et Gettysburg en Pennsylvanie","Vicksburg sur le Mississippi et Antietam dans le Maryland"],
 "Gettysburg (1er–3 juillet) a repoussé l'invasion du Nord par Lee, et Vicksburg, sur le Mississippi, est tombée le lendemain face à Grant.",
 [null,"Antietam date de 1862 et Fort Sumter de 1861.","Appomattox date de 1865.","Antietam date de 1862."]);
Q("war","Comment des hommes noirs ont-ils participé à l'effort de guerre de l'Union après la Proclamation ?",
 ["Environ 200 000 ont servi comme soldats et marins dans l'armée et la marine","Seuls quelques milliers ont été admis, et seulement comme cuisiniers de camp","Aucun n'a servi, car l'engagement leur est resté fermé jusqu'en 1865","Plus de deux millions ont servi et ont souvent commandé des régiments blancs"],
 "La Proclamation a permis de recevoir des hommes noirs dans l'armée et la marine, et environ 200 000 y ont servi.",
 [null,"Bien plus que quelques milliers ont servi, comme soldats.","La Proclamation a ouvert l'enrôlement.","Le chiffre est d'environ 200 000, pas de millions."]);
Q("rec1","Que dit la section 1 du 13e amendement (ratifié le 18 décembre 1865) ?",
 ["L'esclavage est interdit, sauf comme punition d'un crime dont une personne est condamnée","L'esclavage est interdit dans tous les cas et pour tous, sans aucune exception","Tous les Noirs nés aux États-Unis deviennent citoyens par cette section","Les hommes noirs ont désormais le droit de vote dans tous les États de l'Union, Nord comme Sud"],
 "L'exception pour crime a permis plus tard des abus (lois de vagabondage, Black Codes). La section 2 donne au Congrès le pouvoir de faire appliquer l'amendement.",
 [null,"Il y a une exception : le crime.","La citoyenneté vient avec le 14e amendement.","Le droit de vote vient avec le 15e amendement."]);
Q("rec1","Quelles étaient les questions pressantes de la Reconstruction selon Foner ?",
 ["Quand réadmettre le Sud, s'il fallait le punir et quels droits donner aux anciens esclaves","Comment financer la dette de guerre et payer les pensions des soldats de l'Union et de leurs veuves","Comment enfin abolir l'esclavage dans les États frontaliers et le Sud occupé","Comment punir le gouvernement de Lincoln pour sa façon de mener la guerre"],
 "La guerre avait mis fin à l'esclavage et réglé la sécession, mais le pays devait être « remis sur pied ».",
 [null,"Ce sont des questions de la guerre.","La guerre y avait mis fin, avec le 13e amendement.","Ce n'est pas le sujet."]);
Q("rec1","Qu'est-ce qui distingue l'approche de Lincoln (Reconstruction présidentielle) de celle du Congrès radical ?",
 ["Lincoln voulait l'indulgence et la réconciliation ; le Congrès voulait punir le Sud","Lincoln voulait punir durement le Sud ; le Congrès voulait lui pardonner vite","Ils étaient d'accord sur les buts et ne divergeaient que sur le chef de l'effort","Lincoln acceptait la sécession du Sud comme définitive ; le Congrès la rejetait"],
 "Pour Lincoln, les États confédérés n'avaient jamais vraiment quitté l'Union : ils s'étaient « rebellés ». Il a conclu son second discours par « With malice toward none; with charity for all ».",
 [null,"C'est inversé.","Ils étaient en désaccord.","Il la jugeait illégale."]);
Q("rec1","Quel était le plan de Lincoln (Proclamation d'amnistie, plan des 10 %) ?",
 ["Des grâces pour la plupart des Sudistes ; un État revient avec 10 % d'électeurs loyaux","Au moins 50 % des électeurs devaient jurer loyauté avant le retour d'un État","L'armée gouvernerait le Sud pendant dix ans avant le retour de tout État","Chaque famille affranchie recevrait dix acres de terre prélevés sur les anciens planteurs"],
 "C'est la position « présidentielle » : indulgente et rapide.",
 [null,"C'est la condition du Wade-Davis Bill.","L'armée n'a gouverné le Sud qu'à partir de 1867.","Aucune terre n'est prévue."]);
Q("rec1","Que prévoyait le Wade-Davis Bill du Congrès ?",
 ["Un plan plus strict : 50 % d'électeurs loyaux et des droits civiques pour les affranchis","Le plan indulgent de Lincoln, qui ne demandait que 10 % d'électeurs loyaux au départ","La loi qui a créé le Freedmen's Bureau pour aider les anciens esclaves du Sud","Un plan pour installer les affranchis dans des colonies en Afrique et en Amérique"],
 "C'est la réponse plus dure du Congrès radical au plan des 10 %.",
 [null,"Lincoln s'y est opposé.","C'est une autre loi.","Ce n'est pas le sujet."]);
Q("rec1","Quelles furent les conséquences de la Reconstruction présidentielle de Johnson ?",
 ["D'anciens Confédérés ont gardé le pouvoir ; les affranchis n'étaient pas protégés","Les hommes noirs ont obtenu le droit de vote et d'être élus dans tout le Sud","Les anciens dirigeants confédérés ont été jugés comme traîtres par la justice fédérale","Les terres des plantations ont été redistribuées aux familles affranchies du Sud"],
 "Johnson a déclaré la Reconstruction « complète » en décembre 1865 (« Mission Accomplished »). La suprématie blanche, l'aristocratie sudiste et le parti démocrate étaient rétablis.",
 [null,"Ce n'est pas le cas avant 1867-1870.","Ils ont plutôt été pardonnés.","Elles ont été restituées."]);
Q("rec1","Que signifie « justice territoriale » (land justice) pendant la Reconstruction ?",
 ["La question de savoir qui mérite la terre du Sud : propriétaires ou travailleurs","La lutte pour le droit de vote des affranchis aux élections locales et d'État","L'effort pour ouvrir des écoles publiques gratuites aux enfants des affranchis du Sud","Le conflit sur les contrats de travail entre planteurs et anciens esclaves"],
 "Les quatre « justices » du cours : politique, territoriale, économique (travail) et éducative.",
 [null,"C'est la justice politique.","C'est la justice éducative.","C'est la justice du travail."]);
Q("rec1","Qu'établissait l'ordre spécial n° 15 de Sherman (janvier 1865), à l'origine de « forty acres and a mule » ?",
 ["Des terres côtières du Sud réservées en lots de 40 acres pour des familles noires","L'abolition de l'esclavage dans chaque État par un amendement constitutionnel","L'enrôlement des hommes noirs comme soldats dans l'armée et la marine de l'Union","La reddition de l'armée de Lee face à Grant, qui a mis fin à la guerre"],
 "Cet ordre a nourri l'espoir d'indépendance économique des anciens esclaves.",
 [null,"C'est le 13e amendement.","C'est la Proclamation d'émancipation.","La guerre se termine en avril 1865."]);
Q("rec1","Qu'a décidé le président Johnson au sujet des terres de l'ordre de Sherman ?",
 ["Il l'a rendue aux anciens propriétaires confédérés qui juraient loyauté à l'Union","Il a confirmé les concessions et donné les lots définitivement aux familles noires","Il a doublé la taille des lots et les a étendus à tous les États du Sud","Il l'a vendue à bas prix aux familles noires, avec un crédit public facile"],
 "Johnson et ses partisans disaient que la confiscation approfondirait le fossé entre Confédérés et unionistes. Faute de redistribution, la plupart des affranchis sont restés pauvres et sans terre.",
 [null,"Il a fait l'inverse.","Il l'a retirée.","Il l'a rendue aux propriétaires."]);
Q("rec1","Qu'est-ce que le Freedmen's Bureau, créé à la fin de la guerre ?",
 ["Une agence fédérale pour réfugiés et affranchis, qui créait aussi des écoles","Une armée sudiste chargée de maintenir l'ordre dans les anciens États confédérés","Un parti politique formé par des affranchis pour faire élire des candidats noirs","Une banque créée par les planteurs du Sud pour prêter à l'ancienne Confédération"],
 "Il a été dirigé par O. O. Howard, avec moins de 1 000 agents dans tout le Sud. En 1869, près de 3 000 écoles en dépendaient.",
 [null,"C'est une agence fédérale.","Ce n'est pas un parti.","Il était fédéral."]);
Q("rec1","Qu'est-ce que les Black Codes ?",
 ["Des lois du Sud restreignant les droits des Noirs et les forçant à travailler","Des lois fédérales qui protégeaient les droits civiques des affranchis","Les premières lois créant des écoles publiques pour les enfants noirs du Sud","Des lois du Nord qui interdisaient l'esclavage et protégeaient les fugitifs"],
 "Foner : « la mort de l'esclavage ne signifiait pas automatiquement la naissance de la liberté ». Ces lois visaient à renforcer l'esclavage de fait et à piéger les Noirs dans la dépendance. Le cours les range parmi les lois Jim Crow.",
 [null,"Elles faisaient l'inverse.","Elles ne portaient pas sur l'éducation.","Ce sont des lois du Sud."]);
Q("rec1","Qu'est-ce que le métayage (sharecropping) ?",
 ["Une famille cultive la parcelle d'un propriétaire contre une part de la récolte","Un système où les familles affranchies possédaient la terre et vendaient leur récolte","Un travail salarié dans les usines du Nord pour les familles venues du Sud","Un plan du gouvernement pour installer les familles affranchies dans des colonies"],
 "Le système piégeait les familles dans la dette et rendait difficile la création de richesse de génération en génération.",
 [null,"C'est l'opposé.","Le métayage est agricole.","Ce n'est pas de la colonisation."]);
Q("rec1","Qu'a-t-on constaté en matière de justice éducative pendant la Reconstruction ?",
 ["De grands progrès : l'alphabétisation des Noirs a bondi de 400 % grâce à de nouvelles écoles","Aucun vrai changement, car les écoles restaient fermées aux enfants noirs du Sud","Toutes les écoles pour enfants noirs étaient payées et dirigées par d'anciens planteurs du Sud","Apprendre à lire aux enfants noirs restait interdit par la loi dans tout le Sud"],
 "Un slogan de la convention du Freedmen's Bureau : « Knowledge is Power ».",
 [null,"Il y a eu un grand progrès.","Ce n'est pas le cas.","Ils ont fondé des écoles."]);
Q("rec1","Que sont les « quatre justices » utilisées pour analyser la Reconstruction ?",
 ["La justice politique, territoriale, économique (du travail) et éducative","La justice légale, militaire, religieuse et commerciale pour les affranchis","Quatre juges de la Cour suprême qui ont tranché les affaires de la Reconstruction","La justice présidentielle, congressionnelle, judiciaire et militaire"],
 "Le cours examine la Reconstruction à travers quatre justices : politique (citoyenneté et vote), territoriale, économique (travail) et éducative.",
 [null,"Ce ne sont pas les catégories vues en classe.","Ce ne sont pas des juges.","Ce sont des parties du gouvernement, pas les quatre justices."]);
Q("rec1","Pourquoi le métayage est-il appelé « slavery by another name » ?",
 ["Les familles restaient liées à la terre et aux dettes d'un planteur, avec peu de vraie liberté","Les propriétaires vendaient ouvertement les métayers aux enchères publiques","Une loi fédérale obligeait les familles noires à cultiver pour leurs anciens maîtres","Les métayers recevaient des terres gratuites et devenaient vite de riches planteurs"],
 "Les métayers cultivaient la terre d'un propriétaire contre une part de la récolte et s'endettaient souvent : leur liberté était limitée et ils restaient attachés à la terre, comme avant.",
 [null,"Les ventes aux enchères de personnes ont pris fin avec l'esclavage.","Aucune loi fédérale n'imposait cela.","Les métayers restaient pauvres ; ils ne devenaient pas planteurs."]);
Q("rec1","Que montre le slogan « Knowledge is Power » sur la Reconstruction ?",
 ["Les affranchis voyaient l'éducation comme une voie vers le pouvoir et ont fondé de nombreuses écoles","Les planteurs voulaient garder les écoles fermées pour protéger leur pouvoir","Les troupes fédérales dirigeaient toutes les écoles du Sud pendant la Reconstruction","L'alphabétisation des Noirs a chuté, car peu de familles valorisaient l'école"],
 "Les affranchis tenaient à l'éducation : l'alphabétisation des Noirs a augmenté d'environ 400 % et beaucoup d'écoles ont été fondées par des femmes noires.",
 [null,"Certains planteurs s'opposaient à l'école des Noirs, mais le slogan parle de l'effort des affranchis.","Les écoles ont surtout été créées par les affranchis eux-mêmes.","L'alphabétisation a augmenté ; elle n'a pas chuté."]);
Q("rec2","Quel a été l'effet des élections de 1866 ?",
 ["Les Républicains ont obtenu une majorité qualifiée et pris la main sur la Reconstruction","Les Démocrates ont obtenu la majorité dans les deux chambres et soutenu le plan de Johnson","Johnson a été réélu pour un second mandat avec un très fort soutien populaire dans le pays","Les élections ont été annulées dans tout le Sud à cause de troubles persistants"],
 "Avec cette majorité, le Congrès pouvait contrer les vetos de Johnson. La Reconstruction radicale s'étend de 1866-1867 à 1877.",
 [null,"C'est l'inverse.","Il n'a pas eu de second mandat.","Elles ont eu lieu."]);
Q("rec2","Que fait la loi sur les droits civiques de 1866 ?",
 ["Elle a défini la citoyenneté nationale et l'égalité devant la loi, malgré Johnson","Elle a donné à tous les hommes noirs le droit de vote dans chaque État, Nord et Sud","Elle a aboli l'esclavage dans tout le pays pour la première fois de l'histoire","Elle a créé les cinq districts militaires qui plaçaient le Sud sous régime militaire"],
 "C'est la première grande loi qui s'attaque aux Black Codes. Elle a conduit au 14e amendement.",
 [null,"C'est le 15e amendement.","C'est le 13e amendement.","Ce sont les Reconstruction Acts de 1867."]);
Q("rec2","Lequel de ces éléments fait partie du 14e amendement ?",
 ["La citoyenneté de naissance et la « protection égale de la loi »","L'abolition de l'esclavage dans l'ensemble des États-Unis","Le droit de vote des femmes à toutes les élections fédérales","L'interdiction de refuser le vote à cause de la race d'une personne"],
 "Le 14e amendement interdit aussi aux anciens Confédérés qui ont exercé des fonctions de le refaire, et empêche de rembourser les dettes confédérées. Il pénalise un État qui refuse le vote à un homme adulte. Tous les États du Sud sauf le Tennessee l'ont rejeté.",
 [null,"C'est le 13e amendement.","Ce n'est pas le 14e amendement.","C'est le 15e amendement."]);
Q("rec2","Que prévoyaient les Reconstruction Acts de 1867 ?",
 ["Le Sud était divisé en cinq districts militaires, avec de nouvelles constitutions exigées","Toutes les terres confisquées étaient rendues aux planteurs qui les avaient perdues pendant la guerre","L'esclavage était aboli dans l'ensemble des États-Unis pour la première fois","Les affranchis étaient installés en Afrique par un nouveau programme fédéral"],
 "Les anciens dirigeants confédérés étaient exclus des conventions constitutionnelles. Elles ont ouvert « la démocratie interraciale ».",
 [null,"Johnson l'avait déjà fait.","C'est le 13e amendement.","La colonisation avait été abandonnée."]);
Q("rec2","Qu'a fait le 15e amendement (ratifié en 1870), et qu'est-ce qu'il n'a PAS fait ?",
 ["Il interdisait de refuser le vote selon la race, mais excluait les femmes","Il donnait le vote aux hommes noirs et aux femmes et mettait fin à tout obstacle","Il accordait la citoyenneté de naissance et la protection égale à tous","Il abolissait l'esclavage et mettait fin à tout travail forcé dans le pays"],
 "Il a ouvert la voie à une nouvelle démocratie interraciale, mais l'exclusion d'une grande partie de la population américaine (les femmes) continuait.",
 [null,"Les femmes n'obtiennent le vote qu'en 1920.","C'est le 14e amendement.","C'est le 13e amendement."]);
Q("rec2","Quels sont les succès de la Reconstruction radicale selon le cours ?",
 ["Plus de 2 000 Noirs au gouvernement et une forte hausse du vote noir dans le Sud","La disparition complète du Klan et de la violence raciale dans tout le Sud","Une redistribution massive des terres des plantations aux familles affranchies","La fin du métayage et de tous les contrats de travail agricole dans le Sud"],
 "Hiram Revels, premier sénateur noir (Mississippi, 1870), en est un symbole.",
 [null,"Le Klan a au contraire pris de l'ampleur.","La terre n'a pas été redistribuée.","Ce n'est pas le cas."]);
Q("rec2","Laquelle de ces associations entre un amendement de la Reconstruction et son effet est correcte ?",
 ["13e : abolit l'esclavage ; 14e : citoyenneté de naissance ; 15e : vote non refusé selon la race","13e : donne le droit de vote aux hommes noirs ; 14e : abolit l'esclavage ; 15e : citoyenneté de naissance","13e : citoyenneté de naissance ; 14e : met fin à la traite ; 15e : droit de vote des femmes","13e : protection égale de la loi ; 14e : abolit l'esclavage ; 15e : interdit le Klan"],
 "Le 13e (1865) abolit l'esclavage, le 14e (1868) définit la citoyenneté et la protection égale, et le 15e (1870) interdit de refuser le vote à cause de la race, mais pas aux femmes et sans empêcher les obstacles indirects (tests d'alphabétisation, taxes de vote).",
 [null,"Le 13e a aboli l'esclavage ; le droit de vote vient avec le 15e.","Les femmes n'ont pas obtenu le vote avec le 15e.","Le Klan a été combattu par les Enforcement Acts, pas par un amendement."]);
Q("rec2","Que disait le 14e amendement des anciens dirigeants confédérés ?",
 ["Les anciens Confédérés qui avaient exercé des fonctions ne pouvaient plus en exercer","Ils se voyaient garantir des sièges au Congrès dans chacun de leurs États d'origine","Ils perdaient définitivement leur droit de vote pour le reste de leur vie","Ils devaient être placés à la tête des nouveaux gouvernements des États du Sud"],
 "Le 14e amendement interdisait aux anciens Confédérés qui avaient exercé des fonctions politiques d'en exercer à nouveau, et précisait que les dettes confédérées ne seraient pas remboursées.",
 [null,"L'amendement leur interdisait au contraire les fonctions.","Il ne leur retirait pas le droit de vote.","Ils étaient écartés des fonctions, pas mis à la tête."]);
Q("rec2","Que signifie « démocratie interraciale » dans le contexte de la Reconstruction ?",
 ["Des hommes noirs et blancs participant ensemble aux nouveaux gouvernements du Sud","Un système où les hommes noirs votaient mais ne pouvaient jamais occuper de poste","Un gouvernement de fonctionnaires du Nord, sans aucun électeur du Sud","Un plan de gouvernements d'État séparés pour les Noirs et les Blancs du Sud"],
 "Après les Reconstruction Acts de 1867, des hommes noirs ont voté et exercé des fonctions avec des hommes blancs dans de nouveaux gouvernements d'État : une première démocratie interraciale dans le Sud.",
 [null,"Plus de 2 000 Noirs ont exercé des fonctions.","Des électeurs du Sud, noirs et blancs, y participaient.","Les gouvernements n'étaient pas séparés selon la race."]);
Q("klan","Que signifie « backlash » et quelle idée David Blight exprime-t-il en disant « Every revolution we have causes a counter-revolution » ?",
 ["Un backlash est une forte réaction à un changement ; la Reconstruction a suscité une contre-révolution","Un backlash est une alliance politique entre rivaux ; les révolutions réussissent toujours","Un backlash est une victoire militaire sur des rebelles ; la guerre n'a finalement rien changé de durable","Un backlash est un compromis entre des groupes ; les révolutions sont toujours pacifiques"],
 "Blight est un historien. Le cours demandait d'être d'accord ou non avec cette phrase.",
 [null,"Le mot désigne une réaction.","Ce n'est pas le sens.","Le mot désigne une réaction."]);
Q("klan","Comment Foner décrit-il le Ku Klux Klan ?",
 ["Le plus grand terrorisme national de l'histoire américaine, visant les républicains du Sud","Un groupe noir de défense volontaire qui protégeait les affranchis de la violence","Une milice de l'Union qui faisait appliquer la Reconstruction dans tous les anciens États du Sud","Un parti politique officiel qui présentait des candidats aux élections du Sud"],
 "Selon le cours, le Klan est né en 1865. Sa violence a érodé la confiance dans la légitimité des gouvernements républicains : un gouvernement qui ne protège pas ses citoyens est un échec.",
 [null,"C'était l'inverse.","Il était contre l'Union.","C'était une société terroriste secrète."]);
Q("klan","Que sont les Enforcement Acts (Force Acts) de 1870-1871 ?",
 ["Des lois autorisant l'armée à combattre des groupes terroristes comme le Klan","Des lois qui limitaient le droit de vote des Noirs par des tests et des taxes","Des lois douanières qui augmentaient les taxes sur les produits importés au Sud","Des lois qui libéraient Andrew Johnson après son procès de mise en accusation"],
 "Sous Grant, l'action fédérale a affaibli le Klan pour un temps.",
 [null,"C'est l'inverse.","Elles ne portaient pas sur les tarifs.","Johnson avait été acquitté en 1868."]);
Q("klan","Selon le cours, quels facteurs ont rendu la violence du Klan possible et acceptable pour tant d'Américains ?",
 ["Déshumanisation, anonymat, honte, humiliation et témoins qui restaient passifs","Des soldats fédéraux du Sud qui encourageaient discrètement la violence","L'absence complète de toute loi contre la violence dans les États du Sud","Le soutien de dirigeants noirs qui voulaient mettre fin à la Reconstruction"],
 "Le cours s'appuie sur Zimbardo (déshumanisation, anonymat) et Staub (honte et humiliation, témoins) : des gens ordinaires peuvent commettre des actes cruels quand les victimes sont vues comme inférieures, quand ils se sentent anonymes, quand leur fierté est blessée et quand les autres détournent le regard ou approuvent.",
 [null,"Le gouvernement fédéral a combattu le Klan avec les Enforcement Acts.","La violence était déjà illégale ; elle était tolérée, pas légale.","Les dirigeants noirs étaient parmi ses cibles principales."]);
Q("klan","Quels facteurs ont contribué à la fin de la Reconstruction ?",
 ["La fatigue et le racisme du Nord, la dépression de 1873 et la victoire des Redeemers","La défaite de Grant à l'élection de 1872, qui a mis fin au contrôle républicain du Congrès","Une nouvelle victoire militaire du Sud qui a renversé le résultat de la guerre","Une décision de la Cour suprême qui a rendu l'esclavage de nouveau légal au Sud"],
 "Grant est réélu en 1872, mais les réformateurs libéraux et les démocrates s'accordent sur la nécessité d'une nouvelle politique envers le Sud.",
 [null,"Grant a été réélu en 1872.","Le Nord a gagné.","Le 13e amendement l'interdisait."]);
Q("klan","Qu'est-ce que le « Bargain of 1877 » ?",
 ["Hayes a retiré les troupes du Sud et les Démocrates ont accepté sa victoire disputée","Un accord secret entre Lincoln et Lee pour finir la guerre sans autre bataille sanglante","Un traité avec le Mexique qui fixait définitivement la frontière sud du Texas","Une loi du Congrès qui donnait aux Noirs le droit de vote et d'éligibilité"],
 "Même si des Noirs ont continué à voter et à siéger dans certains États jusque dans les années 1890, l'ère de la Reconstruction a pris fin en 1877.",
 [null,"Lee avait capitulé en 1865.","Rien à voir.","C'est le 15e amendement (1870)."]);
Q("klan","Qu'est-ce que « Jim Crow » ?",
 ["Un personnage de ménestrel devenu le nom des lois de ségrégation","Un vrai sénateur du Sud qui a rédigé les premières lois de ségrégation","Le nom du traité secret de 1877 qui a mis fin à la Reconstruction","Un parti politique du Nord qui soutenait Lincoln pendant la guerre"],
 "Les lois Jim Crow imposaient la ségrégation, limitaient le pouvoir des électeurs noirs, prescrivaient leur travail et limitaient leur propriété. Elles vont de la Guerre civile aux droits civiques des années 1960.",
 [null,"Ce n'est pas une personne réelle.","Ce n'est pas un traité.","Ce n'est pas un parti."]);
Q("klan","Qui le Klan visait-il surtout à la fin des années 1860 ?",
 ["Les électeurs républicains du Sud, surtout noirs, et leurs alliés blancs","Les banquiers du Nord et les soldats de l'Union stationnés dans le Sud","Les vétérans confédérés qui refusaient de rejoindre le Parti démocrate","Les percepteurs fédéraux et les facteurs travaillant dans les États du Sud"],
 "La violence du Klan, active lors des élections de 1868, visait souvent les électeurs républicains du Sud, ce qui a érodé la confiance dans les gouvernements dirigés par les républicains.",
 [null,"Des soldats ont parfois été attaqués, mais les électeurs étaient la cible principale.","Il ne visait pas les vétérans confédérés.","Les percepteurs n'étaient pas sa cible."]);
Q("klan","Comment la dépression de 1873 a-t-elle contribué à la fin de la Reconstruction ?",
 ["Les soucis économiques ont détourné l'attention du Nord de la Reconstruction","Elle a rendu les États du Sud assez riches pour ignorer les lois fédérales de la Reconstruction","Elle a forcé le Congrès à voter les Enforcement Acts contre le Klan","Elle a poussé le président Grant à démissionner et à mettre fin lui-même à la Reconstruction"],
 "Les difficultés économiques après 1873 ont tourné l'attention du Nord vers l'économie, ajoutant à la fatigue et au racisme du Nord et aidant les démocrates du Sud (les Redeemers) à reprendre le pouvoir.",
 [null,"La dépression a touché tout le pays.","Ces lois datent de 1870-1871, avant la dépression.","Grant est resté président jusqu'en 1877."]);
Q("klan","Qui étaient les « Redeemers » ?",
 ["Des démocrates blancs du Sud qui ont repris le contrôle des gouvernements des États du Sud","Des républicains du Nord installés dans le Sud pour diriger les nouveaux gouvernements d'État","Des hommes noirs élus aux gouvernements du Sud après les Reconstruction Acts","Des généraux de l'Union qui commandaient les cinq districts militaires après 1867"],
 "Les Redeemers étaient des démocrates blancs du Sud qui ont repris le contrôle des États du Sud, contribuant à mettre fin à la Reconstruction.",
 [null,"Les républicains du Nord faisaient partie des gouvernements de la Reconstruction, pas de ses opposants.","Les élus noirs faisaient partie de la Reconstruction, pas de ses opposants.","Les généraux servaient le gouvernement fédéral, pas les démocrates qui ont mis fin à la Reconstruction."]);
Q("bonus","Où le général confédéré Robert E. Lee s'est-il rendu au général Ulysses S. Grant en avril 1865 ?",
 ["À Appomattox, en Virginie","À Gettysburg, en Pennsylvanie","À Fort Sumter, en Caroline du Sud","À Vicksburg, au Mississippi"],
 "La reddition de Lee à Appomattox (9 avril 1865) a mis fin à la guerre dans les faits. (Bonus : ce n'est pas dans le guide d'étude.)",
 [null,"Gettysburg (1863) est un tournant, pas la reddition.","Fort Sumter est l'endroit où la guerre a commencé en 1861.","Vicksburg est tombée aux mains de Grant en 1863."]);
Q("bonus","Dans le discours de Gettysburg (novembre 1863), de quoi Lincoln dit-il que la guerre est l'enjeu ?",
 ["D'une « nouvelle naissance de la liberté » et de l'égalité de tous les hommes","Uniquement de la nécessité de protéger l'esclavage dans les États du Sud","D'un plan détaillé de Reconstruction fondé sur la règle des 10 % d'électeurs","D'un accord de paix immédiat avec la Confédération pour arrêter les combats"],
 "Lincoln a relié la guerre à l'idéal d'égalité de la Déclaration d'indépendance : la nation devait gagner pour que la liberté renaisse. (Bonus : ce n'est pas dans le guide d'étude.)",
 [null,"C'est l'inverse : il parle de liberté et d'égalité.","Ce plan est venu en décembre 1863, dans une proclamation à part.","Il appelle à continuer la guerre jusqu'à la victoire de l'Union."]);
Q("bonus","Que s'est-il passé pour Lincoln en avril 1865, et pourquoi cela compte-t-il pour la Reconstruction ?",
 ["Il a été assassiné, et Andrew Johnson est devenu président avec un plan indulgent","Il a été mis en accusation par la Chambre, et le Congrès a pris le pouvoir","Il a démissionné juste après la guerre, et Grant est devenu président aussitôt après","Il est mort de maladie, et le secrétaire d'État Seward est devenu président"],
 "Lincoln a été abattu au Ford's Theatre le 14 avril et est mort le lendemain. Le vice-président Andrew Johnson, un démocrate du Tennessee, a pris la suite. (Bonus : ce n'est pas dans le guide d'étude.)",
 [null,"C'est Johnson qui a été mis en accusation (1868).","Lincoln n'a pas démissionné ; Grant est devenu président en 1869.","Le vice-président succède au président, pas le secrétaire d'État."]);
Q("bonus","Quelle décision de la Cour suprême de 1896 a permis la ségrégation « séparés mais égaux » ?",
 ["Plessy c. Ferguson","Dred Scott c. Sandford","Brown c. Board of Education","Marbury c. Madison"],
 "Plessy c. Ferguson (1896) a validé la ségrégation de Jim Crow ; Brown c. Board of Education (1954) l'a renversée. (Bonus : ce n'est pas dans le guide d'étude.)",
 [null,"Dred Scott (1857) a refusé la citoyenneté aux Noirs américains.","Brown (1954) a renversé « séparés mais égaux ».","Marbury (1803) porte sur le contrôle de constitutionnalité."]);

let CHRONO = [
 ["La Convention constitutionnelle et la Constitution", 1787.09, "1787"],
 ["Le Congrès peut interdire l'importation d'esclaves (clause de la traite)", 1808.01, "1808"],
 ["Fondation de l'American Colonization Society", 1816.12, "1816"],
 ["Le compromis du Missouri", 1820.03, "1820"],
 ["L'Appeal de David Walker", 1829.09, "1829"],
 ["Premier numéro de The Liberator (Garrison)", 1831.01, "1831"],
 ["Fondation de l'American Anti-Slavery Society", 1833.12, "1833"],
 ["La gag rule contre les pétitions antiesclavagistes", 1836.05, "1836"],
 ["La gag rule est abrogée", 1844.12, "1844"],
 ["Le Narrative de Frederick Douglass", 1845.05, "1845"],
 ["Le compromis de 1850 et la loi sur les esclaves fugitifs", 1850.09, "1850"],
 ["Uncle Tom's Cabin (Stowe)", 1852.03, "1852"],
 ["Douglass : « What to the Slave is the Fourth of July? »", 1852.07, "1852"],
 ["L'acte Kansas-Nebraska", 1854.05, "1854"],
 ["La décision Dred Scott c. Sandford", 1857.03, "1857"],
 ["Lincoln : discours « House Divided » (Springfield)", 1858.0616, "juin 1858"],
 ["Les débats Lincoln-Douglas (Freeport, 27 août)", 1858.0827, "août 1858"],
 ["John Brown attaque Harpers Ferry", 1859.1, "1859"],
 ["L'élection de Lincoln à la présidence", 1860.1106, "novembre 1860"],
 ["La Caroline du Sud fait sécession", 1860.12, "décembre 1860"],
 ["La bataille d'Antietam", 1862.0917, "17 septembre 1862"],
 ["La Proclamation d'émancipation préliminaire", 1862.0922, "22 septembre 1862"],
 ["La Proclamation d'émancipation entre en vigueur", 1863.0101, "1er janvier 1863"],
 ["La bataille de Gettysburg", 1863.0701, "1er–3 juillet 1863"],
 ["L'ordre spécial n° 15 de Sherman (« 40 acres and a mule »)", 1865.0116, "janvier 1865"],
 ["Création du Freedmen's Bureau", 1865.0303, "mars 1865"],
 ["Ratification du 13e amendement", 1865.1218, "18 décembre 1865"],
 ["Les Black Codes du Sud (ex. Mississippi)", 1865.11, "1865–1866"],
 ["Le Civil Rights Act (loi sur les droits civiques)", 1866.04, "1866"],
 ["Élections de mi-mandat : majorité républicaine au Congrès", 1866.11, "novembre 1866"],
 ["Les Reconstruction Acts (cinq districts militaires)", 1867.03, "1867"],
 ["Le 14e amendement (ratifié)", 1868.07, "juillet 1868"],
 ["Le 15e amendement (ratifié)", 1870.02, "février 1870"],
 ["Les Enforcement Acts contre le Klan", 1870.05, "1870–1871"],
 ["Dépression économique", 1873.09, "1873"],
 ["Le Bargain of 1877 : fin de la Reconstruction", 1877.03, "1877"]
];

let PEOPLE = [
 ["Benjamin Franklin","A accepté la Constitution « avec tous ses défauts » le 17 septembre 1787.","Les rédacteurs de 1787"],
 ["William Lloyd Garrison","Abolitionniste blanc, fondateur de The Liberator (1831) : « I will be heard » ; voulait dissoudre l'Union.","Abolitionnistes"],
 ["David Walker","Noir libre de Boston, auteur de l'Appeal (1829), un appel radical à la résistance.","Abolitionnistes"],
 ["Frederick Douglass","Ancien esclave, orateur et écrivain : Narrative (1845), discours du 4 juillet 1852 ; a réagi à Dred Scott.","Abolitionnistes"],
 ["Harriet Tubman","S'est échappée puis est retournée guider d'autres personnes par le Chemin de fer souterrain.","Abolitionnistes"],
 ["Harriet Beecher Stowe","Auteure d'Uncle Tom's Cabin (1852), roman antiesclavagiste très lu dans le Nord.","Abolitionnistes"],
 ["Angelina et Sarah Grimké","Sœurs du Sud devenues abolitionnistes et défenseuses des droits des femmes.","Abolitionnistes"],
 ["John Quincy Adams","Ancien président et député qui a mené la lutte contre la gag rule, abrogée en 1844.","Abolitionnistes"],
 ["John Brown","Abolitionniste blanc qui a attaqué l'arsenal de Harpers Ferry en 1859.","Abolitionnistes"],
 ["Henry Clay","Sénateur architecte de compromis, lié au compromis du Missouri et à celui de 1850.","Politique et justice"],
 ["Stephen Douglas","Sénateur de l'Illinois, défenseur de la souveraineté populaire ; doctrine de Freeport ; démocrate du Nord en 1860.","Politique et justice"],
 ["Roger B. Taney","Juge en chef : opinion majoritaire (7–2) dans Dred Scott : pas de citoyenneté pour les Noirs ; compromis du Missouri inconstitutionnel.","Politique et justice"],
 ["Benjamin R. Curtis","Juge dissident dans Dred Scott : des Noirs libres étaient citoyens ; le Congrès pouvait réglementer les territoires.","Politique et justice"],
 ["Dred Scott","Homme asservi qui a poursuivi pour sa liberté après avoir vécu dans un État libre et un territoire libre.","Politique et justice"],
 ["John Breckinridge","Démocrate du Sud en 1860 : droits des esclavagistes dans les territoires.","Politique et justice"],
 ["Abraham Lincoln","Républicain, 16e président : « House Divided » (1858), Proclamation d'émancipation, plan des 10 %.","Guerre civile"],
 ["Robert E. Lee","Général confédéré : invasion du Nord repoussée à Antietam (1862) puis à Gettysburg (1863).","Guerre civile"],
 ["William T. Sherman","Général de l'Union : ordre spécial n° 15 (janvier 1865), « 40 acres and a mule ».","Reconstruction"],
 ["Andrew Johnson","Président (1865-1869) : Reconstruction présidentielle indulgente ; terres rendues ; mis en accusation en 1868.","Reconstruction"],
 ["Thaddeus Stevens","Républicain radical qui voulait confisquer les terres des planteurs pour les anciens esclaves.","Reconstruction"],
 ["Ulysses S. Grant","Président (1869-1877) : élu en 1868, réélu en 1872 ; a combattu le Klan avec les Enforcement Acts.","Reconstruction"],
 ["Hiram Revels","Premier sénateur noir des États-Unis (Mississippi, 1870).","Reconstruction"],
 ["Rutherford B. Hayes","Président dont l'élection disputée a mené au Bargain of 1877 et à la fin de la Reconstruction.","Reconstruction"],
 ["Eric Foner","Historien de la Reconstruction : Klan = « terrorisme national » ; « double émancipation » ; « The Emancipation of Abe Lincoln ».","Historiens et penseurs"],
 ["David Blight","Historien : « Every revolution we have causes a counter-revolution. »","Historiens et penseurs"]
];

let QUOTES = [
 ["« A house divided against itself cannot stand. »","Abraham Lincoln","Discours de Springfield, 16 juin 1858"],
 ["« Slavery cannot exist a day or an hour anywhere, unless it is supported by local police regulations. »","Stephen Douglas","Débat de Freeport, 27 août 1858"],
 ["« With malice toward none; with charity for all… »","Abraham Lincoln","Second discours d'investiture, 4 mars 1865"],
 ["« A fit and necessary war measure. »","Abraham Lincoln","Proclamation d'émancipation, 1er janvier 1863"],
 ["« I will be heard. »","William Lloyd Garrison","The Liberator, 1831"],
 ["« What to the Slave is the Fourth of July? »","Frederick Douglass","Rochester, 1852"],
 ["« Knowledge is Power. »","Convention du Freedmen's Bureau","Éducation pendant la Reconstruction"],
 ["« Every revolution we have causes a counter-revolution. »","David Blight","Historien, sur le backlash"],
 ["« Mission Accomplished! »","Andrew Johnson","Reconstruction « complète », décembre 1865"]
];

let LEX = [
 ["Le compromis des trois cinquièmes","Three-Fifths Clause","Une personne en esclavage compte pour 3/5 d'une personne dans le recensement (représentation et impôts)."],
 ["La clause de la traite","Slave Trade Clause","Article I, section 9 : le Congrès ne peut pas interdire l'importation d'esclaves avant 1808."],
 ["La clause des esclaves fugitifs","Fugitive Slave Clause","Article IV : une personne échappée dans un autre État doit être rendue à son propriétaire."],
 ["L'institution particulière","The peculiar institution","Euphémisme pour désigner l'esclavage."],
 ["Le recensement","Census","Le comptage de la population qui fixe les sièges à la Chambre, les grands électeurs et les impôts directs."],
 ["La colonisation","Colonization","Projet d'abolir l'esclavage graduellement et d'envoyer les Noirs libres en Afrique (Liberia)."],
 ["L'abolition immédiate","Immediate abolition","Fin de l'esclavage sans délai, avec l'égalité des Noirs dans la république."],
 ["La persuasion morale","Moral suasion","Convaincre les gens que l'esclavage est un péché, sans violence."],
 ["Le Chemin de fer souterrain","Underground Railroad","Réseau secret qui aidait les personnes asservies à s'enfuir."],
 ["La souveraineté populaire","Popular sovereignty","Les habitants d'un territoire décident par vote s'ils acceptent l'esclavage."],
 ["La ligne 36°30'","The 36°30' line","Limite du compromis du Missouri : pas d'esclavage au nord dans l'achat de la Louisiane."],
 ["La loi sur les esclaves fugitifs","Fugitive Slave Act","Loi de 1850 : les citoyens doivent aider à capturer les fugitifs ; pas de jury ni de témoignage pour l'accusé."],
 ["Bleeding Kansas","Bleeding Kansas","Violence entre colons pro- et anti-esclavagistes au Kansas après 1854."],
 ["L'opinion dissidente","Dissent","L'opinion d'un juge en désaccord avec la majorité (Curtis dans Dred Scott)."],
 ["La sécession","Secession","Se retirer officiellement d'une union."],
 ["Le commandant en chef","Commander in Chief","Le président comme chef des armées ; pouvoir invoqué pour la Proclamation d'émancipation."],
 ["L'émancipation graduelle","Gradual emancipation","Plan d'abolition lente, avec indemnisation des propriétaires, par les États."],
 ["Les États frontaliers","Border states","États esclavagistes restés dans l'Union (Maryland, Kentucky, Missouri, Delaware)."],
 ["La Reconstruction présidentielle","Presidential Reconstruction","Plan indulgent de Lincoln puis de Johnson (10 % des électeurs, pardons)."],
 ["La Reconstruction radicale (congressionnelle)","Radical (Congressional) Reconstruction","Plan du Congrès : droits civiques, 14e et 15e amendements, Reconstruction Acts (1867)."],
 ["Les Black Codes","Black Codes","Lois du Sud qui limitaient les droits des Noirs et imposaient leur travail."],
 ["Les lois sur le vagabondage","Vagrancy laws","Lois qui permettaient d'arrêter des Noirs sans emploi et de les contraindre au travail."],
 ["Le métayage","Sharecropping","Cultiver la terre d'un propriétaire contre une part de la récolte ; « slavery by another name »."],
 ["Le Freedmen's Bureau","Freedmen's Bureau","Agence fédérale (1865) pour les réfugiés, affranchis et terres abandonnées ; écoles et santé."],
 ["La justice territoriale","Land justice","Qui mérite la terre : « 40 acres and a mule » (ordre de Sherman) contre la restitution aux Confédérés."],
 ["La protection égale de la loi","Equal protection of the laws","Expression du 14e amendement, encore débattue aujourd'hui."],
 ["La citoyenneté de naissance","Birthright citizenship","Être né aux États-Unis fait de quelqu'un un citoyen (14e amendement)."],
 ["La démocratie interraciale","Interracial democracy","Participation des Noirs et des Blancs au gouvernement, après les Reconstruction Acts."],
 ["La mise en accusation","Impeachment","Procédure de la Chambre contre un responsable ; Johnson (1868), acquitté par le Sénat."],
 ["La privation du droit de vote","Disenfranchisement","Empêcher des citoyens de voter, par exemple par des tests d'alphabétisation ou des taxes de vote."],
 ["Le backlash","Backlash","Réaction violente contre un changement social ou politique."],
 ["Les Enforcement Acts","Enforcement Acts (Force Acts)","Lois de 1870-1871 contre les sociétés terroristes comme le Klan."],
 ["Les Redeemers","Redeemers","Démocrates blancs du Sud qui ont repris le pouvoir et mis fin à la Reconstruction."],
 ["Le Bargain of 1877","Bargain of 1877","Compromis après l'élection disputée de Hayes : retrait des soldats, fin de la Reconstruction."],
 ["Jim Crow","Jim Crow","Personnage de ménestrel devenu le nom des lois de ségrégation."]
];

let NOTES = [
 { id:"p1", t:"Partie 1 · La Constitution et l'esclavage (1787)", topics:["const"], q:"Est-ce que la Constitution a établi un gouvernement juste ?", html:`
  <h3>Comment les rédacteurs ont protégé l'esclavage</h3>
  <ul><li><b>Compromis des trois cinquièmes (art. I, s. 2, cl. 3)</b> : une personne en esclavage compte pour 3/5. Le recensement fixe (1) les représentants, (2) les grands électeurs, (3) les impôts directs. Le Sud paie plus d'impôts MAIS gagne des sièges. Pas les sénateurs : 2 par État.</li>
  <li><b>Clause de la traite (art. I, s. 9, cl. 1)</b> : le Congrès ne peut pas interdire l'importation avant <b>1808</b> ; taxe maximale de 10 $ par personne. Après 1808, la traite intérieure continue.</li>
  <li><b>Clause des fugitifs (art. IV, s. 2, cl. 3)</b> : une personne « held to Service » qui s'échappe doit être « delivered up ».</li>
  <li>Le mot « esclavage » n'apparaît jamais : « other Persons », « Person held to Service or Labour ». « L'institution particulière ».</li></ul>
  <h3>Les débats de la Convention (notes de Madison, 21 août)</h3>
  <ul><li><b>Luther Martin</b> : permettre d'interdire ou de taxer la traite ; contraire aux principes de la Révolution.</li>
  <li><b>Rutledge</b> : « Interest alone » ; le Nord profitera comme transporteur.</li>
  <li><b>Ellsworth</b> : « Let every State import what it pleases. »</li>
  <li><b>Pinckney</b> : la Caroline du Sud n'acceptera jamais une interdiction de la traite.</li>
  <li><b>Franklin</b> (17 sept.) : accepte la Constitution « avec tous ses défauts ».</li></ul>
` },
 { id:"p2", t:"Partie 2 · Le mouvement abolitionniste (1810–1850)", topics:["abo"], q:"Quels étaient les points de vue divers parmi les abolitionnistes ?", html:`
  <h3>Colonisation ou abolition immédiate ?</h3>
  <table class="table"><tr><th></th><th>Colonisation</th><th>Abolition immédiate</th></tr>
  <tr><td>Quand</td><td>American Colonization Society, 1816</td><td>Années 1830</td></tr>
  <tr><td>Idée</td><td>Abolition graduelle + envoyer les Noirs en Afrique (Liberia, Monrovia). L'Amérique est une société blanche.</td><td>L'esclavage est un péché ; fin immédiate ; les Noirs sont des membres égaux ; combattre le racisme.</td></tr>
  <tr><td>Réaction noire</td><td>La plupart s'y opposent (1817 : 3 000 Noirs libres à Philadelphie : « nous sommes Américains »).</td><td>Soutien et leadership noirs.</td></tr></table>
  <h3>Abolitionnistes clés</h3>
  <ul><li><b>David Walker</b> : Appeal (1829). <b>Garrison</b> : The Liberator (1831), « I will be heard » ; Constitution = « pacte avec la mort » ; voulait dissoudre l'Union.</li>
  <li><b>American Anti-Slavery Society (1833)</b> : persuasion morale, pamphlets, pétitions ; <b>Theodore Weld</b>. Beaucoup de « non-résistants » (pacifistes).</li>
  <li><b>Frederick Douglass</b> : Narrative (1845) ; « What to the Slave is the Fourth of July? » (1852).</li>
  <li><b>Harriet Tubman</b> : Chemin de fer souterrain. <b>Stowe</b> : Uncle Tom's Cabin (1852). <b>Sœurs Grimké</b> : abolition et droits des femmes.</li>
  <li><b>John Brown</b> : Harpers Ferry (1859), arsenal fédéral.</li></ul>
  <h3>Opposition et liberté d'expression</h3>
  <ul><li><b>Gag rule (1836)</b> contre les pétitions ; abrogée en 1844 grâce à <b>John Quincy Adams</b>.</li>
  <li><b>Elijah Lovejoy</b> tué par une foule (1837). Pennsylvania Hall brûlé (1838).</li></ul>
` },
 { id:"p3", t:"Partie 3 · Compromis, crises et Dred Scott", topics:["comp", "dred"], q:"Dans quelle mesure les compromis ont-ils retardé la crise ?", html:`
  <h3>Les compromis législatifs</h3>
  <table class="table"><tr><th>Loi</th><th>Contenu</th></tr>
  <tr><td><b>Missouri 1820</b></td><td>11 libres / 11 esclavagistes. MO esclavagiste, ME libre. Pas d'esclavage au nord de <b>36°30'</b> (achat de la Louisiane).</td></tr>
  <tr><td><b>Compromis de 1850</b></td><td>Californie libre (Gold Rush). Cession mexicaine (Guadalupe Hidalgo, 1848) : <b>souveraineté populaire</b>. <b>Loi sur les esclaves fugitifs</b> renforcée.</td></tr>
  <tr><td><b>Fugitive Slave Act 1850</b></td><td>Les citoyens doivent aider ; pas de jury ni de témoignage pour l'accusé ; commissaires payés 10 $ (esclave) contre 5 $ (libre) ; aider un fugitif : 1 000 $ d'amende et prison. Indignation au Nord.</td></tr>
  <tr><td><b>Kansas-Nebraska 1854</b></td><td>Annule en pratique le compromis du Missouri ; souveraineté populaire → <b>Bleeding Kansas</b> ; naissance du Parti républicain.</td></tr></table>
  <h3>Dred Scott c. Sandford (1857)</h3>
  <ul><li>Né en esclavage en Virginie. Vit en <b>Illinois</b> (libre) et à <b>Fort Snelling</b> (libre par le compromis du Missouri). Poursuit Irene Emerson après son refus de le laisser racheter sa liberté (1846).</li>
  <li><b>Taney, majorité (7–2)</b> : (1) un Noir descendant d'esclaves ne peut pas être citoyen ; (2) le Congrès ne peut pas exclure l'esclavage des territoires → compromis du Missouri inconstitutionnel.</li>
  <li><b>Curtis, dissident</b> (avec McLean) : des Noirs libres étaient citoyens dans plusieurs États à l'époque de la Constitution ; le Congrès pouvait réglementer les territoires.</li>
  <li><b>Réponses antiesclavagistes</b> : Douglass rejette la décision comme une perversion de la Constitution ; Lincoln conteste Taney (la Déclaration inclut tous les hommes) et veut la renverser par la politique.</li></ul>
` },
 { id:"p4", t:"Partie 3 (suite) · Lincoln-Douglas (1858) et l'élection de 1860", topics:["elec"], q:"Dans quelle mesure la souveraineté populaire a-t-elle reflété les divisions sur l'esclavage ?", html:`
  <h3>Les débats Lincoln-Douglas (1858)</h3>
  <ul><li>Sept débats pour le siège de sénateur de l'Illinois. Lincoln perd mais devient célèbre.</li>
  <li><b>Lincoln, Springfield</b> : « A house divided against itself cannot stand. » La « machinerie » = doctrine du Nebraska + Dred Scott + le « care not » de Douglas.</li>
  <li><b>Douglas, Freeport (27 août)</b> : un territoire peut exclure l'esclavage par une « législation hostile » : sans règlements de police locaux, l'esclavage ne peut exister. Jamais pour la dissolution de l'Union.</li>
  <li>Résumé : Douglas = souveraineté populaire ; Lincoln = contre l'extension de l'esclavage.</li></ul>
  <h3>L'élection de 1860</h3>
  <table class="table"><tr><th>Candidat</th><th>Esclavage</th></tr>
  <tr><td><b>Lincoln</b> (républicain)</td><td>Le maintenir où il existe ; pas dans les nouveaux territoires. Homesteads, tarifs, chemin de fer.</td></tr>
  <tr><td><b>Douglas</b> (démocrate du Nord)</td><td>Souveraineté populaire.</td></tr>
  <tr><td><b>Breckinridge</b> (démocrate du Sud)</td><td>Droits des esclavagistes dans les territoires.</td></tr>
  <tr><td><b>Bell</b> (Union constitutionnelle)</td><td>« La Constitution, l'Union et l'application des lois. »</td></tr></table>
  <ul><li>Sécession : Caroline du Sud (décembre 1860) ; 7 États en 3 mois. Pas de « good riddance » : si le perdant peut partir, la démocratie échoue.</li></ul>
` },
 { id:"p5", t:"Partie 4 · La guerre civile et l'émancipation (1861–1865)", topics:["war"], q:"Dans quelle mesure la Proclamation d'émancipation a-t-elle changé la guerre et Lincoln ?", html:`
  <h3>L'évolution des buts de guerre de Lincoln</h3>
  <ul><li><b>1861</b> : préserver l'Union, pas abolir l'esclavage ; ménager les États frontaliers. Plan : émancipation graduelle, par les États, avec indemnisation et colonisation (échec au Delaware, 1861).</li>
  <li><b>Été 1862</b> : fugitifs vers les lignes de l'Union, impasse militaire, pression abolitionniste, besoin de soldats ; le Congrès agit (Washington, soldats noirs).</li>
  <li>22 juillet 1862 : Proclamation préliminaire au cabinet ; <b>Seward</b> : attendre une victoire.</li>
  <li><b>Antietam (17 sept. 1862)</b> : journée la plus sanglante ; victoire de l'Union ; Proclamation préliminaire le 22 sept.</li>
  <li>Ensuite : immédiat, sans indemnisation ni colonisation. 1864 : refus de la retirer.</li></ul>
  <h3>La Proclamation (1er janvier 1863)</h3>
  <ul><li>Commandant en chef : « a fit and necessary war measure ». Texte « dull and legalistic » ; <b>Chase</b> : « act of justice ».</li>
  <li>Régions en rébellion seulement : environ <b>3,1 millions</b> libres ; environ <b>750 000</b> laissés en esclavage (États frontaliers, zones occupées).</li>
  <li>Les Noirs reçus dans l'armée et la marine : environ <b>200 000</b>. Abolition générale : 13e amendement (décembre 1865).</li>
  <li><b>Foner</b> : « double émancipation » (les esclaves ET Lincoln).</li></ul>
  <h3>Gettysburg (1er–3 juillet 1863)</h3>
  <ul><li>Deuxième invasion du Nord par Lee ; Pennsylvanie ; plus grande bataille d'Amérique du Nord ; l'Union gagne. Vicksburg (Grant, Mississippi) tombe le lendemain.</li></ul>
` },
 { id:"p6", t:"Partie 5 · La Reconstruction présidentielle et les quatre justices", topics:["rec1"], q:"La Reconstruction s'est-elle terminée en 1877, ou le travail continue-t-il ?", html:`
  <h3>Questions de départ et deux approches</h3>
  <ul><li><b>13e amendement</b> (18 déc. 1865) : fin de l'esclavage sauf comme punition d'un crime ; section 2 : le Congrès peut l'appliquer.</li>
  <li>Questions : réadmettre le Sud ? le punir ? quels droits ? à quoi ressemble la justice raciale ?</li>
  <li><b>Lincoln / Johnson (présidentiel)</b> : indulgence, réconciliation ; amnistie sauf hauts fonctionnaires ; 10 % des électeurs jurent loyauté (« Mission Accomplished », déc. 1865).</li>
  <li><b>Congrès (radical)</b> : punir les dirigeants ; Wade-Davis (50 %, droits civiques, veto de Lincoln).</li>
  <li>Conséquences de Johnson : anciens Confédérés au pouvoir, aucune protection des affranchis, suprématie blanche rétablie.</li></ul>
  <h3>Les quatre justices</h3>
  <table class="table"><tr><th>Justice</th><th>Points clés</th></tr>
  <tr><td><b>Politique</b></td><td>Citoyenneté, vote (voir partie 6).</td></tr>
  <tr><td><b>Territoriale (terre)</b></td><td>Ordre spécial n° 15 de Sherman : « 40 acres and a mule » ; Johnson restitue la terre aux Confédérés loyaux.</td></tr>
  <tr><td><b>Économique (travail)</b></td><td>Freedmen's Bureau ; Black Codes et lois sur le vagabondage ; métayage = « slavery by another name ».</td></tr>
  <tr><td><b>Éducative</b></td><td>Progrès : alphabétisation noire +400 % ; écoles souvent fondées par des femmes noires ; « Knowledge is Power ».</td></tr></table>
` },
 { id:"p7", t:"Partie 6 · La Reconstruction radicale, le Klan et la fin (1866–1877)", topics:["rec2", "klan"], q:"Dans quelle mesure la Reconstruction a-t-elle été une seconde révolution américaine ?", html:`
  <h3>La Reconstruction radicale</h3>
  <ul><li><b>1866</b> : majorité républicaine au Congrès. <b>Civil Rights Act 1866</b> : citoyenneté nationale, égalité devant la loi, droits du travail libre ; veto de Johnson annulé.</li>
  <li><b>14e amendement</b> : citoyenneté de naissance ; « protection égale de la loi » ; anciens Confédérés exclus des fonctions ; dettes confédérées non remboursées.</li>
  <li><b>Reconstruction Acts (1867)</b> : 5 districts militaires ; suffrage universel masculin sans distinction de race ; ratifier le 14e amendement ; démocratie interraciale.</li>
  <li><b>Tenure of Office Act</b> ; Johnson renvoie Stanton ; mise en accusation (1868), acquitté. <b>Grant</b> élu en 1868 (écart d'environ 300 000 voix).</li>
  <li><b>15e amendement</b> (ratifié 1870) : pas de refus du vote selon la race ; MAIS les femmes exclues et privation indirecte (tests d'alphabétisation, taxes de vote).</li>
  <li><b>Succès</b> : plus de 2 000 Noirs au gouvernement ; vote noir en forte hausse ; système d'écoles publiques ; Revels, premier sénateur noir.</li></ul>
  <h3>Backlash et fin</h3>
  <ul><li><b>Black Codes</b>, puis Jim Crow. <b>Ku Klux Klan</b> : « le plus grand exemple de terrorisme national » (Foner) ; actif aux élections de 1868.</li>
  <li><b>Enforcement Acts (1870-1871)</b> : l'armée contre les sociétés terroristes.</li>
  <li>Pourquoi la violence ? <b>Déshumanisation</b>, <b>anonymat</b> (Zimbardo) ; <b>honte et humiliation</b>, rôle des <b>témoins</b> (Staub).</li>
  <li>Fin : Républicains divisés, racisme au Nord, <b>dépression de 1873</b>, victoire des <b>Redeemers</b>. <b>Bargain of 1877</b> : élection disputée de Hayes, retrait des soldats de Caroline du Sud et de Louisiane.</li></ul>
` }
];

let CARD_DEFAULT = `RECTO · 1787 → 1860
1787 La Constitution protège l'esclavage sans le nommer : une personne esclavisée compte pour 3/5 d'une personne dans le recensement (ça sert à compter les représentants, les grands électeurs et les impôts directs ; le Sénat n'est pas touché, 2 sénateurs par État). Le Sud gagne des sièges, mais paie aussi plus d'impôts.
1787 Le Congrès ne peut pas interdire l'importation d'esclaves avant 1808 (taxe maximale de 10 $ par personne). La clause des fugitifs (art. IV) oblige à rendre une personne « held to Service » qui s'est échappée. Le mot « esclavage » n'est jamais écrit : on dit « other Persons » ou « l'institution particulière ».
1787 Débat de la Convention (notes de Madison) : Luther Martin veut pouvoir interdire ou taxer la traite ; Rutledge répond que seul « l'intérêt » compte et que le Nord profitera en transportant les marchandises ; Ellsworth : chaque État décide ; Pinckney : la Caroline du Sud refuse toute interdiction ; Franklin signe « avec tous ses défauts ».
1808 L'importation d'esclaves devient légalement interdite, mais la traite à l'intérieur du pays continue.
1816 Fondation de l'American Colonization Society : abolition graduelle et envoi des Noirs en Afrique (Liberia) parce que l'Amérique serait une société blanche. La plupart des Noirs libres refusent (« nous sommes Américains »). Dans les années 1830, les abolitionnistes veulent plutôt la fin immédiate de l'esclavage et l'égalité des Noirs.
1820 Compromis du Missouri : le Missouri entre comme État esclavagiste et le Maine comme État libre, pour garder 12 contre 12 ; l'esclavage est interdit au nord de la ligne 36°30' dans le territoire de l'achat de la Louisiane.
1829–1838 David Walker écrit l'Appeal (1829). William Lloyd Garrison fonde The Liberator (1831), dit « I will be heard » et appelle la Constitution un « pacte avec la mort ». L'American Anti-Slavery Society (1833) utilise la persuasion morale. La gag rule (1836) bloque les pétitions ; John Quincy Adams la fait abroger en 1844. Elijah Lovejoy est tué par une foule en 1837.
1845–1852 Frederick Douglass publie son Narrative (1845), puis « What to the Slave is the Fourth of July? » (1852). Harriet Tubman aide des esclaves à fuir par le chemin de fer souterrain. Harriet Beecher Stowe publie Uncle Tom's Cabin (1852).
1848 Le traité de Guadalupe Hidalgo donne au pays de nouveaux territoires mexicains ; la question est de savoir si l'esclavage y sera permis, d'où l'idée de souveraineté populaire (les habitants votent).
1850 Compromis de 1850 : la Californie entre comme État libre ; les territoires du Sud-Ouest utilisent la souveraineté populaire ; la loi sur les esclaves fugitifs est durcie : pas de jury ni de témoignage pour l'accusé, le commissaire reçoit 10 $ s'il déclare la personne esclave contre 5 $ s'il la libère, et aider un fugitif coûte 1 000 $ et de la prison. Le Nord est indigné.
1854 Loi Kansas-Nebraska : la souveraineté populaire remplace le compromis du Missouri, ce qui provoque la violence du « Bleeding Kansas » et la naissance du Parti républicain.
1857 Dred Scott c. Sandford : Dred Scott est né esclave, a vécu en Illinois et au Fort Snelling (des endroits libres) et a poursuivi en justice pour sa liberté. Le juge Taney, avec une majorité de 7 contre 2, décide qu'un descendant d'esclaves ne peut pas être citoyen et que le Congrès n'a pas le droit d'interdire l'esclavage dans les territoires (donc le compromis du Missouri est inconstitutionnel). Le juge Curtis est en désaccord. Douglass et Lincoln contestent la décision.
1858 Débats Lincoln-Douglas (7 débats ; Lincoln perd l'élection). Lincoln : « A house divided against itself cannot stand » (la nation ne peut pas rester moitié libre, moitié esclavagiste). Douglas, à Freeport (27 août) : un territoire peut exclure l'esclavage en ne votant pas de lois pour le protéger (« législation hostile »). 1859 : John Brown attaque l'arsenal fédéral de Harpers Ferry.
1860 Élection : Lincoln (républicain) veut empêcher l'extension de l'esclavage ; Douglas (démocrate du Nord) défend la souveraineté populaire ; Breckinridge (démocrate du Sud) défend les droits des esclavagistes dans les territoires ; Bell (Union constitutionnelle) dit « la Constitution, l'Union et les lois ». En décembre, la Caroline du Sud fait sécession ; sept États suivent en trois mois.

VERSO · 1861 → 1877
1861 La guerre commence à Fort Sumter (avril). Lincoln veut sauver l'Union, pas abolir l'esclavage, et ménage les États frontaliers. Son plan : émancipation graduelle, avec indemnisation des propriétaires et colonisation des Noirs ; cela échoue au Delaware.
1862 Pendant l'été, des esclaves fuient vers les lignes de l'Union, la guerre est dans l'impasse et l'Union a besoin de soldats. Seward conseille d'attendre une victoire avant d'annoncer l'émancipation. Après la victoire d'Antietam (17 septembre, journée la plus sanglante), Lincoln publie la proclamation préliminaire (22 septembre).
1863 Le 1er janvier, la Proclamation d'émancipation : Lincoln agit comme commandant en chef (« war measure »). Elle ne libère que les esclaves des régions en rébellion : environ 3,1 millions sont libres et environ 750 000 (États frontaliers, zones occupées) ne le sont pas. Environ 200 000 Noirs servent comme soldats. Foner parle de « double émancipation » : celle des esclaves et celle de Lincoln lui-même.
1863 Gettysburg (1–3 juillet) : Lee envahit la Pennsylvanie et l'Union gagne la plus grande bataille d'Amérique du Nord ; Vicksburg (Grant) tombe le 4 juillet. 1864 : Lincoln refuse de retirer la Proclamation.
1865 L'ordre spécial n° 15 de Sherman promet des terres aux affranchis (« 40 acres and a mule »). En mars, création du Freedmen's Bureau. Le 13e amendement (18 décembre) abolit l'esclavage sauf comme punition d'un crime, et la section 2 permet au Congrès de l'appliquer.
1865 Deux plans : Lincoln (10 % des électeurs jurent loyauté) contre Wade-Davis (50 %, droits civiques, mais Lincoln met son veto). Le président Johnson accorde des pardons, rend les terres aux anciens Confédérés et déclare la Reconstruction finie (« Mission Accomplished »). Le Sud adopte les Black Codes et des lois contre le vagabondage.
Les 4 justices : politique (citoyenneté et vote) ; terre (la promesse de terres n'est pas tenue) ; travail (Freedmen's Bureau, puis métayage = « slavery by another name ») ; éducation (alphabétisation des Noirs +400 %, écoles souvent fondées par des femmes noires).
1866 Le Civil Rights Act donne la citoyenneté et l'égalité devant la loi (le Congrès annule le veto de Johnson). Le 14e amendement : citoyenneté pour toute personne née aux États-Unis, protection égale de la loi, anciens Confédérés exclus des fonctions.
1867 Les Reconstruction Acts divisent le Sud en 5 districts militaires et exigent le vote des hommes noirs et la ratification du 14e amendement. 1868 : Johnson renvoie Stanton malgré le Tenure of Office Act, la Chambre le met en accusation, mais il est acquitté ; Grant est élu président.
1870 Le 15e amendement interdit de refuser le vote à cause de la race, mais les femmes sont exclues et des tests d'alphabétisation et des taxes de vote sont utilisés. Enforcement Acts (1870–1871) : l'armée contre le Ku Klux Klan, que Foner appelle « le plus grand exemple de terrorisme national ». Zimbardo : déshumanisation et anonymat ; Staub : honte, humiliation et rôle des témoins.
Succès de la Reconstruction : plus de 2 000 Noirs élus, Hiram Revels est le premier sénateur noir, écoles publiques, participation des Noirs au vote.
1873–1877 La dépression de 1873, la division des républicains et le racisme au Nord affaiblissent la Reconstruction ; les « Redeemers » (démocrates du Sud) reprennent le pouvoir. Bargain de 1877 : Hayes devient président après une élection contestée et retire les troupes de Caroline du Sud et de Louisiane.`;
