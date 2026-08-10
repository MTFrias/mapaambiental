/* ---------- DADOS ----------
   Projeto BigBATT (EDP Gestão da Produção de Energia, S.A.). Sistema de
   armazenamento de energia em baterias (BESS), Vala do Carregado, Alenquer.
   Geometria extraída do ficheiro GeoPackage fornecido (EIA_BigBATT_v0.gpkg,
   projeção ETRS89/PT-TM06, convertida para WGS84). Coordenadas dos recetores
   R1/R2 convertidas a partir do Quadro 6.22 do EIA (PT-TM06/ETRS89).
   Fonte da ficha técnica e dos valores de ruído: EIA do Projeto BigBATT,
   maio de 2026 (T07025_02_v1 / T07025_03_v1), secções 3, 4, 6.13 e 8.15,
   Quadros 6.21–6.23 e 8.12–8.16. */

const areaEstudo = [[39.013404, -8.956295], [39.013375, -8.95631], [39.013252, -8.956399], [39.013141, -8.956512], [39.013047, -8.956626], [39.012952, -8.956759], [39.012875, -8.956909], [39.012817, -8.957072], [39.012779, -8.957245], [39.012763, -8.957423], [39.012768, -8.957602], [39.012806, -8.958023], [39.012879, -8.958826], [39.012906, -8.959004], [39.012955, -8.959175], [39.013025, -8.959334], [39.013113, -8.959477], [39.013217, -8.959601], [39.013336, -8.959702], [39.013465, -8.959777], [39.013602, -8.959826], [39.013743, -8.959847], [39.013885, -8.959838], [39.014024, -8.959802], [39.014157, -8.959737], [39.01428, -8.959647], [39.014391, -8.959533], [39.014399, -8.959523], [39.01587, -8.957748], [39.015898, -8.957713], [39.016227, -8.957279], [39.016286, -8.957193], [39.016297, -8.957175], [39.016376, -8.957026], [39.016384, -8.957007], [39.016444, -8.956844], [39.01645, -8.956823], [39.016489, -8.95665], [39.016493, -8.956628], [39.01651, -8.95645], [39.016511, -8.956428], [39.016507, -8.956248], [39.016505, -8.956226], [39.016479, -8.956049], [39.016475, -8.956028], [39.016428, -8.955858], [39.016421, -8.955838], [39.016354, -8.95568], [39.016344, -8.955661], [39.016303, -8.955587], [39.015768, -8.954691], [39.015725, -8.954613], [39.015714, -8.954593], [39.015631, -8.95445], [39.015624, -8.954436], [39.015532, -8.954293], [39.015423, -8.954171], [39.0153, -8.954072], [39.015166, -8.954], [39.015025, -8.953957], [39.014934, -8.953948], [39.014888, -8.953883], [39.014779, -8.953768], [39.014657, -8.953677], [39.014525, -8.953611], [39.014387, -8.953573], [39.014246, -8.953563], [39.014105, -8.953581], [39.013969, -8.953627], [39.013839, -8.9537], [39.01372, -8.953798], [39.013316, -8.954192], [39.013211, -8.954313], [39.013122, -8.954453], [39.01305, -8.954609], [39.012999, -8.954778], [39.012969, -8.954955], [39.012961, -8.955136], [39.012975, -8.955316], [39.013012, -8.955492], [39.013068, -8.955657], [39.013145, -8.95581], [39.013374, -8.956196], [39.013381, -8.95623], [39.013404, -8.956295]];
const areaImplantacao = [[39.014266, -8.954717], [39.013862, -8.955111], [39.014233, -8.955736], [39.014233, -8.955736], [39.014275, -8.955807], [39.014231, -8.955849], [39.014648, -8.956551], [39.014727, -8.956474], [39.0149, -8.956764], [39.014738, -8.956922], [39.014615, -8.956754], [39.013925, -8.957584], [39.013758, -8.957355], [39.013663, -8.957469], [39.013701, -8.95789], [39.013774, -8.958693], [39.013782, -8.958683], [39.015252, -8.956908], [39.015582, -8.956474], [39.015592, -8.956456], [39.015601, -8.956437], [39.015607, -8.956416], [39.015611, -8.956394], [39.015612, -8.956372], [39.01561, -8.95635], [39.015605, -8.956328], [39.015598, -8.956308], [39.015589, -8.956289], [39.015043, -8.955376], [39.01499, -8.955281], [39.01489, -8.955108], [39.014886, -8.955098], [39.014637, -8.955342], [39.014266, -8.954717]];
const subestacaoPoly = [[39.014125, -8.955535], [39.014245, -8.955738], [39.014635, -8.955357], [39.014264, -8.954732], [39.013874, -8.955113], [39.014082, -8.955463], [39.014125, -8.955535]];
const batteryCoords = [[39.014929, -8.955553], [39.014959, -8.955603], [39.014989, -8.955653], [39.015024, -8.955712], [39.015053, -8.955762], [39.014959, -8.956345], [39.014988, -8.956395], [39.015018, -8.956445], [39.015053, -8.956504], [39.015083, -8.956554], [39.015112, -8.956604], [39.013935, -8.958175], [39.013971, -8.958132], [39.014013, -8.958082], [39.014049, -8.958039], [39.014085, -8.957996], [39.014127, -8.957945], [39.014163, -8.957902], [39.014199, -8.957859], [39.014241, -8.957808], [39.014277, -8.957765], [39.014312, -8.957722], [39.014355, -8.957671], [39.01439, -8.957628], [39.014426, -8.957585], [39.014468, -8.957535], [39.014504, -8.957492], [39.01454, -8.957449], [39.014582, -8.957398], [39.014618, -8.957355], [39.014654, -8.957312], [39.014696, -8.957261], [39.014732, -8.957218], [39.014767, -8.957175], [39.01481, -8.957124], [39.014846, -8.957081], [39.014881, -8.957038], [39.014924, -8.956988], [39.014959, -8.956945], [39.014995, -8.956902], [39.014507, -8.95593], [39.014537, -8.95598], [39.014566, -8.95603], [39.014601, -8.956089], [39.014631, -8.956139], [39.014661, -8.956189], [39.014696, -8.956248], [39.014726, -8.956298], [39.014755, -8.956348], [39.015083, -8.955812], [39.013937, -8.957887], [39.013973, -8.957844], [39.014009, -8.957802], [39.014051, -8.957751], [39.014087, -8.957708], [39.014122, -8.957665], [39.014165, -8.957614], [39.0142, -8.957571], [39.014236, -8.957528], [39.014278, -8.957477], [39.014314, -8.957434], [39.01435, -8.957391], [39.014392, -8.957341], [39.014428, -8.957298], [39.014464, -8.957255], [39.014506, -8.957204], [39.014542, -8.957161], [39.014577, -8.957118], [39.01462, -8.957067], [39.014655, -8.957024], [39.014691, -8.956981], [39.015147, -8.956663], [39.015177, -8.956713], [39.015207, -8.956763], [39.014413, -8.955771], [39.014442, -8.955821], [39.014472, -8.955871], [39.014667, -8.955817], [39.014697, -8.955867], [39.014726, -8.955917], [39.014762, -8.955976], [39.014791, -8.956026], [39.014821, -8.956076]];

