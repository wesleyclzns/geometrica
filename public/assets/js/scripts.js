
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2VvbWV0cmljYSIsImEiOiJja3dhcXF3bzAybXY4MnVuaDRjcjVxMGVuIn0.6Xlyyt98tPZx0S-OVeLx_w';

const map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/geometrica/ckwp0hs8j0gsh14lszczbtepf' // replace this with your style URL
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

// inicio---- ADICIONA OS LOGRADOUROS ---------
map.addLayer({
    id: 'logradouro',
    type: 'line',
    source: {
      type: 'vector',
      url: 'mapbox://geometrica.czilpx0q'
    },
    'source-layer': 'logs-8bkqn7'
});
// fim---- ADICIONA OS LOGRADOUROS ---------

// inicio---- ADICIONA AS OUC ---------
map.addLayer({
    id: 'ouc',
    type: 'fill',
        source: {
      type: 'vector',
      url: 'mapbox://geometrica.dth6qop5'
    },
    'source-layer': 'ouc-6tihh1',
   
    
});
// fim---- ADICIONA AS OUC ---------

// inicio---- SELECIONA OS LOTES E COLOCA EM UMA DIV ----------
    map.on('click', (event) => {
        const states = map.queryRenderedFeatures(event.point, {
        layers: ['centro','leste-1', 'leste-2','norte-1', 'norte-2', 'oeste', 'sul-1', 'sul-2']
    });
    document.getElementById('sql').innerHTML = states.length
        ? `<p><strong><em>${states[0].properties.lo_setor}</strong> Setor</em></p>
        <p><strong><em>${states[0].properties.lo_quadra}</strong> Quadra</em></p>
        <p><strong><em>${states[0].properties.lo_lote}</strong> Lote</em></p>
        <p><strong><em>${states[0].properties.area}</strong> Area m²</em></p>`

        
        : `<p>Passe o mouse sobre um lote</p>`; //Pega o lote e setor e quadra
    });
// fim---- SELECIONA OS LOTES E COLOCA EM UMA DIV ----------

// inicio---- SELECIONA AS MACROAREA E COLOCA EM UMA DIV ----------
    map.on('click', (event) => {
        const macroareas = map.queryRenderedFeatures(event.point, {
        layers: ['macroareas']
        });

        document.getElementById('macroarea').innerHTML = macroareas.length
            ? `<p><strong><em>${macroareas[0].properties.mc_nome}</strong></em></p>
            <p><strong><em>${macroareas[0].properties.mc_sigla}</strong></em></p>`

        
        : `<p>Passe o mouse sobre um lote</p>`; //Pega o lote e setor e quadra
// fim---- SELECIONA AS MACROAREA E COLOCA EM UMA DIV ----------


// inicio---- SELECIONA AS MACROZONA E COLOCA EM UMA DIV ----------
        const macrozona = map.queryRenderedFeatures(event.point, {
            layers: ['macrozona']
        });

        document.getElementById('macrozona').innerHTML = macrozona.length
            ? `<p><strong><em>${macrozona[0].properties.nm_perimet}</strong></em></p>
            <p><strong><em>${macrozona[0].properties.sg_macro_d}</strong></em></p>`

        
        : `<p>Macrozona Não funcionou</p>`; //Pega o lote e setor e quadra
       

    });
// fim---- SELECIONA AS MACROZONA E COLOCA EM UMA DIV ----------

// inicio---- SELECIONA AS ZONAS E COLOCA EM UMA DIV ----------
map.on('click', (event) => {
    const zoneamento = map.queryRenderedFeatures(event.point, {
    layers: ['zoneamento']
    });

    document.getElementById('zoneamento').innerHTML = zoneamento.length
        ? `<p><strong><em>${zoneamento[0].properties.ZONA}</strong></em></p>`

    
    : `<p>Passe o mouse sobre um zoneamento</p>`; //Pega o lote e setor e quadra
// fim---- SELECIONA AS ZONAS E COLOCA EM UMA DIV ----------

// inicio---- SELECIONA AS SETOR MACROAREA ES. METROPOLITANA E COLOCA EM UMA DIV ----------
    const metropole = map.queryRenderedFeatures(event.point, {
        layers: ['metropole']
        });
    
        document.getElementById('metropole').innerHTML = metropole.length
            ? `<p><strong><em>${metropole[0].properties.nm_perimet}</strong></em></p>
            <p><strong><em>${metropole[0].properties.nm_tema_di}</strong></em></p>`
    
        
        : `<p>Passe o mouse sobre um metropole</p>`; //Pega o lote e setor e quadra
});
// fim---- SELECIONA AS SETOR MACROAREA ES. METROPOLITANA E COLOCA EM UMA DIV ----------

// inicio---- SELECIONA UM MELHORAMENTO E COLOCA EM UMA DIV ----------
map.on('click', (event) => {
    const melhoramento = map.queryRenderedFeatures(event.point, {
    layers: ['melhoramento']
    });

    document.getElementById('melhoramento').innerHTML = melhoramento.length
        ? `<p><strong><em>${melhoramento[0].properties.dp_tipo}</strong>-TIPO</em></p>
        <p><strong><em>${melhoramento[0].properties.dp_planta}</strong>-PLANTA</em></p>
        <p><strong><em>${melhoramento[0].properties.dp_decreto}</strong>-DECRETO</em></p>
        <p><strong><em><a href="${melhoramento[0].properties.dp_link}" target="_blank" rel="noopener noreferrer" style="color: white; text-decoration: none;">Link do Decreto</a></strong></em></p>`
    
    : `<p>Não exitem melhoramentos</p>`; //Pega o lote e setor e quadra
// fim---- SELECIONA UM MELHORAMENTO E COLOCA EM UMA DIV ----------

// inicio---- SELECIONA UM LIMITE ADMINISTRATIVO E COLOCA EM UMA DIV ----------
    const limites = map.queryRenderedFeatures(event.point, {
        layers: ['limites']
        });
    
        document.getElementById('limites').innerHTML = limites.length
            ? `<p><strong><em>${limites[0].properties.ds_nome}</strong>-DISTRITO</em></p>
            <p><strong><em>${limites[0].properties.ds_subpref}</strong>-SUBPREF</em></p>
            <p><strong><em>${limites[0].properties.municipio}</strong>-MUNICIPIO</em></p>`
    
        
        : `<p>Passe o mouse sobre um limites</p>`; //Pega o lote e setor e quadra
// fim---- SELECIONA UM LIMITE ADMINISTRATIVO E COLOCA EM UMA DIV ----------
});

// inicio---- SELECIONA OS LOGRADOUROS E COLOCA EM UMA DIV---------
map.on('click', (event) => {
    const ouc = map.queryRenderedFeatures(event.point, {
    layers: ['ouc']
    });

    document.getElementById('ouc').innerHTML = ouc.length
        ? `<p><strong><em>${ouc[0].properties.ou_lei}</strong>-CADLOG</em></p>
        <p><strong><em>${ouc[0].properties.ou_nome}</strong></em></p>
        <p><strong><em>${ouc[0].properties.ou_sigla}</strong></em></p>
`
    
    : `<p>Não exitem melhoramentos</p>`; //Pega o lote e setor e quadra

});
// fim---- SELECIONA OS LOGRADOUROS E COLOCA EM UMA DIV---------




});
