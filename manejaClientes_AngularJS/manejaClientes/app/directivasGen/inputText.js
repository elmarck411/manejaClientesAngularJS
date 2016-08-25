angular.module('gen.inputText',[])
.directive("inputText", function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            nombre: '=nombre',
            labeltext: '=labeltext',
            modelo: '=modelo',
            forma: "=forma"
        },
        templateUrl: 'app/directivasGen/WidgetsDir/inputText.html'
    };
});

/* Como utilizarla: 
	<form name="forma" class="form-horizontal" role="form" >
		<input-text nombre ="'todoAdd'" labeltext="'Nombre del Todo'" modelo="item.Todo" forma="forma"></input-text> */