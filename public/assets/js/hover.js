map.addLayer({

    id: 'centro_cor',
    type: 'fill',
    source: {
      type: 'vector',
      url: 'geometrica.dmsh4k4i'
    },
    'source-layer': 'logs-8bkqn7',

    paint: {
        'fill-outline-color': '#484896',
        'fill-color': '#484896',
        'fill-opacity':0.75
        },
        'filter': ['in', 'FIPS', '']
    },
    'settlement-label'

); // Place polygon under these labels
map.on('click', (e) => {

    // Set `bbox` as 5px reactangle area around clicked point.

    const bbox = [

         [e.point.x - 5, e.point.y - 5],

        [e.point.x + 5, e.point.y + 5]

    ];

    // Find features intersecting the bounding box.

    const selectedFeatures = map.queryRenderedFeatures(bbox, {

        layers: ['centro']

    });

    const fips = selectedFeatures.map(

        (feature) => feature.properties.FIPS

    );

    // Set a filter matching selected features by FIPS codes

    // to activate the 'counties-highlighted' layer.

    map.setFilter('centro_cor', ['in', 'FIPS',

        ...fips]);

    });

});