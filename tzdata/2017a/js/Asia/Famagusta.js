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
    "Asia/Famagusta": {
      "name": "Asia/Famagusta",
      "abbr": [
        "LMT",
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
        "+03"
      ],
      "until": [
        -1518920148000,
        166572000000,
        182293200000,
        200959200000,
        213829200000,
        228866400000,
        243982800000,
        260316000000,
        276123600000,
        291765600000,
        307486800000,
        323820000000,
        338936400000,
        354664800000,
        370386000000,
        386114400000,
        401835600000,
        417564000000,
        433285200000,
        449013600000,
        465339600000,
        481068000000,
        496789200000,
        512517600000,
        528238800000,
        543967200000,
        559688400000,
        575416800000,
        591138000000,
        606866400000,
        622587600000,
        638316000000,
        654642000000,
        670370400000,
        686091600000,
        701820000000,
        717541200000,
        733269600000,
        748990800000,
        764719200000,
        780440400000,
        796168800000,
        811890000000,
        828223200000,
        843944400000,
        859672800000,
        875394000000,
        891122400000,
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
        1473282000000,
        null
      ],
      "offset": [
        -135.8,
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
        -180
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
        false
      ]
    }
  },
  "links": []
};
})); 
