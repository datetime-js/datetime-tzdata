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
    "America/Guyana": {
      "name": "America/Guyana",
      "abbr": [
        "LMT",
        "-0345",
        "-03",
        "-04"
      ],
      "until": [
        -1730578040000,
        176010300000,
        662698800000,
        null
      ],
      "offset": [
        232.6667,
        225,
        180,
        240
      ],
      "dst": [
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
