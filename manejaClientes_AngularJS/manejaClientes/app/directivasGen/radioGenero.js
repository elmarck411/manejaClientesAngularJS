angular.module('gen.radioGenero',[])
.directive("radioGenero", function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/directivasGen/WidgetsDir/radioGenero.html'
    };
});
