angular.module('gen.inputNum',[])
.directive("inputNum", function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            nombre: '=nombre',
            labeltext: '=labeltext',
            modelo: '=modelo',
            forma: "=forma"
        },
        templateUrl: 'app/directivasGen/WidgetsDir/inputNum.html'
    };
});