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
    "Africa/Bissau": {
      "name": "Africa/Bissau",
      "abbr": [
        "LMT",
        "-01",
        "GMT"
      ],
      "until": [
        -1830380260000,
        157770000000,
        null
      ],
      "offset": [
        62.3333,
        60,
        0
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
