const mapsModule = require('./maps-module');
const fs = require('fs');

let mapFiles = [];
let mapGeojsonFilesObj = new Object();
let readPath = 'data/xml/';
let writePath = 'data/geojson/';
let gpxFilenameArr;
let filename;

fs.readdirSync(readPath).forEach(gpxFile => {
  gpxFilenameArr = gpxFile.split('.');
  //console.log(gpxFilenameArr[0]);
  mapFiles.push(gpxFilenameArr[0]);
});

mapGeojsonFilesObj.mapNames = [];

for (var i = 0; i < mapFiles.length; i++) {
    //mapsModule.convertToGeojson(mapFiles[i]);
    filename = new Object();
    filenamemjsmjs.filename = mapFiles[i] + '.geojson';
    mapGeojsonFilesObj.mapNames.push(filename);
}

console.log(mapGeojsonFilesObj);
mapsModule.createFilenamesJson(mapGeojsonFilesObj);
// throw new Error("Die!");
//
// console.log(val);
