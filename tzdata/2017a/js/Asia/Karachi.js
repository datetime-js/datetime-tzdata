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
    "Asia/Karachi": {
      "name": "Asia/Karachi",
      "abbr": [
        "LMT",
        "+0530",
        "+0630",
        "+0530",
        "+05",
        "PKT",
        "PKST",
        "PKT",
        "PKST",
        "PKT",
        "PKST",
        "PKT"
      ],
      "until": [
        -1988166492000,
        -862637400000,
        -764145000000,
        -576135000000,
        38775600000,
        1018119600000,
        1033840800000,
        1212260400000,
        1225476000000,
        1239735600000,
        1257012000000,
        null
      ],
      "offset": [
        -268.2,
        -330,
        -390,
        -330,
        -300,
        -300,
        -360,
        -300,
        -360,
        -300,
        -360,
        -300
      ],
      "dst": [
        false,
        false,
        true,
        false,
        false,
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
