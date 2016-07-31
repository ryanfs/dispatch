angular.module('trash')
.controller('customersCtrl', [
'$scope',
'customers',
function($scope, customers){

  resolve: {
    customer: ['$stateParams', 'customers', function($stateParams, customers){
      return customers.get($stateParams.id);
    }]
  };

  customers.getAll();
  $scope.customers = customers.customers;

  $scope.addCustomer = function(){
    if(!$scope.title || $scope.title === ''){ return; }
    customers.create({
      title: $scope.title,
      contact_person: $scope.contact_person,
      notes: $scope.notes
    });

    $scope.title = '';
    $scope.contact_person = '';
    $scope.notes = '';
  };
}]);
