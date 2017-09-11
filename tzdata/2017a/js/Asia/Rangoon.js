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
    "Asia/Rangoon": {
      "name": "Asia/Rangoon",
      "abbr": [
        "RMT",
        "+0630",
        "+09",
        "+0630"
      ],
      "until": [
        -1577946280000,
        -873268200000,
        -778410000000,
        null
      ],
      "offset": [
        -384.6667,
        -390,
        -540,
        -390
      ],
      "dst": [
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
