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
    "America/Lima": {
      "name": "America/Lima",
      "abbr": [
        "LMT",
        "-05",
        "-04",
        "-05",
        "-04",
        "-05",
        "-04",
        "-05",
        "-04",
        "-05",
        "-04",
        "-05",
        "-04",
        "-05",
        "-04",
        "-05"
      ],
      "until": [
        -1938538284000,
        -1009825200000,
        -1002052800000,
        -986756400000,
        -971035200000,
        -955306800000,
        -939585600000,
        504939600000,
        512712000000,
        536475600000,
        544248000000,
        631170000000,
        638942400000,
        757400400000,
        765172800000,
        null
      ],
      "offset": [
        308.6,
        300,
        240,
        300,
        240,
        300,
        240,
        300,
        240,
        300,
        240,
        300,
        240,
        300,
        240,
        300
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
        false
      ]
    }
  },
  "links": []
};
})); 
