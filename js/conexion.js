var serialPort = require('serialport');

var serial = new serialPort('COM11',{parser: serialPort.parsers.readline('\n')});

serial.on('open',function(err){
    if(err != null){
        console.log(err);
    }else{
        console.log("Conexion exitosa");
    }
});

serial.on('data',function(data){
    console.log(data.toString());
   // $('#text-presion').text(data.toString());
});


