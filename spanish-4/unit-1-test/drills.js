/* =====================================================================
   Question banks for the practice drills. First option = correct answer
   (options are shuffled on screen). Numbers, Roman numerals and vocabulary
   questions are generated in index.html from the lists in vocab.js.
   ===================================================================== */

/* Connector fill-in sentences */
const CONFILL = [
 {q:"Hacía mucho frío; ___, fuimos a la playa.",o:["sin embargo","porque","por ejemplo","además"],e:"Contraste: hacía frío, pero fuimos igual."},
 {q:"No salí ___ estaba lloviendo.",o:["porque","sin embargo","en conclusión","por un lado"],e:"Porque introduce la causa en medio de la frase."},
 {q:"___ estaba lloviendo, no salí.",o:["Como","Porque","Pero","Además"],e:"Al principio de la frase la causa va con como, no con porque."},
 {q:"Me gusta viajar. ___, me encanta probar comida nueva.",o:["Además","Sin embargo","Aunque","Por lo tanto"],e:"Además añade información."},
 {q:"Llegamos tarde al aeropuerto; ___, perdimos el avión.",o:["por lo tanto","aunque","además","por ejemplo"],e:"Por lo tanto introduce la consecuencia."},
 {q:"___ es un viaje largo, vale la pena.",o:["Aunque","Porque","Por eso","Entonces"],e:"Aunque = although: contraste dentro de la frase."},
 {q:"Hay muchos medios de transporte en Lima, ___ el metro, el autobús y las combis.",o:["por ejemplo","sin embargo","por lo tanto","en conclusión"],e:"Por ejemplo introduce ejemplos."},
 {q:"___, saca tu pasaporte; luego, haz la maleta.",o:["Primero","Finalmente","Sin embargo","Aunque"],e:"Primero ordena el primer paso."},
 {q:"El turista visita monumentos, ___ el viajero conversa con la gente.",o:["mientras que","por eso","además","ya que"],e:"Mientras que compara dos ideas opuestas."},
 {q:"___, ser viajero es una cuestión de actitud.",o:["En conclusión","Por ejemplo","Porque","Aunque"],e:"En conclusión cierra el texto."},
 {q:"Me quedé en casa ___ estaba enfermo.",o:["ya que","sin embargo","no obstante","por un lado"],e:"Ya que = porque (causa)."},
 {q:"Eugene es una ciudad pequeña; ___, tiene muchas actividades.",o:["no obstante","porque","por eso","como"],e:"No obstante = sin embargo."},
 {q:"___, la tecnología nos une; por otro lado, nos separa.",o:["Por un lado","Por lo tanto","Finalmente","Ya que"],e:"Por un lado… por otro lado."},
 {q:"No solo visitamos el museo, ___ también comimos en el mercado.",o:["sino","pero","aunque","porque"],e:"No solo… sino también."},
 {q:"Estudié mucho; ___, saqué una buena nota.",o:["así que","aunque","sin embargo","mientras que"],e:"Así que = so (consecuencia)."},
 {q:"___ mi punto de vista, es mejor viajar despacio.",o:["Desde","Para","Por","En"],e:"Desde mi punto de vista."}
];

/* Gerunds: [infinitive, gerund, irregular?] */
const GERUNDIOS = [
 ["hablar","hablando"],["caminar","caminando"],["mirar","mirando"],["trabajar","trabajando"],["escuchar","escuchando"],["estudiar","estudiando"],["jugar","jugando"],["usar","usando"],["ayudar","ayudando"],["esperar","esperando"],["comprar","comprando"],["cocinar","cocinando"],["celebrar","celebrando"],["tomar","tomando"],["llevar","llevando"],["bailar","bailando"],["viajar","viajando"],["conversar","conversando"],
 ["comer","comiendo"],["beber","bebiendo"],["correr","corriendo"],["hacer","haciendo"],["tener","teniendo"],["sostener","sosteniendo"],["escribir","escribiendo"],["vivir","viviendo"],["compartir","compartiendo"],["subir","subiendo"],["aprender","aprendiendo"],["salir","saliendo"],
 ["leer","leyendo",1],["oír","oyendo",1],["dormir","durmiendo",1],["pedir","pidiendo",1],["decir","diciendo",1],["venir","viniendo",1],["sonreír","sonriendo",1],["traer","trayendo",1],["seguir","siguiendo",1],["vestir","vistiendo",1],["construir","construyendo",1],["ir","yendo",1]
];
/* Sentences for "estar + gerundio" */
const GERFRASE = [
 {s:"La mujer ___ por teléfono. (hablar)",a:"está hablando",o:["está hablando","están hablando","es hablando","está hablado"]},
 {s:"Los jóvenes ___ en el parque. (correr)",a:"están corriendo",o:["están corriendo","está corriendo","están correndo","son corriendo"]},
 {s:"El hombre ___ un libro. (leer)",a:"está leyendo",o:["está leyendo","está leiendo","está leendo","es leyendo"]},
 {s:"Las personas ___ en un restaurante. (comer)",a:"están comiendo",o:["están comiendo","están comendo","está comiendo","están comido"]},
 {s:"El niño ___ en el sofá. (dormir)",a:"está durmiendo",o:["está durmiendo","está dormiendo","está duermiendo","es durmiendo"]},
 {s:"Las dos amigas ___ una foto. (sacar)",a:"están sacando",o:["están sacando","está sacando","están saciendo","son sacando"]},
 {s:"La chica ___ a la cámara. (sonreír)",a:"está sonriendo",o:["está sonriendo","está sonreíendo","está sonreyendo","es sonriendo"]},
 {s:"El camarero ___ la comida a la mesa. (traer)",a:"está trayendo",o:["está trayendo","está traiendo","está traendo","están trayendo"]},
 {s:"Mis padres ___ el desfile. (mirar)",a:"están mirando",o:["están mirando","está mirando","están miriendo","son mirando"]},
 {s:"El turista ___ direcciones al policía. (pedir)",a:"está pidiendo",o:["está pidiendo","está pediendo","está pedando","están pidiendo"]}
];

