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
    "Etc/GMT+8": {
      "name": "Etc/GMT+8",
      "abbr": [
        "-08"
      ],
      "until": [
        null
      ],
      "offset": [
        480
      ],
      "dst": [
        false
      ]
    }
  },
  "links": []
};
})); 
