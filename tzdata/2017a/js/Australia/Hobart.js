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
    "Australia/Hobart": {
      "name": "Australia/Hobart",
      "abbr": [
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT",
        "AEST",
        "AEDT"
      ],
      "until": [
        -1680508800000,
        -1665392400000,
        -883641600000,
        -876128400000,
        -860400000000,
        -844678800000,
        -828345600000,
        -813229200000,
        -71136000000,
        -55411200000,
        -37267200000,
        -25776000000,
        -5817600000,
        5673600000,
        25632000000,
        37728000000,
        57686400000,
        67968000000,
        89136000000,
        100022400000,
        120585600000,
        131472000000,
        152035200000,
        162921600000,
        183484800000,
        194976000000,
        215539200000,
        226425600000,
        246988800000,
        257875200000,
        278438400000,
        289324800000,
        309888000000,
        320774400000,
        341337600000,
        352224000000,
        372787200000,
        386092800000,
        404841600000,
        417542400000,
        436291200000,
        447177600000,
        467740800000,
        478627200000,
        499190400000,
        510076800000,
        530035200000,
        542736000000,
        562089600000,
        574790400000,
        594144000000,
        606240000000,
        625593600000,
        637689600000,
        657043200000,
        670348800000,
        686678400000,
        701798400000,
        718128000000,
        733248000000,
        749577600000,
        764697600000,
        781027200000,
        796147200000,
        812476800000,
        828201600000,
        844531200000,
        859651200000,
        875980800000,
        891100800000,
        907430400000,
        922550400000,
        938880000000,
        954000000000,
        967305600000,
        985449600000,
        1002384000000,
        1017504000000,
        1033833600000,
        1048953600000,
        1065283200000,
        1080403200000,
        1096732800000,
        1111852800000,
        1128182400000,
        1143907200000,
        1159632000000,
        1174752000000,
        1191686400000,
        1207411200000,
        1223136000000,
        1238860800000,
        1254585600000,
        1270310400000,
        1286035200000,
        1301760000000,
        1317484800000,
        1333209600000,
        1349539200000,
        1365264000000,
        1380988800000,
        1396713600000,
        1412438400000,
        1428163200000,
        1443888000000,
        1459612800000,
        1475337600000,
        1491062400000,
        1506787200000,
        1522512000000,
        1538841600000,
        1554566400000,
        1570291200000,
        1586016000000,
        1601740800000,
        1617465600000,
        1633190400000,
        1648915200000,
        1664640000000,
        1680364800000,
        1696089600000,
        1712419200000,
        1728144000000,
        1743868800000,
        1759593600000,
        1775318400000,
        1791043200000,
        1806768000000,
        1822492800000,
        1838217600000,
        1853942400000,
        1869667200000,
        1885996800000,
        1901721600000,
        1917446400000,
        1933171200000,
        1948896000000,
        1964620800000,
        1980345600000,
        1996070400000,
        2011795200000,
        2027520000000,
        2043244800000,
        2058969600000,
        2075299200000,
        2091024000000,
        2106748800000,
        2122473600000,
        2138198400000,
        null
      ],
      "offset": [
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660,
        -600,
        -660
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
