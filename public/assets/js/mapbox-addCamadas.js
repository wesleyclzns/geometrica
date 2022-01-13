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
});