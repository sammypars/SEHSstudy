/* =====================================================================
   HOTA · Unité 2 · Interro à choix multiple
   All course content lives in this file. To add material later:
   - new written questions: add Q(...) lines (first option = correct answer;
     options are shuffled when shown)
   - new dates: add to CHRONO, people to PEOPLE, quotes to QUOTES,
     vocabulary to LEX, review notes to NOTES
   ===================================================================== */

let TOPICS = {
  const: { n: "La Constitution et l'esclavage", u: "Leçon 1" },
  res:   { n: "La résistance", u: "Leçons 1–2" },
  abo:   { n: "L'abolitionnisme et le féminisme", u: "Leçon 2 · Foner" },
  src:   { n: "Sources primaires", u: "Lectures" },
  cause: { n: "Les causes de la Guerre civile", u: "Leçon 3" },
  comp:  { n: "Les compromis et Dred Scott", u: "Leçon 3" },
  elec:  { n: "Lincoln-Douglas, 1860 et la sécession", u: "Leçon 4" },
  war:   { n: "Les batailles et la fin de la guerre", u: "Leçon 5" },
  emanc: { n: "La Proclamation d'émancipation et Foner", u: "Leçon 5 · Lectures" },
  recon: { n: "La Reconstruction", u: "Leçon 6 · Foner ch. 15" },
  ib:    { n: "Compétences d'histoire BI", u: "Méthode" },
  chrono:{ n: "Chronologie", u: "Généré", gen: 1 },
  pers:  { n: "Personnages", u: "Généré", gen: 1 },
  cit:   { n: "Qui a dit ça ?", u: "Généré", gen: 1 },
  lex:   { n: "Vocabulaire", u: "Généré", gen: 1 }
};

const BANK = [];
/* Q(topic, question, [correct, wrong1, wrong2, wrong3], why-correct, [null, why-wrong1, why-wrong2, why-wrong3]) */
function Q(t, q, o, e, w) { BANK.push({ t, q, o, e, w }); }

/* ---------------- Leçon 1 : la Constitution et l'esclavage ---------------- */
Q("const","Selon le compromis des trois cinquièmes, comment une personne en esclavage était-elle comptée dans le recensement ?",
 ["Comme les trois cinquièmes d'une personne","Comme une personne entière","Elle n'était pas comptée du tout","Comme les deux cinquièmes d'une personne"],
 "La Constitution (article I, section 2) ajoute au nombre de personnes libres « three fifths of all other Persons ». Cinq personnes en esclavage comptaient donc comme trois personnes libres.",
 [null,"C'est ce que voulait le Sud pour avoir encore plus de représentants. Le compromis a coupé la poire en deux.","C'est ce que voulait le Nord. Le compromis est justement un compromis entre ces deux positions.","Le chiffre est trois cinquièmes, pas deux."]);
Q("const","Le nombre de personnes recensées déterminait toutes ces choses SAUF une. Laquelle ?",
 ["Le nombre de sénateurs de chaque État","Le nombre de représentants à la Chambre des représentants","Le nombre de grands électeurs pour l'élection présidentielle","Le montant des impôts directs payés au gouvernement fédéral"],
 "Chaque État a deux sénateurs, quelle que soit sa population. Le recensement déterminait (1) les représentants à la Chambre, (2) les grands électeurs et (3) les impôts directs.",
 [null,"C'est le premier effet du recensement vu en classe.","Le nombre de grands électeurs dépend du nombre de représentants, donc du recensement.","Les impôts directs étaient répartis selon la population, d'où le désavantage du compromis pour le Sud."]);
Q("const","Quel était le principal avantage du compromis des trois cinquièmes pour les États du Sud ?",
 ["Une plus grande représentation à la Chambre des représentants","Moins d'impôts directs à payer","L'abolition graduelle de l'esclavage","Le contrôle du Sénat"],
 "Compter les personnes en esclavage (même aux 3/5) augmentait la population officielle du Sud, donc ses sièges à la Chambre et ses grands électeurs, alors que ces personnes ne pouvaient pas voter.",
 [null,"C'est l'inverse : être compté augmentait aussi les impôts directs du Sud. C'était le prix du compromis.","Le compromis protégeait l'esclavage ; il ne prévoyait aucune abolition.","Le Sénat ne dépend pas de la population : deux sénateurs par État."]);
Q("const","Quel « prix » le Sud payait-il pour le compromis des trois cinquièmes ?",
 ["Il payait plus d'impôts directs que si les personnes en esclavage n'étaient pas comptées","Il perdait des sièges à la Chambre","Il devait arrêter la traite immédiatement","Il ne pouvait plus élire de président"],
 "Le cours le résume : « Le Sud paie plus d'impôts… MAIS les États du Sud ont une plus grande représentation à la Chambre. »",
 [null,"Le Sud gagnait des sièges, il n'en perdait pas.","La traite était protégée jusqu'en 1808 par une autre clause.","Les grands électeurs du Sud augmentaient grâce au compromis."]);
Q("const","Que dit l'article I, section 9, clause 1 de la Constitution ?",
 ["Le Congrès ne peut pas interdire l'importation de personnes en esclavage avant 1808","Les esclaves fugitifs doivent être rendus à leurs propriétaires","Les personnes en esclavage comptent pour trois cinquièmes","L'esclavage est interdit au nord de 36°30'"],
 "Cette clause protège la traite (« Migration or Importation of such Persons ») jusqu'en 1808, avec une taxe maximale de 10 dollars par personne.",
 [null,"C'est l'article IV, section 2, clause 3 (la clause des esclaves fugitifs).","C'est l'article I, section 2, clause 3.","C'est le compromis du Missouri (1820), pas la Constitution."]);
Q("const","Que dit l'article IV, section 2, clause 3 de la Constitution ?",
 ["Une personne « tenue au service » qui s'échappe dans un autre État doit être rendue","Le Congrès peut taxer l'importation d'esclaves jusqu'à 10 dollars","Chaque État décide par vote s'il accepte l'esclavage","Les personnes en esclavage peuvent racheter leur liberté"],
 "C'est la clause des esclaves fugitifs : même dans un État libre, une personne échappée « shall be delivered up » à son propriétaire. Les États libres ne pouvaient donc pas protéger les fugitifs.",
 [null,"C'est l'article I, section 9.","C'est l'idée de la souveraineté populaire (1850-1854), pas la Constitution de 1787.","La Constitution ne dit rien de tel."]);
Q("const","Le mot « esclavage » apparaît-il dans la Constitution de 1787 ?",
 ["Non : elle utilise des euphémismes comme « other Persons » ou « Person held to Service or Labour »","Oui, dans le préambule","Oui, dans le dixième amendement","Oui, dans la Déclaration des droits"],
 "Les rédacteurs ont évité le mot tout en protégeant l'institution, que l'on appelait « l'institution particulière » (the peculiar institution).",
 [null,"Le préambule parle de « justice » et de « liberty », jamais d'esclavage.","Le dixième amendement parle des pouvoirs réservés aux États.","La Déclaration des droits (Bill of Rights) ne mentionne pas l'esclavage."]);
Q("const","Quel paradoxe le cours souligne-t-il au sujet de Thomas Jefferson ?",
 ["Il qualifiait l'esclavage de « tache hideuse » mais tenait plus de 100 personnes en esclavage en écrivant la Déclaration","Il était abolitionniste et n'a jamais possédé d'esclaves","Il a écrit le compromis des trois cinquièmes","Il a voté contre la Déclaration d'indépendance"],
 "Jefferson a dit que l'esclavage était « moralement dépravé » et une « tache hideuse » sur l'Amérique, alors qu'il tenait lui-même plus de 100 personnes en esclavage.",
 [null,"Jefferson était esclavagiste. C'est justement la contradiction.","Le compromis a été négocié à la Convention de 1787 ; Jefferson était alors en France.","Jefferson est l'auteur principal de la Déclaration."]);
Q("const","Combien de personnes George Washington a-t-il tenues en esclavage au cours de sa vie, selon le cours ?",
 ["Plus de 600","Aucune","Environ 10","Plus de 100 000"],
 "Washington a tenu plus de 600 personnes en esclavage, même s'il a dénoncé l'esclavage comme « repugnant ».",
 [null,"Washington était esclavagiste, comme la plupart des Pères fondateurs.","Le chiffre du cours est beaucoup plus élevé.","Ce chiffre est impossible pour une seule plantation."]);
Q("const","Selon le cours, lequel des Pères fondateurs suivants n'était PAS esclavagiste ?",
 ["John Adams","Thomas Jefferson","George Washington","James Madison"],
 "Le cours dit : « À l'exception de John Adams, la plupart des Pères fondateurs étaient des esclavagistes. »",
 [null,"Jefferson tenait plus de 100 personnes en esclavage.","Washington en a tenu plus de 600.","Madison, de Virginie, était aussi esclavagiste."]);
Q("const","Qu'est-il arrivé au passage de la Déclaration d'indépendance qui qualifiait la traite de « crime abominable » ?",
 ["Il a été coupé","Il est devenu le premier amendement","Il a été ajouté à la Constitution","Il a mis fin à la traite en 1776"],
 "Jefferson avait écrit un passage contre la traite, mais il a été supprimé du texte final, notamment à cause des délégués du Sud.",
 [null,"Le premier amendement porte sur la liberté d'expression et de religion.","La Constitution a au contraire protégé la traite jusqu'en 1808.","La traite a continué légalement jusqu'en 1808."]);
Q("const","Quelle description correspond au parti fédéraliste ?",
 ["Gouvernement central fort, interprétation souple de la Constitution, économie industrielle, nord-est","Pouvoir des États, interprétation stricte, agriculture, sud et ouest","Abolition immédiate de l'esclavage","Alliance privilégiée avec la France"],
 "Les fédéralistes (Hamilton, Adams, Jay…) voulaient ratifier la Constitution et un gouvernement fédéral fort. Ils privilégiaient le Royaume-Uni et l'industrie, et étaient forts dans le nord-est.",
 [null,"C'est le portrait des antifédéralistes.","Aucun des deux partis ne défendait l'abolition immédiate.","Les antifédéralistes privilégiaient la France ; les fédéralistes le Royaume-Uni."]);
Q("const","Quelle description correspond aux antifédéralistes ?",
 ["Peur d'un gouvernement central tyrannique, droits des États, interprétation stricte","Ratification rapide de la Constitution","Économie industrielle du nord-est","Relations privilégiées avec le Royaume-Uni"],
 "Les antifédéralistes (Jefferson, Monroe, Patrick Henry, George Mason…) s'opposaient à la ratification, défendaient le pouvoir des États et étaient forts dans le sud et l'ouest agricoles.",
 [null,"Ils s'opposaient à la ratification.","Leur économie privilégiée était l'agriculture.","Ils privilégiaient la France."]);
Q("const","Lequel de ces hommes était antifédéraliste ?",
 ["Patrick Henry","Alexander Hamilton","John Jay","Benjamin Franklin"],
 "Patrick Henry figure dans la liste antifédéraliste du cours, avec Jefferson, Monroe, Richard Henry Lee, Melancton Smith, George Mason et George Clinton.",
 [null,"Hamilton est le chef des fédéralistes.","John Jay (futur juge de la Cour suprême) était fédéraliste.","Franklin est dans la liste fédéraliste du cours."]);
Q("const","Lequel de ces hommes était fédéraliste ?",
 ["Alexander Hamilton","Thomas Jefferson","James Monroe","George Mason"],
 "Hamilton défendait un gouvernement central fort et une économie industrielle.",
 [null,"Jefferson (3e président) était antifédéraliste.","Monroe (5e président) était antifédéraliste.","George Mason était antifédéraliste."]);
Q("const","Pourquoi la défense des droits des États par les antifédéralistes était-elle liée à l'esclavage ?",
 ["Un gouvernement fédéral faible et une interprétation stricte empêchaient Washington d'intervenir contre l'esclavage dans les États du Sud","Les antifédéralistes voulaient que le gouvernement fédéral abolisse l'esclavage","Les droits des États n'avaient aucun rapport avec l'économie du Sud","Les fédéralistes défendaient tous l'esclavage"],
 "Le Sud agricole dépendait du travail forcé. Limiter le pouvoir central protégeait l'esclavage contre une intervention fédérale. Cet argument revient plus tard avec la crise de la nullité et la sécession.",
 [null,"C'est l'inverse : moins de pouvoir fédéral, moins de risque pour l'esclavage.","L'économie agricole du Sud reposait sur l'esclavage ; c'est le lien central.","Des fédéralistes comme Pinckney défendaient l'esclavage, mais pas tous ; et la question porte sur les antifédéralistes."]);
Q("const","Comment l'Amérique anglaise définissait-elle la race, selon le cours ?",
 ["Un système binaire, blancs et non-blancs, où « une goutte » d'ascendance non blanche suffisait","Un système complexe de castas avec plusieurs catégories","Selon le lieu de naissance (Europe ou Amériques)","La race n'existait pas comme catégorie légale"],
 "Dans l'Amérique anglaise, il fallait être « 100 » blanc ; « une goutte » (one drop) faisait de quelqu'un un non-blanc.",
 [null,"C'est le système de l'Amérique latine.","La distinction péninsulaires/créoles appartient au système de castas latino-américain.","La race était au contraire une catégorie légale centrale."]);
Q("const","Dans le système de castas de l'Amérique latine, qui étaient les créoles ?",
 ["Des blancs nés dans les Amériques","Des blancs nés en Europe","Des personnes métisses blanches et non blanches","Des personnes en esclavage"],
 "Péninsulaires : blancs nés en Europe. Créoles : blancs nés dans les Amériques. Mestizos : métis.",
 [null,"Ce sont les péninsulaires.","Ce sont les mestizos.","Les personnes en esclavage formaient une catégorie à part."]);
Q("const","Quelle différence le cours fait-il entre l'Amérique latine et l'Amérique anglaise ?",
 ["L'Amérique latine offrait des chemins plus diversifiés vers la liberté et la promotion sociale","L'Amérique latine n'avait pas d'esclavage","L'Amérique anglaise avait plus de catégories raciales","Il n'y avait aucune différence"],
 "Le système de castas, plus complexe, permettait plus de mobilité que le système binaire anglais.",
 [null,"L'esclavage existait aussi en Amérique latine.","C'est l'Amérique latine qui avait plus de catégories.","Le cours compare justement deux systèmes différents."]);
Q("const","Pour cultiver quelles cultures (crops) fallait-il surtout le travail des personnes en esclavage aux États-Unis ?",
 ["Le tabac, le riz, l'indigo et le coton","Le blé, l'avoine et l'orge","Les pommes de terre et les pommes","Le maïs et le soja du Midwest"],
 "Les cultures de plantation du Sud demandaient énormément de main-d'œuvre. Le coton est devenu la plus importante au XIXe siècle.",
 [null,"Ce sont des céréales cultivées surtout par de petits fermiers du Nord.","Ce ne sont pas des cultures de plantation.","Le soja n'était pas une culture importante à l'époque."]);
Q("const","D'après la discussion en classe, pourquoi a-t-on « inventé » la race ?",
 ["Pour justifier l'esclavage et une hiérarchie qui exploitait le travail des personnes asservies","Parce que la science avait prouvé des différences biologiques","Pour organiser le recensement","Pour encourager l'égalité"],
 "La race est une construction sociale : elle a servi à justifier qu'on asservisse certaines personnes pour leur travail.",
 [null,"La race n'a pas de base biologique solide ; c'est une catégorie sociale.","Le recensement a utilisé la race, mais ce n'est pas la raison de son invention.","Elle a servi à justifier l'inégalité."]);
Q("const","Quelle est la question essentielle de la leçon sur la Constitution et l'esclavage ?",
 ["Est-ce que la Constitution a établi un gouvernement juste ?","Qui a gagné la Guerre civile ?","Pourquoi Lincoln a-t-il été élu ?","Qu'est-ce que la souveraineté populaire ?"],
 "Toute la leçon (3/5, traite, clause des fugitifs, Pères fondateurs esclavagistes) sert à répondre à cette question.",
 [null,"La guerre est étudiée plus tard (leçon 5).","L'élection de 1860 est la leçon 4.","La souveraineté populaire apparaît avec le compromis de 1850 (leçon 3)."]);

/* ---------------- Sources : comment les rédacteurs ont protégé l'esclavage ---------------- */
Q("src","À la Convention de 1787, que proposait Luther Martin (notes de Madison, 21 août) ?",
 ["Permettre d'interdire ou de taxer l'importation d'esclaves","Abolir immédiatement l'esclavage dans tous les États","Compter les esclaves comme des personnes entières","Laisser chaque État importer ce qu'il veut"],
 "Martin disait que le compromis des 3/5 encourageait la traite, que l'esclavage affaiblissait une partie de l'Union et qu'il était contraire aux principes de la Révolution.",
 [null,"Martin parlait de la traite, pas d'une abolition générale.","Ce n'était pas sa proposition.","C'est la position d'Ellsworth."]);
Q("src","Qui a dit à la Convention : « Religion and humanity had nothing to do with this question. Interest alone is the governing principle with nations » ?",
 ["John Rutledge","Luther Martin","Benjamin Franklin","Oliver Ellsworth"],
 "Rutledge (Caroline du Sud) disait que la vraie question était de savoir si les États du Sud feraient partie de l'Union.",
 [null,"Martin voulait limiter la traite pour des raisons morales.","Franklin a fait un discours sur les défauts de la Constitution, pas celui-ci.","Ellsworth disait que la moralité de l'esclavage appartenait aux États."]);
Q("src","Selon Rutledge, pourquoi les États du Nord ne devraient-ils pas s'opposer à l'augmentation du nombre d'esclaves ?",
 ["Ils deviendraient les transporteurs (carriers) des marchandises produites par les esclaves","Ils pourraient aussi acheter des esclaves","L'esclavage allait disparaître tout seul","La Bible l'autorisait"],
 "Rutledge fait un argument d'intérêt économique : le commerce maritime du Nord profiterait des produits du Sud.",
 [null,"Ce n'est pas son argument.","Il ne prédit pas la fin de l'esclavage.","Il dit justement que la religion n'a rien à voir."]);
Q("src","Quelle était la position d'Oliver Ellsworth sur la traite ?",
 ["Laisser chaque État importer ce qu'il veut ; la moralité de l'esclavage appartient aux États","Interdire la traite immédiatement","Taxer chaque esclave importé à 100 dollars","Abolir l'esclavage dans les territoires"],
 "« Let every State import what it pleases. » Ellsworth ajoutait que l'ancienne confédération ne s'en était pas mêlée.",
 [null,"Il voulait laisser la clause telle quelle.","La Constitution fixe un maximum de 10 dollars.","Il ne parle pas des territoires."]);
Q("src","Qu'a déclaré Charles Pinckney à la Convention ?",
 ["La Caroline du Sud n'accepterait jamais la Constitution si elle interdisait la traite","La Caroline du Sud voulait abolir l'esclavage","La traite était contraire aux principes de la Révolution","Les esclaves devaient être comptés comme des personnes entières"],
 "C'est une menace : sans protection de la traite, la Caroline du Sud ne rejoindrait pas l'Union. Ce chantage explique les compromis de 1787.",
 [null,"C'est le contraire de sa position.","C'est l'argument de Luther Martin.","Ce n'est pas ce que dit cet extrait."]);
Q("src","Quand Luther Martin dit que l'esclavage « affaiblissait une partie de l'Union que les autres étaient obligées de protéger », il veut dire que…",
 ["le Nord devrait aider à réprimer d'éventuelles révoltes d'esclaves dans le Sud","le Sud était plus faible économiquement","les esclaves pourraient voter","le Sud perdrait des sièges"],
 "Le risque d'insurrection rendait le Sud vulnérable, et le reste de l'Union serait obligé de le défendre.",
 [null,"Il parle de sécurité, pas d'économie.","Les esclaves ne votaient pas.","Le compromis donnait au contraire plus de sièges au Sud."]);
Q("src","Dans son discours du 17 septembre 1787, que dit Benjamin Franklin de la Constitution ?",
 ["Il l'accepte « avec tous ses défauts » parce qu'il ne s'attend pas à mieux","Il la rejette parce qu'elle protège l'esclavage","Il pense qu'elle est parfaite","Il demande une nouvelle convention"],
 "Franklin sacrifie ses objections « au bien public » et demande aux délégués de la recommander unanimement.",
 [null,"Il l'accepte, même s'il n'en approuve pas toutes les parties.","Il dit qu'elle est « proche de la perfection », pas parfaite, et qu'une assemblée d'hommes ne peut rien produire de parfait.","Il doute qu'une autre convention puisse faire mieux."]);
Q("src","Pourquoi Franklin dit-il qu'une assemblée ne peut pas produire une constitution parfaite ?",
 ["Parce qu'elle réunit aussi les préjugés, les passions, les erreurs et les intérêts locaux des hommes","Parce que les délégués n'étaient pas assez nombreux","Parce que le Royaume-Uni s'y opposait","Parce que la Convention a duré trop peu de temps"],
 "C'est sa justification du compromis : les hommes apportent leur sagesse mais aussi leurs défauts.",
 [null,"Il ne parle pas du nombre de délégués.","Le Royaume-Uni n'est pas mentionné.","Il ne parle pas de la durée."]);
Q("src","Quelle est une limite des notes de James Madison sur la Convention comme source historique ?",
 ["Ce sont les résumés d'un seul délégué, pas une transcription mot à mot","Elles ont été écrites 200 ans après la Convention","Madison n'était pas présent","Elles ne parlent que de l'économie"],
 "Origine : un délégué présent, ce qui donne une grande valeur. Limite : sa perspective et ses choix de résumé influencent ce qu'il rapporte.",
 [null,"Madison les a prises pendant la Convention.","Madison était délégué de Virginie.","Elles rapportent des débats moraux et politiques sur l'esclavage."]);

/* ---------------- La résistance ---------------- */
Q("res","Lequel est un exemple de résistance « quotidienne » à l'esclavage ?",
 ["Travailler intentionnellement lentement ou mal","La révolte armée","L'incendie volontaire","S'échapper"],
 "Formes quotidiennes : travailler lentement, simuler la maladie, abîmer l'équipement, voler de la nourriture, maintenir sa langue, sa culture et sa religion, apprendre à lire.",
 [null,"La révolte armée est une forme « extrême ».","L'incendie volontaire est dans la colonne « extrême » du cours.","S'échapper est classé comme forme « extrême »."]);
Q("res","Lequel est un exemple de résistance « extrême » selon le cours ?",
 ["Défier les ordres ouvertement","Simuler être malade","Maintenir sa propre religion","Voler de la nourriture"],
 "Formes extrêmes : défier les ordres ouvertement, l'incendie volontaire, s'échapper, la révolte armée.",
 [null,"Simuler la maladie est une forme quotidienne.","Maintenir sa culture et sa religion est une forme quotidienne.","Voler de la nourriture ou des biens est une forme quotidienne."]);
Q("res","Maintenir sa langue, sa culture, ses coutumes et sa religion est classé comme…",
 ["une forme de résistance quotidienne","une forme de résistance extrême","de la collaboration avec les esclavagistes","une forme d'abolitionnisme politique"],
 "Préserver son identité était une manière de refuser d'être réduit à une « propriété ».",
 [null,"Le cours le met dans la colonne « quotidienne ».","C'est au contraire un refus de la domination.","L'abolitionnisme est un mouvement politique et moral surtout dans le Nord."]);
Q("res","Qu'était le « chemin de fer souterrain » (Underground Railroad) ?",
 ["Un réseau secret de routes et de maisons sûres qui aidait les personnes en esclavage à fuir vers le Nord et le Canada","Une vraie ligne de train sous terre","Le chemin de fer transcontinental","Une loi fédérale sur les esclaves fugitifs"],
 "Ce n'était pas un train : le vocabulaire (conducteurs, gares) était un code pour un réseau clandestin de fuite.",
 [null,"Le nom est une métaphore.","Le chemin de fer transcontinental est un projet du programme de Lincoln en 1860.","La loi sur les esclaves fugitifs faisait le contraire : elle obligeait à rendre les fugitifs."]);
Q("res","Quel type de résistance Harriet Tubman a-t-elle pratiqué ?",
 ["Elle s'est échappée puis est retournée plusieurs fois dans le Sud pour guider d'autres personnes vers la liberté","Elle a mené une révolte armée en Virginie en 1831","Elle a attaqué l'arsenal de Harpers Ferry","Elle a publié The Liberator"],
 "Tubman est la « conductrice » la plus célèbre du chemin de fer souterrain. Son moyen efficace : la fuite organisée, en secret, de nuit.",
 [null,"C'est Nat Turner.","C'est John Brown.","C'est William Lloyd Garrison."]);
Q("res","Qui était Nat Turner ?",
 ["Un homme en esclavage qui a mené une révolte armée en Virginie en 1831","Un abolitionniste blanc qui a attaqué Harpers Ferry","Le juge de la décision Dred Scott","Un éditeur de journal à Boston"],
 "Turner, un prédicateur asservi, a mené la révolte la plus meurtrière de l'histoire des États-Unis, quelques mois après le premier numéro de The Liberator.",
 [null,"C'est John Brown, en 1859.","C'est Roger B. Taney.","C'est Garrison."]);
Q("res","Qui était John Brown ?",
 ["Un abolitionniste blanc qui a attaqué l'arsenal fédéral de Harpers Ferry en 1859 pour armer les personnes en esclavage","Un homme en esclavage qui a mené une révolte en 1831","Le candidat de l'Union constitutionnelle en 1860","Un général confédéré"],
 "Brown voulait déclencher une insurrection. Il a été capturé, jugé et pendu. Il est devenu un martyr dans le Nord et a terrifié le Sud.",
 [null,"C'est Nat Turner.","C'est John Bell.","Brown était un ennemi de l'esclavage."]);
Q("res","Quelle est une SIMILARITÉ entre la révolte de Nat Turner et le raid de John Brown ?",
 ["Les deux étaient violents, ont échoué et ont augmenté la peur des esclavagistes du Sud","Les deux ont été menés par des personnes en esclavage","Les deux ont réussi à libérer des milliers de personnes","Les deux ont eu lieu pendant la Guerre civile"],
 "Les deux ont fini par l'exécution de leur chef et ont renforcé la peur et la répression dans le Sud.",
 [null,"Brown était un homme blanc libre du Nord.","Les deux ont échoué militairement.","Turner : 1831 ; Brown : 1859. La guerre commence en 1861."]);
