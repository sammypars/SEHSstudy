/* =====================================================================
   Practice tests (exámenes de práctica). Five versions, each with the
   parts of the real Unit 1 test:
     A  writing: pick the text type (auto-graded), then write it (graded by AI)
     B  reading: a text + questions (auto-graded)
     C  listening: not included (practice it under "Comprensión auditiva")
     D  vocabulary (auto-graded; plus a few generated from the VOCAB lists)
   Multiple-choice options: the FIRST option is the correct one; options are
   shuffled on screen. tf = verdadero/falso + justificación; word = type a
   word from the text (accents optional, but the site reminds you).
   ===================================================================== */
const TESTS = [
/* ------------------------------------------------------------------ 1 */
{n:1,
 writing:{
  sit:`Eres estudiante en Eugene. Recibiste este correo de la coordinadora del programa de intercambio de tu escuela:`,
  sit_en:`You're a student in Eugene. You received this email from your school's exchange program coordinator:`,
  doc:`<p><b>De:</b> Sra. Lucía Ramírez<br><b>Asunto:</b> Visita de Mateo</p><p>Hola:</p><p>Como sabes, Mateo, un estudiante de 17 años de Lima (Perú), va a pasar tres días con tu familia la próxima semana. Quiere conocer la vida cotidiana de Eugene, no solo los lugares turísticos.</p><p>¿Qué actividades le recomiendas para conocer nuestra comunidad? ¿Qué ropa debería traer, considerando el clima de octubre? ¿Cómo se va a mover por la ciudad?</p><p>Gracias,<br>Lucía Ramírez</p>`,
  task:`Responde a la Sra. Ramírez.`, task_en:`Reply to Sra. Ramírez.`,
  type:"correo",
  why:`Te escribe una persona concreta y te hace preguntas: hay que responderle con un correo formal (usted, Estimada Sra. Ramírez, Atentamente). Debes contestar las tres preguntas y hacer dos preguntas tú.`,
  why_en:`One specific person wrote to you and asked questions, so you answer with a formal email (usted, Estimada Sra. Ramírez, Atentamente). Answer all three questions and ask two of your own.`,
  points:[`Saludo formal y acusar recibo`,`Actividades para conocer la vida cotidiana (con razones)`,`Ropa adecuada para el clima de octubre`,`Transporte en Eugene`,`Dos preguntas para la Sra. Ramírez`,`Despedida: Atentamente`]
 },
 reading:{
  title:"¿Turista o viajero? La diferencia está en la mirada",
  text:[
   `Cada verano, millones de personas hacen las maletas y salen de vacaciones. Muchas siguen la misma rutina: vuelan a una ciudad famosa, se alojan en un hotel del centro, visitan los monumentos más conocidos y sacan cientos de fotos. Después de cuatro o cinco días, vuelven a casa con muchos recuerdos, pero a veces sin haber hablado con una sola persona del lugar.`,
   `Para la periodista Ana Belén Torres, autora del blog <i>Viajar despacio</i>, esa es la manera de viajar de un turista. "El turista mira la ciudad desde fuera, como si fuera un museo", explica. "El viajero, en cambio, intenta entrar en la vida cotidiana de la comunidad: compra en el mercado, usa el transporte público y conversa con la gente".`,
   `Según Torres, no hace falta ir muy lejos para ser viajero. "Puedes ser viajero en tu propia ciudad si visitas un barrio que no conoces o si pruebas un restaurante de otra cultura", dice. Lo más importante, para ella, es la actitud: estar abierto a lo nuevo y aceptar que algunas cosas van a ser incómodas al principio.`,
   `Sin embargo, Torres reconoce que no todo es blanco o negro. "Todos somos un poco turistas y un poco viajeros. No es malo visitar la Torre Eiffel; lo malo es pensar que eso es todo París". Por eso recomienda combinar los dos estilos: ver los lugares famosos por la mañana y, por la tarde, perderse por las calles donde vive la gente.`
  ],
  qs:[
   {type:"mc",q:"Según el primer párrafo, muchas personas en vacaciones…",o:["vuelven a casa sin hablar con nadie del lugar","se quedan con familias locales","viajan durante meses","no sacan fotos"]},
   {type:"tf",q:"Ana Belén Torres escribe un blog sobre viajes.",a:true,just:"autora del blog Viajar despacio"},
   {type:"mc",q:"Para Torres, el turista ve la ciudad…",o:["como si fuera un museo","como su propia casa","desde el transporte público","a través de la gente local"]},
   {type:"tf",q:"Según Torres, para ser viajero hay que ir a otro país.",a:false,just:"no hace falta ir muy lejos para ser viajero"},
   {type:"word",q:"En el párrafo 2, ¿qué palabra significa \"de todos los días\"?",a:["cotidiana"]},
   {type:"mc",q:"Según el párrafo 3, lo más importante para ser viajero es…",o:["la actitud","el dinero","el idioma","el tiempo"]},
   {type:"tf",q:"Torres piensa que visitar la Torre Eiffel es malo.",a:false,just:"No es malo visitar la Torre Eiffel"},
   {type:"mc",q:"¿Qué recomienda Torres al final del texto?",o:["Combinar los dos estilos de viaje","Viajar solo como viajero","Evitar los lugares famosos","Quedarse en casa"]}
  ]},
 vocab:[
  {q:"Elige el conector correcto: \"Hacía frío; ___, salimos a caminar.\"",o:["sin embargo","porque","por ejemplo","además"],e:"Sin embargo marca contraste: hacía frío, pero salimos igual."},
  {q:"¿Cuál es el gerundio de <b>leer</b>?",o:["leyendo","leiendo","lendo","leando"],e:"Leer es irregular: leyendo (la i se convierte en y)."},
  {q:"En una foto, para hablar de una emoción es mejor decir:",o:["El hombre parece estar cansado.","El hombre está cansado.","El hombre es cansado.","El hombre tiene cansado."],e:"No afirmamos una emoción como un hecho: parece estar…"},
  {q:"¿Cómo se escribe <b>500</b>?",o:["quinientos","cincocientos","cinco cientos","quinientos y"],e:"500 es irregular: quinientos."},
  {q:"\"El siglo XXI\" se lee:",o:["el siglo veintiuno","el siglo dos uno","el siglo veintiunavo","el siglo once"],e:"XX = 20, I = 1 → veintiuno."},
  {q:"\"Hace mucho ___, lleva una bufanda.\"",o:["frío","calor","sol","fresco y soleado"],e:"Una bufanda es para el frío."},
  {q:"¿Cuál es la despedida correcta en un correo formal?",o:["Atentamente,","Sinceramente,","Un besito,","Hasta luego, amigo,"],e:"Sinceramente es un falso cognado (honestly). Usa Atentamente."},
  {q:"Una persona que vive en un lugar y recibe a un visitante es un…",o:["anfitrión","turista","pasajero","peatón"],e:"El anfitrión recibe a los invitados."},
  {q:"\"El tráfico estaba parado; había un ___ enorme.\"",o:["atasco","carril","semáforo","casco"],e:"Atasco = traffic jam."},
  {q:"¿Qué palabra NO es de ropa?",o:["el semáforo","el chaleco","la bufanda","las pantuflas"],e:"El semáforo es del tráfico (traffic light)."}
 ]},
/* ------------------------------------------------------------------ 2 */
{n:2,
 writing:{
  sit:`El club de español hizo una encuesta a 40 estudiantes de tu escuela sobre su tiempo libre. Estos son los resultados. El club quiere compartirlos con todos los estudiantes en la cartelera de la escuela y en su página de Instagram.`,
  sit_en:`The Spanish club surveyed 40 students at your school about their free time. These are the results. The club wants to share them with all students on the school bulletin board and its Instagram page.`,
  doc:`<table class="table"><tr><th>¿Qué haces en tu tiempo libre? (puedes elegir varias)</th><th>Estudiantes</th></tr><tr><td>Usar las redes sociales</td><td>34</td></tr><tr><td>Practicar deportes</td><td>22</td></tr><tr><td>Salir con amigos</td><td>20</td></tr><tr><td>Escuchar música</td><td>30</td></tr><tr><td>Leer</td><td>8</td></tr><tr><td>Tocar un instrumento</td><td>6</td></tr></table><p class="small muted">Total: 40 estudiantes</p>`,
  task:`Presenta los resultados de la encuesta.`, task_en:`Present the survey results.`,
  type:"infografia",
  why:`Son resultados de una encuesta para un público amplio (todos los estudiantes) y se van a publicar en una cartelera y en Instagram: una infografía. Usa datos reales de la tabla (34 de 40 = 85 %).`,
  why_en:`It's survey results for a wide audience (all students), to be posted on a bulletin board and Instagram, so an infographic. Use the real numbers from the table (34 of 40 = 85 %).`,
  points:[`Título atractivo`,`Secciones con subtítulos`,`Datos de la encuesta en porcentajes correctos (85 %, 75 %, 55 %, 50 %, 20 %, 15 %)`,`Lenguaje de datos: la mayoría de, más de la mitad, solo un pequeño porcentaje…`,`Elementos visuales (gráfico, íconos) descritos o dibujados`,`Conclusión breve y fuente: Encuesta del club de español, 2026`]
 },
 reading:{
  title:"Mi primera semana en Eugene",
  byline:"Blog de Valentina, estudiante de intercambio de Bogotá (Colombia)",
  text:[
   `¡Hola a todos! Ya llevo una semana en Eugene, Oregón, y tengo muchas cosas que contarles. Lo primero que noté fue el clima: llueve casi todos los días, pero es una lluvia suave, una llovizna, y la gente camina tranquilamente sin paraguas. Yo, en cambio, salgo siempre con mi impermeable amarillo y mis botas.`,
   `Mi familia anfitriona es muy simpática. La señora Carter es enfermera y su esposo trabaja como carpintero. Tienen dos hijos: Liam, que tiene mi edad y rema en el equipo de la escuela, y Emma, que tiene diez años y siempre quiere practicar español conmigo. Por las noches cenamos juntos a las seis, ¡muy temprano para mí! En Colombia cenamos a las ocho.`,
   `Lo que más me sorprendió fue el transporte. Aquí muchas personas van en bicicleta a todas partes, incluso cuando llueve. Hay carriles para bicicletas en casi todas las calles. El sábado, Liam y yo fuimos en bici al mercado del centro, donde compramos fruta y escuchamos música en vivo.`,
   `Todavía extraño la comida de mi país, sobre todo las arepas de mi abuela. Por eso, el domingo voy a preparar arepas para mi familia anfitriona. Creo que es una buena manera de compartir mi cultura con ellos.`
  ],
  qs:[
   {type:"mc",q:"¿De dónde es Valentina?",o:["De Bogotá, Colombia","De Lima, Perú","De Eugene, Oregón","De Arequipa, Perú"]},
   {type:"tf",q:"En Eugene llueve muy fuerte todos los días.",a:false,just:"es una lluvia suave, una llovizna"},
   {type:"mc",q:"¿Qué ropa lleva Valentina cuando sale?",o:["Un impermeable amarillo y botas","Un abrigo negro y zapatillas","Una sudadera y sandalias","Nada especial, sin paraguas"]},
   {type:"mc",q:"¿Cuál es la profesión de la señora Carter?",o:["Enfermera","Carpintera","Profesora","Periodista"]},
   {type:"tf",q:"Emma quiere practicar español con Valentina.",a:true,just:"siempre quiere practicar español conmigo"},
   {type:"word",q:"En el párrafo 1, ¿qué palabra significa \"lluvia suave\"?",a:["llovizna"]},
   {type:"tf",q:"La gente de Eugene no usa la bicicleta cuando llueve.",a:false,just:"incluso cuando llueve"},
   {type:"mc",q:"¿Por qué va a preparar arepas Valentina?",o:["Para compartir su cultura con su familia anfitriona","Porque no le gusta la comida de Eugene","Porque es su cumpleaños","Para venderlas en el mercado"]}
  ]},
 vocab:[
  {q:"\"Más de la mitad de los estudiantes\" significa:",o:["more than half of the students","less than half of the students","exactly half of the students","almost none of the students"],e:"La mitad = half."},
  {q:"34 de 40 estudiantes es el…",o:["85 %","34 %","75 %","90 %"],e:"34 ÷ 40 = 0,85 → el ochenta y cinco por ciento."},
  {q:"¿Cuál es el gerundio de <b>dormir</b>?",o:["durmiendo","dormiendo","dormando","duermiendo"],e:"Dormir es irregular: durmiendo."},
  {q:"Elige el conector: \"Me gusta leer; ___, prefiero los deportes.\"",o:["no obstante","por lo tanto","ya que","en primer lugar"],e:"No obstante = sin embargo (contraste)."},
  {q:"Una persona que va a pie por la calle es un…",o:["peatón","pasajero","ciclista","conductor"],e:"Peatón = pedestrian."},
  {q:"¿Qué número es <b>setecientos setenta y siete</b>?",o:["777","717","707","7077"],e:"Setecientos = 700, setenta y siete = 77."},
  {q:"\"Hay mucho viento\" = \"Hace…\"",o:["viento","sol","frío","llovizna"],e:"Hace viento / está ventoso."},
  {q:"¿Qué palabra es una emoción negativa?",o:["decepcionado","agradecido","orgulloso","entusiasmado"],e:"Decepcionado = disappointed."},
  {q:"En una infografía, el texto debe ser…",o:["breve, con palabras clave","en párrafos largos","como un ensayo","sin títulos"],e:"Una infografía no es un ensayo: texto breve, viñetas, subtítulos."},
  {q:"¿Dónde se compra medicina?",o:["en la farmacia","en la comisaría","en el ayuntamiento","en la biblioteca"],e:"Farmacia = pharmacy."}
 ]},
/* ------------------------------------------------------------------ 3 */
{n:3,
 writing:{
  sit:`Recibiste este correo de Andrés, un estudiante de Guadalajara (México) que va a estudiar en tu escuela de Eugene durante el mes de noviembre.`,
  sit_en:`You received this email from Andrés, a student from Guadalajara (Mexico) who will study at your school in Eugene during November.`,
  doc:`<p><b>De:</b> Andrés Morales<br><b>Asunto:</b> ¡Ayuda con mi viaje!</p><p>¡Hola!</p><p>Me dijeron que vas a ser mi compañero en la escuela. Estoy muy emocionado pero también un poco nervioso. En Guadalajara casi siempre hace calor. ¿Cómo es el clima en Eugene en noviembre y qué ropa necesito? ¿Qué hacen los jóvenes de Eugene en su tiempo libre? ¿Qué comida típica de la región debería probar?</p><p>¡Muchas gracias!<br>Andrés</p>`,
  task:`Responde al correo de Andrés.`, task_en:`Reply to Andrés's email.`,
  type:"correo",
  why:`Andrés te escribe personalmente y te hace preguntas: hay que contestarle con un correo. Como es un joven de tu edad, puedes usar un registro más informal (tú), pero respeta todas las partes del correo: saludo, acusar recibo, responder todo, dos preguntas, párrafos y despedida.`,
  why_en:`Andrés wrote to you personally and asked questions, so you reply with an email. He's your age, so a more informal register (tú) is fine, but keep every part: greeting, acknowledge receipt, answer everything, two questions, paragraphs and sign-off.`,
  points:[`Saludo y acusar recibo`,`Clima de noviembre y ropa necesaria (vocabulario de clima y ropa)`,`Actividades de tiempo libre de los jóvenes`,`Comida típica que puede probar`,`Calmar sus nervios (emociones)`,`Dos preguntas para Andrés y despedida`]
 },
 reading:{
  title:"La comida de la calle: una ventana a la cultura",
  text:[
   `En muchos países hispanohablantes es muy común encontrar puestos y carritos de comida en la calle. En México hay tacos a cualquier hora; en Perú, anticuchos; en Ecuador, empanadas y humitas; y en Colombia, arepas de todos los tipos. Para muchos viajeros, comer en la calle es la mejor manera de descubrir una cultura.`,
   `"La comida de la calle es la comida de la gente", explica Rebeca Quishpe, una cocinera de Quito que prepara tortillas de maíz desde hace treinta años. "Aquí no vienen solo turistas. Vienen obreros, estudiantes, familias. Todos comen juntos y conversan". Según ella, un plato típico cuenta la historia de un lugar: sus ingredientes, su clima y sus costumbres.`,
   `Rebeca también enseña a algunos visitantes a preparar tortillas. "Cuando un viajero aprende a cocinar con nosotros, entiende mucho más que si solo prueba el plato en un restaurante", dice. "Aprende por qué usamos el maíz, cómo trabajamos y qué celebramos".`,
   `Sin embargo, algunos turistas tienen miedo de comer en la calle. Rebeca les da un consejo: "Busquen los puestos donde hay muchas personas del lugar. Si la gente local come allí todos los días, la comida es buena y fresca".`
  ],
  qs:[
   {type:"mc",q:"Según el texto, en Perú es típico comer en la calle…",o:["anticuchos","tacos","arepas","humitas"]},
   {type:"tf",q:"Rebeca Quishpe prepara tortillas desde hace treinta años.",a:true,just:"prepara tortillas de maíz desde hace treinta años"},
   {type:"mc",q:"Según Rebeca, ¿quién come en los puestos de la calle?",o:["Personas de todo tipo: obreros, estudiantes, familias","Solo turistas","Solo estudiantes","Solo cocineros"]},
   {type:"word",q:"En el párrafo 2, ¿qué palabra significa \"hablan\" (entre ellos)?",a:["conversan"]},
   {type:"tf",q:"Según Rebeca, un plato típico no tiene relación con la historia de un lugar.",a:false,just:"un plato típico cuenta la historia de un lugar"},
   {type:"mc",q:"¿Qué aprende un viajero cuando cocina con la gente local?",o:["Por qué usan el maíz, cómo trabajan y qué celebran","Cómo abrir un restaurante","A hablar otro idioma","Dónde están los mejores hoteles"]},
   {type:"mc",q:"¿A quién se refiere \"les\" en \"Rebeca les da un consejo\"?",o:["a los turistas que tienen miedo","a los obreros","a los cocineros","a las familias de Quito"]},
   {type:"tf",q:"Rebeca recomienda los puestos donde come mucha gente del lugar.",a:true,just:"Busquen los puestos donde hay muchas personas del lugar"}
  ]},
 vocab:[
  {q:"\"Hace calor\" es lo contrario de…",o:["hace frío","hace sol","hace buen tiempo","está nublado"],e:"Calor ↔ frío."},
  {q:"¿Qué ropa llevas cuando llueve?",o:["un impermeable","un traje de baño","unas sandalias","unos pantalones cortos"],e:"Impermeable = raincoat."},
  {q:"El gerundio de <b>pedir</b> es…",o:["pidiendo","pediendo","pedando","pidando"],e:"Pedir es irregular: pidiendo."},
  {q:"Elige el conector: \"Andrés está nervioso ___ no conoce a nadie.\"",o:["porque","sin embargo","en conclusión","aunque"],e:"Porque introduce la causa."},
  {q:"¿Cómo se dice <b>1.000.000</b>?",o:["un millón","mil mil","un mil millón","cien mil"],e:"1.000.000 = un millón (de personas)."},
  {q:"En un correo informal a un amigo, el saludo puede ser:",o:["Querido Andrés:","Estimado Sr. Morales:","A quien corresponda:","Atentamente:"],e:"Querido/a o ¡Hola! para un amigo; Estimado/a es formal."},
  {q:"Una persona que trabaja en un restaurante y lleva la comida a la mesa es…",o:["el mesero","el cajero","el cocinero","el peluquero"],e:"Mesero / camarero = waiter."},
  {q:"¿Qué palabra NO es un lugar de la ciudad?",o:["el granizo","la plaza","el barrio","la acera"],e:"El granizo es del clima (hail)."},
  {q:"\"Felipe VI\" se lee:",o:["Felipe sexto","Felipe seis","Felipe sesto","Felipe sesenta"],e:"Con reyes, hasta el X se usa el ordinal: sexto."},
  {q:"\"Los datos muestran que…\" significa:",o:["The data shows that…","The data is wrong…","The data was hidden…","The data will change…"],e:"Mostrar = to show."}
 ]},
/* ------------------------------------------------------------------ 4 */
{n:4,
 writing:{
  sit:`Tu escuela va a recibir a un grupo de estudiantes de intercambio de Perú. Tu clase de español preguntó a 25 estudiantes de intercambio que ya visitaron Eugene qué experiencias les ayudaron más a conocer la comunidad. La escuela quiere colgar los resultados en la entrada para todos los visitantes nuevos.`,
  sit_en:`Your school will host a group of exchange students from Peru. Your Spanish class asked 25 exchange students who already visited Eugene which experiences helped them most to get to know the community. The school wants to put the results up at the entrance for all new visitors.`,
  doc:`<table class="table"><tr><th>Experiencia que más les ayudó</th><th>Estudiantes</th></tr><tr><td>Vivir con una familia anfitriona</td><td>10</td></tr><tr><td>Ir al mercado de los sábados</td><td>6</td></tr><tr><td>Hacer deporte con un equipo de la escuela</td><td>5</td></tr><tr><td>Visitar museos y lugares turísticos</td><td>2</td></tr><tr><td>Usar el autobús y la bicicleta</td><td>2</td></tr></table><p class="small muted">Total: 25 estudiantes</p>`,
  task:`Prepara un texto con estos resultados y consejos para los nuevos estudiantes.`, task_en:`Prepare a text with these results and tips for the new students.`,
  type:"infografia",
  why:`Es información para un público amplio (todos los visitantes nuevos), con datos de una encuesta, y se va a colgar en la entrada: una infografía. Usa los porcentajes correctos (10 de 25 = 40 %).`,
  why_en:`It's information for a wide audience (every new visitor), with survey data, to be posted at the entrance, so an infographic. Use the correct percentages (10 of 25 = 40 %).`,
  points:[`Título atractivo sobre conocer Eugene como viajero`,`Datos correctos: 40 %, 24 %, 20 %, 8 %, 8 %`,`Consejos con lenguaje de recomendación: Te recomiendo…, Podrías…`,`Contraste turista / viajero`,`Secciones, viñetas, elementos visuales`,`Fuente: Encuesta de la clase de Español 4, 2026`]
 },
 reading:{
  title:"¿La tecnología nos une o nos separa?",
  text:[
   `Según una encuesta reciente de una escuela de Madrid, el 78 % de los jóvenes de 15 a 18 años habla con sus amigos todos los días por mensajes o redes sociales. Sin embargo, solo el 35 % dice que pasa tiempo con ellos en persona más de tres veces por semana.`,
   `Para la psicóloga Marta Jiménez, estos datos no son necesariamente negativos. "La tecnología nos permite mantener amistades a distancia. Un estudiante que se muda a otra ciudad puede seguir hablando con sus amigos de siempre", explica. "El problema aparece cuando la pantalla reemplaza completamente los encuentros reales".`,
   `Los jóvenes de la encuesta también eligieron las cualidades más importantes de un buen amigo. La más valorada fue la honestidad (64 %), seguida de la confianza (58 %) y el sentido del humor (41 %). Curiosamente, tener intereses similares fue una de las menos elegidas: solo el 12 %.`,
   `Jiménez da un consejo a los jóvenes: "Usen el celular para organizar planes, no para evitarlos. Un mensaje puede ser el comienzo de una tarde en el parque, un partido de fútbol o una conversación en un café".`
  ],
  qs:[
   {type:"mc",q:"¿Qué porcentaje de jóvenes habla con sus amigos todos los días por mensajes o redes?",o:["78 %","35 %","64 %","12 %"]},
   {type:"tf",q:"La mayoría de los jóvenes ve a sus amigos en persona más de tres veces por semana.",a:false,just:"solo el 35 % dice que pasa tiempo con ellos en persona"},
   {type:"mc",q:"Según Marta Jiménez, una ventaja de la tecnología es que…",o:["permite mantener amistades a distancia","reemplaza los encuentros reales","elimina los problemas entre amigos","ayuda a estudiar más"]},
   {type:"word",q:"En el párrafo 2, ¿qué palabra significa \"sustituye\"?",a:["reemplaza"]},
   {type:"mc",q:"¿Cuál fue la cualidad más valorada de un buen amigo?",o:["la honestidad","la confianza","el sentido del humor","los intereses similares"]},
   {type:"tf",q:"Tener intereses similares fue una de las cualidades más elegidas.",a:false,just:"fue una de las menos elegidas: solo el 12 %"},
   {type:"mc",q:"\"El 58 %\" de los jóvenes eligió…",o:["la confianza","la honestidad","el sentido del humor","la lealtad"]},
   {type:"mc",q:"¿Qué recomienda Jiménez?",o:["Usar el celular para organizar planes","No usar nunca el celular","Hablar solo por mensajes","Tener menos amigos"]}
  ]},
 vocab:[
  {q:"10 de 25 estudiantes es…",o:["el 40 %","el 10 %","el 25 %","el 60 %"],e:"10 ÷ 25 = 0,4 → el cuarenta por ciento."},
  {q:"Elige el conector: \"Vivir con una familia es la experiencia más útil; ___, el mercado es la segunda.\"",o:["luego","aunque","porque","sin embargo"],e:"Luego ordena ideas (then / next). No hay contraste aquí."},
  {q:"\"Te recomiendo…\" se usa para…",o:["dar un consejo","dar las gracias","despedirse","comparar datos"],e:"Recomendar = dar un consejo."},
  {q:"¿Cuál es el gerundio de <b>decir</b>?",o:["diciendo","deciendo","dicando","dijiendo"],e:"Decir es irregular: diciendo."},
  {q:"\"La vida cotidiana\" significa…",o:["everyday life","nightlife","the good life","life in the city"],e:"Cotidiano = de todos los días."},
  {q:"¿Qué palabra es un medio de transporte acuático?",o:["la lancha","el tranvía","la avioneta","el teleférico"],e:"Lancha = motorboat."},
  {q:"¿Cómo se escribe <b>XL</b>?",o:["40","60","90","110"],e:"X antes de L se resta: 50 − 10 = 40."},
  {q:"\"Una camisa ___ lunares\"",o:["con","a","en","por"],e:"Con lunares (polka-dotted); a rayas, a cuadros."},
  {q:"\"Están ___ fútbol en el parque.\"",o:["jugando al","jugar al","juegan el","jugado"],e:"Estar + gerundio: están jugando al fútbol."},
  {q:"¿Qué palabra describe una emoción positiva?",o:["orgulloso","avergonzado","celoso","asustado"],e:"Orgulloso = proud."}
 ]},
/* ------------------------------------------------------------------ 5 */
{n:5,
 writing:{
  sit:`Quieres ser voluntario en el festival del Mes de la Hispanidad de Eugene. Recibiste este correo del organizador:`,
  sit_en:`You want to volunteer at Eugene's Hispanic Heritage Month festival. You received this email from the organizer:`,
  doc:`<p><b>De:</b> Sr. Javier Gutiérrez, Festival de la Hispanidad<br><b>Asunto:</b> Tu solicitud de voluntario</p><p>Estimado/a estudiante:</p><p>Gracias por tu interés en ser voluntario en nuestro festival del próximo sábado en el parque del centro. Antes de confirmar, necesito saber algunas cosas: ¿Por qué quieres participar en el festival? ¿Qué experiencia tienes con la cultura hispana o con el idioma español? ¿En qué actividad prefieres ayudar: en los puestos de comida, en los bailes o con los niños?</p><p>Un saludo,<br>Javier Gutiérrez</p>`,
  task:`Responde al Sr. Gutiérrez.`, task_en:`Reply to Sr. Gutiérrez.`,
  type:"correo",
  why:`Te escribe un adulto, el organizador, y te hace preguntas: hay que responderle con un correo formal (Estimado Sr. Gutiérrez, usted, Atentamente).`,
  why_en:`An adult (the organizer) wrote to you and asked questions, so reply with a formal email (Estimado Sr. Gutiérrez, usted, Atentamente).`,
  points:[`Saludo formal (Estimado Sr. Gutiérrez:) y acusar recibo`,`Por qué quieres participar (con razones y conectores)`,`Tu experiencia con la cultura hispana o el español`,`La actividad que prefieres y por qué`,`Dos preguntas (por ejemplo, horario, ropa, qué traer)`,`Usted, párrafos y despedida: Atentamente`]
 },
 reading:{
  title:"Desfile de la Hispanidad: colores en la Quinta Avenida",
  text:[
   `Cada año, en octubre, miles de personas llenan la Quinta Avenida de Nueva York para celebrar el Desfile de la Hispanidad. Es uno de los desfiles más grandes de la ciudad y celebra la cultura de los países hispanohablantes.`,
   `Durante el desfile, los participantes caminan con las banderas de sus países: Colombia, Costa Rica, Honduras, Ecuador, México y muchos más. Algunos grupos llevan trajes tradicionales muy coloridos; otros bailan, tocan instrumentos o cantan. Hay bandas de música de escuelas y también grupos de niños que bailan con vestidos amarillos y sombreros grandes.`,
   `Para Carmen Ortiz, una madre de origen mexicano que vive en el barrio del Bronx, el desfile es muy especial. "Vengo con mis hijos desde que eran pequeños. Quiero que conozcan sus raíces y que se sientan orgullosos de ellas", dice. Su hija Sofía, de doce años, baila este año por primera vez con su grupo de danza.`,
   `Aunque el desfile es una fiesta, también tiene un mensaje importante. Según los organizadores, la comunidad hispana es una parte fundamental de la historia de Estados Unidos, y el desfile es una manera de mostrar su diversidad: no hay una sola cultura hispana, sino muchas.`
  ],
  qs:[
   {type:"mc",q:"¿Dónde se celebra el desfile?",o:["En la Quinta Avenida de Nueva York","En el Bronx","En Ciudad de México","En un parque de Eugene"]},
   {type:"tf",q:"El desfile es uno de los más pequeños de la ciudad.",a:false,just:"Es uno de los desfiles más grandes de la ciudad"},
   {type:"mc",q:"¿Qué llevan los participantes mientras caminan?",o:["Las banderas de sus países","Carteles políticos","Comida típica","Fotos de sus familias"]},
   {type:"word",q:"En el párrafo 2, ¿qué palabra significa \"de muchos colores\"?",a:["coloridos"]},
   {type:"tf",q:"Carmen Ortiz viene al desfile con sus hijos desde hace muchos años.",a:true,just:"Vengo con mis hijos desde que eran pequeños"},
   {type:"mc",q:"¿Por qué trae Carmen a sus hijos?",o:["Para que conozcan sus raíces y se sientan orgullosos","Porque ella baila en el desfile","Porque no tienen escuela ese día","Para vender comida"]},
   {type:"mc",q:"¿Qué hace Sofía este año?",o:["Baila por primera vez con su grupo de danza","Toca un instrumento","Lleva la bandera de México","Organiza el desfile"]},
   {type:"tf",q:"Según los organizadores, existe una sola cultura hispana.",a:false,just:"no hay una sola cultura hispana, sino muchas"}
  ]},
 vocab:[
  {q:"Elige el conector: \"Quiero participar ___ me encanta bailar.\"",o:["ya que","sin embargo","en resumen","por un lado"],e:"Ya que = porque (causa)."},
  {q:"\"Estimado Sr. Gutiérrez:\" es un saludo…",o:["formal","informal","de despedida","incorrecto"],e:"Estimado/a es el saludo formal."},
  {q:"¿Cuál es el gerundio de <b>venir</b>?",o:["viniendo","veniendo","vinando","vieniendo"],e:"Venir es irregular: viniendo."},
  {q:"Los niños llevan <b>sombreros</b>. ¿Qué es?",o:["hats","shoes","scarves","flags"],e:"Sombrero = hat."},
  {q:"¿Qué palabra significa \"proud\"?",o:["orgulloso","avergonzado","agradecido","alegre"],e:"Orgulloso/a = proud."},
  {q:"\"Un vestido amarillo y ___\"",o:["colorido","colorida","coloridos","coloridas"],e:"Vestido es masculino singular: colorido."},
  {q:"¿Cómo se dice <b>doscientas personas</b> en números?",o:["200 personas","2.000 personas","12 personas","20 personas"],e:"Doscientas = 200 (concuerda con personas, femenino)."},
  {q:"¿Dónde se puede ver un desfile en una ciudad?",o:["en la avenida","en el baño","en el comedor","en el dormitorio"],e:"Los desfiles son en calles y avenidas."},
  {q:"\"Me di cuenta de que…\" se usa para…",o:["reflexionar","saludar","comparar precios","describir el clima"],e:"Expresión para reflexionar: I realized that…"},
  {q:"En un correo, \"acusar recibo\" significa…",o:["decir que recibiste el mensaje y dar las gracias","acusar a alguien de algo","pedir dinero","despedirse"],e:"Acknowledge receipt: Muchas gracias por su correo…"}
 ]}
];
