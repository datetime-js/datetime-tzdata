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
    "Asia/Bahrain": {
      "name": "Asia/Bahrain",
      "abbr": [
        "LMT",
        "+04",
        "+03"
      ],
      "until": [
        -1577935568000,
        76190400000,
        null
      ],
      "offset": [
        -206.1333,
        -240,
        -180
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
