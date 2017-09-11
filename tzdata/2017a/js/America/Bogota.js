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
    "America/Bogota": {
      "name": "America/Bogota",
      "abbr": [
        "BMT",
        "-05",
        "-04",
        "-05"
      ],
      "until": [
        -1739041424000,
        704869200000,
        733896000000,
        null
      ],
      "offset": [
        296.2667,
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
