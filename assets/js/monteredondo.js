/* ---------- DADOS ----------
   Concessão Mineira C-130 "Monte Redondo" (areias e caulino), lugar de
   Cabeço da Vegia, freguesia e concelho de Leiria. Promotor: SORGILA –
   Sociedade de Argilas, S.A. Projeto em avaliação: ampliação da área de
   exploração dentro dos limites da concessão já existente (sem alterar a
   área total da concessão).
   Geometria extraída dos shapefiles fornecidos (projeção ETRS89/PT-TM06,
   EPSG:3763, convertida para WGS84) e simplificada (decimação de vértices)
   apenas para leveza do ficheiro; a forma geral de cada área mantém-se
   fiel à original.
   Fonte da ficha técnica e dos textos de impacte: Estudo de Impacte
   Ambiental (EIA) da Concessão Mineira C-130 "Monte Redondo" — Ampliação
   da Área de Exploração, SORGILA, S.A., versão final de novembro de 2025,
   e respetivo Resumo Não Técnico (RNT), reformulado em junho de 2026 no
   âmbito do aditamento solicitado pela Autoridade de AIA (APA). */

const concessao = [[39.925161,-8.830568],[39.926917,-8.832013],[39.926225,-8.837738],[39.923806,-8.835795],[39.921729,-8.841096],[39.919373,-8.836007],[39.919092,-8.831817],[39.914753,-8.835995],[39.911943,-8.829978],[39.916695,-8.82612],[39.917869,-8.821091],[39.918129,-8.82114],[39.918976,-8.821102],[39.925074,-8.822555],[39.925836,-8.824574],[39.926645,-8.826372],[39.925537,-8.827905],[39.925479,-8.827144],[39.92483,-8.827138],[39.924827,-8.826225],[39.924242,-8.826067],[39.922187,-8.827906],[39.922589,-8.828507],[39.922065,-8.830198],[39.922081,-8.830619],[39.922241,-8.830855],[39.922183,-8.831626],[39.922507,-8.831653],[39.922965,-8.831798],[39.923683,-8.832144],[39.923775,-8.831853],[39.923587,-8.831734],[39.923934,-8.830977],[39.925019,-8.83169],[39.925022,-8.831199],[39.925052,-8.830789],[39.925161,-8.830568]];

const N1 = [[39.920721,-8.832785],[39.921039,-8.832952],[39.920827,-8.834047],[39.919891,-8.833757],[39.919099,-8.83135],[39.919697,-8.829773],[39.919891,-8.829367],[39.920403,-8.828834],[39.922184,-8.828114],[39.921838,-8.832074],[39.920916,-8.831927],[39.920721,-8.832785]];

const N2 = [[39.920223,-8.828754],[39.920302,-8.828674],[39.920365,-8.82862],[39.92043,-8.828574],[39.920523,-8.82852],[39.920599,-8.828485],[39.920849,-8.828392],[39.921046,-8.828333],[39.921187,-8.82829],[39.921296,-8.828258],[39.921386,-8.828221],[39.921544,-8.828151],[39.921688,-8.828107],[39.921851,-8.82804],[39.921951,-8.827987],[39.922022,-8.827954],[39.922126,-8.827921],[39.922187,-8.827906],[39.922468,-8.827655],[39.92255,-8.827581],[39.922637,-8.827503],[39.922721,-8.827428],[39.922801,-8.827357],[39.922847,-8.827316],[39.923068,-8.827118],[39.923137,-8.827055],[39.923174,-8.827023],[39.923235,-8.826968],[39.923309,-8.826902],[39.923098,-8.826623],[39.921883,-8.82562],[39.921852,-8.82559],[39.921459,-8.825374],[39.921022,-8.825389],[39.92084,-8.824927],[39.920655,-8.825039],[39.920433,-8.82407],[39.918916,-8.82127],[39.916704,-8.826119],[39.91755,-8.827051],[39.918043,-8.82795],[39.918039,-8.827956],[39.918036,-8.82796],[39.918115,-8.828081],[39.918156,-8.828116],[39.918217,-8.828161],[39.918252,-8.828186],[39.918402,-8.828284],[39.918456,-8.828317],[39.918687,-8.828453],[39.918788,-8.828497],[39.918846,-8.828514],[39.918927,-8.828551],[39.919143,-8.828646],[39.919241,-8.828736],[39.919874,-8.82918],[39.919929,-8.829109],[39.919973,-8.82905],[39.920028,-8.82898],[39.920135,-8.828852],[39.920223,-8.828754]];

