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
    "Europe/Kiev": {
      "name": "Europe/Kiev",
      "abbr": [
        "KMT",
        "EET",
        "MSK",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "MSK",
        "MSD",
        "MSK",
        "MSD",
        "MSK",
        "MSD",
        "MSK",
        "MSD",
        "MSK",
        "MSD",
        "MSK",
        "MSD",
        "MSK",
        "MSD",
        "MSK",
        "MSD",
        "MSK",
        "MSD",
        "MSK",
        "MSD",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET",
        "EEST",
        "EET"
      ],
      "until": [
        -1441159324000,
        -1247536800000,
        -892522800000,
        -857257200000,
        -844556400000,
        -828226800000,
        -825382800000,
        354920400000,
        370728000000,
        386456400000,
        402264000000,
        417992400000,
        433800000000,
        449614800000,
        465346800000,
        481071600000,
        496796400000,
        512521200000,
        528246000000,
        543970800000,
        559695600000,
        575420400000,
        591145200000,
        606870000000,
        622594800000,
        638319600000,
        646783200000,
        686102400000,
        701820000000,
        717541200000,
        733269600000,
        748990800000,
        764719200000,
        780440400000,
        796179600000,
        811904400000,
        828234000000,
        846378000000,
        859683600000,
        877827600000,
        891133200000,
        909277200000,
        922582800000,
        941331600000,
        954032400000,
        972781200000,
        985482000000,
        1004230800000,
        1017536400000,
        1035680400000,
        1048986000000,
        1067130000000,
        1080435600000,
        1099184400000,
        1111885200000,
        1130634000000,
        1143334800000,
        1162083600000,
        1174784400000,
        1193533200000,
        1206838800000,
        1224982800000,
        1238288400000,
        1256432400000,
        1269738000000,
        1288486800000,
        1301187600000,
        1319936400000,
        1332637200000,
        1351386000000,
        1364691600000,
        1382835600000,
        1396141200000,
        1414285200000,
        1427590800000,
        1445734800000,
        1459040400000,
        1477789200000,
        1490490000000,
        1509238800000,
        1521939600000,
        1540688400000,
        1553994000000,
        1572138000000,
        1585443600000,
        1603587600000,
        1616893200000,
        1635642000000,
        1648342800000,
        1667091600000,
        1679792400000,
        1698541200000,
        1711846800000,
        1729990800000,
        1743296400000,
        1761440400000,
        1774746000000,
        1792890000000,
        1806195600000,
        1824944400000,
        1837645200000,
        1856394000000,
        1869094800000,
        1887843600000,
        1901149200000,
        1919293200000,
        1932598800000,
        1950742800000,
        1964048400000,
        1982797200000,
        1995498000000,
        2014246800000,
        2026947600000,
        2045696400000,
        2058397200000,
        2077146000000,
        2090451600000,
        2108595600000,
        2121901200000,
        2140045200000,
        null
      ],
      "offset": [
        -122.0667,
        -120,
        -180,
        -120,
        -60,
        -120,
        -60,
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
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120,
        -180,
        -120
      ],
      "dst": [
        false,
        false,
        false,
        true,
        false,
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
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
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
