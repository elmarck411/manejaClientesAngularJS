angular.module('adminClientesApp')
.controller('clientesCtrl',['$scope', '$location', 'servicioDatos','modalService', function($scope, $location, servicioDatos,modalService){
	/*enumerador modos despliegue, mosaico o lista*/
	$scope.enumModoDespliegue = {
            Mosaico: 0,
            Lista: 1
        };
		
	$scope.modoDespliegue = $scope.enumModoDespliegue.Mosaico;
	
	/*$resource expone la funcionalidad then mediante el objeto $promise*/
	servicioDatos.obtenClientes().$promise.then(
	function(data){
		$scope.clientes = data;
		}
	);
	
	$scope.cambiaModoDespliegue = function(modoDespliegue){
		$scope.modoDespliegue = modoDespliegue;
	};
	$scope.modificaCliente = function (id) {
		$location.path('/actualizaCliente/' + id);
		
	};
	$scope.eliminarConf =  function (idcliente) {
		modalService.open('md', "Estas seguro que desea eliminar el cliente?", "Eliminar cliente", "Eliminar").result.then(function(){
			servicioDatos.eliminaCliente(idcliente).$promise.then( function(){
					$("#cliente_" + idcliente).fadeOut();
				}
			);
		});
	};
}]);
