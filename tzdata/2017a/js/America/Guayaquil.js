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
    "America/Guayaquil": {
      "name": "America/Guayaquil",
      "abbr": [
        "QMT",
        "-05",
        "-04",
        "-05"
      ],
      "until": [
        -1230749160000,
        722926800000,
        728884800000,
        null
      ],
      "offset": [
        314,
        300,
        240,
        300
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
