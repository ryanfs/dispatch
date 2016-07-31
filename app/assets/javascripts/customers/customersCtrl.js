angular.module('trash')
.controller('customersCtrl', [
'$scope',
'customers',
function($scope, customers){

  // resolve: {
  //   customer: ['$stateParams', 'customers', function($stateParams, customers){
  //     return customers.get($stateParams.id);
  //   }]
  // };

  $scope.sortType = 'title';
  $scope.sortReverse = false;
  $scope.search = '';

  customers.getAll();
  $scope.customers = customers.customers;

  $scope.addCustomer = function(){
    if(!$scope.title || $scope.title === ''){ return; }
    customers.create({
      title: $scope.title,
      company: $scope.company,
      contact_person: $scope.contact_person,
      notes: $scope.notes,
      line1: $scope.line1,
      line2: $scope.line2,
      city: $scope.city,
      state: $scope.state,
      zip: $scope.zip
    });

    $scope.title = '';
    $scope.company = '';
    $scope.contact_person = '';
    $scope.notes = '';
    $scope.line1 = '';
    $scope.line2 = '';
    $scope.city = '';
    $scope.state = '';
    $scope.zip = '';
  };
}]);
