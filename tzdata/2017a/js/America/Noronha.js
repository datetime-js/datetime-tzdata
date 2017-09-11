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
    "America/Noronha": {
      "name": "America/Noronha",
      "abbr": [
        "LMT",
        "-02",
        "-01",
        "-02",
        "-01",
        "-02",
        "-01",
        "-02",
        "-01",
        "-02",
        "-01",
        "-02",
        "-01",
        "-02",
        "-01",
        "-02",
        "-01",
        "-02",
        "-01",
        "-02",
        "-01",
        "-02",
        "-01",
        "-02",
        "-01",
        "-02",
        "-01",
        "-02",
        "-01",
        "-02",
        "-01",
        "-02",
        "-01",
        "-02",
        "-01",
        "-02",
        "-01",
        "-02",
        "-01",
        "-02"
      ],
      "until": [
        -1767217820000,
        -1206961200000,
        -1191366000000,
        -1175378400000,
        -1159830000000,
        -633823200000,
        -622072800000,
        -602287200000,
        -591836400000,
        -570751200000,
        -560214000000,
        -539128800000,
        -531356400000,
        -191368800000,
        -184201200000,
        -155167200000,
        -150073200000,
        -128901600000,
        -121129200000,
        -99957600000,
        -89593200000,
        -68421600000,
        -57970800000,
        499744800000,
        511232400000,
        530589600000,
        540262800000,
        562125600000,
        571194000000,
        592970400000,
        602038800000,
        624420000000,
        634698000000,
        938916000000,
        951613200000,
        970970400000,
        971571600000,
        1003024800000,
        1013907600000,
        null
      ],
      "offset": [
        129.6667,
        120,
        60,
        120,
        60,
        120,
        60,
        120,
        60,
        120,
        60,
        120,
        60,
        120,
        60,
        120,
        60,
        120,
        60,
        120,
        60,
        120,
        60,
        120,
        60,
        120,
        60,
        120,
        60,
        120,
        60,
        120,
        60,
        120,
        60,
        120,
        60,
        120,
        60,
        120
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
        false
      ]
    }
  },
  "links": []
};
})); 
