/* ---------- DADOS ----------
   Parque Eólico da Guarda (PEG) e respetiva ligação à RESP. Promotor:
   Iberdrola Renewables Portugal. Geometria extraída do GeoPackage
   fornecido (IRP Guarda Windfarm.gpkg; camadas em ETRS89/PT-TM06 ou já em
   WGS84, convertidas conforme necessário) e simplificada (decimação de
   vértices nos corredores/área) apenas para leveza do ficheiro.
   Fonte da ficha técnica: Proposta de Definição do Âmbito do EIA do
   Parque Eólico da Guarda, KEO para Iberdrola Renewables Portugal,
   24.07.2026 (26-9164-EN00, Rev.00). */

const areaEstudo = [[40.666722, -7.348699], [40.666753, -7.348855], [40.666789, -7.349102], [40.667894, -7.359312], [40.667902, -7.359437], [40.667907, -7.359638], [40.667836, -7.367852], [40.667828, -7.367997], [40.667804, -7.368227], [40.667752, -7.36852], [40.66599, -7.376473], [40.665932, -7.376681], [40.665895, -7.376844], [40.662824, -7.384623], [40.662104, -7.385929], [40.660907, -7.388068], [40.659319, -7.391378], [40.658323, -7.393439], [40.658234, -7.3936], [40.658125, -7.393771], [40.65799, -7.393951], [40.657919, -7.394034], [40.634951, -7.419444], [40.634867, -7.419532], [40.634705, -7.41968], [40.634534, -7.419808], [40.634362, -7.419913], [40.63419, -7.419995], [40.634077, -7.420038], [40.633885, -7.420093], [40.63371, -7.420123], [40.633513, -7.420136], [40.633396, -7.420132], [40.6332, -7.420109], [40.633007, -7.420063], [40.632817, -7.419995], [40.632633, -7.419906], [40.632457, -7.419797], [40.632286, -7.419666], [40.632141, -7.419533], [40.63199, -7.419368], [40.631905, -7.419261], [40.631779, -7.419081], [40.631665, -7.418886], [40.6316, -7.418758], [40.631502, -7.418534], [40.63142, -7.4183], [40.631354, -7.418057], [40.631304, -7.417808], [40.63127, -7.417554], [40.631254, -7.417297], [40.631255, -7.417042], [40.631273, -7.416782], [40.631304, -7.416554], [40.631354, -7.416305], [40.631392, -7.416158], [40.631462, -7.415934], [40.631549, -7.415714], [40.63161, -7.415582], [40.631724, -7.415372], [40.631836, -7.415196], [40.63185, -7.415176], [40.631903, -7.415102], [40.631971, -7.415016], [40.631985, -7.414999], [40.63205, -7.414924], [40.656544, -7.386068], [40.657189, -7.384727], [40.657296, -7.3814], [40.656848, -7.378251], [40.654033, -7.370823], [40.653951, -7.370703], [40.651168, -7.366087], [40.651071, -7.365913], [40.650988, -7.365738], [40.645749, -7.354367], [40.645644, -7.354132], [40.64558, -7.353961], [40.64178, -7.341489], [40.635439, -7.334023], [40.633107, -7.326661], [40.633714, -7.319946], [40.631871, -7.286319], [40.62019, -7.284649], [40.602142, -7.284358], [40.597773, -7.28378], [40.591051, -7.281681], [40.586516, -7.279998], [40.582637, -7.281364], [40.577328, -7.279176], [40.575281, -7.276499], [40.573924, -7.277203], [40.569062, -7.282581], [40.55957, -7.2792], [40.555744, -7.276183], [40.552735, -7.264616], [40.551649, -7.235883], [40.557046, -7.229487], [40.561238, -7.228837], [40.563375, -7.229146], [40.59454, -7.229996], [40.598471, -7.23336], [40.602522, -7.242144], [40.604475, -7.244928], [40.606465, -7.24594], [40.614903, -7.248319], [40.620743, -7.251013], [40.623672, -7.246216], [40.634084, -7.245963], [40.636569, -7.246415], [40.640561, -7.249409], [40.643492, -7.258096], [40.644691, -7.26042], [40.654079, -7.263668], [40.656148, -7.27517], [40.655735, -7.278942], [40.65729, -7.289375], [40.656553, -7.297967], [40.655791, -7.300543], [40.658221, -7.310097], [40.658336, -7.310292], [40.658401, -7.310421], [40.658498, -7.310645], [40.658581, -7.310879], [40.658642, -7.311101]];

