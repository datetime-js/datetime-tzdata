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
    "Europe/Astrakhan": {
      "name": "Europe/Astrakhan",
      "abbr": [
        "LMT",
        "+03",
        "+04",
        "+05",
        "+04",
        "+05",
        "+04",
        "+05",
        "+04",
        "+05",
        "+04",
        "+05",
        "+04",
        "+05",
        "+04",
        "+05",
        "+04",
        "+05",
        "+04",
        "+03",
        "+04",
        "+03",
        "+04",
        "+03",
        "+04",
        "+03",
        "+04",
        "+03",
        "+04",
        "+03",
        "+04",
        "+03",
        "+04",
        "+03",
        "+04",
        "+03",
        "+04",
        "+03",
        "+04",
        "+03",
        "+04",
        "+03",
        "+04",
        "+03",
        "+04",
        "+03",
        "+04",
        "+03",
        "+04",
        "+03",
        "+04",
        "+03",
        "+04",
        "+03",
        "+04",
        "+03",
        "+04",
        "+03",
        "+04",
        "+03",
        "+04",
        "+03",
        "+04"
      ],
      "until": [
        -1441249932000,
        -1247540400000,
        354916800000,
        370724400000,
        386452800000,
        402260400000,
        417988800000,
        433796400000,
        449611200000,
        465343200000,
        481068000000,
        496792800000,
        512517600000,
        528242400000,
        543967200000,
        559692000000,
        575416800000,
        591141600000,
        622594800000,
        638319600000,
        654649200000,
        670374000000,
        717548400000,
        733273200000,
        748998000000,
        764722800000,
        780447600000,
        796172400000,
        811897200000,
        828226800000,
        846370800000,
        859676400000,
        877820400000,
        891126000000,
        909270000000,
        922575600000,
        941324400000,
        954025200000,
        972774000000,
        985474800000,
        1004223600000,
        1017529200000,
        1035673200000,
        1048978800000,
        1067122800000,
        1080428400000,
        1099177200000,
        1111878000000,
        1130626800000,
        1143327600000,
        1162076400000,
        1174777200000,
        1193526000000,
        1206831600000,
        1224975600000,
        1238281200000,
        1256425200000,
        1269730800000,
        1288479600000,
        1301180400000,
        1414274400000,
        1459033200000,
        null
      ],
      "offset": [
        -192.2,
        -180,
        -240,
        -300,
        -240,
        -300,
        -240,
        -300,
        -240,
        -300,
        -240,
        -300,
        -240,
        -300,
        -240,
        -300,
        -240,
        -300,
        -240,
        -180,
        -240,
        -180,
        -240,
        -180,
        -240,
        -180,
        -240,
        -180,
        -240,
        -180,
        -240,
        -180,
        -240,
        -180,
        -240,
        -180,
        -240,
        -180,
        -240,
        -180,
        -240,
        -180,
        -240,
        -180,
        -240,
        -180,
        -240,
        -180,
        -240,
        -180,
        -240,
        -180,
        -240,
        -180,
        -240,
        -180,
        -240,
        -180,
        -240,
        -180,
        -240,
        -180,
        -240
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
        false,
        false,
        false
      ]
    }
  },
  "links": []
};
})); 