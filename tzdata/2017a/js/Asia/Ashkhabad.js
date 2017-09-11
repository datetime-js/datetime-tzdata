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
    "Asia/Ashkhabad": {
      "name": "Asia/Ashkhabad",
      "abbr": [
        "LMT",
        "+04",
        "+05",
        "+06",
        "+05",
        "+06",
        "+05",
        "+06",
        "+05",
        "+06",
        "+05",
        "+06",
        "+05",
        "+06",
        "+05",
        "+06",
        "+05",
        "+06",
        "+05",
        "+06",
        "+05",
        "+06",
        "+05",
        "+04",
        "+05"
      ],
      "until": [
        -1441166012000,
        -1247544000000,
        354913200000,
        370720800000,
        386449200000,
        402256800000,
        417985200000,
        433792800000,
        449607600000,
        465339600000,
        481064400000,
        496789200000,
        512514000000,
        528238800000,
        543963600000,
        559688400000,
        575413200000,
        591138000000,
        606862800000,
        622587600000,
        638312400000,
        654642000000,
        686095200000,
        695772000000,
        null
      ],
      "offset": [
        -233.5333,
        -240,
        -300,
        -360,
        -300,
        -360,
        -300,
        -360,
        -300,
        -360,
        -300,
        -360,
        -300,
        -360,
        -300,
        -360,
        -300,
        -360,
        -300,
        -360,
        -300,
        -360,
        -300,
        -240,
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
        false,
        false
      ]
    }
  },
  "links": []
};
})); 