const corredor1 = [[40.666295, -7.348886], [40.667447, -7.359385], [40.667388, -7.367737], [40.667341, -7.368247], [40.665513, -7.376467], [40.665324, -7.376918], [40.661977, -7.383736], [40.662026, -7.384193], [40.662001, -7.384707], [40.661891, -7.385201], [40.661676, -7.3857], [40.657978, -7.393052], [40.657785, -7.393383], [40.634661, -7.418992], [40.634335, -7.419278], [40.63397, -7.419464], [40.633582, -7.419543], [40.633191, -7.419509], [40.632814, -7.419365], [40.632471, -7.419117], [40.632176, -7.418778], [40.631944, -7.418363], [40.631786, -7.417892], [40.631709, -7.417387], [40.631718, -7.416872], [40.631811, -7.416372], [40.631985, -7.415911], [40.632229, -7.415511], [40.656824, -7.386593], [40.662202, -7.373714], [40.650296, -7.306011], [40.639126, -7.293979], [40.638881, -7.293738], [40.63211, -7.285791], [40.613278, -7.268963], [40.605563, -7.263481], [40.60528, -7.263125], [40.605062, -7.262697], [40.60492, -7.262217], [40.60486, -7.261709], [40.604886, -7.261195], [40.604995, -7.260701], [40.605184, -7.26025], [40.605443, -7.259864], [40.605759, -7.259559], [40.606118, -7.259352], [40.606502, -7.259252], [40.606894, -7.259263], [40.607275, -7.259385], [40.615057, -7.264851], [40.631722, -7.278904], [40.63386, -7.281367], [40.634818, -7.282621], [40.649223, -7.296777], [40.64947, -7.297026], [40.653069, -7.302994], [40.658016, -7.310727], [40.65819, -7.311189]];

const corredor2 = [[40.665475, -7.376632], [40.657912, -7.39318], [40.657678, -7.393524], [40.634537, -7.419117], [40.634193, -7.419365], [40.633816, -7.419509], [40.633425, -7.419543], [40.633037, -7.419464], [40.632672, -7.419278], [40.632346, -7.418992], [40.632075, -7.41862], [40.631871, -7.41818], [40.631745, -7.417692], [40.631703, -7.417181], [40.631745, -7.416669], [40.631871, -7.416182], [40.632075, -7.415742], [40.63234, -7.415376], [40.658281, -7.38378], [40.654356, -7.370413], [40.651448, -7.36559], [40.646132, -7.354057], [40.645964, -7.353634], [40.63494, -7.329978], [40.634737, -7.329538], [40.634102, -7.326661], [40.634038, -7.326131], [40.632208, -7.285923], [40.621062, -7.275709], [40.605759, -7.263652], [40.605443, -7.263348], [40.605184, -7.262961], [40.604995, -7.26251], [40.604886, -7.262016], [40.60486, -7.261503], [40.60492, -7.260994], [40.605062, -7.260515], [40.60528, -7.260087], [40.605563, -7.259731], [40.605898, -7.259464], [40.60627, -7.259299], [40.606659, -7.259243], [40.607049, -7.259299], [40.607395, -7.259449], [40.615134, -7.264897], [40.631677, -7.278854], [40.631969, -7.279146], [40.637996, -7.327395], [40.645212, -7.338596], [40.645384, -7.338996], [40.651427, -7.356026]];

const subestacaoPoly = [[40.606096, -7.261542], [40.605229, -7.261153], [40.60545, -7.2603], [40.606312, -7.260643], [40.606096, -7.261542]];
const estaleiroPoly = [[40.60631, -7.260645], [40.607, -7.260916], [40.606818, -7.261873], [40.606097, -7.261538], [40.60631, -7.260645]];
const torreMeteorologica = [40.572097, -7.264472];

/* Aerogeradores (WTG01–WTG14), coordenadas reais do GeoPackage fornecido */
const turbines = {
  WTG01: [40.56199, -7.267882], WTG02: [40.566196, -7.271387], WTG03: [40.596716, -7.271655],
  WTG04: [40.571541, -7.265902], WTG05: [40.576514, -7.264644], WTG06: [40.582549, -7.269554],
  WTG07: [40.590963, -7.269869], WTG08: [40.606338, -7.268916], WTG09: [40.629037, -7.255707],
  WTG10: [40.634368, -7.257789], WTG11: [40.638838, -7.272441], WTG12: [40.647557, -7.271627],
  WTG13: [40.593252, -7.242987], WTG14: [40.589322, -7.239622]
};

/* ---------- ÁREA PROTEGIDA (contexto, não faz parte do projeto) ----------
   Limite do Parque Natural da Serra da Estrela, obtido a partir do serviço
   oficial do ICNF (sigservices.icnf.pt, camada BDG/RNAP), reprojetado para
   WGS84 e simplificado (~200m de tolerância) apenas para leveza do ficheiro.
   Os 14 aerogeradores foram verificados individualmente: nenhum cai dentro
   deste parque nem da ZEC "Serra da Estrela"; os mais próximos (WTG01–WTG08)
   ficam a poucos km do limite norte do parque. Mostrado para contexto. */
