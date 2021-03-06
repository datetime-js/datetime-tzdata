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
    "Asia/Seoul": {
      "name": "Asia/Seoul",
      "abbr": [
        "LMT",
        "KST",
        "JST",
        "KST",
        "KST",
        "KDT",
        "KST",
        "KDT",
        "KST",
        "KDT",
        "KST",
        "KDT",
        "KST",
        "KDT",
        "KST",
        "KDT",
        "KST",
        "KST",
        "KDT",
        "KST",
        "KDT",
        "KST"
      ],
      "until": [
        -1948782472000,
        -1830414600000,
        -767350800000,
        -498128400000,
        -462702600000,
        -451733400000,
        -429784200000,
        -418296600000,
        -399544200000,
        -387451800000,
        -368094600000,
        -356002200000,
        -336645000000,
        -324552600000,
        -305195400000,
        -293103000000,
        -264933000000,
        547578000000,
        560883600000,
        579027600000,
        592333200000,
        null
      ],
      "offset": [
        -507.8667,
        -510,
        -540,
        -540,
        -510,
        -570,
        -510,
        -570,
        -510,
        -570,
        -510,
        -570,
        -510,
        -570,
        -510,
        -570,
        -510,
        -540,
        -600,
        -540,
        -600,
        -540
      ],
      "dst": [
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
