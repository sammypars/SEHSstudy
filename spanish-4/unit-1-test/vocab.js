/* =====================================================================
   Unit 1 vocabulary: "Vocabulario disponible" (Day 2 handout, 11 de septiembre)
   plus the traveler / tourist, email, infographic and class-survival words
   from the later lessons.
   Each category: { id, es, en, groups:[ { es, en, w:[ ["español","English"], ... ] } ] }
   Add a word: put ["palabra","meaning"] in the right group. Quizzes pick it up automatically.
   ===================================================================== */
const VOCAB = [
 {id:"lugares",es:"Lugares",en:"Places",groups:[
  {es:"Vivienda y espacios de la casa",en:"Home",w:[["la casa","house"],["el apartamento","apartment"],["el edificio","building"],["la habitación","room / bedroom"],["el dormitorio","bedroom"],["la sala / el salón","living room"],["la cocina","kitchen"],["el comedor","dining room"],["el baño","bathroom"],["el patio","patio / yard"],["el jardín","garden"],["el balcón","balcony"]]},
  {es:"Lugares educativos",en:"Education",w:[["la escuela","school"],["el colegio","school (often private / secondary)"],["la universidad","university"],["la biblioteca","library"],["el aula / el salón de clases","classroom"]]},
  {es:"Lugares de trabajo y servicios",en:"Work and services",w:[["la oficina","office"],["el hospital","hospital"],["la clínica","clinic"],["el banco","bank"],["la farmacia","pharmacy"],["la comisaría","police station"],["la estación de bomberos","fire station"],["la oficina de correos","post office"],["el ayuntamiento / la municipalidad","city hall"]]},
  {es:"Tiendas y lugares comerciales",en:"Shops",w:[["la tienda","store"],["el supermercado","supermarket"],["el centro comercial","shopping mall"],["el mercado","market"]]},
  {es:"Lugares para comer y beber",en:"Eating and drinking",w:[["el restaurante","restaurant"],["el café / la cafetería","café / coffee shop"],["el bar","bar"]]},
  {es:"Entretenimiento, cultura y deporte",en:"Entertainment, culture and sport",w:[["el cine","movie theater"],["el teatro","theater"],["el estadio","stadium"],["el museo","museum"],["la galería de arte","art gallery"],["el zoológico","zoo"],["el gimnasio","gym"],["la piscina","swimming pool"]]},
  {es:"Lugares religiosos",en:"Religious places",w:[["la iglesia","church"],["el templo","temple"],["la sinagoga","synagogue"],["la mezquita","mosque"]]},
  {es:"Transporte y viajes",en:"Transport and travel",w:[["el aeropuerto","airport"],["la estación de tren","train station"],["la estación de autobuses","bus station"],["la parada de autobús","bus stop"],["el puerto","port"],["el estacionamiento / el aparcamiento","parking lot"]]},
  {es:"Al aire libre y naturaleza",en:"Outdoors and nature",w:[["el parque","park"],["el bosque","forest"],["la playa","beach"],["la montaña","mountain"],["el río","river"],["el lago","lake"],["el campo","countryside / field"]]},
  {es:"Lugares y espacios de una ciudad",en:"City spaces",w:[["la calle","street"],["la avenida","avenue"],["la plaza","square / plaza"],["el centro de la ciudad","downtown"],["el barrio","neighborhood"],["el puente","bridge"],["la acera / la vereda","sidewalk"],["la carretera","road / highway"]]},
  {es:"Alojamiento y turismo",en:"Lodging and tourism",w:[["el hotel","hotel"],["el hostal","hostel"],["el camping / el campamento","campground"]]}
 ]},
 {id:"transporte",es:"Medios de transporte",en:"Transportation",groups:[
  {es:"Vehículos particulares",en:"Private vehicles",w:[["el auto / el coche / el carro","car"],["la camioneta","pickup / van"],["la motocicleta / la moto","motorcycle"],["la bicicleta","bicycle"],["la patineta / el monopatín","skateboard / scooter"],["la casa rodante","RV / motorhome"]]},
  {es:"Transporte público terrestre",en:"Public transport",w:[["el autobús / el bus","bus"],["el taxi","taxi"],["el metro","subway"],["el tren","train"],["el tranvía","streetcar / tram"]]},
  {es:"Transporte aéreo",en:"Air",w:[["el avión","airplane"],["el helicóptero","helicopter"],["la avioneta","small plane"],["el globo aerostático","hot-air balloon"]]},
  {es:"Transporte acuático",en:"Water",w:[["el barco","ship / boat"],["el bote","small boat"],["la lancha","motorboat"],["el ferry / el transbordador","ferry"],["el crucero","cruise ship"]]},
  {es:"Carga y trabajo",en:"Work vehicles",w:[["el camión","truck"],["el tractor","tractor"],["la ambulancia","ambulance"],["el camión de bomberos","fire truck"]]},
  {es:"Otros medios",en:"Other",w:[["el teleférico","cable car"],["el funicular","funicular"],["el caballo","horse"]]},
  {es:"Vocabulario del transporte",en:"Transport words",w:[["el conductor / la conductora","driver"],["el pasajero / la pasajera","passenger"],["el peatón / la peatona","pedestrian"],["el / la ciclista","cyclist"],["el tráfico","traffic"],["el atasco / el embotellamiento","traffic jam"],["el carril","lane"],["la autopista","freeway"],["la vía","track / way"],["la estación","station"],["la parada","stop"],["el semáforo","traffic light"],["el paso de peatones / el cruce peatonal","crosswalk"],["el casco","helmet"],["el cinturón de seguridad","seat belt"]]}
 ]},
 {id:"colores",es:"Colores",en:"Colors",groups:[
  {es:"Colores básicos",en:"Basic colors",w:[["rojo","red"],["azul","blue"],["amarillo","yellow"],["verde","green"],["naranja / anaranjado","orange"],["morado / violeta","purple"],["rosado / rosa","pink"],["café / marrón","brown"],["negro","black"],["blanco","white"],["gris","gray"]]},
  {es:"Colores adicionales",en:"More colors",w:[["celeste","light / sky blue"],["plateado","silver"]]},
  {es:"Intensidad del color",en:"Color intensity",w:[["claro/a","light"],["oscuro/a","dark"],["brillante / vivo/a / intenso/a","bright / vivid"],["pálido/a","pale"],["apagado/a","dull / muted"]]},
  {es:"Combinaciones y apariencia",en:"Combinations",w:[["multicolor","multicolored"],["colorido/a","colorful"],["blanco y negro","black and white"],["de varios colores","of several colors"]]}
 ]},
 {id:"ropa",es:"Ropa y accesorios",en:"Clothes and accessories",groups:[
  {es:"Parte superior del cuerpo",en:"Tops",w:[["la camiseta","T-shirt"],["la camisa","shirt"],["la blusa","blouse"],["el suéter / el jersey","sweater"],["la sudadera","sweatshirt / hoodie"],["la chaqueta","jacket"],["el abrigo","coat"],["el chaleco","vest"],["el cárdigan","cardigan"]]},
  {es:"Parte inferior del cuerpo",en:"Bottoms",w:[["los pantalones","pants"],["los jeans / los vaqueros","jeans"],["los pantalones cortos / los shorts","shorts"],["la falda","skirt"],["los leggings / las mallas","leggings"]]},
  {es:"Prendas de cuerpo entero",en:"Full-body",w:[["el vestido","dress"],["el traje","suit"]]},
  {es:"Calzado",en:"Footwear",w:[["los zapatos","shoes"],["las zapatillas / los tenis","sneakers"],["las botas","boots"],["las sandalias","sandals"],["los tacones","high heels"],["las pantuflas","slippers"]]},
  {es:"Ropa deportiva y para actividades",en:"Activewear",w:[["la ropa deportiva","sportswear"],["el traje de baño / el bañador","swimsuit"],["el bikini","bikini"],["el pijama","pajamas"],["el impermeable","raincoat"]]},
  {es:"Accesorios",en:"Accessories",w:[["el sombrero","hat"],["la gorra","cap"],["el gorro","beanie"],["la bufanda","scarf"],["los guantes","gloves"],["el cinturón","belt"],["la corbata","tie"],["los lentes / las gafas","glasses"],["los lentes de sol / las gafas de sol","sunglasses"],["el reloj","watch"],["el bolso","handbag"],["la cartera","wallet / purse"],["la mochila","backpack"]]},
  {es:"Joyas",en:"Jewelry",w:[["el collar","necklace"],["la pulsera","bracelet"],["el anillo","ring"],["los aretes / los pendientes / los aritos","earrings"]]},
  {es:"Para describir la ropa",en:"Describing clothes",w:[["formal","formal"],["informal","casual"],["elegante","elegant"],["deportivo/a","sporty"],["cómodo/a","comfortable"],["ajustado/a","tight-fitting"],["holgado/a","loose / baggy"],["largo/a","long"],["corto/a","short"],["de manga larga","long-sleeved"],["de manga corta","short-sleeved"],["sin mangas","sleeveless"]]},
  {es:"Diseños y estampados",en:"Patterns",w:[["liso/a","plain / solid"],["a rayas","striped"],["a cuadros","plaid / checked"],["con lunares","polka-dotted"],["estampado/a","printed / patterned"],["floral","floral"],["con dibujos","with drawings / graphics"],["con un logotipo","with a logo"]]},
  {es:"Verbos esenciales",en:"Key verbs",w:[["llevar","to wear / to carry"],["usar","to use / to wear"],["vestir","to dress / to wear"],["ponerse","to put on"],["vestirse","to get dressed"]]}
 ]},
 {id:"clima",es:"Clima",en:"Weather",groups:[
  {es:"Condiciones generales",en:"General",w:[["el buen tiempo","good weather"],["el mal tiempo","bad weather"],["soleado","sunny"],["nublado","cloudy"],["lluvioso","rainy"]]},
  {es:"Temperatura",en:"Temperature",w:[["el calor","heat"],["el frío","cold"],["fresco","cool"],["templado","mild"],["caluroso","hot"],["helado","freezing / icy"],["la temperatura alta / baja","high / low temperature"]]},
  {es:"Precipitaciones",en:"Precipitation",w:[["la lluvia","rain"],["la llovizna","drizzle"],["la nieve","snow"],["el granizo","hail"],["la tormenta","storm"],["la tormenta eléctrica","thunderstorm"]]},
  {es:"Viento",en:"Wind",w:[["el viento","wind"],["la brisa","breeze"],["ventoso","windy"]]},
  {es:"Verbos y expresiones",en:"Verbs and expressions",w:[["hace calor","it's hot"],["hace frío","it's cold"],["hace fresco","it's cool"],["hace buen tiempo","the weather is nice"],["hace mal tiempo","the weather is bad"],["hace sol","it's sunny"],["hace viento","it's windy"],["está nublado","it's cloudy"],["llueve / está lloviendo","it rains / it's raining"],["nieva / está nevando","it snows / it's snowing"],["hay una tormenta","there's a storm"]]},
  {es:"Para describir una foto",en:"For describing a photo",w:[["parece que hace…","it looks like it's…"],["el día está…","the day is…"],["el cielo está…","the sky is…"],["parece un día soleado / nublado / lluvioso","it looks like a sunny / cloudy / rainy day"],["hace bastante / mucho / poco…","it's quite / very / a little…"],["por el clima, parece que es verano / invierno","from the weather, it looks like summer / winter"]]}
 ]},
 {id:"deportes",es:"Deportes",en:"Sports",groups:[
  {es:"Deportes de equipo",en:"Team sports",w:[["el fútbol","soccer"],["el baloncesto / el básquetbol","basketball"],["el voleibol","volleyball"],["el béisbol","baseball"],["el sóftbol","softball"],["el rugby","rugby"],["el hockey sobre hielo","ice hockey"],["el hockey sobre césped","field hockey"],["el fútbol americano","American football"]]},
  {es:"Deportes individuales",en:"Individual sports",w:[["el tenis","tennis"],["el golf","golf"],["el atletismo","track and field"],["la gimnasia","gymnastics"],["el boxeo","boxing"],["la lucha","wrestling"],["las artes marciales","martial arts"],["el kárate","karate"],["el judo","judo"],["la esgrima","fencing"],["el levantamiento de pesas","weightlifting"]]},
  {es:"Deportes acuáticos",en:"Water sports",w:[["la natación","swimming"],["el surf","surfing"],["el buceo","scuba diving"],["el waterpolo","water polo"],["el remo","rowing"]]},
  {es:"Deportes de invierno",en:"Winter sports",w:[["el esquí","skiing"],["el snowboard","snowboarding"],["el patinaje sobre hielo","ice skating"]]},
  {es:"Al aire libre",en:"Outdoors",w:[["el ciclismo","cycling"],["el ciclismo de montaña","mountain biking"],["el senderismo","hiking"],["la escalada","climbing"],["el montañismo","mountaineering"],["la equitación","horseback riding"]]},
  {es:"Deportes con ruedas",en:"On wheels",w:[["el patinaje","skating"],["el patinaje en línea","inline skating"],["el skate / el monopatinaje","skateboarding"]]},
  {es:"Personas",en:"People",w:[["el / la deportista","athlete / sporty person"],["el / la atleta","athlete"],["el jugador / la jugadora","player"],["el entrenador / la entrenadora","coach"],["el árbitro / la árbitra","referee"],["el equipo","team"],["el compañero / la compañera de equipo","teammate"]]},
  {es:"Lugares y objetos",en:"Places and equipment",w:[["la cancha","court / field"],["la pista","track / rink"],["la pelota / el balón","ball"],["la raqueta","racket"],["la red","net"],["el uniforme","uniform"]]}
 ]},
 {id:"emociones",es:"Emociones y estados de ánimo",en:"Emotions and moods",groups:[
  {es:"Emociones positivas",en:"Positive",w:[["feliz","happy"],["contento/a","glad"],["alegre","cheerful"],["emocionado/a","excited"],["entusiasmado/a","enthusiastic"],["orgulloso/a","proud"],["agradecido/a","grateful"]]},
  {es:"Emociones negativas",en:"Negative",w:[["triste","sad"],["enojado/a","angry"],["enfadado/a","angry (Spain)"],["molesto/a","annoyed / upset"],["frustrado/a","frustrated"],["decepcionado/a","disappointed"],["preocupado/a","worried"],["nervioso/a","nervous"],["ansioso/a","anxious"],["asustado/a","scared"],["avergonzado/a","embarrassed / ashamed"]]},
  {es:"Estados de ánimo y sensaciones",en:"Moods and feelings",w:[["tranquilo/a","calm"],["relajado/a","relaxed"],["cansado/a","tired"],["aburrido/a","bored"],["confundido/a","confused"],["sorprendido/a","surprised"],["incómodo/a","uncomfortable"],["cómodo/a","comfortable"],["concentrado/a","focused"],["distraído/a","distracted"],["interesado/a","interested"]]},
  {es:"Emociones con otras personas",en:"With other people",w:[["enamorado/a","in love"],["celoso/a","jealous"],["solo/a","lonely / alone"],["querido/a","loved"],["apoyado/a","supported"]]}
 ]},
 {id:"formas",es:"Formas",en:"Shapes",groups:[
  {es:"Formas básicas",en:"Basic shapes",w:[["el círculo","circle"],["el cuadrado","square"],["el rectángulo","rectangle"],["el triángulo","triangle"],["el óvalo","oval"],["el semicírculo","semicircle"],["la estrella","star"],["el corazón","heart"],["la cruz","cross"],["el diamante","diamond"],["el rombo","rhombus"],["la luna creciente","crescent moon"]]},
  {es:"Formas geométricas",en:"Geometric",w:[["el pentágono","pentagon"],["el hexágono","hexagon"],["el octágono","octagon"],["el paralelogramo","parallelogram"],["el trapezoide","trapezoid"],["el ángulo","angle"]]},
  {es:"Formas tridimensionales",en:"3-D shapes",w:[["la esfera","sphere"],["el cubo","cube"],["el cilindro","cylinder"],["el cono","cone"],["la pirámide","pyramid"]]},
  {es:"Líneas y otras formas",en:"Lines and others",w:[["la línea","line"],["la curva","curve"],["el arco","arch / arc"],["la espiral","spiral"],["la flor","flower"]]},
  {es:"Adjetivos para describir formas",en:"Shape adjectives",w:[["redondo/a","round"],["rectangular","rectangular"],["triangular","triangular"],["ovalado/a","oval"],["puntiagudo/a","pointed"],["simétrico/a","symmetrical"],["asimétrico/a","asymmetrical"],["irregular","irregular"]]}
 ]},
 {id:"tecnologia",es:"Tecnología",en:"Technology",groups:[
  {es:"Dispositivos",en:"Devices",w:[["el celular / el teléfono móvil","cell phone"],["la computadora / el ordenador","computer"],["la tableta","tablet"],["el televisor","TV set"],["la cámara","camera"],["los auriculares / los audífonos","headphones"],["el reloj inteligente","smartwatch"]]},
  {es:"Partes y accesorios",en:"Parts",w:[["la pantalla","screen"],["el teclado","keyboard"],["el ratón / el mouse","mouse"],["el cargador","charger"],["el cable","cable"]]},
  {es:"Internet y comunicación",en:"Internet",w:[["el internet","the internet"],["el wifi","wifi"],["las redes sociales","social media"],["la aplicación / la app","app"],["el mensaje","message"],["el correo electrónico","email"],["la videollamada","video call"]]},
  {es:"Acciones con la tecnología",en:"Actions",w:[["buscar","to search / look for"],["navegar","to browse"],["mandar / enviar un mensaje","to send a message"],["sacar una foto","to take a photo"],["grabar","to record"],["compartir","to share"],["publicar","to post / publish"],["descargar","to download"],["subir","to upload"]]},
  {es:"Expresiones para una foto",en:"For a photo",w:[["usar el celular","to use the phone"],["mirar la pantalla","to look at the screen"],["escribir un mensaje","to write a message"],["llevar auriculares","to wear headphones"],["hacer una videollamada","to make a video call"],["publicar en las redes sociales","to post on social media"]]}
 ]},
 {id:"profesiones",es:"Profesiones",en:"Professions",groups:[
  {es:"Educación y salud",en:"Education and health",w:[["el profesor / la profesora","teacher"],["el maestro / la maestra","teacher (school)"],["el médico / la médica / el doctor","doctor"],["el enfermero / la enfermera","nurse"],["el / la dentista","dentist"],["el veterinario / la veterinaria","veterinarian"]]},
  {es:"Servicios y atención al público",en:"Service",w:[["el camarero / el mesero","waiter"],["el cocinero / la cocinera","cook"],["el / la chef","chef"],["el vendedor / la vendedora","salesperson / vendor"],["el cajero / la cajera","cashier"],["el peluquero / la peluquera","hairdresser"],["el / la recepcionista","receptionist"]]},
  {es:"Seguridad y emergencias",en:"Safety",w:[["el / la policía","police officer"],["el bombero / la bombera","firefighter"],["el paramédico / la paramédica","paramedic"]]},
  {es:"Oficios y trabajos manuales",en:"Trades",w:[["el mecánico / la mecánica","mechanic"],["el / la electricista","electrician"],["el carpintero / la carpintera","carpenter"],["el obrero / la obrera","laborer"],["el agricultor / el granjero","farmer"],["el jardinero / la jardinera","gardener"]]},
  {es:"Transporte",en:"Transport",w:[["el conductor / el chofer","driver"],["el / la taxista","taxi driver"],["el / la piloto","pilot"]]},
  {es:"Oficina y profesiones",en:"Office",w:[["el abogado / la abogada","lawyer"],["el ingeniero / la ingeniera","engineer"],["el empresario / la empresaria","businessperson"],["el secretario / la secretaria","secretary"],["el / la periodista","journalist"],["el fotógrafo / la fotógrafa","photographer"]]},
  {es:"Arte, entretenimiento y deporte",en:"Arts",w:[["el / la artista","artist"],["el músico / la música","musician"],["el / la cantante","singer"],["el actor / la actriz","actor / actress"],["el bailarín / la bailarina","dancer"],["el entrenador / la entrenadora","coach / trainer"]]},
  {es:"Expresiones útiles para una foto",en:"For a photo",w:[["parece ser…","seems to be…"],["probablemente es…","is probably…"],["parece que trabaja como…","it looks like they work as…"],["por su uniforme, parece ser…","from the uniform, they seem to be…"],["es posible que sea…","it's possible they are…"]]}
 ]},
 {id:"pasatiempos",es:"Pasatiempos y tiempo libre",en:"Hobbies and free time",groups:[
  {es:"Actividades artísticas y creativas",en:"Creative",w:[["dibujar","to draw"],["pintar","to paint"],["sacar fotos / la fotografía","to take photos / photography"],["tocar un instrumento","to play an instrument"],["cantar","to sing"],["bailar","to dance"],["hacer manualidades","to do crafts"]]},
  {es:"Actividades tranquilas",en:"Quiet",w:[["leer","to read"],["escuchar música","to listen to music"],["ver películas / series","to watch movies / shows"],["ver televisión","to watch TV"],["cocinar","to cook"],["hacer jardinería","to garden"]]},
  {es:"Actividades sociales",en:"Social",w:[["salir con amigos","to go out with friends"],["conversar","to chat / talk"],["ir de compras","to go shopping"],["ir a un café / restaurante","to go to a café / restaurant"],["ir al cine","to go to the movies"],["celebrar","to celebrate"],["jugar juegos de mesa","to play board games"]]},
  {es:"Actividades al aire libre",en:"Outdoors",w:[["caminar","to walk"],["pasear","to stroll / go for a walk"],["hacer senderismo","to go hiking"],["acampar","to camp"],["ir a la playa","to go to the beach"],["viajar","to travel"],["montar en bicicleta","to ride a bike"]]},
  {es:"Deportes y ejercicio",en:"Exercise",w:[["hacer ejercicio","to exercise"],["ir al gimnasio","to go to the gym"],["correr","to run"],["nadar","to swim"],["jugar al fútbol","to play soccer"],["practicar deportes","to play sports"]]},
  {es:"Tecnología y entretenimiento",en:"Tech fun",w:[["jugar videojuegos","to play video games"],["usar las redes sociales","to use social media"],["navegar por internet","to browse the internet"],["ver videos","to watch videos"],["crear contenido","to create content"]]},
  {es:"Expresiones útiles",en:"Useful expressions",w:[["pasar tiempo con amigos / la familia","to spend time with friends / family"],["pasar tiempo al aire libre","to spend time outdoors"],["salir a caminar","to go out for a walk"],["ir de excursión","to go on an outing / trip"]]}
 ]},
 {id:"verbos",es:"Verbos imprescindibles",en:"Must-know verbs",groups:[
  {es:"El núcleo mínimo para describir una foto",en:"The minimum core for describing a photo",w:[["estar","to be (location, state)"],["tener","to have"],["llevar","to wear / to carry"],["hacer","to do / make"],["mirar","to look at"],["hablar","to speak"],["escuchar","to listen"],["caminar","to walk"],["correr","to run"],["sentarse","to sit down"],["estar de pie","to be standing"],["comer","to eat"],["beber / tomar","to drink"],["leer","to read"],["escribir","to write"],["trabajar","to work"],["estudiar","to study"],["jugar","to play"],["usar","to use"],["sostener","to hold"],["ayudar","to help"],["compartir","to share"],["sonreír","to smile"],["reírse","to laugh"],["esperar","to wait / hope"],["comprar","to buy"],["cocinar","to cook"],["sacar una foto","to take a photo"],["hablar por teléfono","to talk on the phone"],["celebrar","to celebrate"]]}
 ]},
 {id:"viajes",es:"Viajeros y turistas",en:"Travelers and tourists",groups:[
  {es:"Turista o viajero",en:"Tourist or traveler",w:[["el / la turista","tourist"],["el viajero / la viajera","traveler"],["el anfitrión / la anfitriona","host"],["el / la estudiante de intercambio","exchange student"],["la comunidad","community"],["la vida cotidiana","everyday life"],["cotidiano/a","everyday / daily"],["los lugares turísticos","tourist spots"],["la cultura local","local culture"],["las costumbres","customs"],["las tradiciones","traditions"],["mezclarse con la cultura local","to blend in with the local culture"],["el consejo","piece of advice / tip"],["recomendar","to recommend"]]},
  {es:"Viajes y alojamiento",en:"Trips and lodging",w:[["el viaje","trip"],["el alojamiento","lodging"],["el equipaje","luggage"],["la maleta","suitcase"],["el pasaporte","passport"],["el boleto / el billete","ticket"],["la reserva","reservation"],["el / la guía","guide"],["el recuerdo","souvenir / memory"],["la excursión","outing / tour"]]},
  {es:"Comida y cultura",en:"Food and culture",w:[["la comida típica","traditional food"],["el plato típico","traditional dish"],["la gastronomía","food culture / cuisine"],["el puesto de comida","food stall"],["el carrito de comida","food cart"],["probar","to try / taste"],["la experiencia cultural","cultural experience"]]},
  {es:"Palabras de clase",en:"Class words",w:[["el ocio","leisure"],["el bachillerato","high school (final years) / diploma"],["conversar","to chat / converse"],["el / la latino/a, el / la hispano/a","Latino/a, Hispanic"],["el guion / el bosquejo","script / outline"],["grabar","to record"],["el resumen","summary"],["los periódicos / los diarios","newspapers"],["el enlace","link"],["imprimir","to print"],["los datos","data"],["la encuesta","survey"],["la infografía","infographic"]]}
 ]}
];

