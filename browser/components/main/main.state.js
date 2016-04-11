app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: '/browser/components/main/main.html'
  });
  // $stateProvider.state('filterView', {
  //   url: '/:type/:letter',
  //   templateUrl: '/browser/components/filter/filteredview.html',
  //   resolve: {
  //     employees: function(FilterFactory) {
  //       console.log(this);
  //     }
  //   }
  // });
  $urlRouterProvider.when('', '/');
});