Q("res","Quelle est une DIFFÉRENCE entre la révolte de Nat Turner et le raid de John Brown ?",
 ["Turner était asservi et a mené des personnes asservies ; Brown était un abolitionniste blanc qui a attaqué un arsenal fédéral","Turner a réussi, Brown a échoué","Turner était pacifiste","Brown a agi en 1831 et Turner en 1859"],
 "La différence principale tient à qui agit et contre quoi : une plantation en Virginie pour Turner, une propriété fédérale pour Brown.",
 [null,"Les deux ont échoué.","Turner a mené une révolte armée.","Les dates sont inversées : Turner 1831, Brown 1859."]);
Q("res","Quelle a été une conséquence de la révolte de Nat Turner ?",
 ["Des lois plus sévères dans le Sud, par exemple contre l'apprentissage de la lecture et les rassemblements","L'abolition de l'esclavage en Virginie","Le compromis du Missouri","L'élection de Lincoln"],
 "Le Sud a réagi par plus de répression et par la peur que les abolitionnistes du Nord encouragent les révoltes.",
 [null,"La Virginie a renforcé l'esclavage.","Le compromis du Missouri date de 1820, avant la révolte.","Lincoln est élu en 1860, presque 30 ans plus tard."]);
Q("res","Pourquoi le raid de John Brown (1859) a-t-il eu un si grand impact politique ?",
 ["Il a fait de Brown un martyr dans le Nord et a convaincu le Sud que le Nord voulait détruire l'esclavage, juste avant l'élection de 1860","Il a libéré tous les esclaves de Virginie","Il a été approuvé par le Congrès","Il a mis fin à la guerre"],
 "Le raid a approfondi la division entre le Nord et le Sud au pire moment, un an avant l'élection de Lincoln.",
 [null,"Le raid a échoué en quelques jours.","Le Congrès ne l'a pas approuvé ; Brown a été pendu pour trahison.","La guerre n'avait pas encore commencé."]);
Q("res","Pourquoi n'y a-t-il pas eu plus de grandes révoltes d'esclaves aux États-Unis ?",
 ["La surveillance, les patrouilles armées et les représailles brutales rendaient les révoltes extrêmement dangereuses","Les personnes en esclavage acceptaient leur condition","L'esclavage était doux aux États-Unis","Les abolitionnistes organisaient toutes les révoltes"],
 "Les esclavagistes contrôlaient les armes, les routes et la loi, et les représailles touchaient aussi les familles. La résistance prenait donc souvent des formes quotidiennes.",
 [null,"Les nombreuses formes de résistance quotidienne montrent qu'elles ne l'acceptaient pas.","L'esclavage reposait sur la violence.","La plupart des abolitionnistes refusaient la violence (persuasion morale)."]);
Q("res","Quelle conclusion peut-on tirer du nombre limité de grandes révoltes ?",
 ["Ce n'était pas une acceptation : la résistance prenait surtout des formes quotidiennes et cachées","L'esclavage n'était pas violent","Les personnes en esclavage n'étaient pas organisées du tout","Les révoltes n'avaient aucun impact"],
 "Le petit nombre de révoltes reflète la puissance de la répression, pas un consentement.",
 [null,"La répression des révoltes montre au contraire la violence du système.","Le chemin de fer souterrain montre une grande organisation.","Turner et Brown ont eu un impact énorme sur la peur et la politique."]);

/* ---------------- Foner ch. 12 : abolitionnisme et féminisme ---------------- */
Q("abo","Avant les années 1830, qui étaient presque les seuls à contester l'existence de l'esclavage, selon Foner ?",
 ["Les quakers, les personnes en esclavage et les Noirs libres","Les planteurs du Sud","Les présidents des États-Unis","Les marchands de New York"],
 "Foner écrit que, pendant longtemps, seuls les quakers, les esclaves et les Noirs libres semblaient prêts à contester l'esclavage.",
 [null,"Les planteurs défendaient l'esclavage.","Plusieurs présidents étaient esclavagistes ou favorables à la colonisation.","Beaucoup de marchands avaient des liens commerciaux avec le Sud."]);
Q("abo","Que proposait l'American Colonization Society (1816) ?",
 ["L'abolition graduelle de l'esclavage et l'installation des Noirs américains en Afrique","L'abolition immédiate et l'égalité des droits","L'expansion de l'esclavage vers l'ouest","Le droit de vote des femmes"],
 "La « colonisation » voulait dire déporter les personnes libérées vers l'Afrique, les Caraïbes ou l'Amérique centrale. La société a fondé le Liberia.",
 [null,"C'est le programme des abolitionnistes militants des années 1830.","Ce n'était pas son objectif.","Le suffrage féminin apparaît à Seneca Falls en 1848."]);
Q("abo","La capitale du Liberia, Monrovia, porte le nom de…",
 ["James Monroe","James Madison","Henry Clay","John Marshall"],
 "Le Liberia, sur la côte de l'Afrique de l'Ouest, a été fondé par l'American Colonization Society ; sa capitale honore le président Monroe.",
 [null,"Madison n'a pas donné son nom à la ville.","Clay soutenait la colonisation, mais Monrovia vient de Monroe.","Marshall soutenait aussi la colonisation, mais ce n'est pas lui."]);
Q("abo","Lequel de ces hommes SOUTENAIT la colonisation, selon Foner ?",
 ["Henry Clay","William Lloyd Garrison","David Walker","Frederick Douglass"],
 "Henry Clay, John Marshall et Andrew Jackson soutenaient l'American Colonization Society.",
 [null,"Garrison a écrit Thoughts on African Colonization contre la colonisation.","Walker demandait que les Noirs revendiquent leurs droits comme Américains.","Douglass voulait l'égalité aux États-Unis."]);
Q("abo","Selon Foner, sur quelle idée reposait la colonisation ?",
 ["L'Amérique était fondamentalement une société blanche ; les Noirs ne pourraient jamais y être égaux","Les Noirs devaient avoir les mêmes droits que les Blancs","L'Afrique avait besoin de travailleurs","L'esclavage allait s'étendre partout"],
 "Foner compare la colonisation au déplacement des Amérindiens : les deux reposaient sur l'idée d'une Amérique blanche.",
 [null,"C'est le contraire de la colonisation.","Ce n'est pas l'argument de Foner.","La colonisation visait la fin graduelle de l'esclavage."]);
Q("abo","Comment la plupart des Afro-Américains ont-ils réagi à l'idée de la colonisation ?",
 ["Ils s'y sont fermement opposés et ont affirmé qu'ils étaient Américains","Ils l'ont tous acceptée","Ils l'ont ignorée","Ils ont demandé à partir en Europe"],
 "En 1817, environ 3 000 Noirs libres se sont réunis à Philadelphie et ont affirmé qu'ils avaient droit à la même liberté et aux mêmes droits que les Blancs.",
 [null,"Quelques milliers sont partis au Liberia, mais la plupart s'y opposaient.","Au contraire, la colonisation a mobilisé les Noirs libres.","L'Europe n'est pas mentionnée."]);
Q("abo","En quoi l'abolitionnisme des années 1830 était-il différent du mouvement précédent ?",
 ["Il exigeait l'abolition immédiate et l'égalité des Noirs libérés comme membres de la république","Il voulait une émancipation graduelle et la colonisation","Il refusait de parler de religion","Il soutenait les droits des États"],
 "La nouvelle génération voyait l'esclavage comme un péché et une contradiction de la Déclaration d'indépendance. Elle voulait aussi combattre le racisme.",
 [null,"C'est l'ancienne approche qu'elle rejetait.","Sa conviction était justement religieuse : l'esclavage est un péché.","Les droits des États servaient surtout à défendre l'esclavage."]);
Q("abo","Qui a écrit An Appeal to the Coloured Citizens of the World (1829) ?",
 ["David Walker","Frederick Douglass","Theodore Weld","Henry Highland Garnet"],
 "Walker, un Noir libre né en Caroline du Nord qui tenait un magasin de vêtements à Boston, avertissait que la nation subirait une punition divine.",
 [null,"Douglass publie son Narrative en 1845.","Weld était un orateur formé par les revivals.","Garnet a fait son appel à la rébellion en 1843."]);
Q("abo","Quel journal William Lloyd Garrison a-t-il lancé en 1831 ?",
 ["The Liberator","The Columbian Orator","The Dial","The Free Woman"],
 "The Liberator, hebdomadaire de Boston, a donné une « voix permanente » au nouvel abolitionnisme.",
 [null,"The Columbian Orator est le livre que Douglass lisait enfant.","The Dial était la revue des transcendantalistes (Margaret Fuller).","The Free Woman était un journal féministe de Paris (1832)."]);
Q("abo","« I will be as harsh as truth… I will not equivocate… I will be heard. » Qui a écrit cela ?",
 ["William Lloyd Garrison","Abraham Lincoln","Stephen Douglas","Catharine Beecher"],
 "C'est l'annonce de Garrison dans le premier numéro de The Liberator : pas de modération sur l'esclavage.",
 [null,"Lincoln était beaucoup plus prudent sur l'esclavage.","Douglas défendait la souveraineté populaire.","Beecher s'opposait au rôle public des femmes abolitionnistes."]);
Q("abo","Quelle idée de Garrison la plupart des abolitionnistes ont-ils REJETÉE ?",
 ["Que le Nord abroge la Constitution et dissolve l'Union","L'abolition immédiate","Que les Noirs fassent partie de la société américaine","Que l'esclavage soit un péché"],
 "Garrison appelait la Constitution un « pacte avec le diable » et l'a brûlée, mais la plupart des abolitionnistes ne voulaient pas quitter l'Union.",
 [null,"Son appel à l'abolition immédiate a trouvé un grand écho.","Son pamphlet contre la colonisation a convaincu beaucoup de gens.","C'était une idée partagée par le mouvement."]);
Q("abo","Comment Garrison a-t-il qualifié la Constitution ?",
 ["Un pacte avec le diable (covenant with the devil)","Le document le plus parfait du monde","Une garantie de liberté pour tous","Une loi temporaire"],
 "Pour Garrison, la Constitution protégeait l'esclavage. Douglass, lui, a fini par penser qu'elle n'offrait aucune protection nationale à l'esclavage.",
 [null,"Il la condamnait.","Il pensait le contraire.","Il ne la décrit pas ainsi."]);
Q("abo","Quand l'American Anti-Slavery Society a-t-elle été fondée ?",
 ["1833","1816","1848","1860"],
 "Entre 1833 et la fin de la décennie, environ 100 000 habitants du Nord ont rejoint des groupes abolitionnistes locaux.",
 [null,"1816 est la fondation de l'American Colonization Society.","1848 est la convention de Seneca Falls.","1860 est l'élection de Lincoln."]);
Q("abo","Quelle technologie a aidé les abolitionnistes à diffuser leur message ?",
 ["La presse à vapeur, qui imprimait des millions de pamphlets, pétitions et journaux","La radio","Le télégraphe sans fil","La télévision"],
 "Les abolitionnistes ont profité de l'imprimerie à vapeur et de l'alphabétisation produite par l'école publique.",
 [null,"La radio n'existait pas encore.","Ce n'est pas mentionné et n'existait pas encore.","Anachronisme."]);
Q("abo","Qui était Theodore Weld ?",
 ["Un jeune ministre, converti par Charles G. Finney, qui a formé des orateurs pour porter le message « l'esclavage est un péché »","L'auteur de La Case de l'oncle Tom","Le président de l'American Colonization Society","Un sénateur du Sud"],
 "Weld utilisait les méthodes des revivals religieux : prédication fervente et appel à renoncer à ses péchés.",
 [null,"C'est Harriet Beecher Stowe.","Il était abolitionniste, pas colonisationniste.","Il venait du mouvement religieux du Nord."]);
Q("abo","Qu'est-ce que la « persuasion morale » (moral suasion) ?",
 ["Convaincre les esclavagistes de leur péché et le Nord de sa complicité, sans violence","Organiser des révoltes armées","Créer un parti politique pour gagner les élections","Acheter la liberté des esclaves"],
 "C'était la stratégie principale des abolitionnistes. Beaucoup étaient pacifistes (« non-résistants »).",
 [null,"La plupart des abolitionnistes rejetaient la violence.","Ils misaient d'abord sur l'opinion publique, pas sur les partis.","Ce n'était pas leur stratégie."]);
Q("abo","Qui étaient les « non-résistants » ?",
 ["Des abolitionnistes pacifistes qui voulaient éliminer la coercition de toutes les relations humaines","Des esclavagistes qui refusaient de résister au Nord","Des soldats confédérés","Des personnes en esclavage qui ne résistaient pas"],
 "Leur pacifisme explique la stratégie de persuasion morale.",
 [null,"Le terme désigne des abolitionnistes.","Ce n'est pas un terme militaire.","Le terme ne désigne pas les personnes asservies."]);
Q("abo","Pourquoi beaucoup de Sudistes croyaient-ils que les abolitionnistes voulaient déclencher une insurrection ?",
 ["La révolte de Nat Turner a éclaté quelques mois après le lancement de The Liberator","Garrison avait organisé la révolte de Nat Turner","Les abolitionnistes avaient une armée","Lincoln l'avait annoncé"],
 "Foner précise que Turner ne connaissait même pas Garrison, mais la coïncidence a renforcé la peur du Sud.",
 [null,"Garrison était totalement inconnu de Turner.","Ils étaient surtout pacifistes.","Lincoln n'était pas encore une figure nationale."]);
Q("abo","Qu'est-ce que la « citoyenneté de naissance » (birthright citizenship) défendue par les abolitionnistes ?",
 ["Toute personne née aux États-Unis est citoyenne, avec l'égalité complète, quelle que soit sa race","Seuls les enfants de citoyens blancs sont citoyens","La citoyenneté dépend de la propriété","La citoyenneté est décidée par chaque État"],
 "Cette idée sera intégrée à la Constitution après la Guerre civile. Les conventions de « colored citizens » la défendaient.",
 [null,"C'est ce que les abolitionnistes combattaient (et ce que Dred Scott affirmera).","Ce n'est pas l'idée.","Les abolitionnistes voulaient une citoyenneté nationale protégée par le gouvernement fédéral."]);
Q("abo","Quelles victoires les Noirs libres et leurs alliés ont-ils obtenues dans le Nord avant la guerre ?",
 ["L'abrogation des Black Laws de l'Ohio (1849) et l'intégration des écoles de Boston (1855)","Le droit de vote dans tous les États du Nord","La fin de l'esclavage dans le Sud","L'abolition de la loi sur les esclaves fugitifs"],
 "Leurs efforts échouaient souvent, mais ces victoires ont aidé à créer un nouveau discours sur les droits des citoyens.",
 [null,"La plupart des États du Nord leur refusaient encore le vote.","L'esclavage dans le Sud ne finit qu'avec la guerre.","Au contraire, le compromis de 1850 a renforcé cette loi."]);
Q("abo","Quel symbole national a reçu son nom grâce aux abolitionnistes ?",
 ["La Liberty Bell (cloche de la liberté)","Le drapeau américain","La Statue de la Liberté","L'aigle américain"],
 "La cloche s'appelait simplement Old State House Bell. Les abolitionnistes l'ont adoptée pour lier leur cause aux idéaux des fondateurs.",
 [null,"Le drapeau existait déjà avec ce nom.","La Statue de la Liberté arrive en 1886.","Ce n'est pas mentionné."]);
Q("abo","Qui a écrit An Appeal in Favor of That Class of Americans Called Africans (1833) ?",
 ["Lydia Maria Child","Angelina Grimké","Catharine Beecher","Harriet Tubman"],
 "Le titre résume la position abolitionniste : les esclaves et les Noirs libres sont membres de la communauté nationale.",
 [null,"Angelina Grimké a écrit une lettre dans The Liberator en 1837.","Beecher s'opposait à l'action publique des femmes abolitionnistes.","Tubman est connue pour le chemin de fer souterrain."]);
Q("abo","Qu'est-ce que La Case de l'oncle Tom (Uncle Tom's Cabin) ?",
 ["Le roman de Harriet Beecher Stowe (1852), l'écrit antiesclavagiste le plus lu de l'époque","L'autobiographie de Frederick Douglass","Un pamphlet de David Walker","Une décision de la Cour suprême"],
 "Publié en livre en 1852, il s'est vendu à plus d'un million d'exemplaires en 1854. Il s'inspire en partie de l'autobiographie de Josiah Henson.",
 [null,"Douglass a écrit Narrative of the Life of Frederick Douglass (1845).","Walker a écrit l'Appeal (1829).","C'est un roman."]);
Q("abo","Qu'a proclamé Henry Highland Garnet en 1843 ?",
 ["Que les personnes en esclavage devaient se révolter pour briser leurs chaînes","Que la colonisation était la solution","Que la Constitution était parfaite","Que les femmes devaient voter"],
 "Sa position contredisait tellement la persuasion morale que le compte rendu publié de la convention a omis son discours.",
 [null,"Garnet était un abolitionniste noir, opposé à la colonisation.","Ce n'était pas son message.","Ce n'était pas le sujet de son discours."]);
Q("abo","Quelles dates les communautés noires libres du Nord célébraient-elles à la place du 4 juillet ?",
 ["Le 1er janvier (fin de la traite, 1808) et le 1er août (émancipation aux Antilles britanniques)","Le 25 décembre et le 1er mai","Le 19 juin et le 14 avril","Le 17 septembre et le 22 juillet"],
 "Ces « freedom celebrations » rejetaient la prétention des États-Unis à être une terre de liberté.",
 [null,"Ce ne sont pas les dates de ce calendrier alternatif.","Le 19 juin (Juneteenth) est de 1865, après la guerre.","Ce sont des dates de 1787 et 1862."]);
Q("abo","Qui était Elijah P. Lovejoy ?",
 ["Un éditeur antiesclavagiste tué par une foule en 1837 à Alton (Illinois) en défendant sa presse","Un juge de la Cour suprême","Le premier président de l'American Anti-Slavery Society","Un général de l'Union"],
 "Il est devenu le « premier martyr » du mouvement. Les attaques contre la liberté de la presse ont rallié de nombreux habitants du Nord.",
 [null,"Ce n'est pas lui.","Ce n'est pas mentionné.","Il est mort en 1837, bien avant la guerre."]);
Q("abo","Qu'était la « gag rule » (règle du bâillon) adoptée par la Chambre en 1836 ?",
 ["Une règle qui interdisait d'examiner les pétitions contre l'esclavage","Une loi qui interdisait les journaux abolitionnistes","Une règle qui interdisait aux femmes de parler en public","Une loi qui rendait les esclaves fugitifs"],
 "Elle a été abrogée en 1844, surtout grâce à l'opposition de l'ancien président John Quincy Adams.",
 [null,"Ce sont les foules et le service postal (Amos Kendall) qui ont brûlé la littérature abolitionniste.","Ce n'est pas la gag rule.","C'est la loi sur les esclaves fugitifs."]);
Q("abo","Qui a obtenu l'abrogation de la gag rule en 1844 ?",
 ["John Quincy Adams","Andrew Jackson","John C. Calhoun","Henry Clay"],
 "L'ancien président, représentant du Massachusetts à partir de 1831, s'y est opposé sans relâche.",
 [null,"Jackson était président quand la littérature abolitionniste était brûlée.","Calhoun défendait l'esclavage.","Ce n'est pas lui."]);
Q("abo","Quel a été l'effet des attaques des foules et de la gag rule sur l'opinion du Nord ?",
 ["Beaucoup ont conclu que l'esclavage menaçait aussi les libertés des Américains blancs, comme la liberté d'expression","Le mouvement abolitionniste a disparu","Le Nord a adopté l'esclavage","Le Sud a accepté l'abolition"],
 "William Jay : « nous combattons maintenant pour la liberté d'expression, de la presse et de conscience ». Le mouvement a élargi son appui.",
 [null,"Le mouvement a grandi au lieu de disparaître.","C'est le contraire.","Le Sud est devenu plus défensif."]);
Q("abo","Qui menaient les foules antiabolitionnistes dans les villes du Nord ?",
 ["Des « gentlemen of property and standing », souvent des marchands liés au commerce du Sud","Des personnes en esclavage","Des femmes abolitionnistes","Des soldats de l'Union"],
 "Ces hommes craignaient que le mouvement perturbe l'Union, les profits du travail forcé et la suprématie blanche.",
 [null,"Ce n'est pas le cas.","Les femmes étaient la base du mouvement abolitionniste.","Il n'y avait pas encore de guerre."]);
Q("abo","Que s'est-il passé au Pennsylvania Hall en 1838 ?",
 ["Une foule de Philadelphie a brûlé ce lieu de réunion abolitionniste","Les abolitionnistes y ont fondé le Liberty Party","La Constitution y a été signée","Lincoln y a prononcé un discours"],
 "Avant de mettre le feu, la foule a « patriotiquement » mis en sécurité un portrait de George Washington.",
 [null,"Le Liberty Party a été fondé en 1840.","La Constitution a été signée à Independence Hall en 1787.","Ce n'est pas lié à Lincoln."]);
Q("abo","Qui étaient les sœurs Grimké ?",
 ["Les filles d'un esclavagiste de Caroline du Sud devenues quakers et abolitionnistes","Deux esclaves fugitives du Maryland","Les fondatrices de l'American Colonization Society","Les épouses de deux présidents"],
 "Angelina et Sarah Grimké donnaient des conférences contre l'esclavage. Des pasteurs du Massachusetts les ont dénoncées parce que des femmes parlaient en public.",
 [null,"Elles venaient d'une riche famille esclavagiste.","Elles étaient abolitionnistes.","Ce n'est pas le cas."]);
Q("abo","Quel livre Sarah Grimké a-t-elle publié en 1838 ?",
 ["Letters on the Equality of the Sexes, qui réclamait notamment « un salaire égal pour un travail égal »","Uncle Tom's Cabin","Woman in the Nineteenth Century","Sociology for the South"],
 "Elle se demandait pourquoi un tailleur gagnait « deux ou trois fois plus » qu'une femme pour le même travail.",
 [null,"C'est Harriet Beecher Stowe.","C'est Margaret Fuller (1845).","C'est George Fitzhugh, un défenseur de l'esclavage."]);
Q("abo","Dans sa lettre de 1837 (The Liberator), quel argument Angelina Grimké avance-t-elle ?",
 ["Les droits viennent de la nature morale de l'être humain, donc le sexe ne donne pas plus de droits à l'homme","Les femmes doivent rester dans la sphère domestique","Le ciel a fait l'homme supérieur et la femme subordonnée","Les femmes ne doivent pas signer de pétitions"],
 "« Whatever it is morally right for man to do, it is morally right for woman to do. » Le combat contre l'esclavage l'a menée aux droits des femmes.",
 [null,"C'est la position de Catharine Beecher.","C'est Beecher, pas Grimké.","C'est Beecher qui dit que les pétitions sortent de la « sphère féminine »."]);
Q("abo","Selon Catharine Beecher (1837), comment les femmes devaient-elles exercer leur pouvoir ?",
 ["Par l'influence pacifique et l'amour, dans le cercle domestique et social","En votant","En faisant des conférences abolitionnistes","En signant des pétitions au Congrès"],
 "Pour Beecher, « le ciel » avait désigné l'homme comme supérieur. Les pétitions et les conflits de partis sortaient de la sphère féminine.",
 [null,"Elle ne réclamait pas le vote.","Elle critiquait justement les tournées des Grimké.","Elle dit que les pétitions sont « entièrement en dehors » du devoir féminin."]);
Q("abo","Qui ont organisé la convention de Seneca Falls (1848) ?",
 ["Elizabeth Cady Stanton et Lucretia Mott","Harriet Tubman et Sojourner Truth","Angelina et Sarah Grimké","Margaret Fuller et Dorothea Dix"],
 "Elles avaient été exclues de la Convention antiesclavagiste mondiale de Londres en 1840 parce qu'elles étaient des femmes.",
 [null,"Elles ne sont pas les organisatrices.","Les Grimké se sont retirées du débat public avant 1848.","Fuller était en Europe ; Dix réformait les asiles."]);
Q("abo","Sur quel document la Déclaration des sentiments de Seneca Falls est-elle modelée ?",
 ["La Déclaration d'indépendance","La Constitution","Le compromis de 1850","The Liberator"],
 "Elle reprend « all men are created equal » en ajoutant les femmes : « all men and women are created equal ».",
 [null,"Le modèle est la Déclaration de 1776.","Ce n'est pas un modèle de déclaration de droits.","C'est un journal, pas un modèle de texte."]);
Q("abo","Quel est le PREMIER grief de la Déclaration des sentiments ?",
 ["Le refus du droit de vote aux femmes","L'interdiction de porter des pantalons","L'interdiction de voyager seule","Le refus de l'éducation primaire"],
 "« He has never permitted her to exercise her inalienable right to the elective franchise. » Seneca Falls marque le début d'une lutte de 70 ans pour le suffrage.",
 [null,"Le costume « bloomer » vient plus tard et n'est pas dans la Déclaration.","Ce n'est pas un grief du texte.","Le texte parle surtout de l'accès aux collèges (éducation supérieure)."]);
Q("abo","« And aren't I a woman? » Qui a prononcé cette phrase en 1851 ?",
 ["Sojourner Truth","Elizabeth Cady Stanton","Harriet Beecher Stowe","Lucretia Mott"],
 "Née en esclavage dans l'État de New York vers 1799, libre en 1827, Truth demandait que le mouvement pense aussi aux femmes pauvres et ouvrières.",
 [null,"Stanton a écrit la Déclaration des sentiments.","Stowe a écrit La Case de l'oncle Tom.","Mott a co-organisé Seneca Falls."]);
Q("abo","Pour quoi Dorothea Dix est-elle connue ?",
 ["Un traitement plus humain des malades mentaux ; 28 États ont construit des hôpitaux psychiatriques","Le premier journal féministe","L'école publique universelle","Le chemin de fer souterrain"],
 "Avant elle, les malades mentaux étaient souvent enfermés en prison avec les débiteurs et les criminels.",
 [null,"Ce n'est pas elle.","C'est Horace Mann.","C'est Harriet Tubman."]);
Q("abo","Quelle a été la cause immédiate de la scission du mouvement abolitionniste en 1840 ?",
 ["Un désaccord sur le rôle des femmes, après l'élection d'Abby Kelley à un comité de l'American Anti-Slavery Society","Un désaccord sur la colonisation","La mort de Garrison","L'élection de Lincoln"],
 "Les dissidents ont fondé l'American and Foreign Anti-Slavery Society, puis le Liberty Party.",
 [null,"Ce n'est pas la cause de 1840.","Garrison est mort bien plus tard.","Lincoln est élu 20 ans plus tard."]);
