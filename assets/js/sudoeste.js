/* ---------- DADOS ----------
   Parque Eólico do Sudoeste + BESS. Promotor: Hyperion Renewables Sines,
   Unipessoal Lda. Ligação de autoconsumo industrial ao Data Center Sines.

   AVISO IMPORTANTE SOBRE A GEOMETRIA: ao contrário do projeto do Cereiro,
   não foi fornecido nenhum shapefile para este projeto — apenas o relatório
   da PDA em PDF (com mapas em formato de imagem, sem coordenadas extraíveis
   como texto). Os três "núcleos" (São Bartolomeu, Vale Miguel, Monte das
   Oliveiras) são por isso representados como círculos aproximados,
   centrados numa localização indicativa junto às freguesias mencionadas no
   relatório (Santiago do Cacém, Santa Cruz e São Bartolomeu da Serra, e
   Abela), não como o limite real da Área de Estudo. Ver a página de
   limitações deste projeto. */

const nucleos = [
  { nome: "São Bartolomeu", centro: [38.017, -8.640], raioM: 1400 },
  { nome: "Vale Miguel", centro: [38.000, -8.660], raioM: 1200 },
  { nome: "Monte das Oliveiras", centro: [37.985, -8.700], raioM: 1300 }
];

/* ---------- MAP SETUP ---------- */
const map = L.map('map', {zoomControl:false}).setView([38.00,-8.66], 12);
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

const layers = { area: L.layerGroup() };
layers.area.addTo(map);

function toggleLayer(name, visible){
  if(!layers[name]) return;
  if(visible) layers[name].addTo(map); else map.removeLayer(layers[name]);
}

const areaPanelHtml = `
  <span class="kicker">Área de estudo (aproximada)</span>
  <h3>Parque Eólico do Sudoeste</h3>
  <div class="panel-block">
    <div class="panel-block-title">Enquadramento</div>
    <div class="panel-block-body">
      <div class="fact"><span class="k">Área de estudo</span><span class="v">≈ 1 098,4 ha (3 núcleos)</span></div>
      <div class="fact"><span class="k">Localização</span><span class="v">Santiago do Cacém (Santa Cruz, São
            Bartolomeu da Serra, Abela)</span></div>
      <div class="fact"><span class="k">Aerogeradores</span><span class="v">23 · Vestas V162 · 6,0 MW cada</span>
      </div>
      <div class="fact"><span class="k">Potência instalada</span><span class="v">138,0 MW</span></div>
      <div class="fact"><span class="k">Produção média anual</span><span class="v">≈ 386,4 GWh/ano</span></div>
      <div class="fact"><span class="k">BESS</span><span class="v">200 MWh · 50 MW</span></div>
    </div>
  </div>
  <div class="flag">A energia produzida destina-se a autoconsumo industrial do Data Center Sines, não à Rede
    Elétrica de Serviço Público. A solução de ligação (60 kV, ou 150/400 kV) ainda está numa fase inicial de
    definição.</div>
  <div class="flag" style="border-color:#8A5A1E;">Localização aproximada: não foi fornecido um shapefile para este
    projeto. Os círculos no mapa marcam apenas a zona geral de cada núcleo (São Bartolomeu, Vale Miguel, Monte das
    Oliveiras), não o limite exato da Área de Estudo nem a posição real dos 23 aerogeradores. Ver "Limitações do
    projeto" na barra lateral.</div>
  <div class="lg-note" style="margin-top:8px;">Fonte: PDA do Projeto do Parque Eólico do Sudoeste, Hyperion
    Renewables Sines, Unipessoal Lda., julho de 2026 (T01126_01_v1), secções 1.1, 1.3, 2.2.1 e Quadro 2.2.</div>
`;

function nucleoPanelHtml(nome){
  return `
    <span class="kicker">Núcleo (aproximado)</span>
    <h3>${nome}</h3>
    <div class="panel-block">
      <div class="panel-block-body">
        <div class="fact"><span class="k">Faz parte de</span><span class="v">Área de Estudo do Parque Eólico do
              Sudoeste</span></div>
      </div>
    </div>
    <div class="flag" style="border-color:#8A5A1E;">Posição indicativa: sem shapefile disponível, este círculo marca
      apenas a zona geral do núcleo "${nome}", não o seu limite exato.</div>
  `;
}

const nucleoMarkers = [];
nucleos.forEach(n => {
  const circle = L.circle(n.centro, {
    radius: n.raioM, color:"#D9A441", weight:2.5, fillColor:"#D9A441", fillOpacity:.16, dashArray:"6,5"
  });
  circle.bindTooltip(n.nome, {permanent:true, direction:'center', className:'ag-label'});
  circle.bindPopup(`<b>${n.nome}</b><br>Núcleo da Área de Estudo (posição aproximada)`, {maxWidth:240});
  circle.on('click', () => setInfo(nucleoPanelHtml(n.nome)));
  circle.addTo(layers.area);
  nucleoMarkers.push(circle);
});

/* Clique fora dos núcleos mostra a ficha geral do projeto */
map.on('click', (e) => {
  const insideAny = nucleos.some(n => map.distance(e.latlng, n.centro) <= n.raioM);
  if(!insideAny) setInfo(areaPanelHtml);
});

setInfo(areaPanelHtml);

const allBounds = L.latLngBounds(nucleos.map(n => n.centro));
map.fitBounds(allBounds, {padding:[80,80]});
