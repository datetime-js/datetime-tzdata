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
    "America/Santo_Domingo": {
      "name": "America/Santo_Domingo",
      "abbr": [
        "SDMT",
        "EST",
        "EDT",
        "EST",
        "-0430",
        "EST",
        "-0430",
        "EST",
        "-0430",
        "EST",
        "-0430",
        "EST",
        "-0430",
        "EST",
        "AST",
        "EST",
        "AST"
      ],
      "until": [
        -1159773600000,
        -100119600000,
        -89668800000,
        -5770800000,
        4422600000,
        25678800000,
        33193800000,
        57733200000,
        64816200000,
        89182800000,
        96438600000,
        120632400000,
        127974600000,
        152082000000,
        972799200000,
        975823200000,
        null
      ],
      "offset": [
        280,
        300,
        240,
        300,
        270,
        300,
        270,
        300,
        270,
        300,
        270,
        300,
        270,
        300,
        240,
        300,
        240
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
        false,
        true,
        false,
        true,
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
