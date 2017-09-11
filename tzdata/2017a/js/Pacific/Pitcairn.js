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
    "Pacific/Pitcairn": {
      "name": "Pacific/Pitcairn",
      "abbr": [
        "-0830",
        "-08"
      ],
      "until": [
        893665800000,
        null
      ],
      "offset": [
        510,
        480
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
