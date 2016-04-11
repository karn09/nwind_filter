app.config(function($stateProvider) {
  $stateProvider.state('products', {
      url: '/products',
      templateUrl: '/browser/app/products/products.html',
      resolve: {
        productFrequency: function(FilterFactory) {
          return FilterFactory.fetchFreq('products');
        }
      },
      controller: function($scope, productFrequency) {
        $scope.letters = productFrequency;
      }
    })
    .state('products.filter', {
      url: '/:letter/:count',
      templateUrl: '/browser/components/filter/filteredview.html',
      controller: 'filterCtrl',
      resolve: {
        items: function(FilterFactory, $stateParams) {
          return FilterFactory.fetchByLetter(
            $stateParams.letter,
            'products',
            1,
            10
          );
        }
      }
    });
});
