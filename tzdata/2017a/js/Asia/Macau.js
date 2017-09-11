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
    "Asia/Macau": {
      "name": "Asia/Macau",
      "abbr": [
        "LMT",
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
        "CST",
        "CDT",
        "CST"
      ],
      "until": [
        -1830411260000,
        -277360200000,
        -257405400000,
        -245910600000,
        -225955800000,
        -214473600000,
        -194506200000,
        -182406600000,
        -163056600000,
        -150969600000,
        -131619600000,
        -117088200000,
        -101367000000,
        -85638600000,
        -69312600000,
        -53584200000,
        -37863000000,
        -22134600000,
        -6413400000,
        9315000000,
        25036200000,
        40764600000,
        56485800000,
        72201600000,
        87922800000,
        103651200000,
        119977200000,
        135705600000,
        151439400000,
        167167800000,
        182889000000,
        198617400000,
        214338600000,
        230067000000,
        245788200000,
        261504000000,
        277225200000,
        292953600000,
        309279600000,
        325008000000,
        340729200000,
        null
      ],
      "offset": [
        -454.3333,
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
        false,
        true,
        false
      ]
    }
  },
  "links": []
};
})); 