const pnSerraEstrela = [[40.6258,-7.3408],[40.623,-7.3426],[40.6268,-7.338],[40.6262,-7.3247],[40.6178,-7.3098],[40.6115,-7.3033],[40.6081,-7.3021],[40.6061,-7.3055],[40.6034,-7.3032],[40.6046,-7.2982],[40.5972,-7.2909],[40.5992,-7.2915],[40.5926,-7.2897],[40.5588,-7.3003],[40.5487,-7.3144],[40.5493,-7.3207],[40.5428,-7.3256],[40.5322,-7.3297],[40.5208,-7.3299],[40.5096,-7.3364],[40.4952,-7.3372],[40.4591,-7.3639],[40.4524,-7.3571],[40.4364,-7.3608],[40.4281,-7.3683],[40.4247,-7.3638],[40.4241,-7.372],[40.418,-7.3782],[40.4195,-7.3803],[40.4149,-7.3845],[40.4061,-7.3845],[40.4015,-7.3997],[40.3984,-7.3977],[40.3882,-7.4004],[40.3912,-7.4021],[40.3814,-7.4057],[40.3723,-7.4169],[40.3645,-7.4173],[40.3578,-7.4229],[40.3539,-7.4301],[40.3565,-7.4563],[40.3545,-7.4655],[40.3417,-7.4818],[40.3364,-7.4823],[40.3315,-7.4758],[40.3286,-7.4761],[40.3216,-7.4869],[40.3166,-7.4859],[40.2972,-7.5278],[40.2947,-7.5293],[40.2865,-7.5239],[40.2844,-7.5353],[40.2653,-7.5358],[40.2636,-7.541],[40.2677,-7.545],[40.2608,-7.5437],[40.2609,-7.5375],[40.2557,-7.5359],[40.2464,-7.543],[40.2384,-7.5818],[40.2378,-7.591],[40.2417,-7.5916],[40.2383,-7.5969],[40.2415,-7.6067],[40.2388,-7.6158],[40.2484,-7.6205],[40.2644,-7.6198],[40.266,-7.6246],[40.2532,-7.627],[40.2482,-7.6363],[40.2498,-7.6437],[40.2444,-7.6512],[40.2411,-7.6493],[40.238,-7.6524],[40.2399,-7.6593],[40.2332,-7.6697],[40.2376,-7.676],[40.242,-7.6705],[40.2439,-7.6756],[40.2498,-7.6715],[40.2475,-7.6768],[40.2537,-7.6815],[40.2452,-7.6818],[40.2413,-7.6888],[40.2545,-7.6942],[40.2509,-7.6987],[40.2564,-7.7003],[40.2573,-7.7074],[40.2525,-7.7114],[40.2474,-7.7098],[40.2504,-7.715],[40.2483,-7.7293],[40.2414,-7.7369],[40.2396,-7.7508],[40.2408,-7.7542],[40.2479,-7.7433],[40.2524,-7.7424],[40.2511,-7.7397],[40.2559,-7.7436],[40.2578,-7.7404],[40.2637,-7.7462],[40.2674,-7.7391],[40.2744,-7.738],[40.279,-7.7453],[40.2719,-7.7489],[40.2671,-7.7582],[40.2761,-7.7551],[40.277,-7.7518],[40.2793,-7.7557],[40.2811,-7.7535],[40.2907,-7.7568],[40.2939,-7.7546],[40.2903,-7.7827],[40.2926,-7.7789],[40.2919,-7.7847],[40.295,-7.7807],[40.2965,-7.7836],[40.3019,-7.7818],[40.3044,-7.7843],[40.2984,-7.8001],[40.2992,-7.8075],[40.3088,-7.8021],[40.309,-7.7935],[40.318,-7.7803],[40.3166,-7.7651],[40.3319,-7.7583],[40.3358,-7.7599],[40.3357,-7.7699],[40.3394,-7.7722],[40.3359,-7.7776],[40.3382,-7.7824],[40.3459,-7.7866],[40.3491,-7.804],[40.3572,-7.7872],[40.3566,-7.7774],[40.3572,-7.7796],[40.3614,-7.7778],[40.3649,-7.7655],[40.368,-7.7684],[40.3701,-7.7634],[40.3767,-7.7621],[40.3768,-7.7518],[40.382,-7.7386],[40.3791,-7.7405],[40.3779,-7.7369],[40.3826,-7.7232],[40.3899,-7.7195],[40.3925,-7.7119],[40.4011,-7.709],[40.4086,-7.6968],[40.419,-7.6994],[40.4192,-7.6945],[40.4265,-7.6866],[40.4269,-7.6733],[40.4309,-7.6752],[40.4439,-7.668],[40.4538,-7.6572],[40.4576,-7.6479],[40.4553,-7.6448],[40.4538,-7.6504],[40.4542,-7.6468],[40.4514,-7.647],[40.4534,-7.644],[40.4565,-7.6442],[40.4582,-7.6397],[40.4622,-7.6455],[40.4633,-7.6399],[40.4668,-7.6426],[40.4702,-7.6325],[40.4738,-7.6311],[40.4747,-7.6209],[40.4892,-7.6046],[40.4875,-7.6005],[40.4783,-7.5958],[40.4856,-7.5892],[40.4891,-7.5907],[40.4923,-7.583],[40.4988,-7.5855],[40.507,-7.5691],[40.5111,-7.5639],[40.5156,-7.5637],[40.5209,-7.5489],[40.5192,-7.5379],[40.536,-7.5486],[40.541,-7.536],[40.5462,-7.5337],[40.5515,-7.524],[40.5589,-7.4851],[40.5554,-7.4795],[40.5596,-7.4838],[40.5632,-7.4749],[40.5933,-7.4339],[40.6135,-7.4137],[40.6209,-7.4016],[40.6158,-7.3962],[40.6196,-7.3925],[40.6192,-7.3864],[40.6229,-7.3889],[40.6276,-7.3869],[40.6262,-7.3641],[40.6355,-7.3507],[40.6258,-7.3408]];

