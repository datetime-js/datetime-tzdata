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
    "Pacific/Bougainville": {
      "name": "Pacific/Bougainville",
      "abbr": [
        "+10",
        "+09",
        "+10",
        "+11"
      ],
      "until": [
        -868010400000,
        -768906000000,
        1419696000000,
        null
      ],
      "offset": [
        -600,
        -540,
        -600,
        -660
      ],
      "dst": [
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
