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
    "America/Managua": {
      "name": "America/Managua",
      "abbr": [
        "MMT",
        "CST",
        "EST",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "EST",
        "CST",
        "EST",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST"
      ],
      "until": [
        -1121105688000,
        105084000000,
        161758800000,
        290584800000,
        299134800000,
        322034400000,
        330584400000,
        694260000000,
        717310800000,
        725868000000,
        852094800000,
        1113112800000,
        1128229200000,
        1146384000000,
        1159682400000,
        null
      ],
      "offset": [
        345.2,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360
      ],
      "dst": [
        false,
        false,
        false,
        false,
        true,
        false,
        true,
        false,
        false,
        false,
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
