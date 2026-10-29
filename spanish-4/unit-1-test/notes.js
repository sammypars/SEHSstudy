/* =====================================================================
   Study notes (apuntes) for the Unit 1 test. Each note has Spanish (es)
   and English (en) HTML; the page shows the one that matches the toggle.
   Sources: the class Canvas pages (Sept 9 – Oct 28) and the Day 2 handout.
   ===================================================================== */
const NOTES = [
{id:"examen",t:["El examen de la Unidad 1","The Unit 1 test"],es:`
<p class="lede">La prueba de la Unidad 1 es la próxima semana. Según la profesora, tiene cuatro partes:</p>
<div class="parts">
 <div><b>A</b><span>Escritura</span><p>Una pregunta: eliges el tipo de texto más adecuado (<b>correo electrónico</b> o <b>infografía</b>) y escribes tu respuesta.</p></div>
 <div><b>B</b><span>Lectura</span><p>Lees un texto y respondes preguntas.</p></div>
 <div><b>C</b><span>Comprensión auditiva</span><p>Escuchas un audio y respondes preguntas.</p></div>
 <div><b>D</b><span>Vocabulario</span><p>Preguntas de vocabulario.</p></div>
</div>
<h3>¿Qué estudio?</h3>
<ul>
 <li><b>Vocabulario descriptivo:</b> colores, ropa, clima, emociones, medios de transporte, lugares… (todas las listas del "vocabulario disponible").</li>
 <li><b>Números</b> (incluidos los números romanos y los porcentajes).</li>
 <li><b>Conectores.</b></li>
 <li><b>Vocabulario de viajeros y turistas.</b></li>
 <li><b>Cómo se escribe un correo electrónico y una infografía.</b></li>
</ul>
<div class="callout">Pregunta esencial de la unidad: <i>¿Cómo podemos conocer verdaderamente una comunidad cuando viajamos?</i></div>`,
en:`
<p class="lede">The Unit 1 test is next week. According to your teacher it has four parts:</p>
<div class="parts">
 <div><b>A</b><span>Writing</span><p>One question: choose the best text type (<b>email</b> or <b>infographic</b>) and write your answer.</p></div>
 <div><b>B</b><span>Reading</span><p>Read a text and answer questions.</p></div>
 <div><b>C</b><span>Listening</span><p>Listen to an audio and answer questions.</p></div>
 <div><b>D</b><span>Vocabulary</span><p>Vocabulary questions.</p></div>
</div>
<h3>What to study</h3>
<ul>
 <li><b>Descriptive vocabulary:</b> colors, clothes, weather, emotions, transportation, places… (every list in the "vocabulario disponible").</li>
 <li><b>Numbers</b> (including Roman numerals and percentages).</li>
 <li><b>Connectors.</b></li>
 <li><b>Traveler and tourist vocabulary.</b></li>
 <li><b>How to write an email and an infographic.</b></li>
</ul>
<div class="callout">The unit's essential question: <i>How can we truly get to know a community when we travel?</i></div>`},

{id:"foto",t:["Describir una foto y el gerundio","Describing a photo and the gerund"],es:`
<p>Para describir una foto usamos con frecuencia <b>estar + gerundio</b>: explica qué está haciendo una persona en el momento de la foto.</p>
<div class="tablewrap"><table class="table">
<tr><th>Verbo</th><th>Terminación</th><th>Ejemplos</th></tr>
<tr><td>-AR</td><td><b>-ando</b></td><td>hablar → hablando · caminar → caminando · mirar → mirando</td></tr>
<tr><td>-ER / -IR</td><td><b>-iendo</b></td><td>comer → comiendo · beber → bebiendo · escribir → escribiendo · vivir → viviendo</td></tr>
<tr><td>Irregulares</td><td></td><td>leer → <b>leyendo</b> · oír → <b>oyendo</b> · dormir → <b>durmiendo</b> · pedir → <b>pidiendo</b> · decir → <b>diciendo</b> · venir → <b>viniendo</b> · sonreír → <b>sonriendo</b> · reírse → <b>riéndose</b></td></tr>
</table></div>
<ul>
 <li><b>Él / Ella está</b> + gerundio: <i>La mujer está hablando por teléfono.</i></li>
 <li><b>Ellos / Ellas están</b> + gerundio: <i>Los jóvenes están conversando.</i></li>
 <li>Con verbos reflexivos el pronombre va al final: <i>Está sentándose.</i> / <i>Se está sentando.</i></li>
</ul>
<h3>Emociones: no las afirmes como un hecho</h3>
<p>Es mejor decir <b>La mujer parece estar feliz</b> o <b>parece contenta</b>, no <s>La mujer está feliz</s>. No sabemos lo que siente; solo lo que parece.</p>
<h3>Expresiones útiles</h3>
<ul>
 <li>En la foto hay… / Podemos ver… / Detrás de ella… / Al fondo… / A la izquierda / a la derecha…</li>
 <li>Parece que hace… / El cielo está… / Por el clima, parece que es invierno.</li>
 <li>Parece ser… / Probablemente es… / Por su uniforme, parece ser… / Es posible que sea…</li>
 <li>En la primera imagen…, mientras que en la segunda… / Aunque las dos imágenes muestran…, hay una diferencia…</li>
</ul>
<h3>Práctica para el oral del IB: tres pasos</h3>
<ol>
 <li><b>Describir:</b> ¿Qué vemos? Ropa, colores, edificios, cosas, emociones… ¿Dónde están? ¿Qué están haciendo?</li>
 <li><b>Interpretar:</b> ¿Qué podemos deducir de la situación y de la comunidad? ("La historia de la foto")</li>
 <li><b>Conectar:</b> ¿Cómo se relaciona la imagen con tus experiencias de viajar y conocer otras culturas?</li>
</ol>
<div class="callout"><b>Recuerda:</b> no basta con describir lo que ves. También debes interpretar, explicar y establecer conexiones culturales.</div>
<h3>De una oración simple a un párrafo detallado</h3>
<p class="muted">Empezamos con: <i>Hay una mujer.</i> Y terminamos con:</p>
<blockquote>Hay una mujer de pelo negro, largo y liso que está tomando café y hablando por celular. Lleva una camiseta blanca y una chaqueta anaranjada, y se ve muy feliz. Está sentada en una silla negra o azul oscuro, aparentemente en una oficina o en un aeropuerto. Detrás de ella podemos ver unas ventanas y una puerta de vidrio. El día está soleado y hay una pequeña planta frente a ella.</blockquote>
<p>Fíjate en lo que usa: <b>adjetivos</b> (negro, largo, liso), <b>estar + gerundio</b>, <b>ropa y colores</b>, <b>lugar</b> (aparentemente en…), <b>posición</b> (detrás de, frente a) y <b>clima</b>.</p>`,
en:`
<p>To describe a photo we often use <b>estar + gerund</b>: it says what a person is doing at the moment of the photo.</p>
<div class="tablewrap"><table class="table">
<tr><th>Verb</th><th>Ending</th><th>Examples</th></tr>
<tr><td>-AR</td><td><b>-ando</b></td><td>hablar → hablando · caminar → caminando · mirar → mirando</td></tr>
<tr><td>-ER / -IR</td><td><b>-iendo</b></td><td>comer → comiendo · beber → bebiendo · escribir → escribiendo · vivir → viviendo</td></tr>
<tr><td>Irregular</td><td></td><td>leer → <b>leyendo</b> · oír → <b>oyendo</b> · dormir → <b>durmiendo</b> · pedir → <b>pidiendo</b> · decir → <b>diciendo</b> · venir → <b>viniendo</b> · sonreír → <b>sonriendo</b> · reírse → <b>riéndose</b></td></tr>
</table></div>
<ul>
 <li><b>He / She is</b> + gerund: <i>La mujer está hablando por teléfono.</i> (The woman is talking on the phone.)</li>
 <li><b>They are</b> + gerund: <i>Los jóvenes están conversando.</i> (The young people are chatting.)</li>
 <li>With reflexive verbs the pronoun goes on the end or in front: <i>Está sentándose. / Se está sentando.</i></li>
</ul>
<h3>Emotions: don't state them as fact</h3>
<p>Say <b>La mujer parece estar feliz</b> (the woman seems happy), not <s>La mujer está feliz</s>. You can only say what she seems to feel.</p>
<h3>Useful phrases</h3>
<ul>
 <li>En la foto hay… (In the photo there is…) / Podemos ver… / Detrás de ella… (behind her) / Al fondo… (in the background) / A la izquierda / a la derecha…</li>
 <li>Parece que hace… / El cielo está… / Por el clima, parece que es invierno.</li>
 <li>Parece ser… / Probablemente es… / Por su uniforme, parece ser… / Es posible que sea…</li>
 <li>En la primera imagen…, mientras que en la segunda… / Aunque las dos imágenes muestran…, hay una diferencia…</li>
</ul>
<h3>Practice for the IB oral: three steps</h3>
<ol>
 <li><b>Describe:</b> what do you see? Clothes, colors, buildings, objects, emotions… Where are they? What are they doing?</li>
 <li><b>Interpret:</b> what can you infer about the situation and the community? ("The story of the photo")</li>
 <li><b>Connect:</b> how does the image relate to your own experiences of travel and getting to know other cultures?</li>
</ol>
<div class="callout"><b>Remember:</b> describing is not enough. You also need to interpret, explain and make cultural connections.</div>
<h3>From one simple sentence to a detailed paragraph</h3>
<p class="muted">We started with <i>Hay una mujer.</i> and ended with:</p>
<blockquote>Hay una mujer de pelo negro, largo y liso que está tomando café y hablando por celular. Lleva una camiseta blanca y una chaqueta anaranjada, y se ve muy feliz. Está sentada en una silla negra o azul oscuro, aparentemente en una oficina o en un aeropuerto. Detrás de ella podemos ver unas ventanas y una puerta de vidrio. El día está soleado y hay una pequeña planta frente a ella.</blockquote>
<p>Notice what it uses: <b>adjectives</b> (negro, largo, liso), <b>estar + gerund</b>, <b>clothes and colors</b>, <b>place</b> (aparentemente en…), <b>position</b> (detrás de, frente a) and <b>weather</b>.</p>`},

{id:"numeros",t:["Números","Numbers"],es:`
<div class="tablewrap"><table class="table">
<tr><th>0–15</th><td>cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce, trece, catorce, quince</td></tr>
<tr><th>16–29</th><td>dieciséis, diecisiete, dieciocho, diecinueve, veinte, veintiuno, <b>veintidós</b>, <b>veintitrés</b>, veinticuatro, veinticinco, <b>veintiséis</b>… veintinueve (una sola palabra)</td></tr>
<tr><th>30–99</th><td>treinta, cuarenta, cincuenta, sesenta, setenta, ochenta, noventa · desde el 31 se usa <b>y</b>: treinta y uno, cuarenta y cinco, noventa y nueve</td></tr>
<tr><th>100–999</th><td><b>cien</b> (exactamente 100) · <b>ciento</b> uno, ciento veinte · doscientos, trescientos, cuatrocientos, <b>quinientos</b>, seiscientos, <b>setecientos</b>, ochocientos, <b>novecientos</b></td></tr>
<tr><th>1.000+</th><td><b>mil</b> (no "un mil") · dos mil · 2026 = dos mil veintiséis · un <b>millón de</b> personas · dos millones de euros</td></tr>
</table></div>
<ul>
 <li><b>Uno → un / una</b> delante de un sustantivo: <i>un libro, una mochila, veintiún estudiantes, veintiuna personas.</i></li>
 <li>Los cientos concuerdan con el sustantivo: <i>doscientos chicos, doscientas chicas.</i></li>
 <li>En español se escribe <b>1.500</b> (punto para miles) y <b>2,5</b> (coma para decimales).</li>
</ul>
<h3>Ordinales</h3>
<p>primero (primer), segundo, tercero (tercer), cuarto, quinto, sexto, séptimo, octavo, noveno, décimo. <i>El primer día, la tercera vez.</i></p>
<h3>Números romanos</h3>
<div class="tablewrap"><table class="table"><tr><th>I</th><th>V</th><th>X</th><th>L</th><th>C</th><th>D</th><th>M</th></tr><tr><td>1</td><td>5</td><td>10</td><td>50</td><td>100</td><td>500</td><td>1000</td></tr></table></div>
<ul>
 <li>Un símbolo menor <b>delante</b> de uno mayor se resta: IV = 4, IX = 9, XL = 40, XC = 90, CD = 400, CM = 900.</li>
 <li>Se usan para <b>siglos</b> (el siglo XXI = veintiuno), <b>reyes y papas</b> (Felipe VI = sexto, Juan Carlos I = primero) y capítulos.</li>
 <li>Con reyes se lee el ordinal hasta el X (Felipe <b>sexto</b>); después, el cardinal (Alfonso XIII = <b>trece</b>).</li>
</ul>
<h3>Porcentajes y datos</h3>
<p>15 % = <b>el quince por ciento</b>. Mira la lista de <a href="#apuntes/infografia">lenguaje para hablar de datos</a>.</p>`,
en:`
<div class="tablewrap"><table class="table">
<tr><th>0–15</th><td>cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce, trece, catorce, quince</td></tr>
<tr><th>16–29</th><td>dieciséis, diecisiete, dieciocho, diecinueve, veinte, veintiuno, <b>veintidós</b>, <b>veintitrés</b>, veinticuatro, veinticinco, <b>veintiséis</b>… veintinueve (written as one word)</td></tr>
<tr><th>30–99</th><td>treinta, cuarenta, cincuenta, sesenta, setenta, ochenta, noventa · from 31 on use <b>y</b>: treinta y uno, cuarenta y cinco, noventa y nueve</td></tr>
<tr><th>100–999</th><td><b>cien</b> (exactly 100) · <b>ciento</b> uno, ciento veinte · doscientos, trescientos, cuatrocientos, <b>quinientos</b>, seiscientos, <b>setecientos</b>, ochocientos, <b>novecientos</b></td></tr>
<tr><th>1,000+</th><td><b>mil</b> (never "un mil") · dos mil · 2026 = dos mil veintiséis · un <b>millón de</b> personas · dos millones de euros</td></tr>
</table></div>
<ul>
 <li><b>Uno → un / una</b> before a noun: <i>un libro, una mochila, veintiún estudiantes, veintiuna personas.</i></li>
 <li>The hundreds agree with the noun: <i>doscientos chicos, doscientas chicas.</i></li>
 <li>Spanish writes <b>1.500</b> (period for thousands) and <b>2,5</b> (comma for decimals).</li>
</ul>
<h3>Ordinals</h3>
<p>primero (primer), segundo, tercero (tercer), cuarto, quinto, sexto, séptimo, octavo, noveno, décimo. <i>El primer día, la tercera vez.</i></p>
<h3>Roman numerals</h3>
<div class="tablewrap"><table class="table"><tr><th>I</th><th>V</th><th>X</th><th>L</th><th>C</th><th>D</th><th>M</th></tr><tr><td>1</td><td>5</td><td>10</td><td>50</td><td>100</td><td>500</td><td>1000</td></tr></table></div>
<ul>
 <li>A smaller symbol <b>before</b> a bigger one is subtracted: IV = 4, IX = 9, XL = 40, XC = 90, CD = 400, CM = 900.</li>
 <li>Spanish uses them for <b>centuries</b> (el siglo XXI = veintiuno), <b>kings and popes</b> (Felipe VI = sexto, Juan Carlos I = primero) and chapters.</li>
 <li>For kings, read the ordinal up to X (Felipe <b>sexto</b>); after that, the cardinal (Alfonso XIII = <b>trece</b>).</li>
</ul>
<h3>Percentages and data</h3>
<p>15 % = <b>el quince por ciento</b>. See the <a href="#apuntes/infografia">language for talking about data</a>.</p>`},

{id:"conectores",t:["Conectores","Connectors"],es:`
<p>Los conectores te ayudan a salir de los más básicos como "y" o "pero". Unen tus ideas y hacen que tu texto suene más avanzado. En un correo o una infografía, usa conectores variados.</p>
<div id="conTable"></div>
<div class="callout"><b>Ojo:</b> <i>porque</i> va en medio de la frase (<i>No fui porque llovía</i>); para empezar una frase con la causa usa <i>como</i> (<i>Como llovía, no fui</i>).</div>`,
en:`
<p>Connectors move you beyond the most basic ones like "y" and "pero". They link your ideas and make your writing sound more advanced. Use a variety of them in an email or an infographic.</p>
<div id="conTable"></div>
<div class="callout"><b>Watch out:</b> <i>porque</i> goes in the middle of a sentence (<i>No fui porque llovía</i>); to start a sentence with the cause use <i>como</i> (<i>Como llovía, no fui</i>).</div>`},

{id:"viajeros",t:["Turista o viajero","Tourist or traveler"],es:`
<p>En esta unidad comparamos dos maneras de viajar.</p>
<div class="grid2">
 <div class="card"><h3>El turista</h3><ul><li>Visita los lugares turísticos famosos.</li><li>Saca muchas fotos y sigue un plan o un tour.</li><li>Pasa poco tiempo en cada lugar.</li><li>Come en restaurantes para turistas.</li><li>Tiene poco contacto con la gente local.</li></ul></div>
 <div class="card"><h3>El viajero</h3><ul><li>Quiere conocer la <b>vida cotidiana</b> de la comunidad.</li><li>Habla con la gente local y aprende sus <b>costumbres</b>.</li><li>Prueba la <b>comida típica</b> en mercados y puestos de comida.</li><li>Usa el transporte público y camina por los barrios.</li><li>Intenta <b>mezclarse con la cultura local</b>.</li></ul></div>
</div>
<h3>Consejos típicos para mezclarte con la cultura local</h3>
<p class="muted small">Ideas generales, como las de la lectura de <i>EntreCulturas</i> (pág. 38). Repasa también la lectura de tu libro.</p>
<ul>
 <li>Aprende algunas frases básicas del idioma local.</li>
 <li>Come donde comen los habitantes del lugar: mercados, puestos, carritos de comida.</li>
 <li>Usa el transporte público y camina por los barrios.</li>
 <li>Respeta las costumbres y observa cómo se comporta la gente.</li>
 <li>Conversa con la gente local; pregúntales qué recomiendan.</li>
 <li>Participa en actividades de la comunidad: fiestas, mercados, deportes.</li>
 <li>Quédate con una familia o en un alojamiento local.</li>
</ul>
<h3>Temas de las clases</h3>
<ul>
 <li><b>De viajeros a anfitriones:</b> un estudiante de intercambio de Perú viene a Eugene tres días. ¿Qué experiencias le recomendarías para conocer la vida cotidiana de nuestra comunidad?</li>
 <li><b>La comida como experiencia cultural:</b> no es lo mismo comer un plato típico en un restaurante que aprender a prepararlo con una persona de la comunidad (por ejemplo, preparar tortillas en Ecuador).</li>
 <li><b>Probar comida extranjera:</b> ¿es importante estar dispuesto a experimentar cosas nuevas cuando viajamos?</li>
 <li><b>La amistad y las relaciones personales:</b> ¿qué cualidades buscamos en un buen amigo? ¿La tecnología ha fortalecido o debilitado las relaciones?</li>
 <li><b>El mes de la hispanidad</b> y los hispanos / latinos en EE. UU.</li>
</ul>`,
en:`
<p>This unit compares two ways of traveling.</p>
<div class="grid2">
 <div class="card"><h3>The tourist</h3><ul><li>Visits the famous tourist spots.</li><li>Takes lots of photos and follows a plan or a tour.</li><li>Spends little time in each place.</li><li>Eats at restaurants for tourists.</li><li>Has little contact with local people.</li></ul></div>
 <div class="card"><h3>The traveler</h3><ul><li>Wants to know the community's <b>everyday life</b> (la vida cotidiana).</li><li>Talks with local people and learns their <b>customs</b>.</li><li>Tries <b>traditional food</b> at markets and food stalls.</li><li>Uses public transport and walks through neighborhoods.</li><li>Tries to <b>blend in with the local culture</b>.</li></ul></div>
</div>
<h3>Typical tips for blending in with the local culture</h3>
<p class="muted small">General ideas, like the ones in the <i>EntreCulturas</i> reading (p. 38). Review the reading in your book too.</p>
<ul>
 <li>Learn a few basic phrases in the local language.</li>
 <li>Eat where locals eat: markets, stalls, food carts.</li>
 <li>Use public transport and walk around neighborhoods.</li>
 <li>Respect local customs and watch how people behave.</li>
 <li>Talk with local people; ask what they recommend.</li>
 <li>Join community activities: festivals, markets, sports.</li>
 <li>Stay with a family or in local lodging.</li>
</ul>
<h3>Topics from class</h3>
<ul>
 <li><b>From travelers to hosts:</b> an exchange student from Peru visits Eugene for three days. What experiences would you recommend so they get to know our community's everyday life?</li>
 <li><b>Food as a cultural experience:</b> eating a traditional dish at a restaurant is not the same as learning to make it with someone from the community (for example, making tortillas in Ecuador).</li>
 <li><b>Trying foreign food:</b> is it important to be open to new things when we travel?</li>
 <li><b>Friendship and relationships:</b> what qualities do we look for in a good friend? Has technology strengthened or weakened relationships?</li>
 <li><b>Hispanic Heritage Month</b> and Hispanics / Latinos in the US.</li>
</ul>`},

{id:"correo",t:["El correo electrónico","The email"],es:`
<p>En el AP y en el IB muchas veces tienes que <b>responder</b> a un correo que recibiste. Todo correo electrónico debe incluir:</p>
<ol class="steps">
 <li><b>Saludo:</b> <i>Estimado/a + nombre:</i> (Ej.: <i>Estimada Sra. Pérez:</i>, <i>Estimado Sr. González:</i>).</li>
 <li><b>Acusar recibo</b> (acknowledge receipt): <i>Muchas gracias por su correo… / Estoy muy agradecido/a por su… / Le quería dar las gracias por…</i></li>
 <li><b>Responder TODAS las preguntas, en detalle.</b> No basta con decir "sí" o "no": hay que elaborar. Es una clase de lengua y es la única manera de mostrar que sabes español elaborado.</li>
 <li><b>Hacer DOS preguntas.</b> En tu respuesta siempre incluye un mínimo de dos preguntas.</li>
 <li><b>Escribir en párrafos</b>, no en un solo párrafo grande.</li>
 <li><b>Despedida:</b> <i>Atentamente,</i> + tu nombre. <b>No</b> uses "Sinceramente": es un falso cognado y en español significa "honestly".</li>
</ol>
<h3>Formal o informal</h3>
<div class="tablewrap"><table class="table">
<tr><th></th><th>Formal (a un adulto, una organización, un profesor)</th><th>Informal (a un amigo)</th></tr>
<tr><td>Saludo</td><td>Estimado Sr. … / Estimada Sra. …:</td><td>Querido/a … / ¡Hola, …!</td></tr>
<tr><td>Tratamiento</td><td><b>usted</b>: ¿Podría usted…? Le agradezco…</td><td><b>tú</b>: ¿Puedes…? Te agradezco…</td></tr>
<tr><td>Despedida</td><td>Atentamente, / Un cordial saludo,</td><td>Un abrazo, / Saludos,</td></tr>
</table></div>
<p class="small muted">Para el examen, si la situación es formal (escuela, organización, adulto), usa siempre <b>usted</b> y <b>Atentamente</b>.</p>
<h3>Modelo</h3>
<div class="model email">
<p><b>Asunto:</b> Re: Visita del estudiante de intercambio</p>
<p>Estimada Sra. Ramírez:</p>
<p>Muchas gracias por su correo y por la información sobre la visita de Mateo. Estoy muy emocionado de ser su anfitrión.</p>
<p>Usted me pregunta qué actividades podemos hacer en Eugene. En primer lugar, le recomiendo visitar el mercado de los sábados, ya que allí Mateo puede conocer a la gente local y probar comida de la región. Además, podemos montar en bicicleta por el río, porque así conocerá la vida cotidiana de la ciudad.</p>
<p>Sobre el clima, en octubre suele llover y hace fresco, por eso Mateo debería traer un impermeable y un suéter.</p>
<p>Me gustaría hacerle dos preguntas: ¿Qué comidas no le gustan a Mateo? ¿Practica algún deporte?</p>
<p>Atentamente,<br>Sam</p>
</div>`,
en:`
<p>On the AP and IB exams you often have to <b>reply</b> to an email you received. Every email must include:</p>
<ol class="steps">
 <li><b>Greeting:</b> <i>Estimado/a + name:</i> (e.g. <i>Estimada Sra. Pérez:</i>, <i>Estimado Sr. González:</i>).</li>
 <li><b>Acknowledge receipt:</b> <i>Muchas gracias por su correo… / Estoy muy agradecido/a por su… / Le quería dar las gracias por…</i></li>
 <li><b>Answer ALL the questions, in detail.</b> "Yes" or "no" isn't enough; elaborate. It's a language class, and this is the only way to show you can write developed Spanish.</li>
 <li><b>Ask TWO questions.</b> Always include at least two questions in your reply.</li>
 <li><b>Write in paragraphs</b>, not one big paragraph.</li>
 <li><b>Sign-off:</b> <i>Atentamente,</i> + your name. <b>Don't</b> use "Sinceramente": it's a false cognate and means "honestly" in Spanish.</li>
</ol>
<h3>Formal or informal</h3>
<div class="tablewrap"><table class="table">
<tr><th></th><th>Formal (to an adult, organization, teacher)</th><th>Informal (to a friend)</th></tr>
<tr><td>Greeting</td><td>Estimado Sr. … / Estimada Sra. …:</td><td>Querido/a … / ¡Hola, …!</td></tr>
<tr><td>"You"</td><td><b>usted</b>: ¿Podría usted…? Le agradezco…</td><td><b>tú</b>: ¿Puedes…? Te agradezco…</td></tr>
<tr><td>Sign-off</td><td>Atentamente, / Un cordial saludo,</td><td>Un abrazo, / Saludos,</td></tr>
</table></div>
<p class="small muted">On the test, if the situation is formal (school, organization, adult), always use <b>usted</b> and <b>Atentamente</b>.</p>
<h3>Model (in Spanish)</h3>
<div class="model email">
<p><b>Asunto:</b> Re: Visita del estudiante de intercambio</p>
<p>Estimada Sra. Ramírez:</p>
<p>Muchas gracias por su correo y por la información sobre la visita de Mateo. Estoy muy emocionado de ser su anfitrión.</p>
<p>Usted me pregunta qué actividades podemos hacer en Eugene. En primer lugar, le recomiendo visitar el mercado de los sábados, ya que allí Mateo puede conocer a la gente local y probar comida de la región. Además, podemos montar en bicicleta por el río, porque así conocerá la vida cotidiana de la ciudad.</p>
<p>Sobre el clima, en octubre suele llover y hace fresco, por eso Mateo debería traer un impermeable y un suéter.</p>
<p>Me gustaría hacerle dos preguntas: ¿Qué comidas no le gustan a Mateo? ¿Practica algún deporte?</p>
<p>Atentamente,<br>Sam</p>
</div>`},

{id:"infografia",t:["La infografía","The infographic"],es:`
<h3>Requisitos de una infografía en el IB</h3>
<ol class="steps">
 <li><b>Título atractivo y claro</b>, que resuma el tema.</li>
 <li><b>Subtítulos o apartados:</b> organización visual por secciones.</li>
 <li><b>Texto breve:</b> frases cortas, palabras clave, no párrafos largos.</li>
 <li><b>Elementos visuales obligatorios:</b> íconos, gráficos, tablas, ilustraciones.</li>
 <li><b>Datos y estadísticas</b> presentados de forma visual (ej. "65 % de los jóvenes…").</li>
 <li><b>Uso del espacio y color:</b> distribución equilibrada, resaltar lo importante.</li>
 <li><b>Fuentes</b> (si corresponde): breves, al pie o en pequeño texto.</li>
 <li><b>Registro y estilo adecuados:</b> informativo, directo, conciso, pensado para un público amplio.</li>
</ol>
<h3>Diferencia con un texto normal</h3>
<p>Una infografía <b>no es un ensayo ni un artículo</b>: no se escribe en párrafos largos. Se espera un formato <b>visualmente identificable</b>: títulos, viñetas, íconos, gráficos. El alumno debe demostrar que <b>reconoce el formato</b> (esto es lo que buscan los examinadores).</p>
<div class="callout"><b>Importante:</b> una infografía creada por un alumno IB muestra comprensión del formato (con sus convenciones) y usa un lenguaje preciso y adecuado al público. Si usas porcentajes, deben corresponder a los datos reales. <b>No inventes datos.</b></div>
<h3>Lenguaje para hablar de datos</h3>
<div id="datosTable"></div>
<h3>En un examen escrito</h3>
<p>No tienes computadora, así que "dibujas" el formato: un título grande, recuadros para cada sección, viñetas, un gráfico sencillo (barras o círculo), íconos simples y una línea de fuente al pie.</p>
<h3>Modelo</h3>
<div id="infoModel"></div>`,
en:`
<h3>IB requirements for an infographic</h3>
<ol class="steps">
 <li><b>A catchy, clear title</b> that sums up the topic.</li>
 <li><b>Subheadings or sections:</b> visual organization into parts.</li>
 <li><b>Short text:</b> short phrases and key words, no long paragraphs.</li>
 <li><b>Required visuals:</b> icons, graphs, tables, illustrations.</li>
 <li><b>Data and statistics</b> shown visually (e.g. "65 % de los jóvenes…").</li>
 <li><b>Use of space and color:</b> balanced layout, highlight what matters.</li>
 <li><b>Sources</b> (if relevant): short, at the bottom or in small print.</li>
 <li><b>Right register and style:</b> informative, direct, concise, written for a broad audience.</li>
</ol>
<h3>How it differs from normal writing</h3>
<p>An infographic is <b>not an essay or an article</b>: no long paragraphs. Examiners expect a <b>visually recognizable</b> format: headings, bullets, icons, graphs. You have to show that you <b>recognize the format</b>.</p>
<div class="callout"><b>Important:</b> an IB student's infographic shows understanding of the format (and its conventions) and uses precise language suited to the audience. Any percentages must match the real data. <b>Don't make up data.</b></div>
<h3>Language for talking about data</h3>
<div id="datosTable"></div>
<h3>On a written test</h3>
<p>You don't have a computer, so you "draw" the format: a big title, boxes for each section, bullets, a simple chart (bars or a pie), simple icons and a source line at the bottom.</p>
<h3>Model (in Spanish)</h3>
<div id="infoModel"></div>`},

{id:"elegir",t:["¿Correo o infografía?","Email or infographic?"],es:`
<p>En la parte A tienes que <b>elegir el tipo de texto más adecuado</b>. Pregúntate tres cosas:</p>
<div class="grid3">
 <div class="card"><h3>¿Para quién?</h3><p>¿Una persona concreta (la Sra. Gómez, tu amigo, el director)? → <b>correo</b>.<br>¿Un público amplio (todos los estudiantes, la comunidad, los visitantes)? → <b>infografía</b>.</p></div>
 <div class="card"><h3>¿Para qué?</h3><p>¿Responder, pedir, agradecer, contestar preguntas? → <b>correo</b>.<br>¿Informar, presentar resultados o datos, dar consejos de forma visual? → <b>infografía</b>.</p></div>
 <div class="card"><h3>¿Dónde?</h3><p>¿Se envía a alguien? → <b>correo</b>.<br>¿Se publica en una pared, un sitio web, una cartelera o las redes? → <b>infografía</b>.</p></div>
</div>
<div class="tablewrap"><table class="table">
<tr><th>Pistas en la pregunta</th><th>Tipo de texto</th></tr>
<tr><td>"Recibiste un correo…", "responde a…", "te pregunta…", "escríbele a…"</td><td><b>Correo electrónico</b></td></tr>
<tr><td>"resultados de una encuesta", "datos", "para publicar / colgar / compartir con todos", "informar a los estudiantes"</td><td><b>Infografía</b></td></tr>
</table></div>
<div class="callout">Escribe el tipo de texto que elegiste y <b>respeta su formato</b>. Un buen contenido en el formato equivocado pierde puntos.</div>`,
en:`
<p>In part A you have to <b>choose the best text type</b>. Ask yourself three things:</p>
<div class="grid3">
 <div class="card"><h3>Who is it for?</h3><p>One specific person (Sra. Gómez, your friend, the principal)? → <b>email</b>.<br>A broad audience (all students, the community, visitors)? → <b>infographic</b>.</p></div>
 <div class="card"><h3>What is it for?</h3><p>Reply, request, thank, answer questions? → <b>email</b>.<br>Inform, present results or data, give tips visually? → <b>infographic</b>.</p></div>
 <div class="card"><h3>Where does it go?</h3><p>Sent to someone? → <b>email</b>.<br>Posted on a wall, a website, a bulletin board or social media? → <b>infographic</b>.</p></div>
</div>
<div class="tablewrap"><table class="table">
<tr><th>Clues in the question</th><th>Text type</th></tr>
<tr><td>"Recibiste un correo…", "responde a…", "te pregunta…", "escríbele a…"</td><td><b>Email</b></td></tr>
<tr><td>"resultados de una encuesta", "datos", "para publicar / colgar / compartir con todos", "informar a los estudiantes"</td><td><b>Infographic</b></td></tr>
</table></div>
<div class="callout">Write in the text type you chose and <b>follow its format</b>. Good content in the wrong format loses points.</div>`},

{id:"lectura",t:["Comprensión lectora","Reading comprehension"],es:`
<h3>Estrategias</h3>
<ol>
 <li><b>Lee primero las preguntas.</b> Así sabes qué buscar.</li>
 <li><b>Lee el título, los subtítulos y la primera frase de cada párrafo</b> para entender la idea general.</li>
 <li><b>Subraya palabras clave</b> en las preguntas y búscalas (o sus sinónimos) en el texto.</li>
 <li><b>No necesitas entender cada palabra.</b> Usa el contexto y las palabras parecidas al inglés (cognados), pero cuidado con los falsos cognados (<i>sinceramente</i> = honestly, <i>embarazada</i> = pregnant, <i>éxito</i> = success).</li>
 <li><b>Justifica con el texto.</b> En el IB muchas preguntas piden copiar las palabras exactas del texto.</li>
</ol>
<h3>Tipos de preguntas del IB</h3>
<ul>
 <li><b>Verdadero o falso + justificación:</b> marca V o F y copia la frase del texto que lo demuestra. Sin justificación, no hay punto.</li>
 <li><b>Opción múltiple:</b> elimina las opciones que dicen algo que el texto no dice.</li>
 <li><b>¿Qué palabra del texto significa…?</b> Busca en el párrafo indicado una palabra de la misma categoría (sustantivo, verbo, adjetivo).</li>
 <li><b>¿A quién o a qué se refiere…?</b> Mira la frase anterior: "lo", "la", "les", "ellos", "esto" reemplazan algo ya dicho.</li>
 <li><b>Preguntas abiertas cortas:</b> responde con pocas palabras sacadas del texto.</li>
</ul>`,
en:`
<h3>Strategies</h3>
<ol>
 <li><b>Read the questions first</b> so you know what to look for.</li>
 <li><b>Read the title, subheadings and first sentence of each paragraph</b> to get the main idea.</li>
 <li><b>Underline key words</b> in the questions and find them (or synonyms) in the text.</li>
 <li><b>You don't need every word.</b> Use context and cognates, but watch for false cognates (<i>sinceramente</i> = honestly, <i>embarazada</i> = pregnant, <i>éxito</i> = success).</li>
 <li><b>Back it up with the text.</b> Many IB questions ask you to copy the exact words from the text.</li>
</ol>
<h3>IB question types</h3>
<ul>
 <li><b>True or false + justification:</b> mark T or F and copy the phrase that proves it. No justification, no point.</li>
 <li><b>Multiple choice:</b> rule out options that say something the text doesn't.</li>
 <li><b>Which word in the text means…?</b> Look in the given paragraph for a word of the same type (noun, verb, adjective).</li>
 <li><b>Who or what does … refer to?</b> Look at the sentence before: "lo", "la", "les", "ellos", "esto" stand in for something already mentioned.</li>
 <li><b>Short open questions:</b> answer with a few words taken from the text.</li>
</ul>`},

{id:"audio",t:["Comprensión auditiva","Listening"],es:`
<p>La parte C del examen es un audio con preguntas. Los exámenes de práctica de este sitio no incluyen esa parte, pero aquí tienes estrategias y audios de práctica (los lee tu navegador).</p>
<h3>Estrategias</h3>
<ol>
 <li><b>Antes de escuchar:</b> lee las preguntas y piensa qué tipo de información necesitas (un lugar, un número, una opinión, una emoción).</li>
 <li><b>Predice:</b> con el título y la situación, piensa qué palabras vas a oír. En la clase del 22 de octubre: "Piensa en tres preguntas que le harías a una persona local".</li>
 <li><b>Primera escucha:</b> la idea general. ¿Quién habla? ¿Dónde está? ¿De qué habla?</li>
 <li><b>Segunda escucha:</b> los detalles. Toma notas cortas: palabras clave, números, nombres.</li>
 <li><b>No te bloquees</b> con una palabra que no entiendes: sigue escuchando, la idea se repite.</li>
 <li><b>Cuidado con las trampas:</b> el audio a veces menciona todas las opciones, pero solo una responde a la pregunta.</li>
</ol>
<h3>Escucha bien estas palabras</h3>
<p><b>números</b> (precios, horas, porcentajes) · <b>conectores de contraste</b> (<i>pero, sin embargo, aunque</i>: lo que viene después suele ser la respuesta) · <b>opiniones</b> (<i>me encanta, prefiero, no me gusta</i>) · <b>tiempo</b> (<i>antes, ahora, todavía, ya</i>).</p>`,
en:`
<p>Part C of the test is an audio clip with questions. The practice tests on this site skip that part, but here are strategies and practice clips (read aloud by your browser).</p>
<h3>Strategies</h3>
<ol>
 <li><b>Before listening:</b> read the questions and think about the kind of information you need (a place, a number, an opinion, an emotion).</li>
 <li><b>Predict:</b> from the title and the situation, think of words you'll hear. In the Oct 22 class: "Think of three questions you'd ask a local".</li>
 <li><b>First listen:</b> the main idea. Who's speaking? Where are they? What about?</li>
 <li><b>Second listen:</b> details. Take short notes: key words, numbers, names.</li>
 <li><b>Don't get stuck</b> on a word you didn't catch: keep listening, ideas get repeated.</li>
 <li><b>Watch for traps:</b> the audio sometimes mentions every option, but only one answers the question.</li>
</ol>
<h3>Listen hard for</h3>
<p><b>numbers</b> (prices, times, percentages) · <b>contrast words</b> (<i>pero, sin embargo, aunque</i>: what follows is often the answer) · <b>opinions</b> (<i>me encanta, prefiero, no me gusta</i>) · <b>time words</b> (<i>antes, ahora, todavía, ya</i>).</p>`}
];

