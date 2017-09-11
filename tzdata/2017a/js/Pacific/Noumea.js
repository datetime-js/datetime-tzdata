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
    "Pacific/Noumea": {
      "name": "Pacific/Noumea",
      "abbr": [
        "LMT",
        "+11",
        "+12",
        "+11",
        "+12",
        "+11",
        "+12",
        "+11"
      ],
      "until": [
        -1829387148000,
        250002000000,
        257342400000,
        281451600000,
        288878400000,
        849366000000,
        857228400000,
        null
      ],
      "offset": [
        -665.8,
        -660,
        -720,
        -660,
        -720,
        -660,
        -720,
        -660
      ],
      "dst": [
        false,
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
