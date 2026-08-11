/* ---------- DATA ---------- */
/* Turbine coordinates: EIA do Parque Eólico do Paiva, Vol. II, Quadro 4.3
   (convertidas de PT-TM06/ETRS89 para WGS84) */
const turbines = {
  AG01:[40.824239,-7.818217], AG02:[40.819041,-7.80655], AG03:[40.815247,-7.796123], AG04:[40.814736,-7.788615],
  AG05:[40.812276,-7.783048], AG06:[40.807329,-7.783659], AG07:[40.804919,-7.77834], AG08:[40.799088,-7.782908],
  AG09:[40.801944,-7.772473], AG10:[40.799272,-7.764535], AG11:[40.795468,-7.761876], AG12:[40.789728,-7.731382],
  AG13:[40.789495,-7.724325], AG14:[40.795175,-7.724841], AG15:[40.799138,-7.726922], AG16:[40.801372,-7.718936],
  AG17:[40.811994,-7.648194], AG18:[40.815141,-7.638288], AG19:[40.80884,-7.641339], AG20:[40.803802,-7.638928],
  AG21:[40.801987,-7.643117], AG22:[40.81403,-7.602393], AG23:[40.81685,-7.602409], AG24:[40.82005,-7.602832],
  AG25:[40.821432,-7.593523], AG26:[40.827892,-7.594226], AG27:[40.834529,-7.594559], AG28:[40.834255,-7.586873],
  AG29:[40.8401,-7.593819], AG30:[40.840395,-7.584313], AG31:[40.847221,-7.582862], AG32:[40.843335,-7.573073],
  AG33:[40.850572,-7.572231], AG34:[40.849475,-7.564575], AG35:[40.85932,-7.567304], AG36:[40.856059,-7.562159],
  AG37:[40.806569,-7.58939], AG38:[40.801821,-7.581422], AG39:[40.807981,-7.574123], AG40:[40.812587,-7.578216],
  AG41:[40.813975,-7.565086], AG42:[40.819586,-7.568564], AG43:[40.824546,-7.571354], AG44:[40.826596,-7.562115],
  AG45:[40.83126,-7.552531]
};

/* Aerogeradores efetivamente restringidos ("V172 SO1", 105,0 dB(A)) no cenário
   "com medidas de minimização". Fonte: EIA, Vol. II, Relatório Síntese, p. ~939:
   "todos com exceção dos aerogeradores AG28, AG30, AG31, AG32, AG39, AG43, AG44
   e AG45" operam em modo V172 PO7200 [106,9 dB(A)], ou seja, só estes 8 ficam
   condicionados ao modo mais silencioso; os restantes 37 (incluindo AG22, AG37
   e AG38) operam sempre à emissão máxima.
   NOTA DE CORREÇÃO: uma versão anterior deste site definia este conjunto apenas
   com 3 aerogeradores (AG22, AG37, AG38), o que fazia com que os outros 34
   aerogeradores não-restringidos fossem incorretamente tratados como restringidos
   (105,0 em vez de 106,9 dB(A)) em todos os cálculos de ruído do mapa. Foi
   corrigido depois de uma validação cruzada com o texto do EIA. */
const restrictedTurbines = new Set(["AG28","AG30","AG31","AG32","AG39","AG43","AG44","AG45"]);
/* Interface .has() mantida por compatibilidade com o resto do código: devolve
   true quando o aerogerador NÃO está na lista de restringidos (ou seja, opera
   sempre à emissão máxima, 106,9 dB(A)). */
const excludedFromMinimisation = { has: (name) => !restrictedTurbines.has(name) };
/* Raio do rotor (comprimento das pás), EIA Vol. II, Quadro 5.1, p. 82 */
const ROTOR_RADIUS = 86;

/* ---------- MAP SETUP ---------- */
const map = L.map('map', {zoomControl:false}).setView([40.55,-7.9], 8);
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

const layers = { turbines: L.layerGroup(), excluded: L.layerGroup(), sweep: L.layerGroup(), official: L.layerGroup() };
layers.official.addTo(map);
layers.turbines.addTo(map);
layers.excluded.addTo(map);

function setInfo(html){ document.getElementById('infopanel').innerHTML = html; }

/* Escapa texto antes de o inserir em innerHTML. Usado sobretudo para
   mensagens de erro (ex. err.message de chamadas à API Open-Meteo), que
   nunca deviam ser tratadas como HTML de confiança. */
function escapeHtml(str){
  const d = document.createElement('div');
  d.textContent = String(str);
  return d.innerHTML;
}

/* ---------- ESCALA DE REFERÊNCIA (dB) ---------- */
/* Valores de referência de conhecimento acústico geral e amplamente publicado
   (ex. guias da OMS/EPA sobre ruído ambiental), não específicos deste projeto.
   Servem só para dar uma noção intuitiva do que significa um valor em dB(A). */
const DB_REFS = [
  {db: 20,  label: "Sussurro",       full: "Sussurro, a 1 metro"},
  {db: 40,  label: "Quarto calmo",   full: "Quarto sossegado, à noite"},
  {db: 55,  label: "Conversa",       full: "Conversa normal, a 1 metro"},
  {db: 70,  label: "Aspirador",      full: "Aspirador, num quarto"},
  {db: 80,  label: "Trânsito",       full: "Trânsito urbano intenso"},
  {db: 90,  label: "Motor diesel",   full: "Motor diesel, de perto"},
  {db: 100, label: "Britadeira",     full: "Britadeira / berbequim"},
  {db: 115, label: "Avião",          full: "Avião a descolar, perto"},
];
const DB_MIN = 0, DB_MAX = 130;
const SCALE_W = 280, SCALE_H = 128;

function xForDbW(db, w){
  return 10 + ((db - DB_MIN)/(DB_MAX - DB_MIN)) * (w - 20);
}
function xForDb(db){ return xForDbW(db, SCALE_W); }

function buildDbScale(){
  const barY = 36, barH = 14;
  let gradientStops = `<stop offset="0%" stop-color="#4A7A55"/><stop offset="45%" stop-color="#D9A441"/><stop offset="70%" stop-color="#C4432A"/><stop offset="100%" stop-color="#7A2418"/>`;
  let ticks = DB_REFS.map(r => `
    <line x1="${xForDb(r.db)}" y1="${barY-5}" x2="${xForDb(r.db)}" y2="${barY+barH+5}" stroke="#6B6B5C" stroke-width="1.2"/>
  `).join('');
  let labels = DB_REFS.map((r,i) => {
    const x = xForDb(r.db);
    const y = barY + barH + 18 + (i%2)*28;
    return `
      <line x1="${x}" y1="${barY+barH+5}" x2="${x}" y2="${y-9}" stroke="#C7C4B0" stroke-width="1" stroke-dasharray="1,2"/>
      <text x="${x}" y="${y}" font-size="9.5" font-weight="600" fill="#2A362F" font-family="IBM Plex Mono, monospace" text-anchor="middle">${r.db}</text>
      <text x="${x}" y="${y+11}" font-size="8.5" fill="#5C6058" font-family="IBM Plex Sans, sans-serif" text-anchor="middle">${r.label}</text>
    `;
  }).join('');

  const svg = `
    <svg viewBox="0 0 ${SCALE_W} ${SCALE_H}" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="dbGrad" x1="0" y1="0" x2="1" y2="0">${gradientStops}</linearGradient></defs>
      <rect x="10" y="${barY}" width="${SCALE_W-20}" height="${barH}" rx="3" fill="url(#dbGrad)"/>
      ${ticks}
      ${labels}
      <polygon id="dbIndicator" points="0,0 0,0 0,0" fill="#2F5233" stroke="#fff" stroke-width="1" style="display:none;"/>
      <line id="dbIndicatorLine" x1="0" y1="0" x2="0" y2="0" stroke="#2F5233" stroke-width="2.2" style="display:none;"/>
    </svg>`;
  document.getElementById('dbScaleHolder').innerHTML = svg;
}
buildDbScale();

/* Versão grande, para a página de entrada: mesma escala, rótulos completos,
   mais espaço, para se ler tudo sem cortes nem sobreposição. */
function buildBigDbScale(){
  const W = 900, H = 175, barY = 46, barH = 20;
  let gradientStops = `<stop offset="0%" stop-color="#4A7A55"/><stop offset="45%" stop-color="#D9A441"/><stop offset="70%" stop-color="#C4432A"/><stop offset="100%" stop-color="#7A2418"/>`;
  let ticks = DB_REFS.map(r => `
    <line x1="${xForDbW(r.db,W)}" y1="${barY-7}" x2="${xForDbW(r.db,W)}" y2="${barY+barH+7}" stroke="#6B6B5C" stroke-width="1.4"/>
  `).join('');
  let labels = DB_REFS.map((r,i) => {
    const x = xForDbW(r.db,W);
    const y = barY + barH + 24 + (i%3)*32;
    return `
      <line x1="${x}" y1="${barY+barH+7}" x2="${x}" y2="${y-13}" stroke="#C7C4B0" stroke-width="1" stroke-dasharray="1,3"/>
      <text x="${x}" y="${y}" font-size="13" font-weight="600" fill="#2A362F" font-family="IBM Plex Mono, monospace" text-anchor="middle">${r.db} dB</text>
      <text x="${x}" y="${y+16}" font-size="11.5" fill="#5C6058" font-family="IBM Plex Sans, sans-serif" text-anchor="middle">${r.full}</text>
    `;
  }).join('');
  const svg = `
    <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="dbGradBig" x1="0" y1="0" x2="1" y2="0">${gradientStops}</linearGradient></defs>
      <rect x="10" y="${barY}" width="${W-20}" height="${barH}" rx="4" fill="url(#dbGradBig)"/>
      ${ticks}
      ${labels}
    </svg>`;
  document.getElementById('dbScaleHolderBig').innerHTML = svg;
}

