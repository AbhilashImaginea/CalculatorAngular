/*
 * Operator Button View
 * Presents the model and provides the UI events such as click from user
 * Button controller is attached to these events to handle the user interaction
 */
myApp.directive("operatorBtn", function () {
    return {
        restrict: "E",
        scope: {
            type: "@",
            value: "@"
        },
        template: '<button class="{{type}}">{{value}}</button>',
        link: function (scope, element) {
            element.bind("click", function(event) {
                scope.onOperatorClick(event.target.textContent);
            });
        },
        controller: "OperatorBtnsController"
    }
});