/* Connectors (conectores), grouped by what they do */
const CONECTORES = [
 {es:"Añadir información",en:"Adding",w:[["además","also / in addition"],["también","also / too"],["asimismo","likewise"],["incluso","even"],["y","and"],["no solo… sino también","not only… but also"]]},
 {es:"Contrastar",en:"Contrasting",w:[["pero","but"],["sin embargo","however"],["aunque","although / even though"],["no obstante","nevertheless"],["por un lado… por otro lado","on one hand… on the other hand"],["en cambio","on the other hand / instead"],["a diferencia de","unlike"],["mientras que","while / whereas"]]},
 {es:"Causa",en:"Cause",w:[["porque","because"],["ya que","since / because"],["debido a","due to"],["como","since (at the start of a sentence)"],["puesto que","given that"]]},
 {es:"Consecuencia",en:"Result",w:[["por eso","that's why"],["por lo tanto","therefore"],["así que","so"],["por consiguiente","consequently"],["entonces","so / then"]]},
 {es:"Ordenar ideas",en:"Sequencing",w:[["primero","first"],["en primer lugar","in the first place"],["luego","then / next"],["después","after / afterward"],["mientras","while"],["finalmente","finally"],["por último","lastly"]]},
 {es:"Dar ejemplos",en:"Examples",w:[["por ejemplo","for example"],["como","such as / like"],["es decir","that is / in other words"],["en otras palabras","in other words"]]},
 {es:"Opinión",en:"Opinion",w:[["en mi opinión","in my opinion"],["desde mi punto de vista","from my point of view"],["creo que / pienso que","I think that"],["me parece que","it seems to me that"],["por una parte… por otra parte","on one hand… on the other"],["depende de las circunstancias","it depends on the circumstances"]]},
 {es:"Concluir",en:"Concluding",w:[["en conclusión","in conclusion"],["en resumen","in summary"],["para terminar","to finish"],["en definitiva","ultimately"],["en general","in general"]]}
];

