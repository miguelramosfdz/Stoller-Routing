//Get the main map options set-up

var map = L.map('map').setView([51.505, -0.09], 13);

  	L.tileLayer('http://{s}.tile.cloudmade.com/10b29eb7b27e439e899b4352acbc86e3/997/256/{z}/{x}/{y}.png', {
			maxZoom: 18,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
		}).addTo(map);

// Set my variables for the start and end points the user clicks
var $latlng = new Array(); 
var $cnt=0;

// Make an array of clicked points
map.on('click', function(e) 
{
      $latlng[$cnt] = e.latlng.lat + ',' + e.latlng.lng;
      $cnt++;
      var $i;
      for($i=0; $i < $cnt; $i++) 
      {
        console.log($latlng[$i]);
      }
});

// When right click on the map, show the content in the array
map.on('contextmenu', function(f) {
	alert($latlng);
	});

// Starting to create the url to request JSON for ROSM

// Will then sent the URL to R OSM and get the JSON back. Probably using jQuery or something like that.
// This looks useful: http://stackoverflow.com/questions/8021022/parse-json-from-local-url-with-jquery

// The next to extract the google encoded polylines

// Then use this to decode them https://github.com/jieter/Leaflet.encoded

// Then display them on the map

