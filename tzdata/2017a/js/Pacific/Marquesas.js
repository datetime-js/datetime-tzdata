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
    "Pacific/Marquesas": {
      "name": "Pacific/Marquesas",
      "abbr": [
        "LMT",
        "-0930"
      ],
      "until": [
        -1806676920000,
        null
      ],
      "offset": [
        558,
        570
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
