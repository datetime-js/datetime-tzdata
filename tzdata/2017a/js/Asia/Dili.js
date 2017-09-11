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
    "Asia/Dili": {
      "name": "Asia/Dili",
      "abbr": [
        "LMT",
        "+08",
        "+09",
        "+08",
        "+09"
      ],
      "until": [
        -1830414140000,
        -879152400000,
        199897200000,
        969120000000,
        null
      ],
      "offset": [
        -502.3333,
        -480,
        -540,
        -480,
        -540
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
