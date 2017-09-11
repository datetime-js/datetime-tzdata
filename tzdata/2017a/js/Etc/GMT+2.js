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
    "Etc/GMT+2": {
      "name": "Etc/GMT+2",
      "abbr": [
        "-02"
      ],
      "until": [
        null
      ],
      "offset": [
        120
      ],
      "dst": [
        false
      ]
    }
  },
  "links": []
};
})); 
