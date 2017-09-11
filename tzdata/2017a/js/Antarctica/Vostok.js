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
    "Antarctica/Vostok": {
      "name": "Antarctica/Vostok",
      "abbr": [
        "-00",
        "+06"
      ],
      "until": [
        -380073600000,
        null
      ],
      "offset": [
        0,
        -360
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
