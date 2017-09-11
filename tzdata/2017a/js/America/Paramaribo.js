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
    "America/Paramaribo": {
      "name": "America/Paramaribo",
      "abbr": [
        "LMT",
        "PMT",
        "PMT",
        "-0330",
        "-03"
      ],
      "until": [
        -1861906760000,
        -1104524348000,
        -765317964000,
        465449400000,
        null
      ],
      "offset": [
        220.6667,
        220.8667,
        220.6,
        210,
        180
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
