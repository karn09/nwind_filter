app.config(function($stateProvider) {
  $stateProvider.state('employees', {
      url: '/employees',
      templateUrl: '/browser/app/employees/employees.html',
      resolve: {
        employeeFrequency: function(FilterFactory) {
          return FilterFactory.fetchFreq('employees');
        }
      },
      controller: function($scope, employeeFrequency) {
        $scope.letters = employeeFrequency;
      }
    })
    .state('employees.filter', {
      url: '/:letter/:count',
      templateUrl: '/browser/components/filter/filteredview.html',
      controller: 'filterCtrl',
      resolve: {
        items: function(FilterFactory, $stateParams) {
          return FilterFactory.fetchByLetter(
            $stateParams.letter,
            'employees',
            1,
            10
          );
        }
      }
    });

});
