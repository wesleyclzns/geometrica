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
        /* document.querySelector('#setor').querySelector('p').textContent = sql[0].properties.lo_setor;
        document.querySelector('#quadra').querySelector('p').textContent = sql[0].properties.lo_quadra;
        document.querySelector('#lote').querySelector('p').textContent = sql[0].properties.lo_lote;
        document.querySelector('#condominio').querySelector('p').textContent = sql[0].properties.lo_condomi;
        document.querySelector('#area').querySelector('p').textContent = sql[0].properties.area; */

        //  ---------- LOGRADOURO ----------
        /* document.querySelector('#cadlog').querySelector('p').textContent = logradouro[0].properties.lg_codlog;
        
        document.querySelector('#logradouro').querySelector('p').textContent = logradouro[0].properties.lg_tipo + ' ' + logradouro[0].properties.lg_titulo + ' ' + logradouro[0].properties.lg_prep + ' ' + logradouro[0].properties.lg_nome; */

        //  ---------- LIMITES ADMINISTRATIVOS ----------
        /* document.querySelector('#municipio').querySelector('p').textContent = limites[0].properties.municipio;
        document.querySelector('#subprefeitura').querySelector('p').textContent = limites[0].properties.ds_subpref;
        document.querySelector('#distrito').querySelector('p').textContent = limites[0].properties.ds_nome; */
        
        //  ---------- LEGISLAÇÃO URBANA ----------
        //  ---------- ZONEAMENTO ----------
        /* document.querySelector('#zoneamento').querySelector('p').textContent = zoneamento[0].properties.ZONA; */

        //  ---------- MACROZONA ----------
        /* document.querySelector('#macrozona').querySelector('[data-nome]').textContent = macrozona[0].properties.nm_perimet;
        document.querySelector('#macrozona').querySelector('[data-sigla]').textContent = macrozona[0].properties.sg_macro_d; */

        //  ---------- MACROAREA ----------
        document.querySelector('#macroarea').querySelector('[data-nome]').textContent = macroareas[0].properties.mc_nome;
        document.querySelector('#macroarea').querySelector('[data-sigla]').textContent = macroareas[0].properties.mc_sigla;

        //  ---------- MELHORAMENTO VIARIO ----------
    });


});
