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
    "Asia/Jakarta": {
      "name": "Asia/Jakarta",
      "abbr": [
        "BMT",
        "+0720",
        "+0730",
        "+09",
        "+0730",
        "+08",
        "+0730",
        "WIB"
      ],
      "until": [
        -1451719200000,
        -1172906400000,
        -876641400000,
        -766054800000,
        -683883000000,
        -620812800000,
        -189415800000,
        null
      ],
      "offset": [
        -427.2,
        -440,
        -450,
        -540,
        -450,
        -480,
        -450,
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
        false
      ]
    }
  },
  "links": []
};
})); 