const AN1 = [[39.919099,-8.83135],[39.918848,-8.832051],[39.919092,-8.831816],[39.919373,-8.836007],[39.921729,-8.841095],[39.923806,-8.835795],[39.924048,-8.83599],[39.92426,-8.835349],[39.924384,-8.83452],[39.924397,-8.834072],[39.924571,-8.833467],[39.924816,-8.832987],[39.925054,-8.832035],[39.925054,-8.831713],[39.923934,-8.830977],[39.923587,-8.831733],[39.923775,-8.831852],[39.923683,-8.832144],[39.922965,-8.831797],[39.922507,-8.831652],[39.922183,-8.831626],[39.922205,-8.831337],[39.921909,-8.831265],[39.921838,-8.832074],[39.920916,-8.831927],[39.920721,-8.832785],[39.921039,-8.832952],[39.920827,-8.834047],[39.919891,-8.833757],[39.919099,-8.83135]];

const AN2 = [[39.919874,-8.82918],[39.919502,-8.828884],[39.919241,-8.828736],[39.919143,-8.828646],[39.918927,-8.828551],[39.918846,-8.828514],[39.918788,-8.828497],[39.918687,-8.828453],[39.918575,-8.828389],[39.918456,-8.828317],[39.918402,-8.828284],[39.918252,-8.828186],[39.918217,-8.828161],[39.918156,-8.828116],[39.918115,-8.828081],[39.918091,-8.828055],[39.918036,-8.82796],[39.918039,-8.827956],[39.918043,-8.82795],[39.91755,-8.827051],[39.916704,-8.826119],[39.916695,-8.826119],[39.916149,-8.826563],[39.911943,-8.829978],[39.914753,-8.835994],[39.918386,-8.832496],[39.918428,-8.832383],[39.919447,-8.829852],[39.919874,-8.82918]];

const industrial = [[39.923189,-8.826743],[39.923238,-8.826809],[39.923309,-8.826902],[39.923514,-8.826718],[39.923753,-8.826505],[39.924105,-8.826189],[39.924242,-8.826067],[39.924422,-8.826086],[39.924536,-8.826035],[39.924623,-8.825963],[39.924717,-8.82582],[39.925098,-8.825255],[39.925329,-8.82483],[39.925226,-8.824796],[39.924989,-8.824629],[39.924933,-8.824572],[39.924894,-8.82442],[39.924926,-8.82402],[39.924973,-8.823495],[39.924972,-8.823408],[39.924948,-8.823331],[39.924918,-8.823297],[39.924862,-8.823266],[39.924788,-8.823229],[39.924698,-8.823183],[39.924641,-8.823154],[39.924527,-8.823098],[39.924478,-8.823074],[39.924428,-8.823051],[39.924409,-8.823041],[39.924247,-8.822958],[39.924153,-8.822917],[39.924055,-8.82288],[39.924052,-8.822878],[39.923883,-8.822805],[39.92377,-8.822749],[39.923679,-8.822686],[39.92367,-8.822676],[39.923578,-8.822602],[39.923438,-8.822473],[39.923416,-8.822442],[39.9234,-8.822371],[39.923356,-8.822169],[39.92335,-8.822144],[39.922394,-8.821916],[39.92205,-8.821834],[39.921709,-8.822808],[39.921567,-8.823205],[39.921479,-8.823443],[39.92168,-8.82365],[39.921584,-8.823969],[39.921626,-8.82398],[39.921463,-8.824672],[39.921796,-8.825559],[39.921852,-8.82559],[39.921883,-8.82562],[39.922864,-8.826329],[39.923189,-8.826743]];

