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
    "Pacific/Guadalcanal": {
      "name": "Pacific/Guadalcanal",
      "abbr": [
        "LMT",
        "+11"
      ],
      "until": [
        -1806748788000,
        null
      ],
      "offset": [
        -639.8,
        -660
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
