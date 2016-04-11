app.directive('filterItems', function(FilterFactory) {
  return {
    restrict: 'E',
    scope: {
      item: '='
    },
    link: function(scope, element, attr) {
      scope.item = attr.item;
      FilterFactory.fetchFreq(attr.item)
        .then(function(items) {
          scope.letters = items;
        });
    },
    templateUrl: '/browser/components/filter/filter.html'
  };
});