/* Subestação (transformador) aproximado ao centróide do polígono */
const subCentroid = (() => {
  const lat = subestacaoPoly.reduce((s,p)=>s+p[0],0)/subestacaoPoly.length;
  const lon = subestacaoPoly.reduce((s,p)=>s+p[1],0)/subestacaoPoly.length;
  return [lat, lon];
})();

/* Recetores sensíveis oficiais do EIA (Quadros 6.21–6.23 e 8.12–8.16) */
const officialReceptors = [
  { id:"R1", coords:[39.00992872652829,-8.958370262960104],
    residual:{Ld:58.5,Le:52.6,Ln:51.1,Lden:59.5}, particular:{Ld:39.9,Le:41.5,Ln:42.6},
    ambiente:{Ld:58.6,Le:52.9,Ln:51.7,Lden:59.8}, limite:{Lden:65,Ln:55} },
  { id:"R2", coords:[39.00897737498116,-8.959155814367884],
    residual:{Ld:49.9,Le:48.7,Ln:44.2,Lden:51.5}, particular:{Ld:37.3,Le:38.9,Ln:40.0},
    ambiente:{Ld:50.1,Le:49.1,Ln:45.6,Lden:53.2}, limite:{Lden:65,Ln:55} }
];

/* ---------- MAP SETUP ---------- */
const map = L.map('map', {zoomControl:false}).setView([39.013,-8.957], 16);
L.control.zoom({position:'bottomright'}).addTo(map);

const baseSatellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri, Maxar, Earthstar Geographics', maxZoom: 19
}).addTo(map);
const satelliteLabels = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
  maxZoom: 19, pane: 'shadowPane'
}).addTo(map);
const baseStreets = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; OpenStreetMap, &copy; CARTO', maxZoom: 19
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
function escapeHtml(str){ const d=document.createElement('div'); d.textContent=String(str); return d.innerHTML; }

const layers = { area:L.layerGroup(), impl:L.layerGroup(), baterias:L.layerGroup(), sub:L.layerGroup(), receptors:L.layerGroup() };
Object.values(layers).forEach(l => l.addTo(map));
function toggleLayer(name, visible){
  if(!layers[name]) return;
  if(visible) layers[name].addTo(map); else map.removeLayer(layers[name]);
}

/* ---------- MODELO DE PROPAGAÇÃO SONORA (fonte pontual, espalhamento esférico) ----------
   Lp(d) = Lw - 20*log10(d) - 11  (atenuação por divergência geométrica em campo livre,
   fórmula clássica de acústica ambiental). Somam-se energeticamente as 83 baterias (86,0
   dB(A) cada) e a subestação/transformador (91,0 dB(A)), aproximado ao centróide do
   polígono da subestação. Os 28 sistemas de conversão (PCS, 83,5 dB(A) cada) não têm
   coordenada própria nos dados fornecidos e não são incluídos nesta soma — ver página de
   limitações. Testado contra os 2 recetores oficiais do EIA (Quadro 8.14): a estimativa
   do ruído particular (Ld) ficou a 0,0 dB de R1 e a 0,8 dB de R2, valores muito próximos
   do modelo oficial (IMMI/CNOSSOS-EU). */
const BATTERY_LW = 86.0;
const SUB_LW = 91.0;
const sources = [...batteryCoords.map(c => ({coords:c, lw:BATTERY_LW})), {coords:subCentroid, lw:SUB_LW}];

function haversine(a, b){
  const R = 6371000;
  const toRad = x => x*Math.PI/180;
  const dLat = toRad(b[0]-a[0]), dLon = toRad(b[1]-a[1]);
  const h = Math.sin(dLat/2)**2 + Math.cos(toRad(a[0]))*Math.cos(toRad(b[0]))*Math.sin(dLon/2)**2;
  return 2*R*Math.asin(Math.sqrt(h));
}
function combineNoise(...levels){
  return 10*Math.log10(levels.reduce((e,l)=>e+Math.pow(10,l/10),0));
}
/* Duas barras horizontais comparando o ruído sem e com o projeto, com o
   aumento em dB(A) destacado — usada tanto para os recetores oficiais como
   para qualquer ponto testado no mapa. */
function compareBarsHtml(before, after, increase, max=65){
  const wBefore = Math.max(4, Math.min(100, (before/max)*100));
  const wAfter = Math.max(4, Math.min(100, (after/max)*100));
  const incColor = increase >= 3 ? "#C4432A" : increase >= 1 ? "#D9A441" : "#4A7A55";
  return `
    <div class="compare-wrap">
      <div class="compare-row">
        <span class="compare-label">Sem projeto</span>
        <div class="compare-track"><div class="compare-fill compare-before" style="width:${wBefore}%"></div></div>
        <span class="compare-val">${before.toFixed(1)}</span>
      </div>
      <div class="compare-row">
        <span class="compare-label">Com projeto</span>
        <div class="compare-track"><div class="compare-fill compare-after" style="width:${wAfter}%"></div></div>
        <span class="compare-val">${after.toFixed(1)}</span>
      </div>
      <div class="compare-increase" style="color:${incColor};">+${increase.toFixed(1)} dB(A) por causa do projeto</div>
    </div>`;
}

/* Barra de zona (sensível 55 / mista 65), sem marca da OMS: a recomendação
   da OMS de Lden≤45 usada no mapa do Paiva é específica para ruído de
   parques eólicos, não se aplica a este projeto (armazenamento em
   baterias), por isso não é reutilizada aqui. */
function zoneGaugeHtml(value, limiteSensivel, limiteMista){
  const max = limiteMista + 10;
  const pctSensivel = Math.min(100, (limiteSensivel/max)*100);
  const pctMista = Math.min(100, (limiteMista/max)*100);
  const pctValue = Math.max(2, Math.min(100, (value/max)*100));
  return `
    <div class="gauge-wrap gauge-compact">
      <div class="gauge-track">
        <div class="gauge-zone-sens" style="width:${pctSensivel}%"></div>
        <div class="gauge-zone-mista" style="left:${pctSensivel}%; width:${pctMista-pctSensivel}%"></div>
        <div class="gauge-zone-over" style="left:${pctMista}%; width:${100-pctMista}%"></div>
        <div class="gauge-marker" style="left:${pctValue}%;" title="${value.toFixed(1)} dB(A)"></div>
      </div>
      <div class="gauge-ticks">
        <span style="left:${pctSensivel}%;">sensível<br>${limiteSensivel}</span>
        <span style="left:${pctMista}%;" class="tick-mista">mista<br>${limiteMista}</span>
      </div>
    </div>`;
}

