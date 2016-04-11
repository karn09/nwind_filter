// mapReduce object for MongoDB, returns frequency of items
var freqMapReduce = {
  scope: {
    alphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
      'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ]
  },
  map: function() {
    var firstChar = this.lastName ? this.lastName[0] : this.name[0];
    // HACK: this is very bad.
    for (var i = 0; i < alphabet.length; i++) {
      if (firstChar === alphabet[i]) {
        emit(alphabet[i], 1);
      } else {
        emit(alphabet[i], 0);
      }
    }
  },
  reduce: function(k, count) {
    return Array.sum(count);
  },
  out: {
    replace: 'replacedResults'
  }
};

module.exports = freqMapReduce;
