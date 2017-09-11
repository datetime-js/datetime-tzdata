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
    "Asia/Urumqi": {
      "name": "Asia/Urumqi",
      "abbr": [
        "LMT",
        "+06"
      ],
      "until": [
        -1325483420000,
        null
      ],
      "offset": [
        -350.3333,
        -360
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
