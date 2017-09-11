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
    "Pacific/Rarotonga": {
      "name": "Pacific/Rarotonga",
      "abbr": [
        "-1030",
        "-0930",
        "-10",
        "-0930",
        "-10",
        "-0930",
        "-10",
        "-0930",
        "-10",
        "-0930",
        "-10",
        "-0930",
        "-10",
        "-0930",
        "-10",
        "-0930",
        "-10",
        "-0930",
        "-10",
        "-0930",
        "-10",
        "-0930",
        "-10",
        "-0930",
        "-10",
        "-0930",
        "-10"
      ],
      "until": [
        279714600000,
        289387800000,
        309952800000,
        320837400000,
        341402400000,
        352287000000,
        372852000000,
        384341400000,
        404906400000,
        415791000000,
        436356000000,
        447240600000,
        467805600000,
        478690200000,
        499255200000,
        510139800000,
        530704800000,
        541589400000,
        562154400000,
        573643800000,
        594208800000,
        605093400000,
        625658400000,
        636543000000,
        657108000000,
        667992600000,
        null
      ],
      "offset": [
        630,
        570,
        600,
        570,
        600,
        570,
        600,
        570,
        600,
        570,
        600,
        570,
        600,
        570,
        600,
        570,
        600,
        570,
        600,
        570,
        600,
        570,
        600,
        570,
        600,
        570,
        600
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
