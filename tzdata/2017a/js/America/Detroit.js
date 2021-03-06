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
    "America/Detroit": {
      "name": "America/Detroit",
      "abbr": [
        "LMT",
        "CST",
        "EST",
        "EWT",
        "EPT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST"
      ],
      "until": [
        -2051202469000,
        -1724083200000,
        -880218000000,
        -769395600000,
        -765396000000,
        -684349200000,
        -671047200000,
        -80499600000,
        -68666400000,
        104914800000,
        120636000000,
        126687600000,
        152085600000,
        167814000000,
        183535200000,
        199263600000,
        215589600000,
        230713200000,
        247039200000,
        262767600000,
        278488800000,
        294217200000,
        309938400000,
        325666800000,
        341388000000,
        357116400000,
        372837600000,
        388566000000,
        404892000000,
        420015600000,
        436341600000,
        452070000000,
        467791200000,
        483519600000,
        499240800000,
        514969200000,
        530690400000,
        544604400000,
        562140000000,
        576054000000,
        594194400000,
        607503600000,
        625644000000,
        638953200000,
        657093600000,
        671007600000,
        688543200000,
        702457200000,
        719992800000,
        733906800000,
        752047200000,
        765356400000,
        783496800000,
        796806000000,
        814946400000,
        828860400000,
        846396000000,
        860310000000,
        877845600000,
        891759600000,
        909295200000,
        923209200000,
        941349600000,
        954658800000,
        972799200000,
        986108400000,
        1004248800000,
        1018162800000,
        1035698400000,
        1049612400000,
        1067148000000,
        1081062000000,
        1099202400000,
        1112511600000,
        1130652000000,
        1143961200000,
        1162101600000,
        1173596400000,
        1194156000000,
        1205046000000,
        1225605600000,
        1236495600000,
        1257055200000,
        1268550000000,
        1289109600000,
        1299999600000,
        1320559200000,
        1331449200000,
        1352008800000,
        1362898800000,
        1383458400000,
        1394348400000,
        1414908000000,
        1425798000000,
        1446357600000,
        1457852400000,
        1478412000000,
        1489302000000,
        1509861600000,
        1520751600000,
        1541311200000,
        1552201200000,
        1572760800000,
        1583650800000,
        1604210400000,
        1615705200000,
        1636264800000,
        1647154800000,
        1667714400000,
        1678604400000,
        1699164000000,
        1710054000000,
        1730613600000,
        1741503600000,
        1762063200000,
        1772953200000,
        1793512800000,
        1805007600000,
        1825567200000,
        1836457200000,
        1857016800000,
        1867906800000,
        1888466400000,
        1899356400000,
        1919916000000,
        1930806000000,
        1951365600000,
        1962860400000,
        1983420000000,
        1994310000000,
        2014869600000,
        2025759600000,
        2046319200000,
        2057209200000,
        2077768800000,
        2088658800000,
        2109218400000,
        2120108400000,
        2140668000000,
        null
      ],
      "offset": [
        332.1833,
        360,
        300,
        240,
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
