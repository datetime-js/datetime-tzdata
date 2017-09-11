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
    "Asia/Kolkata": {
      "name": "Asia/Kolkata",
      "abbr": [
        "HMT",
        "+0630",
        "IST",
        "+0630",
        "IST"
      ],
      "until": [
        -891582800000,
        -872058600000,
        -862637400000,
        -764145000000,
        null
      ],
      "offset": [
        -353.3333,
        -390,
        -330,
        -390,
        -330
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
