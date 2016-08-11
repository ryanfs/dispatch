angular.module('trash')
.controller('homeCtrl', [
'$scope',
'$uibModal',
'$sce',
function($scope, $uibModal, $sce){

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
        lists: {"One": [], "Two": [], "Three": [], "Four": [], "Five": [], "Six": [], "test": []},
        unassigned: {"One": []}
    };

    $scope.dynamicPopover = {
      content: 'Hello, World!',
      templateUrl: 'ticketPopoverTemplate.html'
    };


    // Generate initial model
    for (var i = 1; i <= 3; ++i) {
        $scope.models.lists.One.push({label: "Location A" + i, id: "Service " + i});
        $scope.models.lists.Two.push({label: "Location B" + i, id: "Service " + i + 3});
        $scope.models.lists.Three.push({label: "Location C" + i, id: "Service " + i + 6});
        $scope.models.lists.Four.push({label: "Location D" + i, id: "Service " + i + 9});
        $scope.models.lists.Five.push({label: "Location D" + i, id: "Service " + i + 12});
        $scope.models.lists.Six.push({label: "Location E" + i, id: "Service " + i + 15});
        $scope.models.unassigned.One.push({label: "Location F" + i, id: "Service " + i + 18});
    }

    $scope.newTicket = function () {
      var ticket = {label: "Location ?", id: 20};
      $scope.models.unassigned.One.push(ticket);
    };

    $scope.newList = function () {
      var list = {"Seven": []};
      for (var key in list) {
        $scope.models.lists[String(key)] = [];
      }
    }

    // Model to JSON for demo purpose
    $scope.$watch('models', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

}])
.directive('ticketPreview', function() {
  var htmlTemplate = '<script type="text/ng-template" id="ticketPopoverTemplate.html"><div>Truck {{item.id}}</div><div class="form-group">Custmer X<br /><strong>142 Oak Street</strong> <br />{{item.id}}</div></script>';
  var markup = '<ul dnd-list="list"><li ng-repeat="item in list" dnd-draggable="item" dnd-moved="list.splice($index, 1)" dnd-effect-allowed="move" dnd-selected="models.selected = item" ng-class="{\'selected\': models.selected === item}" class="move"';
  var content = '<strong>{{item.label}}</strong><br/> {{item.id}}</li> </ul>' ;
  var popup = 'uib-popover="{{item.id}} and more stuff" popover-title="{{item.label}}" popover-trigger="\'mouseenter\'" > ';
  var popup2 = 'uib-popover-template="dynamicPopover.templateUrl" popover-title="{{item.label}}" popover-trigger="\'mouseenter\'" > '

  return {
    template: htmlTemplate + markup + popup2 + content
  };
});
