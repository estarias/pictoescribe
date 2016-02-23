
angular.module('MyApp',  ['ngMaterial'])

.controller('AppCtrl', function($scope, $sce) {
      $scope.categories = [
        {id:1,name:"animales", icon:"img/categorias/animales.png"},
        {id:2,name:"comida", icon:"img/categorias/comida.png"},
         {id:3,name:"frutas", icon:"img/categorias/frutas.png"},
        {id:4,name:"numeros", icon:"img/categorias/numeros.png"},
         {id:5,name:"objetos", icon:"img/categorias/objetos.png"},
        {id:6,name:"verbos", icon:"img/categorias/verbos.png"}
   
      ];
           
      $scope.text = [];
      
      //write text
      $scope.toggleCategory = function(it) {
          $scope.text.push(it);
    };
    
    //backspace
    $scope.backspace = function() {
        $scope.text.splice($scope.text.length-1, 1);
    };
    
    
      
});