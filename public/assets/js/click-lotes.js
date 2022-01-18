map.on('load', () => {
    // Add a custom vector tileset source. The tileset used in
    // this example contains a feature for every county in the U.S.
    // Each county contains four properties. For example:
    // {
    //     COUNTY: "Uintah County",
    //     FIPS: 49047,
    //     median-income: 62363,
    //     population: 34576
    // }
    map.addSource('centro', {
        'type': 'geojson',
        'data': './assets/geojsons/lcen.geojson'
        });
     
    map.addLayer(
    {
        id: 'centro',
        type: 'fill',
        paint: {
            'fill-opacity':0.1,
             'fill-color': '#527BC3'
            //'fill-color': '#427BC1'
        },
    }
    ); // Place polygon under these labels.
     
    map.addLayer(
    {
    'id': 'centro-highlighted',
    'type': 'fill',
    'source': 'centro',
    'source-layer': 'original',
    'paint': {
    'fill-outline-color': '#484896',
    'fill-color': '#6e599f',
    'fill-opacity': 0.75
    },
    'filter': ['in', 'FIPS', '']
    },
    'settlement-label'
    ); // Place polygon under these labels.
     
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
    map.setFilter('centro-highlighted', ['in', 'FIPS', ...fips]);
    });
    })