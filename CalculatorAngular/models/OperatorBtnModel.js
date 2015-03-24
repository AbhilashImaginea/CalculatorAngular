/*
 * Button Model
 * Stores items related to operator buttons
 */
myApp.factory('OperatorBtnData', function () {
    return [{
        value: 'C',
        type: 'bOperator'
    }, {
        value: '=',
        type: 'bOperator'
    }, {
        value: '+',
        type: 'bOperator'
    }, {
        value: '-',
        type: 'bOperator'
    }, {
        value: '*',
        type: 'bOperator'
    }, {
        value: '/',
        type: 'bOperator'
    }]
});