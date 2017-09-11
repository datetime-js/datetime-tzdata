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
    "America/Creston": {
      "name": "America/Creston",
      "abbr": [
        "MST",
        "PST",
        "MST"
      ],
      "until": [
        -1680454800000,
        -1627833600000,
        null
      ],
      "offset": [
        420,
        480,
        420
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
