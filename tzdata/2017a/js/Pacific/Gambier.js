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
    "Pacific/Gambier": {
      "name": "Pacific/Gambier",
      "abbr": [
        "LMT",
        "-09"
      ],
      "until": [
        -1806678012000,
        null
      ],
      "offset": [
        539.8,
        540
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
