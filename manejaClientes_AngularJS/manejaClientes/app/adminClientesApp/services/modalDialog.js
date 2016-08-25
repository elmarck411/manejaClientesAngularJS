angular.module('gen.modalService',[])

.factory('modalService',['$uibModal', function ($uibModal){
	var servicio = {
		open: function(size,mensaje,titulo,textoAceptar){
				var modalInstance = $uibModal.open({
				  animation: true,
				  templateUrl: 'app/adminClientesApp/Widgets/modal.html',
				  controller: 'ModalInstanceCtrl',
				  size: size,
				  resolve: {
					opcionesDialogo: function () {
						return {mensaje: mensaje, titulo: titulo, textoAceptar: textoAceptar};
					}
				  }
				  
				});
				return modalInstance;
		}
    };
	return servicio;

}])
	
//Controlador del dialogo modal (modal.html)
// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.
.controller('ModalInstanceCtrl', ['$scope','$uibModalInstance','opcionesDialogo', function ($scope, $uibModalInstance,opcionesDialogo) {
	$scope.titulo = opcionesDialogo.titulo;
	$scope.mensaje = opcionesDialogo.mensaje;
	$scope.textoAceptar = opcionesDialogo.textoAceptar;
	$scope.textoCancelar = "Cancelar";

	$scope.ok = function () {
		$uibModalInstance.close();

	};

	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
}]);