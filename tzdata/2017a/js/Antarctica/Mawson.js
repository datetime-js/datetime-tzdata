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
    "Antarctica/Mawson": {
      "name": "Antarctica/Mawson",
      "abbr": [
        "-00",
        "+06",
        "+05"
      ],
      "until": [
        -501206400000,
        1255809600000,
        null
      ],
      "offset": [
        0,
        -360,
        -300
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
