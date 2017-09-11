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
    "Asia/Dhaka": {
      "name": "Asia/Dhaka",
      "abbr": [
        "HMT",
        "+0630",
        "+0530",
        "+0630",
        "+06",
        "+07",
        "+06"
      ],
      "until": [
        -891582800000,
        -872058600000,
        -862637400000,
        -576138600000,
        1245430800000,
        1262278800000,
        null
      ],
      "offset": [
        -353.3333,
        -390,
        -330,
        -390,
        -360,
        -420,
        -360
      ],
      "dst": [
        false,
        false,
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
