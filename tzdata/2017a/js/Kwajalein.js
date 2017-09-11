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
    "Kwajalein": {
      "name": "Kwajalein",
      "abbr": [
        "+11",
        "-12",
        "+12"
      ],
      "until": [
        -7988400000,
        745848000000,
        null
      ],
      "offset": [
        -660,
        720,
        -720
      ],
      "dst": [
        false,
        false,
        false
      ]
    }
  },
  "links": []
};
})); 
