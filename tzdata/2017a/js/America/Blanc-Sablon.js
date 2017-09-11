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
    "America/Blanc-Sablon": {
      "name": "America/Blanc-Sablon",
      "abbr": [
        "AST",
        "ADT",
        "AST",
        "AWT",
        "APT",
        "AST"
      ],
      "until": [
        -1632074400000,
        -1615143600000,
        -880221600000,
        -769395600000,
        -765399600000,
        null
      ],
      "offset": [
        240,
        180,
        240,
        180,
        180,
        240
      ],
      "dst": [
        false,
        true,
        false,
        true,
        true,
        false
      ]
    }
  },
  "links": []
};
})); 
