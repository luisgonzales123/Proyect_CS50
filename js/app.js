(function (){
   $('#zoomBtn').on("click",function(){
      add_elements(this);
   });
   var add_elements = function(i){
      var enlace = "file:///C:/Users/gabriel/Desktop/ProyectCS50/pages/Historial.html";
      $(i).attr('href',enlace);
   };



   var $move = $('#card');

   $('#test').on("mouseenter",function(){
      $move.css({
         width:"="
      })
   });;

})()