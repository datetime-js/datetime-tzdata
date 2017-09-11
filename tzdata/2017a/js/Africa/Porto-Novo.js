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
    "Africa/Porto-Novo": {
      "name": "Africa/Porto-Novo",
      "abbr": [
        "LMT",
        "WAT"
      ],
      "until": [
        -1588464816000,
        null
      ],
      "offset": [
        -13.6,
        -60
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
