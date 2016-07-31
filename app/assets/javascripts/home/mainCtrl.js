angular.module('trash')
.controller('MainCtrl', [
'$scope',
'customers',
function($scope, customers){

  resolve: {
    customersPromise: ['customers', function(customers){
      return customers.getAll();
    }]
  };

  $scope.customers = customers.customers;

  // $scope.addPost = function(){
  //   if(!$scope.title || $scope.title === ''){ return; }
  //   posts.create({
  //     title: $scope.title,
  //     link: $scope.link,
  //   });
  //   $scope.title = '';
  //   $scope.link = '';
  // };

  // $scope.incrementUpvotes = function(post){
  //   post.upvotes += 1;
  // };

}]);
