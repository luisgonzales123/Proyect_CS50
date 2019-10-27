(function (){
   $('#zoomBtn').on("click",function(){
      add_elements(this);
   });
   var add_elements = function(i){
      //let enlace = __dirname+'/src/pages/Historial.html';
      var enlace = "localhost:3000/src/pages/Historial.html";
      $(i).attr('href',enlace);
   };
   var $move = $('#card');

   $('#test').on("mouseenter",function(){
      $move.css({
         width:"="
      })
   });;

})()