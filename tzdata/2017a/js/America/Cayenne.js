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
    "America/Cayenne": {
      "name": "America/Cayenne",
      "abbr": [
        "LMT",
        "-04",
        "-03"
      ],
      "until": [
        -1846269040000,
        -71092800000,
        null
      ],
      "offset": [
        209.3333,
        240,
        180
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