/* Listening practice clips, read aloud with the browser's Spanish voice */
const AUDIOS = [
 {id:"a1",t:"Marina habla de su viaje",text:"Hola, me llamo Marina y tengo diecinueve años. Cuando terminé el bachillerato, viajé tres meses por Perú y Bolivia. Al principio era una turista típica: visitaba los lugares famosos y sacaba fotos de todo. Pero después de dos semanas, empecé a quedarme con familias locales. Con ellas aprendí a cocinar, conversé mucho y conocí su vida cotidiana. Para mí, ser viajera significa escuchar a la gente y no solo mirar los monumentos. Mi consejo es simple: viaja despacio y habla con todo el mundo.",
  qs:[{q:"¿Cuándo viajó Marina?",o:["Después de terminar el bachillerato","Durante sus vacaciones de verano en la universidad","Cuando tenía quince años","Antes de empezar el bachillerato"],a:0},
      {q:"¿Cuánto tiempo duró su viaje?",o:["Tres meses","Dos semanas","Tres semanas","Diecinueve días"],a:0},
      {q:"¿Qué cambió después de dos semanas?",o:["Empezó a quedarse con familias locales","Volvió a su casa","Empezó a sacar más fotos","Se fue a un hotel"],a:0},
      {q:"Según Marina, ser viajera significa…",o:["escuchar a la gente","visitar muchos monumentos","viajar muy rápido","sacar fotos de todo"],a:0}]},
 {id:"a2",t:"El pronóstico del tiempo",text:"Buenos días, aquí está el pronóstico del tiempo para el fin de semana. El sábado por la mañana va a estar nublado y hará fresco, con una temperatura de doce grados. Por la tarde llegará la lluvia, así que no olviden su impermeable y su paraguas. El domingo, en cambio, hará sol y la temperatura subirá a dieciocho grados. Será un día perfecto para pasear por el parque o montar en bicicleta. Eso sí, por la noche hará frío y habrá un poco de viento.",
  qs:[{q:"¿Qué tiempo hará el sábado por la mañana?",o:["Nublado y fresco","Soleado y caluroso","Lluvioso y frío","Nieve y viento"],a:0},
      {q:"¿Qué recomienda llevar el sábado por la tarde?",o:["Un impermeable y un paraguas","Gafas de sol","Un traje de baño","Una bufanda y guantes"],a:0},
      {q:"¿Cuál será la temperatura el domingo?",o:["Dieciocho grados","Doce grados","Ocho grados","Veintiocho grados"],a:0},
      {q:"¿Qué pasará el domingo por la noche?",o:["Hará frío y un poco de viento","Habrá una tormenta","Lloverá mucho","Hará mucho calor"],a:0}]},
 {id:"a3",t:"Una joven de Arequipa da recomendaciones",text:"¡Bienvenido a Arequipa! Si quieres conocer de verdad nuestra ciudad, no te quedes solo en el centro histórico. Te recomiendo ir al mercado San Camilo por la mañana: allí puedes probar un jugo de frutas y ver cómo compra la gente de aquí. Para moverte, usa las combis, que son pequeños autobuses; son baratas, aunque a veces van muy llenas. Y el domingo, ve al campo con alguna familia: muchas familias comen juntas y preparan platos típicos como el rocoto relleno. Así vas a entender mejor nuestras costumbres.",
  qs:[{q:"¿Qué recomienda hacer en el mercado San Camilo?",o:["Probar un jugo y ver cómo compra la gente","Comprar recuerdos para turistas","Visitar un museo","Tomar fotos del centro histórico"],a:0},
      {q:"¿Qué son las combis?",o:["Pequeños autobuses","Taxis de lujo","Trenes","Bicicletas"],a:0},
      {q:"¿Cuál es un problema de las combis?",o:["A veces van muy llenas","Son muy caras","Son muy lentas","No hay muchas"],a:0},
      {q:"¿Qué hacen muchas familias el domingo?",o:["Comen juntas en el campo","Van al cine","Trabajan en el mercado","Viajan a otra ciudad"],a:0}]},
 {id:"a4",t:"Mensaje de voz de un amigo",text:"Hola, soy Diego. Te llamo porque el viernes es el cumpleaños de Lucía y queremos celebrarlo en el restaurante mexicano que está cerca de la biblioteca. Nos vemos a las siete y media en la entrada. Somos ocho personas, así que ya hice la reserva. No es una fiesta formal: puedes llevar jeans y zapatillas. Ah, y cada uno va a pagar unos quince dólares para el regalo. Mándame un mensaje si puedes venir. ¡Chao!",
  qs:[{q:"¿Dónde es la celebración?",o:["En un restaurante mexicano cerca de la biblioteca","En la casa de Lucía","En la biblioteca","En un café del centro"],a:0},
      {q:"¿A qué hora se encuentran?",o:["A las siete y media","A las seis y media","A las ocho","A las siete menos cuarto"],a:0},
      {q:"¿Qué ropa puede llevar?",o:["Jeans y zapatillas","Un traje y corbata","Un vestido elegante","Ropa deportiva"],a:0},
      {q:"¿Para qué es el dinero?",o:["Para el regalo de Lucía","Para la cena","Para el taxi","Para la reserva"],a:0}]}
];
