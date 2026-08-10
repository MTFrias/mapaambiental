/* ---------- DADOS ----------
   Central Solar Fotovoltaica de Cereiro (hibridização com a Central
   Hidroelétrica de Bemposta). Promotor: Solar de Travanca, Unipessoal Lda.
   Geometria extraída dos shapefiles fornecidos (CSFCereiro.shp,
   CorredoresCereiro.shp; projeção ETRS89 / PT-TM06, convertida para WGS84)
   e simplificada (decimação de vértices) apenas para leveza do ficheiro;
   a forma geral das áreas mantém-se fiel à original.
   Fonte da ficha técnica: PDA do Projeto da CSF de Cereiro, Solar de
   Travanca, Unipessoal Lda., julho de 2026 (T09025_01_v3). */

const studyArea = [
[41.415289,-6.499316],[41.410706,-6.493833],[41.407307,-6.487482],[41.403372,-6.482198],[41.402895,-6.482086],
[41.40249,-6.48133],[41.401969,-6.480016],[41.401647,-6.479231],[41.401344,-6.478336],[41.401209,-6.477887],
[41.400479,-6.477039],[41.400304,-6.476851],[41.399933,-6.476617],[41.399505,-6.476417],[41.39908,-6.476314],
[41.398646,-6.476356],[41.397749,-6.477028],[41.397119,-6.475944],[41.396243,-6.474941],[41.395163,-6.474535],
[41.395192,-6.473635],[41.396082,-6.473659],[41.398136,-6.475146],[41.399647,-6.475263],[41.400401,-6.475579],
[41.400275,-6.472159],[41.399726,-6.471489],[41.399376,-6.472189],[41.398336,-6.47168],[41.397987,-6.470873],
[41.397149,-6.470513],[41.396446,-6.470187],[41.396061,-6.469467],[41.395613,-6.469683],[41.394599,-6.470214],
[41.394279,-6.469704],[41.39381,-6.470288],[41.392828,-6.469645],[41.39232,-6.470578],[41.391496,-6.470465],
[41.391704,-6.471992],[41.392914,-6.473674],[41.392641,-6.474704],[41.392152,-6.475336],[41.391961,-6.47603],
[41.391876,-6.47738],[41.391257,-6.477393],[41.39084,-6.478704],[41.391346,-6.479259],[41.392003,-6.480669],
[41.392206,-6.481263],[41.392351,-6.481945],[41.392283,-6.482709],[41.392059,-6.483734],[41.391725,-6.484463],
[41.392803,-6.485255],[41.394163,-6.483396],[41.394588,-6.481833],[41.395315,-6.482237],[41.395605,-6.481372],
[41.395819,-6.483702],[41.396266,-6.484576],[41.397133,-6.486005],[41.398532,-6.487325],[41.399532,-6.48601],
[41.399019,-6.484497],[41.399352,-6.483621],[41.399695,-6.483381],[41.40057,-6.48545],[41.400636,-6.486309],
[41.400364,-6.487446],[41.401741,-6.488252],[41.402091,-6.487698],[41.402294,-6.487429],[41.402499,-6.487427],
[41.40256,-6.487449],[41.40303,-6.488038],[41.403861,-6.489102],[41.40375,-6.48993],[41.403582,-6.490109],
[41.402838,-6.489736],[41.401517,-6.489846],[41.400481,-6.490285],[41.399903,-6.491344],[41.399953,-6.492323],
[41.40068,-6.492979],[41.400886,-6.493843],[41.399867,-6.495279],[41.39898,-6.497909],[41.398842,-6.499507],
[41.399743,-6.499576],[41.400824,-6.500868],[41.402408,-6.500215],[41.403592,-6.500646],[41.405182,-6.503642],
[41.405014,-6.504874],[41.404591,-6.505927],[41.404192,-6.507164],[41.403631,-6.508282],[41.404399,-6.508723],
[41.406249,-6.508892],[41.408022,-6.510167],[41.408151,-6.511084],[41.408996,-6.512044],[41.409312,-6.513202],
[41.409607,-6.514483],[41.409759,-6.5154],[41.410138,-6.516096],[41.411083,-6.51595],[41.413332,-6.514912],
[41.413886,-6.514331],[41.414041,-6.514008],[41.414102,-6.512234],[41.414134,-6.511119],[41.414141,-6.511013],
[41.414464,-6.51028],[41.414887,-6.510565],[41.414786,-6.512025],[41.414693,-6.512333],[41.414689,-6.512835],
[41.414466,-6.513473],[41.414533,-6.514584],[41.414118,-6.516325],[41.416825,-6.517034],[41.418263,-6.515772],
[41.418988,-6.514802],[41.420274,-6.51428],[41.421259,-6.513734],[41.42224,-6.512881],[41.423064,-6.512308],
[41.423704,-6.511863],[41.424421,-6.511937],[41.425539,-6.510329],[41.426504,-6.507344],[41.426734,-6.50565],
[41.427365,-6.502934],[41.426353,-6.503236],[41.424953,-6.503792],[41.423555,-6.504594],[41.421977,-6.503859],
[41.420551,-6.502606],[41.415289,-6.499316]
];