/* ---------- MAP SETUP ---------- */
const map = L.map('map', {zoomControl:false}).setView([40.60,-7.30], 11);
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

const layers = { area:L.layerGroup(), turbines:L.layerGroup(), sub:L.layerGroup(), estaleiro:L.layerGroup(), tower:L.layerGroup(), corr1:L.layerGroup(), corr2:L.layerGroup(), areaProtegida:L.layerGroup() };
Object.values(layers).forEach(l => l.addTo(map));
let projectBounds = null; /* preenchido mais abaixo, depois de conhecidos todos os elementos do projeto */
function toggleLayer(name, visible){
  if(!layers[name]) return;
  if(visible) layers[name].addTo(map); else map.removeLayer(layers[name]);
  /* O Parque Natural fica, em grande parte, fora do enquadramento inicial do projeto —
     ao ligar esta camada, ajusta a vista para mostrar o parque completo; ao desligá-la,
     volta ao enquadramento habitual do projeto. */
  if(name === 'areaProtegida'){
    if(visible){
      map.fitBounds(L.latLngBounds([...pnSerraEstrela, ...(projectBounds || [])]), {padding:[20,20]});
    } else if(projectBounds){
      map.fitBounds(L.latLngBounds(projectBounds), {padding:[20,20]});
    }
  }
}

/* ---------- ÁREA DE ESTUDO ---------- */
L.polygon(areaEstudo, {color:"#D9A441", weight:2.5, fillColor:"#D9A441", fillOpacity:.10})
  .bindPopup("<b>Área de estudo</b><br>Parque Eólico da Guarda")
  .on('click', () => setInfo(`
    <span class="kicker">Área de estudo</span><h3>Parque Eólico da Guarda</h3>
    <div class="panel-block"><div class="panel-block-body">
      <div class="fact"><span class="k">Concelhos</span><span class="v">Guarda · Celorico da Beira</span></div>
      <div class="fact"><span class="k">Aerogeradores</span><span class="v">14 · 7,2 MW cada · 100,8 MW total</span></div>
      <div class="fact"><span class="k">Produção média anual</span><span class="v">≈ 262,78 GWh/ano</span></div>
    </div></div>
    <div class="flag">Área definida na PDA para acomodar as diferentes soluções de implantação; a posição final dos 14 aerogeradores pode ainda ser ajustada em fases seguintes do procedimento de AIA.</div>
  `)).addTo(layers.area);

/* ---------- AEROGERADORES ---------- */
function turbineIcon(color, s){
  const blade = (angleDeg) => `<path d="M0,0 C -2.1,-3.6 -1.6,-8.4 0,-12 C 1.6,-8.4 2.1,-3.6 0,0 Z" fill="#FFFFFF" stroke="${color}" stroke-width="1" transform="rotate(${angleDeg})"/>`;
  const svg = `
    <svg width="${s}" height="${s}" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="16.5" x2="20" y2="37" stroke="#FFFFFF" stroke-width="3.2" stroke-linecap="round"/>
      <line x1="20" y1="16.5" x2="20" y2="37" stroke="${color}" stroke-width="1.4" stroke-linecap="round"/>
      <g transform="translate(20,15)">
        <g class="turbine-blades" style="transform-origin:0px 0px;">
          ${blade(0)}${blade(120)}${blade(240)}
        </g>
        <circle cx="0" cy="0" r="2.1" fill="${color}" stroke="#fff" stroke-width="0.8"/>
      </g>
    </svg>`;
  return L.divIcon({html:svg, className:'turbine-icon', iconSize:[s,s], iconAnchor:[s/2,s-3], popupAnchor:[0,-(s-6)], tooltipAnchor:[0,-(s-10)]});
}
function iconSizeForZoom(z){
  if(z<=9) return 13; if(z<=10) return 16; if(z<=11) return 20; if(z<=12) return 25;
  if(z<=13) return 30; if(z<=14) return 36; if(z<=15) return 44; if(z<=16) return 54; if(z<=17) return 66;
  return 80;
}
function turbinePanelHtml(name){
  return `
    <span class="kicker">Aerogerador (posição prevista)</span>
    <h3>${name}</h3>
    <div class="panel-block"><div class="panel-block-body">
      <div class="fact"><span class="k">Potência unitária</span><span class="v">7,2 MW</span></div>
      <div class="fact"><span class="k">Altura da torre (veio ao solo)</span><span class="v">≈ 114 m</span></div>
      <div class="fact"><span class="k">Diâmetro do rotor</span><span class="v">172 m</span></div>
      <div class="fact"><span class="k">Comprimento das pás</span><span class="v">84,4 m</span></div>
      <div class="fact"><span class="k">Emissão sonora</span><span class="v">92 – 106 dB(A)</span></div>
    </div></div>
    <div class="flag">Posição prevista nesta fase (PDA); a localização exata dos aerogeradores, acessos e plataformas será otimizada em fases seguintes (Estudo Prévio / Projeto de Execução).</div>
  `;
}
const turbineMarkers = [];
Object.entries(turbines).forEach(([name, latlng]) => {
  const marker = L.marker(latlng, {icon: turbineIcon("#3A4A50", iconSizeForZoom(map.getZoom()))});
  marker.bindPopup(`<b>${name}</b><br>7,2 MW · torre ≈114 m · rotor 172 m`);
  marker.bindTooltip(name, {permanent:true, direction:'right', offset:[6,0], className:'ag-label'});
  marker.on('click', () => showTurbineInfo(name));
  marker.addTo(layers.turbines);
  turbineMarkers.push(marker);
});
map.on('zoomend', () => {
  const s = iconSizeForZoom(map.getZoom());
  turbineMarkers.forEach(m => m.setIcon(turbineIcon("#3A4A50", s)));
});

