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
    "Pacific/Samoa": {
      "name": "Pacific/Samoa",
      "abbr": [
        "LMT",
        "SST"
      ],
      "until": [
        -1861879032000,
        null
      ],
      "offset": [
        682.8,
        660
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
