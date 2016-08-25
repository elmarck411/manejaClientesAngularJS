angular.module('gen.valRadio',[])
.directive("valRadio", function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            nombre: '=nombre',
            labeltext: '=labeltext',
            modelo: '=modelo',
            forma: "=forma",
			opciones:"=opciones"
        },
        templateUrl: 'app/directivasGen/WidgetsDir/valRadio.html'
    };
});

/* Como utilizarla: 
	<form name="forma" class="form-horizontal" role="form" >
		<select>*/