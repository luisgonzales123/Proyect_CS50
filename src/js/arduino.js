const serialport = require('serialport');

var serial = new serialport('COM13',function(){
        console.log("conexion lista");
});