Q("abo","Qu'était le Liberty Party ?",
 ["Un parti abolitionniste qui a présenté James G. Birney à la présidentielle de 1840 (environ 7 000 voix)","Le parti de Lincoln en 1860","Le parti de Jefferson","Le parti des femmes à Seneca Falls"],
 "Il voulait faire de l'abolitionnisme un mouvement politique, contrairement à Garrison qui refusait de voter.",
 [null,"Lincoln était républicain.","Jefferson était antifédéraliste.","Ce n'est pas un parti féminin."]);
Q("abo","Selon Foner, quelle a été la plus grande réussite des abolitionnistes avant 1840 ?",
 ["Briser le « complot du silence » qui empêchait le débat public sur l'esclavage","Abolir l'esclavage dans le Sud","Faire élire un président abolitionniste","Obtenir le vote des femmes"],
 "En 1840, plus de 1 000 sociétés antiesclavagistes locales existaient dans le Nord.",
 [null,"L'esclavage n'est aboli qu'après la guerre.","Birney n'a obtenu qu'environ 7 000 voix.","Le suffrage féminin arrive au XXe siècle."]);
Q("abo","Qu'est-ce que le mouvement féministe de l'époque a emprunté à l'abolitionnisme ?",
 ["L'idée de liberté et d'égalité universelles, et l'analogie de « l'esclavage du sexe »","L'idée que les femmes sont naturellement inférieures","La stratégie de la révolte armée","La colonisation en Afrique"],
 "Les Grimké ont été les premières à appliquer la doctrine abolitionniste de liberté universelle aux femmes.",
 [null,"C'est l'idée que les féministes combattaient.","Ce n'est pas le cas.","Ce n'est pas le cas."]);
Q("abo","Horace Mann est connu pour…",
 ["la réforme de l'éducation : des écoles publiques financées par l'impôt","la défense de l'esclavage","la convention de Seneca Falls","la fondation du Liberia"],
 "En 1860, chaque État du Nord avait un système d'écoles publiques. Le Sud, où l'alphabétisation des Noirs était vue comme un danger, était très en retard.",
 [null,"Ce n'est pas lui.","Ce n'est pas lui.","Ce n'est pas lui."]);

/* ---------------- Douglass et Fitzhugh ---------------- */
Q("src","En quelle année Frederick Douglass a-t-il publié son Narrative ?",
 ["1845","1838","1852","1863"],
 "Le premier de ses trois récits autobiographiques a paru en 1845, sept ans après sa fuite.",
 [null,"1838 est l'année de sa fuite vers le Nord.","1852 est l'année de son discours sur le 4 juillet.","1863 est l'entrée en vigueur de la Proclamation d'émancipation."]);
Q("src","Quel livre Douglass a-t-il lu vers l'âge de 12 ans ?",
 ["The Columbian Orator","Uncle Tom's Cabin","The Liberator","Sociology for the South"],
 "Il y a trouvé un dialogue entre un maître et un esclave, et un discours de Sheridan sur l'émancipation des catholiques.",
 [null,"Ce roman date de 1852.","C'est un journal lancé en 1831.","C'est un livre proesclavagiste de 1854."]);
Q("src","Quelle leçon Douglass tire-t-il du dialogue entre le maître et l'esclave ?",
 ["Le pouvoir de la vérité sur la conscience, même d'un esclavagiste","Que la fuite est impossible","Que les maîtres sont toujours cruels","Que l'éducation est inutile"],
 "Dans le dialogue, les arguments de l'esclave convainquent le maître de le libérer volontairement.",
 [null,"Ce n'est pas la leçon du dialogue.","Le dialogue finit par une émancipation volontaire.","C'est le contraire : la lecture lui donne des mots pour penser."]);
Q("src","Pourquoi Douglass sentait-il parfois que savoir lire était « une malédiction plutôt qu'une bénédiction » ?",
 ["La lecture lui montrait sa condition misérable sans lui donner le remède","Il ne comprenait pas les livres","Son maître le punissait chaque jour","Il préférait travailler aux champs"],
 "« It had given me a view of my wretched condition, without the remedy. It opened my eyes to the horrible pit, but to no ladder upon which to get out. »",
 [null,"Il comprenait très bien ; c'est le problème.","Ce n'est pas la raison donnée.","Ce n'est pas ce qu'il dit."]);
Q("src","Comment Douglass a-t-il réagi quand deux Irlandais lui ont conseillé de fuir vers le Nord ?",
 ["Il a fait semblant de ne pas être intéressé, car il craignait un piège","Il s'est enfui le soir même","Il les a dénoncés à son maître","Il leur a demandé de l'argent"],
 "Certains Blancs encourageaient la fuite puis capturaient les fugitifs pour la récompense. Mais il a retenu leur conseil et décidé de fuir.",
 [null,"Il était trop jeune et voulait d'abord apprendre à écrire.","Il ne les a pas dénoncés.","Ce n'est pas dans le texte."]);
Q("src","Pourquoi Douglass voulait-il apprendre à écrire avant de s'enfuir ?",
 ["Pour pouvoir écrire son propre laissez-passer (pass)","Pour écrire au président","Pour devenir avocat","Pour écrire un roman"],
 "Un faux laissez-passer pouvait permettre de voyager sans être arrêté.",
 [null,"Ce n'est pas la raison.","Ce n'est pas dans le texte.","Ce n'est pas la raison."]);
Q("src","Comment Douglass s'est-il échappé en 1838 ?",
 ["En empruntant les papiers de libre d'un marin noir","Par la révolte armée","En achetant sa liberté","Grâce à la Proclamation d'émancipation"],
 "C'est ce qu'indique l'introduction de l'extrait dans Voices of Freedom.",
 [null,"Il ne s'est pas révolté par les armes.","Il ne l'a pas achetée.","La Proclamation date de 1863."]);
Q("src","À qui s'adresse surtout le Narrative de Douglass, et quel effet cela a-t-il ?",
 ["À des lecteurs blancs du Nord ; il montre son intelligence et son humanité pour réfuter les arguments proesclavagistes","Aux esclavagistes du Sud, pour les menacer","Aux personnes en esclavage, qui ne savaient pas lire","Au gouvernement britannique"],
 "L'auditoire du Nord explique son ton : éloquent, moral, et centré sur le lien entre éducation et liberté.",
 [null,"Le livre a été publié à Boston pour le public du Nord.","La plupart des personnes asservies n'avaient pas le droit d'apprendre à lire.","Ce n'est pas le public principal."]);
Q("src","Pourquoi Douglass lie-t-il si fortement l'éducation et la liberté ?",
 ["Apprendre à lire lui a donné les mots pour penser sa condition et réfuter les arguments en faveur de l'esclavage","Parce que l'école était obligatoire","Parce qu'il voulait devenir professeur","Parce que lire était autorisé à tous les esclaves"],
 "Son maître avait prédit que la lecture le rendrait mécontent. C'est ce mécontentement qui l'a mené à vouloir être libre.",
 [null,"Les esclaves n'avaient pas le droit d'aller à l'école.","Ce n'est pas la raison.","Au contraire, c'était interdit ou découragé."]);
Q("src","Qu'affirmait George Fitzhugh dans Sociology for the South (1854) ?",
 ["Il rejetait les idéaux jeffersoniens de liberté et d'égalité ; l'esclavage valait mieux que la « société libre »","Il demandait l'abolition immédiate","Il défendait les droits des femmes","Il soutenait la colonisation au Liberia"],
 "Fitzhugh a poussé l'argument proesclavagiste à l'extrême : maîtres et esclaves partageraient une « communauté d'intérêts » inconnue dans la société libre.",
 [null,"C'est un défenseur de l'esclavage.","Ce n'est pas son sujet.","Ce n'est pas son argument."]);
Q("src","Selon l'introduction de Voices of Freedom, lequel n'était PAS un pilier de l'idéologie proesclavagiste ?",
 ["L'abolition graduelle","Le racisme","Des passages bibliques","L'idée que l'esclavage garantissait l'égalité entre Blancs"],
 "Le racisme, la Bible (« serviteurs, obéissez à vos maîtres ») et l'égalité entre Blancs étaient les justifications principales.",
 [null,"Le racisme est décrit comme un pilier.","Les esclavagistes citaient la Bible.","Certains défenseurs disaient que l'esclavage garantissait l'égalité des Blancs."]);

/* ---------------- Leçon 3 : causes de la Guerre civile ---------------- */
Q("cause","Lequel de ces facteurs N'est PAS l'un des six facteurs des origines de la Guerre civile vus en classe ?",
 ["La guerre de 1812","Les droits des États et le fédéralisme dual","La crise de la nullité","Le sectionnalisme"],
 "Les six facteurs : divisions politiques, droits des États et fédéralisme dual, crise de la nullité, sectionnalisme, modernisation et industrialisation, différences économiques Nord/Sud. Tous liés à l'esclavage.",
 [null,"C'est l'un des six facteurs.","C'est l'un des six facteurs.","C'est l'un des six facteurs."]);
Q("cause","À quoi le cours relie-t-il TOUS les facteurs de la Guerre civile ?",
 ["À l'esclavage","À la religion","À l'immigration","À la politique étrangère"],
 "« Tous ce qui ont été lié à l'esclavage !!!! » Même les tarifs et les droits des États renvoient à la défense de l'esclavage.",
 [null,"Ce n'est pas le fil conducteur du cours.","Ce n'est pas le fil conducteur du cours.","Ce n'est pas le fil conducteur du cours."]);
Q("cause","Quel amendement est à la base de l'argument des « States' Rights » ?",
 ["Le 10e amendement : les pouvoirs non délégués aux États-Unis sont réservés aux États ou au peuple","Le 1er amendement","Le 2e amendement","Le 13e amendement"],
 "« The powers not delegated to the United States by the Constitution, nor prohibited by it to the States, are reserved to the States respectively, or to the people. »",
 [null,"Le 1er amendement protège la liberté d'expression et de religion.","Le 2e amendement porte sur les armes.","Le 13e amendement (1865) abolit l'esclavage."]);
Q("cause","La crise de la nullité (1832-1833) opposait…",
 ["la Caroline du Sud et le gouvernement fédéral, au sujet des droits de douane et des droits des États","le Nord et le Sud au sujet du Kansas","Lincoln et Douglas","les fédéralistes et les antifédéralistes au sujet de la ratification"],
 "C'est une crise constitutionnelle : un État pouvait-il refuser d'appliquer une loi fédérale ?",
 [null,"Le Kansas, c'est 1854 et « Bleeding Kansas ».","Les débats Lincoln-Douglas sont en 1858.","La ratification, c'est 1787-1788."]);
Q("cause","Qui la loi douanière (tarif) de 1828 favorisait-elle ?",
 ["L'industrie manufacturière de la Nouvelle-Angleterre et du Nord","Les planteurs de coton du Sud","Les fermiers de l'Ouest","Le Royaume-Uni"],
 "En taxant les importations britanniques, le tarif protégeait les industries nationales de la concurrence étrangère.",
 [null,"Le Sud trouvait que le tarif le pénalisait.","Ce n'est pas la perspective du cours.","Le tarif taxait justement les produits britanniques."]);
Q("cause","Quelle était la perspective du Sud sur le tarif de 1828 ?",
 ["Il pénalisait le Sud agricole en augmentant le prix des produits importés, au profit de l'industrie du Nord","Il protégeait le coton du Sud","Il aidait le Sud à vendre aux Britanniques","Il n'avait aucun effet sur le Sud"],
 "Le Sud importait beaucoup de produits manufacturés et exportait son coton : le tarif lui coûtait cher.",
 [null,"Il protégeait l'industrie, pas le coton.","Le Sud craignait des représailles britanniques sur le coton.","Le Sud se sentait directement visé."]);
Q("cause","Qu'est-ce que la doctrine de la nullité de John C. Calhoun ?",
 ["Un État peut déclarer nulles les lois fédérales qu'il juge inconstitutionnelles","Le président peut annuler les lois du Congrès","La Cour suprême ne peut pas juger les États","Les territoires décident eux-mêmes de l'esclavage"],
 "Calhoun, vice-président, a fourni la théorie : la Caroline du Sud a déclaré le tarif nul en 1832 et menacé de faire sécession.",
 [null,"Ce n'est pas la nullité.","Ce n'est pas la doctrine.","C'est la souveraineté populaire."]);
Q("cause","Comment la crise de la nullité s'est-elle terminée ?",
 ["Jackson a mobilisé l'armée contre la sécession, et un tarif de compromis a réduit progressivement les droits de douane","La Caroline du Sud a fait sécession en 1832","La Cour suprême a donné raison à Calhoun","Le tarif a été augmenté"],
 "Escalade militaire + compromis douanier. Mais l'héritage de Calhoun reste.",
 [null,"La Caroline du Sud fera sécession en 1860, pas en 1832.","Ce n'est pas la fin de la crise.","Il a été réduit progressivement."]);
Q("cause","Quel a été l'impact à long terme de la crise de la nullité ?",
 ["Les arguments de Calhoun ont fourni la justification théorique de la sécession en 1860-1861","Elle a mis fin au débat sur les droits des États","Elle a aboli l'esclavage en Caroline du Sud","Elle a créé le Parti républicain"],
 "Le cours : « Les arguments de Calhoun ont fourni la justification théorique de la sécession qui a ensuite été invoquée pendant la Guerre civile. »",
 [null,"Le débat a continué jusqu'à la guerre.","Ce n'est pas le cas.","Le Parti républicain naît en 1854."]);
Q("cause","Qu'est-ce que le sectionnalisme ?",
 ["Privilégier les intérêts de sa région plutôt que ceux de la nation ; le contraire du nationalisme","La division d'un État en comtés","L'union de tous les États","Une loi sur les territoires de l'Ouest"],
 "Nord, Sud et Ouest avaient des intérêts différents (industrie, esclavage, expansion).",
 [null,"Ce n'est pas le sens historique du mot.","C'est plutôt le nationalisme.","Ce n'est pas une loi."]);
Q("cause","Quelle description correspond au Nord dans le tableau du sectionnalisme ?",
 ["Industrie, usines, urbanisation, opposition à l'esclavage","Dépendance agricole, esclavagistes comme dirigeants politiques","« Rugged individualism » et nouvelles régions","Économie fondée sur le coton"],
 "Le Nord s'industrialise et s'urbanise ; il craint aussi de perdre de la main-d'œuvre à cause de l'expansion vers l'ouest.",
 [null,"C'est le Sud.","C'est l'Ouest.","C'est le Sud."]);
Q("cause","Quelle description correspond au Sud dans le tableau du sectionnalisme ?",
 ["Dépendance agricole, esclavagistes comme dirigeants politiques, l'esclavage comme valeur culturelle","Usines et urbanisation","Individualisme et terres libres","Opposition à l'esclavage"],
 "Pour le Sud, l'économie et l'esclavage étaient aussi des valeurs culturelles à défendre.",
 [null,"C'est le Nord.","C'est plutôt l'Ouest.","C'est le Nord."]);
Q("cause","Quelle grande question l'Ouest posait-il ?",
 ["Les nouvelles régions seraient-elles libres ou esclavagistes ?","Faut-il construire des usines ?","Faut-il rester dans l'Union britannique ?","Faut-il abolir les tarifs ?"],
 "L'expansion vers l'ouest a sans cesse relancé le conflit : compromis du Missouri, compromis de 1850, Kansas-Nebraska.",
 [null,"Ce n'est pas la question centrale.","Anachronisme.","Ce n'est pas la question liée à l'Ouest."]);
Q("cause","Quels sont les thèmes (concepts) de l'histoire BI ?",
 ["Changement et continuité, cause et conséquence, importance, perspective","Géographie, économie, politique, religion","Dates, lieux, personnages, batailles","Thèse, antithèse, synthèse, conclusion"],
 "Les objectifs de la leçon 3 demandent d'expliquer comment les causes de la guerre illustrent ces thèmes.",
 [null,"Ce ne sont pas les concepts BI.","Ce ne sont pas les concepts BI.","C'est une structure de dissertation."]);
Q("cause","Quel exemple illustre le mieux le thème BI « cause et conséquence » ?",
 ["L'acte Kansas-Nebraska a mené à la violence de « Bleeding Kansas »","Lincoln et Douglas voyaient la souveraineté populaire différemment","L'esclavage a continué malgré la Révolution","Le Liberia existe toujours"],
 "Une loi (cause) produit un effet direct (conséquence). Les autres exemples illustrent la perspective, la continuité ou rien de clair.",
 [null,"C'est un exemple de perspective.","C'est un exemple de continuité.","Ce n'est pas lié au cours."]);

/* ---------------- Compromis et Dred Scott ---------------- */
Q("comp","Quel problème a provoqué le compromis du Missouri (1819-1820) ?",
 ["Le Missouri voulait devenir un État esclavagiste alors qu'il y avait 11 États libres et 11 États esclavagistes","La Californie voulait entrer comme État libre","Le Kansas était en guerre","La Caroline du Sud refusait le tarif"],
 "Le Nord s'inquiétait du déséquilibre au Sénat si un 12e État esclavagiste entrait.",
 [null,"C'est le compromis de 1850.","C'est 1854-1856.","C'est la crise de la nullité."]);
Q("comp","Que prévoyait le compromis du Missouri ?",
 ["Le Missouri entre comme État esclavagiste, le Maine comme État libre, et pas d'esclavage au nord de 36°30' dans l'achat de la Louisiane","La Californie entre comme État libre","La souveraineté populaire dans tous les territoires","Une loi plus forte sur les esclaves fugitifs"],
 "Le compromis préserve l'équilibre 12/12 et trace la ligne 36°30'.",
 [null,"C'est 1850.","C'est l'acte Kansas-Nebraska (1854).","C'est le compromis de 1850."]);
Q("comp","Que signifiait la ligne 36°30' ?",
 ["Pas d'esclavage dans le territoire de l'achat de la Louisiane au nord de cette latitude (sauf le Missouri)","La frontière avec le Mexique","La limite de la Confédération","La ligne de front à Gettysburg"],
 "C'est la ligne du compromis du Missouri. Elle sera annulée en pratique par l'acte Kansas-Nebraska.",
 [null,"Ce n'est pas la frontière mexicaine.","La Confédération date de 1861.","Ce n'est pas militaire."]);
Q("comp","Pourquoi la Californie demandait-elle à entrer dans l'Union en 1849-1850 ?",
 ["Elle était très peuplée à cause de la ruée vers l'or (Gold Rush) de 1849","Elle avait gagné une guerre contre le Mexique","Elle voulait devenir un État esclavagiste","Le Missouri l'exigeait"],
 "La ruée vers l'or a fait exploser sa population ; elle demandait à entrer comme État libre, ce qui brisait l'équilibre.",
 [null,"Ce sont les États-Unis qui ont gagné la guerre.","Elle voulait entrer comme État libre.","Ce n'est pas le cas."]);
Q("comp","Quel traité a mis fin à la guerre américano-mexicaine (1846-1848) ?",
 ["Le traité de Guadalupe Hidalgo","Le traité de Paris","Le compromis de 1850","L'acte Kansas-Nebraska"],
 "Le Mexique cède les territoires actuels de l'Arizona, du Nouveau-Mexique, de l'Utah, du Nevada, du Colorado et du Wyoming pour 15 millions de dollars (la Cession mexicaine).",
 [null,"Le traité de Paris (1783) termine la Révolution américaine.","Ce n'est pas un traité.","C'est une loi de 1854."]);
Q("comp","Lequel de ces éléments faisait partie du compromis de 1850 ?",
 ["Le renforcement de la loi sur les esclaves fugitifs","L'annulation du compromis du Missouri","L'interdiction totale de l'esclavage dans l'Ouest","La sécession de la Caroline du Sud"],
 "Compromis de 1850 : Californie État libre ; souveraineté populaire pour le reste de la Cession mexicaine ; loi plus forte sur les esclaves fugitifs.",
 [null,"C'est l'acte Kansas-Nebraska (1854).","Le reste du territoire décide par souveraineté populaire.","C'est décembre 1860."]);
Q("comp","Qu'est-ce que la « souveraineté populaire » ?",
 ["Les habitants d'un territoire décident eux-mêmes par vote s'il sera libre ou esclavagiste","Le Congrès décide pour chaque territoire","La Cour suprême décide","Le président décide"],
 "C'est l'idée centrale de Stephen Douglas, appliquée en 1850 puis en 1854.",
 [null,"C'est justement ce que la souveraineté populaire évite.","Dred Scott (1857) va au contraire limiter le pouvoir des territoires.","Ce n'est pas le cas."]);
Q("comp","Qu'a fait l'acte Kansas-Nebraska (1854) ?",
 ["Il a essentiellement annulé le compromis du Missouri : tous les territoires de l'Ouest décident par souveraineté populaire","Il a fait entrer le Kansas comme État libre","Il a interdit l'esclavage au Nebraska","Il a mis fin à la traite"],
 "Le Kansas et le Nebraska étaient au nord de 36°30', donc fermés à l'esclavage avant 1854.",
 [null,"Le Kansas n'entre dans l'Union qu'en 1861.","Il laissait le choix aux habitants.","La traite est interdite depuis 1808."]);
Q("comp","Qu'est-ce que « Bleeding Kansas » ?",
 ["La violence et les fraudes électorales au Kansas après l'arrivée massive de colons pro- et anti-esclavagistes","Une bataille de la Guerre civile","Une épidémie de 1854","Le nom d'un journal abolitionniste"],
 "C'est la conséquence directe de l'acte Kansas-Nebraska : chaque camp voulait gagner le vote sur l'esclavage.",
 [null,"Elle a lieu avant la guerre (1854-1856).","Ce n'est pas une épidémie.","Ce n'est pas un journal."]);
Q("comp","Pourquoi Dred Scott a-t-il affirmé qu'il était libre ?",
 ["Il avait vécu dans un État libre (Illinois) et un territoire libre (Fort Snelling) avant d'être ramené au Missouri","Il avait acheté sa liberté","Il était né libre","Lincoln l'avait libéré"],
 "Il était courant que des esclaves emmenés en territoire libre poursuivent leur maître et obtiennent leur liberté.",
 [null,"Mme Emerson a refusé qu'il achète sa liberté en 1846.","Il est né en esclavage en Virginie vers 1799.","Lincoln n'était pas président en 1857."]);
Q("comp","Pourquoi Fort Snelling (dans l'actuel Minnesota) était-il un territoire libre ?",
 ["Le compromis du Missouri de 1820 y interdisait l'esclavage","Le compromis de 1850 l'avait décidé","Les habitants avaient voté","La Proclamation d'émancipation"],
 "Fort Snelling était au nord de 36°30' dans l'ancien territoire de la Louisiane.",
 [null,"Le compromis de 1850 concerne la Cession mexicaine.","Ce n'est pas le cas.","La Proclamation date de 1863."]);
Q("comp","Qui Dred Scott a-t-il poursuivi en justice ?",
 ["Irene Emerson, la veuve du docteur Emerson, pour « false imprisonment » et coups et blessures","Le président Buchanan","Le juge Taney","Abraham Lincoln"],
 "Le docteur John Emerson, chirurgien de l'armée, est mort en 1843 et a légué ses biens, y compris les Scott, à sa veuve.",
 [null,"Ce n'est pas le cas.","Taney a écrit la décision, il n'était pas la partie adverse.","Ce n'est pas le cas."]);
Q("comp","Qu'est-ce qui a déclenché le procès de Dred Scott en 1846 ?",
 ["Mme Emerson a refusé qu'il travaille pour racheter sa liberté","Il avait été vendu en Louisiane","Il avait tenté de fuir","Il voulait voter"],
 "Il voulait gagner et économiser de l'argent pour racheter sa liberté. Après le refus, il a porté plainte.",
 [null,"Ce n'est pas dans l'histoire.","Ce n'est pas dans l'histoire.","Ce n'est pas le cas."]);
Q("comp","Qui a rédigé la décision de la Cour suprême dans l'affaire Dred Scott (1857) ?",
 ["Le juge en chef Roger B. Taney","John Marshall","Stephen Douglas","John C. Calhoun"],
 "Taney apparaît sur la diapositive à côté de Scott.",
 [null,"Marshall est mort en 1835.","Douglas était sénateur.","Calhoun est mort en 1850."]);
Q("comp","Selon la décision Dred Scott, une personne noire descendant d'esclaves pouvait-elle être citoyenne des États-Unis ?",
 ["Non, donc elle ne pouvait pas porter plainte devant les tribunaux fédéraux","Oui, si elle était née dans un État libre","Oui, si elle avait vécu en territoire libre","Seulement si le Congrès le décidait"],
 "Lincoln le résume dans son discours : aucun descendant d'esclave importé d'Afrique ne peut être citoyen au sens de la Constitution.",
 [null,"La décision refuse la citoyenneté dans tous les cas.","C'est l'argument de Scott, rejeté par la Cour.","La Cour affirme que c'est une question constitutionnelle."]);
Q("comp","Que disait la décision Dred Scott au sujet de l'esclavage dans les territoires ?",
 ["Ni le Congrès ni une législature territoriale ne peut l'exclure, donc le compromis du Missouri était inconstitutionnel","Le Congrès peut l'interdire partout","Les habitants peuvent toujours voter pour l'interdire","L'esclavage est interdit dans tous les territoires"],
 "Les esclaves étaient vus comme une propriété protégée par la Constitution. Cela menaçait aussi la souveraineté populaire.",
 [null,"C'est le contraire.","C'est la doctrine de Freeport de Douglas, qui essaie de contourner la décision.","C'est le contraire."]);
Q("comp","Pourquoi la décision Dred Scott a-t-elle approfondi la division du pays ?",
 ["Elle a ouvert tous les territoires à l'esclavage et rendu les compromis impossibles, ce qui a indigné le Nord","Elle a aboli l'esclavage","Elle a donné la citoyenneté à tous","Elle a été acceptée par tout le monde"],
 "Pour Lincoln, elle faisait partie d'une « machinerie » qui pourrait rendre l'esclavage légal partout.",
 [null,"Elle a fait le contraire.","Elle a refusé la citoyenneté aux Noirs.","Le Nord l'a violemment rejetée."]);
