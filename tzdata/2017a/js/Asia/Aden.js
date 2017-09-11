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
    "Asia/Aden": {
      "name": "Asia/Aden",
      "abbr": [
        "LMT",
        "+03"
      ],
      "until": [
        -719636812000,
        null
      ],
      "offset": [
        -186.8667,
        -180
      ],
      "dst": [
        false,
        false
      ]
    }
  },
  "links": []
};
})); 
