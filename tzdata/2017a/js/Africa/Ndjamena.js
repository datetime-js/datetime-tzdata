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
    "Africa/Ndjamena": {
      "name": "Africa/Ndjamena",
      "abbr": [
        "LMT",
        "WAT",
        "WAST",
        "WAT"
      ],
      "until": [
        -1830387612000,
        308703600000,
        321314400000,
        null
      ],
      "offset": [
        -60.2,
        -60,
        -120,
        -60
      ],
      "dst": [
        false,
        false,
        true,
        false
      ]
    }
  },
  "links": []
};
})); 
