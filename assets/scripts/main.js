// https://addyosmani.com/largescalejavascript/

var App = (function(){
  var init = function() {
    console.log("init");
    test();
    // initMap();
  },
  test = function (){
    console.log("another test");
  },
  initMap = function () {
    // Create a map object and specify the DOM element for display.
    // var map = new google.maps.Map(document.getElementById('map'), {
    //   center: {lat: -34.397, lng: 150.644},
    //   scrollwheel: false,
    //   zoom: 8
    // });

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 3,
      center: {lat: 0, lng: -180},
      mapTypeId: 'terrain'
    });

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
  };
  return {
    init: init,
    initMap: initMap
  }
}())

App.init();
