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
    "America/La_Paz": {
      "name": "America/La_Paz",
      "abbr": [
        "CMT",
        "BOST",
        "-04"
      ],
      "until": [
        -1205954844000,
        -1192307244000,
        null
      ],
      "offset": [
        272.6,
        212.6,
        240
      ],
      "dst": [
        false,
        true,
        false
      ]
    }
  },
  "links": []
};
})); 
