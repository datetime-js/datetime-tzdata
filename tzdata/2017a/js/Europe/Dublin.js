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
    "Europe/Dublin": {
      "name": "Europe/Dublin",
      "abbr": [
        "DMT",
        "IST",
        "GMT",
        "BST",
        "GMT",
        "BST",
        "GMT",
        "BST",
        "GMT",
        "BST",
        "GMT",
        "BST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT",
        "IST",
        "GMT"
      ],
      "until": [
        -1691962479000,
        -1680471279000,
        -1664143200000,
        -1650146400000,
        -1633903200000,
        -1617487200000,
        -1601848800000,
        -1586037600000,
        -1570399200000,
        -1552168800000,
        -1538344800000,
        -1522533600000,
        -1507500000000,
        -1490565600000,
        -1473631200000,
        -1460930400000,
        -1442786400000,
        -1428876000000,
        -1410732000000,
        -1396216800000,
        -1379282400000,
        -1364767200000,
        -1348437600000,
        -1333317600000,
        -1315778400000,
        -1301263200000,
        -1284328800000,
        -1269813600000,
        -1253484000000,
        -1238364000000,
        -1221429600000,
        -1206914400000,
        -1189980000000,
        -1175464800000,
        -1159135200000,
        -1143410400000,
        -1126476000000,
        -1111960800000,
        -1095631200000,
        -1080511200000,
        -1063576800000,
        -1049061600000,
        -1032127200000,
        -1017612000000,
        -1001282400000,
        -986162400000,
        -969228000000,
        -950479200000,
        -942012000000,
        -733359600000,
        -719445600000,
        -699490800000,
        -684972000000,
        -668037600000,
        -654732000000,
        -636588000000,
        -622072800000,
        -605743200000,
        -590623200000,
        -574293600000,
        -558568800000,
        -542239200000,
        -527119200000,
        -512604000000,
        -496274400000,
        -481154400000,
        -464220000000,
        -449704800000,
        -432165600000,
        -417650400000,
        -401320800000,
        -386200800000,
        -369266400000,
        -354751200000,
        -337816800000,
        -323301600000,
        -306972000000,
        -291852000000,
        -276732000000,
        -257983200000,
        -245282400000,
        -226533600000,
        -213228000000,
        -195084000000,
        -182383200000,
        -163634400000,
        -150933600000,
        -132184800000,
        -119484000000,
        -100735200000,
        -88034400000,
        -68680800000,
        -59004000000,
        57722400000,
        69818400000,
        89172000000,
        101268000000,
        120621600000,
        132717600000,
        152071200000,
        164167200000,
        183520800000,
        196221600000,
        214970400000,
        227671200000,
        246420000000,
        259120800000,
        278474400000,
        290570400000,
        309924000000,
        322020000000,
        341373600000,
        354675600000,
        372819600000,
        386125200000,
        404269200000,
        417574800000,
        435718800000,
        449024400000,
        467773200000,
        481078800000,
        499222800000,
        512528400000,
        530672400000,
        543978000000,
        562122000000,
        575427600000,
        593571600000,
        606877200000,
        625626000000,
        638326800000,
        657075600000,
        670381200000,
        688525200000,
        701830800000,
        719974800000,
        733280400000,
        751424400000,
        764730000000,
        782874000000,
        796179600000,
        814323600000,
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
        25.35,
        -34.65,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0,
        -60,
        0
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
        false
      ]
    }
  },
  "links": []
};
})); 