Q("comp","Mettez dans l'ordre : compromis du Missouri, acte Kansas-Nebraska, compromis de 1850, décision Dred Scott.",
 ["Missouri (1820) → 1850 → Kansas-Nebraska (1854) → Dred Scott (1857)","1850 → Missouri → Dred Scott → Kansas-Nebraska","Kansas-Nebraska → Missouri → 1850 → Dred Scott","Missouri → Kansas-Nebraska → 1850 → Dred Scott"],
 "Chaque étape a détruit un peu plus la solution précédente : la ligne 36°30', puis la souveraineté populaire, puis la décision de la Cour.",
 [null,"Le compromis du Missouri est le plus ancien (1820).","Kansas-Nebraska (1854) vient après 1850.","1850 vient avant 1854."]);

/* ---------------- Leçon 4 : Lincoln-Douglas, 1860, sécession ---------------- */
Q("elec","Pour quel poste Lincoln et Douglas se sont-ils affrontés lors de leurs débats de 1858 ?",
 ["Un siège de sénateur de l'Illinois","La présidence","Le poste de gouverneur de l'Illinois","Juge de la Cour suprême"],
 "Il y a eu sept débats en plein air qui ont attiré l'attention de tout le pays.",
 [null,"La présidentielle, c'est 1860.","C'était le Sénat des États-Unis.","Ce n'est pas le cas."]);
Q("elec","Quel a été le résultat des débats Lincoln-Douglas de 1858 ?",
 ["Lincoln a perdu l'élection, mais les débats l'ont rendu célèbre et ont abîmé la carrière de Douglas","Lincoln a gagné le siège au Sénat","Douglas a abandonné la politique","Les deux ont été élus"],
 "Cette visibilité nationale aide Lincoln à gagner la présidence en 1860.",
 [null,"Douglas a gardé son siège.","Douglas est candidat en 1860.","Il n'y avait qu'un siège."]);
Q("elec","Que veut dire Lincoln avec « A house divided against itself cannot stand » (1858) ?",
 ["Le pays ne peut pas rester durablement à moitié esclavagiste et à moitié libre ; il deviendra tout l'un ou tout l'autre","L'Union va se dissoudre bientôt","Chaque État doit décider seul","Il faut séparer le Nord et le Sud"],
 "Lincoln dit qu'il ne s'attend pas à ce que l'Union soit dissoute, mais qu'elle cessera d'être divisée.",
 [null,"Il dit explicitement qu'il ne s'attend pas à la dissolution.","C'est plutôt l'idée de Douglas.","C'est le contraire."]);
Q("elec","Selon Lincoln, quelle est la « machinerie » (machinery) qui menace de répandre l'esclavage ?",
 ["La combinaison de la doctrine du Nebraska (Kansas-Nebraska) et de la décision Dred Scott","Le compromis du Missouri","La Proclamation d'émancipation","Le Parti républicain"],
 "Pour Lincoln, ces deux éléments, ajoutés à la politique du « care not » de Douglas, forment un plan pour étendre l'esclavage.",
 [null,"Le compromis du Missouri limitait l'esclavage.","Elle n'existe pas encore en 1858.","C'est son propre parti."]);
Q("elec","Quelle prochaine décision de la Cour suprême Lincoln craignait-il ?",
 ["Une décision disant qu'un État ne peut pas exclure l'esclavage, ce qui le rendrait légal dans tous les États","Une décision abolissant l'esclavage","Une décision donnant le vote aux femmes","Une décision interdisant la sécession"],
 "Lincoln remarque que Dred Scott ne dit pas si un État peut exclure l'esclavage : c'est une « petite niche » qui pourrait être remplie.",
 [null,"Ce n'était pas sa crainte.","Ce n'est pas le sujet.","Ce n'est pas le sujet."]);
Q("elec","Comment Lincoln résume-t-il l'argument de la « squatter sovereignty » tel qu'il a été utilisé ?",
 ["Si un homme choisit d'en asservir un autre, aucun troisième homme n'a le droit de s'y opposer","Chaque homme est libre","Le Congrès doit protéger la liberté","Les territoires doivent être libres"],
 "Lincoln dit que l'idée du « droit sacré à l'autonomie » a été « pervertie » pour protéger l'esclavage.",
 [null,"C'est le contraire de sa critique.","Ce n'est pas sa formule.","Ce n'est pas sa formule."]);
Q("elec","Qu'est-ce que la politique du « care not » que Lincoln reproche à Douglas ?",
 ["Ne pas se soucier que l'esclavage soit voté pour ou contre (« voted down or voted up »)","Refuser de faire campagne","Ne pas s'intéresser à l'Ouest","Refuser les tarifs douaniers"],
 "Pour Lincoln, cette indifférence morale prépare l'opinion à accepter l'esclavage partout.",
 [null,"Ce n'est pas le sens.","Douglas voulait au contraire acquérir plus de territoires.","Ce n'est pas le sens."]);
Q("elec","Qu'est-ce que la « doctrine de Freeport » de Douglas (27 août 1858) ?",
 ["Un territoire peut exclure l'esclavage en refusant de voter les règlements de police locaux nécessaires, malgré Dred Scott","Les territoires doivent accepter l'esclavage","Le Congrès peut interdire l'esclavage","La Cour suprême a toujours raison"],
 "« Slavery cannot exist a day or an hour anywhere, unless it is supported by local police regulations. » Une « législation hostile » suffit à l'empêcher.",
 [null,"Douglas disait le contraire.","Dred Scott l'interdisait ; Douglas ne défend pas ce pouvoir du Congrès.","Douglas dit que la décision de la Cour ne change rien en pratique."]);
Q("elec","Quelle question Douglas renvoie-t-il à Lincoln dans sa réponse à Freeport ?",
 ["Votera-t-il pour l'admission d'un autre État esclavagiste ?","Est-il pour la colonisation ?","Soutient-il le tarif de 1828 ?","Veut-il être président ?"],
 "Douglas l'accuse de ne pas être franc : s'il pense que l'Union doit être toute libre, comment pourrait-il accepter un nouvel État esclavagiste ?",
 [null,"Ce n'est pas la question.","Ce n'est pas la question.","Ce n'est pas la question."]);
Q("elec","Que dit Douglas sur l'Union dans le débat de Freeport ?",
 ["Il n'est pour la dissolution de l'Union en aucune circonstance ; l'Union est l'espoir des opprimés d'Europe","Il est prêt à dissoudre l'Union","L'Union doit devenir toute esclavagiste","L'Union est un « pacte avec le diable »"],
 "Douglas se présente comme le défenseur de l'Union contre un Lincoln qui la mettrait en danger.",
 [null,"C'est le contraire.","Ce n'est pas ce qu'il dit.","C'est Garrison sur la Constitution."]);
Q("elec","Selon le résumé fait en classe, quel était le point de vue de Douglas ?",
 ["La souveraineté populaire","L'abolition immédiate","L'interdiction de l'esclavage par le Congrès dans les territoires","La sécession"],
 "Douglas : les habitants des territoires décident. Lincoln : contre l'extension de l'esclavage, avec une interprétation contraire de la souveraineté populaire.",
 [null,"Douglas n'était pas abolitionniste.","C'est plutôt la position républicaine.","Douglas était contre la dissolution de l'Union."]);
Q("elec","Pourquoi l'élection de 1860 est-elle souvent considérée comme le « catalyseur final » de la guerre ?",
 ["L'élection de Lincoln, opposé à l'extension de l'esclavage, a poussé les États du Sud à faire sécession","Lincoln a déclaré la guerre au Sud le jour de son élection","Le Sud a gagné l'élection","Elle a aboli l'esclavage"],
 "La Caroline du Sud fait sécession en décembre 1860, avant même l'investiture de Lincoln.",
 [null,"Lincoln ne déclare pas la guerre ; le conflit commence à Fort Sumter en avril 1861.","Lincoln a gagné.","Elle ne l'a pas aboli."]);
Q("elec","Quel était le principal débat de l'élection de 1860 ?",
 ["L'esclavage, en particulier dans les nouveaux territoires","Les tarifs douaniers seulement","La guerre avec le Mexique","Le droit de vote des femmes"],
 "Les quatre candidats se distinguent surtout par leur position sur l'esclavage dans l'Ouest.",
 [null,"Les tarifs comptaient, mais ce n'était pas le débat principal.","Elle s'est terminée en 1848.","Ce n'était pas un enjeu électoral."]);
Q("elec","Quel candidat de 1860 était le démocrate du Sud ?",
 ["John Breckinridge","Stephen Douglas","John Bell","Abraham Lincoln"],
 "Les démocrates se sont divisés : Douglas pour le Nord, Breckinridge pour le Sud.",
 [null,"Douglas était le démocrate du Nord.","Bell était candidat de l'Union constitutionnelle.","Lincoln était républicain."]);
Q("elec","Quel candidat de 1860 représentait le Parti de l'union constitutionnelle (Constitutional Union) ?",
 ["John Bell","John Breckinridge","Stephen Douglas","Abraham Lincoln"],
 "Son programme : « no political principle other than the Constitution of the country, the Union of the States, and the Enforcement of the Laws ».",
 [null,"Breckinridge était démocrate du Sud.","Douglas était démocrate du Nord.","Lincoln était républicain."]);
Q("elec","Quel était le programme de Lincoln (républicain) en 1860 ?",
 ["Maintenir l'esclavage où il existe, pas d'esclavage dans les nouveaux territoires, pour les Homesteads, les tarifs et le chemin de fer transcontinental","Abolir l'esclavage partout immédiatement","Protéger les droits des esclavagistes dans les territoires","Souveraineté populaire et contre les tarifs plus élevés"],
 "Lincoln ne proposait pas l'abolition dans le Sud, seulement d'arrêter l'extension de l'esclavage.",
 [null,"Ce n'était pas son programme en 1860.","C'est Breckinridge.","C'est Douglas."]);
Q("elec","Quel était le programme de Breckinridge (démocrate du Sud) ?",
 ["Les droits des esclavagistes dans les nouveaux territoires, contre les Homesteads et contre les tarifs","Pas d'esclavage dans les nouveaux territoires","La souveraineté populaire","Seulement la Constitution, l'Union et les lois"],
 "Il voulait aussi un chemin de fer du Mississippi au Pacifique (une route du Sud).",
 [null,"C'est Lincoln.","C'est Douglas.","C'est Bell."]);
Q("elec","Sur quel point Lincoln et Douglas étaient-ils d'accord en 1860 ?",
 ["Les Homesteads et le chemin de fer transcontinental","Les tarifs douaniers plus élevés","L'esclavage dans les nouveaux territoires","Les droits des esclavagistes"],
 "Ils étaient tous deux pour les Homesteads (terres pour les colons) et le chemin de fer. Ils s'opposaient sur les tarifs et sur l'esclavage dans l'Ouest.",
 [null,"Lincoln était pour, Douglas contre des tarifs plus élevés.","Lincoln : pas d'esclavage ; Douglas : souveraineté populaire.","Aucun des deux ne défendait les droits des esclavagistes dans les territoires."]);
Q("elec","Qu'est-ce que la sécession ?",
 ["Se retirer officiellement d'une alliance ou d'une union","Annuler une loi fédérale","Abolir l'esclavage","Élire un nouveau président"],
 "C'est la définition du cours. La Caroline du Sud est le premier État à faire sécession.",
 [null,"C'est la nullité.","Ce n'est pas le sens.","Ce n'est pas le sens."]);
Q("elec","Quel État a été le premier à faire sécession, et quand ?",
 ["La Caroline du Sud, en décembre 1860, avant l'investiture de Lincoln","La Virginie, en avril 1861","Le Texas, en 1845","Le Missouri, en 1820"],
 "La diapositive du cours donne le 24 décembre 1860. (L'ordonnance de sécession a été votée le 20 décembre ; la déclaration des causes a suivi le 24.)",
 [null,"La Virginie fait sécession après Fort Sumter.","Le Texas entre dans l'Union en 1845.","Le Missouri entre dans l'Union en 1821."]);
Q("elec","Combien d'États avaient fait sécession et formé la Confédération environ trois mois après la Caroline du Sud ?",
 ["7","2","11","20"],
 "Sept États du Sud profond forment la Confédération au début de 1861. D'autres, comme la Virginie, suivent après Fort Sumter (11 au total).",
 [null,"C'est trop peu.","11 est le total final, après Fort Sumter.","Il n'y avait pas autant d'États esclavagistes."]);
Q("elec","Pourquoi Lincoln ne pouvait-il pas simplement dire « good riddance » (bon débarras) au Sud ?",
 ["Si une minorité qui perd une élection peut quitter l'Union, le gouvernement démocratique échoue","Parce qu'il voulait abolir l'esclavage tout de suite","Parce que le Sud était plus riche que le Nord","Parce que la Constitution autorisait la sécession"],
 "Pour Lincoln, l'enjeu était la survie de la démocratie : « ballots are the rightful and peaceful successors of bullets ».",
 [null,"L'émancipation n'était pas son objectif de départ.","Ce n'est pas l'argument.","Lincoln pensait au contraire que la sécession était illégale."]);
Q("elec","Question d'enquête n° 3 : « Dans quelle mesure la souveraineté populaire a-t-elle reflété les divisions politiques sur l'esclavage ? » Quelle phrase d'introduction est la meilleure ?",
 ["Les sources A et B montrent dans une large mesure que la souveraineté populaire reflétait les divisions sur l'esclavage, car Lincoln et Douglas l'interprétaient de façons opposées.","Je pense que Lincoln avait raison.","La source A est un discours et la source B est un débat.","Lincoln était grand et Douglas était petit."],
 "Une bonne réponse reprend le langage de la question (« dans quelle mesure », « souveraineté populaire », « divisions ») et donne une position claire.",
 [null,"Évitez « je pense » ; dites « la source affirme / soutient ».","C'est une description, pas une réponse à la question.","Ce n'est pas pertinent."]);

/* ---------------- Leçon 5 : batailles et fin de la guerre ---------------- */
Q("war","Que demandaient les Sudistes au sujet de Fort Sumter après la sécession de la Caroline du Sud ?",
 ["Que le Nord renonce au contrôle du fort ; le président Buchanan a refusé","Que le Nord y envoie plus de soldats","Que le fort devienne la capitale","Que Lincoln y signe la paix"],
 "Fort Sumter, dans le port de Charleston, était une propriété fédérale au cœur de l'État qui avait fait sécession en premier.",
 [null,"Ils voulaient au contraire que les soldats partent.","La capitale confédérée devient Richmond.","Ce n'est pas le cas."]);
Q("war","Quel était le dilemme de Lincoln à Fort Sumter ?",
 ["Capituler (briser sa promesse de garder les défenses fédérales) ou défendre le fort (briser sa promesse de ne pas utiliser la force en premier)","Choisir entre deux généraux","Choisir entre la France et le Royaume-Uni","Choisir entre l'émancipation et la colonisation"],
 "Capituler découragerait les Nordistes ; défendre demanderait une grande action militaire.",
 [null,"Ce n'est pas le dilemme.","Ce n'est pas lié.","Ce n'est pas lié."]);
Q("war","Quel a été le choix de Lincoln à Fort Sumter ?",
 ["Ne réapprovisionner le fort qu'en nourriture, sans munitions","Bombarder Charleston","Abandonner le fort","Envoyer toute l'armée"],
 "Ce choix laissait aux Confédérés la responsabilité de tirer les premiers.",
 [null,"Il ne voulait pas attaquer en premier.","Il ne voulait pas briser sa promesse.","Il n'a pas envoyé d'armée."]);
Q("war","Que s'est-il passé à Fort Sumter en avril 1861 ?",
 ["Les Confédérés ont ouvert le feu le 12 avril et la garnison s'est rendue environ un jour et demi plus tard","L'Union a gagné une grande victoire","Lincoln a été assassiné","Le Sud a capitulé"],
 "Ensuite, Lincoln lève une armée et le patriotisme monte dans les deux camps.",
 [null,"C'est une défaite de l'Union.","Lincoln est assassiné en avril 1865.","Le Sud capitule à Appomattox en 1865."]);
Q("war","Quelle a été une conséquence de Fort Sumter en avril 1861 ?",
 ["La Virginie a fait sécession et Richmond est devenue la capitale de la Confédération","La Californie a quitté l'Union","La guerre s'est terminée","La Proclamation d'émancipation a été signée"],
 "La Virginie, grand État du Sud supérieur, rejoint la Confédération après l'appel aux troupes de Lincoln.",
 [null,"Ce n'est pas le cas.","La guerre commence.","Elle vient en 1862-1863."]);
Q("war","Pourquoi la bataille de Bull Run (First Manassas, juillet 1861) est-elle importante ?",
 ["C'est la « première » vraie bataille entre deux armées ; la défaite de l'Union montre que la guerre durera bien plus de 90 jours","L'Union y a gagné la guerre","C'est la bataille la plus sanglante","Elle a divisé le Sud en deux"],
 "Le Nord, découragé, comprend qu'il doit se préparer à une longue guerre.",
 [null,"C'est une défaite de l'Union.","Le jour le plus sanglant, c'est Antietam.","C'est Vicksburg."]);
Q("war","Qu'était le plan Anaconda ?",
 ["Un plan de l'Union pour étouffer le Sud par un blocus des côtes et le contrôle du Mississippi","Un plan confédéré pour envahir Washington","Le plan de colonisation au Liberia","Le plan de Sherman pour la marche vers la mer"],
 "Comme un serpent qui étouffe sa proie : bloquer les ports et couper le Sud par le fleuve.",
 [null,"C'était un plan de l'Union.","Ce n'est pas lié.","La marche de Sherman vient en 1864."]);
Q("war","Pourquoi garder les États frontaliers dans l'Union était-il un objectif essentiel de Lincoln ?",
 ["Le Maryland entoure Washington D.C. ; le Kentucky et le Missouri contrôlent des fleuves importants","Ils avaient le plus d'usines","Ils étaient tous libres","Ils voulaient l'émancipation immédiate"],
 "Les États frontaliers (border states) étaient esclavagistes mais restés dans l'Union.",
 [null,"Ce n'est pas la raison du cours.","C'étaient des États esclavagistes.","Ce n'est pas le cas."]);
Q("war","Quelle complication les États frontaliers posaient-ils à Lincoln ?",
 ["Leurs citoyens gardaient leurs droits constitutionnels et pouvaient les utiliser pour saper l'Union ; ¼ à ½ de leurs soldats ont combattu pour la Confédération","Ils refusaient de payer des impôts","Ils voulaient rejoindre le Mexique","Ils exigeaient l'abolition"],
 "C'est aussi pourquoi Lincoln a d'abord évité l'émancipation : il ne voulait pas pousser ces États vers la Confédération.",
 [null,"Ce n'est pas le cas.","Ce n'est pas le cas.","Ils étaient esclavagistes."]);
Q("war","Quel était l'objectif de guerre principal de Lincoln au début de la guerre ?",
 ["Préserver l'Union, et avec elle la démocratie","Abolir l'esclavage","Conquérir le Mexique","Punir la Caroline du Sud"],
 "Le cours insiste : « Toujours pas l'émancipation… » L'émancipation n'est qu'un objectif secondaire jusqu'en 1862.",
 [null,"L'émancipation vient plus tard, sous la pression.","Ce n'est pas le cas.","Ce n'est pas l'objectif formulé."]);
Q("war","Dans son message au Congrès du 4 juillet 1861, que veut démontrer Lincoln ?",
 ["Que ceux qui gagnent une élection peuvent aussi réprimer une rébellion : les bulletins de vote remplacent les balles","Que l'esclavage doit être aboli","Que le Sud a le droit de partir","Que la guerre sera courte"],
 "« Ballots are the rightful and peaceful successors of bullets. » Le gouvernement populaire est une « expérience » qui doit survivre.",
 [null,"Il n'en parle pas dans ce passage.","Il dit le contraire.","Ce n'est pas dans le passage."]);
Q("war","Quelles étaient les conditions de Lincoln pour la paix ?",
 ["Pas de sécession, réintégration dans les États-Unis et capitulation inconditionnelle ; l'émancipation seulement en second","Une paix négociée avec deux pays","L'émancipation avant tout","Le Sud garde ses territoires"],
 "L'Union, et donc la démocratie, était en jeu.",
 [null,"Il refusait de reconnaître la Confédération.","L'émancipation était secondaire.","Ce n'est pas le cas."]);
Q("war","Lequel de ces facteurs N'a PAS augmenté la pression sur Lincoln à l'été 1862 ?",
 ["La victoire de l'Union à Gettysburg","La pression des abolitionnistes","Le risque d'intervention de la Grande-Bretagne et de la France","Les personnes en esclavage qui fuyaient vers les camps de l'Union"],
 "Gettysburg a lieu en juillet 1863, un an plus tard. Les autres facteurs (avec les défaites qui réduisaient le soutien à la guerre) sont ceux du cours.",
 [null,"C'est un facteur de l'été 1862.","C'est un facteur de l'été 1862.","C'est un facteur de l'été 1862 : ils arrivaient comme réfugiés."]);
Q("war","Le 22 juillet 1862, Lincoln présente la Proclamation d'émancipation préliminaire à son cabinet. Que lui conseille William Seward ?",
 ["D'attendre une victoire militaire, sinon elle ressemblerait au « dernier cri d'un gouvernement épuisé »","De la publier immédiatement","De l'abandonner","De la soumettre au vote du Sud"],
 "Seward : « Postpone its issue, until you can give it to the country supported by military success. »",
 [null,"C'est le contraire.","Il veut seulement la retarder.","Ce n'est pas le cas."]);
Q("war","Pourquoi la bataille d'Antietam (17 septembre 1862) est-elle importante ?",
 ["C'est le jour le plus sanglant de la guerre ; la victoire de l'Union permet à Lincoln de publier la Proclamation d'émancipation","Elle a mis fin à la guerre","Elle a divisé le Sud en deux","C'est la première bataille de la guerre"],
 "Le Sud se retire du Maryland vers la Virginie. Avec cette victoire, le risque d'intervention étrangère diminue.",
 [null,"La guerre dure jusqu'en 1865.","C'est Vicksburg.","C'est Bull Run (ou Fort Sumter)."]);
Q("war","Pourquoi la Proclamation d'émancipation a-t-elle réduit le risque d'intervention européenne ?",
 ["La plupart des Européens désapprouvaient l'esclavage ; la guerre devenait une guerre contre l'esclavage","L'Europe avait signé un traité avec Lincoln","La France était alliée de la Confédération","Le Royaume-Uni avait besoin du coton du Nord"],
 "Après la Proclamation, il était politiquement difficile pour la Grande-Bretagne ou la France de soutenir un pays esclavagiste.",
 [null,"Ce n'est pas le cas.","Elle ne l'était pas officiellement.","Le coton venait du Sud."]);
Q("war","Quel a été l'effet de la Proclamation sur les personnes en esclavage qui fuyaient ?",
 ["Elles étaient acceptées comme réfugiées et beaucoup ont combattu dans l'armée de l'Union","Elles étaient renvoyées à leurs maîtres","Elles étaient envoyées au Liberia","Rien ne changeait"],
 "La Proclamation dit que les autorités militaires et navales « will recognize and maintain the freedom of said persons ».",
 [null,"C'est le contraire.","Ce n'est pas le cas.","Le statut des réfugiés a changé."]);
Q("war","Quand la Proclamation d'émancipation est-elle entrée en vigueur ?",
 ["Le 1er janvier 1863","Le 4 juillet 1861","Le 19 juin 1865","Le 17 septembre 1862"],
 "Annoncée en septembre 1862 après Antietam, elle prend effet le 1er janvier 1863.",
 [null,"C'est le message de Lincoln au Congrès.","C'est Juneteenth.","C'est Antietam."]);
Q("war","Quelle est une limite importante de la Proclamation d'émancipation ?",
 ["Elle ne s'appliquait qu'aux régions en rébellion, pas aux États frontaliers restés dans l'Union","Elle libérait tous les esclaves du pays immédiatement","Elle interdisait aux Noirs de s'engager dans l'armée","Elle a été rejetée par Lincoln"],
 "C'était une mesure de guerre de Lincoln comme commandant en chef. L'abolition complète viendra avec le 13e amendement (1865).",
 [null,"Elle ne touchait pas les États frontaliers ; et dans le Sud, la liberté dépendait de l'avancée de l'armée (d'où Juneteenth).","Elle permettait au contraire l'engagement des Noirs.","Lincoln l'a signée."]);
Q("war","Pourquoi Gettysburg (1863) est-elle un tournant de la guerre ?",
 ["L'invasion du Nord par Lee échoue ; c'est la plus grande bataille d'Amérique du Nord et l'armée confédérée ne revient plus jamais au Nord","Grant y prend le contrôle du Mississippi","Le Sud y gagne la guerre","Lincoln y est assassiné"],
 "Après ses succès, Lee tente une invasion de la Pennsylvanie. C'est son plus grand échec.",
 [null,"C'est Vicksburg.","Le Sud perd.","Lincoln y prononce un discours célèbre, mais il est assassiné à Washington en 1865."]);
Q("war","Pourquoi Vicksburg (1863) est-elle un tournant de la guerre ?",
 ["La victoire de Grant donne à l'Union le contrôle du Mississippi et divise le Sud en deux","C'est la première bataille de la guerre","Lee y envahit le Nord","Le Sud y capitule"],
 "Symboliquement, Vicksburg tombe le jour après la défaite du Sud à Gettysburg (juillet 1863).",
 [null,"C'est Bull Run.","C'est Gettysburg.","C'est Appomattox (1865)."]);
Q("war","Qu'était la « guerre d'attrition » de Grant ?",
 ["Sacrifier beaucoup de soldats en sachant que le Nord avait des remplacements et pas le Sud","Une guerre sans batailles","Un blocus naval","Une négociation de paix"],
 "Le Sud n'avait pas de remplacements et souffrait de plus de désertions. Grant était surnommé « Butcher of Men ».",
 [null,"C'était au contraire une guerre de batailles très meurtrières.","C'est le plan Anaconda.","Ce n'est pas le cas."]);
Q("war","Quel était l'objectif de la marche de Sherman vers la mer (1864) ?",
 ["Inspirer la terreur et soumettre complètement les forces confédérées","Libérer le Maryland","Prendre Fort Sumter","Protéger Washington"],
 "Sherman détruit les ressources du Sud (de la Géorgie jusqu'à la mer) pour briser la volonté de se battre.",
 [null,"Le Maryland était dans l'Union.","Ce n'est pas l'objectif.","Ce n'est pas l'objectif."]);
