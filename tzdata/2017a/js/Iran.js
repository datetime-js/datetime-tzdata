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
    "Iran": {
      "name": "Iran",
      "abbr": [
        "LMT",
        "TMT",
        "+0330",
        "+04",
        "+05",
        "+04",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330",
        "+0430",
        "+0330"
      ],
      "until": [
        -1704165944000,
        -757394744000,
        247177800000,
        259272000000,
        277758000000,
        283982400000,
        290809800000,
        306531000000,
        322432200000,
        338499000000,
        673216200000,
        685481400000,
        701209800000,
        717103800000,
        732745800000,
        748639800000,
        764281800000,
        780175800000,
        795817800000,
        811711800000,
        827353800000,
        843247800000,
        858976200000,
        874870200000,
        890512200000,
        906406200000,
        922048200000,
        937942200000,
        953584200000,
        969478200000,
        985206600000,
        1001100600000,
        1016742600000,
        1032636600000,
        1048278600000,
        1064172600000,
        1079814600000,
        1095708600000,
        1111437000000,
        1127331000000,
        1206045000000,
        1221939000000,
        1237667400000,
        1253561400000,
        1269203400000,
        1285097400000,
        1300739400000,
        1316633400000,
        1332275400000,
        1348169400000,
        1363897800000,
        1379791800000,
        1395433800000,
        1411327800000,
        1426969800000,
        1442863800000,
        1458505800000,
        1474399800000,
        1490128200000,
        1506022200000,
        1521664200000,
        1537558200000,
        1553200200000,
        1569094200000,
        1584736200000,
        1600630200000,
        1616358600000,
        1632252600000,
        1647894600000,
        1663788600000,
        1679430600000,
        1695324600000,
        1710966600000,
        1726860600000,
        1742589000000,
        1758483000000,
        1774125000000,
        1790019000000,
        1805661000000,
        1821555000000,
        1837197000000,
        1853091000000,
        1868733000000,
        1884627000000,
        1900355400000,
        1916249400000,
        1931891400000,
        1947785400000,
        1963427400000,
        1979321400000,
        1994963400000,
        2010857400000,
        2026585800000,
        2042479800000,
        2058121800000,
        2074015800000,
        2089657800000,
        2105551800000,
        2121193800000,
        2137087800000,
        null
      ],
      "offset": [
        -205.7333,
        -205.7333,
        -210,
        -240,
        -300,
        -240,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210,
        -270,
        -210
      ],
      "dst": [
        false,
        false,
        false,
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
        false
      ]
    }
  },
  "links": []
};
})); 
