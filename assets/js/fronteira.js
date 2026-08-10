/* ---------- DADOS ----------
   Central Eólica da Fronteira (hibridização com a Central Hidroelétrica de
   Picote). Promotor: Eólica de Avelanoso, Unipessoal Lda.
   Geometria extraída dos shapefiles fornecidos (T09125_PE_v2.shp,
   CorredorA.shp, CorredorB.shp, T09125_Corredor_v2.shp; projeção
   ETRS89/PT-TM06, convertida para WGS84) e simplificada (decimação de
   vértices) apenas para leveza do ficheiro; a forma geral das áreas
   mantém-se fiel à original.
   Fonte da ficha técnica: PDA do Projeto da Central Eólica da Fronteira,
   Eólica de Avelanoso, Unipessoal Lda., julho de 2026 (T09125_01_v3). */

const areaEstudo = [[41.640942, -6.453085], [41.636629, -6.468591], [41.649679, -6.488706], [41.650331, -6.489288], [41.65105, -6.489709], [41.651812, -6.489958], [41.652595, -6.490026], [41.653375, -6.489913], [41.654128, -6.48962], [41.654832, -6.489157], [41.655465, -6.488539], [41.656008, -6.487783], [41.656444, -6.486913], [41.656766, -6.485932], [41.657523, -6.481815], [41.657558, -6.480779], [41.657515, -6.479702], [41.65828, -6.47957], [41.660211, -6.47886], [41.660915, -6.478397], [41.661548, -6.477779], [41.66209, -6.477023], [41.662526, -6.476153], [41.662866, -6.4751], [41.666592, -6.457326], [41.681535, -6.451194], [41.684529, -6.440941], [41.681669, -6.432499], [41.679972, -6.420476], [41.68052, -6.408873], [41.677767, -6.397812], [41.675788, -6.385705], [41.674343, -6.378307], [41.675603, -6.362013], [41.674338, -6.346659], [41.672021, -6.339106], [41.669121, -6.329094], [41.666816, -6.322495], [41.662982, -6.30699], [41.658698, -6.295215], [41.649618, -6.317612], [41.66735, -6.34312], [41.668547, -6.3709], [41.662243, -6.364089], [41.657148, -6.361577], [41.652912, -6.362187], [41.647873, -6.364515], [41.60893, -6.379254], [41.599802, -6.345127], [41.567546, -6.360461], [41.580232, -6.406834], [41.580864, -6.407452], [41.583661, -6.40936], [41.584382, -6.409621], [41.595664, -6.409239], [41.651143, -6.3891], [41.651916, -6.388919], [41.652653, -6.388561], [41.653333, -6.388038], [41.669406, -6.382296], [41.672733, -6.40001], [41.674773, -6.406295], [41.674305, -6.407111], [41.673943, -6.408039], [41.673144, -6.412179], [41.673051, -6.41327], [41.673102, -6.414314], [41.675573, -6.446524], [41.640942, -6.453085]];

