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
    "America/Inuvik": {
      "name": "America/Inuvik",
      "abbr": [
        "-00",
        "PST",
        "PDDT",
        "PST",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST",
        "MDT",
        "MST"
      ],
      "until": [
        -536457600000,
        -147888000000,
        -131558400000,
        294228000000,
        325674000000,
        341395200000,
        357123600000,
        372844800000,
        388573200000,
        404899200000,
        420022800000,
        436348800000,
        452077200000,
        467798400000,
        483526800000,
        499248000000,
        514976400000,
        530697600000,
        544611600000,
        562147200000,
        576061200000,
        594201600000,
        607510800000,
        625651200000,
        638960400000,
        657100800000,
        671014800000,
        688550400000,
        702464400000,
        720000000000,
        733914000000,
        752054400000,
        765363600000,
        783504000000,
        796813200000,
        814953600000,
        828867600000,
        846403200000,
        860317200000,
        877852800000,
        891766800000,
        909302400000,
        923216400000,
        941356800000,
        954666000000,
        972806400000,
        986115600000,
        1004256000000,
        1018170000000,
        1035705600000,
        1049619600000,
        1067155200000,
        1081069200000,
        1099209600000,
        1112518800000,
        1130659200000,
        1143968400000,
        1162108800000,
        1173603600000,
        1194163200000,
        1205053200000,
        1225612800000,
        1236502800000,
        1257062400000,
        1268557200000,
        1289116800000,
        1300006800000,
        1320566400000,
        1331456400000,
        1352016000000,
        1362906000000,
        1383465600000,
        1394355600000,
        1414915200000,
        1425805200000,
        1446364800000,
        1457859600000,
        1478419200000,
        1489309200000,
        1509868800000,
        1520758800000,
        1541318400000,
        1552208400000,
        1572768000000,
        1583658000000,
        1604217600000,
        1615712400000,
        1636272000000,
        1647162000000,
        1667721600000,
        1678611600000,
        1699171200000,
        1710061200000,
        1730620800000,
        1741510800000,
        1762070400000,
        1772960400000,
        1793520000000,
        1805014800000,
        1825574400000,
        1836464400000,
        1857024000000,
        1867914000000,
        1888473600000,
        1899363600000,
        1919923200000,
        1930813200000,
        1951372800000,
        1962867600000,
        1983427200000,
        1994317200000,
        2014876800000,
        2025766800000,
        2046326400000,
        2057216400000,
        2077776000000,
        2088666000000,
        2109225600000,
        2120115600000,
        2140675200000,
        null
      ],
      "offset": [
        0,
        480,
        360,
        480,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420,
        360,
        420
      ],
      "dst": [
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
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
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