/* Language for data (infographics) and the "expresiones útiles" from class */
const DATOS = [
 ["la mayoría de…","most of…"],["más de la mitad…","more than half…"],["menos de la mitad…","less than half…"],["un __ % de…","__ percent of…"],["ha aumentado / ha disminuido…","has increased / has decreased…"],["en comparación con…","compared with…"],["mientras que…","whereas / while…"],["los datos muestran que…","the data shows that…"],["solo un pequeño porcentaje…","only a small percentage…"],["la mitad / un tercio / un cuarto","half / a third / a quarter"],["casi todos / casi nadie","almost everyone / almost no one"]
];
const EXPRESIONES = [
 {es:"Recomendar",en:"Recommending",w:["Te recomiendo…","Podrías…","Sería interesante…"]},
 {es:"Explicar",en:"Explaining",w:["Esto te permite…","De esta manera…"]},
 {es:"Comparar",en:"Comparing",w:["A diferencia de…","Mientras que…"]},
 {es:"Interpretar",en:"Interpreting",w:["Esto demuestra que…","Es posible que…"]},
 {es:"Reflexionar",en:"Reflecting",w:["Me di cuenta de que…","Aprendí que…"]},
 {es:"Opinar",en:"Giving an opinion",w:["Desde mi punto de vista…","Si estuviera en esa situación…","Por una parte… por otra parte…","Sin embargo…","Entiendo tu opinión, pero…","Depende de las circunstancias porque…"]}
];
