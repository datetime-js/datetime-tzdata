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
    "Africa/Gaborone": {
      "name": "Africa/Gaborone",
      "abbr": [
        "LMT",
        "CAT"
      ],
      "until": [
        -2109291020000,
        null
      ],
      "offset": [
        -130.3333,
        -120
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
