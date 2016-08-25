/*modulo de angular*/
var adminClientesApp = angular.module('adminClientesApp');

/*definicion de la funcion constructor del factory */
var servicioClientes = function($http){
	/*funciones del factory servicioCliente*/
	var rutaBase = 'http://localhost:58077/api/dataservice/', 
		fabrica = {}; /*variable de retorno, agregarle las funciones que expone la fabrica al exterior*/
		
	fabrica.obtenClientes = function(indicePagina, tamPagina){
		var recurso = 'customersSummary'; //servicio que expone backend para obtener lista de clientes
		/*agregar variables de pagina*/
		recurso += (arguments.length == 2) ? construyeUriParams(indicePagina,tamPagina) :'';
		return $http.get(rutaBase + recurso).then(function(response){
			var clientes = response.data;
			/***agregar aqui funcion de manejo de ordenes por cliente ***/
			
			/*regresar en formato JSON los registros y la cantidad*/
			return{
				registrosTotales : parseInt(response.headers('X-InlineCount')),
				resultados: clientes
			};
		});
	};
	
	fabrica.agregaCliente = function(nuevoElem){
		var recurso = 'postCustomer'; 
		return $http.post(rutaBase + recurso, nuevoElem).then(function (results) {
                nuevoElem.id = results.data.id;
                return results.data;
            });
	};
		
		
	/*funciones internas de la fabrica*/
		/*contruye uri agregando parametros de paginacion, indicePagina inicia en 0?*/
	function construyeUriParams(indicePagina, tamPagina){
		var uri = '?$top=' + tamPagina + '&$skip=' + (indicePagina * tamPagina);
		return uri;
	}
	return fabrica;
};
var paramsInyeccion = ['$http'];
servicioClientes.$inject = paramsInyeccion;
adminClientesApp.factory('servicioClientes',servicioClientes);