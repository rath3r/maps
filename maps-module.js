var DOMParser = require('xmldom').DOMParser;
    tj = require('togeojson'),
    fs = require('fs'),
    readPath = 'data/public/',
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
       var mapFilenamesPath = writePath + 'map-filenames.json';

       this.writeJsonFile(mapFilenamesPath, filenameObj);
  }
}