function legalZoneGaugeHtml(value, limiteSensivel, limiteMista, label, legalLimit){
  const max = limiteMista + 10;
  const pctSensivel = Math.min(100, (limiteSensivel/max)*100);
  const pctMista = Math.min(100, (limiteMista/max)*100);
  const pctValue = Math.max(2, Math.min(100, (value/max)*100));
  const cumpreLegal = legalLimit === null ? null : value <= legalLimit;
  const cumpreSensivel = value <= limiteSensivel;
  return `
    <div class="gauge-wrap">
      <div class="zone-verdict ${cumpreLegal === null || cumpreLegal ? 'zone-ok' : 'zone-bad'}">
        <div class="zone-verdict-icon">${cumpreLegal === null || cumpreLegal ? '✓' : '✗'}</div>
        <div>
          <div class="zone-verdict-title">${label}</div>
          <div class="zone-verdict-text">${legalLimit !== null ? `${value.toFixed(1)} dB(A), ${cumpreLegal ? "dentro do limite legal" : "acima do limite legal"} aplicável.` : "Estimativa fora de recetor oficial: esta barra não atribui um limite legal local."}</div>
        </div>
      </div>
      <div class="gauge-track">
        <div class="gauge-zone-sens" style="width:${pctSensivel}%"></div>
        <div class="gauge-zone-mista" style="left:${pctSensivel}%; width:${pctMista-pctSensivel}%"></div>
        <div class="gauge-zone-over" style="left:${pctMista}%; width:${100-pctMista}%"></div>
        <div class="gauge-marker" style="left:${pctValue}%;" title="${value.toFixed(1)} dB(A)"></div>
      </div>
      <div class="gauge-ticks">
        <span style="left:${pctSensivel}%;">sensível*<br>${limiteSensivel}</span>
        <span style="left:${pctMista}%;" class="tick-mista">mista<br>${limiteMista}</span>
      </div>
      <div class="ref-note">*Zona sensível: limite mais apertado (habitações puramente residenciais). Não é a classificação aplicada aqui (a zona é mista), mas serve de comparação: com este valor, ${cumpreSensivel ? "cumpriria também esse limite mais apertado" : "não cumpriria esse limite mais apertado, só o de zona mista"}.</div>
    </div>`;
}

/* ---------- MODELO DE RUÍDO POR PERÍODO ----------
   O modelo de fonte pontual devolve um único valor (equivalente ao Ld). Os
   desvios entre períodos no EIA vêm das diferentes percentagens de
   condições meteorológicas favoráveis à propagação (50% dia, 75%
   entardecer, 100% noite — Diretrizes CNOSSOS-EU, APA 2023), não da
   potência das fontes, que é assumida constante. Nos 2 recetores oficiais,
   essa diferença é de +1,6 dB (Le-Ld) e +2,7 dB (Ln-Ld) em ambos os casos —
   por isso são usados aqui como desvios fixos para qualquer ponto do mapa. */
const LE_OFFSET = 1.6, LN_OFFSET = 2.7;
function particularNoiseAt(point){
  let energy = 0;
  sources.forEach(s => {
    const d = Math.max(1, haversine(point, s.coords));
    const lp = s.lw - 20*Math.log10(d) - 11;
    energy += Math.pow(10, lp/10);
  });
  return energy > 0 ? 10*Math.log10(energy) : -100;
}
function ldenFrom(ld, le, ln){
  return 10*Math.log10((12*Math.pow(10,ld/10) + 4*Math.pow(10,(le+5)/10) + 8*Math.pow(10,(ln+10)/10))/24);
}

/* ---------- ÁREAS ---------- */
L.polygon(areaEstudo, {color:"#D9A441", weight:2.5, fillColor:"#D9A441", fillOpacity:.12})
  .bindPopup("<b>Área de estudo do EIA</b>")
  .on('click', () => setInfo(`
    <span class="kicker">Área de estudo</span><h3>Projeto BigBATT</h3>
    <div class="flag">Área definida no EIA para caracterização ambiental; a implantação real do projeto (≈2,81 ha) é bastante mais pequena e está inteiramente dentro desta área.</div>
  `)).addTo(layers.area);

