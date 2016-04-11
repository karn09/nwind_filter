app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: '/browser/components/main/main.html'
  });
  $urlRouterProvider.when('', '/');
});
