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
    "Europe/Bucharest": {
      "name": "Europe/Bucharest",
      "abbr": [
        "BMT",
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
        -1213148664000,
        -1187056800000,
        -1175479200000,
        -1159754400000,
        -1144029600000,
        -1127700000000,
        -1111975200000,
        -1096250400000,
        -1080525600000,
        -1064800800000,
        -1049076000000,
        -1033351200000,
        -1017626400000,
        -1001901600000,
        -986176800000,
        -970452000000,
        -954727200000,
        296604000000,
        307486800000,
        323816400000,
        338940000000,
        354672000000,
        370396800000,
        386121600000,
        401846400000,
        417571200000,
        433296000000,
        449020800000,
        465350400000,
        481075200000,
        496800000000,
        512524800000,
        528249600000,
        543974400000,
        559699200000,
        575424000000,
        591148800000,
        606873600000,
        622598400000,
        638323200000,
        654652800000,
        670370400000,
        686095200000,
        701820000000,
        717544800000,
        733269600000,
        748994400000,
        764719200000,
        780440400000,
        796168800000,
        811890000000,
        828223200000,
        846363600000,
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
        -104.4,
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
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
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
