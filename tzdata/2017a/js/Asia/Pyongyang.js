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
    "Asia/Pyongyang": {
      "name": "Asia/Pyongyang",
      "abbr": [
        "LMT",
        "KST",
        "JST",
        "KST",
        "KST"
      ],
      "until": [
        -1948782180000,
        -1830414600000,
        -768646800000,
        1439564400000,
        null
      ],
      "offset": [
        -503,
        -510,
        -540,
        -540,
        -510
      ],
      "dst": [
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
