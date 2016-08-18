# Maps

This is a little test project of several uses of the
[Google Maps JavaScript API][1]. It uses as a base [quick-gulp][2].

It currently is being used to plot paths held in `.gpx` files created by a GPS
logging app on my phone.

It also makes use of [peplin/gpxviewer][3] to parse the `.gpx` xml file. The
actual data is not included in the repo. `Gulp` copies the `.gpx` files to the
`dist` directory and they are called via a hard coded array in the `main.js`.

## Private Keys

Google maps requires a private key which shouldn't be shared on Github so there
is a `private.json` file that is parsed by the `gulpfile.js` and adds any
required keys to `twig`. Here is an example:

  {
    "name": "privateKeys",
    "googleMaps": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  }

## ToDo

* Code a way to add the `.gpx` files via the `private.json` file.

[1]:https://developers.google.com/maps/documentation/javascript/
[2]:https://github.com/rath3r/quick-gulp
[3]:https://github.com/peplin/gpxviewer