const corredorA = [[41.400937, -6.393054], [41.399153, -6.374334], [41.399803, -6.370979], [41.399832, -6.370682], [41.399832, -6.370383], [41.399805, -6.370086], [41.39975, -6.369795], [41.399667, -6.369517], [41.39956, -6.369254], [41.39461, -6.358807], [41.394473, -6.358583], [41.394316, -6.358382], [41.394142, -6.358208], [41.393953, -6.358063], [41.383901, -6.352352], [41.383688, -6.352252], [41.383467, -6.352187], [41.383242, -6.352161], [41.383016, -6.352171], [41.382793, -6.35222], [41.382576, -6.352305], [41.382369, -6.352425], [41.382175, -6.352579], [41.381997, -6.352764], [41.381838, -6.352977], [41.3817, -6.353215], [41.381586, -6.353474], [41.381497, -6.35375], [41.381435, -6.354039], [41.381401, -6.354336], [41.381394, -6.354636], [41.381417, -6.354934], [41.381467, -6.355227], [41.381545, -6.355509], [41.381648, -6.355776], [41.381776, -6.356023], [41.381926, -6.356248], [41.382097, -6.356445], [41.382284, -6.356613], [41.382486, -6.356748], [41.396098, -6.370926], [41.395656, -6.373196], [41.392798, -6.388984], [41.392773, -6.389284], [41.392777, -6.389585], [41.392809, -6.389884], [41.392869, -6.390175], [41.392957, -6.390453], [41.39307, -6.390715], [41.393207, -6.390955], [41.393365, -6.391171], [41.398755, -6.39686], [41.398874, -6.396974], [41.427304, -6.422247], [41.427477, -6.422367], [41.427658, -6.422461], [41.427847, -6.422529], [41.456139, -6.430553], [41.456347, -6.430579], [41.456555, -6.430573], [41.456761, -6.430536], [41.520137, -6.415], [41.559786, -6.417761], [41.560001, -6.417742], [41.560212, -6.417689], [41.560417, -6.417603], [41.560613, -6.417485], [41.560796, -6.417336], [41.56314, -6.414898], [41.576528, -6.403234], [41.5767, -6.403039], [41.576852, -6.402817], [41.576983, -6.402571], [41.577089, -6.402305], [41.577169, -6.402024], [41.577222, -6.401731], [41.577248, -6.401432], [41.577245, -6.401131], [41.577213, -6.400833], [41.577154, -6.400542], [41.577068, -6.400264], [41.576956, -6.400002], [41.576821, -6.399761], [41.576664, -6.399544], [41.576488, -6.399355], [41.576295, -6.399197], [41.576089, -6.399073], [41.575873, -6.398984], [41.575651, -6.398932], [41.575425, -6.398917], [41.575199, -6.39894], [41.574978, -6.399], [41.574764, -6.399097], [41.574561, -6.399229], [41.561105, -6.410941], [41.56098, -6.411061], [41.520125, -6.410202], [41.519925, -6.410203], [41.519727, -6.410233], [41.488298, -6.41739], [41.428937, -6.417946]];

const corredorB = [[41.385118, -6.341475], [41.384933, -6.341617], [41.384763, -6.341786], [41.384609, -6.341981], [41.384473, -6.342199], [41.384357, -6.342436], [41.381693, -6.349659], [41.381611, -6.349918], [41.381553, -6.350188], [41.381519, -6.350466], [41.38151, -6.350746], [41.381525, -6.351027], [41.381748, -6.352573], [41.381699, -6.352862], [41.381678, -6.353157], [41.381684, -6.353453], [41.381718, -6.353746], [41.381779, -6.354031], [41.381866, -6.354304], [41.381978, -6.354561], [41.382113, -6.354797], [41.382269, -6.355009], [41.382443, -6.355194], [41.382633, -6.355349], [41.382837, -6.355471], [41.38305, -6.355559], [41.38327, -6.355612], [41.383492, -6.355628], [41.383715, -6.355607], [41.383934, -6.355549], [41.384146, -6.355456], [41.384438, -6.355296], [41.384635, -6.355151], [41.384818, -6.354974], [41.384982, -6.354767], [41.385125, -6.354535], [41.385246, -6.354281], [41.385341, -6.354009], [41.38541, -6.353724], [41.385452, -6.353429], [41.385465, -6.353129], [41.38545, -6.35283], [41.385192, -6.35104], [41.391349, -6.34277], [41.406921, -6.357828], [41.413647, -6.377704], [41.426786, -6.414464], [41.426901, -6.414707], [41.427038, -6.41493], [41.427194, -6.415129], [41.427366, -6.415303], [41.427553, -6.415447], [41.427752, -6.415561], [41.427959, -6.415642], [41.428172, -6.415689], [41.461611, -6.417741], [41.461835, -6.417736], [41.462056, -6.417694], [41.462272, -6.417616], [41.517289, -6.395549], [41.575108, -6.401353], [41.575334, -6.401338], [41.575557, -6.401285], [41.575773, -6.401196], [41.575978, -6.401071], [41.576171, -6.400913], [41.576347, -6.400724], [41.576504, -6.400507], [41.576639, -6.400265], [41.57675, -6.400003], [41.576836, -6.399725], [41.576895, -6.399434], [41.576926, -6.399136], [41.576929, -6.398835], [41.576903, -6.398536], [41.57685, -6.398243], [41.576769, -6.397962], [41.576663, -6.397696], [41.576532, -6.397451], [41.576379, -6.397229], [41.576207, -6.397034], [41.576018, -6.396869], [41.575814, -6.396738], [41.5756, -6.396641], [41.575379, -6.396581], [41.517347, -6.390751], [41.517135, -6.390746], [41.516924, -6.390775], [41.504701, -6.393413], [41.504508, -6.393484], [41.429526, -6.410987], [41.410067, -6.355461], [41.409964, -6.355201], [41.409839, -6.354961], [41.409692, -6.354742], [41.400402, -6.342534], [41.400238, -6.342364], [41.400061, -6.34222], [41.399873, -6.342105], [41.391837, -6.337888], [41.391631, -6.337816], [41.39142, -6.337777], [41.391207, -6.337771], [41.390994, -6.337798], [41.390786, -6.337859], [41.390585, -6.337951], [41.385138, -6.341462]];

