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
    "Indian/Chagos": {
      "name": "Indian/Chagos",
      "abbr": [
        "LMT",
        "+05",
        "+06"
      ],
      "until": [
        -1988167780000,
        820436400000,
        null
      ],
      "offset": [
        -289.6667,
        -300,
        -360
      ],
      "dst": [
        false,
        false,
        false
      ]
    }
  },
  "links": []
};
})); 
