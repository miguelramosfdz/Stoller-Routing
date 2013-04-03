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

url = 'http://router.project-osrm.org/viaroute?loc=51.492072,-0.103340&loc=51.504362,-0.091152';

// Will then sent the URL to R OSM and get the JSON back. Probably using jQuery or something like that.


// Here is a tutorial on how to get the JSON and display it somewhere http://iviewsource.com/codingtutorials/getting-started-with-javascript-object-notation-json-for-absolute-beginners/

// The next to extract the google encoded polylines

// Then use this to decode them https://github.com/jieter/Leaflet.encoded

// Then display them on the map
var encoded = "udfyHf{S_@v@K`@eC[e@u@iDgCeA{@a@lA_AzCc@tA_AvCMd@u@u@{DsEqCsC{A{AuCcCgAeAs@s@{@y@iB}Bq@o@eByA_@UGEQU}@sA{A}Bg@eAYk@CGKMm@s@g@GSEQISE]EaA@G@i@@eADy@BINYv@EFEDEBE@G?EAWIGCa@MGECEEGCGCGAI?G?K?gAGQKSOKwAs@ECkAWGEEEIIgAoAmBwBmB}BECoAuA{AwBOa@g@aAaBuDo@aBm@wAk@yAa@y@k@iAw@mAoAiA_@[SK_@OuBgA]OWOu@g@KEg@e@]YUSECEEYUOKQQS_@Q]a@m@MSW]o@}@k@u@O]u@}@SQY_@GE][[[o@]ACGESK[Km@O}EsA_FmAg@Mw@QQEk@QKCGCc@EMCMAg@Qk@YKECAIC[YAs@?YCMEQGWIQa@q@EE[SgBeAiAq@_@[MIKIk@_@WMOKe@[e@WeAS[Ic@Mg@Wa@YyAqBKMo@u@Y]{@aAs@w@MQg@g@]vFMlBC\\MIBYd@iHBi@BW^oB";

var polyline = L.Polyline.fromEncoded(encoded).addTo(map);


// testing jsonp


$(document).ready(function() {
    $.getJSON("http://maps.googleapis.com/maps/api/directions/json?origin=SE173TA&destination=London%20Bridge&sensor=false" + "?callback=?", null, function(route_data) {
        	console.log(route_data)
    });
});
