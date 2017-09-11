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
    "Asia/Ulan_Bator": {
      "name": "Asia/Ulan_Bator",
      "abbr": [
        "LMT",
        "+07",
        "+08",
        "+09",
        "+08",
        "+09",
        "+08",
        "+09",
        "+08",
        "+09",
        "+08",
        "+09",
        "+08",
        "+09",
        "+08",
        "+09",
        "+08",
        "+09",
        "+08",
        "+09",
        "+08",
        "+09",
        "+08",
        "+09",
        "+08",
        "+09",
        "+08",
        "+09",
        "+08",
        "+09",
        "+08",
        "+09",
        "+08",
        "+09",
        "+08",
        "+09",
        "+08",
        "+09",
        "+08",
        "+09",
        "+08",
        "+09",
        "+08",
        "+09",
        "+08",
        "+09",
        "+08",
        "+09",
        "+08",
        "+09",
        "+08"
      ],
      "until": [
        -2032931252000,
        252435600000,
        417974400000,
        433782000000,
        449596800000,
        465318000000,
        481046400000,
        496767600000,
        512496000000,
        528217200000,
        543945600000,
        559666800000,
        575395200000,
        591116400000,
        606844800000,
        622566000000,
        638294400000,
        654620400000,
        670348800000,
        686070000000,
        701798400000,
        717519600000,
        733248000000,
        748969200000,
        764697600000,
        780418800000,
        796147200000,
        811868400000,
        828201600000,
        843922800000,
        859651200000,
        875372400000,
        891100800000,
        906822000000,
        988394400000,
        1001696400000,
        1017424800000,
        1033146000000,
        1048874400000,
        1064595600000,
        1080324000000,
        1096045200000,
        1111773600000,
        1127494800000,
        1143223200000,
        1159549200000,
        1427479200000,
        1443193200000,
        1458928800000,
        1474642800000,
        null
      ],
      "offset": [
        -427.5333,
        -420,
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
        false
      ]
    }
  },
  "links": []
};
})); 
