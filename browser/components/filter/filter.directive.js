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
