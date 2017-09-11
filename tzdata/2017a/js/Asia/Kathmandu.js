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
    "Asia/Kathmandu": {
      "name": "Asia/Kathmandu",
      "abbr": [
        "LMT",
        "+0530",
        "+0545"
      ],
      "until": [
        -1577943676000,
        504901800000,
        null
      ],
      "offset": [
        -341.2667,
        -330,
        -345
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
