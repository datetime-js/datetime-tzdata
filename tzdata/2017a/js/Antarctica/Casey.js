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
    "Antarctica/Casey": {
      "name": "Antarctica/Casey",
      "abbr": [
        "-00",
        "+08",
        "+11",
        "+08",
        "+11",
        "+08",
        "+11"
      ],
      "until": [
        -31536000000,
        1255802400000,
        1267714800000,
        1319738400000,
        1329843600000,
        1477065600000,
        null
      ],
      "offset": [
        0,
        -480,
        -660,
        -480,
        -660,
        -480,
        -660
      ],
      "dst": [
        false,
        false,
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
