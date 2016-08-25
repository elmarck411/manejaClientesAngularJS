angular.module('adminClientesApp')
.controller('modificarClienteCtrl',['$scope','$http','$location', '$routeParams', '$filter','servicioDatos', function($scope,$http,$location,$routeParams,$filter,servicioDatos){
	$scope.accionCliente = "Modificar ";
	
	servicioDatos.obtenCliente($routeParams.idcliente).$promise.then(
		function(data){
			$scope.cliente = data;
		}
	)
	
	$http.get('app/recursos/estadosMexico.json').success(function(data) {
      $scope.estadosMx = data;
	});
	
	$scope.guardar = function(){
		$scope.cliente.estado = parseInt($scope.cliente.estado1.clave);
		servicioDatos.modificaCliente($routeParams.idcliente, $scope.cliente).$promise.then(
			function(data){
				alert("Cliente modificado correctamente");
				$location.path('/clientes');
		});
	};
}]);
 