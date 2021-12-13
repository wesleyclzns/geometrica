
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2VvbWV0cmljYSIsImEiOiJja3dhcXF3bzAybXY4MnVuaDRjcjVxMGVuIn0.6Xlyyt98tPZx0S-OVeLx_w';

const map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/geometrica/ckwp0hs8j0gsh14lszczbtepf' // replace this with your style URL
});



map.on('load', () => {
// the rest of the code will go in here


// inicio---- SELECIONA OS LOTES E COLOCA EM UMA DIV ----------
    map.on('click', (event) => {
        const states = map.queryRenderedFeatures(event.point, {
        layers: ['centro','leste-1', 'leste-2','norte-1', 'norte-2', 'oeste', 'sul-1', 'sul-2']
    });
    document.getElementById('sql').innerHTML = states.length
        ? `<p><strong><em>${states[0].properties.lo_setor}</strong> Setor</em></p>
        <p><strong><em>${states[0].properties.lo_quadra}</strong> Quadra</em></p>
        <p><strong><em>${states[0].properties.lo_lote}</strong> Lote</em></p>`

        
        : `<p>Passe o mouse sobre um lote</p>`; //Pega o lote e setor e quadra
    });
// fim---- SELECIONA OS LOTES E COLOCA EM UMA DIV ----------

/*     map.addSource('macroareas', {
        'type': 'vector',
        'url': 'mapbox://geometrica.073j6qdv'
    });
        
    map.addLayer(
    {
        'id': 'macroareas',
        'type': 'fill',
        'source': 'macroareas',
        'source-layer': 'macroareas',
        'paint': {
            'fill-outline-color': 'rgba(0,0,0,0.1)',
            'fill-color': 'rgba(0,0,0,0.1)'
        }
    },
    'settlement-label'
    ); // Place polygon under these labels.
*/

// inicio---- SELECIONA OS LOTES E COLOCA EM UMA DIV ----------
    map.on('click', (event) => {
        const macroareas = map.queryRenderedFeatures(event.point, {
        layers: ['macroareas']
        });

        document.getElementById('macroarea').innerHTML = macroareas.length
            ? `<p><strong><em>${macroareas[0].properties.mc_nome}</strong> Nome</em></p>
            <p><strong><em>${macroareas[0].properties.mc_sigla}</strong> Sigla</em></p>`

        
        : `<p>Passe o mouse sobre um lote</p>`; //Pega o lote e setor e quadra


        const macrozona = map.queryRenderedFeatures(event.point, {
            layers: ['macrozona']
        });

        document.getElementById('macrozona').innerHTML = macrozona.length
            ? `<p><strong><em>${macrozona[0].properties.nm_perimet}</strong> Nome</em></p>
            <p><strong><em>${macrozona[0].properties.sg_macro_d}</strong> Sigla</em></p>`

        
        : `<p>Macrozona Não funcionou</p>`; //Pega o lote e setor e quadra
       

    });
// fim---- SELECIONA OS LOTES E COLOCA EM UMA DIV ----------


});