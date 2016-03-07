
angular.module('MyApp',  ['ngMaterial'])

.controller('AppCtrl', function($scope, $sce) {
      $scope.categories = [
        {id:1,name:"animales", icon:"img/categorias/animales.png", sound:"img/categorias/animales.mp3"},
        {id:2,name:"comidas", icon:"img/categorias/comidas.png", sound:"img/categorias/comidas.mp3"},
         {id:3,name:"frutas", icon:"img/categorias/frutas.png", sound:"img/categorias/frutas.mp3"},
        {id:4,name:"numeros", icon:"img/categorias/numeros.png", sound:"img/categorias/numeros.mp3"},
         {id:5,name:"objetos", icon:"img/categorias/objetos.png", sound:"img/categorias/objetos.mp3"},
        {id:6,name:"verbos", icon:"img/categorias/verbos.png", sound:"img/categorias/verbos.mp3"}
   
      ];
           
      $scope.text = [];
      $scope.playbox = document.getElementById('playbox');
      
    //write text
      $scope.toggleCategory = function(it) {
          $scope.text.push(it);
    };
    
    $scope.backspace = function() {
        $scope.text.splice($scope.text.length-1, 1);
    };
    
    $scope.endline = function() {
        alert("sin implementar");
    };
    
    $scope.new = function() {
        alert("sin implementar");
    };
    
    $scope.export = function() {
        alert("sin implementar");
    };
    
    $scope.share = function() {
        alert("sin implementar");
    };
    $scope.print = function() {
        alert("sin implementar");
    };
    
    $scope.play = function() {   
        $scope.sounds = new Array();
        angular.forEach($scope.text, function(value, key){
            $scope.sounds.push(value.sound);
        });
        $scope.i = 0;
        playNext($scope.i);
    };
    
    function playNext( index) {
        $scope.playbox.src = $scope.sounds[index];
        $scope.playbox.play(); 
        $scope.playbox.addEventListener('ended', function(){ 
                index++;
                if(index < $scope.sounds.length) playNext( index);          
        });
     } 
      
});