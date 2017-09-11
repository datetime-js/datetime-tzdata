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
    "Pacific/Niue": {
      "name": "Pacific/Niue",
      "abbr": [
        "-1120",
        "-1130",
        "-11"
      ],
      "until": [
        -599575200000,
        276089400000,
        null
      ],
      "offset": [
        680,
        690,
        660
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
