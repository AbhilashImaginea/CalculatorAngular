/*
 * The Display Controller
 * Responds to changes from PCB controller and invokes changes on the Display model.
 */
myApp.controller("DisplayController", ['$scope', 'Display', function ($scope, Display) {
    var _this = this;
    $scope.Display = Display;
    $scope.$on('callDisplay', function (event, oValues) {
        _this.setDisplay(oValues);
    });
    this.setDisplay = function (oValues) {
        $scope.$apply(function () {
            $scope.Display[0].inputText = oValues.input;
            $scope.Display[0].resultText = oValues.value;
        })
    };
}]);