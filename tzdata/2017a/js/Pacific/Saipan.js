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
    "Pacific/Saipan": {
      "name": "Pacific/Saipan",
      "abbr": [
        "GST",
        "ChST"
      ],
      "until": [
        977493600000,
        null
      ],
      "offset": [
        -600,
        -600
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