L.polygon(areaImplantacao, {color:"#2F5233", weight:2.5, fillColor:"#2F5233", fillOpacity:.18})
  .bindPopup("<b>Área de implantação</b><br>≈ 2,81 ha")
  .on('click', () => setInfo(`
    <span class="kicker">Área de implantação</span><h3>Projeto BigBATT</h3>
    <div class="panel-block"><div class="panel-block-body">
      <div class="fact"><span class="k">Área</span><span class="v">≈ 2,81 ha</span></div>
      <div class="fact"><span class="k">Local</span><span class="v">Terrenos da antiga Central Termoelétrica do Carregado</span></div>
      <div class="fact"><span class="k">Uso anterior</span><span class="v">Industrial (central a fuelóleo, desativada em 2012)</span></div>
    </div></div>
    <div class="flag">Terrenos já infraestruturados e de uso industrial consolidado, contíguos à Central Termoelétrica do Ribatejo, o que evita a ocupação de solo agrícola ou natural.</div>
  `)).addTo(layers.impl);

L.polygon(subestacaoPoly, {color:"#C4432A", weight:2.5, fillColor:"#C4432A", fillOpacity:.25})
  .bindPopup("<b>Subestação</b><br>30/400 kV · fonte de ruído: 91,0 dB(A) (LW)")
  .on('click', () => setInfo(`
    <span class="kicker">Infraestrutura elétrica</span><h3>Subestação</h3>
    <div class="panel-block"><div class="panel-block-body">
      <div class="fact"><span class="k">Tensão</span><span class="v">30/400 kV</span></div>
      <div class="fact"><span class="k">Potência sonora (LW)</span><span class="v">91,0 dB(A)</span></div>
      <div class="fact"><span class="k">Ligação à RESP</span><span class="v">Subterrânea, via Central Termoelétrica do Ribatejo</span></div>
    </div></div>
  `)).addTo(layers.sub);

batteryCoords.forEach((c,i) => {
  L.circleMarker(c, {radius:4, color:"#4A6670", weight:1.5, fillColor:"#4A6670", fillOpacity:.85})
    .bindPopup(`<b>Contentor de baterias #${i+1}</b><br>Potência sonora (LW): 86,0 dB(A)`)
    .on('click', () => setInfo(`
      <span class="kicker">Fonte de ruído</span><h3>Contentor de baterias #${i+1}</h3>
      <div class="fact"><span class="k">Potência sonora (LW)</span><span class="v">86,0 dB(A)</span></div>
      <div class="flag">Sistema de refrigeração das baterias: principal fonte de ruído do projeto na fase de exploração. O funcionamento depende da temperatura ambiente, sendo menos intenso à noite e no inverno; a modelação oficial assume, de forma conservadora, potência máxima constante.</div>
    `))
    .addTo(layers.baterias);
});