const corridorA = [
[41.307516,-6.48482],[41.303361,-6.47313],[41.303364,-6.47283],[41.303339,-6.472532],[41.303285,-6.472241],
[41.303205,-6.471961],[41.303098,-6.471696],[41.302968,-6.471451],[41.302815,-6.47123],[41.302643,-6.471036],
[41.302453,-6.470873],[41.30225,-6.470741],[41.302036,-6.470645],[41.301814,-6.470585],[41.301589,-6.470563],
[41.301363,-6.470578],[41.30114,-6.47063],[41.300924,-6.47072],[41.300719,-6.470844],[41.300526,-6.471001],
[41.30035,-6.471189],[41.300193,-6.471405],[41.300058,-6.471646],[41.299947,-6.471907],[41.299861,-6.472184],
[41.299802,-6.472474],[41.299771,-6.47277],[41.299445,-6.478556],[41.299454,-6.478839],[41.299488,-6.479119],
[41.299548,-6.479391],[41.299631,-6.479652],[41.299736,-6.479898],[41.299864,-6.480126],[41.305316,-6.488768],
[41.305478,-6.488968],[41.305657,-6.489141],[41.30585,-6.489283],[41.306056,-6.489393],[41.306269,-6.489468],
[41.306489,-6.489508],[41.323035,-6.494407],[41.32316,-6.494447],[41.328405,-6.495849],[41.328604,-6.495872],
[41.328803,-6.495866],[41.342926,-6.494401],[41.365495,-6.490081],[41.383341,-6.494351],[41.383566,-6.494367],
[41.383792,-6.494345],[41.384014,-6.494286],[41.384228,-6.494191],[41.384431,-6.49406],[41.384621,-6.493897],
[41.384794,-6.493703],[41.394008,-6.480419],[41.394151,-6.480186],[41.39427,-6.479931],[41.394364,-6.479658],
[41.394432,-6.479372],[41.394472,-6.479076],[41.394484,-6.478776],[41.394468,-6.478477],[41.394423,-6.478183],
[41.394351,-6.477898],[41.394253,-6.477628],[41.39413,-6.477376],[41.393984,-6.477146],[41.393817,-6.476943],
[41.393633,-6.476769],[41.393434,-6.476627],[41.393223,-6.476519],[41.393003,-6.476447],[41.392779,-6.476413],
[41.392553,-6.476416],[41.392329,-6.476456],[41.39211,-6.476534],[41.391901,-6.476647],[41.391704,-6.476795],
[41.391522,-6.476973],[41.391359,-6.477181],[41.365847,-6.485308],[41.365656,-6.485276],[41.365463,-6.485272],
[41.36527,-6.485295],[41.328773,-6.491078],[41.311707,-6.485277],[41.311534,-6.485226],[41.311358,-6.485197],
[41.307516,-6.48482]
];

/* ---------- ÁREA PROTEGIDA (contexto, não faz parte do projeto) ----------
   Limite do Parque Natural do Douro Internacional, obtido a partir do
   serviço oficial do ICNF (sigservices.icnf.pt, camada BDG/RNAP), reprojetado
   para WGS84 e simplificado (~200m de tolerância) apenas para leveza do
   ficheiro. Mostrado para contexto: a área de estudo da central solar
   sobrepõe-se a este parque natural e aos sítios Natura 2000 "Douro
   Internacional" (ZEC) e "Douro Internacional e Vale do Rio Águeda" (ZPE). */
