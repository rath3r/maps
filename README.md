# Maps

This is a little test of the [Google Maps JavaScript API][1]. It uses as a base
the [quick-gulp][2].

## Private Keys

Google maps requires a private key which shouldn't be shared on Github so there
is a `private.json` file that is parsed by the `gulpfile.js` and adds any
required keys to `twig`. Here is an example:

  {
    "name": "privateKeys",
    "googleMaps": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  }

[1]:https://developers.google.com/maps/documentation/javascript/
[2]:https://github.com/rath3r/quick-gulp
