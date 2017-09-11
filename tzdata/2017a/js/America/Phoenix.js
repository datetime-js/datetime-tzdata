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
    "America/Phoenix": {
      "name": "America/Phoenix",
      "abbr": [
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MWT",
        "MST",
        "MWT",
        "MST",
        "MDT",
        "MST"
      ],
      "until": [
        -1633273200000,
        -1615132800000,
        -1601823600000,
        -1583683200000,
        -880210800000,
        -820519140000,
        -812653140000,
        -796845540000,
        -84380400000,
        -68659200000,
        null
      ],
      "offset": [
        420,
        360,
        420,
        360,
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
        true,
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
