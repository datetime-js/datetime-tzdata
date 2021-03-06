(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // Anonymous AMD
    define([], factory);
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory();
  }

  if (typeof global === 'object') {
    root = global;
  }

  // Always expose tzdata to globals
  root.tzdata = factory();
}(this, function () {
  return {
  "version": "2017a",
  "zones": {
    "America/Jamaica": {
      "name": "America/Jamaica",
      "abbr": [
        "KMT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST"
      ],
      "until": [
        -1827687169000,
        126687600000,
        152085600000,
        162370800000,
        183535200000,
        199263600000,
        215589600000,
        230713200000,
        247039200000,
        262767600000,
        278488800000,
        294217200000,
        309938400000,
        325666800000,
        341388000000,
        357116400000,
        372837600000,
        388566000000,
        404892000000,
        420015600000,
        436341600000,
        null
      ],
      "offset": [
        307.1833,
        300,
        240,
        300,
        240,
        300,
        240,
        300,
        240,
        300,
        240,
        300,
        240,
        300,
        240,
        300,
        240,
        300,
        240,
        300,
        240,
        300
      ],
      "dst": [
        false,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false
      ]
    }
  },
  "links": []
};
})); 