Q("war","Que s'est-il passé le 9 avril 1865 ?",
 ["Le Sud a capitulé à Appomattox","Lincoln a été assassiné","Fort Sumter a été attaqué","Juneteenth"],
 "Lee se rend à Grant à Appomattox (Virginie).",
 [null,"C'est le 14 avril 1865.","C'est avril 1861.","C'est le 19 juin 1865."]);
Q("war","Que s'est-il passé le 14 avril 1865 ?",
 ["Lincoln a été assassiné","Le Sud a capitulé","La Proclamation est entrée en vigueur","La Caroline du Sud a fait sécession"],
 "Cinq jours après Appomattox.",
 [null,"C'est le 9 avril 1865.","C'est le 1er janvier 1863.","C'est décembre 1860."]);
Q("war","Que célèbre Juneteenth (19 juin 1865) ?",
 ["L'arrivée du général Granger à Galveston (Texas) pour annoncer aux personnes en esclavage qu'elles étaient libres","La signature de la Constitution","La victoire de Gettysburg","L'élection de Lincoln"],
 "Granger mettait en vigueur la Proclamation publiée plus de deux ans et demi plus tôt, deux mois après la capitulation de Lee.",
 [null,"C'est 1787.","C'est juillet 1863.","C'est novembre 1860."]);
Q("war","Combien de temps s'est-il écoulé entre la Proclamation d'émancipation (1er janvier 1863) et Juneteenth ?",
 ["Plus de deux ans et demi","Deux semaines","Dix ans","Un jour"],
 "Dans les régions confédérées, la liberté dépendait de l'arrivée de l'armée de l'Union. Le Texas, très éloigné, a été l'un des derniers.",
 [null,"C'est beaucoup plus long.","C'est trop long.","C'est beaucoup plus long."]);
Q("war","Mettez ces événements dans l'ordre : Antietam, Fort Sumter, Gettysburg, Appomattox.",
 ["Fort Sumter (1861) → Antietam (1862) → Gettysburg (1863) → Appomattox (1865)","Antietam → Fort Sumter → Appomattox → Gettysburg","Fort Sumter → Gettysburg → Antietam → Appomattox","Gettysburg → Antietam → Fort Sumter → Appomattox"],
 "Début de la guerre, victoire qui permet la Proclamation, tournant, capitulation.",
 [null,"Fort Sumter est le début de la guerre.","Antietam (1862) vient avant Gettysburg (1863).","Gettysburg est en 1863, après les deux autres."]);

/* ---------------- Leçon 5 (suite) : la Proclamation d'émancipation et Foner ---------------- */
Q("emanc","Sur quel pouvoir Lincoln s'appuie-t-il pour signer la Proclamation d'émancipation ?",
 ["Son pouvoir de commandant en chef, comme « mesure de guerre juste et nécessaire »","Un vote du Congrès","Un jugement de la Cour suprême","Le 13e amendement"],
 "Le texte dit que Lincoln agit « as Commander-in-Chief » et comme « a fit and necessary war measure ». Foner précise que sa légitimité constitutionnelle repose sur les pouvoirs de guerre du président.",
 [null,"Le Congrès avait déjà adopté des lois d'émancipation partielles, mais la Proclamation est un ordre militaire du président.","La Cour suprême de Taney était plutôt hostile (Dred Scott).","Le 13e amendement date de décembre 1865, presque trois ans plus tard."]);
Q("emanc","Que dit la Proclamation préliminaire de septembre 1862 ?",
 ["Les personnes en esclavage dans les régions encore en rébellion le 1er janvier 1863 seront « thenceforward, and forever free »","Tous les esclaves du pays sont libres immédiatement","Les propriétaires seront indemnisés","Les Noirs libérés iront en Afrique"],
 "C'est un avertissement : si le Sud ne dépose pas les armes avant le 1er janvier 1863, les personnes asservies des régions rebelles seront libres pour toujours. Le texte précise aussi qu'un État bien représenté au Congrès ne serait pas considéré en rébellion.",
 [null,"Elle ne vise que les régions en rébellion, pas tout le pays.","Aucune indemnisation n'est mentionnée ; c'était le plan d'avant 1862.","La colonisation n'est jamais mentionnée dans la Proclamation."]);
Q("emanc","Quelles régions la Proclamation du 1er janvier 1863 exemptait-elle ?",
 ["Certaines paroisses de Louisiane (dont La Nouvelle-Orléans), la Virginie-Occidentale et quelques comtés de Virginie, occupés par l'Union","Seulement le Texas","Tout le Nord, mais aucune région du Sud","Aucune région"],
 "La liste des États en rébellion comporte des exceptions : des parties de la Louisiane et de la Virginie sont « left precisely as if this proclamation were not issued ». Les quatre États frontaliers n'étaient pas concernés non plus.",
 [null,"Le Texas est au contraire cité parmi les États en rébellion.","Le Nord n'était pas visé par la Proclamation, qui concerne les États en rébellion.","Il y avait bien des exceptions, listées dans le texte."]);
Q("emanc","Quels conseils la Proclamation donne-t-elle aux personnes déclarées libres ?",
 ["S'abstenir de toute violence sauf en légitime défense, et travailler fidèlement pour des « reasonable wages »","Se révolter contre leurs anciens maîtres","Quitter les États-Unis","Attendre la fin de la guerre sans rien faire"],
 "Lincoln leur demande d'éviter la violence « unless in necessary self-defence » et recommande qu'elles « labor faithfully for reasonable wages ». Foner souligne qu'il parle de salaires aux États-Unis, sans colonisation.",
 [null,"Le texte demande l'inverse.","La colonisation n'est plus mentionnée, Lincoln n'en reparle jamais en public.","Il les invite aussi à s'engager (voir la question suivante)."]);
Q("emanc","Quelle nouveauté importante la Proclamation introduit-elle pour l'armée de l'Union ?",
 ["Les Noirs de « condition appropriée » seront reçus dans l'armée et la marine ; environ 200 000 y serviront","Les Noirs sont exclus de l'armée","Les Noirs doivent seulement cuisiner pour l'armée","Les Noirs peuvent diriger des régiments blancs"],
 "Pour la première fois, Lincoln accueille officiellement des soldats noirs pour garnir les forts et équiper les navires. Environ 200 000 hommes noirs serviront dans l'armée et la marine, un rôle critique dans la victoire.",
 [null,"Jusque-là l'armée refusait les volontaires noirs ; la Proclamation change cela.","Le texte parle de garnisons et de navires, pas de simples tâches de cuisine.","Le texte ne dit rien de tel."]);
Q("emanc","Pourquoi le texte de la Proclamation décevait-il souvent ses lecteurs, selon Foner ?",
 ["Il est « dull and legalistic » : un ordre militaire sans langage inspiré sur les droits de l'homme","Il était trop long","Il était écrit en latin","Il était trop radical pour les abolitionnistes"],
 "Foner explique que la Proclamation est un ordre militaire, aride et juridique. Ce n'est qu'à la dernière minute, à l'insistance du secrétaire du Trésor Salmon P. Chase, que Lincoln a ajouté une conclusion la qualifiant d'« act of justice ».",
 [null,"Ce n'est pas le reproche de Foner.","Évidemment faux.","Les abolitionnistes l'ont plutôt saluée."]);
Q("emanc","Qui a poussé Lincoln à ajouter la conclusion déclarant la Proclamation un « act of justice » ?",
 ["Salmon P. Chase, secrétaire du Trésor et abolitionniste","William Seward","Ulysses S. Grant","Stephen Douglas"],
 "Chase a insisté à la dernière minute. Seward, lui, avait conseillé en juillet d'attendre une victoire militaire.",
 [null,"Seward avait conseillé d'attendre une victoire avant de publier le texte.","Grant était général, pas conseiller politique pour ce texte.","Douglas est mort en 1861."]);
Q("emanc","Combien de personnes en esclavage la Proclamation a-t-elle laissées dans les chaînes, et combien a-t-elle déclarées libres, environ ?",
 ["Environ 750 000 laissées en esclavage ; 3,1 millions déclarées libres","Environ 3,1 millions laissées en esclavage ; 750 000 déclarées libres","Aucune laissée en esclavage ; quatre millions déclarées libres","Environ 200 000 laissées en esclavage ; un million déclarées libres"],
 "Foner : la Proclamation ne concernait pas les quatre États frontaliers et exemptait certaines zones occupées. Elle a laissé environ 750 000 personnes en esclavage, mais a déclaré que les 3,1 millions restantes « are, and henceforward shall be free ».",
 [null,"C'est inversé : la grande majorité était visée.","La Proclamation n'a pas libéré tout le monde ; les États frontaliers étaient exclus.","Les chiffres sont beaucoup trop bas."]);
Q("emanc","Pourquoi Foner qualifie-t-il la Proclamation d'émancipation de « mal comprise » ?",
 ["Contrairement à la légende, Lincoln n'a pas libéré près de quatre millions de personnes d'un trait de plume","Parce qu'elle n'a jamais été appliquée","Parce que Lincoln ne l'a pas signée","Parce qu'elle a libéré les esclaves des États frontaliers"],
 "Elle ne concernait pas les États frontaliers, exemptait certaines zones occupées et ne pouvait pas être appliquée là où l'Union ne contrôlait rien. Mais elle assurait la mort éventuelle de l'esclavage si l'Union gagnait.",
 [null,"Elle a été appliquée progressivement, à mesure que l'armée de l'Union avançait.","Lincoln l'a signée le 1er janvier 1863.","Elle n'avait « no bearing » sur les États frontaliers."]);
Q("emanc","Qu'est-ce que la Proclamation N'a PAS fait ?",
 ["Elle n'a pas aboli l'esclavage dans les États frontaliers ni mis fin à l'esclavage dans tout le pays le jour même","Elle a déclaré libres les personnes asservies des régions en rébellion","Elle a accueilli les soldats noirs dans l'armée","Elle a assuré la mort future de l'esclavage si l'Union gagnait"],
 "L'esclavage n'est aboli dans tout le pays qu'avec le 13e amendement en décembre 1865. Foner : l'émancipation est un processus, pas un événement unique.",
 [null,"C'est ce qu'elle a fait.","C'est une de ses nouveautés.","C'est son effet à long terme selon Foner."]);
Q("emanc","Que veut dire Foner quand il parle d'une « double émancipation » ?",
 ["Elle a émancipé les esclaves (la défaite de l'Union tuerait l'esclavage) et Lincoln lui-même, qui a abandonné ses anciennes idées sur l'abolition et sur le rôle des Noirs","Elle a libéré à la fois les Noirs du Nord et du Sud","Elle a été signée deux fois","Elle a libéré les esclaves et les femmes"],
 "Pour les esclaves, elle garantissait que si l'Union gagnait, l'esclavage mourrait. Pour Lincoln, elle marquait l'abandon de ses hypothèses précédentes sur la façon d'abolir l'esclavage et sur la place des Noirs dans la société d'après l'émancipation.",
 [null,"Ce n'est pas ce que dit Foner.","La Proclamation préliminaire puis la Proclamation finale existent, mais ce n'est pas le sens de « double ».","Les femmes ne sont pas concernées par ce passage."]);
Q("emanc","Quel était le plan de Lincoln pour mettre fin à l'esclavage pendant les deux premières années de la guerre ?",
 ["Une émancipation graduelle, menée par les États avec financement national, avec indemnisation des propriétaires et encouragement à la colonisation","Une émancipation immédiate sans indemnisation","Une guerre d'extermination contre le Sud","Un référendum national"],
 "C'est un plan hérité de l'avant-guerre : l'émancipation par les gouvernements d'État, graduelle, avec compensation financière et colonisation. Lincoln voulait gagner la coopération des propriétaires d'esclaves.",
 [null,"C'est justement ce qu'il adopte à partir de 1862-1863.","Ce n'est pas un plan d'émancipation.","Aucun référendum n'est mentionné."]);
Q("emanc","Pourquoi le plan de Lincoln pour le Delaware (novembre 1861) est-il révélateur ?",
 ["Le Delaware n'avait que 1 800 esclaves et l'institution y était secondaire, mais même là les propriétaires refusaient de renoncer à leur « propriété »","Le Delaware a immédiatement accepté l'émancipation","Le Delaware a rejoint la Confédération","Le Delaware avait la plus grande population esclave"],
 "Si même un État frontalier où l'esclavage était périphérique refusait, le plan graduel et compensé avait peu de chances ailleurs. Le Delaware est l'un des quatre États frontaliers (avec le Kentucky, le Maryland et le Missouri).",
 [null,"Les propriétaires ont refusé.","Il est resté dans l'Union.","Au contraire, il avait très peu d'esclaves."]);
Q("emanc","Que dit Lincoln à des dirigeants noirs de Washington en août 1862 ?",
 ["Que sans leur race parmi eux il n'y aurait pas de guerre, et qu'il valait mieux pour les deux races être séparées","Qu'ils seraient bientôt citoyens à part entière","Qu'ils devaient rejoindre l'armée immédiatement","Qu'il abolirait l'esclavage le lendemain"],
 "Lincoln déclare : « but for your race among us there could not be war » et « It is better for us both, therefore, to be separated ». Il qualifie pourtant l'esclavage de « greatest wrong inflicted on any people ». La plupart des Noirs refusaient d'émigrer.",
 [null,"Il leur dit au contraire que le racisme les empêcherait d'obtenir l'égalité.","L'armée n'acceptait pas encore de volontaires noirs.","Il promouvait la colonisation, pas l'abolition immédiate."]);
Q("emanc","Qu'est-ce qui a poussé Lincoln dans une nouvelle direction à l'été 1862 ?",
 ["Des milliers d'esclaves fuyaient vers les lignes de l'Union, la guerre était dans l'impasse, les abolitionnistes gagnaient du terrain et le Nord manquait de soldats","La fin de la guerre","Une victoire écrasante à Gettysburg","Une défaite électorale"],
 "L'esclavage se désintégrait par endroits, l'enthousiasme pour l'enrôlement baissait et la « réserve de main-d'œuvre noire » ne pouvait plus être ignorée. Gettysburg date de 1863.",
 [null,"La guerre durait encore jusqu'en 1865.","Gettysburg a eu lieu en juillet 1863.","Il n'y a pas eu de défaite électorale décisive en 1862 dans ce passage."]);
Q("emanc","Quelles mesures le Congrès a-t-il adoptées à l'été 1862, devançant Lincoln ?",
 ["L'abolition de l'esclavage à Washington D.C., l'autorisation d'enrôler des Noirs dans l'armée et la libération des esclaves des propriétaires pro-confédérés dans les zones sous contrôle militaire","Le 13e amendement","Le droit de vote des Noirs","La loi sur les droits civiques de 1866"],
 "Foner : le Congrès « moved ahead of Lincoln » et Lincoln a signé toutes ces mesures cet été-là.",
 [null,"Le 13e amendement date de 1865.","Le droit de vote vient avec le 15e amendement (1870).","La loi sur les droits civiques date de 1866."]);
Q("emanc","Que signifie « The dogmas of the quiet past are inadequate to the stormy present… We must disenthrall ourselves » (Lincoln, 1er décembre 1862) ?",
 ["Les anciennes idées ne suffisent plus face à la crise ; il faut changer de façon de penser, et Lincoln s'inclut dans ce « nous »","Il faut rester fidèle aux traditions","La guerre sera courte","Il faut retourner au compromis du Missouri"],
 "Dans son message annuel au Congrès, Lincoln consacre un long passage à l'émancipation graduelle et à la colonisation, mais ajoute que le passé ne suffit plus. Foner : « Lincoln included himself in that “we.” » Sa nouvelle approche est l'émancipation immédiate.",
 [null,"C'est le contraire du message.","Rien à voir avec la durée de la guerre.","Le compromis de 1820 est justement dépassé."]);
Q("emanc","Qu'est-ce qui change dans l'approche de Lincoln après la Proclamation ?",
 ["Il ne cherche plus le consentement des propriétaires : émancipation immédiate, sans indemnisation et sans colonisation","Il revient à l'émancipation graduelle","Il propose à nouveau la colonisation","Il demande aux États de décider"],
 "La Proclamation était immédiate, ne mentionnait ni compensation ni colonisation, et s'adressait directement aux Noirs comme des hommes et des femmes dont la loyauté devait être gagnée. Lincoln ne parle plus jamais de colonisation en public.",
 [null,"C'est l'ancien plan.","Il n'en reparle plus en public.","Il agit par ordre militaire, pas par vote des États."]);
Q("emanc","Que répond Lincoln en 1864 à ceux qui lui demandent de retirer la Proclamation pour obtenir la paix ?",
 ["Il refuse : « I should be damned in time and eternity »","Il accepte pour sauver l'Union","Il propose un référendum","Il démissionne"],
 "Avec les pertes qui augmentaient, certains parlaient de paix de compromis. Lincoln, ayant pris sa décision, « did not look back ».",
 [null,"Il refuse.","Aucun référendum n'est prévu.","Il reste président."]);
Q("emanc","Comment le point de vue de Lincoln sur le droit de vote des Noirs a-t-il évolué selon Foner ?",
 ["En 1858 il refusait le droit de vote ; dans son dernier discours public (avril 1865) il préfère un suffrage limité pour les Noirs « très intelligents » et les anciens soldats","Il a toujours soutenu le suffrage universel","Il a toujours refusé tout droit politique","Il a demandé le droit de vote pour les femmes"],
 "En 1858 il défendait les droits naturels (vie, liberté, recherche du bonheur) mais pas l'égalité légale ni le vote. En 1865, c'était la première fois qu'un président américain soutenait des droits politiques pour les Noirs, même si ce n'était « hardly an unambiguous embrace of equality ».",
 [null,"Il n'a jamais soutenu un suffrage universel.","Son point de vue a évolué.","Il n'est pas question du vote des femmes."]);
Q("emanc","Selon Foner, que montre le second discours d'investiture de Lincoln (4 mars 1865) sur ses idées ?",
 ["Il identifie désormais l'esclavage, et non la présence des Noirs comme en 1862, comme la cause fondamentale de la guerre","Il blâme encore la présence des Noirs aux États-Unis","Il ne parle pas de l'esclavage","Il demande la punition du Sud"],
 "Lincoln y suggère que la guerre peut être une punition divine pour l'esclavage, jusqu'à ce que « every drop of blood drawn with the lash, shall be paid by another drawn with the sword ». La violence avait précédé Fort Sumter : 250 ans de violence de l'esclavage.",
 [null,"C'était sa position en août 1862, pas en 1865.","Le discours est centré sur l'esclavage.","Le ton est celui de « malice toward none »."]);
Q("emanc","Que se passe-t-il quand Lincoln signe la Proclamation le 1er janvier 1863, selon Foner ?",
 ["Sa main tremble de fatigue après la réception du Nouvel An ; il dit : « I do not want it to appear as if I hesitated »","Il refuse de signer","Il la signe en secret","Il la signe à Gettysburg"],
 "Foner ouvre son article avec cette scène : Lincoln fait une pause, puis appose une signature ferme.",
 [null,"Il la signe.","Il la signe à la Maison-Blanche, dans son bureau.","Gettysburg a lieu en juillet 1863."]);
Q("emanc","Que conclut Foner à propos de l'héritage de Lincoln ?",
 ["Lincoln a demandé ce qui serait nécessaire pour permettre aux anciens esclaves et à leurs descendants de jouir pleinement de la recherche du bonheur ; il n'a pas vécu pour répondre et, 150 ans plus tard, on n'a toujours pas répondu","Le problème de la liberté est entièrement résolu","Lincoln a réglé la question avant sa mort","Le 13e amendement a tout réglé"],
 "Foner termine ainsi : « A century and a half later, we have yet to do so. » Il lie l'émancipation à la question toujours ouverte de la justice raciale.",
 [null,"C'est l'inverse de sa conclusion.","Lincoln est mort en avril 1865.","Le 13e amendement abolit l'esclavage, mais ne règle pas la question de l'égalité."]);

/* ---------------- Leçon 6 : la Reconstruction (Foner, ch. 15) ---------------- */
Q("recon","Que dit la section 1 du 13e amendement (ratifié le 18 décembre 1865) ?",
 ["L'esclavage et la servitude involontaire sont interdits, sauf comme punition d'un crime dont la personne a été condamnée","L'esclavage est interdit sans aucune exception","Les Noirs sont citoyens","Les hommes noirs ont le droit de vote"],
 "L'exception pour la punition d'un crime a permis plus tard des abus (par exemple avec les lois de vagabondage). La section 2 donne au Congrès le pouvoir de faire appliquer l'amendement par une législation appropriée.",
 [null,"Il y a une exception : le crime.","La citoyenneté vient avec le 14e amendement.","Le droit de vote vient avec le 15e amendement."]);
Q("recon","Quelles étaient les deux grandes questions de la Reconstruction ?",
 ["Comment réintégrer les États du Sud dans l'Union, et comment intégrer quatre millions d'anciens esclaves dans la vie politique, sociale et économique","Comment financer la guerre et comment payer les soldats","Comment abolir l'esclavage et comment le Mexique serait traité","Comment punir Lincoln et comment élire Grant"],
 "La guerre avait mis fin à l'esclavage et réglé la sécession, mais il restait à décider quand et comment réadmettre le Sud, quels droits donner aux anciens esclaves et à quoi ressemblerait la justice raciale.",
 [null,"Ce sont des questions de la guerre, pas de la Reconstruction.","L'esclavage était déjà aboli par le 13e amendement.","Lincoln est mort en 1865 et Grant a été élu en 1868 : ce ne sont pas les grandes questions."]);
Q("recon","Qu'est-ce qui distingue la vision de Lincoln (Reconstruction présidentielle) de celle des Républicains radicaux ?",
 ["Lincoln voulait l'indulgence et la réconciliation (les États n'avaient jamais vraiment quitté l'Union) ; les Radicaux voulaient punir les dirigeants confédérés, des traîtres","Lincoln voulait punir le Sud ; les Radicaux voulaient pardonner","Ils étaient d'accord sur tout","Lincoln voulait la sécession du Sud"],
 "Le slide résume : Lincoln = « indulgence et réconciliation » ; Radicaux = punir les Sudistes, car les dirigeants confédérés avaient abandonné le pays et déclenché la guerre. Lincoln a conclu son second discours par « With malice toward none; with charity for all ».",
 [null,"C'est inversé.","Ils étaient en désaccord.","Aucun des deux ne soutenait la sécession."]);
Q("recon","Quel était le plan de Reconstruction de Lincoln (le plan des 10 %) ?",
 ["Amnistie pour presque tous les Sudistes sauf les hauts fonctionnaires confédérés ; un État est réadmis quand 10 % des électeurs de 1860 jurent loyauté et rejettent la sécession (et acceptent l'abolition)","Les 50 % des électeurs doivent jurer loyauté","L'armée gouverne le Sud pendant 10 ans","Les anciens esclaves reçoivent 10 acres"],
 "C'est la Proclamation d'amnistie : pardons complets sauf pour les hauts fonctionnaires confédérés ; réadmission si 10 % des électeurs de 1860 s'engagent à être loyaux et à désavouer la sécession. C'est le « Ten-percent Plan ».",
 [null,"C'est la condition du Wade-Davis Bill.","L'armée n'a gouverné le Sud qu'à partir de 1867.","Aucune terre n'est prévue dans ce plan."]);
Q("recon","Quel était le Wade-Davis Bill (Congrès) ?",
 ["Un plan exigeant 50 % des électeurs loyaux, l'abolition (13e am.), des droits civiques pour les anciens esclaves et aucun pouvoir pour les anciens dirigeants confédérés ; Lincoln y a opposé son veto","Le plan de Lincoln","La loi qui a créé le Freedmen's Bureau","Un plan de colonisation"],
 "Le Wade-Davis Bill est la réponse plus dure du Congrès radical au plan des 10 % de Lincoln. Lincoln l'a rejeté.",
 [null,"Lincoln s'y est opposé.","Le Bureau a été créé en mars 1865 par une autre loi.","La colonisation est abandonnée par Lincoln en 1863."]);
Q("recon","Pourquoi les Républicains radicaux, comme Charles Sumner et Thaddeus Stevens, s'opposaient-ils à Johnson ?",
 ["Ils voulaient dissoudre ses gouvernements d'État, exclure les « rebelles » du pouvoir et donner le droit de vote aux Noirs ; Stevens voulait confisquer les terres des planteurs","Ils voulaient donner plus de pouvoir aux planteurs","Ils soutenaient Johnson","Ils voulaient que le Sud quitte l'Union"],
 "Les Radicaux ont pleinement embrassé les pouvoirs élargis du gouvernement fédéral nés de la guerre. Le plus cher désir de Stevens, la confiscation des terres des planteurs déloyaux pour les distribuer aux anciens esclaves, était jugé trop radical.",
 [null,"C'est l'inverse.","Ils s'opposaient à lui.","Ils voulaient réintégrer le Sud, mais avec les droits des Noirs."]);
Q("recon","Pourquoi Andrew Johnson était-il mal adapté à la tâche de la Reconstruction ?",
 ["Il manquait de l'habileté politique de Lincoln, ne voyait aucun rôle pour les Noirs et offrait des pardons à l'élite blanche du Sud","Il était abolitionniste radical","Il voulait confisquer les terres des planteurs","Il était trop jeune"],
 "Johnson se disait le champion des « honest yeomen » et un ennemi des grands planteurs, mais il croyait que les Afro-Américains n'avaient aucun rôle à jouer. Il a offert des pardons à l'élite blanche du Sud et laissé aux nouveaux gouvernements une grande liberté.",
 [null,"Au contraire, il refusait un rôle pour les Noirs.","C'était l'aspiration de Stevens, pas de Johnson.","Son âge n'est pas le problème."]);
Q("recon","Qu'a décidé Johnson au sujet des terres distribuées aux anciens esclaves (« Sherman land ») ?",
 ["Il a ordonné de rendre presque toutes les terres fédérales à leurs anciens propriétaires","Il les a confirmées","Il les a doublées","Il les a vendues aux Noirs à bas prix"],
 "Après l'ordre spécial n° 15 de Sherman (janvier 1865), qui avait réservé des terres de 40 acres aux familles noires, Johnson a inversé la politique à l'été 1865. L'armée a évincé des Noirs de la « Sherman land ». Faute de redistribution, la plupart des anciens esclaves sont restés pauvres et sans terre.",
 [null,"Il a fait l'inverse.","Il les a retirées.","Il n'a pas vendu les terres aux Noirs."]);
