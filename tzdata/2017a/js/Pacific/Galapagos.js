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
    "Pacific/Galapagos": {
      "name": "Pacific/Galapagos",
      "abbr": [
        "LMT",
        "-05",
        "-06",
        "-05",
        "-06"
      ],
      "until": [
        -1230746496000,
        504939600000,
        722930400000,
        728888400000,
        null
      ],
      "offset": [
        358.4,
        300,
        360,
        300,
        360
      ],
      "dst": [
        false,
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
