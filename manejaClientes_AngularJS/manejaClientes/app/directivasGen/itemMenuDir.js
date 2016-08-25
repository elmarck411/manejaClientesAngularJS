'use strict';

/**
 * @ngdoc overview
 * @name itemMenuDir
 * @description
 * # directiva generica para items en un menu con estilo bootstrap
 */ 
angular.module('itemMenu.dir', [
    'ngRoute',
	'ui.bootstrap'
  ])
  .directive('itemMenu', function(){
	   return {
        restrict: 'E',
        scope: {
			texto: "@texto",
			url: "@url"
		},
        templateUrl: 'app/directivasGen/WidgetsDir/itemMenu.html'
    };
});