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
    "Africa/Asmara": {
      "name": "Africa/Asmara",
      "abbr": [
        "LMT",
        "EAT",
        "+0230",
        "+0245",
        "EAT"
      ],
      "until": [
        -1309746436000,
        -1262314800000,
        -946780200000,
        -315629100000,
        null
      ],
      "offset": [
        -147.2667,
        -180,
        -150,
        -165,
        -180
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
