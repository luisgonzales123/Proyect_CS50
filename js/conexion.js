var serialPort = require('serialport');

var serial = new serialPort('COM11',function(err){
    console.log("Conexion lista");
},{
    parser:serialPort.
});

serial.on('data',function(){
    console.log(data.toString());
});


