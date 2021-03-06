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
    "Asia/Tashkent": {
      "name": "Asia/Tashkent",
      "abbr": [
        "LMT",
        "+05",
        "+06",
        "+07",
        "+06",
        "+07",
        "+06",
        "+07",
        "+06",
        "+07",
        "+06",
        "+07",
        "+06",
        "+07",
        "+06",
        "+07",
        "+06",
        "+07",
        "+06",
        "+07",
        "+06",
        "+07",
        "+06",
        "+05"
      ],
      "until": [
        -1441168631000,
        -1247547600000,
        354909600000,
        370717200000,
        386445600000,
        402253200000,
        417981600000,
        433789200000,
        449604000000,
        465336000000,
        481060800000,
        496785600000,
        512510400000,
        528235200000,
        543960000000,
        559684800000,
        575409600000,
        591134400000,
        606859200000,
        622584000000,
        638308800000,
        654638400000,
        686091600000,
        null
      ],
      "offset": [
        -277.1833,
        -300,
        -360,
        -420,
        -360,
        -420,
        -360,
        -420,
        -360,
        -420,
        -360,
        -420,
        -360,
        -420,
        -360,
        -420,
        -360,
        -420,
        -360,
        -420,
        -360,
        -420,
        -360,
        -300
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
        true,
        false
      ]
    }
  },
  "links": []
};
})); 
