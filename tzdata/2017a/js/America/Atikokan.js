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
    "America/Atikokan": {
      "name": "America/Atikokan",
      "abbr": [
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CWT",
        "CPT",
        "EST"
      ],
      "until": [
        -1632067200000,
        -1615136400000,
        -923248800000,
        -880214400000,
        -769395600000,
        -765392400000,
        null
      ],
      "offset": [
        360,
        300,
        360,
        300,
        300,
        300,
        300
      ],
      "dst": [
        false,
        true,
        false,
        true,
        true,
        true,
        false
      ]
    }
  },
  "links": []
};
})); 
