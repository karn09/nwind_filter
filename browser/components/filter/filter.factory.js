app.factory('FilterFactory', function($http, $q) {
  var _cachedFreq = {};

  return {
    fetchFreq: function(type) {
      if (_cachedFreq[type]) {
        return $q.when(_cachedFreq[type]);
      } else {
        return $http.get('/api/' + type)
          .then(function(results) {
            _cachedFreq[type] = [];
            angular.copy(results.data, _cachedFreq[type]);//why the copy?
            return _cachedFreq[type];
          });
      }
    },
    fetchByLetter: function(letter, type, page, size) {
      //pass in a second object with your params.. this way you don't have to concatenate a url
      return $http.get('/api/' + type + '/' + letter + '?size=' + size + '&page=' + page)
        .then(function(results) {
          return results.data;
        });
    }
  };
});
