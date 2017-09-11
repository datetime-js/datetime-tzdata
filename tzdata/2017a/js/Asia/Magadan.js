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
    "Asia/Magadan": {
      "name": "Asia/Magadan",
      "abbr": [
        "LMT",
        "+10",
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
        "+11",
        "+10",
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
        "+10",
        "+11"
      ],
      "until": [
        -1441188192000,
        -1247565600000,
        354891600000,
        370699200000,
        386427600000,
        402235200000,
        417963600000,
        433771200000,
        449586000000,
        465318000000,
        481042800000,
        496767600000,
        512492400000,
        528217200000,
        543942000000,
        559666800000,
        575391600000,
        591116400000,
        606841200000,
        622566000000,
        638290800000,
        654620400000,
        686073600000,
        695750400000,
        701794800000,
        717519600000,
        733244400000,
        748969200000,
        764694000000,
        780418800000,
        796143600000,
        811868400000,
        828198000000,
        846342000000,
        859647600000,
        877791600000,
        891097200000,
        909241200000,
        922546800000,
        941295600000,
        953996400000,
        972745200000,
        985446000000,
        1004194800000,
        1017500400000,
        1035644400000,
        1048950000000,
        1067094000000,
        1080399600000,
        1099148400000,
        1111849200000,
        1130598000000,
        1143298800000,
        1162047600000,
        1174748400000,
        1193497200000,
        1206802800000,
        1224946800000,
        1238252400000,
        1256396400000,
        1269702000000,
        1288450800000,
        1301151600000,
        1414245600000,
        1461427200000,
        null
      ],
      "offset": [
        -603.2,
        -600,
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
        -660,
        -600,
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
        -600,
        -660
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