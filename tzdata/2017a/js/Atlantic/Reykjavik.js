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
    "Atlantic/Reykjavik": {
      "name": "Atlantic/Reykjavik",
      "abbr": [
        "LMT",
        "-01",
        "+00",
        "-01",
        "+00",
        "-01",
        "+00",
        "-01",
        "+00",
        "-01",
        "+00",
        "-01",
        "+00",
        "-01",
        "+00",
        "-01",
        "+00",
        "-01",
        "+00",
        "-01",
        "+00",
        "-01",
        "+00",
        "-01",
        "+00",
        "-01",
        "+00",
        "-01",
        "+00",
        "-01",
        "+00",
        "-01",
        "+00",
        "-01",
        "+00",
        "-01",
        "+00",
        "-01",
        "+00",
        "-01",
        "+00",
        "-01",
        "+00",
        "-01",
        "+00",
        "-01",
        "+00",
        "-01",
        "+00",
        "-01",
        "+00",
        "-01",
        "+00",
        "-01",
        "+00",
        "-01",
        "+00",
        "-01",
        "+00",
        "-01",
        "+00",
        "-01",
        "+00",
        "-01",
        "+00",
        "-01",
        "+00",
        "-01",
        "GMT"
      ],
      "until": [
        -1956609120000,
        -1668211200000,
        -1647212400000,
        -1636675200000,
        -1613430000000,
        -1605139200000,
        -1581894000000,
        -1539561600000,
        -1531350000000,
        -968025600000,
        -952293600000,
        -942008400000,
        -920239200000,
        -909957600000,
        -888789600000,
        -877903200000,
        -857944800000,
        -846453600000,
        -826495200000,
        -815004000000,
        -795045600000,
        -783554400000,
        -762991200000,
        -752104800000,
        -731541600000,
        -717631200000,
        -700092000000,
        -686181600000,
        -668642400000,
        -654732000000,
        -636588000000,
        -623282400000,
        -605743200000,
        -591832800000,
        -573688800000,
        -559778400000,
        -542239200000,
        -528328800000,
        -510789600000,
        -496879200000,
        -479340000000,
        -465429600000,
        -447890400000,
        -433980000000,
        -415836000000,
        -401925600000,
        -384386400000,
        -370476000000,
        -352936800000,
        -339026400000,
        -321487200000,
        -307576800000,
        -290037600000,
        -276127200000,
        -258588000000,
        -244677600000,
        -226533600000,
        -212623200000,
        -195084000000,
        -181173600000,
        -163634400000,
        -149724000000,
        -132184800000,
        -118274400000,
        -100735200000,
        -86824800000,
        -68680800000,
        -54770400000,
        null
      ],
      "offset": [
        88,
        60,
        0,
        60,
        0,
        60,
        0,
        60,
        0,
        60,
        0,
        60,
        0,
        60,
        0,
        60,
        0,
        60,
        0,
        60,
        0,
        60,
        0,
        60,
        0,
        60,
        0,
        60,
        0,
        60,
        0,
        60,
        0,
        60,
        0,
        60,
        0,
        60,
        0,
        60,
        0,
        60,
        0,
        60,
        0,
        60,
        0,
        60,
        0,
        60,
        0,
        60,
        0,
        60,
        0,
        60,
        0,
        60,
        0,
        60,
        0,
        60,
        0,
        60,
        0,
        60,
        0,
        60,
        0
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