const corredorAlargado = [[41.393127, -6.327182], [41.390921, -6.325885], [41.388624, -6.324908], [41.386827, -6.325792], [41.383993, -6.333362], [41.378311, -6.347622], [41.379525, -6.356199], [41.386815, -6.364975], [41.393152, -6.365825], [41.391973, -6.371295], [41.387041, -6.377299], [41.385831, -6.387413], [41.382715, -6.3913], [41.38202, -6.39375], [41.38377, -6.395883], [41.385679, -6.39776], [41.403116, -6.422575], [41.404344, -6.42526], [41.405777, -6.42776], [41.4074, -6.430046], [41.409194, -6.432093], [41.41114, -6.433879], [41.413216, -6.435384], [41.4154, -6.436591], [41.422873, -6.43957], [41.425105, -6.440186], [41.427371, -6.440499], [41.443729, -6.441328], [41.44927, -6.441323], [41.494611, -6.433996], [41.496701, -6.433519], [41.599892, -6.434916], [41.602151, -6.43499], [41.604404, -6.434762], [41.632224, -6.429363], [41.634401, -6.428591], [41.65468, -6.418434], [41.656789, -6.417087], [41.658782, -6.415455], [41.660637, -6.413556], [41.662334, -6.411411], [41.66872, -6.401768], [41.670116, -6.39915], [41.671294, -6.396348], [41.672241, -6.393393], [41.672945, -6.390321], [41.6734, -6.387165], [41.673598, -6.383963], [41.673539, -6.380752], [41.673223, -6.377566], [41.672653, -6.374445], [41.671836, -6.371422], [41.670781, -6.368534], [41.669501, -6.365812], [41.66801, -6.363289], [41.666325, -6.360993], [41.664466, -6.35895], [41.662454, -6.357184], [41.660311, -6.355715], [41.658064, -6.35456], [41.655736, -6.353732], [41.653355, -6.353241], [41.650949, -6.353092], [41.648545, -6.353286], [41.64617, -6.353822], [41.643851, -6.354694], [41.641616, -6.355891], [41.639489, -6.357399], [41.637496, -6.359202], [41.635658, -6.361278], [41.632872, -6.36529], [41.533592, -6.368278], [41.5312, -6.368326], [41.498175, -6.371424], [41.496013, -6.372004], [41.436805, -6.376524], [41.435715, -6.373719], [41.43441, -6.371082], [41.432902, -6.368643], [41.43121, -6.366429], [41.429351, -6.364465], [41.410502, -6.343029], [41.40907, -6.340538], [41.407449, -6.338259], [41.405657, -6.336219], [41.403715, -6.334439], [41.401642, -6.332939], [41.39653, -6.330016], [41.394533, -6.328219]];

/* ---------- ÁREA PROTEGIDA (contexto, não faz parte do projeto) ----------
   Limite do Parque Natural do Douro Internacional, obtido a partir do
   serviço oficial do ICNF (sigservices.icnf.pt, camada BDG/RNAP), reprojetado
   para WGS84 e simplificado (~200m de tolerância) apenas para leveza do
   ficheiro. Mostrado para contexto: a área de estudo e o corredor alargado
   deste projeto sobrepõem-se a este parque natural e a três sítios Natura
   2000 (ZPE "Rios Sabor e Maçãs", ZPE "Douro Internacional e Vale do Rio
   Águeda", ZEC "Minas de St. Adrião", ZEC "Rios Sabor e Maçãs", ZEC "Douro
   Internacional"). Não foi feita verificação ponto a ponto (não há posições
   de aerogeradores nesta fase de PDA — ver limitações). */
