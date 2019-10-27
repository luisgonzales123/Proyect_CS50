$('#zoomBtn').on("click",function(){
   add_elements(this);
});
var add_elements = function(i){
   //let enlace = __dirname+'/src/pages/Historial.html';
   var enlace = "../pages/Historial.html";
   $(i).attr('href',enlace);
};

/*                       Añadiendo el bigbox                        */

$.bigBox = (opciones)=>{
   opciones = $.extend({
      titulo:undefined,
      valor:undefined
   },opciones);

   let contenido = '<div class="bigBox-Fondo"></div>';
   
   contenido += '<div class="bigBox-contenedor" align="center">';
   contenido += '    <div class="bigBox-Cerrar">X</div>';
   contenido += '	   <div class="bigBox-Titulo"><h5>'+opciones.titulo+'</h5></div>';
   contenido += '	   <div class="bigBox-Contenido">';
   contenido += '		   <canvas id="myChart" width="400" height="100"></canvas>';
   contenido += '	   </div>';
   contenido += '</div>';

   $('body').append(contenido);

   let animar_entrada = ()=>{
       var $fondo = $('.bigBox-Fondo');
       var $bigBox = $('.bigBox-contenedor');
        
       $fondo.show();
       $bigBox.show();

      var tl = new TimelineMax();
           tl.to($fondo, 0.6, {opacity: 0.3})
             .to($bigBox, 0.5, {opacity:1},"-=0.7")
             .from($bigBox, 0.5, {y:"-=30px"},"-=0.5");

      let miCanvas = document.getElementById('myChart').getContext('2d');
      var chart = new Chart(miCanvas,{
               type:"bar",
               data:{
                  labels:[opciones.labels["vino"],opciones.labels["ron"],opciones.labels["cerveza"]],
                  datasets:[{
                        label:opciones.valor,
                        backgroundColor:opciones.color,
                        data:[opciones.valores["vino"],opciones.valores["ron"],opciones.valores["cerveza"]]
                  }]
               }
      });   
   };

   let animar_salida = ()=>{
       var $fondo = $('.bigBox-Fondo');
       var $bigBox = $('.bigBox-contenedor');

       var tl = new TimelineMax();
           tl.to($fondo, 0.6, {opacity: 0})
             .to($bigBox, 0.5, {opacity:0,onComplete:remover_bigBox },"-=0.5");
   };

   animar_entrada();

   $('body').on('click','.bigBox-Cerrar',()=>{
       animar_salida();
   });

   let remover_bigBox = ()=>{
       var $fondo = $('.bigBox-Fondo');
       var $bigBox = $('.bigBox-contenedor');
       $fondo.remove();
       $bigBox.remove();
   };

}