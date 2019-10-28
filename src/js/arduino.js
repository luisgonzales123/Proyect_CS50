const serialport = require('serialport');

const app = require('../../index');
const server = require('http').Server(app);
const io = require('socket.io')(server);


var serial = new serialport('COM13',(error) => {
        if(error != null){
            console.log('hubo un error');
        }else{
            console.log("todo bien");
        }
    });
    
    serial.on('open',function(error){
            if (error != null){
                 console.log("Error");
            }else{
                 console.log("conexion lista");
            }
    });
    
    
    io.on('connection', function(socket){
            serial.on('data',function(data){
                    socket.emit('news',{serial: data.toString()});
            });
    });
    