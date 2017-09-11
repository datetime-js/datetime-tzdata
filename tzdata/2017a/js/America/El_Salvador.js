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
    "America/El_Salvador": {
      "name": "America/El_Salvador",
      "abbr": [
        "LMT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST"
      ],
      "until": [
        -1546279392000,
        547020000000,
        559717200000,
        578469600000,
        591166800000,
        null
      ],
      "offset": [
        356.8,
        360,
        300,
        360,
        300,
        360
      ],
      "dst": [
        false,
        false,
        true,
        false,
        true,
        false
      ]
    }
  },
  "links": []
};
})); 