Q("recon","Qu'établissait l'ordre spécial n° 15 de Sherman (janvier 1865) ?",
 ["La réservation des îles de la mer et d'une bande côtière de Caroline du Sud et de Géorgie pour des familles noires, en lots de 40 acres : l'origine de « forty acres and a mule »","L'abolition de l'esclavage dans tout le pays","L'enrôlement des Noirs","La fin de la guerre"],
 "Quatre jours après la réunion de Savannah du 12 janvier 1865, où des dirigeants noirs ont dit que la liberté signifiait la terre, Sherman a publié cet ordre, qui a nourri l'espoir d'indépendance économique.",
 [null,"L'abolition est le 13e amendement.","L'enrôlement est dans la Proclamation.","La guerre se termine en avril 1865."]);
Q("recon","Que disent les dirigeants noirs de Savannah à Sherman en janvier 1865 sur la liberté ?",
 ["La liberté, c'est « placer ceux qui ont été esclaves où ils peuvent récolter le fruit de leur propre travail » : il faut de la terre à cultiver","La liberté, c'est le droit de partir en Afrique","La liberté, c'est une rente de l'État","La liberté, c'est seulement le droit de vote"],
 "Garrison Frazier, pasteur baptiste et porte-parole, a défini l'esclavage comme recevoir « by irresistible power the work of another man, and not by his consent » et la liberté comme « reap the fruit of our own labor » avec de la terre.",
 [null,"La plupart des Noirs refusaient l'émigration.","Ils demandaient la terre, pas une rente.","Le vote est important plus tard, mais ce n'est pas leur réponse à Sherman."]);
Q("recon","Que contenaient les Black Codes adoptés par les gouvernements du Sud sous Johnson ?",
 ["Certains droits (mariage, propriété, contrats, accès aux tribunaux), mais pas le droit de témoigner contre des Blancs, de siéger dans un jury ou une milice, ni de voter ; ceux qui refusaient les contrats de travail annuels pouvaient être arrêtés et loués","Le droit de vote pour tous","L'interdiction du vagabondage pour les Blancs seulement","La protection complète des droits civiques"],
 "Foner : « the death of slavery did not automatically mean the birth of freedom ». Les Black Codes violaient les principes du travail libre et ont suscité une réaction vigoureuse du Nord républicain.",
 [null,"Les Black Codes refusaient le vote.","Ils ciblaient les Noirs.","Ils les limitaient."]);
Q("recon","Quelle a été la réaction du Congrès au Sud sous la Reconstruction présidentielle ?",
 ["Le sénateur Trumbull a proposé de prolonger le Freedmen's Bureau et un Civil Rights Bill ; Johnson les a bloqués par veto, mais le Congrès a passé la loi sur les droits civiques malgré son veto","Le Congrès a accepté sans réserve la politique de Johnson","Le Congrès a dissous l'armée","Le Congrès a voté la sécession"],
 "La loi de 1866 accordait la citoyenneté aux anciens esclaves et interdisait des lois comme les Black Codes. Johnson a opposé son veto aux deux projets ; le Congrès a surmonté le veto pour la loi sur les droits civiques.",
 [null,"Le Congrès a au contraire contesté la politique de Johnson.","L'armée n'était pas en jeu.","Le Congrès a au contraire renforcé son contrôle sur la Reconstruction."]);
Q("recon","Que fait le 14e amendement ?",
 ["Il place dans la Constitution la citoyenneté de toute personne née aux États-Unis et donne au gouvernement fédéral le pouvoir de protéger les droits de tous, mais sans accorder le droit de vote aux Noirs","Il abolit l'esclavage","Il accorde le droit de vote aux Noirs","Il accorde le droit de vote aux femmes"],
 "Il a produit une division intense entre les partis. Tous les États du Sud sauf le Tennessee ont refusé de le ratifier, ce qui a poussé les Républicains modérés vers les Radicaux.",
 [null,"C'est le 13e amendement.","C'est le 15e amendement.","Les femmes obtiennent le vote au XXe siècle."]);
Q("recon","Quel a été l'effet des élections de mi-mandat de 1866 ?",
 ["Les Républicains ont obtenu une écrasante majorité au Congrès, ce qui leur permettait de surmonter facilement les vetos de Johnson et a mis fin à la Reconstruction présidentielle","Les Démocrates ont gagné la majorité","Johnson a gagné un second mandat","Les élections ont été annulées"],
 "Johnson avait fait campagne contre le 14e amendement. Résultat : la Reconstruction du Congrès (radicale) a commencé.",
 [null,"C'est l'inverse.","Johnson n'a pas obtenu de second mandat.","Elles ont eu lieu."]);
Q("recon","Que prévoit la loi de Reconstruction de 1867 (Reconstruction Act) ?",
 ["Elle divise temporairement le Sud en cinq districts militaires et exige de nouveaux gouvernements d'État qui ratifient le 14e amendement et incluent le vote des hommes noirs","Elle rend toutes les terres aux anciens propriétaires","Elle abolit l'esclavage","Elle expulse les Noirs vers l'Afrique"],
 "Adoptée en mars 1867 malgré le veto de Johnson, elle ouvre la Reconstruction radicale (1867-1877) et « the first real experiment in interracial democracy ».",
 [null,"C'est ce que Johnson avait fait.","C'est le 13e amendement.","La colonisation a été abandonnée."]);
Q("recon","Pourquoi Andrew Johnson a-t-il été mis en accusation (impeached) en 1868 ?",
 ["Pour avoir limogé le secrétaire à la Guerre Edwin Stanton, un allié des Radicaux, en violation du Tenure of Office Act ; le Sénat a échoué d'une voix à le destituer","Pour avoir déclaré la guerre au Mexique","Pour avoir perdu l'élection","Pour avoir libéré les esclaves"],
 "Le Tenure of Office Act (1867) empêchait le président de renvoyer certains responsables sans l'accord du Sénat. Johnson a été jugé par le Sénat pour « high crimes and misdemeanors » mais a échappé à la destitution à une voix de la majorité des deux tiers.",
 [null,"Ce n'est pas le motif.","Il n'a pas perdu d'élection en 1868.","L'émancipation était le fait de Lincoln."]);
Q("recon","Qui a remporté l'élection présidentielle de 1868 ?",
 ["Ulysses S. Grant","Andrew Johnson","Horace Greeley","Rutherford B. Hayes"],
 "Grant, le général de l'Union, devient président en 1869. Greeley est battu en 1872 et Hayes devient président après l'élection contestée de 1876.",
 [null,"Johnson a été mis en accusation en 1868 et n'a pas été élu.","Greeley a perdu face à Grant en 1872.","Hayes est élu en 1876."]);
Q("recon","Que fait le 15e amendement (1869-1870) ?",
 ["Il interdit de refuser le droit de vote en raison de la race, mais laisse des échappatoires (tests d'alphabétisation, conditions de propriété, poll taxes) et n'inclut pas les femmes","Il donne le vote aux femmes","Il accorde la citoyenneté","Il abolit l'esclavage"],
 "Les échappatoires, non fondées explicitement sur la race, ont servi à priver les Noirs du vote. Les féministes se sont divisées : la National Woman Suffrage Association (Stanton, Anthony) l'a dénoncé, l'American Woman Suffrage Association l'a soutenu.",
 [null,"Le 19e amendement (1920) vient beaucoup plus tard.","C'est le 14e amendement.","C'est le 13e amendement."]);
Q("recon","Qu'est-ce que la « grande révolution constitutionnelle » (Great Constitutional Revolution) selon Foner ?",
 ["La combinaison d'un État national renforcé et de l'idée d'une citoyenneté nationale égale devant la loi ; avant la guerre, la citoyenneté était liée à la race (loi de naturalisation de 1790, Dred Scott)","La rédaction de la Constitution de 1787","La fin du Congrès","La création de la Confédération"],
 "Les nouveaux amendements ont aussi transformé les relations entre le gouvernement fédéral et les États. Ils représentent un « radical departure in American and world history ».",
 [null,"C'est la première Constitution.","Le Congrès est renforcé.","La Confédération est vaincue."]);
Q("recon","Quelle importance a eu l'Union League pendant la Reconstruction ?",
 ["Cette organisation liée au Parti républicain a aidé les Noirs dans la sphère publique et la mobilisation politique","C'était une milice confédérée","C'était l'armée de Grant","C'était un syndicat de planteurs"],
 "Après la loi de 1867, les anciens esclaves se sont mobilisés politiquement. À 1870, les États du Sud avaient des majorités républicaines et l'Union était rétablie.",
 [null,"Elle soutenait l'Union et le Parti républicain.","Elle n'avait rien d'une armée : c'était une organisation civile.","Elle aidait les Noirs libres, pas les planteurs."]);
Q("recon","Combien d'Afro-Américains ont occupé des fonctions publiques pendant la Reconstruction, selon le cours ?",
 ["Environ 2 000, dont 14 élus à la Chambre des représentants et 2 au Sénat","Aucun","Environ 20","Environ 200 000"],
 "Hiram Revels, né libre en Caroline du Nord, est devenu en 1870 le premier sénateur noir (Mississippi). Seule la Caroline du Sud avait une majorité noire dans sa législature (60 % de la population).",
 [null,"Il y en a eu environ 2 000.","Beaucoup plus : environ 2 000.","Beaucoup moins : environ 2 000."]);
Q("recon","Qu'est-ce qu'un « carpetbagger » ? Et un « scalawag » ?",
 ["Un carpetbagger est un Nordiste venu dans le Sud et souvent élu ; un scalawag est un Sudiste blanc républicain","Un carpetbagger est un Sudiste blanc républicain ; un scalawag est un Nordiste","Les deux sont d'anciens esclaves","Les deux sont des généraux confédérés"],
 "Les Démocrates sudistes utilisaient ces termes de manière péjorative pour discréditer les gouvernements républicains.",
 [null,"C'est inversé.","Ni l'un ni l'autre n'est un ancien esclave par définition.","Ce sont des civils."]);
Q("recon","Quelles réalisations les gouvernements républicains du Sud ont-ils obtenues ?",
 ["Les premières écoles publiques financées par l'État dans le Sud, une législation sur les droits civiques, des mesures pour les travailleurs ruraux et le financement de chemins de fer","L'abolition de toute taxe","La création de la Confédération","L'interdiction des syndicats"],
 "Les accusations de corruption existaient, mais, selon Foner, la corruption n'était « confined to no race, region, or party ». Ce que les adversaires ne pouvaient pas accepter était que d'anciens esclaves votent, occupent des fonctions et jouissent de l'égalité devant la loi.",
 [null,"Ils ont plutôt dépensé pour des écoles et des chemins de fer.","La Confédération était leur adversaire, pas leur œuvre.","Ils n'ont pas interdit les syndicats."]);
Q("recon","Qu'est-ce que le Freedmen's Bureau (1865-1870) ?",
 ["Une agence fédérale créée en mars 1865 et dirigée par O. O. Howard pour établir des écoles, aider les pauvres, régler les conflits et appuyer le travail libre ; ses réussites en éducation et en santé ont été frappantes","Une armée du Sud","Un parti politique","Une banque confédérée"],
 "Il y avait moins de 1 000 agents dans tout le Sud. Sherman écrit à Howard : « I fear you have Hercules' task ». En 1869, près de 3 000 écoles et plus de 150 000 élèves dépendaient du Bureau.",
 [null,"C'est une agence du gouvernement fédéral.","Ce n'est pas un parti.","Il était fédéral, pas confédéré."]);
Q("recon","Qu'est-ce que le métayage (sharecropping) ?",
 ["Un système où une famille loue une partie d'une plantation et partage la récolte avec le propriétaire, compromis initial entre la terre voulue par les Noirs et la discipline de travail voulue par les planteurs","Un système où les ouvriers possèdent la terre","Un travail salarié en usine","Une forme de colonisation"],
 "Il a fini par devenir de plus en plus oppressif. Les fermiers blancs aussi étaient pris dans le métayage et le crop lien : chaque recensement de 1880 à 1940 a compté plus de métayers blancs que noirs.",
 [null,"C'est l'opposé : ils louent la terre.","Le métayage est agricole, pas industriel.","Ce n'est pas de la colonisation."]);
Q("recon","Qu'est-ce que le « crop lien » ?",
 ["Un système où les fermiers, pour obtenir des fournitures à crédit, donnent en garantie une partie de leur récolte (surtout du coton), ce qui les endette","Une taxe sur le coton","Un syndicat de fermiers","Un prêt du gouvernement fédéral"],
 "Les taux d'intérêt étaient très élevés et le prix du coton baissait. Beaucoup de fermiers blancs, qui cultivaient 10 % du coton du Sud en 1860 et 40 % au milieu des années 1870, sont tombés dans la dépendance.",
 [null,"Ce n'est pas une taxe.","Ce n'est pas un syndicat.","Les prêts venaient de marchands."]);
Q("recon","Comment la liberté a-t-elle changé la vie des Noirs du Sud, en famille, à l'église et à l'école ?",
 ["Les familles se sont reconstituées, des Églises noires indépendantes (surtout méthodistes et baptistes) sont nées, et les Noirs de tout âge ont afflué vers les écoles et les premières universités noires","Rien n'a changé","Les familles ont été séparées","Les Noirs sont restés dans les églises blanches"],
 "Environ 250 pasteurs noirs ont occupé des fonctions publiques. Les premières universités noires : Fisk, Hampton, Howard. Des femmes noires se sont retirées du travail des champs pour consacrer plus de temps à leur famille, ce que les planteurs ont dénoncé.",
 [null,"Beaucoup de choses ont changé.","Les anciens esclaves cherchaient à retrouver leurs proches.","Ils ont créé leurs propres Églises."]);
Q("recon","Que veut dire Frederick Douglass par « Slavery is not abolished until the black man has the ballot » ?",
 ["Sans le droit de vote, les Noirs resteraient marqués par le « stigma of inferiority » ; moins que la pleine citoyenneté trahirait la promesse démocratique","Le vote n'est pas important","Seules les femmes doivent voter","Le vote doit être réservé aux propriétaires"],
 "Le droit de vote était central pour les anciens esclaves et leur désir d'égalité, dans une société où la participation politique est un élément essentiel de la liberté.",
 [null,"Douglass dit l'inverse.","Il parle des hommes noirs.","Il parle d'universalité."]);
Q("recon","Pourquoi les anciens esclaves associaient-ils la liberté à la terre ?",
 ["Parce qu'avec la terre ils pouvaient bâtir des communautés indépendantes du contrôle blanc ; ils estimaient avoir acquis un droit à la terre par leur travail non rémunéré","Parce qu'ils voulaient devenir planteurs en Afrique","Parce que la terre était gratuite","Parce que les planteurs leur offraient de la terre"],
 "Un congrès noir de l'Alabama déclarait : « The property which they hold was nearly all earned by the sweat of our brows. » Les pétitionnaires d'Edisto Island disaient que sans terre, « we have not bettered our condition ».",
 [null,"Ils voulaient rester dans leur pays.","Elle n'était pas gratuite.","Les planteurs refusaient."]);
Q("recon","Comment la plupart des planteurs du Sud définissaient-ils la liberté des Noirs ?",
 ["De la manière la plus étroite : un privilège, pas un droit","Comme un droit universel","Comme l'égalité complète","Comme une obligation de quitter le Sud"],
 "Le journaliste Sidney Andrews écrit en 1865 que les Blancs semblaient incapables de comprendre que la liberté du Noir signifiait la même chose que la leur. Environ 260 000 hommes sont morts pour la Confédération, plus d'un cinquième des hommes blancs adultes du Sud.",
 [null,"C'est la vision des anciens esclaves.","Ils refusaient l'égalité.","Ils voulaient des travailleurs."]);
Q("recon","Qu'était le Ku Klux Klan, fondé en 1866 ?",
 ["Une organisation terroriste secrète qui visait à empêcher les Noirs de voter et à détruire le Parti républicain dans le Sud","Un groupe de défense des Noirs","Une milice de l'Union","Un parti politique officiel"],
 "Ses victimes comprenaient des Républicains blancs (anciens unionistes, élus locaux, enseignants), mais surtout des Noirs. Le massacre de Colfax (Louisiane, 1873) en est un exemple : des Blancs armés ont assailli et tué des Noirs, dont une cinquantaine de miliciens noirs.",
 [null,"C'était l'inverse.","Il était contre l'Union.","Il agissait en secret."]);
Q("recon","Que sont les Enforcement Acts (1870-1871) ?",
 ["Des lois qui interdisaient la terreur et l'intimidation et permettaient au gouvernement fédéral de poursuivre le Klan ; des centaines de Klansmen ont été arrêtés","Des lois qui limitaient le droit de vote des Noirs","Des lois qui libéraient Johnson","Des lois sur les tarifs"],
 "Sous Grant, le gouvernement fédéral a réagi efficacement au terrorisme du Klan : de nombreux chefs ont fui le Sud.",
 [null,"C'est l'inverse.","Johnson est jugé en 1868.","Elles ne portaient pas sur les tarifs."]);
Q("recon","Qui étaient les Liberal Republicans (1872) ?",
 ["Des Républicains dissidents (dont Lyman Trumbull) qui, dénonçant la corruption, voulaient rendre le pouvoir aux « natural leaders » du Sud ; leur candidat Horace Greeley a perdu lourdement contre Grant","Des Radicaux qui voulaient plus de droits pour les Noirs","Des Démocrates du Sud","Des Confédérés"],
 "Leur attaque contre la Reconstruction a contribué à une résurgence du racisme dans le Nord. L'engagement du Nord s'est affaibli aussi à cause de la dépression de 1873.",
 [null,"C'est l'inverse : ils voulaient réduire le rôle du gouvernement fédéral au Sud.","Ils étaient républicains.","Les Confédérés avaient été vaincus en 1865 ; ce sont des Républicains dissidents."]);
Q("recon","Comment la Cour suprême a-t-elle affaibli les protections des droits des Noirs dans les années 1870 ?",
 ["En réduisant peu à peu les garanties adoptées par le Congrès, par exemple avec les Slaughterhouse Cases (1873) et United States v. Cruikshank (1876)","En les renforçant","En les ignorant totalement","En abolissant le 13e amendement"],
 "La Cour a « whittled away at the guarantees of black rights Congress had adopted ». La dépression de 1873 a aussi détourné l'attention du Nord.",
 [null,"C'est l'inverse.","Elle a rendu des décisions précises.","Le 13e amendement est resté en vigueur."]);
Q("recon","Qui étaient les Redeemers ?",
 ["Des Démocrates blancs du Sud qui prétendaient avoir « racheté » le Sud de la corruption, du mauvais gouvernement et du contrôle du Nord et des Noirs, souvent par la violence en plein jour","Des abolitionnistes du Nord","Des ministres noirs","Des soldats de l'Union"],
 "Leur triomphe a marqué la fin de la Reconstruction dans les États du Sud. Leur violence était « in broad daylight ».",
 [null,"Ils étaient sudistes.","Ils s'opposaient aux Noirs.","Ce ne sont pas des soldats."]);
Q("recon","Qu'est-ce que le « marché de 1877 » (Bargain of 1877) ?",
 ["Après l'élection très disputée entre Hayes et Tilden, un compromis a fait gagner Hayes ; les Démocrates du Sud ont accepté sa victoire, et la Reconstruction a pris fin","Un accord entre Lincoln et Lee","Un marché pour acheter l'Alaska","Un traité avec le Mexique"],
 "Le Congrès est intervenu en nommant une commission électorale de quinze membres. En échange, Hayes a promis de retirer les troupes fédérales du Sud, ce qui a laissé les États du Sud aux Redeemers. Foner : la Reconstruction a révélé les tensions inhérentes aux débats du XIXe siècle sur la liberté.",
 [null,"Lee avait capitulé à Appomattox en 1865.","L'Alaska a été achetée en 1867, sans rapport avec 1877.","Le Mexique n'est pas concerné."]);
Q("recon","Quelles sont, selon Foner, les thèmes principaux du chapitre 15 sur la Reconstruction ?",
 ["Elle a réussi à ramener le Sud dans l'Union, mais, malgré des succès initiaux, a finalement échoué à cause de l'opposition des Blancs du Sud et de l'incapacité du Nord à la soutenir","Elle a réussi à protéger les droits des Noirs pour toujours","Elle a échoué parce que le Sud a gagné la guerre","Elle n'a rien changé"],
 "Les succès : réintégration du Sud, amendements 13, 14, 15, écoles, familles, Églises, premiers élus noirs. Les échecs : pas de terres, violence du Klan, retrait du Nord, Redeemers, fin en 1877.",
 [null,"Elle a été en grande partie défaite.","Le Nord a gagné la guerre.","Elle a changé la Constitution."]);
Q("recon","Mettez ces événements dans l'ordre : loi sur les droits civiques, 15e amendement, Bargain of 1877, Reconstruction Act.",
 ["Loi sur les droits civiques (1866) → Reconstruction Act (1867) → 15e amendement (1870) → Bargain of 1877","Reconstruction Act → loi sur les droits civiques → Bargain of 1877 → 15e amendement","15e amendement → Reconstruction Act → loi sur les droits civiques → Bargain of 1877","Bargain of 1877 → 15e amendement → Reconstruction Act → loi sur les droits civiques"],
 "Chronologie : Black Codes et Reconstruction présidentielle (1865-1867) → loi de 1866 → Reconstruction Act de 1867 → mise en accusation de Johnson (1868) → 14e (1868) → Grant (1869) → 15e (1870) → Enforcement Acts → Liberal Republicans (1872) → dépression de 1873 → Cruikshank (1876) → Bargain de 1877.",
 [null,"Le Reconstruction Act vient après la loi de 1866.","Le 15e amendement vient après 1867.","Le Bargain est la fin de la Reconstruction."]);

/* ---------------- Compétences BI ---------------- */
Q("ib","Dans une analyse de source (Paper 1), quelle formulation le professeur recommande-t-elle ?",
 ["« La source affirme / soutient / propose que… »","« Je pense que… »","« Je crois que… »","« À mon avis, c'est insanely biaisé »"],
 "« I think » affaiblit l'argument et est déjà implicite. Évitez aussi les pronoms je et tu, et l'argot.",
 [null,"À éviter selon le feedback global.","À éviter selon le feedback global.","Évitez l'argot et les expressions familières."]);
Q("ib","Selon le feedback sur le Paper 1, quelle a été l'erreur la plus courante ?",
 ["Décrire le contenu sans revenir à la question d'enquête","Utiliser trop de citations","Écrire trop court","Écrire au stylo"],
 "Reprenez la question d'enquête et utilisez son langage dans toute la réponse.",
 [null,"Ce n'est pas l'erreur principale signalée.","Ce n'est pas l'erreur principale.","Le professeur demande justement d'écrire au stylo."]);
Q("ib","Que faut-il regarder en premier pour analyser l'origine d'une source ?",
 ["Les dates, les titres et l'auteur","La longueur du texte","La couleur du document","Le nombre de paragraphes"],
 "« Look at the dates! Look at the titles. » Utilisez l'information disponible sans suppositions non fondées.",
 [null,"Ce n'est pas l'origine.","Ce n'est pas pertinent.","Ce n'est pas pertinent."]);
Q("ib","Une question « dans quelle mesure » (to what extent) vous demande de…",
 ["peser les preuves pour et contre et donner un jugement nuancé","raconter les événements dans l'ordre","dire oui ou non sans justifier","lister des dates"],
 "Il faut une position claire (« dans une large mesure », « dans une certaine mesure ») soutenue par les sources.",
 [null,"Raconter n'est pas analyser.","Il faut justifier.","Les dates seules ne répondent pas."]);
Q("ib","Comment bien commencer la question 3 (comparaison de sources) du Paper 1 ?",
 ["Par une phrase qui reprend la question d'enquête, par exemple « Les sources A, B et C présentent des perspectives différentes sur… »","Par une citation longue","Par « Je pense que »","Par la biographie de l'auteur"],
 "Puis continuez à utiliser le langage de la question, et terminez par une conclusion qui revient à la question.",
 [null,"Ce n'est pas la meilleure ouverture.","À éviter.","Ce n'est pas l'ouverture recommandée."]);
Q("ib","Que représente la peinture de Faith Ringgold étudiée en classe (« The Flag is Bleeding », 1967) ?",
 ["Un drapeau américain qui saigne devant des personnes blanches et un homme noir ; elle demande si l'on peut un jour être unis","La signature de la Constitution","La bataille de Gettysburg","Le portrait de Lincoln"],
 "Peinte pendant la violence raciale des années 1960, l'œuvre sert d'exercice : observer, évidence, analyser.",
 [null,"Ce n'est pas le sujet.","Ce n'est pas le sujet.","Ce n'est pas le sujet."]);
Q("ib","Quelles sont les trois étapes pour analyser une image en classe ?",
 ["Observer, évidence, analyser","Lire, copier, résumer","Dater, signer, archiver","Décrire, juger, oublier"],
 "Qu'est-ce que vous observez ? Qu'est-ce que l'image veut dire ? Comment le savez-vous ?",
 [null,"Ce ne sont pas les étapes.","Ce ne sont pas les étapes.","Ce ne sont pas les étapes."]);

