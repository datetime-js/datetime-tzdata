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
    "America/Miquelon": {
      "name": "America/Miquelon",
      "abbr": [
        "LMT",
        "AST",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03",
        "-02",
        "-03"
      ],
      "until": [
        -1850328920000,
        326001600000,
        544597200000,
        562132800000,
        576046800000,
        594187200000,
        607496400000,
        625636800000,
        638946000000,
        657086400000,
        671000400000,
        688536000000,
        702450000000,
        719985600000,
        733899600000,
        752040000000,
        765349200000,
        783489600000,
        796798800000,
        814939200000,
        828853200000,
        846388800000,
        860302800000,
        877838400000,
        891752400000,
        909288000000,
        923202000000,
        941342400000,
        954651600000,
        972792000000,
        986101200000,
        1004241600000,
        1018155600000,
        1035691200000,
        1049605200000,
        1067140800000,
        1081054800000,
        1099195200000,
        1112504400000,
        1130644800000,
        1143954000000,
        1162094400000,
        1173589200000,
        1194148800000,
        1205038800000,
        1225598400000,
        1236488400000,
        1257048000000,
        1268542800000,
        1289102400000,
        1299992400000,
        1320552000000,
        1331442000000,
        1352001600000,
        1362891600000,
        1383451200000,
        1394341200000,
        1414900800000,
        1425790800000,
        1446350400000,
        1457845200000,
        1478404800000,
        1489294800000,
        1509854400000,
        1520744400000,
        1541304000000,
        1552194000000,
        1572753600000,
        1583643600000,
        1604203200000,
        1615698000000,
        1636257600000,
        1647147600000,
        1667707200000,
        1678597200000,
        1699156800000,
        1710046800000,
        1730606400000,
        1741496400000,
        1762056000000,
        1772946000000,
        1793505600000,
        1805000400000,
        1825560000000,
        1836450000000,
        1857009600000,
        1867899600000,
        1888459200000,
        1899349200000,
        1919908800000,
        1930798800000,
        1951358400000,
        1962853200000,
        1983412800000,
        1994302800000,
        2014862400000,
        2025752400000,
        2046312000000,
        2057202000000,
        2077761600000,
        2088651600000,
        2109211200000,
        2120101200000,
        2140660800000,
        null
      ],
      "offset": [
        224.6667,
        240,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180,
        120,
        180
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
