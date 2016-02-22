
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
      
      $scope.text = "";
      $scope.last_element = -1;
      
      //Select category
      $scope.toggleCategory = function(it) {
         //alert(it.name);
         //someHtmlVar = "<div id='"+it.id+"'>"; 
         //someHtmlVar += "<md-tooltip>" + it.name + "</md-tooltip>";
         someHtmlVar = "<img id='"+it.id+"' src='"+ it.icon + "' class='keyboardItem' alt='"+it.name+"'>";
         //someHtmlVar += "</div>";
         $scope.text += someHtmlVar;
         $scope.thisCanBeusedInsideNgBindHtml = $sce.trustAsHtml($scope.text);
    };
    
    $scope.backspace = function() {         
      // document.getElementById('2').remove();
       var myEl= angular.element(document.getElementById('2'));          
       myEl.remove();
    };
    
    
      
});