function updateDbScale(db, context){
  const clamped = Math.max(DB_MIN, Math.min(DB_MAX, db));
  const x = xForDb(clamped);
  const barY = 36, barH = 14;
  const indicator = document.getElementById('dbIndicator');
  const line = document.getElementById('dbIndicatorLine');
  if(indicator){
    indicator.setAttribute('points', `${x-7},${barY-16} ${x+7},${barY-16} ${x},${barY-5}`);
    indicator.style.display = 'block';
  }
  if(line){
    line.setAttribute('x1', x); line.setAttribute('x2', x);
    line.setAttribute('y1', barY-3); line.setAttribute('y2', barY+barH+3);
    line.style.display = 'block';
  }
  const nearestRef = DB_REFS.reduce((best, r) => Math.abs(r.db-db) < Math.abs(best.db-db) ? r : best, DB_REFS[0]);
  document.getElementById('dbScaleReadout').innerHTML =
    `<b>${db < 20 ? "< 20" : Math.round(db)} dB(A)</b> ${context || ""}, parecido com: ${nearestRef.full.toLowerCase()}.`;
}

/* ---------- CLICK ANYWHERE: TESTE DE IMPACTO ---------- */
/* Permite a qualquer pessoa clicar na sua própria casa (não só nas 5 já levantadas)
   e ver o aerogerador mais próximo e uma estimativa de ruído no local exato,
   usando o mesmo modelo simplificado e ilustrativo da camada de propagação sonora. */
let measureMarker = null;
let measureLine = null;
let lastClickedLatLng = null;
let lastOfficialReceptorMarker = null;

/* Dois modos de apresentação dos valores de ruído:

   "cnossos": os valores tal como saem do EIA (para os 29 recetores oficiais)
   ou do nosso modelo calibrado contra eles (para qualquer outro ponto).
   Nenhuma correção adicional.

   "real": simula o efeito de uma correção documentada em estudos publicados
   de medições reais em parques eólicos (não deste projeto, de outros, ver
   secção "Pontos identificados" na página inicial). Especificamente, usa a
   correção de +3 dB(A) recomendada pela literatura técnica (Bass, Bullmore
   e Sloth, 1998, e confirmada por Cooper & Evans, 2013) para situações em
   que o terreno desce significativamente entre o aerogerador e a casa, como
   acontece em parte desta zona. Esta correção NÃO foi medida neste projeto
   específico: é uma simulação baseada em padrões observados noutros parques,
   com terreno semelhante, não uma medição real do Paiva. */
let simulationMode = "cnossos";
const REAL_SAMPLE_CORRECTION = 3.0;

function currentCorrection(){
  return simulationMode === "real" ? REAL_SAMPLE_CORRECTION : 0;
}

function setSimulationMode(mode){
  simulationMode = mode;
  document.getElementById('modeBtnCnossos').classList.toggle('active', mode === 'cnossos');
  document.getElementById('modeBtnReal').classList.toggle('active', mode === 'real');
  const note = document.getElementById('modeNote');
  const badgeLabel = document.getElementById('modeBadgeLabel');
  if(mode === 'real'){
    note.innerHTML = `Teste de sensibilidade: acrescenta +${REAL_SAMPLE_CORRECTION.toFixed(1)} dB(A) com base em estudos de outros parques eólicos e terreno em vale. Não é uma medição nem uma previsão validada para este projeto.`;
    badgeLabel.textContent = "Cenário exploratório (+3 dB; não é medição local)";
  } else {
    note.innerHTML = `Valores tal como constam do EIA (Quadro 8.68) ou do modelo deste site calibrado contra eles, sem qualquer correção adicional.`;
    badgeLabel.textContent = "Modelo: Estudo CNOSSOS (projeto)";
  }
  if(currentTurbine) drawPropagation(currentTurbine, excludedFromMinimisation.has(currentTurbine));
  if(lastClickedLatLng) testPoint(lastClickedLatLng, true);
  if(lastOfficialReceptorMarker) lastOfficialReceptorMarker.fire('click');
}

/* Toca no badge do mapa para abrir a sidebar já na secção do modelo de
   ruído (útil sobretudo em telemóvel, onde a sidebar começa fechada). */
function openSidebarAtMode(){
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.add('open');
  const modeSection = document.querySelector('.mode-section');
  if(modeSection) modeSection.scrollIntoView({behavior:'smooth', block:'start'});
}

function clearMeasure(){
  if(measureMarker){ map.removeLayer(measureMarker); measureMarker = null; }
  if(measureLine){ map.removeLayer(measureLine); measureLine = null; }
  lastClickedLatLng = null;
}

