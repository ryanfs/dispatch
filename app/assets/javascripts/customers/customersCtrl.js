angular.module('trash')
.controller('customersCtrl', [
'$scope',
'customers',
'customer',
function($scope, customers, customer){
  $scope.customer = customer;

  resolve: {
    customer: ['$stateParams', 'customers', function($stateParams, customers){
      return customers.get($stateParams.id);
    }]
  };

  // $scope.addComment = function(){
  //   if($scope.body === '') { return; }
  //   posts.addComment(post.id, {
  //     body: $scope.body,
  //     author: 'user',
  //   }).success(function(comment) {
  //     $scope.post.comments.push(comment);
  //   });
  //   $scope.body = '';
  // };
  // $scope.incrementUpvotes = function(post) {
  //   posts.upvoteComment(post, comment);
  // };
}]);
