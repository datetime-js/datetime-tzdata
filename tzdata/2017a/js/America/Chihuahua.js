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
    "America/Chihuahua": {
      "name": "America/Chihuahua",
      "abbr": [
        "LMT",
        "MST",
        "CST",
        "MST",
        "CST",
        "MST",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
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
        -1514739600000,
        -1343066400000,
        -1234807200000,
        -1220292000000,
        -1207159200000,
        -1191344400000,
        828864000000,
        846399600000,
        860313600000,
        877849200000,
        891766800000,
        909302400000,
        923216400000,
        941356800000,
        954666000000,
        972806400000,
        989139600000,
        1001836800000,
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
        1175418000000,
        1193558400000,
        1207472400000,
        1225008000000,
        1238922000000,
        1256457600000,
        1270371600000,
        1288512000000,
        1301821200000,
        1319961600000,
        1333270800000,
        1351411200000,
        1365325200000,
        1382860800000,
        1396774800000,
        1414310400000,
        1428224400000,
        1445760000000,
        1459674000000,
        1477814400000,
        1491123600000,
        1509264000000,
        1522573200000,
        1540713600000,
        1554627600000,
        1572163200000,
        1586077200000,
        1603612800000,
        1617526800000,
        1635667200000,
        1648976400000,
        1667116800000,
        1680426000000,
        1698566400000,
        1712480400000,
        1730016000000,
        1743930000000,
        1761465600000,
        1775379600000,
        1792915200000,
        1806829200000,
        1824969600000,
        1838278800000,
        1856419200000,
        1869728400000,
        1887868800000,
        1901782800000,
        1919318400000,
        1933232400000,
        1950768000000,
        1964682000000,
        1982822400000,
        1996131600000,
        2014272000000,
        2027581200000,
        2045721600000,
        2059030800000,
        2077171200000,
        2091085200000,
        2108620800000,
        2122534800000,
        2140070400000,
        null
      ],
      "offset": [
        424.3333,
        420,
        360,
        420,
        360,
        420,
        360,
        300,
        360,
        300,
        360,
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
        false,
        false,
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
        false
      ]
    }
  },
  "links": []
};
})); 
