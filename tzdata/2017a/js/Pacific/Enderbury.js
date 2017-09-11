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
    "Pacific/Enderbury": {
      "name": "Pacific/Enderbury",
      "abbr": [
        "-12",
        "-11",
        "+13"
      ],
      "until": [
        307627200000,
        788958000000,
        null
      ],
      "offset": [
        720,
        660,
        -780
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