const residuos = [[39.92406,-8.824984],[39.92398,-8.824667],[39.92391,-8.824615],[39.923134,-8.825688],[39.922896,-8.825954],[39.922104,-8.826547],[39.922284,-8.827792],[39.92355,-8.826687],[39.924848,-8.825487],[39.925167,-8.824997],[39.925161,-8.824927],[39.924872,-8.824572],[39.92406,-8.824984]];

const acesso = [[39.920523,-8.828518],[39.920599,-8.828484],[39.920672,-8.828455],[39.920849,-8.828392],[39.921046,-8.828332],[39.921187,-8.82829],[39.921296,-8.828257],[39.921387,-8.828221],[39.921545,-8.82815],[39.921688,-8.828106],[39.921786,-8.828073],[39.921851,-8.82804],[39.921951,-8.827986],[39.922022,-8.827954],[39.922117,-8.827923],[39.922187,-8.827906],[39.922286,-8.828055],[39.922184,-8.828113],[39.920403,-8.828833],[39.919891,-8.829366],[39.919697,-8.829773],[39.919099,-8.831349],[39.918848,-8.832052],[39.918386,-8.832497],[39.918428,-8.832382],[39.919448,-8.829851],[39.919874,-8.82918],[39.919929,-8.829109],[39.919974,-8.829049],[39.920029,-8.828979],[39.920135,-8.828852],[39.920223,-8.828753],[39.920302,-8.828673],[39.920365,-8.828619],[39.920431,-8.828573],[39.920523,-8.828518]];

const preservar = [[39.925019,-8.831689],[39.925022,-8.831198],[39.925052,-8.830789],[39.925161,-8.830568],[39.926918,-8.832013],[39.926225,-8.837738],[39.924048,-8.83599],[39.92426,-8.835349],[39.924384,-8.83452],[39.924397,-8.834072],[39.924571,-8.833467],[39.924816,-8.832987],[39.925054,-8.832035],[39.925054,-8.831713],[39.925019,-8.831689]];

const naoint = [
[[39.92335,-8.822144],[39.925074,-8.822554],[39.925836,-8.824574],[39.926645,-8.826372],[39.925537,-8.827905],[39.925479,-8.827144],[39.92483,-8.827137],[39.924827,-8.826225],[39.924242,-8.826067],[39.924422,-8.826086],[39.924536,-8.826035],[39.924623,-8.825963],[39.924717,-8.82582],[39.925098,-8.825255],[39.925329,-8.82483],[39.925226,-8.824796],[39.924989,-8.824629],[39.924933,-8.824572],[39.924894,-8.82442],[39.924926,-8.82402],[39.924973,-8.823495],[39.924972,-8.823408],[39.924948,-8.823331],[39.924918,-8.823297],[39.924862,-8.823266],[39.924788,-8.823229],[39.924698,-8.823183],[39.924641,-8.823154],[39.924527,-8.823098],[39.924478,-8.823074],[39.924428,-8.823051],[39.924409,-8.823041],[39.924247,-8.822958],[39.924153,-8.822917],[39.924055,-8.82288],[39.924052,-8.822878],[39.923883,-8.822805],[39.92377,-8.822749],[39.923679,-8.822686],[39.92367,-8.822676],[39.923578,-8.822602],[39.923438,-8.822473],[39.923416,-8.822442],[39.9234,-8.822371],[39.923356,-8.822169],[39.92335,-8.822144]],
[[39.92205,-8.821834],[39.921709,-8.822808],[39.921567,-8.823205],[39.921071,-8.822839],[39.920522,-8.822412],[39.920238,-8.822184],[39.919347,-8.821582],[39.918976,-8.821101],[39.92205,-8.821834]],
[[39.918129,-8.82114],[39.918214,-8.821136],[39.918186,-8.8225],[39.917702,-8.8223],[39.917561,-8.822699],[39.917501,-8.822667],[39.917869,-8.82109],[39.918129,-8.82114]],
[[39.917515,-8.82434],[39.916704,-8.826119],[39.916695,-8.826119],[39.917142,-8.824205],[39.917515,-8.82434]]
];

