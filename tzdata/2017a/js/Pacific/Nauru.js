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
    "Pacific/Nauru": {
      "name": "Pacific/Nauru",
      "abbr": [
        "LMT",
        "+1130",
        "+09",
        "+1130",
        "+12"
      ],
      "until": [
        -1545131260000,
        -877347000000,
        -800960400000,
        294323400000,
        null
      ],
      "offset": [
        -667.6667,
        -690,
        -540,
        -690,
        -720
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
