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
    "Asia/Thimphu": {
      "name": "Asia/Thimphu",
      "abbr": [
        "LMT",
        "+0530",
        "+06"
      ],
      "until": [
        -706341516000,
        560025000000,
        null
      ],
      "offset": [
        -358.6,
        -330,
        -360
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