const pnDouroInternacional = [[41.6049,-6.289],[41.628,-6.273],[41.6238,-6.2661],[41.633,-6.2545],[41.607,-6.2358],[41.5944,-6.2014],[41.5745,-6.1901],[41.5591,-6.2119],[41.5507,-6.2173],[41.5426,-6.2176],[41.5216,-6.2368],[41.5159,-6.246],[41.5138,-6.258],[41.5001,-6.2511],[41.4972,-6.2556],[41.4984,-6.2656],[41.4946,-6.268],[41.4866,-6.262],[41.4871,-6.2692],[41.4789,-6.2842],[41.4663,-6.2862],[41.4497,-6.3055],[41.4362,-6.2949],[41.4288,-6.3],[41.4192,-6.3104],[41.4154,-6.3186],[41.416,-6.3276],[41.4107,-6.3328],[41.4051,-6.3324],[41.3978,-6.3177],[41.3896,-6.3155],[41.3858,-6.3176],[41.3865,-6.3258],[41.3781,-6.3513],[41.3826,-6.3611],[41.3934,-6.3663],[41.3872,-6.3769],[41.3855,-6.3885],[41.3785,-6.3931],[41.3697,-6.3934],[41.3632,-6.3861],[41.3638,-6.3785],[41.3592,-6.3771],[41.35,-6.3921],[41.3481,-6.4149],[41.3336,-6.4265],[41.3261,-6.4184],[41.3201,-6.434],[41.3109,-6.4396],[41.306,-6.4372],[41.2985,-6.4517],[41.301,-6.4694],[41.2914,-6.4869],[41.2849,-6.4915],[41.2752,-6.4787],[41.2661,-6.4964],[41.2642,-6.511],[41.2733,-6.5163],[41.2757,-6.5222],[41.2673,-6.5299],[41.258,-6.5471],[41.2455,-6.5519],[41.239,-6.5719],[41.2413,-6.5848],[41.252,-6.5865],[41.2551,-6.5913],[41.2437,-6.5995],[41.2495,-6.6075],[41.2427,-6.6298],[41.2475,-6.6486],[41.2352,-6.6533],[41.2336,-6.6612],[41.2096,-6.6916],[41.1998,-6.689],[41.1932,-6.6924],[41.1921,-6.6997],[41.188,-6.6968],[41.1807,-6.7006],[41.1771,-6.7083],[41.1732,-6.7087],[41.1679,-6.7163],[41.162,-6.7302],[41.1486,-6.7409],[41.1312,-6.7707],[41.1236,-6.7705],[41.1032,-6.7552],[41.0878,-6.77],[41.0766,-6.7737],[41.0572,-6.7903],[41.0452,-6.8087],[41.0363,-6.8094],[41.0283,-6.8345],[41.0268,-6.8677],[41.0383,-6.916],[41.0295,-6.9314],[41.0167,-6.9317],[41.011,-6.9247],[41.0024,-6.9214],[40.9988,-6.9086],[40.9897,-6.9034],[40.9811,-6.8905],[40.9608,-6.8756],[40.9578,-6.8674],[40.9497,-6.8593],[40.9362,-6.8526],[40.9312,-6.8534],[40.9243,-6.8477],[40.9026,-6.8491],[40.8856,-6.8305],[40.8848,-6.8223],[40.8811,-6.8202],[40.8825,-6.8092],[40.861,-6.802],[40.8455,-6.802],[40.8419,-6.8122],[40.8434,-6.8257],[40.8405,-6.8265],[40.8369,-6.821],[40.8259,-6.8246],[40.8075,-6.8171],[40.7972,-6.8166],[40.7834,-6.8252],[40.7829,-6.8532],[40.7796,-6.8583],[40.7818,-6.8729],[40.7875,-6.8681],[40.8038,-6.8653],[40.8123,-6.8594],[40.8224,-6.8611],[40.8297,-6.8664],[40.8309,-6.8727],[40.835,-6.8702],[40.8336,-6.8841],[40.8476,-6.8983],[40.855,-6.9006],[40.8647,-6.9093],[40.8651,-6.8915],[40.8707,-6.8884],[40.8809,-6.9014],[40.8799,-6.9069],[40.8844,-6.9136],[40.8896,-6.9125],[40.8942,-6.9198],[40.8963,-6.9172],[40.8974,-6.9203],[40.9144,-6.9257],[40.9243,-6.939],[40.9252,-6.9458],[40.9321,-6.9456],[40.9342,-6.9534],[40.9435,-6.9588],[40.9446,-6.9683],[40.9535,-6.9743],[40.9594,-6.9831],[40.9681,-6.9831],[40.9692,-6.9909],[40.9831,-6.9966],[41.0098,-6.9844],[41.0172,-6.9768],[41.0272,-6.9845],[41.0273,-6.9934],[41.0336,-6.9932],[41.0397,-6.9845],[41.053,-6.9768],[41.0664,-6.954],[41.0688,-6.9418],[41.0665,-6.9414],[41.0673,-6.936],[41.0615,-6.9322],[41.0603,-6.9249],[41.0613,-6.9282],[41.0678,-6.9265],[41.0781,-6.9392],[41.0868,-6.9376],[41.0913,-6.9422],[41.0988,-6.9372],[41.1029,-6.9405],[41.106,-6.9211],[41.1029,-6.9088],[41.1075,-6.9012],[41.1064,-6.8924],[41.1156,-6.8837],[41.1141,-6.8737],[41.1209,-6.8721],[41.1272,-6.8649],[41.1265,-6.8521],[41.1334,-6.8461],[41.1389,-6.832],[41.1424,-6.8308],[41.1419,-6.8143],[41.1539,-6.7972],[41.1635,-6.7993],[41.1697,-6.7921],[41.1756,-6.7906],[41.1798,-6.7994],[41.1803,-6.7903],[41.1836,-6.7924],[41.1914,-6.7882],[41.1915,-6.7843],[41.1995,-6.784],[41.1987,-6.799],[41.2041,-6.7873],[41.2289,-6.7724],[41.2413,-6.7565],[41.2676,-6.7532],[41.2736,-6.7581],[41.2804,-6.7572],[41.2771,-6.7521],[41.2795,-6.7456],[41.2849,-6.743],[41.2941,-6.7245],[41.3008,-6.7187],[41.2963,-6.7082],[41.2975,-6.703],[41.2929,-6.6972],[41.3018,-6.6923],[41.3059,-6.6794],[41.3096,-6.6789],[41.307,-6.6653],[41.3146,-6.6416],[41.3244,-6.6356],[41.3185,-6.6231],[41.3226,-6.6152],[41.3247,-6.6198],[41.3262,-6.6183],[41.3247,-6.5667],[41.3473,-6.5363],[41.3642,-6.5211],[41.3704,-6.4822],[41.3782,-6.4715],[41.3823,-6.4569],[41.3982,-6.441],[41.4256,-6.4262],[41.4295,-6.411],[41.4504,-6.3987],[41.4748,-6.3654],[41.4742,-6.358],[41.4777,-6.3599],[41.4751,-6.3552],[41.4797,-6.3545],[41.4797,-6.3483],[41.4885,-6.3381],[41.5381,-6.3247],[41.5455,-6.3315],[41.5496,-6.3257],[41.564,-6.3178],[41.5699,-6.316],[41.5743,-6.3184],[41.5731,-6.3109],[41.6049,-6.289]];

