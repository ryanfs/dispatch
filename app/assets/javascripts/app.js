angular.module('trash', ['ui.router','templates'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'homeCtrl'
    })
    .state('customers', {
      url: '/customers',
      templateUrl: 'customers/_customers.html',
      controller: 'customersCtrl'
    });

    $urlRouterProvider.otherwise('home');
}]);
