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
    "Africa/Johannesburg": {
      "name": "Africa/Johannesburg",
      "abbr": [
        "SAST",
        "SAST",
        "SAST",
        "SAST",
        "SAST",
        "SAST"
      ],
      "until": [
        -2109288600000,
        -860976000000,
        -845254800000,
        -829526400000,
        -813805200000,
        null
      ],
      "offset": [
        -90,
        -120,
        -180,
        -120,
        -180,
        -120
      ],
      "dst": [
        false,
        false,
        true,
        false,
        true,
        false
      ]
    }
  },
  "links": []
};
})); 
