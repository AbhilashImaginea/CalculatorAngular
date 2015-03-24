/*
 * PCB Controller
 * PCB Controller responds to user actions from button controller and passes changes based on computations to Display controller.
 */
myApp.controller("PCBController", ['$scope', '$rootScope', function ($scope, $rootScope) {
    var _this = this;
    this.iFirstValue = 0;
    this.isFirstValueFinal = false;
    this.iSecondValue = 0;
    this.isPreviousTotal = false;
    this.oCurrentOperator = '';
    this.isValueCalculated = false;
    this.iCurrentNumber = '';
    this.sCurrentInput = '';
    $scope.$on('numberClicked', function (event, value) {
        _this.onNumberClick(value);
    });
    $scope.$on('operatorClicked', function (event, value) {
        _this.onOperatorClick(value);
    });
    //This function handles the number input
    this.onNumberClick = function (oClickedValue) {
        if (this.isValueCalculated === true) {
            if (this.oCurrentOperator !== '') {
                this.iFirstValue = this.iCurrentNumber;
                this.isFirstValueFinal = true;
                this.isValueCalculated = false;
                this.iCurrentNumber = oClickedValue;
                this.iSecondValue = oClickedValue;
            } else {
                this.clear();
                this.iCurrentNumber = oClickedValue;
                this.isValueCalculated = false;
            }
        } else if (this.oCurrentOperator !== '' && !this.isFirstValueFinal) {
            this.iFirstValue = this.iCurrentNumber;
            this.isFirstValueFinal = true;
            this.iSecondValue = oClickedValue;
            this.iCurrentNumber = oClickedValue;
        } else if (this.oCurrentOperator !== '' && this.isFirstValueFinal) {
            this.iSecondValue = this.iCurrentNumber + oClickedValue;
            this.iCurrentNumber = this.iSecondValue;
        } else {
            this.iCurrentNumber += oClickedValue;
        }
        this.callDisplay();

    }

    //This function handles the operator input
    this.onOperatorClick = function (oClickedValue) {
        switch (oClickedValue) {
        case "/":
        case "+":
        case "*":
        case "-":
            if (this.iCurrentNumber === '') {
                this.oCurrentOperator = '';
            } else if (this.oCurrentOperator !== '' && this.iSecondValue !== 0) {
                this.onEqualtoClick();
                this.oCurrentOperator = oClickedValue;
            } else {
                this.oCurrentOperator = oClickedValue;
            }
            break;
        case "=":
            this.onEqualtoClick();
            break;
        case "C":
            this.clear();
            break;
        }
        this.callDisplay();
    }

    //Calculate the input on click of equal to button
    this.onEqualtoClick = function () {
        if (!isNaN(parseInt(this.iFirstValue, 0)) && parseInt(this.iSecondValue, 0) !== 0) {
            switch (this.oCurrentOperator) {
            case "/":
                this.iFinalValue = parseInt(this.iFirstValue, 0) / parseInt(this.iSecondValue, 0);
                break;
            case "+":
                this.iFinalValue = parseInt(this.iFirstValue, 0) + parseInt(this.iSecondValue, 0);
                break;
            case "*":
                this.iFinalValue = parseInt(this.iFirstValue, 0) * parseInt(this.iSecondValue, 0);
                break;
            case "-":
                this.iFinalValue = parseInt(this.iFirstValue, 0) - parseInt(this.iSecondValue, 0);
                break;
            }

            this.iCurrentNumber = parseInt(this.iFinalValue, 0);
            this.isValueCalculated = true;
            this.oCurrentOperator = '';
            this.iSecondValue = 0;
        }
    }

    //Format the current input values and call the drawDisplay function of DisplayViw
    this.callDisplay = function () {
        var sCurrentInput, oValues;
        if (this.iFirstValue !== 0) {
            if (this.isValueCalculated === true) {
                sCurrentInput = this.iCurrentNumber;
            } else {
                sCurrentInput = this.iFirstValue;
            }
        } else {
            sCurrentInput = this.iCurrentNumber;
        }
        if (this.oCurrentOperator !== '' && this.isValueCalculated === false) {
            sCurrentInput += this.oCurrentOperator;
            if (this.iSecondValue !== 0) {
                sCurrentInput += this.iSecondValue;
            }
        } else if (this.oCurrentOperator !== '') {
            sCurrentInput += this.oCurrentOperator;
        }

        oValues = {
            value: this.iCurrentNumber,
            input: sCurrentInput
        }
        $rootScope.$broadcast('callDisplay', oValues)
    }

    //Reset the model to default values on click of clear button
    this.clear = function () {
        this.iFirstValue = 0;
        this.isFirstValueFinal = false;
        this.iSecondValue = 0;
        this.isPreviousTotal = false;
        this.oCurrentOperator = '';
        this.isValueCalculated = false;
        this.iCurrentNumber = '';
        this.sCurrentInput = '';
    }
}]);