angular.module('trash')
.factory('customers', [
'$http',

function($http){
  var o = {
    customers: [{'title': 'company 1 - TRASH', 'company' : 'company one', 'contact_person' : 'Noah', 'line1' : '123 havemeyer street', 'city' : 'brooklyn', 'state' : 'NY', 'zip' : '11211', 'notes' : 'usually late...'}, {'title': 'roselle - TRASH', 'company' : 'company two', 'contact_person' : 'Noah', 'line1' : '20 scudders lane', 'city' : 'brooklyn', 'state' : 'NY', 'zip' : '11211', 'notes' : 'usually late...'}, {'title': 'company 4 - TRASH', 'company' : 'suburban', 'contact_person' : 'Noah', 'line1' : '456 sany point street', 'city' : 'brooklyn', 'state' : 'NY', 'zip' : '11211', 'notes' : 'usually late...'}, {'title': 'company 5 - TRASH', 'company' : 'company one', 'contact_person' : 'Noah', 'line1' : '123 havemeyer street', 'city' : 'brooklyn', 'state' : 'NY', 'zip' : '11211', 'notes' : 'usually late...'}]
};

  o.getAll = function() {
    return $http.get('/customers.json').success(function(data) {
      angular.copy(data.customers, o.customers);
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
