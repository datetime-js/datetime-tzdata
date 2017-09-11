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
    "America/Martinique": {
      "name": "America/Martinique",
      "abbr": [
        "FFMT",
        "AST",
        "ADT",
        "AST"
      ],
      "until": [
        -1851537340000,
        323841600000,
        338958000000,
        null
      ],
      "offset": [
        244.3333,
        240,
        180,
        240
      ],
      "dst": [
        false,
        false,
        true,
        false
      ]
    }
  },
  "links": []
};
})); 