const recuperacao = [
[[39.922286,-8.828055],[39.922184,-8.828113],[39.922063,-8.829495],[39.92196,-8.830672],[39.921908,-8.831265],[39.922205,-8.831337],[39.922241,-8.830855],[39.922081,-8.830619],[39.922065,-8.830198],[39.922589,-8.828507],[39.922286,-8.828055]],
[[39.921567,-8.823205],[39.921479,-8.823443],[39.92168,-8.82365],[39.921585,-8.823969],[39.921626,-8.82398],[39.921463,-8.824672],[39.921796,-8.825559],[39.921459,-8.825374],[39.921022,-8.825389],[39.92084,-8.824927],[39.920656,-8.825039],[39.920433,-8.82407],[39.920289,-8.823299],[39.919566,-8.822231],[39.919164,-8.821637],[39.918916,-8.82127],[39.917515,-8.82434],[39.917142,-8.824205],[39.917319,-8.823471],[39.917501,-8.822667],[39.917561,-8.822699],[39.917702,-8.8223],[39.918186,-8.8225],[39.918192,-8.822178],[39.918214,-8.821136],[39.918976,-8.821101],[39.919219,-8.821416],[39.919347,-8.821582],[39.9197,-8.821821],[39.919996,-8.822021],[39.920238,-8.822184],[39.920522,-8.822412],[39.920914,-8.822717],[39.921062,-8.822832],[39.921175,-8.822916],[39.921334,-8.823033],[39.921477,-8.823138],[39.921567,-8.823205]]
];

const anexos = [
[[39.924007,-8.824575],[39.924026,-8.824534],[39.924007,-8.82452],[39.923989,-8.824561],[39.924007,-8.824575]],
[[39.923976,-8.824649],[39.924007,-8.824575],[39.923988,-8.82456],[39.923955,-8.824633],[39.923976,-8.824649]],
[[39.923562,-8.82478],[39.923697,-8.824545],[39.923599,-8.82445],[39.923463,-8.824685],[39.923562,-8.82478]],
[[39.923616,-8.823832],[39.923507,-8.823728],[39.923436,-8.823855],[39.923149,-8.823589],[39.922896,-8.824012],[39.923259,-8.824347],[39.923311,-8.82426],[39.923358,-8.824302],[39.923616,-8.823832]],
[[39.923592,-8.823172],[39.923669,-8.822903],[39.923145,-8.822647],[39.923067,-8.822918],[39.923592,-8.823172]]
];

/* ---------- MAP SETUP ---------- */
const map = L.map('map', {zoomControl:false}).setView([39.9205,-8.828], 15);
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

const layers = {
  concessao: L.layerGroup(), N1: L.layerGroup(), N2: L.layerGroup(), AN1: L.layerGroup(), AN2: L.layerGroup(),
  industrial: L.layerGroup(), residuos: L.layerGroup(), acesso: L.layerGroup(), preservar: L.layerGroup(),
  naoint: L.layerGroup(), recuperacao: L.layerGroup(), anexos: L.layerGroup()
};
Object.values(layers).forEach(l => l.addTo(map));

function toggleLayer(name, visible){
  if(!layers[name]) return;
  if(visible) layers[name].addTo(map); else map.removeLayer(layers[name]);
}

/* ---------- PAINEL GENÉRICO POR ÁREA ---------- */
function areaPanelHtml(kicker, title, factsHtml, flagHtml, sourceNote){
  return `
    <span class="kicker">${kicker}</span>
    <h3>${title}</h3>
    <div class="panel-block">
      <div class="panel-block-title">Características</div>
      <div class="panel-block-body">${factsHtml}</div>
    </div>
    ${flagHtml ? `<div class="flag">${flagHtml}</div>` : ""}
    <div class="lg-note" style="margin-top:8px;">${sourceNote}</div>
  `;
}

