angular.module('todoApp')
.directive("inputDate", function () {
    return {
        restrict: 'E',
        scope: {
            nombre: '=nombre',
            labeltext: '=labeltext',
            modelo: '=modelo',
            forma: "=forma"
        },
        templateUrl: '/Scripts/Widgets/inputDate.html'
    };
});