const corridorB = [
[41.300513,-6.472674],[41.300521,-6.472972],[41.300556,-6.473266],[41.300619,-6.473552],[41.300708,-6.473826],
[41.300823,-6.474082],[41.30096,-6.474318],[41.301119,-6.474529],[41.301296,-6.474712],[41.301489,-6.474865],
[41.301694,-6.474985],[41.30191,-6.475069],[41.302131,-6.475118],[41.302356,-6.475129],[41.30848,-6.474431],
[41.308661,-6.474397],[41.308839,-6.47434],[41.332608,-6.468375],[41.332804,-6.468321],[41.332995,-6.468238],
[41.34619,-6.460259],[41.367909,-6.471178],[41.368089,-6.471298],[41.368278,-6.47139],[41.368473,-6.471454],
[41.382538,-6.47389],[41.392148,-6.478434],[41.392369,-6.478498],[41.392594,-6.478526],[41.39282,-6.478515],
[41.393044,-6.478467],[41.39326,-6.478383],[41.393468,-6.478263],[41.393662,-6.478109],[41.39384,-6.477924],
[41.394,-6.477711],[41.394138,-6.477473],[41.394252,-6.477215],[41.394341,-6.476939],[41.394404,-6.47665],
[41.394438,-6.476353],[41.394445,-6.476053],[41.394423,-6.475754],[41.394373,-6.475462],[41.394295,-6.475179],
[41.394192,-6.474912],[41.394064,-6.474665],[41.393914,-6.47444],[41.393744,-6.474242],[41.393557,-6.474074],
[41.393355,-6.473939],[41.383566,-6.469301],[41.383383,-6.469228],[41.383194,-6.469182],[41.358311,-6.458368],
[41.358125,-6.458244],[41.357929,-6.45815],[41.357726,-6.458087],[41.346152,-6.455404],[41.345937,-6.455389],
[41.345721,-6.455408],[41.345509,-6.455462],[41.345303,-6.455549],[41.331824,-6.463701],[41.314373,-6.467178],
[41.314209,-6.467232],[41.302157,-6.470364],[41.301942,-6.470406],[41.301731,-6.470483],[41.301529,-6.470593],
[41.301339,-6.470735],[41.301163,-6.470906],[41.301003,-6.471104],[41.300863,-6.471326],[41.300745,-6.471569],
[41.300649,-6.471829],[41.300578,-6.472103],[41.300533,-6.472386],[41.300513,-6.472674]
];

