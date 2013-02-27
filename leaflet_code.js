//Get the main map options set-up

var map = L.map('map').setView([51.505, -0.09], 13);

  	L.tileLayer('http://{s}.tile.cloudmade.com/10b29eb7b27e439e899b4352acbc86e3/997/256/{z}/{x}/{y}.png', {
			maxZoom: 18,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
		}).addTo(map);

// Set my variables for the start and end points the user clicks
var $startlatlng;
var $endlatlng;
var $rosmlink;

// If the start point is undefined then set it with first click.
// Second map click becomes the end point
// Futher map clicks at this time are discarded.
map.on('click', function(e) {
	if($startlatlng == undefined)
	{$startlatlng = e.latlng.lat + ',' + e.latlng.lng;}
	else
	{$endlatlng = e.latlng.lat + ',' + e.latlng.lng;}
	console.log($startlatlng);
	console.log($endlatlng);
});

$rosmlink = 'http://router.project-osrm.org/viaroute?loc=' + $startlatlng + '&' + $endlatlng;

map.on('contextmenu', function(f) {
	alert($rosmlink);
	});

// Starting to create the url to request JSON for ROSM


