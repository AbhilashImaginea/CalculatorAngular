/*
 * Display View
 * Presents the display model. Based on user input, draws or resets the view
 */
myApp.directive("displayScreen", function () {
    return {
        restrict: "E",
        scope: {
            input: "=",
            result: "="
        },
        template: '<div class="display">{{input}}</div><div class="input">{{result}}</div>',
        controller: "DisplayController"
    }
});