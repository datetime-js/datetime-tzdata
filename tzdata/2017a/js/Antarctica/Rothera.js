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
    "Antarctica/Rothera": {
      "name": "Antarctica/Rothera",
      "abbr": [
        "-00",
        "-03"
      ],
      "until": [
        218246400000,
        null
      ],
      "offset": [
        0,
        180
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
