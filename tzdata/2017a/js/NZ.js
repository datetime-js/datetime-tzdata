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
    "NZ": {
      "name": "NZ",
      "abbr": [
        "NZMT",
        "NZST",
        "NZMT",
        "NZST",
        "NZMT",
        "NZST",
        "NZMT",
        "NZST",
        "NZMT",
        "NZST",
        "NZMT",
        "NZST",
        "NZMT",
        "NZST",
        "NZMT",
        "NZST",
        "NZMT",
        "NZST",
        "NZMT",
        "NZST",
        "NZMT",
        "NZST",
        "NZMT",
        "NZST",
        "NZMT",
        "NZST",
        "NZMT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT",
        "NZST",
        "NZDT"
      ],
      "until": [
        -1330335000000,
        -1320057000000,
        -1300699800000,
        -1287396000000,
        -1269250200000,
        -1255946400000,
        -1237800600000,
        -1224496800000,
        -1206351000000,
        -1192442400000,
        -1174901400000,
        -1160992800000,
        -1143451800000,
        -1125914400000,
        -1112607000000,
        -1094464800000,
        -1081157400000,
        -1063015200000,
        -1049707800000,
        -1031565600000,
        -1018258200000,
        -1000116000000,
        -986808600000,
        -968061600000,
        -955359000000,
        -936612000000,
        -923304600000,
        152632800000,
        162309600000,
        183477600000,
        194968800000,
        215532000000,
        226418400000,
        246981600000,
        257868000000,
        278431200000,
        289317600000,
        309880800000,
        320767200000,
        341330400000,
        352216800000,
        372780000000,
        384271200000,
        404834400000,
        415720800000,
        436284000000,
        447170400000,
        467733600000,
        478620000000,
        499183200000,
        510069600000,
        530632800000,
        541519200000,
        562082400000,
        573573600000,
        594136800000,
        605023200000,
        623772000000,
        637682400000,
        655221600000,
        669132000000,
        686671200000,
        700581600000,
        718120800000,
        732636000000,
        749570400000,
        764085600000,
        781020000000,
        795535200000,
        812469600000,
        826984800000,
        844524000000,
        858434400000,
        875973600000,
        889884000000,
        907423200000,
        921938400000,
        938872800000,
        953388000000,
        970322400000,
        984837600000,
        1002376800000,
        1016287200000,
        1033826400000,
        1047736800000,
        1065276000000,
        1079791200000,
        1096725600000,
        1111240800000,
        1128175200000,
        1142690400000,
        1159624800000,
        1174140000000,
        1191074400000,
        1207404000000,
        1222524000000,
        1238853600000,
        1253973600000,
        1270303200000,
        1285423200000,
        1301752800000,
        1316872800000,
        1333202400000,
        1348927200000,
        1365256800000,
        1380376800000,
        1396706400000,
        1411826400000,
        1428156000000,
        1443276000000,
        1459605600000,
        1474725600000,
        1491055200000,
        1506175200000,
        1522504800000,
        1538229600000,
        1554559200000,
        1569679200000,
        1586008800000,
        1601128800000,
        1617458400000,
        1632578400000,
        1648908000000,
        1664028000000,
        1680357600000,
        1695477600000,
        1712412000000,
        1727532000000,
        1743861600000,
        1758981600000,
        1775311200000,
        1790431200000,
        1806760800000,
        1821880800000,
        1838210400000,
        1853330400000,
        1869660000000,
        1885384800000,
        1901714400000,
        1916834400000,
        1933164000000,
        1948284000000,
        1964613600000,
        1979733600000,
        1996063200000,
        2011183200000,
        2027512800000,
        2042632800000,
        2058962400000,
        2074687200000,
        2091016800000,
        2106136800000,
        2122466400000,
        2137586400000,
        null
      ],
      "offset": [
        -690,
        -750,
        -690,
        -720,
        -690,
        -720,
        -690,
        -720,
        -690,
        -720,
        -690,
        -720,
        -690,
        -720,
        -690,
        -720,
        -690,
        -720,
        -690,
        -720,
        -690,
        -720,
        -690,
        -720,
        -690,
        -720,
        -690,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780,
        -720,
        -780
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
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true
      ]
    }
  },
  "links": []
};
})); 
