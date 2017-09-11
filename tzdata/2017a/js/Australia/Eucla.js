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
    "Australia/Eucla": {
      "name": "Australia/Eucla",
      "abbr": [
        "+0845",
        "+0945",
        "+0845",
        "+0945",
        "+0845",
        "+0945",
        "+0845",
        "+0945",
        "+0845",
        "+0945",
        "+0845",
        "+0945",
        "+0845",
        "+0945",
        "+0845",
        "+0945",
        "+0845",
        "+0945",
        "+0845"
      ],
      "until": [
        -1672562640000,
        -1665387900000,
        -883637100000,
        -876123900000,
        -860395500000,
        -844674300000,
        152039700000,
        162926100000,
        436295700000,
        447182100000,
        690311700000,
        699383700000,
        1165079700000,
        1174756500000,
        1193505300000,
        1206810900000,
        1224954900000,
        1238260500000,
        null
      ],
      "offset": [
        -525,
        -585,
        -525,
        -585,
        -525,
        -585,
        -525,
        -585,
        -525,
        -585,
        -525,
        -585,
        -525,
        -585,
        -525,
        -585,
        -525,
        -585,
        -525
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
        false,
        true,
        false
      ]
    }
  },
  "links": []
};
})); 
