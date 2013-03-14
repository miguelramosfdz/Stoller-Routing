routing
=======

A routing tool using ROSM, Leaflet and D3

_______

This tool is being developed by JDS.

Tasks:
1) Get map defined
2) Read in a latlng from a click on the map and store it as a variable (think that this is working?)

Routing: https://github.com/DennisOSRM/Project-OSRM/wiki/Server-api

Using jsonp format seems good such as:
http://router.project-osrm.org/viaroute?loc=1.48251,-0.10692&loc=51.51600,-0.08102&jsonp=route
It already converts it to a javascript object

This kind of works for cross-domain stuff too:
$.getJSON(url + "?callback=?", null, function(tweets) {
        console.log(tweets)
    });
