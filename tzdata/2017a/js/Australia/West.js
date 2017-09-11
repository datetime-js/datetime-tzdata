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
    "Australia/West": {
      "name": "Australia/West",
      "abbr": [
        "AWST",
        "AWDT",
        "AWST",
        "AWDT",
        "AWST",
        "AWDT",
        "AWST",
        "AWDT",
        "AWST",
        "AWDT",
        "AWST",
        "AWDT",
        "AWST",
        "AWDT",
        "AWST",
        "AWDT",
        "AWST",
        "AWDT",
        "AWST"
      ],
      "until": [
        -1672559940000,
        -1665385200000,
        -883634400000,
        -876121200000,
        -860392800000,
        -844671600000,
        152042400000,
        162928800000,
        436298400000,
        447184800000,
        690314400000,
        699386400000,
        1165082400000,
        1174759200000,
        1193508000000,
        1206813600000,
        1224957600000,
        1238263200000,
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
        -480,
        -540,
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
