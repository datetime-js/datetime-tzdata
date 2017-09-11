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
    "Indian/Mauritius": {
      "name": "Indian/Mauritius",
      "abbr": [
        "LMT",
        "+04",
        "+05",
        "+04",
        "+05",
        "+04"
      ],
      "until": [
        -1988164200000,
        403041600000,
        417034800000,
        1224972000000,
        1238274000000,
        null
      ],
      "offset": [
        -230,
        -240,
        -300,
        -240,
        -300,
        -240
      ],
      "dst": [
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
