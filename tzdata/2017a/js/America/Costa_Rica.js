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
    "America/Costa_Rica": {
      "name": "America/Costa_Rica",
      "abbr": [
        "SJMT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST"
      ],
      "until": [
        -1545071027000,
        288770400000,
        297234000000,
        320220000000,
        328683600000,
        664264800000,
        678344400000,
        695714400000,
        700635600000,
        null
      ],
      "offset": [
        336.2167,
        360,
        300,
        360,
        300,
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
