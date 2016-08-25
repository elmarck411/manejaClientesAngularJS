/*modulo de angular*/
var adminClientesApp = angular.module('adminClientesApp');

/*definicion de la funcion constructor del factory */
var servicioDatos = function (servicioClientes) {
	return  servicioClientes;
};

/*definicion de dependencias*/
var injectParams = ['servicioClientes'];

/*inyeccion de dependencias*/
servicioDatos.$inject = injectParams;

/*agregar el factory al modulo*/
adminClientesApp.factory('servicioDatos',servicioDatos);


	

    