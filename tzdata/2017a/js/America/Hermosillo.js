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
    "America/Hermosillo": {
      "name": "America/Hermosillo",
      "abbr": [
        "LMT",
        "MST",
        "CST",
        "MST",
        "CST",
        "MST",
        "CST",
        "MST",
        "PST",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST"
      ],
      "until": [
        -1514739600000,
        -1343066400000,
        -1234807200000,
        -1220292000000,
        -1207159200000,
        -1191344400000,
        -873828000000,
        -661539600000,
        28800000,
        828867600000,
        846403200000,
        860317200000,
        877852800000,
        891766800000,
        909302400000,
        null
      ],
      "offset": [
        443.8667,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        480,
        420,
        360,
        420,
        360,
        420,
        360,
        420
      ],
      "dst": [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
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
