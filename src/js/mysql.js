const mysql = require('mysql');
const  server = require('../../main');
const SocketIO = require('socket.io');
const io = SocketIO.listen(server);

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Lll1@ggg1234",
  database: "clima",
  port:3306
});

con.connect(function(error){
      if(error){
         throw error;
      }else{
         console.log('Conexion correcta.');
      }
});
/*
con.query('select * from registro;',(error,results,fields)=>{
      io.emit('consulta',results);
      console.log(results);
});*/

module.exports = con;