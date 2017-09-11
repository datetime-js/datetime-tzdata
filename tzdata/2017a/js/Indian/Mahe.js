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
    "Indian/Mahe": {
      "name": "Indian/Mahe",
      "abbr": [
        "LMT",
        "+04"
      ],
      "until": [
        -2006653308000,
        null
      ],
      "offset": [
        -221.8,
        -240
      ],
      "dst": [
        false,
        false
      ]
    }
  },
  "links": []
};
})); 
