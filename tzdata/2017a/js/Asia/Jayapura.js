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
    "Asia/Jayapura": {
      "name": "Asia/Jayapura",
      "abbr": [
        "LMT",
        "+09",
        "+0930",
        "WIT"
      ],
      "until": [
        -1172913768000,
        -799491600000,
        -189423000000,
        null
      ],
      "offset": [
        -562.8,
        -540,
        -570,
        -540
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
