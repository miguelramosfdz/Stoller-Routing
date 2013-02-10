// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView([51.505, -0.09], 13);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.cloudmade.com/10b29eb7b27e439e899b4352acbc86e3/997/256/{z}/{x}/{y}.png', {
    attribution: 'Some attribution stuff here',
    maxZoom: 18
}).addTo(map);

