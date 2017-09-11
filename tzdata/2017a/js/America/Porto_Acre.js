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
    "America/Porto_Acre": {
      "name": "America/Porto_Acre",
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
        "-05",
        "-04",
        "-05"
      ],
      "until": [
        -1767209328000,
        -1206950400000,
        -1191355200000,
        -1175367600000,
        -1159819200000,
        -633812400000,
        -622062000000,
        -602276400000,
        -591825600000,
        -570740400000,
        -560203200000,
        -539118000000,
        -531345600000,
        -191358000000,
        -184190400000,
        -155156400000,
        -150062400000,
        -128890800000,
        -121118400000,
        -99946800000,
        -89582400000,
        -68410800000,
        -57960000000,
        499755600000,
        511243200000,
        530600400000,
        540273600000,
        562136400000,
        571204800000,
        1214283600000,
        1384056000000,
        null
      ],
      "offset": [
        271.2,
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
