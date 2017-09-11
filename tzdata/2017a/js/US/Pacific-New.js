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
    "US/Pacific-New": {
      "name": "US/Pacific-New",
      "abbr": [
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PWT",
        "PPT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST",
        "PDT",
        "PST"
      ],
      "until": [
        -1633269600000,
        -1615129200000,
        -1601820000000,
        -1583679600000,
        -880207200000,
        -769395600000,
        -765385200000,
        -687967140000,
        -662655600000,
        -620838000000,
        -608137200000,
        -589388400000,
        -576082800000,
        -557938800000,
        -544633200000,
        -526489200000,
        -513183600000,
        -495039600000,
        -481734000000,
        -463590000000,
        -450284400000,
        -431535600000,
        -418230000000,
        -400086000000,
        -386780400000,
        -368636400000,
        -355330800000,
        -337186800000,
        -323881200000,
        -305737200000,
        -292431600000,
        -273682800000,
        -260982000000,
        -242233200000,
        -226508400000,
        -210783600000,
        -195058800000,
        -179334000000,
        -163609200000,
        -147884400000,
        -131554800000,
        -116434800000,
        -100105200000,
        -84376800000,
        -68655600000,
        -52927200000,
        -37206000000,
        -21477600000,
        -5756400000,
        9972000000,
        25693200000,
        41421600000,
        57747600000,
        73476000000,
        89197200000,
        104925600000,
        120646800000,
        126698400000,
        152096400000,
        162381600000,
        183546000000,
        199274400000,
        215600400000,
        230724000000,
        247050000000,
        262778400000,
        278499600000,
        294228000000,
        309949200000,
        325677600000,
        341398800000,
        357127200000,
        372848400000,
        388576800000,
        404902800000,
        420026400000,
        436352400000,
        452080800000,
        467802000000,
        483530400000,
        499251600000,
        514980000000,
        530701200000,
        544615200000,
        562150800000,
        576064800000,
        594205200000,
        607514400000,
        625654800000,
        638964000000,
        657104400000,
        671018400000,
        688554000000,
        702468000000,
        720003600000,
        733917600000,
        752058000000,
        765367200000,
        783507600000,
        796816800000,
        814957200000,
        828871200000,
        846406800000,
        860320800000,
        877856400000,
        891770400000,
        909306000000,
        923220000000,
        941360400000,
        954669600000,
        972810000000,
        986119200000,
        1004259600000,
        1018173600000,
        1035709200000,
        1049623200000,
        1067158800000,
        1081072800000,
        1099213200000,
        1112522400000,
        1130662800000,
        1143972000000,
        1162112400000,
        1173607200000,
        1194166800000,
        1205056800000,
        1225616400000,
        1236506400000,
        1257066000000,
        1268560800000,
        1289120400000,
        1300010400000,
        1320570000000,
        1331460000000,
        1352019600000,
        1362909600000,
        1383469200000,
        1394359200000,
        1414918800000,
        1425808800000,
        1446368400000,
        1457863200000,
        1478422800000,
        1489312800000,
        1509872400000,
        1520762400000,
        1541322000000,
        1552212000000,
        1572771600000,
        1583661600000,
        1604221200000,
        1615716000000,
        1636275600000,
        1647165600000,
        1667725200000,
        1678615200000,
        1699174800000,
        1710064800000,
        1730624400000,
        1741514400000,
        1762074000000,
        1772964000000,
        1793523600000,
        1805018400000,
        1825578000000,
        1836468000000,
        1857027600000,
        1867917600000,
        1888477200000,
        1899367200000,
        1919926800000,
        1930816800000,
        1951376400000,
        1962871200000,
        1983430800000,
        1994320800000,
        2014880400000,
        2025770400000,
        2046330000000,
        2057220000000,
        2077779600000,
        2088669600000,
        2109229200000,
        2120119200000,
        2140678800000,
        null
      ],
      "offset": [
        480,
        420,
        480,
        420,
        480,
        420,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480,
        420,
        480
      ],
      "dst": [
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
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
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
