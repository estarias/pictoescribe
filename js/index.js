
angular.module('MyApp',  ['ngMaterial', 'ngDraggable', 'FBAngular'])

.controller('AppCtrl', function($scope, $sce, $window, $timeout,Fullscreen) {
    $scope.cats_name = [{"color": "blue", "name": "colores", "elementos": ["amarillo", "azul", "blanco", "dorado", "gris", "marron", "naranja", "negro", "rojo", "rosa", "verde", "verde_claro", "violeta"]}, {"color": "orange", "name": "animales", "elementos": ["abeja", "ardilla", "ballenas", "caballos", "cabras", "camellos", "canario", "caracoles", "cebras", "cerdo", "cerdos", "chimpances", "cocodrilos", "delfin", "gallina", "gallo", "gato", "iguanas", "leon", "leon_marino", "mariposa", "mono", "oso", "oso_panda", "pajaro", "paloma", "pantera", "pato", "perro", "pinguino", "pulpo", "rinoceronte", "ternera", "toro", "tortugas", "vaca"]}, {"color": "white", "name": "números", "elementos": ["cero", "cinco", "cuatro", "dos", "nueve", "ocho", "seis", "siete", "tres", "uno"]}, {"color": "blue", "name": "adjetivos", "elementos": ["aburridos", "acompañado", "alto", "anterior", "anterior (1)", "aquel", "autonomo", "bajo", "baratos", "blandos", "calientes", "central", "claros", "confuso", "cualquier", "dependiente", "derecha", "diferente", "dulce", "duro", "egoista", "enfermo", "entero", "este", "estos", "extraño", "falso", "feliz", "feliz (1)", "feliz (2)", "feo", "flacos", "frio", "fuerte", "gordo", "grande", "guapo", "hermosa", "iguales", "irritado", "izquierda", "joven", "lento", "mas", "menos", "menos (1)", "mojado", "nervioso", "ninguna", "ninguno", "nuevo", "otra", "pegajosos", "pequeña", "picante", "primer", "rizados", "rugoso", "seco", "sola", "solo", "suaves", "sucios", "toda", "toda (1)", "ultimo", "vacio", "verdadera", "viejo"]}, {"color": "orange", "name": "lugares", "elementos": ["ambulatorio", "avenida", "bibliotecas", "cafeterías", "carceles", "casas", "cementerios", "cines", "circos", "colegios", "comisarias", "jugueteria", "plaza", "tienda de musica", "tiendas", "verduleria"]}, {"color": "white", "name": "abecedario", "elementos": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]}, {"color": "green", "name": "verbos", "elementos": ["abrir", "acompañar", "agrupar", "alcanzar", "apagar", "avanzar", "bajar", "borrar", "cancelar", "cantar", "cepillar los dientes", "cerrar", "comer", "comer (1)", "construir", "continuar", "correr", "cortar", "cortar el pelo", "cumplir", "dar", "dormir", "duchar", "enfermar", "enseñar", "entrar", "enviar", "escribir", "escuchar", "hacer fotos", "intentar", "jugar", "lavar", "leer", "llamar", "llegar", "llorar", "nacer", "pasear", "pegar", "peinar", "perfumar", "pintar", "pintar (1)", "pulsar", "reir (1)", "rodear", "salir", "silenciar", "subir", "tomar", "trabajar", "ver", "visitar"]}, {"color": "pink", "name": "sociales", "elementos": ["cuidado", "es gracioso!", "estoy bien!", "felicidades!", "genial!", "lo siento!", "puedo ayudarte", "qué dices", "qué tal"]}, {"color": "yellow", "name": "personas", "elementos": ["ella", "ellas", "ellas_1", "ellos", "ellos_1", "ellos_2", "nosotras", "nosotros", "tu", "yo", "yo_1", "yo_2", "yo_3"]}, {"color": "orange", "name": "objetos", "subcategorias": [{"color": "red", "name": "cuidado personal", "elementos": ["cepillos_de_dientes", "cepillos_de_pelo", "colonias", "cosmeticos", "crema", "desodorante", "esponja", "jabon", "papel_higienico", "papeleras", "pañal"]}, {"color": "red", "name": "herramientas", "elementos": ["alicates", "cajas_de_herramientas", "carretillas", "llave_fija", "martillo", "pala", "rastrillo", "serrucho", "tenazas", "tornillo"]}, {"color": "red", "name": "juguetes", "elementos": ["ajedrez", "balon_de_baloncesto", "balon_de_futbol", "baraja", "caballitos_de_madera", "camiones_de_juguete", "coches_de_juguete", "cuento", "globos", "muñeca", "muñeco", "patinete", "pelota", "pilas", "puzzle", "tren_de_juguete", "triciclo"]}, {"color": "red", "name": "objetos de la casa", "elementos": ["aire_acondicionado", "alfombras", "almohadas", "aspiradora", "batidoras", "baños", "cafeteras", "chimenea", "chimeneas", "cocinas", "colchones", "electrodomesticos", "equipo_de_musica", "horno", "lampara", "libreria", "mantel", "mesa", "microondas", "pared", "plancha", "puerta", "sandwichera", "suelo", "telefono", "television", "ventana"]}, {"color": "red", "name": "útiles", "elementos": ["agendas", "calculadoras", "carpetas", "cinta_adhesiva", "clips", "cuaderno", "cuentos", "goma", "lapiz", "libro", "mapa", "pincel", "pinturas_de_colores", "pizarra", "regla", "sacapuntas", "tijeras_escolares"]}, {"color": "red", "name": "instrumentos musicales", "elementos": ["acordeon", "armonica", "baterias", "corneta", "flauta", "guitarra", "maraca", "pentagrama", "percusion", "piano", "saxofon", "tambor", "tuba", "violin"]}, {"color": "red", "name": "tecnología", "elementos": ["CD_Roms", "altavoces", "computadora", "impresora", "memoria", "microfono", "monitores", "mp3", "pendrive", "raton", "software", "tablet"]}]}, {"color": "pink", "name": "interrogativas", "elementos": ["como", "cuantos (1)", "cuántos", "quién", "quiénes", "qué"]}, {"color": "orange", "name": "alimentos", "subcategorias": [{"color": "red", "name": "hortalizas", "elementos": ["acelga", "calabazas", "cebollas", "maiz", "patata", "tomate"]}, {"color": "red", "name": "comidas", "elementos": ["aceite", "aceite de oliva", "arroz", "azucar", "caramelos", "carne", "cereales", "croissant", "croqueta", "empanadas", "espaguetis", "fideos", "flanes", "gelatina", "golosinas", "hamburguesa", "hamburguesas", "helado", "helado (1)", "huevo", "huevo frito", "jamon", "leche y galletas", "lentejas", "mayonesa", "pan", "pan (1)", "paquetes de galletas", "pastel de chocolate", "patatas fritas", "pescado", "pollo asado", "pure", "queso", "queso rallado", "sal", "sandwich", "sopa", "tableta de chocolate", "tartas de cumpleaños"]}, {"color": "red", "name": "bebidas", "elementos": ["Coca-Cola", "agua", "cafe", "leche", "leche con cacao", "yogurt", "zumo de manzana"]}, {"color": "red", "name": "frutas", "elementos": ["cereza", "cerezas", "ciruela", "higo", "kiwi", "limon", "manzana", "manzana (1)", "naranja", "pera", "platano", "pomelo"]}]}];

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
       if (it.type == "category" || it.type == "subcategory"){
           show_elements(it);
           $scope.category = it;
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
           var c = new Category(cat, i);
            add_key(c);
       }
    };
    
    function show_elements(it){
        clean_keys();
        if (it.type == "category" && $scope.cats_name[it.index].elementos != undefined){
            //elementos
            for (var x = 0; x < $scope.cats_name[it.index].elementos.length; x++) {
                e = angular.fromJson($scope.cats_name[it.index]);
                element_name = e.elementos[x];
                var element = new Element(element_name, it);
                add_key(element);
            }
        }else{                    
            if (it.type == "subcategory"){
                //eleentos de subcategoria
                for (var x = 0; x < $scope.cats_name[it.category.index].subcategorias[it.index].elementos.length; x++) {
                    e = angular.fromJson($scope.cats_name[it.category.index].subcategorias[it.index]);
                    element_name = e.elementos[x];
                    var element = new Element(element_name, it.category, it);
                    add_key(element);
                }
            }else{
                //subcategorias
                for (var x = 0; x < $scope.cats_name[it.index].subcategorias.length; x++) {
                    subcat = angular.fromJson($scope.cats_name[it.index]);
                    subcat_name = subcat.subcategorias[x];
                    var c = new SubCategory(it, subcat_name, x);
                    add_key(c);
                }
            }
        }
        var no_tengo_la_palabra = new Element("no tengo la palabra");
        no_tengo_la_palabra.icon= "img/keyboard/no tengo la palabra.png";
        no_tengo_la_palabra.sound = "img/keyboard/no tengo la palabra.mp3";
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


