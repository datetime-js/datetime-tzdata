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
    "Asia/Phnom_Penh": {
      "name": "Asia/Phnom_Penh",
      "abbr": [
        "BMT",
        "+07"
      ],
      "until": [
        -1570084924000,
        null
      ],
      "offset": [
        -402.0667,
        -420
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
