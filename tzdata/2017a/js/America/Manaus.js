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
    "America/Manaus": {
      "name": "America/Manaus",
      "abbr": [
        "LMT",
        "-04",
        "-03",
        "-04",
        "-03",
        "-04",
        "-03",
        "-04",
        "-03",
        "-04",
        "-03",
        "-04",
        "-03",
        "-04",
        "-03",
        "-04",
        "-03",
        "-04",
        "-03",
        "-04",
        "-03",
        "-04",
        "-03",
        "-04",
        "-03",
        "-04",
        "-03",
        "-04",
        "-03",
        "-04",
        "-03",
        "-04"
      ],
      "until": [
        -1767211196000,
        -1206954000000,
        -1191358800000,
        -1175371200000,
        -1159822800000,
        -633816000000,
        -622065600000,
        -602280000000,
        -591829200000,
        -570744000000,
        -560206800000,
        -539121600000,
        -531349200000,
        -191361600000,
        -184194000000,
        -155160000000,
        -150066000000,
        -128894400000,
        -121122000000,
        -99950400000,
        -89586000000,
        -68414400000,
        -57963600000,
        499752000000,
        511239600000,
        530596800000,
        540270000000,
        562132800000,
        571201200000,
        750830400000,
        761713200000,
        null
      ],
      "offset": [
        240.0667,
        240,
        180,
        240,
        180,
        240,
        180,
        240,
        180,
        240,
        180,
        240,
        180,
        240,
        180,
        240,
        180,
        240,
        180,
        240,
        180,
        240,
        180,
        240,
        180,
        240,
        180,
        240,
        180,
        240,
        180,
        240
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
        false
      ]
    }
  },
  "links": []
};
})); 
