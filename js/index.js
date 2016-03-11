
angular.module('MyApp',  ['ngMaterial'])

.controller('AppCtrl', function($scope, $sce) {
      $scope.cats_name = [ 
        {name:"colores", elementos:["amarillo", "azul"]},
        {name:"numeros", elementos:["cero", "uno"]}    
      ];

      //$scope.cats_name = [ "colores", "numeros"  ];
      $scope.keys = [];
      
      show_categories();
      
      $scope.text = [];
      $scope.playbox = document.getElementById('playbox');
      
    //write text
    $scope.toggleCategory = function(it) {
       if (it.type == "category"){
           show_elements(it.name);
       }else {
           //write(it);
           $scope.text.push(it);
           show_categories();
       }
   
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
     
     function show_categories(){
         $scope.keys = [];
         for (var i = 0; i < $scope.cats_name.length; i++) {
            cat = angular.fromJson($scope.cats_name[i]);

            var category = {
                "name": cat.name,
                "icon": "categorias/" + cat.name + "/" + cat.name + ".png",
                "sound": "categorias/" + cat.name + "/" + cat.name + ".mp3",
                "type": "category",
              };
            $scope.keys.push(category);
        }
    };
     function show_elements(name){
         $scope.keys = [];
         for (var i = 0; i < $scope.cats_name.length; i++) {
            cat = angular.fromJson($scope.cats_name[i]);
            if (cat.name == name){               
                for (var x = 0; x < $scope.cats_name[i].elementos.length; x++) {
                    e = angular.fromJson($scope.cats_name[i]);
                    element_name = e.elementos[x];
                    var element = {
                        "name": element_name,
                        "icon": "categorias/" + name + "/elementos/" + element_name + ".png",
                        "sound": "categorias/" + name + "/elementos/" + element_name + ".mp3",
                        "type": "element",
                      };
                    $scope.keys.push(element);
                }
                
            }
        }
    }
         
//        for (var i = 0; i < $scope.cats_name.length; i++) {
//            cat = $scope.cats_name[i];
//
//            var category = {
//                "name": cat,
//                "icon": "categorias/" + cat + "/" + cat + ".png",
//                "sound": "categorias/" + cat + "/" + cat + ".mp3",
//              };
//            $scope.keys.push(category);
//        }
        
     //}
});


