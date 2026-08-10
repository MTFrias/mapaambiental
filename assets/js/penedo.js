/* ---------- DADOS ----------
   Central Solar Fotovoltaica de Penedo (hibridização com a Central
   Hidroelétrica de Foz Tua). Promotor: Solar de Antas, Unipessoal Lda.
   Geometria extraída dos shapefiles fornecidos (CSF Penedo_Area de
   Estudo.shp, Corredores.shp, T08825_Corredor_v2.shp; projeção
   ETRS89/PT-TM06, convertida para WGS84) e simplificada (decimação de
   vértices) apenas para leveza do ficheiro; a forma geral das áreas
   mantém-se fiel à original.
   Fonte da ficha técnica: PDA do Projeto da CSF de Penedo, Solar de
   Antas, Unipessoal Lda., julho de 2026 (T08825_01_v3). */

const areaEstudo = [[40.935545, -7.383615], [40.934176, -7.385323], [40.933992, -7.383293], [40.933982, -7.381636], [40.935814, -7.378212], [40.935306, -7.37564], [40.934449, -7.373575], [40.933188, -7.374809], [40.932818, -7.377205], [40.932697, -7.378933], [40.932179, -7.379646], [40.931397, -7.380323], [40.931785, -7.378487], [40.932088, -7.37564], [40.93103, -7.374553], [40.92972, -7.375405], [40.928936, -7.375731], [40.928602, -7.37844], [40.928658, -7.381235], [40.928347, -7.384729], [40.927726, -7.385274], [40.92617, -7.3859], [40.926476, -7.387776], [40.925627, -7.38994], [40.925421, -7.391903], [40.924441, -7.39303], [40.924226, -7.391242], [40.925015, -7.389019], [40.925399, -7.38657], [40.925932, -7.384171], [40.927904, -7.382776], [40.927747, -7.3803], [40.92784, -7.378716], [40.927639, -7.377577], [40.926611, -7.377274], [40.925626, -7.37678], [40.924506, -7.376752], [40.923078, -7.377416], [40.920377, -7.383294], [40.918591, -7.385249], [40.917567, -7.383827], [40.917594, -7.383146], [40.916208, -7.382584], [40.915141, -7.382022], [40.914374, -7.381026], [40.913261, -7.380984], [40.915302, -7.379081], [40.914853, -7.377649], [40.915242, -7.376866], [40.916684, -7.377224], [40.918541, -7.376232], [40.919908, -7.377326], [40.922046, -7.375199], [40.923414, -7.37443], [40.923336, -7.373267], [40.923468, -7.372647], [40.923747, -7.372695], [40.922662, -7.372147], [40.921371, -7.370069], [40.923641, -7.367172], [40.922657, -7.365257], [40.919732, -7.366418], [40.9141, -7.371552], [40.911158, -7.378076], [40.90715, -7.381183], [40.906022, -7.384439], [40.905761, -7.38545], [40.906485, -7.390119], [40.906472, -7.391641], [40.905664, -7.39127], [40.904757, -7.392084], [40.905131, -7.389477], [40.905008, -7.38775], [40.904961, -7.385532], [40.904875, -7.381605], [40.903369, -7.383439], [40.902423, -7.383518], [40.90369, -7.381244], [40.902079, -7.381311], [40.901376, -7.386407], [40.917734, -7.403564], [40.935413, -7.385747], [40.936048, -7.384382], [40.936217, -7.383485], [40.935936, -7.383482]];
const corredorA = [[41.105129, -7.657151], [41.105155, -7.656344], [41.094784, -7.627266], [41.094383, -7.626544], [41.093808, -7.626069], [41.078148, -7.623566], [40.996979, -7.55661], [40.994171, -7.526572], [40.99379, -7.525857], [40.99324, -7.525372], [40.95363, -7.427319], [40.953379, -7.426559], [40.944687, -7.411425], [40.926022, -7.391834], [40.925354, -7.391682], [40.924691, -7.391866], [40.924126, -7.392359], [40.92374, -7.393093], [40.923587, -7.393963], [40.923685, -7.394835], [40.924018, -7.3956], [40.953535, -7.466533], [40.965204, -7.506382], [40.969884, -7.517087], [40.970367, -7.517621], [40.993466, -7.557753], [41.003441, -7.589696], [41.003852, -7.590351], [41.025272, -7.611327], [41.062513, -7.628657], [41.101183, -7.656117], [41.100577, -7.656417], [41.100123, -7.656535], [41.099114, -7.656839], [41.098528, -7.657244], [41.097826, -7.658022], [41.097222, -7.659191], [41.096995, -7.659982], [41.096864, -7.661258], [41.096865, -7.662051], [41.096867, -7.663024], [41.096868, -7.663419], [41.096888, -7.663833], [41.096992, -7.664563], [41.097215, -7.665364], [41.097482, -7.665985], [41.0978, -7.66652], [41.098271, -7.667094], [41.098744, -7.667503], [41.099302, -7.667828], [41.099712, -7.667978], [41.100055, -7.668053], [41.100531, -7.668086], [41.101602, -7.668713], [41.102305, -7.668998], [41.10314, -7.669083], [41.103914, -7.668887], [41.104617, -7.668444], [41.105454, -7.667778], [41.1061, -7.666936], [41.106622, -7.665726], [41.106757, -7.664794], [41.106762, -7.664441], [41.106759, -7.664017], [41.106757, -7.66367], [41.106754, -7.663185], [41.106745, -7.66193], [41.106711, -7.661321], [41.10662, -7.660732], [41.106493, -7.660226], [41.106246, -7.659554], [41.106184, -7.659355], [41.105947, -7.658561], [41.105655, -7.657922], [41.105312, -7.657383], [41.105129, -7.657151]];
const corredorB = [[41.101643, -7.655979], [41.100985, -7.656197], [41.100429, -7.656504], [41.099794, -7.656592], [41.098963, -7.656926], [41.098214, -7.657536], [41.09756, -7.658441], [41.097126, -7.659468], [41.096939, -7.660342], [41.096865, -7.661681], [41.096866, -7.662131], [41.096867, -7.663147], [41.096875, -7.663636], [41.096922, -7.664146], [41.097061, -7.664864], [41.097262, -7.66549], [41.097591, -7.666185], [41.097965, -7.666745], [41.098455, -7.66727], [41.098901, -7.66761], [41.099413, -7.667875], [41.0998, -7.668002], [41.100267, -7.668077], [41.100679, -7.668137], [41.101796, -7.668809], [41.102514, -7.669045], [41.103239, -7.669073], [41.104114, -7.668784], [41.104869, -7.668301], [41.105595, -7.6676], [41.106314, -7.666564], [41.106712, -7.665274], [41.106762, -7.664533], [41.106761, -7.664366], [41.106759, -7.663995], [41.106757, -7.663632], [41.106748, -7.662414], [41.106743, -7.661807], [41.106687, -7.661127], [41.106598, -7.66063], [41.106397, -7.659932], [41.106244, -7.65955], [41.106108, -7.659051], [41.105852, -7.658326], [41.105564, -7.657761], [41.105216, -7.657257], [41.106818, -7.653842], [41.106918, -7.653011], [41.104335, -7.642247], [41.098714, -7.623491], [41.098272, -7.622853], [41.071815, -7.605285], [41.038631, -7.60148], [41.028657, -7.578547], [41.005429, -7.551189], [41.000675, -7.527522], [40.983369, -7.507244], [40.978008, -7.456853], [40.976312, -7.445196], [40.97131, -7.415326], [40.956326, -7.395162], [40.955772, -7.394659], [40.955117, -7.394459], [40.926865, -7.390021], [40.92619, -7.390031], [40.925565, -7.390367], [40.925078, -7.390983], [40.924797, -7.391793], [40.924762, -7.392681], [40.924977, -7.393524], [40.925413, -7.394204], [40.926008, -7.394624], [40.941131, -7.400774], [40.974354, -7.456474], [40.966979, -7.485514], [40.967082, -7.486364], [40.9806, -7.510292], [41.002093, -7.553144], [41.00235, -7.553889], [41.015268, -7.567837], [41.030592, -7.595649], [41.036696, -7.605738], [41.03732, -7.606088], [41.103139, -7.652724], [41.10166, -7.655903]];
const corridor400kV = [[40.982669, -7.473216], [40.981052, -7.422494], [40.970075, -7.393608], [40.954995, -7.376726], [40.939629, -7.358476], [40.928804, -7.356569], [40.928214, -7.357699], [40.927671, -7.358721], [40.927133, -7.359301], [40.926818, -7.359575], [40.926497, -7.359873], [40.924867, -7.361361], [40.921521, -7.364613], [40.918346, -7.367211], [40.915441, -7.370058], [40.913184, -7.373123], [40.910364, -7.375], [40.909435, -7.393297], [40.922912, -7.418535], [40.935022, -7.431793], [40.933282, -7.463034], [40.949144, -7.513862], [40.966718, -7.535298], [40.98002, -7.552768], [40.982713, -7.588469], [40.9901, -7.608296], [41.009615, -7.63001], [41.054874, -7.647734], [41.065469, -7.648861], [41.079547, -7.656903], [41.088924, -7.663688], [41.097279, -7.66788], [41.103723, -7.670748], [41.10771, -7.669697], [41.109832, -7.664327], [41.110813, -7.656524], [41.109993, -7.645741], [41.105533, -7.63349], [41.099882, -7.621486], [41.091592, -7.605883], [41.082786, -7.594933], [41.069113, -7.587936], [41.060565, -7.587563], [41.020317, -7.564688], [40.987379, -7.485582]];

