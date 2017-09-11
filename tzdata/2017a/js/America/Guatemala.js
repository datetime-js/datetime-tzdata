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
    "America/Guatemala": {
      "name": "America/Guatemala",
      "abbr": [
        "LMT",
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
        -1617040676000,
        123055200000,
        130914000000,
        422344800000,
        433054800000,
        669708000000,
        684219600000,
        1146376800000,
        1159678800000,
        null
      ],
      "offset": [
        362.0667,
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