const pnDouroInternacional = [[41.6049,-6.289],[41.628,-6.273],[41.6238,-6.2661],[41.633,-6.2545],[41.607,-6.2358],[41.5944,-6.2014],[41.5745,-6.1901],[41.5591,-6.2119],[41.5507,-6.2173],[41.5426,-6.2176],[41.5216,-6.2368],[41.5159,-6.246],[41.5138,-6.258],[41.5001,-6.2511],[41.4972,-6.2556],[41.4984,-6.2656],[41.4946,-6.268],[41.4866,-6.262],[41.4871,-6.2692],[41.4789,-6.2842],[41.4663,-6.2862],[41.4497,-6.3055],[41.4362,-6.2949],[41.4288,-6.3],[41.4192,-6.3104],[41.4154,-6.3186],[41.416,-6.3276],[41.4107,-6.3328],[41.4051,-6.3324],[41.3978,-6.3177],[41.3896,-6.3155],[41.3858,-6.3176],[41.3865,-6.3258],[41.3781,-6.3513],[41.3826,-6.3611],[41.3934,-6.3663],[41.3872,-6.3769],[41.3855,-6.3885],[41.3785,-6.3931],[41.3697,-6.3934],[41.3632,-6.3861],[41.3638,-6.3785],[41.3592,-6.3771],[41.35,-6.3921],[41.3481,-6.4149],[41.3336,-6.4265],[41.3261,-6.4184],[41.3201,-6.434],[41.3109,-6.4396],[41.306,-6.4372],[41.2985,-6.4517],[41.301,-6.4694],[41.2914,-6.4869],[41.2849,-6.4915],[41.2752,-6.4787],[41.2661,-6.4964],[41.2642,-6.511],[41.2733,-6.5163],[41.2757,-6.5222],[41.2673,-6.5299],[41.258,-6.5471],[41.2455,-6.5519],[41.239,-6.5719],[41.2413,-6.5848],[41.252,-6.5865],[41.2551,-6.5913],[41.2437,-6.5995],[41.2495,-6.6075],[41.2427,-6.6298],[41.2475,-6.6486],[41.2352,-6.6533],[41.2336,-6.6612],[41.2096,-6.6916],[41.1998,-6.689],[41.1932,-6.6924],[41.1921,-6.6997],[41.188,-6.6968],[41.1807,-6.7006],[41.1771,-6.7083],[41.1732,-6.7087],[41.1679,-6.7163],[41.162,-6.7302],[41.1486,-6.7409],[41.1312,-6.7707],[41.1236,-6.7705],[41.1032,-6.7552],[41.0878,-6.77],[41.0766,-6.7737],[41.0572,-6.7903],[41.0452,-6.8087],[41.0363,-6.8094],[41.0283,-6.8345],[41.0268,-6.8677],[41.0383,-6.916],[41.0295,-6.9314],[41.0167,-6.9317],[41.011,-6.9247],[41.0024,-6.9214],[40.9988,-6.9086],[40.9897,-6.9034],[40.9811,-6.8905],[40.9608,-6.8756],[40.9578,-6.8674],[40.9497,-6.8593],[40.9362,-6.8526],[40.9312,-6.8534],[40.9243,-6.8477],[40.9026,-6.8491],[40.8856,-6.8305],[40.8848,-6.8223],[40.8811,-6.8202],[40.8825,-6.8092],[40.861,-6.802],[40.8455,-6.802],[40.8419,-6.8122],[40.8434,-6.8257],[40.8405,-6.8265],[40.8369,-6.821],[40.8259,-6.8246],[40.8075,-6.8171],[40.7972,-6.8166],[40.7834,-6.8252],[40.7829,-6.8532],[40.7796,-6.8583],[40.7818,-6.8729],[40.7875,-6.8681],[40.8038,-6.8653],[40.8123,-6.8594],[40.8224,-6.8611],[40.8297,-6.8664],[40.8309,-6.8727],[40.835,-6.8702],[40.8336,-6.8841],[40.8476,-6.8983],[40.855,-6.9006],[40.8647,-6.9093],[40.8651,-6.8915],[40.8707,-6.8884],[40.8809,-6.9014],[40.8799,-6.9069],[40.8844,-6.9136],[40.8896,-6.9125],[40.8942,-6.9198],[40.8963,-6.9172],[40.8974,-6.9203],[40.9144,-6.9257],[40.9243,-6.939],[40.9252,-6.9458],[40.9321,-6.9456],[40.9342,-6.9534],[40.9435,-6.9588],[40.9446,-6.9683],[40.9535,-6.9743],[40.9594,-6.9831],[40.9681,-6.9831],[40.9692,-6.9909],[40.9831,-6.9966],[41.0098,-6.9844],[41.0172,-6.9768],[41.0272,-6.9845],[41.0273,-6.9934],[41.0336,-6.9932],[41.0397,-6.9845],[41.053,-6.9768],[41.0664,-6.954],[41.0688,-6.9418],[41.0665,-6.9414],[41.0673,-6.936],[41.0615,-6.9322],[41.0603,-6.9249],[41.0613,-6.9282],[41.0678,-6.9265],[41.0781,-6.9392],[41.0868,-6.9376],[41.0913,-6.9422],[41.0988,-6.9372],[41.1029,-6.9405],[41.106,-6.9211],[41.1029,-6.9088],[41.1075,-6.9012],[41.1064,-6.8924],[41.1156,-6.8837],[41.1141,-6.8737],[41.1209,-6.8721],[41.1272,-6.8649],[41.1265,-6.8521],[41.1334,-6.8461],[41.1389,-6.832],[41.1424,-6.8308],[41.1419,-6.8143],[41.1539,-6.7972],[41.1635,-6.7993],[41.1697,-6.7921],[41.1756,-6.7906],[41.1798,-6.7994],[41.1803,-6.7903],[41.1836,-6.7924],[41.1914,-6.7882],[41.1915,-6.7843],[41.1995,-6.784],[41.1987,-6.799],[41.2041,-6.7873],[41.2289,-6.7724],[41.2413,-6.7565],[41.2676,-6.7532],[41.2736,-6.7581],[41.2804,-6.7572],[41.2771,-6.7521],[41.2795,-6.7456],[41.2849,-6.743],[41.2941,-6.7245],[41.3008,-6.7187],[41.2963,-6.7082],[41.2975,-6.703],[41.2929,-6.6972],[41.3018,-6.6923],[41.3059,-6.6794],[41.3096,-6.6789],[41.307,-6.6653],[41.3146,-6.6416],[41.3244,-6.6356],[41.3185,-6.6231],[41.3226,-6.6152],[41.3247,-6.6198],[41.3262,-6.6183],[41.3247,-6.5667],[41.3473,-6.5363],[41.3642,-6.5211],[41.3704,-6.4822],[41.3782,-6.4715],[41.3823,-6.4569],[41.3982,-6.441],[41.4256,-6.4262],[41.4295,-6.411],[41.4504,-6.3987],[41.4748,-6.3654],[41.4742,-6.358],[41.4777,-6.3599],[41.4751,-6.3552],[41.4797,-6.3545],[41.4797,-6.3483],[41.4885,-6.3381],[41.5381,-6.3247],[41.5455,-6.3315],[41.5496,-6.3257],[41.564,-6.3178],[41.5699,-6.316],[41.5743,-6.3184],[41.5731,-6.3109],[41.6049,-6.289]];

