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
    "America/Pangnirtung": {
      "name": "America/Pangnirtung",
      "abbr": [
        "-00",
        "AST",
        "AWT",
        "APT",
        "AST",
        "ADDT",
        "AST",
        "ADT",
        "AST",
        "ADT",
        "AST",
        "ADT",
        "AST",
        "ADT",
        "AST",
        "ADT",
        "AST",
        "ADT",
        "AST",
        "ADT",
        "AST",
        "ADT",
        "AST",
        "ADT",
        "AST",
        "ADT",
        "AST",
        "ADT",
        "AST",
        "ADT",
        "AST",
        "ADT",
        "AST",
        "ADT",
        "AST",
        "ADT",
        "AST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "CST",
        "CDT",
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
        -1546300800000,
        -880221600000,
        -769395600000,
        -765399600000,
        -147902400000,
        -131572800000,
        325663200000,
        341384400000,
        357112800000,
        372834000000,
        388562400000,
        404888400000,
        420012000000,
        436338000000,
        452066400000,
        467787600000,
        483516000000,
        499237200000,
        514965600000,
        530686800000,
        544600800000,
        562136400000,
        576050400000,
        594190800000,
        607500000000,
        625640400000,
        638949600000,
        657090000000,
        671004000000,
        688539600000,
        702453600000,
        719989200000,
        733903200000,
        752043600000,
        765352800000,
        783493200000,
        796802400000,
        814946400000,
        828860400000,
        846396000000,
        860310000000,
        877845600000,
        891759600000,
        909295200000,
        923209200000,
        941349600000,
        954662400000,
        972802800000,
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
        0,
        240,
        180,
        180,
        240,
        120,
        240,
        180,
        240,
        180,
        240,
        180,
        240,
        180,
        240,
        180,
        240,
        180,
        240,
        180,
        240,
        180,
        240,
        180,
        240,
        180,
        240,
        180,
        240,
        180,
        240,
        180,
        240,
        180,
        240,
        180,
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
        360,
        300,
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
        false
      ]
    }
  },
  "links": []
};
})); 
