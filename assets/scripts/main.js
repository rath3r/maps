// https://addyosmani.com/largescalejavascript/

var App = (function(){
  var map,
  routes,
  color = {
    r: 1,
    g: 1,
    b: 1
  },
  init = function() {
    // console.log("init");
    //test();
    // initMap();
    //initXML();
    //console.log(files);
  },
  test = function (){
    // console.log("another test");
  },
  initMap = function () {

    var centre = {
        lat: 53.346769,
        lng: -6.262939
    },
    zoomLevel = 12;

    map = new google.maps.Map(document.getElementById('map'), {
      zoom: zoomLevel,
      center: {lat: centre.lat, lng: centre.lng},
      mapTypeId: 'terrain'
    });

    //testPath();
    initXML();
  },
  initXML = function () {

    for (var i = 0; i < files.length; i++) {
      getXML('xml/' + files[i]);
    }

  },
  getXML = function (file) {
    // Load the xml file using ajax
    $.ajax({
      type: "GET",
      url: file,
      dataType: "xml",
      success: function (xml) {
        parseXML(xml);
      }
    });
  },
  parseXML = function (xml) {

    var parser = new GPXParser(xml, map);

    parser.setTrackColour(getColor());     // Set the track line colour
    parser.setTrackWidth(2);          // Set the track line width
    parser.setMinTrackPointDelta(0.001);      // Set the minimum distance between track points
    parser.centerAndZoom(xml);
    parser.addTrackpointsToMap();         // Add the trackpoints
    parser.addWaypointsToMap();           // Add the waypoints

  },
  testPath = function () {

    var flightPlanCoordinates = [
      {lat: 37.772, lng: -122.214},
      {lat: 21.291, lng: -157.821},
      {lat: -18.142, lng: 178.431},
      {lat: -27.467, lng: 153.027}
    ];
    var flightPath = new google.maps.Polyline({
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

    flightPath.setMap(map);
  },
  getColor = function() {

    incrementColor();
    return rgbToHex(color.r, color.g, color.b);

  },
  incrementColor = function(){

    color.r = getRandomNumber(255);
    color.g = getRandomNumber(150);
    color.b = getRandomNumber(255);

  },
  getRandomNumber = function(top) {
    var random = Math.floor(Math.random() * top) + 1;
    return random;
  },
  componentToHex = function (c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  },
  rgbToHex = function (r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  };
  return {
    init: init,
    initMap: initMap
  }
}())

App.init();
