app.controller('filterCtrl', function($scope, items) {
  items.names.then(function(names){
      $scope.items = names;
  })
  $scope.disabled = function(val) {
    return val === 0;
  }
});
