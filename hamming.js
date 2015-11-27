(function(root) {
  'use strict';

  function hamming(s1, s2) {
    if (typeof s1 === 'number' && !isNaN(s1)) {
      s1 = s1.toString();
    }
    if (typeof s2 === 'number' && !isNaN(s2)) {
      s2 = s2.toString();
    }
    if (!((typeof s1 === 'string' && typeof s2 === 'string') &&
        (s1.length === s2.length))) {
      return null;
    }

    var i = s1.length;
    var sum = 0;

    while (i--) {
      if (s1[i] !== s2[i]) {
        sum++;
      }
    }

    return sum;
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = hamming;
    }
    exports.hamming = hamming;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return hamming;
    });
  } else {
    root.hamming = hamming;
  }

})(this);
