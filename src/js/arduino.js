const serialport = require('serialport');
const htt = require('http');

var serial = new serialport('COM13',function(){
        console.log("conexion lista");
});

serial.on('data',function(data){
        console.log(data[0].toString());
});

module.exports = serial;