/* ---------- MAP SETUP ---------- */
const map = L.map('map', {zoomControl:false}).setView([41.53,-6.40], 10);
L.control.zoom({position:'bottomright'}).addTo(map);

const baseSatellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri, Maxar, Earthstar Geographics',
  maxZoom: 19
}).addTo(map);

const satelliteLabels = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
  maxZoom: 19, pane: 'shadowPane'
}).addTo(map);

const baseStreets = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; OpenStreetMap, &copy; CARTO',
  maxZoom: 19
});

let onSatellite = true;
function toggleBasemap(){
  onSatellite = !onSatellite;
  if(onSatellite){
    map.removeLayer(baseStreets); map.addLayer(baseSatellite); map.addLayer(satelliteLabels);
    document.getElementById('basemapLabel').textContent = "Ver mapa base";
  } else {
    map.removeLayer(baseSatellite); map.removeLayer(satelliteLabels); map.addLayer(baseStreets);
    document.getElementById('basemapLabel').textContent = "Ver satélite";
  }
}

function setInfo(html){ document.getElementById('infopanel').innerHTML = html; }

const layers = { area: L.layerGroup(), corridorA: L.layerGroup(), corridorB: L.layerGroup(), corridorAlargado: L.layerGroup(), areaProtegida: L.layerGroup() };
layers.areaProtegida.addTo(map);
layers.corridorB.addTo(map);
layers.corridorA.addTo(map);
layers.area.addTo(map);

