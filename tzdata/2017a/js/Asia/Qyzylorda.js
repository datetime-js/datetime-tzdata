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
    "Asia/Qyzylorda": {
      "name": "Asia/Qyzylorda",
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
        "+06",
        "+05",
        "+06"
      ],
      "until": [
        -1441167712000,
        -1247544000000,
        354913200000,
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
        695768400000,
        717541200000,
        733266000000,
        748990800000,
        764715600000,
        780440400000,
        796165200000,
        811890000000,
        828219600000,
        846363600000,
        859669200000,
        877813200000,
        891118800000,
        909262800000,
        922568400000,
        941317200000,
        954018000000,
        972766800000,
        985467600000,
        1004216400000,
        1017522000000,
        1035666000000,
        1048971600000,
        1067115600000,
        1080421200000,
        null
      ],
      "offset": [
        -261.8667,
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
        -360,
        -300,
        -360
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
        false,
        true,
        false,
        true,
        false,
        false
      ]
    }
  },
  "links": []
};
})); 