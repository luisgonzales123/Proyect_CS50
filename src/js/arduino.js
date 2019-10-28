const serialport = require('serialport');

var serial = new serialport('COM13',{parser:serialport.parsers.Readline()});

serial.on('open',function(err){
    if (err != null){
        console.log("Error");
    }else{
        console.log("conexion lista");
    }
});  

serial.on('data',function(){
    console.log(data.toString());
});