let projectBounds = null; /* preenchido mais abaixo, depois de conhecidos todos os elementos do projeto */
function toggleLayer(name, visible){
  if(!layers[name]) return;
  if(visible) layers[name].addTo(map); else map.removeLayer(layers[name]);
  /* O Parque Natural pode ficar parcialmente fora do enquadramento inicial —
     ao ligar esta camada, ajusta a vista para mostrar o parque completo; ao
     desligá-la, volta ao enquadramento habitual do projeto. */
  if(name === 'areaProtegida'){
    if(visible){
      map.fitBounds(L.latLngBounds([...pnDouroInternacional, ...(projectBounds || [])]), {padding:[20,20]});
    } else if(projectBounds){
      map.fitBounds(L.latLngBounds(projectBounds), {padding:[20,20]});
    }
  }
}

/* ---------- ÁREA DE ESTUDO ---------- */
const areaPolygon = L.polygon(areaEstudo, {
  color:"#D9A441", weight:2.5, fillColor:"#D9A441", fillOpacity:.16
});

const areaPanelHtml = `
  <span class="kicker">Área de estudo</span>
  <h3>Central Eólica da Fronteira</h3>
  <div class="panel-block">
    <div class="panel-block-title">Enquadramento</div>
    <div class="panel-block-body">
      <div class="fact"><span class="k">Área de estudo</span><span class="v">≈ 5 893 ha</span></div>
      <div class="fact"><span class="k">Localização</span><span class="v">Miranda do Douro e Vimioso</span></div>
      <div class="fact"><span class="k">Aerogeradores</span><span class="v">35 · 4,5 MW cada · 157,5 MW total</span>
      </div>
      <div class="fact"><span class="k">Produção média anual</span><span class="v">≈ 489 GWh/ano</span></div>
      <div class="fact"><span class="k">Diâmetro do rotor</span><span class="v">até 180 m</span></div>
      <div class="fact"><span class="k">Altura do cubo</span><span class="v">até 120 m</span></div>
      <div class="fact"><span class="k">Nível sonoro máximo</span><span class="v">106 dB(A) @ hub height</span></div>
    </div>
  </div>
  <div class="flag">Projeto de hibridização com a Central Hidroelétrica de Picote: a energia eólica produzida é
    injetada na RESP através da linha e do Posto de Corte já usados por essa central. A área desenhada é a área de
    estudo definida na PDA; a implantação final dos 35 aerogeradores não ocupará a totalidade desta área, e ainda
    não há coordenadas individuais por aerogerador nesta fase.</div>
  <div class="lg-note" style="margin-top:8px;">Fonte: PDA do Projeto da Central Eólica da Fronteira, Eólica de
    Avelanoso, Unipessoal Lda., julho de 2026 (T09125_01_v3), secções 1.1 e 2.2.1, Quadro 2.1.</div>
`;
areaPolygon.bindPopup("<b>Central Eólica da Fronteira</b><br>Área de estudo ≈ 5 893 ha<br>157,5 MW · ≈ 489 GWh/ano", {maxWidth:260});
areaPolygon.on('click', () => setInfo(areaPanelHtml));
areaPolygon.addTo(layers.area);

/* ---------- CORREDORES DA LINHA ELÉTRICA (ALTERNATIVAS EM ESTUDO) ---------- */
function corridorPanelHtml(name, extra){
  return `
    <span class="kicker">Ligação elétrica — alternativa em estudo</span>
    <h3>${name}</h3>
    <div class="panel-block">
      <div class="panel-block-title">Características</div>
      <div class="panel-block-body">
        <div class="fact"><span class="k">Tensão de exploração</span><span class="v">220 kV</span></div>
        <div class="fact"><span class="k">Ligação</span><span class="v">Subestação da Central Eólica → Posto de
              Corte de Picote (REN)</span></div>
        ${extra || ""}
      </div>
    </div>
    <div class="flag">Corredor de estudo para a nova Linha Elétrica de Muito Alta Tensão (LMAT). É uma das
      alternativas em análise nesta fase de Definição de Âmbito; o traçado final da linha só será fixado no EIA.</div>
    <div class="lg-note" style="margin-top:8px;">Fonte: PDA do Projeto da Central Eólica da Fronteira, Eólica de
      Avelanoso, Unipessoal Lda., julho de 2026 (T09125_01_v3), secção 2.2.1 e Desenho 1 (Peças Desenhadas).</div>
  `;
}

