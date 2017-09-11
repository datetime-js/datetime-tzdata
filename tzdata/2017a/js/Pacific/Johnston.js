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
    "Pacific/Johnston": {
      "name": "Pacific/Johnston",
      "abbr": [
        "HST",
        "HDT",
        "HST",
        "HDT",
        "HST",
        "HST"
      ],
      "until": [
        -1157283000000,
        -1155436200000,
        -880198200000,
        -765376200000,
        -712150200000,
        null
      ],
      "offset": [
        630,
        570,
        630,
        570,
        630,
        600
      ],
      "dst": [
        false,
        true,
        false,
        true,
        false,
        false
      ]
    }
  },
  "links": []
};
})); 
