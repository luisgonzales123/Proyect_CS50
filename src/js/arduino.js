var niq = require('uniq');

const serialport = require('serialport');
const app = require('../../main');
const server = require('http').Server(app);
const io = require('socket.io')(server);

var serial = new serialport('COM13',{parser: serialport.parsers.Readline,"baudRate": 9600});

/*
var serial = new serialport('COM13',(error) => {
        if(error != null){
            console.log('hubo un error');
        }else{
            console.log("todo bien");
        }
});*/
    
serial.on('open',function(error){
        if (error != null){
            console.log("Error");
        }else{
            console.log("conexion lista");
        }
});
    
    
io.on('connection', function(socket){
   serial.on('data',function(data){
      socket.emit('news',{serial: data[0].toString()});
   });
});

module.exports = io;