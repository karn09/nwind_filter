 app.config(function($stateProvider) {
    $stateProvider.state('itemType', {
        url: '/:type',
        templateUrl: '/browser/components/filter/filter-items-view.html',
        resolve: {
            itemFrequency: function(FilterFactory, $stateParams) {
             return FilterFactory.fetchFreq($stateParams.type);
            }
        },
        controller: function($scope, itemFrequency, $stateParams, $state) {
            $scope.letters = itemFrequency;
            $scope.type = $stateParams.type;
            $scope.disabled = function(val) {
                return val === 0;
            }
            $scope.go = function(type, letter, count, page) {
                $scope.count = count;
                $scope.totalPages = Math.ceil($scope.count / 10);
                $scope.idx = 1;
                $scope.letter = letter;
                $state.go('itemType.filter', {type: type, letter: letter, count: count, page: page} )
            }

        }
    })
    .state('itemType.filter', {
      url: '/:type/:letter/:count/:page',
      templateUrl: '/browser/components/filter/filter-table-view.html',
      controller: 'filterCtrl',
      resolve: {
        items: function(FilterFactory, $stateParams) {
          return { 
            names: FilterFactory.fetchByLetter( $stateParams.letter,
            $stateParams.type, $stateParams.page, 10),
            count: $stateParams.count,
            letter: $stateParams.letter
          };
        }
      }
    });
 }) ;