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
    "ROC": {
      "name": "ROC",
      "abbr": [
        "CST",
        "JST",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST"
      ],
      "until": [
        -1017820800000,
        -766224000000,
        -745833600000,
        -733827600000,
        -716889600000,
        -699613200000,
        -683884800000,
        -670669200000,
        -652348800000,
        -639133200000,
        -620812800000,
        -607597200000,
        -589276800000,
        -576061200000,
        -562924800000,
        -541760400000,
        -528710400000,
        -510224400000,
        -497174400000,
        -478688400000,
        -465638400000,
        -449830800000,
        -434016000000,
        -418208400000,
        -402480000000,
        -386672400000,
        -370944000000,
        -355136400000,
        -339408000000,
        -323600400000,
        -302515200000,
        -291978000000,
        -270979200000,
        -260442000000,
        133977600000,
        149785200000,
        165513600000,
        181321200000,
        299606400000,
        307551600000,
        null
      ],
      "offset": [
        -480,
        -540,
        -480,
        -540,
        -480,
        -540,
        -480,
        -540,
        -480,
        -540,
        -480,
        -540,
        -480,
        -540,
        -480,
        -540,
        -480,
        -540,
        -480,
        -540,
        -480,
        -540,
        -480,
        -540,
        -480,
        -540,
        -480,
        -540,
        -480,
        -540,
        -480,
        -540,
        -480,
        -540,
        -480,
        -540,
        -480,
        -540,
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
