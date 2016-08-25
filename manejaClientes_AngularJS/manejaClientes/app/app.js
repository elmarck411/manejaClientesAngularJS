'use strict';

/**
 * @ngdoc overview
 * @name bsApp
 * @description
 * # mytodoApp
 *
 * Modulo de configuracion de la aplicacion
 *
 */ 
angular
  .module('adminClientesApp', [
    'ngRoute',
	'ngResource',
	'ui.bootstrap',
	'itemMenu.dir',
	'gen.inputText',
	'gen.inputNum',
	'gen.inputEmail',
	'gen.valSelect',
	'gen.radioGenero',
	'gen.modalService'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/clientes', {
        templateUrl: 'app/adminClientesApp/views/clientes.html',
        controller: 'clientesCtrl'
      })
	  .when('/agregarCliente', {
	      templateUrl: 'app/adminClientesApp/views/clientes/agregarCliente.html',
        controller: 'agregarClienteCtrl'
      })
	  .when('/actualizaCliente/:idcliente', {
	      templateUrl: 'app/adminClientesApp/views/clientes/agregarCliente.html',
        controller: 'modificarClienteCtrl'
      })
	  
	  .when('/pedidos', {
	      templateUrl: 'app/adminClientesApp/views/pedidos.html',
        controller: 'pedidosCtrl'
      })
	  .when('/acerca', {
	      templateUrl: 'app/adminClientesApp/views/acerca.html',
        controller: 'acercaCtrl'
      })
	  .when('/login', {
	      templateUrl: 'app/adminClientesApp/views/login.html',
        controller: 'loginCtrl'
      })
      .otherwise({
        redirectTo: '/clientes'
      });
  });