/* ---------------- Chronologie (generated questions) ---------------- */
/* [event, sortKey (YYYY.MMDD), label shown as the answer] */
let CHRONO = [
 ["La Convention constitutionnelle et la Constitution", 1787.09, "1787"],
 ["Fin légale de l'importation d'esclaves (traite)", 1808.01, "1808"],
 ["Fondation de l'American Colonization Society", 1816.12, "1816"],
 ["Le compromis du Missouri", 1820.03, "1820"],
 ["La loi douanière (tarif) de 1828", 1828.05, "1828"],
 ["L'Appeal de David Walker", 1829.09, "1829"],
 ["Premier numéro de The Liberator (Garrison)", 1831.01, "1831"],
 ["La révolte de Nat Turner", 1831.08, "1831"],
 ["La crise de la nullité", 1832.11, "1832–1833"],
 ["Fondation de l'American Anti-Slavery Society", 1833.12, "1833"],
 ["La Chambre adopte la gag rule", 1836.05, "1836"],
 ["Elijah Lovejoy tué à Alton (Illinois)", 1837.11, "1837"],
 ["Douglass s'échappe vers le Nord", 1838.09, "1838"],
 ["Scission du mouvement abolitionniste ; Liberty Party", 1840.05, "1840"],
 ["Discours de Henry Highland Garnet appelant à la rébellion", 1843.08, "1843"],
 ["Abrogation de la gag rule", 1844.12, "1844"],
 ["Publication du Narrative de Frederick Douglass", 1845.05, "1845"],
 ["La guerre américano-mexicaine", 1846.04, "1846–1848"],
 ["La convention de Seneca Falls", 1848.07, "1848"],
 ["La ruée vers l'or en Californie", 1849.01, "1849"],
 ["Le compromis de 1850", 1850.09, "1850"],
 ["Sojourner Truth : « Aren't I a woman? »", 1851.05, "1851"],
 ["Uncle Tom's Cabin publié en livre", 1852.03, "1852"],
 ["Douglass : « What to the Slave is the Fourth of July? »", 1852.07, "1852"],
 ["L'acte Kansas-Nebraska", 1854.05, "1854"],
 ["La décision Dred Scott", 1857.03, "1857"],
 ["Les débats Lincoln-Douglas", 1858.08, "1858"],
 ["Le raid de John Brown à Harpers Ferry", 1859.10, "1859"],
 ["Élection de Lincoln", 1860.11, "novembre 1860"],
 ["Sécession de la Caroline du Sud", 1860.12, "décembre 1860"],
 ["Attaque de Fort Sumter", 1861.0412, "avril 1861"],
 ["Message de Lincoln au Congrès (« ballots… bullets »)", 1861.0704, "4 juillet 1861"],
 ["Bataille de Bull Run (First Manassas)", 1861.0721, "juillet 1861"],
 ["Lincoln présente la Proclamation à son cabinet", 1862.0722, "22 juillet 1862"],
 ["Lincoln rencontre des dirigeants noirs de Washington (colonisation)", 1862.08, "août 1862"],
 ["Bataille d'Antietam", 1862.0917, "17 septembre 1862"],
 ["Proclamation d'émancipation préliminaire publiée", 1862.0922, "22 septembre 1862"],
 ["Message annuel de Lincoln (« dogmas of the quiet past »)", 1862.12, "1er décembre 1862"],
 ["Entrée en vigueur de la Proclamation d'émancipation", 1863.0101, "1er janvier 1863"],
 ["Bataille de Gettysburg", 1863.0701, "juillet 1863"],
 ["Chute de Vicksburg", 1863.0704, "juillet 1863"],
 ["La marche de Sherman vers la mer", 1864.11, "1864"],
 ["Ordre spécial n° 15 de Sherman (« forty acres and a mule »)", 1865.0116, "janvier 1865"],
 ["Création du Freedmen's Bureau", 1865.03, "mars 1865"],
 ["Capitulation du Sud à Appomattox", 1865.0409, "9 avril 1865"],
 ["Assassinat de Lincoln", 1865.0414, "14 avril 1865"],
 ["Juneteenth à Galveston (Texas)", 1865.0619, "19 juin 1865"],
 ["Ratification du 13e amendement", 1865.1218, "18 décembre 1865"],
 ["Loi sur les droits civiques (malgré le veto de Johnson)", 1866.04, "1866"],
 ["Fondation du Ku Klux Klan", 1866.12, "1866"],
 ["Reconstruction Act (cinq districts militaires)", 1867.03, "mars 1867"],
 ["Mise en accusation de Johnson (acquitté à une voix)", 1868.05, "1868"],
 ["Ratification du 14e amendement", 1868.07, "1868"],
 ["Élection de Grant", 1868.11, "novembre 1868"],
 ["Hiram Revels, premier sénateur noir", 1870.02, "1870"],
 ["Ratification du 15e amendement", 1870.03, "1870"],
 ["Enforcement Acts contre le Klan", 1870.05, "1870–1871"],
 ["Les Liberal Republicans et Greeley", 1872.05, "1872"],
 ["Massacre de Colfax (Louisiane)", 1873.04, "1873"],
 ["Début de la dépression économique", 1873.09, "1873"],
 ["United States v. Cruikshank", 1876.03, "1876"],
 ["Le marché de 1877 et la fin de la Reconstruction", 1877.03, "1877"]
];

/* ---------------- Personnages ---------------- */
/* [name, description, group] */
let PEOPLE = [
 ["Thomas Jefferson","Auteur de la Déclaration d'indépendance ; antifédéraliste ; a appelé l'esclavage une « tache hideuse » tout en tenant plus de 100 personnes en esclavage.","Fondateurs"],
 ["George Washington","Premier président ; a tenu plus de 600 personnes en esclavage au cours de sa vie tout en jugant l'esclavage « repugnant ».","Fondateurs"],
 ["John Adams","Selon le cours, la seule exception parmi les Pères fondateurs : il n'était pas esclavagiste.","Fondateurs"],
 ["Alexander Hamilton","Chef des fédéralistes : gouvernement central fort, économie industrielle.","Fondateurs"],
 ["Patrick Henry","Antifédéraliste qui craignait un gouvernement central tyrannique.","Fondateurs"],
 ["Benjamin Franklin","A accepté la Constitution « avec tous ses défauts » le 17 septembre 1787.","Fondateurs"],
 ["Luther Martin","Délégué qui voulait permettre d'interdire ou de taxer la traite, contraire aux principes de la Révolution.","Fondateurs"],
 ["John Rutledge","Délégué de Caroline du Sud : « Religion and humanity had nothing to do with this question. »","Fondateurs"],
 ["Charles Pinckney","Délégué : la Caroline du Sud n'accepterait jamais une Constitution qui interdit la traite.","Fondateurs"],
 ["James Madison","A pris des notes sur les débats de la Convention de 1787.","Fondateurs"],
 ["Harriet Tubman","Échappée de l'esclavage, elle est retournée dans le Sud pour guider d'autres personnes sur le chemin de fer souterrain.","Résistance"],
 ["Nat Turner","Prédicateur asservi qui a mené une révolte armée en Virginie en 1831.","Résistance"],
 ["John Brown","Abolitionniste blanc qui a attaqué l'arsenal de Harpers Ferry en 1859 ; pendu, il devient un martyr dans le Nord.","Résistance"],
 ["Frederick Douglass","Ancien esclave, orateur et éditeur ; Narrative (1845) ; discours « What to the Slave is the Fourth of July? » (1852).","Abolition"],
 ["William Lloyd Garrison","Éditeur de The Liberator (1831) ; voulait l'abolition immédiate ; a appelé la Constitution un « pacte avec le diable ».","Abolition"],
 ["David Walker","Noir libre de Boston, auteur de l'Appeal to the Coloured Citizens of the World (1829).","Abolition"],
 ["Theodore Weld","Ministre converti par Finney qui a formé des orateurs : « l'esclavage est un péché ».","Abolition"],
 ["Henry Highland Garnet","Abolitionniste noir qui a appelé en 1843 les personnes en esclavage à se révolter.","Abolition"],
 ["Harriet Beecher Stowe","Autrice de Uncle Tom's Cabin (1852), l'écrit antiesclavagiste le plus lu.","Abolition"],
 ["Elijah P. Lovejoy","Éditeur antiesclavagiste tué par une foule à Alton (Illinois) en 1837 : le premier martyr du mouvement.","Abolition"],
 ["John Quincy Adams","Ancien président, représentant du Massachusetts, qui a fait abroger la gag rule en 1844.","Abolition"],
 ["Lydia Maria Child","Autrice de An Appeal in Favor of That Class of Americans Called Africans (1833).","Abolition"],
 ["James G. Birney","Candidat du Liberty Party à la présidentielle de 1840 (environ 7 000 voix).","Abolition"],
 ["Angelina Grimké","Fille d'un esclavagiste de Caroline du Sud ; lettre de 1837 : ce qui est moralement juste pour l'homme l'est pour la femme.","Femmes"],
 ["Sarah Grimké","Autrice de Letters on the Equality of the Sexes (1838) ; « salaire égal pour travail égal ».","Femmes"],
 ["Catharine Beecher","A répondu aux Grimké que le ciel avait fait l'homme supérieur et la femme subordonnée (1837).","Femmes"],
 ["Elizabeth Cady Stanton","Principale autrice de la Déclaration des sentiments ; co-organisatrice de Seneca Falls (1848).","Femmes"],
 ["Lucretia Mott","Co-organisatrice de Seneca Falls après avoir été exclue de la convention de Londres en 1840.","Femmes"],
 ["Sojourner Truth","Née en esclavage à New York ; « And aren't I a woman? » (1851).","Femmes"],
 ["Dorothea Dix","Militante pour un traitement humain des malades mentaux ; 28 États ont construit des hôpitaux.","Femmes"],
 ["Margaret Fuller","Autrice de Woman in the Nineteenth Century (1845), première femme critique littéraire au New York Tribune.","Femmes"],
 ["Horace Mann","Réformateur de l'éducation : écoles publiques financées par l'impôt dans le Nord.","Réformes"],
 ["George Fitzhugh","Auteur proesclavagiste de Sociology for the South (1854) qui rejetait les idéaux de liberté et d'égalité.","Sources"],
 ["John C. Calhoun","Vice-président ; théoricien de la nullité : un État peut annuler une loi fédérale.","Causes"],
 ["Andrew Jackson","Président qui a mobilisé l'armée contre la Caroline du Sud pendant la crise de la nullité.","Causes"],
 ["Henry Clay","Homme politique qui soutenait l'American Colonization Society.","Causes"],
 ["Dred Scott","Homme asservi qui a demandé sa liberté parce qu'il avait vécu en Illinois et à Fort Snelling.","Causes"],
 ["Roger B. Taney","Juge en chef qui a rédigé la décision Dred Scott (1857).","Causes"],
 ["Irene Emerson","Veuve du docteur Emerson, poursuivie par Dred Scott après avoir refusé qu'il rachète sa liberté.","Causes"],
 ["Stephen Douglas","Démocrate du Nord, défenseur de la souveraineté populaire ; doctrine de Freeport (1858).","1860"],
 ["Abraham Lincoln","Républicain ; « A house divided against itself cannot stand » ; élu président en 1860.","1860"],
 ["John Breckinridge","Candidat démocrate du Sud en 1860 : droits des esclavagistes dans les territoires.","1860"],
 ["John Bell","Candidat de l'Union constitutionnelle en 1860 : la Constitution, l'Union et les lois.","1860"],
 ["James Buchanan","Président qui a refusé de céder Fort Sumter aux Sudistes.","Guerre"],
 ["William Seward","Secrétaire d'État qui a conseillé d'attendre une victoire avant de publier la Proclamation.","Guerre"],
 ["Robert E. Lee","Général confédéré ; son invasion du Nord échoue à Gettysburg ; capitule à Appomattox.","Guerre"],
 ["Ulysses S. Grant","Général de l'Union : victoire à Vicksburg, guerre d'attrition, surnommé « Butcher of Men ».","Guerre"],
 ["William T. Sherman","Général de l'Union qui mène la marche vers la mer (1864) pour inspirer la terreur.","Guerre"],
 ["Gordon Granger","Général de l'Union qui annonce la liberté à Galveston (Texas) le 19 juin 1865.","Guerre"],
 ["Faith Ringgold","Artiste de « The American People Series #18: The Flag is Bleeding » (1967).","Méthode"],
["Eric Foner","Historien : article « The Emancipation of Abe Lincoln » (2012) ; chapitre 15 « What is Freedom? » sur la Reconstruction.","Émancipation"],
["Salmon P. Chase","Secrétaire du Trésor et abolitionniste : a poussé Lincoln à conclure la Proclamation par « an act of justice ».","Émancipation"],
["Andrew Johnson","Président après Lincoln (Reconstruction présidentielle) : pardons à l'élite blanche, a rendu les terres, opposé au Congrès ; mis en accusation en 1868.","Reconstruction"],
["Thaddeus Stevens","Républicain radical : voulait confisquer les terres des planteurs et les donner aux anciens esclaves.","Reconstruction"],
["Charles Sumner","Sénateur radical du Massachusetts, défenseur des droits des Noirs.","Reconstruction"],
["Lyman Trumbull","Sénateur de l'Illinois : a proposé le Civil Rights Bill et la prolongation du Freedmen's Bureau ; plus tard Liberal Republican.","Reconstruction"],
["O. O. Howard","Directeur du Freedmen's Bureau (1865-1870) ; Sherman : « Hercules' task ».","Reconstruction"],
["Garrison Frazier","Pasteur baptiste noir de Savannah, porte-parole des dirigeants noirs devant Sherman : la liberté, c'est la terre et le fruit de son travail.","Reconstruction"],
["Hiram Revels","Né libre en Caroline du Nord ; premier sénateur noir américain (Mississippi, 1870).","Reconstruction"],
["Edwin Stanton","Secrétaire à la Guerre, allié des Radicaux : son renvoi par Johnson a mené à la mise en accusation.","Reconstruction"],
["Horace Greeley","Candidat des Liberal Republicans en 1872 ; battu lourdement par Grant.","Reconstruction"],
["Rutherford B. Hayes","Républicain qui a gagné l'élection disputée de 1876 contre Tilden ; fin de la Reconstruction (1877).","Reconstruction"],
["Samuel Tilden","Démocrate battu par Hayes lors de l'élection disputée de 1876.","Reconstruction"]
];

/* ---------------- Citations ---------------- */
/* [quote, author, context] */
let QUOTES = [
 ["« A house divided against itself cannot stand. »","Abraham Lincoln","Discours de Springfield, 16 juin 1858"],
 ["« I believe this government cannot endure permanently half slave and half free. »","Abraham Lincoln","Discours de Springfield, 1858"],
 ["« Ballots are the rightful and peaceful successors of bullets. »","Abraham Lincoln","Message au Congrès, 4 juillet 1861"],
 ["« Slavery cannot exist a day or an hour anywhere, unless it is supported by local police regulations. »","Stephen Douglas","Débat de Freeport, 1858"],
 ["« I am not for the dissolution of the Union under any circumstances. »","Stephen Douglas","Débat de Freeport, 1858"],
 ["« I will be as harsh as truth, and as uncompromising as justice… I will be heard. »","William Lloyd Garrison","The Liberator, 1831"],
 ["« Religion and humanity had nothing to do with this question. Interest alone is the governing principle with nations. »","John Rutledge","Convention de 1787"],
 ["« Let every State import what it pleases. »","Oliver Ellsworth","Convention de 1787"],
 ["« South Carolina can never receive the plan if it prohibits the slave trade. »","Charles Pinckney","Convention de 1787"],
 ["« I agree to this Constitution, with all its faults. »","Benjamin Franklin","17 septembre 1787"],
 ["« It opened my eyes to the horrible pit, but to no ladder upon which to get out. »","Frederick Douglass","Narrative, 1845"],
 ["« What, to the Slave, is the Fourth of July? »","Frederick Douglass","Rochester, 1852"],
 ["« Whatever it is morally right for man to do, it is morally right for woman to do. »","Angelina Grimké","The Liberator, 1837"],
 ["« Heaven has appointed to one sex the superior, and to the other the subordinate station. »","Catharine Beecher","Essay on Slavery and Abolitionism, 1837"],
 ["« We hold these truths to be self-evident: that all men and women are created equal. »","Elizabeth Cady Stanton","Déclaration des sentiments, Seneca Falls, 1848"],
 ["« And aren't I a woman? »","Sojourner Truth","Convention des droits des femmes, 1851"],
 ["« Either the theory of our government is false, or women have a right to vote. »","Lydia Maria Child","Cité par Foner"],
 ["« It may be viewed as the last measure of an exhausted government, a cry for help. »","William Seward","Au cabinet de Lincoln, juillet 1862"],
 ["« We recognize no political principle other than the Constitution of the country, the Union of the States, and the Enforcement of the Laws. »","John Bell","Parti de l'union constitutionnelle, 1860"],
 ["« The powers not delegated to the United States by the Constitution… are reserved to the States respectively, or to the people. »","Le 10e amendement","Constitution des États-Unis"],
["« The dogmas of the quiet past are inadequate to the stormy present… We must disenthrall ourselves. »","Abraham Lincoln","Message annuel au Congrès, 1er décembre 1862"],
["« But for your race among us there could not be war. »","Abraham Lincoln","À des dirigeants noirs de Washington, août 1862"],
["« I should be damned in time and eternity. »","Abraham Lincoln","1864, sur l'idée de retirer la Proclamation"],
["« With malice toward none; with charity for all… »","Abraham Lincoln","Second discours d'investiture, 4 mars 1865"],
["« Until every drop of blood drawn with the lash, shall be paid by another drawn with the sword. »","Abraham Lincoln","Second discours d'investiture, 4 mars 1865"],
["« What is freedom? Is it the bare privilege of not being chained? »","James A. Garfield","1865, cité par Foner"],
["« If I cannot do like a white man, I am not free. »","Henry Adams","Ancien esclave de Louisiane, 1865"],
["« Slavery is not abolished until the black man has the ballot. »","Frederick Douglass","1865"],
["« I fear you have Hercules' task. »","William T. Sherman","À O. O. Howard, sur le Freedmen's Bureau"],
["« We have not bettered our condition. »","Pétition des affranchis d'Edisto Island","1865, contre la restitution des terres par Johnson"]
];

/* ---------------- Lexique FR / EN ---------------- */
/* [term FR, English, definition] */
let LEX = [
 ["Le compromis des trois cinquièmes","Three-Fifths Compromise","Une personne en esclavage compte pour 3/5 d'une personne dans le recensement (représentation et impôts)."],
 ["La clause des esclaves fugitifs","Fugitive Slave Clause","Article IV : une personne échappée dans un autre État doit être rendue à son propriétaire."],
 ["L'institution particulière","The peculiar institution","Euphémisme pour désigner l'esclavage."],
 ["Le recensement","Census","Le comptage de la population qui fixe les sièges, les grands électeurs et les impôts directs."],
 ["Les grands électeurs","Electors","Les personnes qui élisent officiellement le président."],
 ["Le fédéralisme dual","Dual federalism","Idée que l'État fédéral et les États ont chacun leur sphère de pouvoir séparée."],
 ["Les droits des États","States' rights","Doctrine selon laquelle les États gardent les pouvoirs non délégués (10e amendement)."],
 ["La nullité","Nullification","Doctrine de Calhoun : un État peut déclarer nulle une loi fédérale inconstitutionnelle."],
 ["Les droits de douane","Tariffs","Taxes sur les produits importés ; source de la crise de 1832."],
 ["Le sectionnalisme","Sectionalism","Privilégier les intérêts de sa région plutôt que ceux de la nation."],
 ["La souveraineté populaire","Popular sovereignty","Les habitants d'un territoire décident par vote s'il sera libre ou esclavagiste."],
 ["La cession mexicaine","Mexican Cession","Territoires cédés par le Mexique en 1848 (traité de Guadalupe Hidalgo)."],
 ["La sécession","Secession","Se retirer officiellement d'une alliance ou d'une union."],
 ["Les États frontaliers","Border states","États esclavagistes restés dans l'Union (Maryland, Kentucky, Missouri, Delaware)."],
 ["La colonisation","Colonization","Projet d'installer les Noirs libérés en Afrique (Liberia) ou ailleurs."],
 ["L'abolition immédiate","Immediate abolition","Fin de l'esclavage tout de suite, sans compensation ni déportation."],
 ["La persuasion morale","Moral suasion","Convaincre par des arguments moraux et religieux plutôt que par la force ou la politique."],
 ["La citoyenneté de naissance","Birthright citizenship","Toute personne née aux États-Unis est citoyenne, quelle que soit sa race."],
 ["La gag rule","Gag rule","Règle de la Chambre (1836-1844) qui interdisait d'examiner les pétitions antiesclavagistes."],
 ["Le suffrage des femmes","Woman suffrage","Le droit de vote des femmes, réclamé à Seneca Falls (1848)."],
 ["Le chemin de fer souterrain","Underground Railroad","Réseau secret qui aidait les personnes en esclavage à fuir vers le Nord et le Canada."],
 ["La résistance quotidienne","Everyday resistance","Résistance discrète : travailler lentement, simuler la maladie, garder sa culture, apprendre à lire."],
 ["Le laissez-passer","Pass","Document qui permettait à une personne asservie de circuler ; Douglass voulait écrire le sien."],
 ["Les Homesteads","Homesteads","Terres de l'Ouest données aux colons ; Lincoln et Douglas étaient pour."],
 ["Le plan Anaconda","Anaconda Plan","Blocus des côtes et contrôle du Mississippi pour étouffer le Sud."],
 ["La guerre d'attrition","War of attrition","User l'ennemi par des pertes qu'il ne peut pas remplacer."],
 ["La capitulation inconditionnelle","Unconditional surrender","Se rendre sans aucune condition ; exigence de Lincoln."],
 ["La Proclamation d'émancipation","Emancipation Proclamation","Mesure de guerre de Lincoln libérant les esclaves des régions en rébellion (effective le 1er janvier 1863)."],
 ["Le tournant","Turning point","Moment qui change la direction de la guerre (Gettysburg, Vicksburg)."],
 ["La question d'enquête","Inquiry question","La question à laquelle toute la réponse du Paper 1 doit revenir."],
["La double émancipation","Double emancipation","Selon Foner : la Proclamation a émancipé les esclaves et Lincoln lui-même de ses anciennes idées."],
["Le 13e amendement","13th Amendment","Ratifié le 18 décembre 1865 : abolit l'esclavage, sauf comme punition d'un crime."],
["La Reconstruction","Reconstruction","1865-1877 : réintégrer le Sud et décider de la place des anciens esclaves dans la nation."],
["Le plan des 10 %","Ten-percent Plan","Plan de Lincoln : un État est réadmis quand 10 % des électeurs de 1860 jurent loyauté."],
["Les Républicains radicaux","Radical Republicans","Républicains du Congrès (Sumner, Stevens) qui voulaient punir le Sud et protéger les droits des Noirs."],
["Les Black Codes","Black Codes","Lois du Sud (1865-1866) qui limitaient la liberté des anciens esclaves."],
["Le Freedmen's Bureau","Freedmen's Bureau","Agence fédérale (1865-1870) : écoles, aide aux pauvres, travail libre."],
["Le métayage","Sharecropping","Une famille loue une parcelle et partage la récolte avec le propriétaire."],
["Le crop lien","Crop lien","Une partie de la récolte donnée en garantie pour obtenir des fournitures à crédit."],
["Un carpetbagger","Carpetbagger","Nordiste venu dans le Sud, souvent élu."],
["Un scalawag","Scalawag","Sudiste blanc républicain."],
["La mise en accusation","Impeachment","Procédure du Congrès contre un responsable (Johnson, 1868)."],
["Les Enforcement Acts","Enforcement Acts","Lois de 1870-1871 contre le terrorisme du Klan."],
["Les Redeemers","Redeemers","Démocrates blancs du Sud qui ont repris le pouvoir en « rachetant » le Sud."],
["Le marché de 1877","Bargain of 1877","Compromis après l'élection Hayes-Tilden ; fin de la Reconstruction."],
["L'amnistie","Amnesty","Pardon accordé à ceux qui ont enfreint la loi (les Sudistes rebelles)."]
];

