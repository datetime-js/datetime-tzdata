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
    "America/Puerto_Rico": {
      "name": "America/Puerto_Rico",
      "abbr": [
        "AST",
        "AWT",
        "APT",
        "AST"
      ],
      "until": [
        -873057600000,
        -769395600000,
        -765399600000,
        null
      ],
      "offset": [
        240,
        180,
        180,
        240
      ],
      "dst": [
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
