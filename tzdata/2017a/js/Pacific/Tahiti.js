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
    "Pacific/Tahiti": {
      "name": "Pacific/Tahiti",
      "abbr": [
        "LMT",
        "-10"
      ],
      "until": [
        -1806674504000,
        null
      ],
      "offset": [
        598.2667,
        600
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
