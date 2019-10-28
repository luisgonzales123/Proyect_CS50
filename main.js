//var niq = require('uniq');

const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);

const SocketIO = require('socket.io');
const parser = require('./src/js/arduino');

const path = require('path');
const router = express.Router();

//const con = require('./src/js/mysql');

const io = SocketIO.listen(server);

app.use(express.static('src'));

router.get('/Info', (req, res) => res.sendFile(path.join(__dirname + '/src/pages/Info.html')));
router.get('/Historial', (req, res) => res.sendFile(path.join(__dirname + '/src/pages/Historial.html')));
router.get('/Grafic', (req, res) =>res.sendFile(path.join(__dirname + '/src/pages/Grafic.html')));
router.get('/',(req,res)=> res.sendFile(path.join(__dirname+'/src/pages/index.html')));

app.use('/', router);

server.listen(process.env.port || 3000,function(){
    console.log('Servidor iniciado');
});


parser.on('data',function(data){
    var datos_serial = data.toString().split(',');
    let datos = {
        temperatura:datos_serial[1],
        humedad: datos_serial[0],
        luz: datos_serial[2],
        presion:datos_serial[3]
    };
    io.emit('temp',datos);
    //console.log(datos.temperatura);
});

/*
con.query('select * from registro;',function(error,results,fields){
    io.emit('consu',results);
});*/