/* ---------------- Fiches de révision (notes par leçon) ---------------- */
/* Each lesson: id, title, topics (for its quiz button), and HTML blocks */
let NOTES = [
 { id:"l1", t:"Leçon 1 · La Constitution, l'esclavage et la résistance", topics:["const","res"], q:"Est-ce que la Constitution a établi un gouvernement juste ?", html:`
  <h3>La race dans les Amériques</h3>
  <ul><li><b>Amérique anglaise</b> : système binaire blancs / non-blancs ; « une goutte » suffit (one-drop rule).</li>
  <li><b>Amérique latine</b> : système de castas, plus complexe : <i>péninsulaires</i> (blancs nés en Europe), <i>créoles</i> (blancs nés dans les Amériques), <i>mestizos</i> (métis), indigènes, personnes en esclavage. Des chemins plus diversifiés vers la liberté.</li>
  <li>La race est une construction sociale qui a servi à justifier l'esclavage. Cultures de plantation : tabac, riz, indigo, coton.</li></ul>
  <h3>Fédéralistes et antifédéralistes</h3>
  <table class="table"><tr><th></th><th>Fédéralistes</th><th>Antifédéralistes</th></tr>
  <tr><td>Qui</td><td>Hamilton, Adams, Madison, Franklin, Jay, Pinckney</td><td>Jefferson, Monroe, Patrick Henry, R. H. Lee, M. Smith, G. Mason, G. Clinton</td></tr>
  <tr><td>Constitution</td><td>Pour la ratification ; interprétation souple</td><td>Contre ; interprétation stricte</td></tr>
  <tr><td>Pouvoir</td><td>Gouvernement central fort</td><td>Pouvoir des États, peur de la tyrannie</td></tr>
  <tr><td>Alliés · économie · région</td><td>Royaume-Uni · industrie · nord-est</td><td>France · agriculture · sud et ouest</td></tr></table>
  <h3>L'esclavage et les Pères fondateurs</h3>
  <ul><li>« All men are created equal », mais sauf John Adams, la plupart des fondateurs étaient esclavagistes.</li>
  <li><b>Jefferson</b> : l'esclavage est « moralement dépravé », une « tache hideuse » ; il tient plus de 100 personnes en esclavage.</li>
  <li><b>Washington</b> : plus de 600 personnes en esclavage ; juge l'esclavage « repugnant ».</li>
  <li>Le passage de la Déclaration qui appelait la traite un « crime abominable » a été <b>coupé</b>.</li></ul>
  <h3>Comment la Constitution protège l'esclavage</h3>
  <ul><li><b>Art. I, s. 2, cl. 3 · trois cinquièmes</b> : le recensement fixe (1) les représentants, (2) les grands électeurs, (3) les impôts directs. Le Sud paie plus d'impôts MAIS gagne des sièges.</li>
  <li><b>Art. I, s. 9, cl. 1 · la traite</b> : pas d'interdiction avant 1808 ; taxe maximale de 10 $ par personne.</li>
  <li><b>Art. IV, s. 2, cl. 3 · fugitifs</b> : une personne échappée doit être « delivered up ».</li>
  <li>Le mot « esclavage » n'apparaît jamais : « other Persons », « Person held to Service or Labour ».</li></ul>
  <h3>Convention de 1787 (notes de Madison, 21 août)</h3>
  <ul><li><b>Luther Martin</b> : permettre d'interdire ou de taxer la traite ; contraire aux principes de la Révolution.</li>
  <li><b>Rutledge</b> : « Interest alone » ; le Nord sera le transporteur des produits du Sud.</li>
  <li><b>Ellsworth</b> : « Let every State import what it pleases. »</li>
  <li><b>Pinckney</b> : la Caroline du Sud n'acceptera jamais une interdiction de la traite.</li>
  <li><b>Franklin</b> (17 sept.) : accepte la Constitution « avec tous ses défauts ».</li></ul>
  <h3>La résistance</h3>
  <table class="table"><tr><th>Quotidienne</th><th>« Extrême »</th></tr>
  <tr><td>Travailler lentement ou mal · simuler la maladie · abîmer l'équipement · voler de la nourriture · garder sa langue, sa culture, sa religion · apprendre à lire et écrire</td><td>Défier les ordres ouvertement · incendie volontaire · s'échapper · révolte armée</td></tr></table>
  <ul><li><b>Chemin de fer souterrain</b> : réseau secret ; <b>Harriet Tubman</b> retourne guider d'autres personnes.</li>
  <li><b>Nat Turner (1831, Virginie)</b> : révolte d'un prédicateur asservi → lois plus sévères, peur du Sud.</li>
  <li><b>John Brown (1859, Harpers Ferry)</b> : abolitionniste blanc, attaque un arsenal fédéral → martyr au Nord, terreur au Sud, un an avant 1860.</li>
  <li>Peu de grandes révoltes : surveillance, patrouilles, représailles. Ce n'est pas une acceptation.</li></ul>`},
 { id:"l2", t:"Leçon 2 · L'abolitionnisme (Foner, ch. 12)", topics:["abo"], q:"Quels étaient les points de vue divers parmi les abolitionnistes ?", html:`
  <h3>Avant 1830 : la colonisation</h3>
  <ul><li><b>American Colonization Society (1816)</b> : abolition graduelle + installation des Noirs en Afrique → <b>Liberia</b>, capitale Monrovia (James Monroe).</li>
  <li>Soutiens : Henry Clay, John Marshall, Andrew Jackson. Idée de base : l'Amérique est une société blanche.</li>
  <li>La plupart des Afro-Américains s'y opposent : en 1817, 3 000 Noirs libres à Philadelphie affirment qu'ils sont Américains.</li></ul>
  <h3>L'abolitionnisme militant (années 1830)</h3>
  <ul><li>L'esclavage est un péché et contredit la Déclaration. Abolition <b>immédiate</b> ; les Noirs, membres égaux de la république ; combattre le racisme.</li>
  <li><b>David Walker</b>, Appeal (1829). <b>Garrison</b>, The Liberator (1831) : « I will be heard » ; Constitution = « pacte avec le diable » ; voulait dissoudre l'Union (rejeté par la plupart).</li>
  <li><b>American Anti-Slavery Society (1833)</b> : ~100 000 membres à la fin de la décennie ; presse à vapeur, pamphlets, pétitions. <b>Theodore Weld</b> : « l'esclavage est un péché ».</li>
  <li><b>Persuasion morale</b> : convaincre sans violence ; beaucoup de « non-résistants » (pacifistes). Turner (1831) renforce la peur du Sud.</li></ul>
  <h3>Citoyenneté et nouvelle vision</h3>
  <ul><li><b>Citoyenneté de naissance</b> : né aux États-Unis = citoyen, égal, quelle que soit la race. Victoires : Black Laws de l'Ohio abrogées (1849), écoles de Boston intégrées (1855).</li>
  <li>Lydia Maria Child, Appeal (1833). La <b>Liberty Bell</b> doit son nom aux abolitionnistes.</li></ul>
  <h3>Abolitionnistes noirs</h3>
  <ul><li><b>Douglass</b> : Narrative (1845) ; « What to the Slave is the Fourth of July? » (Rochester, 1852).</li>
  <li><b>Uncle Tom's Cabin</b> (Stowe, 1852) : plus d'un million d'exemplaires en 1854.</li>
  <li><b>Henry Highland Garnet</b> (1843) appelle à la rébellion. Fêtes alternatives : 1er janvier et 1er août plutôt que le 4 juillet.</li></ul>
  <h3>Opposition et liberté d'expression</h3>
  <ul><li>Foules menées par des « gentlemen of property and standing ». <b>Elijah Lovejoy</b> tué (1837). <b>Pennsylvania Hall</b> brûlé (1838).</li>
  <li><b>Gag rule</b> (1836) contre les pétitions ; abrogée en 1844 grâce à <b>John Quincy Adams</b>. Le Nord voit que l'esclavage menace aussi ses libertés.</li></ul>
  <h3>Origines du féminisme</h3>
  <ul><li>Les femmes forment la base du mouvement. <b>Dorothea Dix</b> : hôpitaux psychiatriques.</li>
  <li><b>Sœurs Grimké</b> : Angelina (lettre de 1837 : droits fondés sur l'être moral) ; Sarah, Letters on the Equality of the Sexes (1838). <b>Catharine Beecher</b> répond : la femme est subordonnée, influence domestique seulement.</li>
  <li><b>Seneca Falls (1848)</b> : Stanton et Mott (exclues de Londres en 1840). Déclaration des sentiments modelée sur la Déclaration d'indépendance ; 1er grief : le droit de vote.</li>
  <li><b>Sojourner Truth</b> (1851) : « And aren't I a woman? ». Margaret Fuller (1845). Amelia Bloomer.</li>
  <li><b>Scission de 1840</b> sur le rôle des femmes (Abby Kelley) → American and Foreign Anti-Slavery Society ; <b>Liberty Party</b> (Birney, ~7 000 voix).</li>
  <li>Plus grande réussite : briser le « complot du silence » sur l'esclavage.</li></ul>
  <h3>Sources : Douglass et Fitzhugh</h3>
  <ul><li><b>Douglass</b> : The Columbian Orator vers 12 ans ; la lecture, « une malédiction plutôt qu'une bénédiction » : elle montre « le puits horrible, mais pas d'échelle ». Méfiance envers les deux Irlandais ; apprendre à écrire pour faire son propre laissez-passer. Public : lecteurs blancs du Nord.</li>
  <li><b>Fitzhugh</b>, Sociology for the South (1854) : rejette la liberté et l'égalité jeffersoniennes ; piliers proesclavagistes : racisme, Bible, égalité entre Blancs.</li></ul>`},
 { id:"l3", t:"Leçon 3 · Les causes de la Guerre civile et Dred Scott", topics:["cause","comp"], q:"Quelle était la cause de la Guerre civile américaine ?", html:`
  <h3>Six facteurs, tous liés à l'esclavage</h3>
  <ol><li>Divisions politiques</li><li>Droits des États et fédéralisme dual (10e amendement)</li><li>Crise de la nullité</li><li>Sectionnalisme</li><li>Modernisation et industrialisation</li><li>Différences économiques Nord / Sud</li></ol>
  <p class="small muted">Thèmes BI : changement et continuité · cause et conséquence · importance · perspective.</p>
  <h3>Crise de la nullité (1832-1833)</h3>
  <ul><li>Tarif de 1828 : protège l'industrie du Nord (taxe les importations britanniques) ; pour le Sud, il pénalise l'agriculture.</li>
  <li><b>Calhoun</b> (vice-président) : un État peut annuler une loi fédérale. 1832 : la Caroline du Sud déclare le tarif nul, menace de sécession.</li>
  <li><b>Jackson</b> mobilise l'armée ; tarif de compromis. Héritage : la théorie de la sécession.</li></ul>
  <h3>Sectionnalisme</h3>
  <table class="table"><tr><th>Nord</th><th>Sud</th><th>Ouest</th></tr>
  <tr><td>Industrie, usines, urbanisation ; antiesclavagiste</td><td>Dépendance agricole ; esclavagistes dirigeants ; esclavage = valeur culturelle</td><td>« Rugged individualism » ; nouvelles régions : libres ou esclavagistes ?</td></tr></table>
  <p>Lincoln : « A house divided against itself cannot stand. »</p>
  <h3>Les compromis</h3>
  <table class="table"><tr><th>Loi</th><th>Contenu</th></tr>
  <tr><td><b>Missouri 1820</b></td><td>11 libres / 11 esclavagistes. MO esclavagiste, ME libre. Pas d'esclavage au nord de <b>36°30'</b> (achat de la Louisiane).</td></tr>
  <tr><td><b>1850</b></td><td>Californie libre (Gold Rush 1849). Cession mexicaine (Guadalupe Hidalgo, 1848, 15 M$) : <b>souveraineté populaire</b>. Loi sur les esclaves fugitifs renforcée.</td></tr>
  <tr><td><b>Kansas-Nebraska 1854</b></td><td>Annule en pratique le compromis du Missouri ; souveraineté populaire partout dans l'Ouest → <b>Bleeding Kansas</b> (violence, fraudes).</td></tr></table>
  <h3>Dred Scott (1857)</h3>
  <ul><li>Né en esclavage en Virginie (~1799). Le Dr Emerson l'emmène en <b>Illinois</b> (État libre, 1834) puis à <b>Fort Snelling</b> (libre par le compromis du Missouri, 1836). Épouse Harriet ; retour au Missouri (1838).</li>
  <li>Emerson meurt (1843) ; sa veuve <b>Irene</b> refuse qu'il rachète sa liberté (1846) → procès pour « false imprisonment ».</li>
  <li><b>Juge Taney</b> : (1) un Noir descendant d'esclaves ne peut pas être citoyen ; (2) ni le Congrès ni un territoire ne peut exclure l'esclavage → le compromis du Missouri est inconstitutionnel ; (3) le statut est décidé par les tribunaux de l'État esclavagiste.</li></ul>`},
 { id:"l4", t:"Leçon 4 · Lincoln-Douglas, l'élection de 1860 et la sécession", topics:["elec"], q:"Dans quelle mesure la souveraineté populaire a-t-elle reflété les divisions politiques sur l'esclavage ?", html:`
  <h3>Les débats Lincoln-Douglas (1858)</h3>
  <ul><li>Sept débats pour le siège de sénateur de l'Illinois. Lincoln perd l'élection mais devient célèbre ; la carrière de Douglas est abîmée.</li>
  <li><b>Lincoln, Springfield (16 juin)</b> : « A house divided… » ; pas durablement à moitié esclavagiste ; tout l'un ou tout l'autre. La « machinerie » = doctrine du Nebraska + Dred Scott + le « care not » de Douglas. Crainte : une décision qui rendrait l'esclavage légal dans tous les États. La « squatter sovereignty » pervertie : si un homme en asservit un autre, personne ne peut s'y opposer.</li>
  <li><b>Douglas, Freeport (27 août)</b> : <b>doctrine de Freeport</b> : un territoire peut exclure l'esclavage par une « législation hostile », car l'esclavage ne peut exister sans règlements de police locaux, peu importe la Cour suprême. Pour acquérir plus de territoires ; jamais pour la dissolution de l'Union.</li>
  <li>Résumé du cours : Douglas = souveraineté populaire. Lincoln = interprétation contraire, contre l'extension de l'esclavage.</li></ul>
  <h3>L'élection de 1860 : le catalyseur final</h3>
  <table class="table"><tr><th>Candidat</th><th>Esclavage</th><th>Autres</th></tr>
  <tr><td><b>Lincoln</b> (républicain, parti récent)</td><td>Maintenir où il existe ; pas dans les nouveaux territoires</td><td>Pour Homesteads, tarifs, chemin de fer transcontinental</td></tr>
  <tr><td><b>Douglas</b> (démocrate du Nord)</td><td>Maintenir ; souveraineté populaire dans les territoires</td><td>Pour Homesteads et chemin de fer ; contre des tarifs plus élevés</td></tr>
  <tr><td><b>Breckinridge</b> (démocrate du Sud)</td><td>Droits des esclavagistes dans les territoires</td><td>Contre Homesteads et tarifs ; chemin de fer Mississippi-Pacifique</td></tr>
  <tr><td><b>Bell</b> (Union constitutionnelle)</td><td colspan="2">« Aucun principe sauf la Constitution, l'Union et l'application des lois »</td></tr></table>
  <h3>La sécession</h3>
  <ul><li>Définition : se retirer officiellement d'une union.</li>
  <li><b>Caroline du Sud</b> : décembre 1860 (le cours dit le 24 ; l'ordonnance date du 20), avant l'investiture de Lincoln.</li>
  <li>En 3 mois, <b>7 États</b> forment la Confédération.</li>
  <li>Pourquoi pas « good riddance » ? La survie de l'Union et de la démocratie.</li></ul>`},
 { id:"l5", t:"Leçon 5 · Les batailles, l'émancipation et la fin de la guerre", topics:["war"], q:"Pourquoi certaines batailles sont-elles des tournants ?", html:`
  <h3>Le début</h3>
  <ul><li><b>Fort Sumter</b> : Buchanan refuse de le céder. Dilemme de Lincoln : capituler (briser sa promesse de garder les défenses fédérales) ou défendre (tirer le premier). Choix : <b>nourriture seulement, pas de munitions</b>. Les Confédérés tirent le <b>12 avril 1861</b> ; reddition 1,5 jour plus tard ; Lincoln lève l'armée.</li>
  <li>Avril 1861 : la <b>Virginie</b> fait sécession ; <b>Richmond</b> devient la capitale.</li>
  <li><b>Bull Run / First Manassas (juillet 1861)</b> : première vraie bataille ; défaite de l'Union ; la guerre durera bien plus de 90 jours.</li>
  <li><b>Plan Anaconda</b> : blocus + Mississippi pour étouffer le Sud.</li></ul>
  <h3>Les objectifs de Lincoln</h3>
  <ul><li>D'abord <b>préserver l'Union</b> (et la démocratie mondiale), pas l'émancipation. « Ballots are the rightful and peaceful successors of bullets » (4 juillet 1861).</li>
  <li><b>États frontaliers</b> : Maryland (autour de D.C.), Kentucky et Missouri (fleuves). Leurs citoyens gardent leurs droits ; ¼ à ½ de leurs soldats combattent pour le Sud.</li>
  <li>Conditions de paix : pas de sécession, capitulation inconditionnelle ; émancipation en second.</li></ul>
  <h3>L'émancipation</h3>
  <ul><li>Été 1862 : pression abolitionniste, risque d'intervention britannique et française, réfugiés dans les camps de l'Union, défaites.</li>
  <li><b>22 juillet 1862</b> : Proclamation préliminaire au cabinet ; <b>Seward</b> : attendre une victoire.</li>
  <li><b>Antietam (17 sept. 1862)</b> : jour le plus sanglant ; victoire de l'Union → Proclamation ; moins de risque d'intervention (l'Europe désapprouve l'esclavage).</li>
  <li>Effective le <b>1er janvier 1863</b>. Seulement dans les régions en rébellion. Les réfugiés sont acceptés ; beaucoup s'engagent dans l'armée.</li></ul>
  <h3>Les tournants et la fin</h3>
  <ul><li><b>Gettysburg (juillet 1863)</b> : invasion de Lee en Pennsylvanie ; plus grande bataille d'Amérique du Nord ; le Sud ne revient plus au Nord.</li>
  <li><b>Vicksburg (juillet 1863)</b> : Grant contrôle le Mississippi ; le Sud coupé en deux ; le jour après Gettysburg.</li>
  <li><b>Grant</b> : guerre d'attrition (« Butcher of Men »). <b>Sherman</b> : marche vers la mer (1864), terreur.</li>
  <li><b>Appomattox : 9 avril 1865</b>. <b>Lincoln assassiné : 14 avril 1865</b>.</li>
  <li><b>Juneteenth : 19 juin 1865</b> : le général Granger à Galveston (Texas) ; plus de 2 ans et demi après la Proclamation.</li></ul>`},
 { id:"l6", t:"Leçon 5 (suite) · La Proclamation d'émancipation et Foner", topics:["emanc"], q:"Dans quelle mesure la Proclamation d'émancipation a-t-elle changé la guerre et Lincoln ?", html:`
  <h3>Le texte (1er janvier 1863)</h3>
  <ul><li>Préliminaire du 22 septembre 1862 : les personnes asservies des régions en rébellion le 1er janvier seront « forever free ».</li>
  <li>Lincoln agit comme <b>commandant en chef</b> : « a fit and necessary war measure ». Texte « dull and legalistic » ; la conclusion « act of justice » est ajoutée à l'insistance de <b>Chase</b>.</li>
  <li>Exceptions : parties de la Louisiane (dont La Nouvelle-Orléans) et de la Virginie ; États frontaliers non concernés.</li>
  <li>Conseils : éviter la violence sauf en légitime défense ; travailler pour des « reasonable wages ». Les Noirs seront reçus dans l'armée et la marine (environ <b>200 000</b> serviront).</li></ul>
  <h3>Fait / pas fait</h3>
  <ul><li>Environ <b>3,1 millions</b> déclarés libres ; environ <b>750 000</b> laissés en esclavage (États frontaliers, zones occupées).</li>
  <li>Pas applicable là où le Sud contrôlait ; mais assure la mort future de l'esclavage si l'Union gagne. L'esclavage est aboli partout par le <b>13e amendement</b> (décembre 1865) : l'émancipation est un processus.</li></ul>
  <h3>Foner : « The Emancipation of Abe Lincoln » (2012)</h3>
  <ul><li><b>Double émancipation</b> : des esclaves, et de Lincoln lui-même.</li>
  <li>Plan d'avant : émancipation graduelle par les États, financée par le pays, avec indemnisation et <b>colonisation</b>. Delaware (nov. 1861, 1 800 esclaves) : refus. Août 1862 : « but for your race among us there could not be war ».</li>
  <li>Été 1862 : fuites vers les lignes de l'Union, impasse, abolitionnistes, enrôlement en baisse, main-d'œuvre noire. Le Congrès devance Lincoln (D.C., enrôlement, libération des esclaves de propriétaires pro-confédérés).</li>
  <li>1er déc. 1862 : « The dogmas of the quiet past are inadequate to the stormy present… We must disenthrall ourselves ».</li>
  <li>Après : immédiate, sans compensation, sans colonisation ; il s'adresse aux Noirs directement ; plus jamais de colonisation. 1864 : refuse de la retirer (« damned in time and eternity »).</li>
  <li>Vote : 1858 non ; avril 1865 : suffrage limité pour les « very intelligent » et les soldats, première fois qu'un président soutient des droits politiques pour les Noirs. Second discours d'investiture : la cause de la guerre est l'esclavage, pas la présence des Noirs.</li>
  <li>Conclusion : que faut-il pour que les anciens esclaves et leurs descendants jouissent pleinement de la recherche du bonheur ? « We have yet to do so. »</li></ul>`},
 { id:"l7", t:"Leçon 6 · La Reconstruction (Foner, ch. 15)", topics:["recon"], q:"La Reconstruction a-t-elle été une seconde révolution américaine, et quand a-t-elle pris fin ?", html:`
  <p class="small">Rappels : examen à choix multiple le <b>12 novembre</b> ; Paper 1 sur la Reconstruction le <b>16 novembre</b>.</p>
  <h3>Les deux grandes questions</h3>
  <ul><li>Comment réintégrer les États du Sud ? Comment intégrer 4 millions d'anciens esclaves ?</li>
  <li><b>13e amendement</b> (18 déc. 1865) : abolit l'esclavage sauf punition d'un crime ; le Congrès peut l'appliquer.</li></ul>
  <h3>Quatre approches</h3>
  <table class="table"><tr><th></th><th>Lincoln (plan des 10 %)</th><th>Congrès (Wade-Davis)</th><th>Johnson</th></tr>
  <tr><td>Esprit</td><td>Indulgence, réconciliation</td><td>Punir le Sud</td><td>Pardons à l'élite blanche ; aucun rôle pour les Noirs</td></tr>
  <tr><td>Condition</td><td>10 % des électeurs de 1860 jurent loyauté ; 13e am.</td><td>50 % ; droits civiques ; aucun ancien dirigeant au pouvoir</td><td>Mêmes conditions que Lincoln ; « Mission Accomplished » (déc. 1865)</td></tr></table>
  <h3>Terre et travail</h3>
  <ul><li><b>Savannah</b> (12 janv. 1865) : Garrison Frazier : liberté = terre, fruit de son travail. <b>Ordre spécial n° 15</b> de Sherman : lots de 40 acres (« forty acres and a mule »). Johnson renvoie les terres aux anciens propriétaires.</li>
  <li>Sans terre, pauvreté : <b>métayage</b> (compromis), <b>crop lien</b> (fermiers blancs aussi : chaque recensement 1880-1940 compte plus de métayers blancs que noirs).</li>
  <li><b>Freedmen's Bureau</b> (1865-1870, O. O. Howard, moins de 1 000 agents) : écoles (près de 3 000 en 1869) et santé.</li></ul>
  <h3>Présidentielle contre radicale</h3>
  <ul><li><b>Black Codes</b> : droits limités, pas de témoignage contre des Blancs, pas de jury, pas de vote ; contrats annuels obligatoires.</li>
  <li>Trumbull : prolonger le Bureau + <b>Civil Rights Bill</b> (1866) : veto de Johnson, adoptée malgré le veto.</li>
  <li><b>14e amendement</b> : citoyenneté de naissance, protection par le gouvernement fédéral, pas de vote noir. Rejeté par tous les États du Sud sauf le Tennessee. Élections de 1866 : majorité républicaine écrasante.</li>
  <li><b>Reconstruction Act</b> (mars 1867, malgré le veto) : cinq districts militaires ; Reconstruction radicale (1867-1877).</li>
  <li><b>Tenure of Office Act</b> ; Johnson renvoie Stanton ; mise en accusation (1868) ; sauvé à une voix. Grant élu en 1868.</li>
  <li><b>15e amendement</b> (1869-1870) : vote sans distinction de race ; échappatoires (alphabétisation, propriété, poll taxes) ; pas les femmes ; féministes divisées (NWSA / AWSA).</li></ul>
  <h3>Dans le Sud</h3>
  <ul><li>Union League ; environ <b>2 000</b> élus noirs (14 à la Chambre, 2 au Sénat) ; <b>Revels</b>, premier sénateur noir (1870).</li>
  <li><b>Carpetbaggers</b> (Nordistes) et <b>scalawags</b> (Sudistes blancs républicains). Premières écoles publiques, droits civiques, chemins de fer. Corruption : aucune race, région ou parti en particulier.</li>
  <li>Famille, Églises noires indépendantes, écoles, universités (Fisk, Hampton, Howard).</li></ul>
  <h3>La fin</h3>
  <ul><li><b>Ku Klux Klan</b> (1866), « reign of terror » ; <b>Colfax</b> (1873) ; <b>Enforcement Acts</b> (1870-1871).</li>
  <li><b>Liberal Republicans</b> (1872, Greeley) ; dépression de 1873 ; Cour suprême (Slaughterhouse 1873, Cruikshank 1876).</li>
  <li><b>Redeemers</b> ; élection disputée Hayes-Tilden ; <b>Bargain of 1877</b> : Reconstruction terminée.</li>
  <li>Succès : Sud réintégré, 13e-14e-15e amendements, écoles, familles, Églises, premiers élus noirs. Échecs : pas de terre, violence, retrait du Nord.</li></ul>`}
];

/* ---------------- Carte index : default suggested content ---------------- */
let CARD_DEFAULT = `RECTO
1787 Constitution : 3/5 (sièges + électeurs + impôts) · traite protégée jusqu'en 1808 (max 10 $) · clause des fugitifs (art. IV)
Fédéralistes : Hamilton, Adams, Jay · fort central, souple, UK, industrie, NE
Antifédéralistes : Jefferson, Monroe, P. Henry, Mason · États, strict, France, agriculture, S + O
Convention : Martin (taxer la traite) · Rutledge (« interest alone ») · Ellsworth (chaque État) · Pinckney (SC refuse) · Franklin (« avec tous ses défauts »)
Résistance quotidienne : lent, malade, outils, culture, lire · extrême : défi, incendie, fuite, révolte
Turner 1831 VA (asservi) · Brown 1859 Harpers Ferry (blanc, arsenal) · Tubman (UGRR)
ACS 1816 → Liberia/Monrovia (Clay, Marshall, Jackson) · Walker 1829 · Liberator 1831 · AASS 1833
Persuasion morale · non-résistants · gag rule 1836–44 (JQ Adams) · Lovejoy 1837 · Penn. Hall 1838
Grimké (A. 1837 ; S. 1838) vs Beecher · Seneca Falls 1848 (Stanton, Mott) · Truth 1851 · scission 1840 → Liberty Party (Birney)
Douglass : Narrative 1845 · Columbian Orator · « pit, no ladder » · écrire son pass · 4 juillet 1852
Fitzhugh 1854 : contre liberté/égalité

VERSO
6 facteurs : politique · droits des États (10e am.) · nullité · sectionnalisme · industrialisation · économie N/S → ESCLAVAGE
Nullité 1832–33 : tarif 1828 · Calhoun · Jackson + tarif de compromis
MO 1820 : MO esclave, ME libre, 36°30' · 1850 : CA libre, souv. pop., loi fugitifs + · K-N 1854 : annule MO → Bleeding Kansas
Dred Scott 1857 (Taney) : pas citoyen · Congrès ne peut pas exclure → MO inconstitutionnel
1858 L-D : House divided · machinerie · Freeport (police locale)
1860 : Lincoln R (pas dans territoires, tarifs) · Douglas DN (souv. pop.) · Breckinridge DS (droits esclavagistes) · Bell UC (Constitution, Union, lois)
SC déc. 1860 · 7 États en 3 mois
Sumter 12 avr. 1861 (nourriture) · VA → Richmond · Bull Run juil. 1861 · Anaconda
Antietam 17 sept. 1862 → Proclamation (1er janv. 1863, régions rebelles) · Seward : attendre
Gettysburg juil. 1863 (Lee) · Vicksburg juil. 1863 (Grant, Mississippi)
Sherman 1864 · Appomattox 9 avr. 1865 · Lincoln † 14 avr. · Juneteenth 19 juin 1865 (Granger, Galveston)
Proclamation : commandant en chef · 3,1 M libres, 750 000 pas · Chase « act of justice » · 200 000 soldats noirs · Foner : double émancipation, colonisation abandonnée
Reconstruction : 13e am. 1865 · 10 % (Lincoln) vs Wade-Davis 50 % · Johnson : pardons, terres rendues, Black Codes · Droits civiques 1866 · 14e am. · Reconstruction Act 1867 (5 districts) · impeachment 1868 · 15e am. 1870
Sud : Freedmen's Bureau · métayage + crop lien · Union League · Revels · carpetbaggers/scalawags · Klan 1866 · Enforcement Acts · Liberal Republicans 1872 · Redeemers · Bargain 1877`;