/* ---------- RECETORES OFICIAIS ---------- */
function receptorPanelHtml(r){
  const incLden = Math.round((r.ambiente.Lden - r.residual.Lden)*10)/10;
  const incLn = Math.round((r.ambiente.Ln - r.residual.Ln)*10)/10;
  return `
    <span class="kicker">Recetor sensível oficial do EIA</span>
    <h3>${r.id}</h3>
    <div class="panel-block">
      <div class="panel-block-title">De dia (Lden)</div>
      <div class="panel-block-body">
        <div class="mp-night-row"><span class="mp-night-vals">${r.residual.Lden.toFixed(1)} → ${r.ambiente.Lden.toFixed(1)} dB(A)</span>
        <span class="mp-night-inc" style="color:${incLden>=3?'#C4432A':incLden>=1?'#D9A441':'#4A7A55'};">+${incLden.toFixed(1)} dB(A)</span></div>
        ${legalZoneGaugeHtml(r.ambiente.Lden, 55, 65, `Zona oficialmente aplicada: Mista (limite ${r.limite.Lden} dB(A) Lden)`, r.limite.Lden)}
      </div>
    </div>
    <div class="panel-block">
      <div class="panel-block-title">À noite (Ln)</div>
      <div class="panel-block-body">
        <div class="mp-night-row"><span class="mp-night-vals">${r.residual.Ln.toFixed(1)} → ${r.ambiente.Ln.toFixed(1)} dB(A)</span>
        <span class="mp-night-inc" style="color:${incLn>=3?'#C4432A':incLn>=1?'#D9A441':'#4A7A55'};">+${incLn.toFixed(1)} dB(A)</span></div>
        ${legalZoneGaugeHtml(r.ambiente.Ln, 45, 55, `Face ao limite de zona Mista (${r.limite.Ln} dB(A) Ln)`, r.limite.Ln)}
      </div>
    </div>
    <div class="lg-note" style="margin-top:8px;">"Residual" é o ruído medido no local antes do projeto (11–13 de junho de 2025); "com projeto" é a soma logarítmica do residual com o ruído do projeto, obtido por modelação IMMI/CNOSSOS-EU no EIA. Fonte: EIA, Quadros 6.22, 6.23, 8.14 e 8.15.</div>
  `;
}
let lastReceptorMarker = null;
officialReceptors.forEach(r => {
  const marker = L.circleMarker(r.coords, {radius:9, color:"#2FA8C4", weight:2.5, fillColor:"#FFFFFF", fillOpacity:.95});
  marker.bindTooltip(r.id, {permanent:true, direction:'right', offset:[6,0], className:'ra-label'});
  marker.bindPopup(`<b>${r.id}</b> (dado oficial do EIA)<br>Lden: ${r.residual.Lden} → ${r.ambiente.Lden} dB(A)<br>Ln: ${r.residual.Ln} → ${r.ambiente.Ln} dB(A)`, {maxWidth:260});
  marker.on('click', () => {
    lastReceptorMarker = marker;
    setInfo(receptorPanelHtml(r));
    updateDbScale(r.ambiente.Lden, "de dia (Lden), no recetor oficial " + r.id + " (com o projeto)");
  });
  marker.addTo(layers.receptors);
});

/* ---------- ESCALA DE REFERÊNCIA (dB) — conhecimento acústico geral ---------- */
const DB_REFS = [
  {db:20, label:"Sussurro", full:"Sussurro, a 1 metro"},
  {db:40, label:"Quarto calmo", full:"Quarto sossegado, à noite"},
  {db:55, label:"Conversa", full:"Conversa normal, a 1 metro"},
  {db:70, label:"Aspirador", full:"Aspirador, num quarto"},
  {db:80, label:"Trânsito", full:"Trânsito urbano intenso"},
  {db:90, label:"Motor diesel", full:"Motor diesel, de perto"},
];
const DB_MIN=0, DB_MAX=100, SCALE_W=280, SCALE_H=128;
function xForDb(db){ return 10 + ((db-DB_MIN)/(DB_MAX-DB_MIN))*(SCALE_W-20); }
function buildDbScale(){
  const barY=36, barH=14;
  const grad = `<stop offset="0%" stop-color="#4A7A55"/><stop offset="45%" stop-color="#D9A441"/><stop offset="70%" stop-color="#C4432A"/><stop offset="100%" stop-color="#7A2418"/>`;
  const ticks = DB_REFS.map(r=>`<line x1="${xForDb(r.db)}" y1="${barY-5}" x2="${xForDb(r.db)}" y2="${barY+barH+5}" stroke="#6B6B5C" stroke-width="1.2"/>`).join('');
  const labels = DB_REFS.map((r,i)=>{
    const x=xForDb(r.db), y=barY+barH+18+(i%2)*28;
    return `<line x1="${x}" y1="${barY+barH+5}" x2="${x}" y2="${y-9}" stroke="#C7C4B0" stroke-width="1" stroke-dasharray="1,2"/>
      <text x="${x}" y="${y}" font-size="9.5" font-weight="600" fill="#2A362F" font-family="IBM Plex Mono, monospace" text-anchor="middle">${r.db}</text>
      <text x="${x}" y="${y+11}" font-size="8.5" fill="#5C6058" font-family="IBM Plex Sans, sans-serif" text-anchor="middle">${r.label}</text>`;
  }).join('');
  document.getElementById('dbScaleHolder').innerHTML = `
    <svg viewBox="0 0 ${SCALE_W} ${SCALE_H}" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="dbGrad" x1="0" y1="0" x2="1" y2="0">${grad}</linearGradient></defs>
      <rect x="10" y="${barY}" width="${SCALE_W-20}" height="${barH}" rx="3" fill="url(#dbGrad)"/>
      ${ticks}${labels}
      <polygon id="dbIndicator" points="0,0 0,0 0,0" fill="#2F5233" stroke="#fff" stroke-width="1" style="display:none;"/>
      <line id="dbIndicatorLine" x1="0" y1="0" x2="0" y2="0" stroke="#2F5233" stroke-width="2.2" style="display:none;"/>
    </svg>`;
}
buildDbScale();
function updateDbScale(db, context){
  const clamped = Math.max(DB_MIN, Math.min(DB_MAX, db));
  const x = xForDb(clamped);
  const barY=36, barH=14;
  const ind = document.getElementById('dbIndicator'), line = document.getElementById('dbIndicatorLine');
  if(ind){ ind.setAttribute('points', `${x-7},${barY-16} ${x+7},${barY-16} ${x},${barY-5}`); ind.style.display='block'; }
  if(line){ line.setAttribute('x1',x); line.setAttribute('x2',x); line.setAttribute('y1',barY-3); line.setAttribute('y2',barY+barH+3); line.style.display='block'; }
  const nearest = DB_REFS.reduce((b,r)=>Math.abs(r.db-db)<Math.abs(b.db-db)?r:b, DB_REFS[0]);
  document.getElementById('dbScaleReadout').innerHTML = `<b>${db<20?"< 20":Math.round(db)} dB(A)</b> ${context||""}, parecido com: ${nearest.full.toLowerCase()}.`;
}

