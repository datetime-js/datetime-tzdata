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
    "America/Curacao": {
      "name": "America/Curacao",
      "abbr": [
        "LMT",
        "-0430",
        "AST"
      ],
      "until": [
        -1826738653000,
        -157750200000,
        null
      ],
      "offset": [
        275.7833,
        270,
        240
      ],
      "dst": [
        false,
        false,
        false
      ]
    }
  },
  "links": []
};
})); 
