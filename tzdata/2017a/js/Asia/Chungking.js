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
    "Asia/Chungking": {
      "name": "Asia/Chungking",
      "abbr": [
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST",
        "CDT",
        "CST"
      ],
      "until": [
        -933494400000,
        -923130000000,
        -908784000000,
        -891594000000,
        515520000000,
        527007600000,
        545155200000,
        558457200000,
        576604800000,
        589906800000,
        608659200000,
        621961200000,
        640108800000,
        653410800000,
        671558400000,
        684860400000,
        null
      ],
      "offset": [
        -480,
        -540,
        -480,
        -540,
        -480,
        -540,
        -480,
        -540,
        -480,
        -540,
        -480,
        -540,
        -480,
        -540,
        -480,
        -540,
        -480
      ],
      "dst": [
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false
      ]
    }
  },
  "links": []
};
})); 
