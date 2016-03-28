
angular.module('MyApp',  ['ngMaterial'])

.controller('AppCtrl', function($scope, $sce) {
    $scope.cats_name = [{color: "red", name: "colores", elementos: ["amarillo", "azul", "blanco", "dorado", "gris", "marron", "naranja", "negro", "rojo", "rosa", "verde", "verde_claro", "violeta"]}, {color: "red", name: "animales", elementos: ["-and-s", "abeja", "ardilla", "ballenas", "caballos", "cabras", "camellos", "canario", "canguros", "caracoles", "cebras", "cerdo", "cerdos", "cereales", "chimpances", "cocodrilos", "conejos", "delfin", "gallina", "gallo", "gallo (1)", "gato", "iguanas", "leon", "leon_marino", "mariposa", "mono", "oso", "oso_panda", "pajaro", "pajaro (1)", "paloma", "pantera", "pato", "perro", "perro (1)", "pinguino", "pinguino_emperador", "polilla", "pulpo", "pulpos", "ranas", "ratones", "rinoceronte", "ternera", "toro", "tortugas", "vaca", "\u00f1andus"]}, {color: "red", name: "adjetivos", elementos: ["aburridos", "acompa\u00f1ado", "adulta", "algun", "alto", "anterior", "anterior (1)", "aquel", "ausente", "autonomo", "bajo", "baratos", "blandos", "calientes", "central", "claros", "confusos", "cualquier", "curiosos", "dependiente", "derecha", "diferente", "dulce", "duro", "egoista", "enamorado", "enfermos", "entero", "equilibrado", "este", "estos", "extra\u00f1o", "falso", "feliz", "feliz (1)", "feliz (2)", "feo", "flacos", "frio", "fuerte", "gordo", "grande", "guapo", "hermosa", "iguales", "irritado", "izquierda", "joven", "lento", "mas", "menos", "menos (1)", "mojado", "negativo", "nervioso", "ninguna", "ningunas", "ninguno", "nuevo", "oscuros", "otra", "pegajosos", "peque\u00f1a", "pesadas", "picante", "picante (1)", "posterior", "primer", "rizados", "rugoso", "sana", "seco", "sentado", "sola", "solo", "suaves", "sucios", "toda", "toda (1)", "ultimo", "vacio", "verdadera", "viejo"]}, {color: "red", name: "lugares", elementos: ["ambulatorio", "avenida", "bibliotecas", "cafeterias", "carceles", "casas", "cementerios", "cines", "circos", "colegios", "comisarias", "jugueteria", "parada_de_taxis", "pizzeria", "plaza", "tienda_de_musica", "tiendas", "verduleria"]}, {color: "red", name: "abecedario", elementos: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]}, {color: "red", name: "numeros", elementos: ["cero", "numero (1)", "numero (2)", "numero (3)", "numero (4)", "numero (5)", "numero (6)", "numero (7)", "numero (8)", "numero (9)"]}, {color: "red", name: "verbos", elementos: ["abrir", "abrocharse el cintur-n", "abrocharse_el_cinturon", "acompa\u00f1ar", "agrupar", "alcanzar", "almorzar", "anteceder", "apagar", "avanzar", "bajar", "borrar", "cancelar", "cantar", "cepillar_los_dientes", "cerrar", "comer", "comer (1)", "comunicarse", "construir", "continuar", "correr", "cortar", "cortar_el_pelo", "cumplir", "dar", "dormir", "duchar", "enfermar", "ense\u00f1ar", "entrar", "enviar", "escribir", "escuchar", "hacer_fotos", "intentar", "jugar", "jugar con el ordenador", "jugar con el tablet", "jugar_con_el_ordenador", "jugar_con_el_tablet", "lavar", "leer", "llamar", "llegar", "llorar", "nacer", "oler", "pasear", "pegar", "peinar", "perfumar", "pintar", "pintar (1)", "pulsar", "quejarse", "reir (1)", "rodear", "salir", "separar", "silenciar", "subir", "tomar", "trabajar", "ver", "visitar"]}, {color: "red", name: "sociales", elementos: ["cual_es_tu_email-", "cual_es_tu_nombre-", "cuantos_dias-", "cuidado", "es_gracioso!", "estoy_bien!", "felicidades!", "genial!", "lo_siento!", "puedo_ayudarte-", "que_dices-", "que_tal-"]}, {color: "red", name: "personas", elementos: ["ella", "ellas", "ellas_1", "ellos", "ellos_1", "ellos_2", "nosotras", "nosotros", "tu", "yo", "yo_1", "yo_2", "yo_3"]}, {color: "red", name: "interrogativas", elementos: ["como", "cuantos", "cuantos (1)", "que", "quien-", "quienes"]}];

    $scope.keys = [];
    $scope.text = [];

    show_categories();

    $scope.playbox = document.getElementById('playbox');

    $scope.toggleKey = function(it) {
       if (it.type == "category"){
           show_elements(it);
       }else {
           if (it.name !== "volver") write_key(it);
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
        var volver = new Element("volver");
        volver.icon= "img/keyboard/volver.png";
        volver.sound = "img/keyboard/volver.mp3";
        volver.color = "red";
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


