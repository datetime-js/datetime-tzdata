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
    "America/Swift_Current": {
      "name": "America/Swift_Current",
      "abbr": [
        "LMT",
        "MST",
        "MDT",
        "MST",
        "MWT",
        "MPT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "CST"
      ],
      "until": [
        -2030201320000,
        -1632063600000,
        -1615132800000,
        -880210800000,
        -769395600000,
        -765388800000,
        -747241200000,
        -732729600000,
        -715791600000,
        -702489600000,
        -684342000000,
        -671040000000,
        -652892400000,
        -639590400000,
        -400086000000,
        -384364800000,
        -337186800000,
        -321465600000,
        -305737200000,
        -292435200000,
        -273682800000,
        -260985600000,
        73472400000,
        null
      ],
      "offset": [
        431.3333,
        420,
        360,
        420,
        360,
        360,
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
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360
      ],
      "dst": [
        false,
        false,
        true,
        false,
        true,
        true,
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
        false,
        true,
        false,
        true,
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