const SRC = "Fonte: EIA da Concessão Mineira C-130 \"Monte Redondo\" — Ampliação da Área de Exploração, SORGILA, S.A., nov.2025, e Resumo Não Técnico, jun.2026, secções 5.1 a 5.2 e Quadro 2.";

/* Concessão mineira (limite total) */
const concessaoPoly = L.polygon(concessao, {color:"#8A6D3B", weight:2.5, fillColor:"#8A6D3B", fillOpacity:.05, dashArray:"6 4"});
concessaoPoly.bindPopup("<b>Concessão mineira C-130 \"Monte Redondo\"</b><br>Área total ≈ 141,17 ha<br>Não é alterada por este projeto", {maxWidth:260});
concessaoPoly.on('click', () => setInfo(areaPanelHtml(
  "Limite da concessão mineira",
  "Concessão C-130 \"Monte Redondo\"",
  `<div class="fact"><span class="k">Área total da concessão</span><span class="v">141,17 ha</span></div>
   <div class="fact"><span class="k">Titular</span><span class="v">SORGILA – Sociedade de Argilas, S.A.</span></div>
   <div class="fact"><span class="k">Recurso mineral</span><span class="v">Areias siliciosas e caulino</span></div>
   <div class="fact"><span class="k">Ano de atribuição</span><span class="v">2012</span></div>`,
  "Este projeto não altera a área nem a configuração da concessão mineira. A ampliação em avaliação diz respeito apenas à área de exploração autorizada dentro deste limite.",
  SRC
)));
concessaoPoly.addTo(layers.concessao);

/* Áreas licenciadas N1 / N2 (já autorizadas, situação atual) */
function licenciadaPanel(nome, ha, situacao){
  return areaPanelHtml(
    "Área de exploração já autorizada",
    `Núcleo ${nome}`,
    `<div class="fact"><span class="k">Área autorizada</span><span class="v">≈ ${ha} ha</span></div>
     <div class="fact"><span class="k">Situação atual</span><span class="v">${situacao}</span></div>`,
    "Área já em exploração ao abrigo do Plano de Lavra aprovado em 2011; não é objeto de pedido de nova autorização neste projeto.",
    SRC
  );
}
const N1Poly = L.polygon(N1, {color:"#B5651D", weight:2, fillColor:"#B5651D", fillOpacity:.22});
N1Poly.bindPopup("<b>Núcleo 1 (N1)</b><br>Área autorizada ≈ 10,22 ha<br>Em exploração", {maxWidth:240});
N1Poly.on('click', () => setInfo(licenciadaPanel("1 (N1)", "10,22", "Em exploração")));
N1Poly.addTo(layers.N1);

const N2Poly = L.polygon(N2, {color:"#C97B3D", weight:2, fillColor:"#C97B3D", fillOpacity:.22});
N2Poly.bindPopup("<b>Núcleo 2 (N2)</b><br>Área autorizada ≈ 23,25 ha<br>Já explorada, em recuperação paisagística", {maxWidth:260});
N2Poly.on('click', () => setInfo(licenciadaPanel("2 (N2)", "23,25", "Já explorada; em recuperação paisagística")));
N2Poly.addTo(layers.N2);

/* Ampliações AN1 / AN2 — o que este projeto pede */
function ampliacaoPanel(nome, ha){
  return areaPanelHtml(
    "Ampliação pedida neste projeto",
    `Área de ampliação ${nome}`,
    `<div class="fact"><span class="k">Área de ampliação</span><span class="v">≈ ${ha} ha</span></div>
     <div class="fact"><span class="k">O que pede</span><span class="v">Autorização para alargar a área de exploração, dentro dos limites já existentes da concessão</span></div>`,
    "É esta área — mais a AN correspondente — que representa o pedido concreto submetido a este EIA. A concessão mineira em si não se altera.",
    SRC
  );
}
const AN1Poly = L.polygon(AN1, {color:"#D9A441", weight:2, fillColor:"#D9A441", fillOpacity:.32});
AN1Poly.bindPopup("<b>Ampliação do Núcleo 1 (AN1)</b><br>≈ 29,74 ha", {maxWidth:240});
AN1Poly.on('click', () => setInfo(ampliacaoPanel("1 (AN1)", "29,74")));
AN1Poly.addTo(layers.AN1);