/* ---------- SUBESTAÇÃO, ESTALEIRO, TORRE METEOROLÓGICA ---------- */
L.polygon(subestacaoPoly, {color:"#C4432A", weight:2.5, fillColor:"#C4432A", fillOpacity:.25})
  .bindPopup("<b>Subestação do parque</b><br>30/220 kV")
  .on('click', () => setInfo(`
    <span class="kicker">Infraestrutura elétrica</span><h3>Subestação do Parque Eólico da Guarda</h3>
    <div class="fact"><span class="k">Tensão</span><span class="v">30/220 kV</span></div>
    <div class="flag">Recebe a energia produzida pelos aerogeradores e encaminha-a para a Subestação de Chafariz, através da LMAT a 220 kV. Localiza-se aproximadamente numa posição central dentro do parque eólico.</div>
  `)).addTo(layers.sub);

L.polygon(estaleiroPoly, {color:"#8A5A1E", weight:2.5, fillColor:"#8A5A1E", fillOpacity:.20})
  .bindPopup("<b>Área para estaleiro de obra</b>")
  .on('click', () => setInfo(`
    <span class="kicker">Fase de construção</span><h3>Área para estaleiro de obra</h3>
    <div class="flag">Área destinada a apoio à construção (armazenamento de materiais, estacionamento de máquinas, escritórios de obra), junto à área da subestação. Uso temporário, limitado à fase de construção.</div>
  `)).addTo(layers.estaleiro);

L.circleMarker(torreMeteorologica, {radius:8, color:"#2F5233", weight:2.5, fillColor:"#FFFFFF", fillOpacity:.9})
  .bindTooltip("Torre meteorológica", {permanent:true, direction:'right', offset:[6,0], className:'ra-label'})
  .bindPopup("<b>Torre meteorológica</b><br>Em processo de licenciamento")
  .on('click', () => setInfo(`
    <span class="kicker">Monitorização</span><h3>Torre meteorológica</h3>
    <div class="flag">Estrutura para medição do recurso eólico (velocidade e direção do vento), atualmente em processo de licenciamento próprio, distinto do dos 14 aerogeradores.</div>
  `)).addTo(layers.tower);

/* ---------- CORREDORES DA LMAT (ALTERNATIVAS EM ESTUDO) ---------- */
function corridorPanelHtml(name){
  return `
    <span class="kicker">Ligação elétrica — alternativa em estudo</span>
    <h3>${name}</h3>
    <div class="panel-block"><div class="panel-block-body">
      <div class="fact"><span class="k">Tensão de exploração</span><span class="v">220 kV</span></div>
      <div class="fact"><span class="k">Comprimento aproximado</span><span class="v">≈ 18 km</span></div>
      <div class="fact"><span class="k">Ligação</span><span class="v">Subestação do parque → Subestação de Chafariz (REN)</span></div>
    </div></div>
    <div class="flag">Corredor de estudo para a Linha de Muito Alta Tensão (LMAT). É uma das duas alternativas em análise nesta fase de Definição de Âmbito; o traçado final só será fixado no EIA.</div>
    <div class="lg-note" style="margin-top:8px;">Fonte: PDA do Parque Eólico da Guarda, KEO para Iberdrola Renewables Portugal, 24.07.2026 (26-9164-EN00), secção 2.1.1.</div>
  `;
}
L.polyline(corredor1, {color:"#2FA8C4", weight:4, opacity:.85})
  .bindPopup("<b>Corredor 1</b><br>LMAT 220 kV · ≈18 km · para Chafariz")
  .on('click', () => setInfo(corridorPanelHtml("Corredor 1")))
  .addTo(layers.corr1);
