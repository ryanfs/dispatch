angular.module('trash', ['ui.router','templates'])
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
      url: '/customers',
      templateUrl: 'customers/_customers.html',
      controller: 'customersCtrl'
    });

    $urlRouterProvider.otherwise('home');
}]);
