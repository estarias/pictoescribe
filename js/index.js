
angular.module('MyApp',  ['ngMaterial'])

.controller('AppCtrl', function($scope, $sce) {
      $scope.cats_name = [ "colores", "numeros" ];
      $scope.categories = [];

      make_categoies();
      
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

     function make_categoies(){
        for (var i = 0; i < $scope.cats_name.length; i++) {
            cat = $scope.cats_name[i];

            var category = {
                "name": cat,
                "icon": "categorias/" + cat + "/" + cat + ".png",
                "sound": "categorias/" + cat + "/" + cat + ".mp3",
              };
            $scope.categories.push(category);
        }
        
     }
     
});