L.polyline(corredor2, {color:"#7A5FA8", weight:4, opacity:.85})
  .bindPopup("<b>Corredor 2</b><br>LMAT 220 kV · ≈18 km · para Chafariz")
  .on('click', () => setInfo(corridorPanelHtml("Corredor 2")))
  .addTo(layers.corr2);

/* ---------- SIMULADOR DE RUÍDO (ILUSTRATIVO, NÃO VALIDADO) ----------
   Ao contrário do Paiva, este projeto ainda não tem EIA nem qualquer
   previsão de ruído por recetor publicada — está em fase de PDA, e o
   próprio documento diz que as campanhas de medição só decorrerão numa
   fase posterior. Não há, por isso, nenhum valor oficial contra o qual
   calibrar ou validar este modelo, ao contrário do que foi possível fazer
   para o Paiva (29 previsões do EIA) ou para o BigBATT (2 recetores do
   EIA). O que se segue é uma estimativa simplificada, com o mesmo modelo
   físico de espalhamento esférico em campo livre usado nos outros mapas,
   aplicada apenas à gama de emissão sonora declarada na PDA (92–106 dB(A),
   Quadro/secção 3.2.1.1), sem qualquer correção de terreno, vegetação ou
   vento. Deve ser lida como ilustrativa, não como previsão. */
const LW_MIN = 92.0, LW_MAX = 106.0;
let currentLw = LW_MIN;

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
function splAtDistance(lw, d){
  if(d < 1) d = 1;
  return lw - 20*Math.log10(d) - 11;
}
function distanceForSpl(lw, target){
  let lo = 1, hi = 20000;
  for(let i=0;i<60;i++){
    const mid = (lo+hi)/2;
    if(splAtDistance(lw, mid) > target) lo = mid; else hi = mid;
  }
  return (lo+hi)/2;
}
function cumulativeSplAt(point){
  let energy = 0;
  Object.values(turbines).forEach(latlng => {
    const d = haversine(point, latlng);
    energy += Math.pow(10, splAtDistance(currentLw, d)/10);
  });
  return energy > 0 ? 10*Math.log10(energy) : -100;
}

function setSimulationMode(mode){
  currentLw = mode === 'max' ? LW_MAX : LW_MIN;
  document.getElementById('modeBtnMin').classList.toggle('active', mode === 'min');
  document.getElementById('modeBtnMax').classList.toggle('active', mode === 'max');
  if(currentTurbine) drawPropagation(currentTurbine);
  if(lastClickedLatLng) testPoint(lastClickedLatLng, true);
}

/* ---------- ESCALA DE REFERÊNCIA (dB) — conhecimento acústico geral ---------- */
const DB_REFS = [
  {db:20, label:"Sussurro", full:"Sussurro, a 1 metro"},
  {db:40, label:"Quarto calmo", full:"Quarto sossegado, à noite"},
  {db:55, label:"Conversa", full:"Conversa normal, a 1 metro"},
  {db:70, label:"Aspirador", full:"Aspirador, num quarto"},
  {db:80, label:"Trânsito", full:"Trânsito urbano intenso"},
  {db:90, label:"Motor diesel", full:"Motor diesel, de perto"},
  {db:100, label:"Britadeira", full:"Britadeira / berbequim"},
];
const DB_MIN_S=0, DB_MAX_S=110, SCALE_W=280, SCALE_H=128;
function xForDb(db){ return 10 + ((db-DB_MIN_S)/(DB_MAX_S-DB_MIN_S))*(SCALE_W-20); }
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
  const clamped = Math.max(DB_MIN_S, Math.min(DB_MAX_S, db));
  const x = xForDb(clamped);
  const barY=36, barH=14;
  const ind = document.getElementById('dbIndicator'), line = document.getElementById('dbIndicatorLine');
  if(ind){ ind.setAttribute('points', `${x-7},${barY-16} ${x+7},${barY-16} ${x},${barY-5}`); ind.style.display='block'; }
  if(line){ line.setAttribute('x1',x); line.setAttribute('x2',x); line.setAttribute('y1',barY-3); line.setAttribute('y2',barY+barH+3); line.style.display='block'; }
  const nearest = DB_REFS.reduce((b,r)=>Math.abs(r.db-db)<Math.abs(b.db-db)?r:b, DB_REFS[0]);
  document.getElementById('dbScaleReadout').innerHTML = `<b>${db<20?"< 20":Math.round(db)} dB(A)</b> ${context||""}, parecido com: ${nearest.full.toLowerCase()}.`;
}

/* Barra de zona (sensível 55/45, mista 65/55), com marca da OMS para Lden
   (45 dB, recomendação específica para ruído de parques eólicos — aplica-se
   aqui, ao contrário do que sucede no mapa do BigBATT). Sem classificação
   oficial de zona para este projeto (ainda não há EIA), por isso o
   veredito legal fica sempre "por confirmar". */
