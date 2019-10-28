/*
con.query('select * from luz;',(errors,results,fields) => {
    if (error) throw error;
    console.log(results);
});*/

for(var i = 0; i < 10; i++){
    var html = "";
    html += '<tr>';
    html += '   <td>'+i+'</td>';
    html += '   <td>'+i+'</td>';
    html += '   <td>'+i+'</td>';
    html += '   <td>'+i+'</td>';
    html += '   <td>'+i+'</td>';
    html += '   <td>'+i+'</td>';
    html += '</tr>';
    $('#tabla').append(html);
}

const socket = io();
socket.on('consu',function(data){
   console.log(data);
    //document.getElementById('mip').innerHTML = data.toString();
});

console.log("Terminando");