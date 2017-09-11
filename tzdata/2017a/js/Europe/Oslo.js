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
    "Europe/Oslo": {
      "name": "Europe/Oslo",
      "abbr": [
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET",
        "CEST",
        "CET"
      ],
      "until": [
        -1691884800000,
        -1680573600000,
        -927511200000,
        -857257200000,
        -844556400000,
        -828226800000,
        -812502000000,
        -796777200000,
        -781052400000,
        -765327600000,
        -340844400000,
        -324514800000,
        -308790000000,
        -293065200000,
        -277340400000,
        -261615600000,
        -245890800000,
        -230166000000,
        -214441200000,
        -198716400000,
        -182991600000,
        -166662000000,
        -147913200000,
        -135212400000,
        323830800000,
        338950800000,
        354675600000,
        370400400000,
        386125200000,
        401850000000,
        417574800000,
        433299600000,
        449024400000,
        465354000000,
        481078800000,
        496803600000,
        512528400000,
        528253200000,
        543978000000,
        559702800000,
        575427600000,
        591152400000,
        606877200000,
        622602000000,
        638326800000,
        654656400000,
        670381200000,
        686106000000,
        701830800000,
        717555600000,
        733280400000,
        749005200000,
        764730000000,
        780454800000,
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
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60,
        -120,
        -60
      ],
      "dst": [
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
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
