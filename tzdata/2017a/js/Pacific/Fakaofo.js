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
    "Pacific/Fakaofo": {
      "name": "Pacific/Fakaofo",
      "abbr": [
        "-11",
        "+13"
      ],
      "until": [
        1325242800000,
        null
      ],
      "offset": [
        660,
        -780
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
