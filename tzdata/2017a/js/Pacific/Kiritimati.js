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
    "Pacific/Kiritimati": {
      "name": "Pacific/Kiritimati",
      "abbr": [
        "-1040",
        "-10",
        "+14"
      ],
      "until": [
        307622400000,
        788954400000,
        null
      ],
      "offset": [
        640,
        600,
        -840
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
