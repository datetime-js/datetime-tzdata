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
    "Asia/Brunei": {
      "name": "Asia/Brunei",
      "abbr": [
        "LMT",
        "+0730",
        "+08"
      ],
      "until": [
        -1383464380000,
        -1167636600000,
        null
      ],
      "offset": [
        -459.6667,
        -450,
        -480
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