const AN2Poly = L.polygon(AN2, {color:"#E0B85E", weight:2, fillColor:"#E0B85E", fillOpacity:.32});
AN2Poly.bindPopup("<b>Ampliação do Núcleo 2 (AN2)</b><br>≈ 38,80 ha", {maxWidth:240});
AN2Poly.on('click', () => setInfo(ampliacaoPanel("2 (AN2)", "38,80")));
AN2Poly.addTo(layers.AN2);

/* Estabelecimento industrial */
const industrialPoly = L.polygon(industrial, {color:"#5B5B5B", weight:2, fillColor:"#5B5B5B", fillOpacity:.28});
industrialPoly.bindPopup("<b>Estabelecimento industrial</b><br>Lavaria e instalações de processamento", {maxWidth:260});
industrialPoly.on('click', () => setInfo(areaPanelHtml(
  "Instalações fixas",
  "Área do estabelecimento industrial",
  `<div class="fact"><span class="k">Função</span><span class="v">Lavaria e processamento de areias e caulino</span></div>
   <div class="fact"><span class="k">Outras infraestruturas</span><span class="v">Edifício social/administrativo, oficina, cobertos de armazenamento</span></div>`,
  "Zona onde o material extraído é lavado, classificado e preparado para expedição. É também aqui que se concentram os potenciais focos de ruído e poeira associados ao processamento.",
  SRC
)));
industrialPoly.addTo(layers.industrial);

/* Área de instalação de resíduos */
const residuosPoly = L.polygon(residuos, {color:"#A33B3B", weight:2, fillColor:"#A33B3B", fillOpacity:.28});
residuosPoly.bindPopup("<b>Área de instalação de resíduos</b><br>Armazenamento temporário de resíduos industriais", {maxWidth:260});
residuosPoly.on('click', () => setInfo(areaPanelHtml(
  "Gestão de resíduos",
  "Área de instalação de resíduos",
  `<div class="fact"><span class="k">Tipo de resíduos</span><span class="v">Resíduos de manutenção de equipamentos (óleos, sucata)</span></div>
   <div class="fact"><span class="k">Destino</span><span class="v">Armazenamento temporário; envio periódico para unidades externas licenciadas</span></div>`,
  "Segundo o EIA, a mina não gera efluentes líquidos industriais; os resíduos sólidos resultam sobretudo da manutenção de máquinas e são armazenados em piso impermeabilizado antes de saírem para tratamento externo.",
  SRC
)));
residuosPoly.addTo(layers.residuos);

/* Acesso comum */
const acessoPoly = L.polygon(acesso, {color:"#3D6B8C", weight:2, fillColor:"#3D6B8C", fillOpacity:.22});
acessoPoly.bindPopup("<b>Caminho de acesso comum</b><br>Liga a mina à EN-109", {maxWidth:240});
acessoPoly.on('click', () => setInfo(areaPanelHtml(
  "Acessibilidade",
  "Área do caminho de acesso comum",
  `<div class="fact"><span class="k">Função</span><span class="v">Acesso viário entre a mina e a EN-109</span></div>
   <div class="fact"><span class="k">Tráfego médio diário estimado</span><span class="v">≈ 109 camiões/dia</span></div>`,
  "É por este caminho que circulam os camiões de expedição, antes de entrarem na EN-109 em direção a Leiria (S) ou Figueira da Foz (N), com acesso à A-17 a poucos km.",
  SRC
)));
acessoPoly.addTo(layers.acesso);

