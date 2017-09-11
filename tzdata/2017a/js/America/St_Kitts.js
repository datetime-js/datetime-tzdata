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
    "America/St_Kitts": {
      "name": "America/St_Kitts",
      "abbr": [
        "LMT",
        "AST"
      ],
      "until": [
        -1825098836000,
        null
      ],
      "offset": [
        246.0667,
        240
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
