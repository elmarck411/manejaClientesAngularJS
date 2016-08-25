angular.module('gen.inputEmail',[])
.directive("inputEmail", function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            nombre: '=nombre',
            labeltext: '=labeltext',
            modelo: '=modelo',
            forma: "=forma"
        },
        templateUrl: 'app/directivasGen/WidgetsDir/inputEmail.html'
    };
});

/* Como utilizarla: 
	<form name="forma" class="form-horizontal" role="form" >
<input-email nombre ="'emailAdd'" labeltext="'E-mail '" modelo="cliente.email" forma="forma"></input-email> */