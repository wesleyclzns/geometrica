// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// Add the control to the map.
const geocoder = new MapboxGeocoder({
accessToken: mapboxgl.accessToken,
mapboxgl: mapboxgl
});

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));