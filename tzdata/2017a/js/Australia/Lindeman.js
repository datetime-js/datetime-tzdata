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
    "Australia/Lindeman": {
      "name": "Australia/Lindeman",
      "abbr": [
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST"
      ],
      "until": [
        -1672567140000,
        -1665392400000,
        -883641600000,
        -876128400000,
        -860400000000,
        -844678800000,
        -828345600000,
        -813229200000,
        57686400000,
        67968000000,
        625593600000,
        636480000000,
        657043200000,
        667929600000,
        688492800000,
        699379200000,
        719942400000,
        731433600000,
        751996800000,
        762883200000,
        null
      ],
      "offset": [
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600
      ],
      "dst": [
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
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
