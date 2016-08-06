angular.module('trash')
.controller('homeCtrl', [
'$scope',
function($scope){


    $scope.models = {
        selected: null,
        lists: {"One": [], "Two": []}
    };


    // Generate initial model
    for (var i = 1; i <= 3; ++i) {
        $scope.models.lists.One.push({label: "Location A" + i, id: i});
        $scope.models.lists.Two.push({label: "Location B" + i, id: i + 3});
    }

    $scope.newTicket = {
      label: "Location ?",
      id: 2,
    };

    // Model to JSON for demo purpose
    $scope.$watch('models', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

}]);
