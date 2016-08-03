// https://addyosmani.com/largescalejavascript/

var App = (function(){
  var init = function() {
    console.log("init");
    test();
  },
  test = function (){
    console.log("another test");
  };
  return {
    init: init
  }
}())

App.init();
