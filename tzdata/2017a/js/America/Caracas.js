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
    "America/Caracas": {
      "name": "America/Caracas",
      "abbr": [
        "CMT",
        "-0430",
        "-04",
        "-0430",
        "-04"
      ],
      "until": [
        -1826739140000,
        -157750200000,
        1197183600000,
        1462086000000,
        null
      ],
      "offset": [
        267.6667,
        270,
        240,
        270,
        240
      ],
      "dst": [
        false,
        false,
        false,
        false,
        false
      ]
    }
  },
  "links": []
};
})); 
