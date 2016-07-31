angular.module('trash')
.factory('customers', [
'$http',

function($http){
  var o = {
    customers: [{}]
};

  o.getAll = function() {
    return $http.get('/customers.json').success(function(data) {
      angular.copy(data, o.customers);
    });
  };
  o.create = function(customer) {
    return $http.post('/customers.json', customer).success(
        function(data) {
          console.log(data);
        o.customers.push(data);
    });
  };
  o.get = function(id) {
    return $http.get('/customers/' + id + '.json').then(function(result){
      return result.data;
    });
  };
  // o.addComment = function(id, comment) {
  //   return $http.post('/customers/' + id + '/comments.json', comment);
  // };
  return o;
}]);