function testPoint(latlng, isRefresh){
  const here = [latlng.lat, latlng.lng];
  const ranked = Object.entries(turbines)
    .map(([name, coords]) => ({name, dist: haversine(here, coords)}))
    .sort((a,b) => a.dist - b.dist)
    .slice(0, 3);

  const nearest = ranked[0];
  const estimatedSpl = cumulativeSplAt(here);
  const splLabel = estimatedSpl < 20 ? "&lt; 20 dB(A) (impercetível a esta distância)" : estimatedSpl.toFixed(0) + " dB(A)";
  const windLabel = windCondition === "favoravel" ? "a favor do vento" : windCondition === "cruzado" ? "vento cruzado" : "contra o vento";

  /* Aproximação do ruído de fundo (sem parque) neste ponto: usa o ruído de
     referência do recetor oficial mais próximo, como estimativa da zona.
     Depois soma energeticamente com o ruído do parque estimado neste ponto
     exato, para dar um total "com parque" comparável. */
  let nearestOfficial = officialReceptors[0], bestD = Infinity;
  officialReceptors.forEach(r => {
    const d = haversine(here, r.coords);
    if(d < bestD){ bestD = d; nearestOfficial = r; }
  });
  const backgroundApprox = nearestOfficial.refLden;
  /* A correção exploratória incide exclusivamente sobre a contribuição das
     turbinas; nunca sobre o ruído de fundo que já existia no local. */
  const correctedTurbineSpl = estimatedSpl < 20 ? -100 : estimatedSpl + currentCorrection();
  const combinedTotal = correctedTurbineSpl < 0 ? backgroundApprox : combineNoise(backgroundApprox, correctedTurbineSpl);
  const increase = Math.round((combinedTotal - backgroundApprox)*10)/10;

  /* Estimativa específica da noite (Ln): os aerogeradores emitem de forma
     praticamente constante ao longo do dia (24h/dia), por isso o valor "por
     período" (Ld=Le=Ln) do parque é cerca de 6,4 dB abaixo do seu Lden
     (a diferença fixa introduzida pelas penalizações de +5 dB ao entardecer e
     +10 dB à noite na fórmula do Lden, quando Ld=Le=Ln). Confirmado contra a
     previsão do EIA RA06 (42,4 dB estimados; 42,5 dB no quadro). O ruído de fundo à
     noite (refLn) é o valor medido no terreno, do recetor oficial mais próximo. */
  const turbinePeriodEstimate = correctedTurbineSpl < 0 ? -100 : correctedTurbineSpl - 6.4;
  const nightBackground = nearestOfficial.refLn;
  const nightTotal = turbinePeriodEstimate < 0 ? nightBackground : combineNoise(nightBackground, turbinePeriodEstimate);
  const nightIncrease = Math.round((nightTotal - nightBackground)*10)/10;
  const nightColor = nightIncrease > 3 ? "#C4432A" : nightIncrease >= 1 ? "#D9A441" : "#4A7A55";
  const nightExempt = nightTotal <= 45;
  const nightVerdict = nightExempt
    ? "tecnicamente isento do limite, por o ruído total ser ≤ 45 dB(A) (art. 13.º, n.º 5 do RGR)"
    : (nightIncrease > 3 ? "acima do limite legal de 3 dB(A) (art. 13.º do RGR)" : "dentro do limite legal de 3 dB(A) (art. 13.º do RGR)");

  if(!isRefresh){
    lastClickedLatLng = latlng;
    if(measureMarker) map.removeLayer(measureMarker);
    if(measureLine) map.removeLayer(measureLine);

    measureLine = L.layerGroup([
      L.polyline([here, turbines[nearest.name]], {color:"#FFFFFF", weight:4.5, opacity:.9}),
      L.polyline([here, turbines[nearest.name]], {color:"#F2C230", weight:2.2, dashArray:"2,7", opacity:1})
    ]).addTo(map);

    measureMarker = L.circleMarker(latlng, {
      radius:7, color:"#2F5233", weight:2.5, fillColor:"#2F5233", fillOpacity:.9
    }).addTo(map);

    currentTurbine = null;
    clearPropagation();
  }

  const rows = ranked.map((r,i) => {
    const bladeDist = Math.max(0, Math.round(r.dist - ROTOR_RADIUS));
    return `
    <div class="mp-turbine">
      <div class="mp-turbine-top">
        <span class="mp-name">${r.name}</span>
        ${i===0 ? '<span class="mp-tag">mais próximo</span>' : ''}
      </div>
      <div class="mp-dist"><b>${bladeDist} m</b> à pá <span class="mp-sub">(${Math.round(r.dist)} m ao cubo)</span></div>
    </div>`;
  }).join('');

  const popupHtml = `
    <div class="measure-popup">
      <b>Ponto selecionado</b>
      <div class="mp-turbines">${rows}</div>
      <div class="mp-period">
        <div class="mp-period-label">De dia (Lden)</div>
        <div class="mp-night-row">
          <span class="mp-night-vals">${backgroundApprox.toFixed(1)} &rarr; ${combinedTotal.toFixed(1)} dB(A)</span>
          <span class="mp-night-inc" style="color:${increase >= 3 ? '#C4432A' : increase >= 1 ? '#D9A441' : '#4A7A55'};">+${increase.toFixed(1)} dB(A)</span>
        </div>
        ${compactGaugeHtml(combinedTotal, 55, 65, 45)}
      </div>
      <div class="mp-night">
        <div class="mp-night-label">À noite (Ln)</div>
        <div class="mp-night-row">
          <span class="mp-night-vals">${nightBackground.toFixed(1)} &rarr; ${nightTotal.toFixed(1)} dB(A)</span>
          <span class="mp-night-inc" style="color:${nightColor};">+${nightIncrease.toFixed(1)} dB(A)</span>
        </div>
        ${compactGaugeHtml(nightTotal, 45, 55, 45, false)}
      </div>
      <div class="pop-flag" style="font-size:10.5px;">A marca OMS (45 dB) é mostrada apenas na barra de dia (Lden). À noite, a barra mostra os limites legais de Ln.</div>
    </div>`;

  if(measureMarker){
    if(isRefresh){
      measureMarker.setPopupContent(popupHtml);
    } else {
      measureMarker.bindPopup(popupHtml, {maxWidth: 280, minWidth: 240, maxHeight: 420}).openPopup();
    }
  }

  updateDbScale(estimatedSpl, "no ponto selecionado");

  const distRows = ranked.map((r,i) => {
    const bd = Math.max(0, Math.round(r.dist - ROTOR_RADIUS));
    return `<div class="dist-row">
      <span class="dr-name">${r.name}${i===0 ? " · mais próximo" : ""}</span>
      <span><span class="dr-blade">${bd} m</span> <span class="dr-hub">à pá</span></span>
    </div>`;
  }).join('');

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
      <div class="panel-block-title">Distância aos aerogeradores próximos</div>
      <div class="panel-block-body">${distRows}</div>
    </div>

    <div class="panel-block">
      <div class="panel-block-title">Sem parque → com parque</div>
      <div class="panel-block-body">
        ${compareBarsHtml(backgroundApprox, combinedTotal, increase)}
        <div class="noise-context">"Sem parque" é o ruído de referência real medido pelo EIA no ponto oficial mais próximo (${nearestOfficial.id}, a ${Math.round(bestD)} m). "Com parque" soma esse fundo com o ruído do parque estimado neste ponto exato. Aproximação: o fundo real pode variar de casa para casa.</div>
        ${ldenGaugeWithWhoHtml(combinedTotal, null, 45)}
      </div>
    </div>

    <div class="panel-block">
      <div class="panel-block-title">À noite (Ln): o período com o limite mais apertado</div>
      <div class="panel-block-body">
        ${compareBarsHtml(nightBackground, nightTotal, nightIncrease)}
        <div class="noise-context" style="color:${nightColor}; font-weight:600;">${nightIncrease.toFixed(1)} dB(A) de aumento à noite, ${nightVerdict}.</div>
        ${legalGaugeHtml(nightTotal, 45, 55, "Classificação acústica do ponto por confirmar")}
        <div class="noise-context">Estimativa derivada: como os aerogeradores emitem de forma praticamente constante 24h/dia, o valor por período (Ld≈Le≈Ln) fica cerca de 6,4 dB abaixo do Lden do parque, confirmado contra previsões do EIA. O fundo noturno vem do recetor oficial mais próximo.</div>
      </div>
    </div>

    <div class="panel-block">
      <div class="panel-block-title">Só o parque eólico (${windLabel})</div>
      <div class="panel-block-body">
        <div class="noise-readout">
          <span class="nr-num">${splLabel.includes("&lt;") ? "&lt;20" : Math.round(estimatedSpl)}</span>
          <span class="nr-unit">dB(A)</span>
        </div>
        <div class="noise-context">Soma de todos os aerogeradores, calibrada por regressão contra 29 previsões CNOSSOS do EIA (desvio típico ±0,9 dB, pior caso ±2,2 dB). Não corresponde ao modelo CNOSSOS-EU oficial. Este painel atualiza-se automaticamente com as condições de vento selecionadas na barra lateral.</div>
      </div>
    </div>

    <div class="flag">Para o valor exato deste local, compara com o recetor oficial mais próximo (camada "Recetores oficiais do EIA"). O círculo azul à volta de cada aerogerador mostra o raio varrido pelas pás (86 m, EIA Quadro 5.1).</div>

    <button id="losBtn" onclick='runLineOfSight(${JSON.stringify(here)}, "${nearest.name}")' class="los-btn">Calcular linha de vista até ${nearest.name}</button>
    <div id="losResult"></div>
  `);
}

map.on('click', (e) => testPoint(e.latlng, false));


/* Ícone de aerogerador, SVG desenhado à mão (torre + nacelle + 3 pás) */
function turbineIcon(color, s){
  const blade = (angleDeg) => `<path d="M0,0 C -2.1,-3.6 -1.6,-8.4 0,-12 C 1.6,-8.4 2.1,-3.6 0,0 Z" fill="#FFFFFF" stroke="${color}" stroke-width="1" transform="rotate(${angleDeg})"/>`;
  const svg = `
    <svg width="${s}" height="${s}" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="16.5" x2="20" y2="37" stroke="#FFFFFF" stroke-width="3.2" stroke-linecap="round"/>
      <line x1="20" y1="16.5" x2="20" y2="37" stroke="${color}" stroke-width="1.4" stroke-linecap="round"/>
      <g transform="translate(20,15)">
        <g class="turbine-blades" style="transform-origin:0px 0px;">
          ${blade(0)}
          ${blade(120)}
          ${blade(240)}
        </g>
        <circle cx="0" cy="0" r="2.1" fill="${color}" stroke="#fff" stroke-width="0.8"/>
      </g>
    </svg>`;
  return L.divIcon({
    html: svg, className: 'turbine-icon',
    iconSize: [s, s], iconAnchor: [s/2, s-3], popupAnchor: [0, -(s-6)], tooltipAnchor: [0, -(s-10)]
  });
}

/* Tamanho do ícone cresce com o zoom, para não parecer cada vez mais pequeno à medida que se aproxima */
function iconSizeForZoom(z){
  if(z <= 9)  return 13;
  if(z <= 10) return 16;
  if(z <= 11) return 20;
  if(z <= 12) return 25;
  if(z <= 13) return 30;
  if(z <= 14) return 36;
  if(z <= 15) return 44;
  if(z <= 16) return 54;
  if(z <= 17) return 66;
  return 80;
}
/* Tamanho dos pontos de recetor oficial, também cresce com o zoom */
function receptorRadiusForZoom(z){
  if(z <= 10) return 4;
  if(z <= 12) return 5;
  if(z <= 13) return 6.5;
  if(z <= 14) return 8;
  if(z <= 15) return 10;
  if(z <= 16) return 12.5;
  return 15;
}

/* ---------- RECETORES OFICIAIS DO EIA (previsões CNOSSOS, não simplificadas) ---------- */
/* Valores exatos de "ruído ambiente decorrente" (fundo + parque) previstos pelo
   modelo CNOSSOS-EU do EIA, Quadro 8.68 (cenário final, com medidas de minimização
   aplicadas aos aerogeradores AG28,30,31,32,39,43,44,45). Volume II, Relatório
   Síntese, pp. 701-702.
   O 9.º valor de cada linha é o "ruído de referência" (Lden), medido no terreno
   ANTES do parque existir: o ruído de fundo real da zona (tráfego, natureza),
   também do Quadro 8.68 (mesma página). É este valor que permite comparar
   "sem parque" com "com parque" no mesmo ponto.
   Posições: os grupos de recetores (ex. RA06 a RA08) partilham o mesmo ponto de
   medição de referência (PRAx). Para 8 dos 10 pontos PRA (incluindo o PRA10,
   verificado nesta revisão), o EIA dá coordenadas GPS reais do ponto de
   referência (Quadro 6.86, p. 422-425, coordenadas ETRS89 convertidas).
   Para RA13-RA17 (PRA9), a coordenada dada no EIA (40°50'7.65"N; 7°33'29.91"W)
   é idêntica, a 0,2 m, à coordenada dada para o PRA7 (Quinta da Estrada,
   junto ao AG45), apesar de o texto descrever o PRA9 como estando junto ao
   AG39, a mais de 4 km de distância. É, com quase toda a certeza, um erro de
   cópia no próprio documento do EIA, pelo que a posição do PRA9 foi antes
   estimada a partir da distância e rumo ao aerogerador mais próximo (510 m,
   a sudeste do AG39), também indicados no texto do EIA. Todas as posições
   são, por isso, aproximadas ao nível do agrupamento de casas, não da casa
   individual: dentro de cada grupo, os pontos são espalhados visualmente
   (ver JITTER_RADIUS abaixo), sem correspondência a coordenadas GPS
   individuais, que o EIA não fornece. */
const officialReceptorsData = {
 RA01:[40.835089,-7.578728,"AG28",678, 46.1,45.2,44.9,51.4, 44.7, 37.1],
 RA02:[40.835089,-7.578728,"AG28",678, 45.6,44.5,44.1,50.7, 44.7, 37.1],
 RA03:[40.835089,-7.578728,"AG28",678, 46.0,45.1,44.7,51.2, 44.7, 37.1],
 RA04:[40.823969,-7.616353,"AG24",1221, 44.7,42.0,42.5,49.1, 46.5, 39.6],
 RA05:[40.823969,-7.616353,"AG24",1221, 44.7,41.9,42.4,49.0, 46.5, 39.6],
 RA06:[40.807136,-7.603025,"AG22",765, 46.4,44.7,43.9,50.7, 46.4, 38.6],
 RA07:[40.807136,-7.603025,"AG22",765, 46.1,44.4,43.5,50.3, 46.4, 38.6],
 RA08:[40.807136,-7.603025,"AG22",765, 46.0,44.2,43.3,50.1, 46.4, 38.6],
 RA09:[40.803011,-7.596436,"AG37",713, 46.8,45.3,44.5,51.2, 47.7, 40.3],
 RA10:[40.803011,-7.596436,"AG37",713, 46.8,45.4,44.5,51.3, 47.7, 40.3],
 RA11:[40.803011,-7.596436,"AG37",713, 46.7,45.1,44.2,51.0, 47.7, 40.3],
 RA12:[40.803011,-7.596436,"AG37",713, 46.6,45.0,44.2,51.0, 47.7, 40.3],
 RA13:[40.804738,-7.569838,"AG39",510, 44.6,43.3,43.0,49.6, 45.5, 38.4],
 RA14:[40.804738,-7.569838,"AG39",510, 45.4,44.4,44.3,50.8, 45.5, 38.4],
 RA15:[40.804738,-7.569838,"AG39",510, 44.9,43.7,43.4,50.0, 45.5, 38.4],
 RA16:[40.804738,-7.569838,"AG39",510, 44.9,43.7,43.4,50.0, 45.5, 38.4],
 RA17:[40.804738,-7.569838,"AG39",510, 45.1,44.0,43.9,50.4, 45.5, 38.4],
 RA18:[40.826322,-7.550900,"AG45",550, 53.2,49.7,47.3,55.2, 54.2, 45.8],
 RA19:[40.830442,-7.567400,"AG44",644, 46.2,45.0,44.8,51.3, 45.4, 38.1],
 RA20:[40.830442,-7.567400,"AG44",644, 46.0,44.8,44.5,51.1, 45.4, 38.1],
 RA21:[40.830442,-7.567400,"AG44",644, 45.6,44.3,43.9,50.5, 45.4, 38.1],
 RA22:[40.830442,-7.567400,"AG44",644, 45.4,44.0,43.7,50.3, 45.4, 38.1],
 RA23:[40.835458,-7.558306,"AG45",653, 55.4,49.5,48.4,56.6, 55.9, 47.3],
 RA24:[40.835458,-7.558306,"AG45",653, 55.4,49.4,48.3,56.5, 55.9, 47.3],
 RA25:[40.847361,-7.589594,"AG31",566, 48.0,45.8,45.2,52.0, 47.9, 39.9],
 RA26:[40.847361,-7.589594,"AG31",566, 48.0,45.7,44.9,51.8, 47.9, 39.9],
 RA27:[40.860861,-7.581094,"AG35",1054, 45.1,43.5,43.3,49.9, 47.6, 40.8],
 RA28:[40.860861,-7.581094,"AG35",1054, 45.1,43.5,43.2,49.8, 47.6, 40.8],
 RA29:[40.860861,-7.581094,"AG35",1054, 45.2,43.6,43.3,49.9, 47.6, 40.8],
};

/* Destino a partir de um rumo e distância (fórmula geodésica), usado só para
   espalhar visualmente recetores que partilham o mesmo ponto de referência do
   EIA (ver nota abaixo). */
function destinationPoint(lat, lon, bearingDeg, distM){
  const R = 6371000;
  const br = bearingDeg * Math.PI/180;
  const lat1 = lat*Math.PI/180, lon1 = lon*Math.PI/180;
  const lat2 = Math.asin(Math.sin(lat1)*Math.cos(distM/R) + Math.cos(lat1)*Math.sin(distM/R)*Math.cos(br));
  const lon2 = lon1 + Math.atan2(Math.sin(br)*Math.sin(distM/R)*Math.cos(lat1), Math.cos(distM/R)-Math.sin(lat1)*Math.sin(lat2));
  return [lat2*180/Math.PI, lon2*180/Math.PI];
}

/* O EIA agrupa vários recetores (casas) sob um único ponto de medição de
   referência (PRAx), pelo que várias entradas de officialReceptorsData
   partilham exatamente as mesmas coordenadas (ex. RA09 a RA12, todos junto ao
   AG37). Para que fiquem visíveis e distinguíveis no mapa, em vez de
   sobrepostos no mesmo ponto, são aqui espalhados num pequeno círculo de 22 m
   de raio à volta da posição estimada. Este espalhamento é apenas visual,
   para legibilidade do mapa: não representa a posição GPS individual de cada
   casa, que o EIA não fornece. Os valores de ruído de cada recetor mantêm-se
   exatamente os do EIA, independentemente desta posição. */
const coordGroups = {};
Object.entries(officialReceptorsData).forEach(([id, v]) => {
  const key = v[0] + "," + v[1];
  (coordGroups[key] = coordGroups[key] || []).push(id);
});
const JITTER_RADIUS = 22;
const officialReceptors = Object.entries(officialReceptorsData).map(([id, v]) => {
  const key = v[0] + "," + v[1];
  const group = coordGroups[key];
  let coords = [v[0], v[1]];
  let groupNote = null;
  if(group.length > 1){
    const i = group.indexOf(id);
    const bearing = (360 / group.length) * i;
    coords = destinationPoint(v[0], v[1], bearing, JITTER_RADIUS);
    groupNote = group.filter(g => g !== id);
  }
  return {
    id, coords, groupIds: group, groupNote,
    near:v[2], nearDist:v[3], Ld:v[4], Le:v[5], Ln:v[6], Lden:v[7], refLden:v[8], refLn:v[9]
  };
});

/* PRA4 (RA27–RA29) é zona sensível; os restantes pontos PRA associados aos
   recetores RA são classificados como zona mista no relatório acústico. */
function officialZoneForReceptor(id){
  return ["RA27", "RA28", "RA29"].includes(id)
    ? {name:"SENSÍVEL", lden:55, ln:45}
    : {name:"MISTA", lden:65, ln:55};
}

function combineNoise(...levels){
  return 10*Math.log10(levels.reduce((energy, level) => energy + Math.pow(10, level/10), 0));
}

function applyTurbineOnlyCorrection(total, background, correction){
  if(!correction) return total;
  const turbineEnergy = Math.pow(10, total/10) - Math.pow(10, background/10);
  if(turbineEnergy <= 0) return total;
  return combineNoise(background, 10*Math.log10(turbineEnergy) + correction);
}
const officialMarkers = [];
officialReceptors.forEach(r => {
  const marker = L.circleMarker(r.coords, {
    radius: receptorRadiusForZoom(map.getZoom()), color:"#2F5233", weight:2.5, fillColor:"#FFFFFF", fillOpacity:.95
  });
  marker.bindTooltip(r.id, {permanent:true, direction:'right', offset:[6,0], className:'ra-label'});

  function renderReceptor(){
    const corr = currentCorrection();
    const zone = officialZoneForReceptor(r.id);
    const effLden = applyTurbineOnlyCorrection(r.Lden, r.refLden, corr);
    const effLn = applyTurbineOnlyCorrection(r.Ln, r.refLn, corr);
    const increase = Math.round((effLden - r.refLden)*10)/10;
    const nightIncrease = Math.round((effLn - r.refLn)*10)/10;
    const nightColor = nightIncrease > 3 ? "#C4432A" : nightIncrease >= 1 ? "#D9A441" : "#4A7A55";
    const nightExempt = effLn <= 45;
    const nightVerdict = nightExempt
      ? "tecnicamente isento do limite, por o ruído total ser ≤ 45 dB(A) (art. 13.º, n.º 5 do RGR)"
      : (nightIncrease > 3 ? "acima do limite legal de 3 dB(A) (art. 13.º do RGR)" : "dentro do limite legal de 3 dB(A) (art. 13.º do RGR)");
    const groupNoteText = r.groupNote ? `<div class="pop-flag" style="margin-top:6px;">Partilha o mesmo ponto de referência do EIA com ${r.groupNote.join(", ")}: os valores de ruído são idênticos para todo o grupo. A posição de cada ponto neste mapa foi espalhada visualmente para ficar legível; o EIA não indica coordenadas GPS individuais para cada casa deste grupo.</div>` : "";
    const modeFlag = simulationMode === "real"
      ? `<div class="pop-flag" style="border-color:#8A5A1E;">Cenário exploratório ativo: valores com +${REAL_SAMPLE_CORRECTION.toFixed(1)} dB(A) simulados como teste de sensibilidade a terreno em vale. Baseia-se em estudos de outros parques; não é uma medição nem uma previsão oficial deste projeto.</div>`
      : "";
    const nightVerdictShort = nightExempt ? "isento do limite (&le;45 dB(A))" : (nightIncrease > 3 ? "acima do limite legal" : "dentro do limite legal");

    /* Popup do mapa: resumo curto, com o veredito noturno (o que mais importa
       para a decisão) logo a seguir ao título. Todo o detalhe (fonte, modo de
       simulação, partilha de ponto) fica só no painel lateral (panelHtml). */
    const popupHtml = `
      <b>${r.id}</b> <span style="font-size:10px; color:#2F5233;">(dado oficial do EIA${simulationMode === "real" ? " + simulação" : ""})</span><br>
      <div class="mp-period">
        <div class="mp-period-label">De dia (Lden)</div>
        <div class="mp-night-row">
          <span class="mp-night-vals">${r.refLden.toFixed(1)} &rarr; ${effLden.toFixed(1)} dB(A)</span>
          <span class="mp-night-inc" style="color:${increase > 3 ? '#C4432A' : increase >= 1 ? '#D9A441' : '#4A7A55'};">+${increase.toFixed(1)} dB(A)</span>
        </div>
        ${compactGaugeHtml(effLden, 55, 65, 45)}
      </div>
      <div class="mp-night">
        <div class="mp-night-label">À noite (Ln) &mdash; ${nightVerdictShort}</div>
        <div class="mp-night-row">
          <span class="mp-night-vals">${r.refLn} &rarr; ${effLn.toFixed(1)} dB(A)</span>
          <span class="mp-night-inc" style="color:${nightColor};">+${nightIncrease.toFixed(1)} dB(A)</span>
        </div>
        ${compactGaugeHtml(effLn, 45, 55, 45, false)}
      </div>
      <div class="pop-flag" style="margin-top:6px; font-size:10.5px;">A marca OMS (45 dB) é mostrada apenas na barra de dia (Lden). À noite, a barra mostra os limites legais de Ln.</div>
    `;

    const panelHtml = `
      <span class="kicker">Recetor oficial do EIA</span>
      <h3>${r.id}</h3>
      <div class="panel-block">
        <div class="panel-block-title">Sem parque → com parque (Lden)</div>
        <div class="panel-block-body">
          ${compareBarsHtml(r.refLden, effLden, increase)}
          ${ldenGaugeWithWhoHtml(effLden, zone, 45)}
        </div>
      </div>
      <div class="panel-block">
        <div class="panel-block-title">À noite (Ln): o período com o limite mais apertado</div>
        <div class="panel-block-body">
          ${compareBarsHtml(r.refLn, effLn, nightIncrease)}
          <div class="noise-context" style="color:${nightColor}; font-weight:600;">${nightIncrease.toFixed(1)} dB(A) de aumento à noite, ${nightVerdict}.</div>
          ${legalGaugeHtml(effLn, 45, 55, `Face ao limite de zona ${zone.name} (${zone.ln} dB(A) Ln)`, zone)}
        </div>
      </div>
      <div class="fact"><span class="k">Aerogerador de referência</span><span class="v">${r.near} (${r.nearDist} m)</span></div>
      <div class="fact"><span class="k">Ld (dia, com parque)</span><span class="v">${r.Ld.toFixed(1)} dB(A)</span></div>
      <div class="fact"><span class="k">Le (entardecer, com parque)</span><span class="v">${r.Le.toFixed(1)} dB(A)</span></div>
      <div class="fact"><span class="k">Ln (noite, com parque)</span><span class="v">${effLn.toFixed(1)} dB(A)</span></div>
      ${r.groupNote ? `<div class="flag">Este recetor partilha o mesmo ponto de referência do EIA com ${r.groupNote.join(", ")} (mesmos valores de ruído). A posição exata de cada casa deste grupo não é dada individualmente pelo EIA; a posição aqui é espalhada apenas para visibilidade no mapa.</div>` : ""}
      ${simulationMode === "real" ? `<div class="flag" style="border-color:#8A5A1E;">Cenário exploratório ativo: +${REAL_SAMPLE_CORRECTION.toFixed(1)} dB(A) é aplicado apenas à componente estimada das turbinas antes de a somar ao fundo. Não são valores oficiais do EIA nem medições deste projeto; para voltar às previsões oficiais, escolhe "Estudo CNOSSOS (projeto)".</div>` : `<div class="flag"><b>Leitura dos valores do EIA (Quadro 8.68):</b> “sem parque” é o ruído de referência medido no terreno antes do projeto; “com parque” é o ruído ambiente decorrente previsto pelo CNOSSOS-EU. Fonte: EIA, Volume II, Relatório Síntese, pp. 701–702.</div>`}
    `;
    return {popupHtml, panelHtml};
  }

  const initial = renderReceptor();
  marker.bindPopup(initial.popupHtml, {maxWidth: 280, minWidth: 240, maxHeight: 420});

  marker.on('click', () => {
    lastOfficialReceptorMarker = marker;
    const content = renderReceptor();
    marker.setPopupContent(content.popupHtml);
    updateDbScale(applyTurbineOnlyCorrection(r.Lden, r.refLden, currentCorrection()), "oficial no recetor " + r.id + (simulationMode === "real" ? " (simulação)" : " (EIA, Quadro 8.68)"));
    setInfo(content.panelHtml);
  });
  marker.addTo(layers.official);
  officialMarkers.push(marker);
});

/* Turbines */
const turbineMarkers = [];
Object.entries(turbines).forEach(([name, latlng]) => {
  const isExcluded = excludedFromMinimisation.has(name);
  const marker = L.marker(latlng, { icon: turbineIcon("#3A4A50", iconSizeForZoom(map.getZoom())) });
  marker.bindPopup(popupTurbine(name, isExcluded));
  marker.bindTooltip(name, {permanent:true, direction:'right', offset:[6,0], className:'ag-label'});
  marker.on('click', () => showTurbineInfo(name, isExcluded));
  marker.addTo(layers.turbines);
  if(isExcluded) marker.addTo(layers.excluded);
  turbineMarkers.push(marker);

  const sweep = L.layerGroup([
    L.circle(latlng, { radius: ROTOR_RADIUS, color:"#FFFFFF", weight:4, fillOpacity:0, opacity:.9 }),
    L.circle(latlng, { radius: ROTOR_RADIUS, color:"#2FA8C4", weight:2, fillColor:"#2FA8C4", fillOpacity:.14, opacity:1, dashArray:"6,5" })
  ]);
  sweep.getLayers()[1].bindTooltip("Raio das pás: " + ROTOR_RADIUS + " m", {direction:"center", className:"dist-tip"});
  sweep.addTo(layers.sweep);
});

function updateLabelVisibility(){
  const el = document.getElementById('map');
  if(map.getZoom() < 12) el.classList.add('labels-hidden');
  else el.classList.remove('labels-hidden');
}
map.on('zoomend', () => {
  const s = iconSizeForZoom(map.getZoom());
  turbineMarkers.forEach(m => m.setIcon(turbineIcon("#3A4A50", s)));
  const r = receptorRadiusForZoom(map.getZoom());
  officialMarkers.forEach(m => m.setRadius(r));
  updateLabelVisibility();
});
updateLabelVisibility();

/* Duas barras horizontais comparando o ruído sem parque (referência) e com
   parque (ambiente decorrente / estimado), com o aumento em dB(A) destacado. */
function compareBarsHtml(before, after, increase){
  const max = 65;
  const wBefore = Math.max(4, Math.min(100, (before/max)*100));
  const wAfter = Math.max(4, Math.min(100, (after/max)*100));
  const incColor = increase >= 3 ? "#C4432A" : increase >= 1 ? "#D9A441" : "#4A7A55";
  return `
    <div class="compare-wrap">
      <div class="compare-row">
        <span class="compare-label">Sem parque</span>
        <div class="compare-track"><div class="compare-fill compare-before" style="width:${wBefore}%"></div></div>
        <span class="compare-val">${before.toFixed(1)}</span>
      </div>
      <div class="compare-row">
        <span class="compare-label">Com parque</span>
        <div class="compare-track"><div class="compare-fill compare-after" style="width:${wAfter}%"></div></div>
        <span class="compare-val">${after.toFixed(1)}</span>
      </div>
      <div class="compare-increase" style="color:${incColor};">+${increase.toFixed(1)} dB(A) por causa do parque</div>
    </div>`;
}

/* Escala visual que mostra onde um valor de ruído (Ln ou Lden) se situa face
   aos limites absolutos do RGR: zona sensível (mais apertado, habitações
   puramente residenciais) e zona mista (mais permissivo, é o que está
   oficialmente aplicado a esta zona, por aviso municipal). Ver secção
   "Pontos identificados na análise do EIA" para o porquê desta distinção
   ser relevante aqui. */
/* Escala para o Ln (ruído noturno). Desenhada para ficar visualmente
   equivalente à escala do Lden (mesmo estilo de veredito, barra e
   marcações), para que dia e noite se leiam como um par comparável.
   Não inclui uma marca da OMS: ao contrário do Lden, a OMS não emite
   recomendação específica de Lnight para ruído de parques eólicos
   (falta de evidência suficiente, Diretrizes de Ruído Ambiental 2018),
   pelo que colocar aqui um valor seria inventado. */
/* Barra compacta para os popups do mapa (não o painel lateral): mesmas
   zonas e marca da OMS que a barra grande, mas sem o veredito nem os
   parágrafos de explicação, só para dar uma referência visual rápida.
   Usada tanto para o valor de dia como para o de noite, com a MESMA marca
   da OMS (45 dB) em ambas, para que fiquem lado a lado e comparáveis.
   A barra noturna não apresenta OMS: mostra apenas os limites legais de Ln. */
function compactGaugeHtml(value, limiteSensivel, limiteMista, whoLimit, showWho=true){
  const max = limiteMista + 10;
  const pctSensivel = Math.min(100, (limiteSensivel/max)*100);
  const pctMista = Math.min(100, (limiteMista/max)*100);
  const pctValue = Math.max(2, Math.min(100, (value/max)*100));
  const pctWho = Math.min(100, (whoLimit/max)*100);
  return `
    <div class="gauge-wrap gauge-compact">
      <div class="gauge-track">
        <div class="gauge-zone-sens" style="width:${pctSensivel}%"></div>
        <div class="gauge-zone-mista" style="left:${pctSensivel}%; width:${pctMista-pctSensivel}%"></div>
        <div class="gauge-zone-over" style="left:${pctMista}%; width:${100-pctMista}%"></div>
        ${showWho ? `<div class="gauge-who-line" style="left:${pctWho}%;"></div>` : ''}
        <div class="gauge-marker" style="left:${pctValue}%;" title="${value.toFixed(1)} dB(A)"></div>
      </div>
      <div class="gauge-ticks">
        ${showWho ? `<span style="left:${pctWho}%;" class="tick-who">OMS<br>${whoLimit}</span>` : ''}
        <span style="left:${pctSensivel}%;">sensível<br>${limiteSensivel}</span>
        <span style="left:${pctMista}%;" class="tick-mista">mista<br>${limiteMista}</span>
      </div>
    </div>`;
}

function legalGaugeHtml(value, limiteSensivel, limiteMista, label, officialZone=null){
  const max = limiteMista + 10;
  const pctSensivel = Math.min(100, (limiteSensivel/max)*100);
  const pctMista = Math.min(100, (limiteMista/max)*100);
  const pctValue = Math.max(2, Math.min(100, (value/max)*100));
  const legalLimit = officialZone ? officialZone.ln : null;
  const cumpreLegal = legalLimit === null ? null : value <= legalLimit;
  const cumpreSensivel = value <= limiteSensivel;
  return `
    <div class="gauge-wrap">
      <div class="zone-verdict ${cumpreLegal === null || cumpreLegal ? 'zone-ok' : 'zone-bad'}">
        <div class="zone-verdict-icon">${cumpreLegal === null || cumpreLegal ? '✓' : '✗'}</div>
        <div>
          <div class="zone-verdict-title">${label}</div>
          <div class="zone-verdict-text">${officialZone ? `${value.toFixed(1)} dB(A), ${cumpreLegal ? "dentro do limite legal" : "acima do limite legal"} aplicável.` : "Estimativa fora de recetor oficial: esta barra não atribui um limite legal local."}</div>
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

      <div class="ref-note">*Zona sensível: limite mais apertado (habitações puramente residenciais). Não é a classificação aplicada aqui, mas serve de comparação: com este valor, ${cumpreSensivel ? "cumpriria também esse limite mais apertado" : "não cumpriria esse limite mais apertado, só o de zona mista"}.</div>
      <div class="ref-note">A OMS não emite uma recomendação específica de ruído noturno (Ln) para parques eólicos, por falta de evidência suficiente (só recomenda um limite para o Lden, mostrado na barra de dia).</div>
    </div>`;
}

/* Escala para o Lden (indicador diário completo). Mostra, em primeiro lugar
   e de forma inequívoca, o veredito face à zona OFICIALMENTE aplicada nesta
   área (zona mista, por aviso municipal, limite 65 dB(A)). A zona sensível
   (55 dB(A)) é mostrada só como referência de comparação, claramente
   identificada como hipotética, não como o que está em vigor. Inclui também
   a recomendação da Organização Mundial da Saúde (2018): para ruído de
   parques eólicos, Lden ≤ 45 dB(A), uma orientação de saúde pública, não
   um limite legal. */
function ldenGaugeWithWhoHtml(value, officialZone, whoLimit){
  const limiteSensivel = 55, limiteMista = 65;
  const max = limiteMista + 10;
  const pctSensivel = Math.min(100, (limiteSensivel/max)*100);
  const pctMista = Math.min(100, (limiteMista/max)*100);
  const pctValue = Math.max(2, Math.min(100, (value/max)*100));
  const pctWho = Math.min(100, (whoLimit/max)*100);

  const legalLimit = officialZone ? officialZone.lden : null;
  const cumpreLegal = legalLimit === null ? null : value <= legalLimit;
  const cumpreSensivel = value <= limiteSensivel;
  const whoExceeded = value > whoLimit;

  return `
    <div class="gauge-wrap">
      <div class="zone-verdict ${cumpreLegal === null || cumpreLegal ? 'zone-ok' : 'zone-bad'}">
        <div class="zone-verdict-icon">${cumpreLegal === null || cumpreLegal ? '✓' : '✗'}</div>
        <div>
          <div class="zone-verdict-title">${officialZone ? `Zona oficialmente aplicada: ${officialZone.name} (limite ${legalLimit} dB(A) Lden)` : "Classificação acústica do ponto por confirmar"}</div>
          <div class="zone-verdict-text">${officialZone ? `${value.toFixed(1)} dB(A), ${cumpreLegal ? "dentro do limite legal" : "acima do limite legal"} aplicável.` : "O ponto é uma estimativa fora dos recetores oficiais; esta barra não atribui um limite legal local."}</div>
        </div>
      </div>

      <div class="gauge-track">
        <div class="gauge-zone-sens" style="width:${pctSensivel}%"></div>
        <div class="gauge-zone-mista" style="left:${pctSensivel}%; width:${pctMista-pctSensivel}%"></div>
        <div class="gauge-zone-over" style="left:${pctMista}%; width:${100-pctMista}%"></div>
        <div class="gauge-who-line" style="left:${pctWho}%;"></div>
        <div class="gauge-marker" style="left:${pctValue}%;" title="${value.toFixed(1)} dB(A)"></div>
      </div>
      <div class="gauge-ticks">
        <span style="left:${pctWho}%;" class="tick-who">OMS<br>45</span>
        <span style="left:${pctSensivel}%;">sensível*<br>55</span>
        <span style="left:${pctMista}%;" class="tick-mista">mista<br>65</span>
      </div>

      <div class="ref-note">*Zona sensível: limite mais apertado. Como comparação, este valor ${cumpreSensivel ? "ficaria dentro" : "ficaria acima"} desse limite de 55 dB(A).</div>

      <div class="who-callout ${whoExceeded ? 'who-exceeded' : 'who-ok'}">
        <div class="who-callout-icon">${whoExceeded ? '⚠' : '✓'}</div>
        <div>
          <div class="who-callout-title">Organização Mundial da Saúde: recomenda-se Lden ≤ 45 dB(A) para ruído eólico</div>
          <div class="who-callout-text">${whoExceeded
            ? `Este valor está ${(value-whoLimit).toFixed(1)} dB(A) acima da recomendação da OMS para proteger a saúde das populações expostas a ruído de parques eólicos (não é um limite legal em Portugal, mas sim uma orientação de saúde pública, mais protetora do que a lei em vigor).`
            : `Este valor está dentro da recomendação da OMS para ruído de parques eólicos.`}</div>
        </div>
      </div>
    </div>`;
}


function popupTurbine(name, isExcluded){
  return `<b>${name}</b><br>
    <div class="pop-fact"><span class="k">Estado (fase de exploração)</span>
      <span class="v">${isExcluded ? "Emissão máxima" : "Modo restringido"}</span></div>
    <div class="pop-fact"><span class="k">Modelo</span><span class="v">Vestas V172</span></div>
    <div class="pop-fact"><span class="k">Potência / altura torre</span><span class="v">7,2 MW / 135 m</span></div>
    ${isExcluded ? `<div class="pop-flag">Não consta da lista de aerogeradores sujeitos ao modo mais silencioso no cenário "com medidas de minimização" do EIA.</div>` : ""}`;
}

/* ---------- SOUND PROPAGATION (simplified, illustrative) ---------- */
/* Modelo simplificado de propagação esférica em campo livre:
   SPL_bruto(d) = Lw - 20*log10(d) - 11 - k*d - windAtt
   Isto NÃO é o modelo CNOSSOS-EU usado no EIA (que integra terreno, solo, meteorologia).

   VALIDAÇÃO E CALIBRAÇÃO (versão 2, por regressão): comparámos a soma energética
   do modelo bruto (sem calibração) com o "ruído particular" real (só a contribuição
   dos aerogeradores, sem ruído de fundo) reportado pelo EIA para os 29 recetores
   RA01 a RA29 (Quadro 8.66, Lden). Uma calibração fixa (mesmo ajuste para qualquer
   distância) já reduzia o erro para ±1,8 dB em média. Fizemos mais um passo: uma
   regressão linear do erro em função da distância ao aerogerador mais próximo,
   já que o erro do modelo bruto não era constante (era maior em recetores mais
   distantes, sinal de que a nossa curva de atenuação com a distância é demasiado
   acentuada face ao modelo real). A regressão deu:
      erro(d) ≈ 8,26 + 0,00699 × d   (d em metros, erro em dB)
   Aplicada aos 29 recetores previstos pelo CNOSSOS, esta calibração por distância reduz o desvio
   padrão do erro para cerca de 0,96 dB, e o erro máximo para cerca de 2,25 dB.
   É uma melhoria real e testada, mas continua a ser um modelo simplificado
   calibrado com 29 pontos de uma área específica: pode não generalizar da mesma
   forma para zonas muito diferentes em termos de terreno. Não é o modelo
   CNOSSOS-EU e não substitui os valores oficiais, disponíveis com precisão total
   na camada "Recetores oficiais do EIA".

   O simulador de "condições de vento" NÃO altera a potência sonora do aerogerador
   (o EIA não fornece uma curva LWA por velocidade de vento, só dois modos fixos:
   105,0 e 106,9 dB(A)). Em vez disso, simula o efeito, bem documentado na acústica
   ambiental, da direção do vento na propagação: o som viaja mais longe a favor do
   vento (situação que o EIA assume como pior cenário, com 100% condições favoráveis)
   e é mais atenuado contra o vento. Os valores de atenuação usados são indicativos,
   de boas práticas do setor, não específicos deste projeto. */
const LW_MAX = 106.9;       // dB(A), emissão máxima (Vestas V172 PO7200)
const LW_RESTRICTED = 105.0; // dB(A), cenário "com medidas de minimização"
const K_EXCESS = 0.006;      // atenuação excedente ligeira, ilustrativa
const RING_TARGETS = [55, 50, 45, 40, 35]; // dB(A)
const WIND_ATT = { favoravel: 0, cruzado: 5, contra: 10 }; // dB(A), indicativo
const CALIBRATION_A = 9.22;      // dB(A), regressão contra 29 previsões CNOSSOS do EIA
const CALIBRATION_B = 0.00499;   // dB(A) por metro, regressão contra 29 previsões CNOSSOS do EIA
let windCondition = "favoravel";

/* ---------- ESPECIFICAÇÕES REAIS DO AEROGERADOR (EIA, Vol. II, Quadro 5.1, p. 82) ---------- */
/* Vestas V172: início de funcionamento 3 m/s, potência nominal a 13 m/s, paragem de
   segurança a 25 m/s. Velocidade de rotação do rotor: 4,3 a 12,1 rpm.
   O EIA não fornece uma curva contínua de emissão sonora por velocidade de vento
   (só os dois modos fixos, 105,0 e 106,9 dB(A)), por isso a emissão sonora usada
   é constante enquanto o aerogerador está a operar (entre 3 e 25 m/s) e é zero
   (parado) fora desse intervalo. A velocidade de rotação (rpm), essa sim, é
   interpolada de forma linear entre os dois pontos de especificação do quadro. */
const V_CUTIN = 3, V_RATED = 13, V_CUTOUT = 25;
const RPM_CUTIN = 4.3, RPM_RATED = 12.1;
let currentWindSpeed = 8;

function rpmForWind(v){
  if(v < V_CUTIN || v > V_CUTOUT) return 0;
  if(v >= V_RATED) return RPM_RATED;
  const f = (v - V_CUTIN)/(V_RATED - V_CUTIN);
  return RPM_CUTIN + f*(RPM_RATED - RPM_CUTIN);
}
function isOperating(v){ return v >= V_CUTIN && v <= V_CUTOUT; }

/* Valor bruto, sem calibração (usado internamente; a calibração é aplicada uma
   única vez por ponto, com base na distância ao aerogerador mais próximo, não
   por cada aerogerador somado, para não sobrestimar a soma de várias fontes). */
function splRaw(lw, d){
  if(!isOperating(currentWindSpeed)) return -100;
  if(d < 1) d = 1;
  return lw - 20*Math.log10(d) - 11 - K_EXCESS*d - WIND_ATT[windCondition];
}

/* Usada para uma única fonte (curvas de propagação à volta de um aerogerador
   selecionado): aqui a distância à fonte é, por definição, a distância ao
   aerogerador mais próximo, pelo que a calibração por distância se aplica
   diretamente. */
function splAtDistance(lw, d){
  const raw = splRaw(lw, d);
  if(raw <= -100) return raw;
  return raw + CALIBRATION_A + CALIBRATION_B*d;
}
function distanceForSpl(lw, targetSpl){
  let lo = 1, hi = 20000;
  for(let i=0;i<60;i++){
    const mid = (lo+hi)/2;
    if(splAtDistance(lw, mid) > targetSpl) lo = mid; else hi = mid;
  }
  return (lo+hi)/2;
}

/* Soma energética (logarítmica) da contribuição de todos os aerogeradores num
   ponto. A calibração por distância é aplicada uma única vez ao resultado final,
   com base na distância ao aerogerador mais próximo desse ponto (foi assim que
   a regressão foi calculada e validada; aplicar a calibração a cada fonte antes
   de somar sobrestima o resultado). */
function cumulativeSplAt(point){
  let energy = 0, nearestDist = Infinity;
  Object.entries(turbines).forEach(([name, latlng]) => {
    const d = haversine(point, latlng);
    if(d < nearestDist) nearestDist = d;
    const lw = excludedFromMinimisation.has(name) ? LW_MAX : LW_RESTRICTED;
    energy += Math.pow(10, splRaw(lw, d)/10);
  });
  const rawTotal = 10*Math.log10(energy);
  if(rawTotal <= -100) return rawTotal;
  return rawTotal + CALIBRATION_A + CALIBRATION_B*nearestDist;
}

function setWindCondition(value){
  windCondition = value;
  if(currentTurbine) drawPropagation(currentTurbine, excludedFromMinimisation.has(currentTurbine));
  if(lastClickedLatLng) testPoint(lastClickedLatLng, true);
}

function setWindSpeed(v){
  currentWindSpeed = v;
  const rpm = rpmForWind(v);
  const root = document.documentElement.style;
  if(rpm <= 0){
    root.setProperty('--spin-state', 'paused');
  } else {
    root.setProperty('--spin-duration', (60/rpm).toFixed(2) + 's');
    root.setProperty('--spin-state', 'running');
  }

  let statusHtml, statusClass;
  if(v < V_CUTIN){ statusHtml = "Parado, vento insuficiente para arrancar"; statusClass = "status-stopped"; }
  else if(v > V_CUTOUT){ statusHtml = "Parado, paragem de segurança (vento excessivo)"; statusClass = "status-stopped"; }
  else if(v >= V_RATED){ statusHtml = "A operar, potência e rotação nominais"; statusClass = "status-running"; }
  else { statusHtml = "A operar, a acelerar até à potência nominal"; statusClass = "status-running"; }

  document.getElementById('windSpeedReadout').innerHTML = `
    <div><b>${v.toFixed(1)} m/s</b> (${(v*3.6).toFixed(0)} km/h): <span class="${statusClass}">${statusHtml}</span></div>
    <div style="margin-top:4px;">Rotação do rotor: <b>${rpm > 0 ? rpm.toFixed(1) + " rpm" : "0 rpm (parado)"}</b></div>
    <div style="margin-top:4px;">Emissão sonora: <b>${rpm > 0 ? "ao nível definido no EIA (105,0 ou 106,9 dB(A))" : "nenhuma (sem operação)"}</b></div>
  `;

  if(currentTurbine) drawPropagation(currentTurbine, excludedFromMinimisation.has(currentTurbine));
  if(lastClickedLatLng) testPoint(lastClickedLatLng, true);
}

let propagationGroup = null;
let pulseTimer = null;
let propagationOn = true;

function clearPropagation(){
  if(propagationGroup){ map.removeLayer(propagationGroup); propagationGroup = null; }
  if(pulseTimer){ clearInterval(pulseTimer); pulseTimer = null; }
  document.getElementById('dbLegend').classList.remove('visible');
  document.getElementById('propToggleWrap').classList.remove('visible');
  document.getElementById('windSelectWrap').classList.remove('visible');
}

function drawPropagation(name, isExcluded){
  clearPropagation();
  if(!propagationOn) { document.getElementById('propToggleWrap').classList.add('visible'); return; }

  const center = turbines[name];
  const lw = isExcluded ? LW_MAX : LW_RESTRICTED;
  propagationGroup = L.layerGroup().addTo(map);

  const lgRows = document.getElementById('lgRows');
  lgRows.innerHTML = '';

  RING_TARGETS.forEach((target, i) => {
    const radius = distanceForSpl(lw, target);
    const opacity = 0.55 - i*0.09;
    const circle = L.circle(center, {
      radius, color:"#C4432A", weight:1.3, fillColor:"#C4432A",
      fillOpacity: Math.max(opacity*0.16, 0.02), opacity: Math.max(opacity,0.18), dashArray:"3,4"
    });
    circle.bindTooltip(target + " dB(A) · " + Math.round(radius) + " m", {direction:"top", className:"dist-tip"});
    circle.addTo(propagationGroup);

    const row = document.createElement('div');
    row.className = 'lg-row';
    row.innerHTML = `<span class="lg-swatch" style="opacity:${Math.max(opacity,0.25)}"></span>${target} dB(A) · até ${Math.round(radius)} m`;
    lgRows.appendChild(row);
  });

  /* animated pulse ring, purely visual metaphor for propagation, not a physical simulation of wave speed */
  const maxR = distanceForSpl(lw, RING_TARGETS[RING_TARGETS.length-1]);
  const pulse = L.circle(center, {radius:10, color:"#C4432A", weight:2, fillOpacity:0, opacity:0.9});
  pulse.addTo(propagationGroup);
  let r = 10;
  pulseTimer = setInterval(() => {
    r += maxR/40;
    if(r > maxR){ r = 10; }
    pulse.setRadius(r);
    pulse.setStyle({opacity: Math.max(0.9*(1 - r/maxR), 0)});
  }, 60);

  document.getElementById('dbLegend').classList.add('visible');
  document.getElementById('propToggleWrap').classList.add('visible');
  document.getElementById('windSelectWrap').classList.add('visible');
  document.getElementById('windSelect').value = windCondition;
}

function setPropagationVisible(on){
  propagationOn = on;
  if(currentTurbine) drawPropagation(currentTurbine, excludedFromMinimisation.has(currentTurbine));
  else clearPropagation();
}

let currentTurbine = null;

function showTurbineInfo(name, isExcluded){
  currentTurbine = name;
  drawPropagation(name, isExcluded);
  clearMeasure();
  const lw = isExcluded ? LW_MAX : LW_RESTRICTED;
  updateDbScale(lw, "no cubo do aerogerador " + name + " (fonte, não no recetor)");
  setInfo(`
    <span class="kicker">Aerogerador</span>
    <h3>${name}</h3>
    <div class="fact"><span class="k">Coordenadas (WGS84)</span><span class="v">${turbines[name][0].toFixed(5)}, ${turbines[name][1].toFixed(5)}</span></div>
    <div class="fact"><span class="k">Fase de exploração</span><span class="v">${isExcluded ? "Emissão máxima (106,9 dB(A))" : "Sujeito a restrição (105,0 dB(A))"}</span></div>
    <div class="fact"><span class="k">Modelo / potência</span><span class="v">Vestas V172 / até 7,2 MW</span></div>
    <div class="fact"><span class="k">Altura torre / rotor / pá</span><span class="v">135 m / 172 m / 86 m</span></div>
    ${isExcluded ? `<div class="flag">Este aerogerador não consta da lista de aerogeradores restringidos no cenário "com medidas de minimização" do EIA (cap. 8.11.3), pelo que opera sempre à emissão sonora máxima.</div>` : ""}
    <div class="flag" style="background:#FBEAE3; border-left-color:#C4432A; color:#6B2415;">As curvas no mapa são um modelo simplificado (esférico, campo livre), apenas ilustrativo do alcance. O EIA usa o modelo CNOSSOS-EU, que considera terreno, solo e meteorologia, e produz valores diferentes.</div>
  `);
}

function toggleLayer(key, on){
  if(on) map.addLayer(layers[key]); else map.removeLayer(layers[key]);
}

/* ---------- LINE OF SIGHT (terrain screening) ---------- */
/* Usa a API pública Open-Meteo (dados de elevação SRTM/GMTED, resolução ~90 m).
   Calcula o perfil de terreno entre a casa e o aerogerador e verifica se o relevo
   bloqueia a linha reta entre o recetor (a 1,5 m e a 4 m de altura) e o cubo do
   aerogerador (altura da torre: 135 m, EIA, cap. 5.3.1).
   Limitação importante: só considera o relevo (dados de eleva\u00e7\u00e3o do solo), não
   vegetação nem construções, que também podem bloquear ou não a linha de vista. */
const HUB_HEIGHT = 135; // m, EIA cap. 5.3.1
const N_SAMPLES = 32;

function haversine(a, b){
  const R = 6371000;
  const toRad = x => x*Math.PI/180;
  const dLat = toRad(b[0]-a[0]), dLon = toRad(b[1]-a[1]);
  const s = Math.sin(dLat/2)**2 + Math.cos(toRad(a[0]))*Math.cos(toRad(b[0]))*Math.sin(dLon/2)**2;
  return 2*R*Math.asin(Math.sqrt(s));
}

async function runLineOfSight(coords, turbineName){
  const turbineCoords = turbines[turbineName];
  const resultBox = document.getElementById('losResult');
  const btn = document.getElementById('losBtn');
  btn.disabled = true;
  btn.textContent = "A obter dados de elevação...";
  resultBox.innerHTML = `<p class="empty" style="margin-top:10px;">A consultar o modelo de elevação de terreno (Open-Meteo, SRTM)...</p>`;

  try{
    const pts = [];
    for(let i=0;i<=N_SAMPLES;i++){
      const f = i/N_SAMPLES;
      pts.push([coords[0] + f*(turbineCoords[0]-coords[0]), coords[1] + f*(turbineCoords[1]-coords[1])]);
    }
    const lats = pts.map(p=>p[0].toFixed(6)).join(',');
    const lons = pts.map(p=>p[1].toFixed(6)).join(',');
    const url = `https://api.open-meteo.com/v1/elevation?latitude=${lats}&longitude=${lons}`;
    const res = await fetch(url);
    if(!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    const elevations = data.elevation;
    if(!elevations || elevations.length !== pts.length) throw new Error("resposta inesperada da API");

    const totalDist = haversine(coords, turbineCoords);
    const groundHouse = elevations[0];
    const groundTurbine = elevations[elevations.length-1];
    const targetZ = groundTurbine + HUB_HEIGHT;

    function analyse(receptorHeight){
      const observerZ = groundHouse + receptorHeight;
      let blocked = false, worstClearance = Infinity, worstIdx = 0;
      for(let i=1;i<elevations.length-1;i++){
        const f = i/N_SAMPLES;
        const sightZ = observerZ + f*(targetZ - observerZ);
        const clearance = sightZ - elevations[i];
        if(clearance < worstClearance){ worstClearance = clearance; worstIdx = i; }
        if(clearance < 0) blocked = true;
      }
      return {blocked, worstClearance, worstIdx};
    }
    const r15 = analyse(1.5);
    const r4 = analyse(4);

    renderLosChart(elevations, totalDist, groundHouse, groundTurbine, targetZ, turbineName);

    resultBox.innerHTML = `
      <div class="los-row"><span class="los-dot" style="background:#4A6670"></span>
        Recetor a 1,5 m (altura usada no EIA): <b>${r15.blocked ? "obstruída pelo relevo" : "linha de vista livre"}</b>
        ${r15.blocked ? ` (défice de ${Math.abs(Math.round(r15.worstClearance))} m a ${Math.round(r15.worstIdx/N_SAMPLES*totalDist)} m do ponto)` : ""}
      </div>
      <div class="los-row"><span class="los-dot" style="background:#C4432A"></span>
        Recetor a 4 m (mínimo recomendado no estudo citado): <b>${r4.blocked ? "obstruída pelo relevo" : "linha de vista livre"}</b>
        ${r4.blocked ? ` (défice de ${Math.abs(Math.round(r4.worstClearance))} m a ${Math.round(r4.worstIdx/N_SAMPLES*totalDist)} m do ponto)` : ""}
      </div>
      <div class="flag" style="margin-top:10px;">Cálculo baseado apenas em relevo (modelo de elevação de ~90 m de resolução), sem vegetação nem construções. Serve para triagem, não substitui um estudo de visibilidade em campo.</div>
    `;
  }catch(err){
    resultBox.innerHTML = `<div class="flag" style="background:#FBEAE3; border-left-color:#C4432A; color:#6B2415; margin-top:10px;">Não foi possível obter os dados de elevação (${escapeHtml(err.message)}). Verifica a ligação à internet e tenta novamente.</div>`;
  }finally{
    btn.disabled = false;
    btn.textContent = "Calcular linha de vista até " + turbineName;
  }
}

