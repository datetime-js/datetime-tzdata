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
    "Asia/Kuching": {
      "name": "Asia/Kuching",
      "abbr": [
        "LMT",
        "+0730",
        "+08",
        "+0820",
        "+08",
        "+0820",
        "+08",
        "+0820",
        "+08",
        "+0820",
        "+08",
        "+0820",
        "+08",
        "+0820",
        "+08",
        "+0820",
        "+08",
        "+09",
        "+08"
      ],
      "until": [
        -1383463280000,
        -1167636600000,
        -1082448000000,
        -1074586800000,
        -1050825600000,
        -1042964400000,
        -1019289600000,
        -1011428400000,
        -987753600000,
        -979892400000,
        -956217600000,
        -948356400000,
        -924595200000,
        -916734000000,
        -893059200000,
        -885198000000,
        -879667200000,
        -767005200000,
        null
      ],
      "offset": [
        -441.3333,
        -450,
        -480,
        -500,
        -480,
        -500,
        -480,
        -500,
        -480,
        -500,
        -480,
        -500,
        -480,
        -500,
        -480,
        -500,
        -480,
        -540,
        -480
      ],
      "dst": [
        false,
        false,
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
        false,
        false
      ]
    }
  },
  "links": []
};
})); 
