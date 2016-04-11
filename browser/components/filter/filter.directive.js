app.directive('filterItems', function(FilterFactory, $state) {
  return {
    restrict: 'E',
    scope: {
      item: '='
    },
    link: function(scope, element, attr) {
      scope.type = attr.item;
      scope.disabled = function(value) {
        return value === 0
      };
      scope.go = function(type, letter, value) {
        $state.go(type + '.filter', {letter: letter, count:value} );
      }
      FilterFactory.fetchFreq(attr.item)
        .then(function(items) {
          scope.letters = items;
        });
    },
    templateUrl: '/browser/components/filter/filter.html'
  };
});
