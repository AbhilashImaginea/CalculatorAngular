/*
 * Number Button Controller:
 * Responds to user inputs and invokes changes on the model and passes the notification to the PCB controller
 */
myApp.controller("NumberBtnsController", ['$scope', 'NumberBtnData', '$rootScope',
                                          function ($scope, NumberBtnData, $rootScope) {
        $scope.NumberBtnData = NumberBtnData;
        $scope.onNumberClick = function (value) {
            $rootScope.$broadcast('numberClicked', value)
        };
}]);