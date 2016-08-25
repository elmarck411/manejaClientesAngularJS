/*modulo de angular*/
var adminClientesApp = angular.module('adminClientesApp');

/*definicion de la funcion constructor de la fabrica */
var servicioClientes = function($resource){
	/*funciones de la fabrica servicioCliente*/
	/* 'http://localhost:58077/api/dataservice/' backend Dan Wahlin, customerManager, agrega directorio dataservice al servicio */ 
	/*'http://localhost:53985/Api/', backend con sql server, conflicto con insert, adminClientes, resuelto*/
	/*'http://localhost:62208/Api/', backend manejaCLientes, ok version basica de ENtity Framework, WEBAPI2 */
	
	var rutaBase = 'http://localhost:62208/Api/', 
		fabrica = {}; /*variable de retorno, agregarle las funciones que expone la fabrica al exterior*/
	
	/*obtener la lista de clientes del servidor*/	
	fabrica.obtenClientes = function(){
		var recurso = 'clientes'; 
		var resourceParams = (arguments.length == 2) ? {  $top: tamPagina, $skip: (indicePagina * tamPagina)} : {};
		return $resource(rutaBase + recurso).query(resourceParams);
	};
	
	/*id = 0 para agregar nuevo elemento*/
	fabrica.agregaCliente = function(nuevoElem){
		var recurso = 'clientes'; 
		return $resource(rutaBase + recurso,{},{save: { method:'POST' }}).save(nuevoElem);
	};
	
	/*funcion para obtener un cliente del servidor*/
	fabrica.obtenCliente = function(idcliente){
		var recurso = 'clientes/5';
		return $resource(rutaBase + recurso).get({ id: idcliente });
	};
	
	/*funcion para modificar los datos de un cliente*/
	fabrica.modificaCliente = function(idcliente, objetoCliente){
		var recurso = 'clientes/5';
		return $resource(rutaBase + recurso,{},{ update: { method: 'PUT' } } ).update({id: idcliente},objetoCliente );
	};
	
	/*funcion para eliminar un cliente*/
	fabrica.eliminaCliente = function(idcliente){
		var recurso = 'clientes/5';
		return $resource(rutaBase + recurso).delete({ id: idcliente });
		
	};
	
	/*Funciones internas de la fabrica*/
		/*contruye uri agregando parametros de paginacion, indicePagina inicia en 0?*/
	function construyeUriParams(indicePagina, tamPagina){
		var uri = '?$top=' + tamPagina + '&$skip=' + (indicePagina * tamPagina);
		return uri;
	}
	return fabrica;
};
var paramsInyeccion = ['$resource'];
servicioClientes.$inject = paramsInyeccion;
adminClientesApp.factory('servicioClientes',servicioClientes);