	mapboxgl.accessToken = 'pk.eyJ1Ijoid2VzbGV5Y2x6bnMiLCJhIjoiY2p4NnlqamFsMDR2bzNubWoyZHFzM3h4NSJ9.mnPCaD0jIW3_pB1SseF-hw';
    const map = new mapboxgl.Map({
        style: 'mapbox://styles/wesleyclzns/ckvwjnsgn4zvk14qdtpzokzrh',
        center: [-46.641939, -23.545130],
        zoom: 16.5,
        pitch: 34.50,                  // INCLINAÇÃO
        bearing: 72.80, 
        container: 'map',
        antialias: true
    });

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());

    map.on('load', () => {
        // Insert the layer beneath any symbol layer.
        const layers = map.getStyle().layers;
        const labelLayerId = layers.find(
            (layer) => layer.type === 'symbol' && layer.layout['text-field']
        ).id;

        // The 'building' layer in the Mapbox Streets
        // vector tileset contains building height data
        // from OpenStreetMap.
        map.addLayer(
            {
                'id': 'add-3d-buildings',
                'source': 'composite',
                'source-layer': 'building',
                'filter': ['==', 'extrude', 'true'],
                'type': 'fill-extrusion',
                'minzoom': 15,
                'paint': {
                    'fill-extrusion-color': '#aaa',

                    // Use an 'interpolate' expression to
                    // add a smooth transition effect to
                    // the buildings as the user zooms in.
                    'fill-extrusion-height': [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        15,
                        0,
                        15.05,
                        ['get', 'height']
                    ],
                    'fill-extrusion-base': [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        15,
                        0,
                        15.05,
                        ['get', 'min_height']
                    ],
                    'fill-extrusion-opacity': 0.6
                }
            },
            labelLayerId
        );
    });