function renderLosChart(elevations, totalDist, groundHouse, groundTurbine, targetZ, agName){
  const w = 280, hgt = 130, pad = 6;
  const minZ = Math.min(...elevations, groundHouse+1.5) - 8;
  const maxZ = Math.max(targetZ, ...elevations) + 8;
  const xScale = i => pad + (i/N_SAMPLES) * (w-2*pad);
  const yScale = z => hgt - pad - ((z-minZ)/(maxZ-minZ)) * (hgt-2*pad);

  const terrainPts = elevations.map((z,i) => `${xScale(i)},${yScale(z)}`).join(' ');
  const terrainArea = `${xScale(0)},${hgt-pad} ${terrainPts} ${xScale(N_SAMPLES)},${hgt-pad}`;

  const sight15 = `${xScale(0)},${yScale(groundHouse+1.5)} ${xScale(N_SAMPLES)},${yScale(targetZ)}`;
  const sight4 = `${xScale(0)},${yScale(groundHouse+4)} ${xScale(N_SAMPLES)},${yScale(targetZ)}`;

  const svg = `
    <svg viewBox="0 0 ${w} ${hgt}" width="100%" style="margin-top:10px; background:#fff; border:1px solid var(--paper-deep); border-radius:2px;">
      <polygon points="${terrainArea}" fill="#DCD9C8" stroke="#B9B79E" stroke-width="1"/>
      <polyline points="${sight15}" fill="none" stroke="#4A6670" stroke-width="1.4" stroke-dasharray="4,3"/>
      <polyline points="${sight4}" fill="none" stroke="#C4432A" stroke-width="1.4" stroke-dasharray="4,3"/>
      <circle cx="${xScale(0)}" cy="${yScale(groundHouse+1.5)}" r="2.5" fill="#4A6670"/>
      <circle cx="${xScale(N_SAMPLES)}" cy="${yScale(targetZ)}" r="2.5" fill="#C4432A"/>
      <text x="${pad}" y="${hgt-1}" font-size="7" fill="#4A5248" font-family="IBM Plex Mono, monospace">ponto</text>
      <text x="${w-pad-18}" y="${hgt-1}" font-size="7" fill="#4A5248" font-family="IBM Plex Mono, monospace">${agName}</text>
    </svg>`;
  document.getElementById('losResult').insertAdjacentHTML('afterbegin', svg);
}

