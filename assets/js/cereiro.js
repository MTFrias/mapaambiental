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

const layers = { area: L.layerGroup(), corridorA: L.layerGroup(), corridorB: L.layerGroup() };
layers.corridorB.addTo(map);
layers.corridorA.addTo(map);
layers.area.addTo(map);

function toggleLayer(name, visible){
  if(!layers[name]) return;
  if(visible) layers[name].addTo(map); else map.removeLayer(layers[name]);
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

/* Enquadra o mapa com toda a área de estudo e os dois corredores visíveis */
const allBounds = L.latLngBounds([...studyArea, ...corridorA, ...corridorB]);
map.fitBounds(allBounds, {padding:[20,20]});
