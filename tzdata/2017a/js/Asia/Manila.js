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
    "Asia/Manila": {
      "name": "Asia/Manila",
      "abbr": [
        "+08",
        "+09",
        "+08",
        "+09",
        "+08",
        "+09",
        "+08",
        "+09",
        "+08"
      ],
      "until": [
        -1046678400000,
        -1038733200000,
        -873273600000,
        -794221200000,
        -496224000000,
        -489315600000,
        259344000000,
        275151600000,
        null
      ],
      "offset": [
        -480,
        -540,
        -480,
        -540,
        -480,
        -540,
        -480,
        -540,
        -480
      ],
      "dst": [
        false,
        true,
        false,
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
