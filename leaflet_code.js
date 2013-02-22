//Get the main map options set-up

var map = L.map('map').setView([51.505, -0.09], 13);

  	L.tileLayer('http://{s}.tile.cloudmade.com/10b29eb7b27e439e899b4352acbc86e3/997/256/{z}/{x}/{y}.png', {
			maxZoom: 18,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
		}).addTo(map);


//Get the lat and long of a user clicking on the map
function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);