function zoneGaugeHtml(value, limiteSensivel, limiteMista, whoLimit){
  const max = limiteMista + 10;
  const pctSensivel = Math.min(100, (limiteSensivel/max)*100);
  const pctMista = Math.min(100, (limiteMista/max)*100);
  const pctValue = Math.max(2, Math.min(100, (value/max)*100));
  const pctWho = whoLimit ? Math.min(100, (whoLimit/max)*100) : null;
  return `
    <div class="gauge-wrap">
      <div class="zone-verdict zone-bad" style="background:rgba(217,164,65,.12); border-color:#D9A441;">
        <div class="zone-verdict-icon">?</div>
        <div>
          <div class="zone-verdict-title">Classificação acústica do ponto por confirmar</div>
          <div class="zone-verdict-text">Este projeto ainda não tem EIA nem recetores sensíveis classificados; esta barra não atribui um limite legal local, só a comparação com os limiares gerais do RGR.</div>
        </div>
      </div>
      <div class="gauge-track">
        <div class="gauge-zone-sens" style="width:${pctSensivel}%"></div>
        <div class="gauge-zone-mista" style="left:${pctSensivel}%; width:${pctMista-pctSensivel}%"></div>
        <div class="gauge-zone-over" style="left:${pctMista}%; width:${100-pctMista}%"></div>
        ${pctWho !== null ? `<div class="gauge-who-line" style="left:${pctWho}%;"></div>` : ''}
        <div class="gauge-marker" style="left:${pctValue}%;" title="${value.toFixed(1)} dB(A)"></div>
      </div>
      <div class="gauge-ticks">
        ${pctWho !== null ? `<span style="left:${pctWho}%;" class="tick-who">OMS<br>${whoLimit}</span>` : ''}
        <span style="left:${pctSensivel}%;">sensível<br>${limiteSensivel}</span>
        <span style="left:${pctMista}%;" class="tick-mista">mista<br>${limiteMista}</span>
      </div>
      ${whoLimit ? `<div class="ref-note">A OMS recomenda Lden ≤ ${whoLimit} dB(A) para ruído de parques eólicos (orientação de saúde pública, não um limite legal em Portugal).</div>` : ''}
    </div>`;
}

/* ---------- PROPAGAÇÃO SONORA À VOLTA DE UM AEROGERADOR SELECIONADO ---------- */
const RING_TARGETS = [55, 50, 45, 40, 35];
let propagationGroup = null;
let currentTurbine = null;

