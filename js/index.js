
angular.module('MyApp',  ['ngMaterial', 'ngDraggable', 'FBAngular'])

.controller('AppCtrl', function($scope, $sce, $window, $timeout,Fullscreen) {
    $scope.cats_name = [{color: "blue", name: "colores", elementos: ["amarillo", "azul", "blanco", "dorado", "gris", "marron", "naranja", "negro", "rojo", "rosa", "verde", "verde_claro", "violeta"]}, {color: "orange", name: "animales", elementos: ["abeja", "ardilla", "ballenas", "caballos", "cabras", "camellos", "canario", "caracoles", "cebras", "cerdo", "cerdos", "chimpances", "cocodrilos", "conejos", "delfin", "gallina", "gallo", "gato", "iguanas", "leon", "leon_marino", "mariposa", "mono", "oso", "oso_panda", "pajaro", "pajaro (1)", "paloma", "pantera", "pato", "perro", "perro (1)", "pinguino", "polilla", "pulpo", "ranas", "rinoceronte", "ternera", "toro", "tortugas", "vaca", "ñandus"]}, {color: "blue", name: "adjetivos", elementos: ["aburridos", "acompañado", "adulta", "alto", "anterior", "anterior (1)", "aquel", "ausente", "autonomo", "bajo", "baratos", "blandos", "calientes", "central", "claros", "confusos", "cualquier", "curiosos", "dependiente", "derecha", "diferente", "dulce", "duro", "egoista", "enamorado", "enfermos", "entero", "equilibrado", "este", "estos", "extraño", "falso", "feliz", "feliz (1)", "feliz (2)", "feo", "flacos", "frio", "fuerte", "gordo", "grande", "guapo", "hermosa", "iguales", "irritado", "izquierda", "joven", "lento", "mas", "menos", "menos (1)", "mojado", "negativo", "nervioso", "ninguna", "ningunas", "ninguno", "nuevo", "oscuros", "otra", "pegajosos", "pequeña", "pesadas", "picante", "posterior", "primer", "rizados", "rugoso", "sana", "seco", "sentado", "sola", "solo", "suaves", "sucios", "toda", "toda (1)", "ultimo", "vacio", "verdadera", "viejo"]}, {color: "orange", name: "lugares", elementos: ["ambulatorio", "avenida", "bibliotecas", "cafeterias", "carceles", "casas", "cementerios", "cines", "circos", "colegios", "comisarias", "jugueteria", "parada_de_taxis", "plaza", "tienda_de_musica", "tiendas", "verduleria"]}, {color: "white", name: "abecedario", elementos: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]}, {color: "white", name: "numeros", elementos: ["cero", "numero (1)", "numero (2)", "numero (3)", "numero (4)", "numero (5)", "numero (6)", "numero (7)", "numero (8)", "numero (9)"]}, {color: "green", name: "verbos", elementos: ["abrir", "acompañar", "agrupar", "alcanzar", "almorzar", "anteceder", "apagar", "avanzar", "bajar", "borrar", "cancelar", "cantar", "cepillar_los_dientes", "cerrar", "comer", "comer (1)", "comunicarse", "construir", "continuar", "correr", "cortar", "cortar_el_pelo", "cumplir", "dar", "dormir", "duchar", "enfermar", "enseñar", "entrar", "enviar", "escribir", "escuchar", "hacer_fotos", "intentar", "jugar", "lavar", "leer", "llamar", "llegar", "llorar", "nacer", "pasear", "pegar", "peinar", "perfumar", "pintar", "pintar (1)", "pulsar", "quejarse", "reir (1)", "rodear", "salir", "separar", "silenciar", "subir", "tomar", "trabajar", "ver", "visitar"]}, {color: "pink", name: "sociales", elementos: ["cual_es_tu_email-", "cual_es_tu_nombre-", "cuantos_dias-", "cuidado", "es_gracioso!", "estoy_bien!", "felicidades!", "genial!", "lo_siento!", "puedo_ayudarte-", "que_dices-", "que_tal-"]}, {color: "yellow", name: "personas", elementos: ["ella", "ellas", "ellas_1", "ellos", "ellos_1", "ellos_2", "nosotras", "nosotros", "tu", "yo", "yo_1", "yo_2", "yo_3"]}, {color: "pink", name: "interrogativas", elementos: ["como", "cuantos", "cuantos (1)", "que", "quien-", "quienes"]}];

    $scope.keys = [];   
    $scope.playbox = document.getElementById('playbox');
    
    clean_text();
    show_categories();
    
    //play on mouse over with delay
    var timer;    
    $scope.showIt = function (sound) {
        timer = $timeout(function () {
           $scope.said(sound);
        }, 500);
    };    
    $scope.hideIt = function () {
        $timeout.cancel(timer);
        stop();
    };

     $scope.goFullscreen = function () {
        if (Fullscreen.isEnabled())
           Fullscreen.cancel();
        else
           Fullscreen.all();
        // Set Fullscreen to a specific element (bad practice)
        // Fullscreen.enable( document.getElementById('img') )
    };
    
    $scope.toggleKey = function(it) {
       if (it.type == "category"){
           show_elements(it);
       }else {
           if (it.name !== "volver") write_key(it);
           show_categories();
       }
    };
    
    $scope.backspace = function() {
       if ($scope.text[$scope.lines].length == 0 && $scope.lines>0){
            $scope.lines--;
        }else{
            $scope.text[$scope.lines].splice($scope.text[$scope.lines].length-1, 1);
        }
    };

    $scope.exit = function() {
        $window.close();
    };

    
    $scope.endline = function() { 
        $scope.lines++;
        //$scope.text[$scope.lines] = [$scope.text[$scope.lines-1],[]];
        $scope.text[$scope.lines] = new Array();
    };
    
    $scope.new = function() { clean_text(); };
    
    $scope.save = function() {
        alert("Exportar a pdf - sin implementar");
    };
    
    $scope.said = function(sound) {
        play(sound);
    };
      
    function play(src) {
        $scope.playbox.src = src;
        $scope.playbox.play();
    }
    function stop() {
        $scope.playbox.pause();
        $scope.playbox.currentTime = 0;
    }
    
    $scope.play_all = function() {   
        $scope.sounds = new Array();
        for (l=0; l<$scope.text.length;l++){
            angular.forEach($scope.text[l], function(value, key){
                if (value != null ){
                    $scope.sounds.push(value.sound);
                };
            });
        };
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
           var c = new Category(cat);
            add_key(c);
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
                    var element = new Element(element_name, pcat);
                    add_key(element);
                } 
            }
        }
        var no_tengo_la_palabra = new Element("no_tengo_la_palabra");
        no_tengo_la_palabra.icon= "img/keyboard/no_tengo_la_palabra.png";
        no_tengo_la_palabra.sound = "img/keyboard/no_tengo_la_palabra.mp3";
        no_tengo_la_palabra.color = "red";
        add_key(no_tengo_la_palabra);

        var volver = new Element("volver");
        volver.icon= "img/keyboard/volver.png";
        volver.sound = "img/keyboard/volver.mp3";
        volver.color = "red";
        add_key(volver);
    }
    
    function write_key(it){
        if (it != null){
            $scope.text[$scope.lines].push(it);
        }
    }
    
    function add_key(k){
        $scope.keys.push(k);
    }
    
    function clean_keys(){
        $scope.keys = [];
    }
    
    function clean_text(){
        $scope.text = [new Array()];
        $scope.lines = 0;
    }
    
    $scope.centerAnchor = true;
    $scope.toggleCenterAnchor = function () {$scope.centerAnchor = !$scope.centerAnchor}

     $scope.onDropComplete=function(data,evt){
        var index = $scope.text[$scope.lines].indexOf(data);
        if (index == -1)
        write_key(data);
    }
    $scope.onDragSuccess=function(data,evt){
        var index = $scope.text[$scope.lines].indexOf(data);
        if (index > -1) {
            $scope.text[$scope.lines].splice(index, 1);
        }
    }

    var inArray = function(array, obj) {
        var index = array.indexOf(obj);
    }
    
    $scope.print = function(divName) {
        var printContents = document.getElementById(divName).innerHTML;
        var originalContents = document.body.innerHTML;      

        if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
            var popupWin = window.open('', '_blank', 'width=800,height=800,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
            popupWin.window.focus();
            popupWin.document.write('<!DOCTYPE html><html><head>' +
                '<link rel="stylesheet prefetch" href="css/angular-material.css">' +
                '<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">' +
                '<link rel="stylesheet" href="css/style.css"></head>' +
                '<body onload="window.print()"><div class="reward-body">' + printContents + '</div></html>');
            popupWin.onbeforeunload = function (event) {
                popupWin.close();
                return '.\n';
            };
            popupWin.onabort = function (event) {
                popupWin.document.close();
                popupWin.close();
            }
        } else {
            var popupWin = window.open('', '_blank', 'width=800,height=800');
            popupWin.document.open();
            popupWin.document.write('<html><head> ' +
                '<link rel="stylesheet prefetch" href="css/angular-material.css">' +
                '<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">' +
                '<link rel="stylesheet" href="css/style.css"></head> ' +
                '<body onload="window.print()">' + printContents + '</html>');
            popupWin.document.close();
        }
        popupWin.document.close();

        return true;
    } 
    

});


