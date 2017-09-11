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
    "Asia/Kabul": {
      "name": "Asia/Kabul",
      "abbr": [
        "+04",
        "+0430"
      ],
      "until": [
        -788932800000,
        null
      ],
      "offset": [
        -240,
        -270
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
