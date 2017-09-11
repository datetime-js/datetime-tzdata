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
    "Asia/Pontianak": {
      "name": "Asia/Pontianak",
      "abbr": [
        "LMT",
        "PMT",
        "+0730",
        "+09",
        "+0730",
        "+08",
        "+0730",
        "WITA",
        "WIB"
      ],
      "until": [
        -1946186240000,
        -1172906240000,
        -881220600000,
        -766054800000,
        -683883000000,
        -620812800000,
        -189415800000,
        567964800000,
        null
      ],
      "offset": [
        -437.3333,
        -437.3333,
        -450,
        -540,
        -450,
        -480,
        -450,
        -480,
        -420
      ],
      "dst": [
        false,
        false,
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
