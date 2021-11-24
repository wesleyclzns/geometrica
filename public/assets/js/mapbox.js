var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2VvbWV0cmljYSIsImEiOiJja3dhcXF3bzAybXY4MnVuaDRjcjVxMGVuIn0.6Xlyyt98tPZx0S-OVeLx_w';
var map = new mapboxgl.Map({
  container: 'mapbox',
  style: 'mapbox://styles/mapbox/streets-v11'
});
