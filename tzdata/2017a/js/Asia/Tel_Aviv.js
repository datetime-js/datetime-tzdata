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
    "Asia/Tel_Aviv": {
      "name": "Asia/Tel_Aviv",
      "abbr": [
        "JMT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDDT",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST",
        "IDT",
        "IST"
      ],
      "until": [
        -1641003640000,
        -933645600000,
        -857358000000,
        -844300800000,
        -825822000000,
        -812685600000,
        -794199600000,
        -779853600000,
        -762656400000,
        -748310400000,
        -731127600000,
        -681962400000,
        -673243200000,
        -667962000000,
        -652327200000,
        -636426000000,
        -622087200000,
        -608947200000,
        -591847200000,
        -572486400000,
        -558576000000,
        -542851200000,
        -527731200000,
        -514425600000,
        -490845600000,
        -482986800000,
        -459475200000,
        -451537200000,
        -428551200000,
        -418262400000,
        -400032000000,
        -387428400000,
        142380000000,
        150843600000,
        167176800000,
        178664400000,
        482277600000,
        495579600000,
        516751200000,
        526424400000,
        545436000000,
        558478800000,
        576626400000,
        589323600000,
        609890400000,
        620773200000,
        638316000000,
        651618000000,
        669765600000,
        683672400000,
        701820000000,
        715726800000,
        733701600000,
        747176400000,
        765151200000,
        778021200000,
        796600800000,
        810075600000,
        826840800000,
        842821200000,
        858895200000,
        874184400000,
        890344800000,
        905029200000,
        923011200000,
        936313200000,
        955670400000,
        970783200000,
        986770800000,
        1001282400000,
        1017356400000,
        1033941600000,
        1048806000000,
        1065132000000,
        1081292400000,
        1095804000000,
        1112313600000,
        1128812400000,
        1143763200000,
        1159657200000,
        1175212800000,
        1189897200000,
        1206662400000,
        1223161200000,
        1238112000000,
        1254006000000,
        1269561600000,
        1284246000000,
        1301616000000,
        1317510000000,
        1333065600000,
        1348354800000,
        1364515200000,
        1382828400000,
        1395964800000,
        1414278000000,
        1427414400000,
        1445727600000,
        1458864000000,
        1477782000000,
        1490313600000,
        1509231600000,
        1521763200000,
        1540681200000,
        1553817600000,
        1572130800000,
        1585267200000,
        1603580400000,
        1616716800000,
        1635634800000,
        1648166400000,
        1667084400000,
        1679616000000,
        1698534000000,
        1711670400000,
        1729983600000,
        1743120000000,
        1761433200000,
        1774569600000,
        1792882800000,
        1806019200000,
        1824937200000,
        1837468800000,
        1856386800000,
        1868918400000,
        1887836400000,
        1900972800000,
        1919286000000,
        1932422400000,
        1950735600000,
        1963872000000,
        1982790000000,
        1995321600000,
        2014239600000,
        2026771200000,
        2045689200000,
        2058220800000,
        2077138800000,
        2090275200000,
        2108588400000,
        2121724800000,
        2140038000000,
        null
      ],
      "offset": [
        -140.6667,
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
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
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
