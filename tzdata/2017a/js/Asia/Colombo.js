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
    "Asia/Colombo": {
      "name": "Asia/Colombo",
      "abbr": [
        "MMT",
        "+0530",
        "+06",
        "+0630",
        "+0530",
        "+0630",
        "+06",
        "+0530"
      ],
      "until": [
        -2019705572000,
        -883287000000,
        -862639200000,
        -764051400000,
        832962600000,
        846266400000,
        1145039400000,
        null
      ],
      "offset": [
        -319.5333,
        -330,
        -360,
        -390,
        -330,
        -390,
        -360,
        -330
      ],
      "dst": [
        false,
        false,
        true,
        true,
        false,
        false,
        false,
        false
      ]
    }
  },
  "links": []
};
})); 
