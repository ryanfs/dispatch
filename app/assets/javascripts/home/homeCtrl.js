angular.module('trash')
.controller('homeCtrl', [
'$scope',
'$uibModal',
function($scope, $uibModal){

  $scope.open = function (size) {

    var modalInstance = $uibModal.open({
      animation: false,
      templateUrl: 'tickets/new-ticket-modal.html',
      controller: 'newTicketCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });
  }

    $scope.models = {
        selected: null,
        lists: {"One": [], "Two": [], "Three": [], "Four": [], "Five": [], "Six": [],},
        unassigned: {"One": []}
    };


    // Generate initial model
    for (var i = 1; i <= 3; ++i) {
        $scope.models.lists.One.push({label: "Location A" + i, id: i});
        $scope.models.lists.Two.push({label: "Location B" + i, id: i + 3});
        $scope.models.lists.Three.push({label: "Location C" + i, id: i + 6});
        $scope.models.lists.Four.push({label: "Location D" + i, id: i + 9});
        $scope.models.lists.Five.push({label: "Location D" + i, id: i + 12});
        $scope.models.lists.Six.push({label: "Location E" + i, id: i + 15});
        $scope.models.unassigned.One.push({label: "Location F" + i, id: i + 18});
    }

    $scope.newTicket = function () {
      var ticket = {label: "Location ?", id: 20};
      $scope.models.unassigned.One.push(ticket);
    };

    // Model to JSON for demo purpose
    $scope.$watch('models', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

}]);
