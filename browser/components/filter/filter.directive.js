// app.directive('filterItems', function(FilterFactory, $state) {
//   return {
//     restrict: 'E',
//     scope: {
//       item: '='
//     },
//     link: function(scope, element, attr) {
//       scope.type = attr.item;
//       scope.disabled = function(value) {
//         return value === 0
//       };
//       scope.go = function(type, letter, value) {
//         $state.go(type + '.filter', {letter: letter, count:value, page: 1} );
//       }
//       FilterFactory.fetchFreq(attr.item)
//         .then(function(items) {
//           scope.letters = items;
//         });
//     },
//     templateUrl: '/browser/components/filter/filter.html'
//   };
// });
app.directive('filterNav', function() {
  return {
    restrict: 'E',
    templateUrl: '/browser/components/filter/filter-nav-view.html',
    controller: function($scope, $stateParams, $state) {
      // $scope.count = $stateParams.count

      $scope.direction = function(dir) {
        
        if ($scope.idx < $scope.totalPages && $scope.idx >= 1) {
          $scope.idx += dir;  
        } else {
          $scope.idx = 1;
        }
        console.log($scope.idx)
        $state.go('itemType.filter', {type: $scope.type, letter: $scope.letter, count: $scope.count, page: $scope.idx} )
      }
    }
  }
})
