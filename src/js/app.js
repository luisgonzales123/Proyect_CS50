(function (){
   $('#zoomBtn').on("click",function(){
      add_elements(this);
   });
   var add_elements = function(i){
      //let enlace = __dirname+'/src/pages/Historial.html';
      var enlace = "file:///C:/Users/Laptop 12/Desktop/ProyectCS50/pages/Historial.html";
      $(i).attr('href',enlace);
   };
   var $move = $('#card');

   $('#test').on("mouseenter",function(){
      $move.css({
         width:"="
      })
   });;

})()