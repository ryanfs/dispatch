angular.module('trash', ['ui.router','templates','Devise'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'MainCtrl'
    })
    .state('customers', {
      url: '/customers/{id}',
      templateUrl: 'customers/_index.html',
      controller: 'CustomersCtrl'
    });

    $urlRouterProvider.otherwise('home');
}]);
