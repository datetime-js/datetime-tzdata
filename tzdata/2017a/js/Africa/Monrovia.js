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
    "Africa/Monrovia": {
      "name": "Africa/Monrovia",
      "abbr": [
        "MMT",
        "-004430",
        "GMT"
      ],
      "until": [
        -1604359012000,
        73529070000,
        null
      ],
      "offset": [
        43.1333,
        44.5,
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
