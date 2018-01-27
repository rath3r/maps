var mapsModule = require('./maps-module'),
    fs = require('fs');;

var mapFiles = [],
    mapGeojsonFilesObj = new Object(),
    readPath = 'data/xml/',
    writePath = 'data/geojson/';

fs.readdirSync(readPath).forEach(gpxFile => {
  gpxFilenameArr = gpxFile.split('.');
  //console.log(gpxFilenameArr[0]);
  mapFiles.push(gpxFilenameArr[0]);
})

mapGeojsonFilesObj.mapNames = [];

for (var i = 0; i < mapFiles.length; i++) {
    //mapsModule.convertToGeojson(mapFiles[i]);
    filename = new Object();
    filename.filename = mapFiles[i] + '.geojson';
    mapGeojsonFilesObj.mapNames.push(filename);
}

//console.log(mapGeojsonFiles);
mapsModule.createFilenamesJson(mapGeojsonFilesObj);
// throw new Error("Die!");
//
// console.log(val);
