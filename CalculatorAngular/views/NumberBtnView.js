/*
 * Number Button View
 * Presents the model and provides the UI events such as click from user
 * Button controller is attached to these events to handle the user interaction
 */
myApp.directive("numberBtn", function () {
    return {
        restrict: "E",
        scope: {
            type: "@",
            value: "@"
        },
        template: '<button class="{{type}}">{{value}}</button>',
        link: function (scope, element) {
            element.bind("click", function(event) {
                scope.onNumberClick(event.target.textContent);
            });
        },
        controller: "NumberBtnsController"
    }
});