/* Área não explorada a preservar */
const preservarPoly = L.polygon(preservar, {color:"#2F7D4F", weight:2, fillColor:"#2F7D4F", fillOpacity:.30});
preservarPoly.bindPopup("<b>Área não explorada a preservar</b><br>≈ 11,48 ha — inclui o ribeiro do Regato", {maxWidth:280});
preservarPoly.on('click', () => setInfo(areaPanelHtml(
  "Área protegida dentro da concessão",
  "Área não explorada a preservar",
  `<div class="fact"><span class="k">Área</span><span class="v">≈ 11,48 ha</span></div>
   <div class="fact"><span class="k">O que contém</span><span class="v">Linha de água (ribeiro do Regato) e faixa envolvente</span></div>`,
  "O EIA assegura explicitamente a preservação desta linha de água: a exploração não avançará sobre o seu quadrante de drenagem.",
  SRC
)));
preservarPoly.addTo(layers.preservar);

/* Área não intervencionada */
const naoIntColor = "#6B8E4E";
const naoIntPolys = naoint.map((ring,i) => {
  const p = L.polygon(ring, {color:naoIntColor, weight:1.5, fillColor:naoIntColor, fillOpacity:.18});
  p.bindPopup("<b>Área não intervencionada</b><br>Zona de defesa/faixa junto ao limite da concessão", {maxWidth:260});
  p.on('click', () => setInfo(areaPanelHtml(
    "Zona de defesa",
    "Área não intervencionada",
    `<div class="fact"><span class="k">Área total (4 polígonos)</span><span class="v">≈ 8,77 ha</span></div>
     <div class="fact"><span class="k">Função</span><span class="v">Faixa de salvaguarda junto ao limite da concessão e a caminhos públicos</span></div>`,
    "Corresponde às distâncias de defesa que a lei exige manter entre a frente de exploração e os terrenos vizinhos ou caminhos públicos; nunca chega a ser escavada.",
    SRC
  )));
  p.addTo(layers.naoint);
  return p;
});

/* Área intervencionada em recuperação */
const recupColor = "#4E7D3B";
const recupPolys = recuperacao.map(ring => {
  const p = L.polygon(ring, {color:recupColor, weight:2, fillColor:recupColor, fillOpacity:.30});
  p.bindPopup("<b>Área intervencionada em recuperação</b><br>≈ 5,90 ha — reposição de solos e vegetação", {maxWidth:280});
  p.on('click', () => setInfo(areaPanelHtml(
    "Recuperação paisagística em curso",
    "Área intervencionada em recuperação",
    `<div class="fact"><span class="k">Área</span><span class="v">≈ 5,90 ha</span></div>
     <div class="fact"><span class="k">O que está a acontecer</span><span class="v">Reposição de solos armazenados em pargas e reconstituição do coberto vegetal</span></div>`,
    "Faz parte do Plano Ambiental e de Recuperação Paisagística (PARP): zonas já esgotadas estão a ser reflorestadas antes do fim da vida da mina, não só no encerramento final.",
    SRC
  )));
  p.addTo(layers.recuperacao);
  return p;
});

/* Anexos mineiros (pequenas estruturas/infraestruturas de apoio) */
const anexosColor = "#7B5EA3";
const anexosPolys = anexos.map(ring => {
  const p = L.polygon(ring, {color:anexosColor, weight:1.5, fillColor:anexosColor, fillOpacity:.4});
  p.bindPopup("<b>Anexo mineiro</b><br>Pequena estrutura de apoio à exploração", {maxWidth:240});
  p.on('click', () => setInfo(areaPanelHtml(
    "Infraestrutura de apoio",
    "Anexo mineiro",
    `<div class="fact"><span class="k">Exemplos</span><span class="v">Furos de captação de água, posto de transformação, depósito de combustível</span></div>`,
    "Pequenas estruturas de apoio disseminadas pela área industrial, identificadas separadamente no levantamento cartográfico da mina.",
    SRC
  )));
  p.addTo(layers.anexos);
  return p;
});

/* Enquadra o mapa com a concessão completa */
map.fitBounds(L.polygon(concessao).getBounds(), {padding:[24,24]});