function focusProject(){
  map.flyTo([40.815, -7.59], 14, { duration: 1.1 });

  const sidebar = document.getElementById('sidebar');

  if (window.innerWidth <= 860 && sidebar) {
    sidebar.classList.remove('open');
  }
}

/* ---------- GRÁFICO DE PRECISÃO (previsto vs. real, 29 pontos de validação) ---------- */
/* Ruído particular real (Lden, só a contribuição dos aerogeradores, sem ruído de
   fundo), EIA Quadro 8.66, os mesmos 29 valores usados para calibrar o modelo. */
const VALIDATION_REAL_PARTICULAR = {
  RA01:51.7, RA02:50.5, RA03:51.5, RA04:45.9, RA05:45.5,
  RA06:48.8, RA07:48.3, RA08:48.0, RA09:48.9, RA10:48.9, RA11:48.3, RA12:48.3,
  RA13:48.2, RA14:50.7, RA15:48.9, RA16:49.0, RA17:49.7, RA18:49.8,
  RA19:51.3, RA20:51.0, RA21:50.3, RA22:49.9, RA23:49.9, RA24:48.8,
  RA25:51.2, RA26:50.8, RA27:46.4, RA28:46.3, RA29:46.5,
};

function buildAccuracyChart(){
  const points = officialReceptors.map(r => ({
    id: r.id,
    real: VALIDATION_REAL_PARTICULAR[r.id],
    predicted: cumulativeSplAt(r.coords)
  }));

  const W = 620, H = 420, pad = 46;
  const allVals = points.flatMap(p => [p.real, p.predicted]);
  const lo = Math.floor(Math.min(...allVals) - 1.5);
  const hi = Math.ceil(Math.max(...allVals) + 1.5);
  const scale = v => pad + ((v - lo)/(hi - lo)) * (W - 2*pad);
  const scaleY = v => (H - pad) - ((v - lo)/(hi - lo)) * (H - 2*pad);

  const diagonal = `M${scale(lo)},${scaleY(lo)} L${scale(hi)},${scaleY(hi)}`;
  const gridLines = [];
  for(let v = Math.ceil(lo/2)*2; v <= hi; v += 2){
    gridLines.push(`<line x1="${scale(v)}" y1="${pad}" x2="${scale(v)}" y2="${H-pad}" stroke="#EFEDE0" stroke-width="1"/>`);
    gridLines.push(`<line x1="${pad}" y1="${scaleY(v)}" x2="${W-pad}" y2="${scaleY(v)}" stroke="#EFEDE0" stroke-width="1"/>`);
    gridLines.push(`<text x="${scale(v)}" y="${H-pad+16}" font-size="9" fill="#8B8B7A" font-family="IBM Plex Mono, monospace" text-anchor="middle">${v}</text>`);
    gridLines.push(`<text x="${pad-8}" y="${scaleY(v)+3}" font-size="9" fill="#8B8B7A" font-family="IBM Plex Mono, monospace" text-anchor="end">${v}</text>`);
  }

  const dots = points.map(p => `
    <circle cx="${scale(p.predicted)}" cy="${scaleY(p.real)}" r="4.5" fill="#2F5233" fill-opacity="0.75" stroke="#fff" stroke-width="1">
      <title>${p.id}: previsto ${p.predicted.toFixed(1)} dB, real ${p.real.toFixed(1)} dB</title>
    </circle>`).join('');

  const svg = `
    <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
      ${gridLines.join('')}
      <line x1="${pad}" y1="${H-pad}" x2="${W-pad}" y2="${H-pad}" stroke="#8B8B7A" stroke-width="1.3"/>
      <line x1="${pad}" y1="${pad}" x2="${pad}" y2="${H-pad}" stroke="#8B8B7A" stroke-width="1.3"/>
      <path d="${diagonal}" stroke="#C4432A" stroke-width="1.4" stroke-dasharray="5,4" fill="none"/>
      ${dots}
      <text x="${W/2}" y="${H-8}" font-size="10.5" fill="#4A5248" font-family="IBM Plex Sans, sans-serif" text-anchor="middle">dB(A) previsto pelo modelo (calibrado)</text>
      <text x="14" y="${H/2}" font-size="10.5" fill="#4A5248" font-family="IBM Plex Sans, sans-serif" text-anchor="middle" transform="rotate(-90, 14, ${H/2})">dB(A) real (EIA)</text>
      <text x="${scale(hi)-6}" y="${scaleY(hi)-8}" font-size="9.5" fill="#C4432A" font-family="IBM Plex Sans, sans-serif" text-anchor="end">linha perfeita (previsto = real)</text>
    </svg>`;
  document.getElementById('accuracyChartHolder').innerHTML = svg;
}

