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
    "America/Panama": {
      "name": "America/Panama",
      "abbr": [
        "CMT",
        "EST"
      ],
      "until": [
        -1946918424000,
        null
      ],
      "offset": [
        319.6,
        300
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