/* ---------- MAP SETUP ---------- */
const map = L.map('map', {zoomControl:false}).setView([41.36,-6.49], 11);
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

const layers = { area: L.layerGroup(), corridorA: L.layerGroup(), corridorB: L.layerGroup(), areaProtegida: L.layerGroup() };
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

/* ---------- ÁREA DE ESTUDO DA CENTRAL SOLAR ---------- */
const areaPolygon = L.polygon(studyArea, {
  color:"#D9A441", weight:2.5, fillColor:"#D9A441", fillOpacity:.18
});

const areaPanelHtml = `
  <span class="kicker">Área de estudo</span>
  <h3>Central Solar Fotovoltaica de Cereiro</h3>
  <div class="panel-block">
    <div class="panel-block-title">Enquadramento</div>
    <div class="panel-block-body">
      <div class="fact"><span class="k">Área de estudo</span><span class="v">≈ 532 ha</span></div>
      <div class="fact"><span class="k">Localização</span><span class="v">Bemposta (Miranda do Douro / Mogadouro)</span></div>
      <div class="fact"><span class="k">Potência instalada</span><span class="v">104 MWp</span></div>
      <div class="fact"><span class="k">Produção média anual</span><span class="v">≈ 205 GWh/ano</span></div>
      <div class="fact"><span class="k">Módulos fotovoltaicos</span><span class="v">171 892 (605 Wp cada)</span></div>
      <div class="fact"><span class="k">Inversores</span><span class="v">314 (330 000 VA cada)</span></div>
      <div class="fact"><span class="k">Postos de transformação</span><span class="v">18 (0,8/30 kV)</span></div>
      <div class="fact"><span class="k">Subestação</span><span class="v">30/220 kV</span></div>
    </div>
  </div>
  <div class="flag">Projeto de hibridização com a Central Hidroelétrica de Bemposta: a energia solar produzida é
    injetada na RESP através da linha elétrica e da subestação hidroelétrica já existentes. A área desenhada é a
    área de estudo definida na PDA; a implantação final da Central será mais reduzida.</div>
  <div class="lg-note" style="margin-top:8px;">Fonte: PDA do Projeto da CSF de Cereiro, Solar de Travanca, Unipessoal
    Lda., julho de 2026 (T09025_01_v3), secções 1.1 e 2.2.1, Quadro 2.1.</div>
`;
areaPolygon.bindPopup("<b>Central Solar Fotovoltaica de Cereiro</b><br>Área de estudo ≈ 532 ha<br>104 MWp · ≈ 205 GWh/ano", {maxWidth:260});
areaPolygon.on('click', () => setInfo(areaPanelHtml));
areaPolygon.addTo(layers.area);

