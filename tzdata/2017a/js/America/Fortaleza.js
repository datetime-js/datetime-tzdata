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
    "America/Fortaleza": {
      "name": "America/Fortaleza",
      "abbr": [
        "LMT",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03"
      ],
      "until": [
        -1767216360000,
        -1206957600000,
        -1191362400000,
        -1175374800000,
        -1159826400000,
        -633819600000,
        -622069200000,
        -602283600000,
        -591832800000,
        -570747600000,
        -560210400000,
        -539125200000,
        -531352800000,
        -191365200000,
        -184197600000,
        -155163600000,
        -150069600000,
        -128898000000,
        -121125600000,
        -99954000000,
        -89589600000,
        -68418000000,
        -57967200000,
        499748400000,
        511236000000,
        530593200000,
        540266400000,
        562129200000,
        571197600000,
        592974000000,
        602042400000,
        624423600000,
        634701600000,
        938919600000,
        951616800000,
        970974000000,
        972180000000,
        1003028400000,
        1013911200000,
        null
      ],
      "offset": [
        154,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180
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
