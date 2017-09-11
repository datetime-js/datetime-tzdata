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
    "America/Barbados": {
      "name": "America/Barbados",
      "abbr": [
        "LMT",
        "BMT",
        "AST",
        "ADT",
        "AST",
        "ADT",
        "AST",
        "ADT",
        "AST",
        "ADT",
        "AST"
      ],
      "until": [
        -1451678491000,
        -1199217691000,
        234943200000,
        244616400000,
        261554400000,
        276066000000,
        293004000000,
        307515600000,
        325058400000,
        338706000000,
        null
      ],
      "offset": [
        238.4833,
        238.4833,
        240,
        180,
        240,
        180,
        240,
        180,
        240,
        180,
        240
      ],
      "dst": [
        false,
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
