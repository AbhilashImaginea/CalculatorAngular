/*
 * Operator Button Controller:
 * Responds to user inputs and invokes changes on the model and passes the notification to the PCB controller
 */
myApp.controller("OperatorBtnsController", ['$scope', 'OperatorBtnData', '$rootScope',
                                          function ($scope, OperatorBtnData, $rootScope) {
        $scope.OperatorBtnData = OperatorBtnData;
        $scope.onOperatorClick = function (value) {
            $rootScope.$broadcast('operatorClicked', value)
        };
}]);