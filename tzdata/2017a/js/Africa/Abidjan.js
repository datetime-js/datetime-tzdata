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
    "Africa/Abidjan": {
      "name": "Africa/Abidjan",
      "abbr": [
        "LMT",
        "GMT"
      ],
      "until": [
        -1830383032000,
        null
      ],
      "offset": [
        16.1333,
        0
      ],
      "dst": [
        false,
        false
      ]
    }
  },
  "links": []
};
})); 
