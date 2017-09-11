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
    "Asia/Muscat": {
      "name": "Asia/Muscat",
      "abbr": [
        "LMT",
        "+04"
      ],
      "until": [
        -1577936472000,
        null
      ],
      "offset": [
        -221.2,
        -240
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