function clearPropagation(){
  if(propagationGroup){ map.removeLayer(propagationGroup); propagationGroup = null; }
  document.getElementById('dbLegend').classList.remove('visible');
}
function drawPropagation(name){
  clearPropagation();
  const center = turbines[name];
  propagationGroup = L.layerGroup().addTo(map);
  const lgRows = document.getElementById('lgRows');
  lgRows.innerHTML = '';
  RING_TARGETS.forEach((target, i) => {
    const radius = distanceForSpl(currentLw, target);
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
  document.getElementById('dbLegend').classList.add('visible');
}
function showTurbineInfo(name){
  currentTurbine = name;
  drawPropagation(name);
  if(measureMarker){ map.removeLayer(measureMarker); measureMarker = null; }
  if(measureLine){ map.removeLayer(measureLine); measureLine = null; }
  lastClickedLatLng = null;
  updateDbScale(currentLw, "de potência sonora (LW), na fonte");
  setInfo(`
    ${turbinePanelHtml(name)}
    <div class="flag" style="border-color:#8A5A1E;">Estimativa ilustrativa, sem validação oficial: as curvas mostradas no mapa usam a emissão sonora escolhida no simulador (${currentLw.toFixed(0)} dB(A)) e um modelo simples de espalhamento esférico. Não é o modelo CNOSSOS-EU nem uma previsão oficial deste projeto.</div>
  `);
}

/* ---------- CLIQUE EM QUALQUER PONTO: TESTE ILUSTRATIVO DE RUÍDO ---------- */
let measureMarker = null;
let measureLine = null;
let lastClickedLatLng = null;

function testPoint(latlng, isRefresh){
  const here = [latlng.lat, latlng.lng];
  const ranked = Object.entries(turbines)
    .map(([name, coords]) => ({name, dist: haversine(here, coords)}))
    .sort((a,b) => a.dist - b.dist)
    .slice(0, 3);
  const nearest = ranked[0];
  const estimatedSpl = cumulativeSplAt(here);

  if(!isRefresh){
    lastClickedLatLng = latlng;
    if(measureMarker) map.removeLayer(measureMarker);
    if(measureLine) map.removeLayer(measureLine);
    measureLine = L.layerGroup([
      L.polyline([here, turbines[nearest.name]], {color:"#FFFFFF", weight:4.5, opacity:.9}),
      L.polyline([here, turbines[nearest.name]], {color:"#F2C230", weight:2.2, dashArray:"2,7", opacity:1})
    ]).addTo(map);
    measureMarker = L.circleMarker(latlng, {radius:7, color:"#2F5233", weight:2.5, fillColor:"#2F5233", fillOpacity:.9}).addTo(map);
    currentTurbine = null;
    clearPropagation();
  }

  const rows = ranked.map((r,i) => `
    <div class="mp-turbine">
      <div class="mp-turbine-top">
        <span class="mp-name">${r.name}</span>
        ${i===0 ? '<span class="mp-tag">mais próximo</span>' : ''}
      </div>
      <div class="mp-dist"><b>${Math.round(r.dist)} m</b></div>
    </div>`).join('');

  const popupHtml = `
    <div class="measure-popup">
      <b>Ponto selecionado</b>
      <div class="mp-turbines">${rows}</div>
      <div class="mp-period">
        <div class="mp-period-label">Estimativa ilustrativa (só os aerogeradores)</div>
        <div class="mp-night-row"><span class="mp-night-vals">${estimatedSpl < -50 ? "< 20" : estimatedSpl.toFixed(1)} dB(A)</span></div>
        ${zoneGaugeHtml(estimatedSpl, 55, 65, 45)}
      </div>
    </div>`;
  if(measureMarker){
    if(isRefresh) measureMarker.setPopupContent(popupHtml);
    else measureMarker.bindPopup(popupHtml, {maxWidth:280, minWidth:240, maxHeight:420}).openPopup();
  }

  updateDbScale(estimatedSpl, "estimado no ponto selecionado");

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
      <div class="panel-block-body">
        ${ranked.map((r,i) => `<div class="dist-row">
          <span class="dr-name">${r.name}${i===0 ? " · mais próximo" : ""}</span>
          <span><span class="dr-blade">${Math.round(r.dist)} m</span></span>
        </div>`).join('')}
      </div>
    </div>
    <div class="panel-block">
      <div class="panel-block-title">Estimativa de ruído neste ponto (ilustrativa)</div>
      <div class="panel-block-body">
        <div class="noise-readout">
          <span class="nr-num">${estimatedSpl < -50 ? "&lt;20" : Math.round(estimatedSpl)}</span>
          <span class="nr-unit">dB(A)</span>
        </div>
        ${zoneGaugeHtml(estimatedSpl, 55, 65, 45)}
        <div class="noise-context">Soma de todos os aerogeradores, com um modelo simples de espalhamento esférico em campo livre, na emissão escolhida no simulador (${currentLw.toFixed(0)} dB(A)). Sem correção de terreno, vegetação ou vento, e sem qualquer validação contra dados oficiais — ver "Limitações do projeto".</div>
      </div>
    </div>
    <div class="flag">Este valor não inclui o ruído de fundo já existente no local (tráfego, natureza), porque não há, nesta fase, nenhuma medição de referência para esta zona.</div>
  `);
}
map.on('click', (e) => testPoint(e.latlng, false));

/* ---------- LIMITE DO PARQUE NATURAL (contexto) ---------- */
const pnPanelHtml = `
  <span class="kicker">Território classificado (contexto)</span>
  <h3>Parque Natural da Serra da Estrela</h3>
  <div class="panel-block">
    <div class="panel-block-title">Classificação</div>
    <div class="panel-block-body">
      <div class="fact"><span class="k">Tipo</span><span class="v">Parque Natural</span></div>
      <div class="fact"><span class="k">Área total</span><span class="v">≈ 89 132 ha</span></div>
      <div class="fact"><span class="k">Diploma</span><span class="v">DL n.º 557/76, de 16 de julho</span></div>
      <div class="fact"><span class="k">Jurisdição</span><span class="v">ICNF</span></div>
    </div>
  </div>
  <div class="flag">Este limite não faz parte do projeto — está aqui apenas para contexto. Verificámos as 14
    posições reais dos aerogeradores contra este parque e contra a ZEC "Serra da Estrela" (PTCON0014): nenhuma cai
    dentro de qualquer uma das duas áreas. Os aerogeradores mais a sul (WTG01 a WTG08) ficam a poucos quilómetros do
    limite norte do parque, mas fora dele. Os corredores da linha elétrica não foram verificados ponto a ponto.</div>
  <div class="lg-note" style="margin-top:8px;">Fonte: Instituto da Conservação da Natureza e das Florestas (ICNF),
    Rede Nacional de Áreas Protegidas (serviço BDG/RNAP), consultado em agosto de 2026. Limite simplificado para
    visualização; para o limite oficial e exato, consultar o ICNF.</div>
`;
const pnSerraPoly = L.polygon(pnSerraEstrela, {color:"#1B5E3A", weight:3, fillColor:"#1B5E3A", fillOpacity:.18, dashArray:"6 4"});
pnSerraPoly.bindPopup("<b>Parque Natural da Serra da Estrela</b><br>Território classificado (ICNF) — não faz parte do projeto", {maxWidth:280});
pnSerraPoly.on('click', () => setInfo(pnPanelHtml));
pnSerraPoly.addTo(layers.areaProtegida);

/* Enquadra o mapa com toda a área de estudo, aerogeradores e corredores visíveis */
projectBounds = [...areaEstudo, ...Object.values(turbines), ...corredor1, ...corredor2];
map.fitBounds(L.latLngBounds(projectBounds), {padding:[20,20]});