/* ---------- MAP SETUP ---------- */
const map = L.map('map', {zoomControl:false}).setView([40.98,-7.55], 10);
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

const layers = { area: L.layerGroup(), corridorA: L.layerGroup(), corridorB: L.layerGroup(), line400: L.layerGroup() };
layers.line400.addTo(map);
layers.corridorB.addTo(map);
layers.corridorA.addTo(map);
layers.area.addTo(map);

function toggleLayer(name, visible){
  if(!layers[name]) return;
  if(visible) layers[name].addTo(map); else map.removeLayer(layers[name]);
}

/* ---------- ÁREA DE ESTUDO DA CENTRAL SOLAR ---------- */
const areaPolygon = L.polygon(areaEstudo, {
  color:"#D9A441", weight:2.5, fillColor:"#D9A441", fillOpacity:.18
});

const areaPanelHtml = `
  <span class="kicker">Área de estudo</span>
  <h3>Central Solar Fotovoltaica de Penedo</h3>
  <div class="panel-block">
    <div class="panel-block-title">Enquadramento</div>
    <div class="panel-block-body">
      <div class="fact"><span class="k">Área de estudo</span><span class="v">≈ 632 ha</span></div>
      <div class="fact"><span class="k">Área de painéis e inversores</span><span class="v">≈ 64 ha</span></div>
      <div class="fact"><span class="k">Localização</span><span class="v">Trancoso (Guilheiro) e Penedono (Beselga,
            Antas e Ourozinho)</span></div>
      <div class="fact"><span class="k">Potência instalada</span><span class="v">142 MWp</span></div>
      <div class="fact"><span class="k">Produção média anual</span><span class="v">≈ 279 GWh/ano</span></div>
      <div class="fact"><span class="k">Módulos fotovoltaicos</span><span class="v">234 711 (605 Wp cada)</span></div>
      <div class="fact"><span class="k">Inversores</span><span class="v">429 (330 000 VA cada)</span></div>
      <div class="fact"><span class="k">Postos de transformação</span><span class="v">24 (0,8/30 kV)</span></div>
      <div class="fact"><span class="k">Subestação</span><span class="v">30/400 kV</span></div>
    </div>
  </div>
  <div class="flag">Projeto de hibridização com a Central Hidroelétrica de Foz Tua: a energia solar produzida é
    injetada na RESP através da linha e do ponto de ligação já usados por essa central, sem alterar a potência de
    ligação à rede. A área desenhada é a área de estudo definida na PDA; a implantação final da Central (painéis e
    inversores) ocupará apenas ≈64 ha desta área.</div>
  <div class="lg-note" style="margin-top:8px;">Fonte: PDA do Projeto da CSF de Penedo, Solar de Antas, Unipessoal
    Lda., julho de 2026 (T08825_01_v3), secções 1.1 e 2.2.1, Quadro 2.1.</div>
`;
areaPolygon.bindPopup("<b>Central Solar Fotovoltaica de Penedo</b><br>Área de estudo ≈ 632 ha<br>142 MWp · ≈ 279 GWh/ano", {maxWidth:260});
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
        <div class="fact"><span class="k">Tensão de exploração</span><span class="v">400 kV</span></div>
        <div class="fact"><span class="k">Ligação</span><span class="v">Subestação da CSF de Penedo → Subestação de
              Armamar (REN)</span></div>
        ${extra || ""}
      </div>
    </div>
    <div class="flag">Corredor de estudo para a nova Linha Elétrica de Muito Alta Tensão (LMAT). É uma das
      alternativas em análise nesta fase de Definição de Âmbito; o traçado final da linha só será fixado no EIA.
      Atravessa também os concelhos de Sernancelhe e Moimenta da Beira.</div>
    <div class="lg-note" style="margin-top:8px;">Fonte: PDA do Projeto da CSF de Penedo, Solar de Antas, Unipessoal
      Lda., julho de 2026 (T08825_01_v3), secção 2.2.2 e Desenho 1 (Peças Desenhadas).</div>
  `;
}

const corridorALine = L.polygon(corredorA, {color:"#2F5233", weight:2, fillColor:"#2F5233", fillOpacity:.10});
corridorALine.bindPopup("<b>Corredor A</b><br>Ligação elétrica em estudo · 400 kV", {maxWidth:240});
corridorALine.on('click', () => setInfo(corridorPanelHtml("Corredor A")));
corridorALine.addTo(layers.corridorA);

const corridorBLine = L.polygon(corredorB, {color:"#2FA8C4", weight:2, fillColor:"#2FA8C4", fillOpacity:.10});
corridorBLine.bindPopup("<b>Corredor B</b><br>Ligação elétrica em estudo · 400 kV", {maxWidth:240});
corridorBLine.on('click', () => setInfo(corridorPanelHtml("Corredor B")));
corridorBLine.addTo(layers.corridorB);

const line400 = L.polygon(corridor400kV, {color:"#C4432A", weight:2, fillColor:"#C4432A", fillOpacity:.08, dashArray:"6,5"});
line400.bindPopup("<b>Corredor de referência (400 kV)</b><br>Traçado considerado na análise ambiental preliminar (EGCA)", {maxWidth:260});
line400.on('click', () => setInfo(corridorPanelHtml("Corredor de referência (400 kV)",
  `<div class="fact"><span class="k">Origem</span><span class="v">Estudo de Grandes Condicionamentos Ambientais (EGCA)</span></div>`)));
line400.addTo(layers.line400);

/* Enquadra o mapa com toda a área de estudo e os corredores visíveis */
const allBounds = L.latLngBounds([...areaEstudo, ...corredorA, ...corredorB, ...corridor400kV]);
map.fitBounds(allBounds, {padding:[20,20]});
