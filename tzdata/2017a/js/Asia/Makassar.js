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
    "Asia/Makassar": {
      "name": "Asia/Makassar",
      "abbr": [
        "LMT",
        "MMT",
        "+08",
        "+09",
        "WITA"
      ],
      "until": [
        -1577951856000,
        -1172908656000,
        -880272000000,
        -766054800000,
        null
      ],
      "offset": [
        -477.6,
        -477.6,
        -480,
        -540,
        -480
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
