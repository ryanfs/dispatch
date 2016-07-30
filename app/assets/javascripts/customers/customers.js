angular.module('trash')
.factory('customers', [
'$http',

function($http){
  var o = {
    customers: [{title:"hey",upvotes:123}]
  };
  o.getAll = function() {
    return $http.get('/customers.json').success(function(data) {
      angular.copy(data, post);
    });
  };
  o.create = function(post) {
    return $http.post('/customers.json', post).success(
        function(data) {
        o.customers.push(data);
    });
  };
  // o.upvote = function(post) {
  //   return $http.put('/customers/' + post.id + '/upvote.json'.success(function(data){
  //     post.upvotes += 1;
  //   }));
  // };
  o.get = function(id) {
    return $http.get('/customers/' + id + '.json').then(function(result){
      return result.data;
    });
  };
  // o.addComment = function(id, comment) {
  //   return $http.post('/customers/' + id + '/comments.json', comment);
  // };
  // o.upvoteComment = function(post, comment) {
  //   return $http.put('/customers/' + post.id + '/comments/' + comment.id + '/upvote.json')
  //     .success(function(data) {
  //       comment.upvotes += 1;
  //     });
  // };
  return o;
}]);
