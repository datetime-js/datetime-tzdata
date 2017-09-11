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
    "Antarctica/Davis": {
      "name": "Antarctica/Davis",
      "abbr": [
        "-00",
        "+07",
        "-00",
        "+07",
        "+05",
        "+07",
        "+05",
        "+07"
      ],
      "until": [
        -409190400000,
        -163062000000,
        -28857600000,
        1255806000000,
        1268251200000,
        1319742000000,
        1329854400000,
        null
      ],
      "offset": [
        0,
        -420,
        0,
        -420,
        -300,
        -420,
        -300,
        -420
      ],
      "dst": [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ]
    }
  },
  "links": []
};
})); 
