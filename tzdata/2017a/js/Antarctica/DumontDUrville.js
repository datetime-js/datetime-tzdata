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
    "Antarctica/DumontDUrville": {
      "name": "Antarctica/DumontDUrville",
      "abbr": [
        "-00",
        "+10",
        "-00",
        "+10"
      ],
      "until": [
        -725846400000,
        -566992800000,
        -415497600000,
        null
      ],
      "offset": [
        0,
        -600,
        0,
        -600
      ],
      "dst": [
        false,
        false,
        false,
        false
      ]
    }
  },
  "links": []
};
})); 
