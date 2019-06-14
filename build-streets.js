//access token taken from mapbox
mapboxgl.accessToken = 'pk.eyJ1Ijoic2FsbWFuOTciLCJhIjoiY2p3ODMwZmVjMDJ4ajN6bWxyZXB6OHVlNyJ9.Un8GIVGSdU-muWmDs08VXw';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/salman97/cjwad1kfv0xwa1cogsivi0y3a',   //style id
    center: [77.60, 12.98], // starting position [lng, lat]
    zoom: 12 // starting zoom
});

//Geocontrol option
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
    enableHighAccuracy: true
    },
    trackUserLocation: true
}));

//Geocoder code (search bar) see CSS on map-streets.html for altering position 
var geocoder = new MapboxGeocoder({ // Initialize the geocoder
  accessToken: mapboxgl.accessToken, // Set the access token
  //mapboxgl: mapboxgl, // Set the mapbox-gl instance
  //marker: false, // Do not use the default marker style
  placeholder: '         Search for dustbins in locality'

});
document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

//Code for showing popup on clicking marker
map.on('click', function(e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['example'] // replace this with the name of the layer
  });

  if (!features.length) {
    return;
  }

  var feature = features[0];
  var popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML('<h3>' + feature.properties.title + '</h3><p>' + feature.properties.description + '</p>')
    .setLngLat(feature.geometry.coordinates)
    .addTo(map);

 /* map.flyTo({
    center: [
    -74.50 + (Math.random() - 0.5) * 10,
    40 + (Math.random() - 0.5) * 10]
  }); */
});
/*
map.on('load', function () {
 
map.addLayer({
"id": "points",
"type": "symbol",
"source": {
"type": "geojson",
"data": {
"type": "FeatureCollection",
"features": [{
"type": "Feature",
"geometry": {
"type": "Point",
"coordinates": [-77.03238901390978, 38.913188059745586]
},
"properties": {
"title": "Mapbox DC",
"icon": "monument"
}
}, {
"type": "Feature",
"geometry": {
"type": "Point",
"coordinates": [-122.414, 37.776]
},
"properties": {
"title": "Mapbox SF",
"icon": "harbor"
}
}]
}
},
"layout": {
"icon-image": "{icon}-15",
"text-field": "{title}",
"text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
"text-offset": [0, 0.6],
"text-anchor": "top"
}
});
});*/