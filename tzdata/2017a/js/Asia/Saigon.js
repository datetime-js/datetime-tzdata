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
    "Asia/Saigon": {
      "name": "Asia/Saigon",
      "abbr": [
        "LMT",
        "PLMT",
        "+07",
        "+08",
        "+09",
        "+07",
        "+08",
        "+07",
        "+08",
        "+07"
      ],
      "until": [
        -2004073600000,
        -1851577590000,
        -852105600000,
        -782643600000,
        -767869200000,
        -718095600000,
        -457776000000,
        -315648000000,
        171820800000,
        null
      ],
      "offset": [
        -426.6667,
        -426.5,
        -420,
        -480,
        -540,
        -420,
        -480,
        -420,
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
        false,
        false
      ]
    }
  },
  "links": []
};
})); 
