angular.module('gen.valSelect',[])
.directive("valSelect", function () {
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
        templateUrl: 'app/directivasGen/WidgetsDir/valSelect.html'
    };
});

/* Como utilizarla: 
	<form name="forma" class="form-horizontal" role="form" >
		<select>*/