const corridorALine = L.polygon(corredorA, {color:"#2F5233", weight:2, fillColor:"#2F5233", fillOpacity:.10});
corridorALine.bindPopup("<b>Corredor A</b><br>Ligação elétrica em estudo · 220 kV", {maxWidth:240});
corridorALine.on('click', () => setInfo(corridorPanelHtml("Corredor A")));
corridorALine.addTo(layers.corridorA);

const corridorBLine = L.polygon(corredorB, {color:"#2FA8C4", weight:2, fillColor:"#2FA8C4", fillOpacity:.10});
corridorBLine.bindPopup("<b>Corredor B</b><br>Ligação elétrica em estudo · 220 kV", {maxWidth:240});
corridorBLine.on('click', () => setInfo(corridorPanelHtml("Corredor B")));
corridorBLine.addTo(layers.corridorB);

const corridorAlargadoLine = L.polygon(corredorAlargado, {color:"#C4432A", weight:2, fillColor:"#C4432A", fillOpacity:.06, dashArray:"6,5"});
corridorAlargadoLine.bindPopup("<b>Corredor alargado</b><br>Zona de análise preliminar · Picote", {maxWidth:260});
corridorAlargadoLine.on('click', () => setInfo(corridorPanelHtml("Corredor alargado (análise preliminar)",
  `<div class="fact"><span class="k">Extensão de referência</span><span class="v">≈ 32,6 km</span></div>
   <div class="fact"><span class="k">Origem</span><span class="v">Zona de estudo alargada, anterior à definição dos Corredores A e B</span></div>`)));
corridorAlargadoLine.addTo(layers.corridorAlargado);

/* ---------- LIMITE DO PARQUE NATURAL (contexto) ---------- */
const pnPanelHtml = `
  <span class="kicker">Território classificado (contexto)</span>
  <h3>Parque Natural do Douro Internacional</h3>
  <div class="panel-block">
    <div class="panel-block-title">Classificação</div>
    <div class="panel-block-body">
      <div class="fact"><span class="k">Tipo</span><span class="v">Parque Natural</span></div>
      <div class="fact"><span class="k">Área total</span><span class="v">≈ 86 835 ha</span></div>
      <div class="fact"><span class="k">Diploma</span><span class="v">DL n.º 8/98, de 11 de maio</span></div>
      <div class="fact"><span class="k">Jurisdição</span><span class="v">ICNF</span></div>
    </div>
  </div>
  <div class="flag">Este limite não faz parte do projeto — está aqui apenas para contexto. A área de estudo e o
    corredor alargado deste projeto sobrepõem-se a este parque natural e a três sítios Natura 2000: ZPE "Rios Sabor
    e Maçãs" (PTZPE0037), ZPE "Douro Internacional e Vale do Rio Águeda" (PTZPE0038), ZEC "Minas de St. Adrião"
    (PTCON0042), ZEC "Rios Sabor e Maçãs" (PTCON0021) e ZEC "Douro Internacional" (PTCON0022). Não há, nesta fase de
    PDA, posições de aerogeradores para verificar ponto a ponto — apenas a área de estudo e os corredores.</div>
  <div class="lg-note" style="margin-top:8px;">Fonte: Instituto da Conservação da Natureza e das Florestas (ICNF),
    Rede Nacional de Áreas Protegidas e Rede Natura 2000 (serviços BDG/RNAP e BDG/RN2000), consultado em agosto de
    2026. Limite simplificado para visualização; para o limite oficial e exato, consultar o ICNF.</div>
`;
const pnDouroPoly = L.polygon(pnDouroInternacional, {color:"#1B5E3A", weight:3, fillColor:"#1B5E3A", fillOpacity:.18, dashArray:"6 4"});
pnDouroPoly.bindPopup("<b>Parque Natural do Douro Internacional</b><br>Território classificado (ICNF) — não faz parte do projeto", {maxWidth:280});
pnDouroPoly.on('click', () => setInfo(pnPanelHtml));
pnDouroPoly.addTo(layers.areaProtegida);

/* Enquadra o mapa com toda a área de estudo e os corredores mais recentes (A e B) visíveis */
projectBounds = [...areaEstudo, ...corredorA, ...corredorB];
map.fitBounds(L.latLngBounds(projectBounds), {padding:[20,20]});