/* Email and infographic rules */
const FORMATO = [
 {q:"¿Cómo empieza un correo formal?",o:["Estimado/a + nombre:","¡Hola, amigo!","Querido/a + nombre,","Atentamente,"],e:"El saludo formal es Estimado/a Sr./Sra. …:"},
 {q:"¿Qué significa \"acusar recibo\" en un correo?",o:["Decir que recibiste el mensaje y dar las gracias","Acusar a alguien de un error","Pedir un recibo de compra","Despedirse"],e:"Muchas gracias por su correo… / Estoy muy agradecido/a por…"},
 {q:"¿Cuántas preguntas debes hacer como mínimo en tu respuesta a un correo?",o:["Dos","Ninguna","Una","Cinco"],e:"En el AP y el IB siempre incluye un mínimo de dos preguntas."},
 {q:"¿Por qué no debes despedirte con \"Sinceramente\"?",o:["Es un falso cognado: significa \"honestly\"","Es demasiado informal","Es una palabra en inglés","Solo se usa en cartas"],e:"Usa Atentamente."},
 {q:"¿Cómo se responden las preguntas del correo que recibiste?",o:["Todas, en detalle","Solo la primera","Con sí o no","Solo las fáciles"],e:"Responde todas las preguntas y elabora."},
 {q:"¿Cómo se organiza un correo?",o:["En párrafos","En un solo párrafo grande","En viñetas con íconos","Con un gráfico"],e:"Escribe en párrafos, no en un gran párrafo."},
 {q:"En un correo formal usas…",o:["usted","tú","vosotros","ellos"],e:"Formal: usted (¿Podría usted…? Le agradezco…)."},
 {q:"¿Qué NO es un requisito de una infografía?",o:["Párrafos largos","Un título atractivo","Subtítulos o apartados","Elementos visuales"],e:"Una infografía no es un ensayo: texto breve, frases cortas."},
 {q:"En una infografía, los datos deben…",o:["corresponder a los datos reales","ser inventados para impresionar","ir en un párrafo largo","escribirse solo en palabras"],e:"No inventes datos."},
 {q:"¿Dónde van las fuentes en una infografía?",o:["Al pie o en texto pequeño","En el título","En el primer párrafo","No se ponen nunca"],e:"Fuentes breves, al pie."},
 {q:"El registro de una infografía es…",o:["informativo, directo y conciso","muy personal y emocional","como un poema","como un correo a un amigo"],e:"Pensado para un público amplio."},
 {q:"¿Qué buscan los examinadores en una infografía?",o:["Que reconozcas el formato y sus convenciones","Que escribas el máximo de palabras","Que no uses números","Que escribas como un artículo"],e:"Demuestra que reconoces el formato."},
 {q:"¿Qué elemento visual es típico de una infografía?",o:["Un gráfico de barras con porcentajes","Una firma","Un saludo","Una despedida"],e:"Gráficos, íconos, tablas, ilustraciones."},
 {q:"\"Le quería dar las gracias por su ayuda\" es una forma de…",o:["acusar recibo / agradecer","despedirse","hacer una pregunta","presentar datos"],e:"Va al principio del correo."}
];

/* Pick the text type: correo or infografía */
const ELEGIR = [
 {q:"Tu profesora te escribe y te pregunta qué actividades recomiendas para un estudiante de intercambio.",a:"correo",e:"Una persona concreta te hace preguntas: le respondes con un correo."},
 {q:"El consejo estudiantil hizo una encuesta sobre el uso del celular y quiere colgar los resultados en el pasillo.",a:"infografia",e:"Datos de una encuesta para todos, para colgar: infografía."},
 {q:"Un amigo de Chile te pregunta por correo qué ropa traer a Eugene en invierno.",a:"correo",e:"Te escribe una persona y te hace preguntas: correo (informal, tú)."},
 {q:"La biblioteca quiere informar a los visitantes sobre cómo reciclar, con datos y consejos visuales.",a:"infografia",e:"Informar a un público amplio de forma visual: infografía."},
 {q:"El director del festival te escribe para preguntarte por qué quieres ser voluntario.",a:"correo",e:"Responder a un adulto que te escribió: correo formal."},
 {q:"Tu clase quiere compartir en Instagram los resultados de una encuesta sobre las cualidades de un buen amigo.",a:"infografia",e:"Resultados de encuesta para publicar en redes: infografía."},
 {q:"Quieres pedirle información a una escuela de idiomas de Costa Rica sobre sus cursos de verano.",a:"correo",e:"Pedir información a una organización: correo formal."},
 {q:"La escuela necesita un texto para la entrada con consejos para estudiantes nuevos y datos sobre los clubes más populares.",a:"infografia",e:"Público amplio, datos y consejos, para colgar: infografía."},
 {q:"Tu familia anfitriona de Perú te escribió para agradecerte la visita y preguntarte cuándo vuelves.",a:"correo",e:"Responder a un correo personal: correo."},
 {q:"El club de viajes quiere presentar en la cartelera los destinos favoritos de los estudiantes, con porcentajes.",a:"infografia",e:"Porcentajes para la cartelera: infografía."}
];
