
angular.module('MyApp',  ['ngMaterial', 'ngAudio'])

.controller('AppCtrl', function($scope, $sce, ngAudio) {
      $scope.categories = [
        {id:1,name:"animales", icon:"img/categorias/animales.png", sound:"img/categorias/animales.mp3"},
        {id:2,name:"comidas", icon:"img/categorias/comidas.png", sound:"img/categorias/comidas.mp3"},
         {id:3,name:"frutas", icon:"img/categorias/frutas.png", sound:"img/categorias/frutas.mp3"},
        {id:4,name:"numeros", icon:"img/categorias/numeros.png", sound:"img/categorias/numeros.mp3"},
         {id:5,name:"objetos", icon:"img/categorias/objetos.png", sound:"img/categorias/objetos.mp3"},
        {id:6,name:"verbos", icon:"img/categorias/verbos.png", sound:"img/categorias/verbos.mp3"}
   
      ];
           
      $scope.text = [];
      
      //write text
      $scope.toggleCategory = function(it) {
          $scope.text.push(it);
    };
    
    $scope.backspace = function() {
        $scope.text.splice($scope.text.length-1, 1);
    };
    
    $scope.play = function() {        
        angular.forEach($scope.text, function(value, key){
            sound = ngAudio.load(value.sound);
            sound.play();
        });
    };
    
      
});