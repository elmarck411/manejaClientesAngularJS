angular.module('adminClientesApp')
.controller('barraNavCtrl',['$scope','$location',function($scope,$location)
{
	$scope.seleccionado = function(rutaSeccion){
			return $location.path().substr(0, rutaSeccion.length) === rutaSeccion;
	};
}]);
