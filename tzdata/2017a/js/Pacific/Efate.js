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
    "Pacific/Efate": {
      "name": "Pacific/Efate",
      "abbr": [
        "LMT",
        "+11",
        "+12",
        "+11",
        "+12",
        "+11",
        "+12",
        "+11",
        "+12",
        "+11",
        "+12",
        "+11",
        "+12",
        "+11",
        "+12",
        "+11",
        "+12",
        "+11",
        "+12",
        "+11",
        "+12",
        "+11"
      ],
      "until": [
        -1829387596000,
        433256400000,
        448977600000,
        467298000000,
        480427200000,
        496760400000,
        511876800000,
        528210000000,
        543931200000,
        559659600000,
        575380800000,
        591109200000,
        606830400000,
        622558800000,
        638280000000,
        654008400000,
        669729600000,
        686062800000,
        696340800000,
        719931600000,
        727790400000,
        null
      ],
      "offset": [
        -673.2667,
        -660,
        -720,
        -660,
        -720,
        -660,
        -720,
        -660,
        -720,
        -660,
        -720,
        -660,
        -720,
        -660,
        -720,
        -660,
        -720,
        -660,
        -720,
        -660,
        -720,
        -660
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
        false
      ]
    }
  },
  "links": []
};
})); 
