
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
    
    $scope.play = function() {   
        $scope.sounds = new Array();
        angular.forEach($scope.text, function(value, key){
            $scope.sounds.push(value.sound);
        });
        $scope.i = 0;
        playNext($scope.i);
    };
    
    function playNext( index) {
//        $scope.i++;
//        if ($scope.i == $scope.sounds.length) return;
//        $scope.sounds[$scope.i].addEventListener('ended', playSnd);
//        $scope.sounds[$scope.i].play
        //$scope.playbox.attr('src', $scope.sounds[index]);
        $scope.playbox.src = $scope.sounds[index];
        $scope.playbox.play(); //this will play the element
        $scope.playbox.addEventListener('ended', function(){ 
                index++;
                if(index < $scope.sounds.length) playNext( index);          
        });
     } 
      
      //probar:
//      var el = $('#playerbox'); //assuming here that el is your <audio> element
//var audioSources = [song1.mp3, song2.mp3....]// here is your array of filenames
//var index = 0;
//
//function playNext(index){
//  el.attr('src', audioSources[index]);
//  el.play(); //this will play the element
//  el.on('ended', function(){ //this will bind a function to the "ended" event
//    //increment the index to target the next element
//    index++;
//    if(index < audioSources.length){
//      //plays the next song and binds the function to the ended event again until the queue is empty
//      playNext(index);          
//    }
//  }
//}
//playNext(index);
});