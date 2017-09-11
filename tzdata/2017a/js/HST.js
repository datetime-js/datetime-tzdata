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
    "HST": {
      "name": "HST",
      "abbr": [
        "HST"
      ],
      "until": [
        null
      ],
      "offset": [
        600
      ],
      "dst": [
        false
      ]
    }
  },
  "links": []
};
})); 
