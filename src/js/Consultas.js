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

console.log("Terminando");