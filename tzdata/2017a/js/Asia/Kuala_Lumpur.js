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
    "Asia/Kuala_Lumpur": {
      "name": "Asia/Kuala_Lumpur",
      "abbr": [
        "SMT",
        "+07",
        "+0720",
        "+0730",
        "+09",
        "+0730",
        "+08"
      ],
      "until": [
        -2038200925000,
        -1167634800000,
        -894180000000,
        -879665400000,
        -767005200000,
        378664200000,
        null
      ],
      "offset": [
        -415.4167,
        -420,
        -440,
        -450,
        -540,
        -450,
        -480
      ],
      "dst": [
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