if (document.getElementById('dbScaleHolderBig')) buildBigDbScale();
if (document.getElementById('accuracyChartHolder')) buildAccuracyChart();

setWindSpeed(currentWindSpeed);

/* ---------- REDIMENSIONAR A BARRA LATERAL (arrastar) ---------- */
(function(){
  const sidebar = document.getElementById('sidebar');
  const handle = document.getElementById('resizeHandle');
  let dragging = false;

  function syncHandlePosition(){
    handle.style.left = sidebar.getBoundingClientRect().width + 'px';
  }
  syncHandlePosition();
  window.addEventListener('resize', syncHandlePosition);
  // A barra lateral pode mudar de largura por outras razões (ex: entrar no mapa
  // vindo da página inicial); um pequeno intervalo mantém a pega sempre alinhada.
  setInterval(syncHandlePosition, 400);

  function startDrag(clientX){
    dragging = true;
    handle.classList.add('dragging');
    document.body.classList.add('resizing');
  }
  function moveDrag(clientX){
    if(!dragging) return;
    const min = 230, max = window.innerWidth * 0.75;
    const w = Math.min(max, Math.max(min, clientX));
    sidebar.style.width = w + 'px';
    syncHandlePosition();
  }
  function endDrag(){
    if(!dragging) return;
    dragging = false;
    handle.classList.remove('dragging');
    document.body.classList.remove('resizing');
    map.invalidateSize();
  }

  handle.addEventListener('mousedown', (e) => { startDrag(e.clientX); e.preventDefault(); });
  window.addEventListener('mousemove', (e) => moveDrag(e.clientX));
  window.addEventListener('mouseup', endDrag);

  handle.addEventListener('touchstart', (e) => { startDrag(e.touches[0].clientX); }, {passive:true});
  window.addEventListener('touchmove', (e) => { if(dragging) moveDrag(e.touches[0].clientX); }, {passive:true});
  window.addEventListener('touchend', endDrag);
})();

setTimeout(() => {
  map.invalidateSize();
  focusProject();
}, 100);
