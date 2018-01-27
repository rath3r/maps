var DOMParser = require('xmldom').DOMParser;
    tj = require('togeojson'),
    fs = require('fs'),
    readPath = 'data/xml/',
    writePath = 'data/geojson/',
    gpxFormat = '.gpx',
    jsonFormat = '.geojson';

module.exports = {
    writeJsonFile: function(path, obj) {
        console.log(path);
        fs.writeFile(path, JSON.stringify(obj), function(err) {
            if(err) {
                return console.log(err);
            }
        });
    },
    convertToGeojson: function(filename) {
        var gpxFile = readPath + filename + gpxFormat,
            jsonFilePath = writePath + filename + jsonFormat,
            gpx = new DOMParser().parseFromString(fs.readFileSync(gpxFile, 'utf8')),
            converted = tj.gpx(gpx);

       delete converted.features[0].properties;

       this.writeJsonFile(jsonFilePath, converted)
   },
   createFilenamesJson: function(filenameObj) {
        var replacementFilesObj = new Object();
        var randomFilenameObj = new Object();
        var mapFilenamesPath = writePath + 'map-filenames.json';
        console.log("createFilenamesJson????");
        // console.log(filenameObj.mapNames);
        console.log(filenameObj.mapNames.length);

       var randomFilenameNo = Math.floor(Math.random() * filenameObj.mapNames.length) + 1;
       var randomFilename = filenameObj.mapNames[randomFilenameNo];
       randomFilenameObj.mapNames = [];
       var refilenameObj = new Object();
       refilenameObj.filename = randomFilenameObj + '.geojson';
       randomFilenameObj.mapNames.push(filename);
       console.log(randomFilenameObj);
       this.writeJsonFile(mapFilenamesPath, randomFilenameObj);
  }
}
