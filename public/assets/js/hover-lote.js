// https://docs.mapbox.com/mapbox-gl-js/example/hover-styles/ - EXEMPLO
let hoveredStateId = null;
 
map.on('load', () => {
map.addSource('states', {
    'type': 'geojson',
    'data': './assets/geojsons/pqDomP.geojson'
    // https://docs.mapbox.com/mapbox-gl-js/assets/us_states.geojson
    });

/* map.addSource('states', {
    'type': 'vector',
    'url': 'mapbox/geometrica.d189p3xk'
    });
 */

// The feature-state dependent fill-opacity expression will render the hover effect
// when a feature's hover state is set to true.
map.addLayer({
'id': 'state-fills',
'type': 'fill',
'source': 'states',
'layout': {},
'paint': {
'fill-color': '#627BC1',
'fill-opacity': [
'case',
['boolean', ['feature-state', 'hover'], false],
1,
0.5
]
}
});
 
map.addLayer({
'id': 'state-borders',
'type': 'line',
'source': 'states',
'layout': {},
'paint': {
'line-color': '#627BC1',
'line-width': 2
}
});
 
// When the user moves their mouse over the state-fill layer, we'll update the
// feature state for the feature under the mouse.
map.on('mousemove', 'state-fills', (e) => {
if (e.features.length) {
if (hoveredStateId !== null) {
map.setFeatureState(
{ source: 'states', id: hoveredStateId },
{ hover: false }
);
}
hoveredStateId = e.features[0].id;
map.setFeatureState(
{ source: 'states', id: hoveredStateId },
{ hover: true }
);
}
});
 
// When the mouse leaves the state-fill layer, update the feature state of the
// previously hovered feature.
map.on('mouseleave', 'state-fills', () => {
if (hoveredStateId !== null) {
map.setFeatureState(
{ source: 'states', id: hoveredStateId },
{ hover: false }
);
}
hoveredStateId = null;
});
});