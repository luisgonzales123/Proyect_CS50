const mysql = require('mysql');

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

con.query('select * from registro;', function (error, results, fields) {
   if (error) throw error;
   return results;
   //console.log(results);
});

module.exports = con;