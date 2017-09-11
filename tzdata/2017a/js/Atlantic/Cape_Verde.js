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
    "Atlantic/Cape_Verde": {
      "name": "Atlantic/Cape_Verde",
      "abbr": [
        "LMT",
        "-02",
        "-01",
        "-02",
        "-01"
      ],
      "until": [
        -1988144756000,
        -862610400000,
        -764118000000,
        186120000000,
        null
      ],
      "offset": [
        94.0667,
        120,
        60,
        120,
        60
      ],
      "dst": [
        false,
        false,
        true,
        false,
        false
      ]
    }
  },
  "links": []
};
})); 
