(()=>{
   $('#zoomBtn').on("click",function(){
      add_elements(this);
   });
   var add_elements = function(i){
      var enlace = "../pages/Historial.html";
      $(i).attr('href',enlace);
   };
   
   /*------------------------Añadiendo el bigbox--------------------------*/
   
   $.bigBox = (opciones)=>{
      opciones = $.extend({
         titulo:undefined,
         valor:undefined,
         tipo:undefined
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


          var anchoP = $(window).width();
          var altoP = $(window).height();

          var anchoB = $bigBox.width();
          var altoB = $bigBox.height();

          $bigBox.css({
             top: (altoP / 2) - (altoB /2 ),
             left: (anchoP / 2) - (anchoB /2)
          });
           
          $fondo.show();
          $bigBox.show();
   
         var tl = new TimelineMax();
              tl.to($fondo, 0.6, {opacity: 0.3})
                .to($bigBox, 0.5, {opacity:1},"-=0.7")
                .from($bigBox, 0.5, {y:"-=30px"},"-=0.5");

         /*                     creacion del grafico                 */

         const socket = io();
         let counter = 0;
         socket.on('temp',function(dataserial){


            let tipo = function(){
               if (opciones.tipo === "T"){
                  return dataserial.temperatura;
               }else if (opciones.tipo === "H"){
                  return dataserial.humedad;
               }else if (opciones.tipo === "L"){
                  return dataserial.luz;
               }else if(opciones.tipo === "P"){
                  return dataserial.presion;
               }
            }
            
           console.log(counter);
           chart.data.labels.push(counter);
           chart.data.datasets.forEach(datasets => {
              //datasets.data.push(dataserial.temperatura).value;
              datasets.data.push(tipo()).value;
           });
           counter++;
           chart.update();
           
         });
   
         let miCanvas = document.getElementById('myChart').getContext('2d');
         var chart = new Chart(miCanvas,{
                  type:"line",
                  data:{
                     labels:opciones.valores[1],
                     datasets:[{
                           label:opciones.valor,
                           backgroundColor:opciones.color,
                           borderColor: 'rgb(244,244,244)',
                           data:[]
                     }]
                  },
               options:{}
         });   
      };
      /* ---------------------------------------------------------------- */
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
})()