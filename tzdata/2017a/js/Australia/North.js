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
    "Australia/North": {
      "name": "Australia/North",
      "abbr": [
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST"
      ],
      "until": [
        -1672565340000,
        -1665390600000,
        -883639800000,
        -876126600000,
        -860398200000,
        -844677000000,
        -828343800000,
        -813227400000,
        null
      ],
      "offset": [
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570
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
        false
      ]
    }
  },
  "links": []
};
})); 
