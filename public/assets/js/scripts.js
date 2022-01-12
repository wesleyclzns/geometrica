
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2VvbWV0cmljYSIsImEiOiJja3dhcXF3bzAybXY4MnVuaDRjcjVxMGVuIn0.6Xlyyt98tPZx0S-OVeLx_w';

const map = new mapboxgl.Map({
container: 'map', 
style: 'mapbox://styles/geometrica/ckwp0hs8j0gsh14lszczbtepf'
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// Add the control to the map.
const geocoder = new MapboxGeocoder({
accessToken: mapboxgl.accessToken,
mapboxgl: mapboxgl
});

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));


map.on('load', () => {
// the rest of the code will go in here

//inicio---------- ADICIONA OS TILESETS DO MAPBOX STUDIO ----------
// inicio---- ADICIONA O LAYER DOS LOGRADOUROS ---------
map.addLayer({
    id: 'logradouro',
    type: 'line',
    source: {
      type: 'vector',
      url: 'mapbox://geometrica.czilpx0q'
    },
    'source-layer': 'logs-8bkqn7',
    paint: {
        'line-color': '#627BC1',
        'line-opacity':0.5
    }
});
// fim---- ADICIONA  O LAYER DOS LOGRADOUROS ---------


// inicio---- ADICIONA O LAYER DA OUC ---------
map.addLayer({
    id: 'ouc',
    type: 'fill',
    source: {
      type: 'vector',
      url: 'mapbox://geometrica.dth6qop5'
    },
    'source-layer': 'ouc-6tihh1',
    layout: {},
    paint: {
        'fill-opacity':0
    }  
});
// fim---- ADICIONA O LAYER DA OUC ---------
//fim---------- ADICIONA OS TILESETS DO MAPBOX STUDIO ----------

//  inicio---------- CRIA VARIAVEIS PARA MANIPULAR O HTML ----------
    map.on('click', (event) => {
        const sql = map.queryRenderedFeatures(event.point, {
            layers: ['centro','leste-1', 'leste-2','norte-1', 'norte-2', 'oeste', 'sul-1', 'sul-2']
        });

        const macroareas = map.queryRenderedFeatures(event.point, {
            layers: ['macroareas']
        });

        const macrozona = map.queryRenderedFeatures(event.point, {
            layers: ['macrozona']
        });

        const zoneamento = map.queryRenderedFeatures(event.point, {
            layers: ['zoneamento']
        });

        const metropole = map.queryRenderedFeatures(event.point, {
            layers: ['metropole']
        });

        const melhoramento = map.queryRenderedFeatures(event.point, {
            layers: ['melhoramento']
        });

        const limites = map.queryRenderedFeatures(event.point, {
            layers: ['limites']
        });

        const ouc = map.queryRenderedFeatures(event.point, {
            layers: ['ouc']
        });

        const logradouro = map.queryRenderedFeatures(event.point, {
            layers: ['logradouro']
        });

//  fim---------- CRIA VARIAVEIS PARA MANIPULAR O HTML ----------

//  inicio---------- MANIPULA O HTML ----------
    //  ---------- SETOR, QUADRA, LOTE (sql) ----------
    document.getElementById('sql').innerHTML = sql.length
        ? `<p><strong><em>${sql[0].properties.lo_setor}</strong> Setor</em></p>
        <p><strong><em>${sql[0].properties.lo_quadra}</strong> Quadra</em></p>
        <p><strong><em>${sql[0].properties.lo_lote}</strong> Lote</em></p>
        <p><strong><em>${sql[0].properties.area}</strong> Area m²</em></p>`

        
        : `<p>Clique em um lote!</p>`; 


    //  ---------- MACROAREAS ----------
    document.getElementById('macroarea').innerHTML = macroareas.length
        ? `<p><strong><em>${macroareas[0].properties.mc_nome}</strong></em></p>
        <p><strong><em>${macroareas[0].properties.mc_sigla}</strong></em></p>`

        
        : `<p>Não exite macroarea para o lote selecionado</p>`;
    
    //  ---------- MACROZONA ----------
    document.getElementById('macrozona').innerHTML = macrozona.length
            ? `<p><strong><em>${macrozona[0].properties.nm_perimet}</strong></em></p>
            <p><strong><em>${macrozona[0].properties.sg_macro_d}</strong></em></p>`

        
        : `<p>Não exite macrozona para o lote selecionado</p>`; 
    
    //  ---------- ZONEAMENTO ----------
    document.getElementById('zoneamento').innerHTML = zoneamento.length
        ? `<p><strong><em>${zoneamento[0].properties.ZONA}</strong></em></p>`

    
    : `<p>Não exitem zoneamento para o lote selecionado</p>`; 
    
    //  ---------- SETOR DA MACROZONA DE ESTRUTURAÇÃO METROPOLITANA (mem) ----------
    document.getElementById('metropole').innerHTML = metropole.length
            ? `<p><strong><em>${metropole[0].properties.nm_perimet}</strong></em></p>
            <p><strong><em>${metropole[0].properties.nm_tema_di}</strong></em></p>`
    
        
        : `<p>Não exitem MEM para o lote selecionado</p>`; 
    
    //  ---------- MELHORAMENTO VIARIO/DESAPROPRIAÇÕES ----------
    document.getElementById('melhoramento').innerHTML = melhoramento.length
        ? `<p><strong><em>${melhoramento[0].properties.dp_tipo}</strong>-TIPO</em></p>
        <p><strong><em>${melhoramento[0].properties.dp_planta}</strong>-PLANTA</em></p>
        <p><strong><em>${melhoramento[0].properties.dp_decreto}</strong>-DECRETO</em></p>
        <p><strong><em><a href="${melhoramento[0].properties.dp_link}" target="_blank" rel="noopener noreferrer" style="color: white; text-decoration: none;">Link do Decreto</a></strong></em></p>`
    
    : `<p>Não exitem melhoramentos</p>`; 

    //  ---------- LIMITES ADMINISTRATIVOS ----------
    document.getElementById('limites').innerHTML = limites.length
            ? `<p><strong><em>${limites[0].properties.ds_nome}</strong>-DISTRITO</em></p>
            <p><strong><em>${limites[0].properties.ds_subpref}</strong>-SUBPREF</em></p>
            <p><strong><em>${limites[0].properties.municipio}</strong>-MUNICIPIO</em></p>`
    
        
        : `<p>Você selecionou um territorio ainda indisponivel em dados</p>`; //
    
    //  ---------- OPERAÇÕES URBANAS (ouc) ----------
    document.getElementById('ouc').innerHTML = ouc.length
        ? `<p><strong><em>${ouc[0].properties.ou_lei}</strong></em></p>
        <p><strong><em>${ouc[0].properties.ou_nome}</strong></em></p>
        <p><strong><em>${ouc[0].properties.ou_sigla}</strong></em></p>
`
    
    : `<p>Não exitem melhoramentos viarios</p>`; 

    //  ---------- LOGRADOUROS ----------
    document.getElementById('logradouro').innerHTML = logradouro.length
        ? `<p>${logradouro[0].properties.lg_tipo} ${logradouro[0].properties.lg_titulo} ${logradouro[0].properties.lg_prep} ${logradouro[0].properties.lg_nome}</p>
        <p><strong><em>${logradouro[0].properties.lg_codlog}</strong></em></p>`
    
    : `<p>Não exitem logradouros</p>`; 

    });






});
