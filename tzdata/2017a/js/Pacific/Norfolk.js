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
    "Pacific/Norfolk": {
      "name": "Pacific/Norfolk",
      "abbr": [
        "+1112",
        "+1130",
        "+1230",
        "+1130",
        "+11"
      ],
      "until": [
        -599656320000,
        152029800000,
        162912600000,
        1443882600000,
        null
      ],
      "offset": [
        -672,
        -690,
        -750,
        -690,
        -660
      ],
      "dst": [
        false,
        false,
        true,
        false,
        false
      ]
    }
  },
  "links": []
};
})); 