/* ---------- CLIQUE EM QUALQUER PONTO: TESTE DE RUÍDO ---------- */
let measureMarker = null;
let measureLine = null;
function testPoint(latlng){
  const here = [latlng.lat, latlng.lng];
  const particularLd = particularNoiseAt(here);
  const particularLe = particularLd < -50 ? particularLd : particularLd + LE_OFFSET;
  const particularLn = particularLd < -50 ? particularLd : particularLd + LN_OFFSET;

  let nearest = officialReceptors[0], best = Infinity;
  officialReceptors.forEach(r => { const d = haversine(here, r.coords); if(d < best){ best = d; nearest = r; } });

  const ambLd = particularLd < -50 ? nearest.residual.Ld : combineNoise(nearest.residual.Ld, particularLd);
  const ambLe = particularLe < -50 ? nearest.residual.Le : combineNoise(nearest.residual.Le, particularLe);
  const ambLn = particularLn < -50 ? nearest.residual.Ln : combineNoise(nearest.residual.Ln, particularLn);
  const ambLden = ldenFrom(ambLd, ambLe, ambLn);
  const backgroundLden = ldenFrom(nearest.residual.Ld, nearest.residual.Le, nearest.residual.Ln);
  const increaseLden = Math.round((ambLden - backgroundLden)*10)/10;
  const increaseLn = Math.round((ambLn - nearest.residual.Ln)*10)/10;

  /* Ranking das 3 fontes de ruído mais próximas (baterias e/ou subestação),
     à semelhança da lista de aerogeradores mais próximos no mapa do Paiva. */
  const rankedSources = sources
    .map(s => ({ coords: s.coords, label: s.lw === SUB_LW ? "Subestação" : `Bateria #${batteryCoords.findIndex(c=>c===s.coords)+1}`, dist: haversine(here, s.coords) }))
    .sort((a,b) => a.dist - b.dist)
    .slice(0, 3);
  const closestSource = rankedSources[0];

  if(measureMarker) map.removeLayer(measureMarker);
  if(measureLine) map.removeLayer(measureLine);

  /* Linha branca até à fonte de ruído mais próxima, tal como no mapa do Paiva */
  measureLine = L.layerGroup([
    L.polyline([here, closestSource.coords], {color:"#FFFFFF", weight:4.5, opacity:.9}),
    L.polyline([here, closestSource.coords], {color:"#F2C230", weight:2.2, dashArray:"2,7", opacity:1})
  ]).addTo(map);

  measureMarker = L.circleMarker(latlng, {radius:7, color:"#2F5233", weight:2.5, fillColor:"#2F5233", fillOpacity:.9}).addTo(map);

  const rows = rankedSources.map((r,i) => `
    <div class="mp-turbine">
      <div class="mp-turbine-top">
        <span class="mp-name">${r.label}</span>
        ${i===0 ? '<span class="mp-tag">mais próxima</span>' : ''}
      </div>
      <div class="mp-dist"><b>${Math.round(r.dist)} m</b></div>
    </div>`).join('');

  const popupHtml = `
    <div class="measure-popup">
      <b>Ponto selecionado</b>
      <div class="mp-turbines">${rows}</div>
      <div class="mp-period">
        <div class="mp-period-label">De dia (Lden)</div>
        <div class="mp-night-row">
          <span class="mp-night-vals">${backgroundLden.toFixed(1)} → ${ambLden.toFixed(1)} dB(A)</span>
          <span class="mp-night-inc" style="color:${increaseLden>=3?'#C4432A':increaseLden>=1?'#D9A441':'#4A7A55'};">+${increaseLden.toFixed(1)} dB(A)</span>
        </div>
        ${zoneGaugeHtml(ambLden, 55, 65)}
      </div>
      <div class="mp-night">
        <div class="mp-night-label">À noite (Ln)</div>
        <div class="mp-night-row">
          <span class="mp-night-vals">${nearest.residual.Ln.toFixed(1)} → ${ambLn.toFixed(1)} dB(A)</span>
          <span class="mp-night-inc" style="color:${increaseLn>=3?'#C4432A':increaseLn>=1?'#D9A441':'#4A7A55'};">+${increaseLn.toFixed(1)} dB(A)</span>
        </div>
        ${zoneGaugeHtml(ambLn, 45, 55)}
      </div>
    </div>`;
  measureMarker.bindPopup(popupHtml, {maxWidth:280, minWidth:240, maxHeight:420}).openPopup();

  updateDbScale(ambLden, "estimado no ponto selecionado (com o projeto, Lden)");

  setInfo(`
    <span class="kicker">Ponto testado</span>
    <h3>Ponto selecionado</h3>
    <div class="panel-block">
      <div class="panel-block-title">Localização</div>
      <div class="panel-block-body">
        <div class="fact" style="border-bottom:none; padding:2px 0;"><span class="k">Coordenadas (WGS84)</span><span class="v">${here[0].toFixed(6)}, ${here[1].toFixed(6)}</span></div>
      </div>
    </div>
    <div class="panel-block">
      <div class="panel-block-title">Distância às fontes de ruído mais próximas</div>
      <div class="panel-block-body">
        ${rankedSources.map((r,i) => `<div class="dist-row">
          <span class="dr-name">${r.label}${i===0 ? " · mais próxima" : ""}</span>
          <span><span class="dr-blade">${Math.round(r.dist)} m</span></span>
        </div>`).join('')}
        <div class="fact" style="margin-top:6px;"><span class="k">Recetor oficial mais próximo</span><span class="v">${nearest.id} (a ${Math.round(best)} m)</span></div>
      </div>
    </div>
    <div class="panel-block">
      <div class="panel-block-title">De dia (Lden): sem projeto → com projeto</div>
      <div class="panel-block-body">
        ${compareBarsHtml(backgroundLden, ambLden, increaseLden)}
        ${legalZoneGaugeHtml(ambLden, 55, 65, "Classificação acústica do ponto por confirmar", null)}
      </div>
    </div>
    <div class="panel-block">
      <div class="panel-block-title">À noite (Ln): o período com o limite mais apertado</div>
      <div class="panel-block-body">
        ${compareBarsHtml(nearest.residual.Ln, ambLn, increaseLn, 55)}
        ${legalZoneGaugeHtml(ambLn, 45, 55, "Classificação acústica do ponto por confirmar", null)}
      </div>
    </div>
    <div class="panel-block">
      <div class="panel-block-title">Só o projeto (particular)</div>
      <div class="panel-block-body">
        <div class="noise-readout">
          <span class="nr-num">${particularLd < -50 ? "&lt;20" : Math.round(particularLd)}</span>
          <span class="nr-unit">dB(A) (Ld, particular)</span>
        </div>
        <div class="noise-context">Soma energética de todas as baterias (86,0 dB(A) cada) e da subestação (91,0 dB(A)), com um modelo simplificado de espalhamento esférico, validado contra os 2 recetores oficiais do EIA (desvio de 0,0 a 0,8 dB). Não inclui os 28 sistemas de conversão (PCS) individuais, nem o ruído de fundo do local — ver "Limitações do projeto".</div>
      </div>
    </div>
    <div class="flag">O ruído de fundo ("sem projeto") usado aqui é o do recetor oficial mais próximo (${nearest.id}), como aproximação; o fundo real varia de local para local. Para o valor mais rigoroso disponível, compara diretamente com a camada "Recetores oficiais do EIA".</div>
  `);
}
map.on('click', (e) => testPoint(e.latlng));

const allBounds = L.latLngBounds([...areaEstudo, ...officialReceptors.map(r=>r.coords)]);
map.fitBounds(allBounds, {padding:[30,30]});
