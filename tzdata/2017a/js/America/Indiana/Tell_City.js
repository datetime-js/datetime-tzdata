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
    "America/Indiana/Tell_City": {
      "name": "America/Indiana/Tell_City",
      "abbr": [
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CWT",
        "CPT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "EST",
        "EDT",
        "EST",
        "EDT",
        "EST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST"
      ],
      "until": [
        -1633276800000,
        -1615136400000,
        -1601827200000,
        -1583686800000,
        -880214400000,
        -769395600000,
        -765392400000,
        -747244800000,
        -733942800000,
        -526492800000,
        -513190800000,
        -495043200000,
        -481741200000,
        -462996000000,
        -450291600000,
        -431539200000,
        -418237200000,
        -400089600000,
        -386787600000,
        -368640000000,
        -355338000000,
        -337190400000,
        -323888400000,
        -305740800000,
        -289414800000,
        -273686400000,
        -260989200000,
        -242236800000,
        -226515600000,
        -210787200000,
        -195066000000,
        -179337600000,
        -21488400000,
        -5767200000,
        9961200000,
        25682400000,
        1143961200000,
        1162105200000,
        1173600000000,
        1194159600000,
        1205049600000,
        1225609200000,
        1236499200000,
        1257058800000,
        1268553600000,
        1289113200000,
        1300003200000,
        1320562800000,
        1331452800000,
        1352012400000,
        1362902400000,
        1383462000000,
        1394352000000,
        1414911600000,
        1425801600000,
        1446361200000,
        1457856000000,
        1478415600000,
        1489305600000,
        1509865200000,
        1520755200000,
        1541314800000,
        1552204800000,
        1572764400000,
        1583654400000,
        1604214000000,
        1615708800000,
        1636268400000,
        1647158400000,
        1667718000000,
        1678608000000,
        1699167600000,
        1710057600000,
        1730617200000,
        1741507200000,
        1762066800000,
        1772956800000,
        1793516400000,
        1805011200000,
        1825570800000,
        1836460800000,
        1857020400000,
        1867910400000,
        1888470000000,
        1899360000000,
        1919919600000,
        1930809600000,
        1951369200000,
        1962864000000,
        1983423600000,
        1994313600000,
        2014873200000,
        2025763200000,
        2046322800000,
        2057212800000,
        2077772400000,
        2088662400000,
        2109222000000,
        2120112000000,
        2140671600000,
        null
      ],
      "offset": [
        360,
        300,
        360,
        300,
        360,
        300,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        240,
        300,
        240,
        300,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360,
        300,
        360
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
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
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
