// mapReduce object for MongoDB, returns frequency of items
var freqMapReduce = {
  map: function() {
    var firstChar = this.lastName ? this.lastName[0] : this.name[0];
    emit(firstChar, 1);
  },
  reduce: function(k, vals) {
    return vals.reduce(function(a, b) {
      return a + b;
    });
  },
  out: {
    merge: 'mergedResults'
  }
};

module.exports = freqMapReduce;
