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
    "Japan": {
      "name": "Japan",
      "abbr": [
        "JST",
        "JDT",
        "JST",
        "JDT",
        "JST",
        "JDT",
        "JST",
        "JDT",
        "JST"
      ],
      "until": [
        -683794800000,
        -672393600000,
        -654764400000,
        -640944000000,
        -620290800000,
        -609494400000,
        -588841200000,
        -578044800000,
        null
      ],
      "offset": [
        -540,
        -600,
        -540,
        -600,
        -540,
        -600,
        -540,
        -600,
        -540
      ],
      "dst": [
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
