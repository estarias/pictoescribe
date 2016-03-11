
angular.module('MyApp',  ['ngMaterial'])

.controller('AppCtrl', function($scope, $sce) {
    $scope.cats_name = [ 
      {name:"abecedario", color:"red", elementos:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]},
      {name:"colores", color:"yellow", elementos:["amarillo", "azul", "blanco", "dorado", "gris", "marron", "naranja", "negro", "rojo", "rosa", "verde","verde_claro", "violeta"]}  ,
      {name:"numeros",color:"blue",  elementos:["cero", "numero (1)", "numero (2)", "numero (3)", "numero (4)", "numero (5)", "numero (6)", "numero (7)", "numero (8)", "numero (9)"]},    
      {name:"personas",color:"green",  elementos:["yo", "yo_1", "yo_2", "yo_3", "tu", "ellos", "ellos_1", "ellos_2", "ellas", "ellas_1", "nosotros", "nosotras"]},
      {name:"sociales",color:"red",  elementos:["¡es_gracioso!", "¡estoy_bien!", "¡felicidades!", "¡genial!", "¡lo_siento!", "¿cual_es_tu_email-", "¿cual_es_tu_nombre-", "¿cuantos_dias-", "¿puedo_ayudarte-", "¿que_dices-", "¿que_tal-"]}
    ];

    $scope.keys = [];
    $scope.text = [];

    show_categories();

    $scope.playbox = document.getElementById('playbox');

    $scope.toggleKey = function(it) {
       if (it.type == "category"){
           show_elements(it);
       }else {
           if (it.name != "volver") write_key(it);
           //write_key(it);
           show_categories();
       }
    };
    
    $scope.backspace = function() {
        $scope.text.splice($scope.text.length-1, 1);
    };
    
    $scope.endline = function() { 
        alert("sin implementar");
    };
    
    $scope.new = function() { clean_text(); };
    
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
        clean_keys();
        for (var i = 0; i < $scope.cats_name.length; i++) {
           cat = angular.fromJson($scope.cats_name[i]);

            var category = {
                "name": cat.name,
                "icon": "categorias/" + cat.name + "/" + cat.name + ".png",
                "sound": "categorias/" + cat.name + "/" + cat.name + ".mp3",
                "color": cat.color,
                "type": "category"
            };
            add_key(category);
       }
    };
    
    function show_elements(pcat){
        clean_keys();
        for (var i = 0; i < $scope.cats_name.length; i++) {
            cat = angular.fromJson($scope.cats_name[i]);
            if (cat.name == pcat.name){               
                for (var x = 0; x < $scope.cats_name[i].elementos.length; x++) {
                    e = angular.fromJson($scope.cats_name[i]);
                    element_name = e.elementos[x];
                    var element = {
                        "name": element_name,
                        "icon": "categorias/" + pcat.name + "/elementos/" + element_name + ".png",
                        "sound": "categorias/" + pcat.name + "/elementos/" + element_name + ".mp3",
                        "color": pcat.color,
                        "type": "element"
                    };
                    add_key(element);
                } 
            }
        }
        var volver = {
            "name": "volver",
            "icon": "img/keyboard/volver.png",
            "sound": "img/keyboard/volver.mp3",
            "color": "red",
            "type": "element"
        };
        add_key(volver);
    }
    
    function write_key(it){
        $scope.text.push(it);    
    }
    
    function add_key(k){
        $scope.keys.push(k);
    }
    
    function clean_keys(){
        $scope.keys = [];
    }
    
    function clean_text(){
        $scope.text = [];
    }
         
});


