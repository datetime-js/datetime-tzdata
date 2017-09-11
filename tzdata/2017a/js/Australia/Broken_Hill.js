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
    "Australia/Broken_Hill": {
      "name": "Australia/Broken_Hill",
      "abbr": [
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT",
        "ACST",
        "ACDT"
      ],
      "until": [
        -1672565340000,
        -1665390600000,
        -883639800000,
        -876126600000,
        -860398200000,
        -844677000000,
        -828343800000,
        -813227400000,
        57688200000,
        67969800000,
        89137800000,
        100024200000,
        120587400000,
        131473800000,
        152037000000,
        162923400000,
        183486600000,
        194977800000,
        215541000000,
        226427400000,
        246990600000,
        257877000000,
        278440200000,
        289326600000,
        309889800000,
        320776200000,
        341339400000,
        352225800000,
        372789000000,
        386699400000,
        404843400000,
        415729800000,
        436293000000,
        447179400000,
        467742600000,
        478629000000,
        499192200000,
        511288200000,
        530037000000,
        542737800000,
        562091400000,
        574792200000,
        594145800000,
        606241800000,
        625595400000,
        636481800000,
        657045000000,
        667931400000,
        688494600000,
        699381000000,
        719944200000,
        731435400000,
        751998600000,
        762885000000,
        783448200000,
        794334600000,
        814897800000,
        828203400000,
        846347400000,
        859653000000,
        877797000000,
        891102600000,
        909246600000,
        922552200000,
        941301000000,
        954001800000,
        972750600000,
        985451400000,
        1004200200000,
        1017505800000,
        1035649800000,
        1048955400000,
        1067099400000,
        1080405000000,
        1099153800000,
        1111854600000,
        1130603400000,
        1143909000000,
        1162053000000,
        1174753800000,
        1193502600000,
        1207413000000,
        1223137800000,
        1238862600000,
        1254587400000,
        1270312200000,
        1286037000000,
        1301761800000,
        1317486600000,
        1333211400000,
        1349541000000,
        1365265800000,
        1380990600000,
        1396715400000,
        1412440200000,
        1428165000000,
        1443889800000,
        1459614600000,
        1475339400000,
        1491064200000,
        1506789000000,
        1522513800000,
        1538843400000,
        1554568200000,
        1570293000000,
        1586017800000,
        1601742600000,
        1617467400000,
        1633192200000,
        1648917000000,
        1664641800000,
        1680366600000,
        1696091400000,
        1712421000000,
        1728145800000,
        1743870600000,
        1759595400000,
        1775320200000,
        1791045000000,
        1806769800000,
        1822494600000,
        1838219400000,
        1853944200000,
        1869669000000,
        1885998600000,
        1901723400000,
        1917448200000,
        1933173000000,
        1948897800000,
        1964622600000,
        1980347400000,
        1996072200000,
        2011797000000,
        2027521800000,
        2043246600000,
        2058971400000,
        2075301000000,
        2091025800000,
        2106750600000,
        2122475400000,
        2138200200000,
        null
      ],
      "offset": [
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630,
        -570,
        -630
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
        true
      ]
    }
  },
  "links": []
};
})); 