/* ---------- CORREDORES DA LINHA ELÉTRICA (ALTERNATIVAS EM ESTUDO) ---------- */
function corridorPanelHtml(name, area, color){
  return `
    <span class="kicker">Ligação elétrica — alternativa em estudo</span>
    <h3>${name}</h3>
    <div class="panel-block">
      <div class="panel-block-title">Características</div>
      <div class="panel-block-body">
        <div class="fact"><span class="k">Área do corredor</span><span class="v">≈ ${area} ha</span></div>
        <div class="fact"><span class="k">Tensão de exploração</span><span class="v">220 kV</span></div>
        <div class="fact"><span class="k">Ligação</span><span class="v">Subestação da Central Solar → Subestação da
              Central Hidroelétrica de Bemposta</span></div>
      </div>
    </div>
    <div class="flag">Corredor de estudo para a nova Linha Elétrica de Muito Alta Tensão (LMAT). É uma das
      alternativas em análise nesta fase de Definição de Âmbito; o traçado final da linha só será fixado no EIA.</div>
    <div class="lg-note" style="margin-top:8px;">Fonte: PDA do Projeto da CSF de Cereiro, Solar de Travanca,
      Unipessoal Lda., julho de 2026 (T09025_01_v3), secção 2.2.2 e Desenho 1 (Peças Desenhadas).</div>
  `;
}

const corridorALine = L.polygon(corridorA, {color:"#2F5233", weight:2, fillColor:"#2F5233", fillOpacity:.12});
corridorALine.bindPopup("<b>Corredor A</b><br>Ligação elétrica em estudo · ≈ 475 ha · 220 kV", {maxWidth:240});
corridorALine.on('click', () => setInfo(corridorPanelHtml("Corredor A", 475, "#2F5233")));
corridorALine.addTo(layers.corridorA);

const corridorBLine = L.polygon(corridorB, {color:"#2FA8C4", weight:2, fillColor:"#2FA8C4", fillOpacity:.12});
corridorBLine.bindPopup("<b>Corredor B</b><br>Ligação elétrica em estudo · ≈ 434 ha · 220 kV", {maxWidth:240});
corridorBLine.on('click', () => setInfo(corridorPanelHtml("Corredor B", 434, "#2FA8C4")));
corridorBLine.addTo(layers.corridorB);

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
  <div class="flag">Este limite não faz parte do projeto — está aqui apenas para contexto. A área de estudo da
    Central Solar de Cereiro sobrepõe-se a este parque natural e também aos sítios Natura 2000 "Douro Internacional"
    (ZEC, PTCON0022) e "Douro Internacional e Vale do Rio Águeda" (ZPE, PTZPE0038). Isto significa que qualquer
    licenciamento terá de ser avaliado também à luz das regras de conservação da natureza aplicáveis a este território,
    não apenas do procedimento de AIA.</div>
  <div class="lg-note" style="margin-top:8px;">Fonte: Instituto da Conservação da Natureza e das Florestas (ICNF),
    Rede Nacional de Áreas Protegidas (serviço BDG/RNAP), consultado em agosto de 2026. Limite simplificado para
    visualização; para o limite oficial e exato, consultar o ICNF.</div>
`;
const pnDouroPoly = L.polygon(pnDouroInternacional, {color:"#1B5E3A", weight:3, fillColor:"#1B5E3A", fillOpacity:.18, dashArray:"6 4"});
pnDouroPoly.bindPopup("<b>Parque Natural do Douro Internacional</b><br>Território classificado (ICNF) — não faz parte do projeto", {maxWidth:280});
pnDouroPoly.on('click', () => setInfo(pnPanelHtml));
pnDouroPoly.addTo(layers.areaProtegida);

/* Enquadra o mapa com toda a área de estudo e os dois corredores visíveis */
projectBounds = [...studyArea, ...corridorA, ...corridorB];
map.fitBounds(L.latLngBounds(projectBounds), {padding:[20,20]});
