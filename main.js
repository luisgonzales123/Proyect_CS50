var uniqe = require('uniq');

const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);

const SocketIO = require('socket.io');
const parser = require('./src/js/arduino');
var parser2 = require('./src/js/arduino');

const path = require('path');
const router = express.Router();

var con = require('./src/js/mysql');

var bodyParser = require('body-parser');

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

router.get('/',function(req,res,next){
        let reqes = req.body.humedad;
        //return datos_serial = data.toString().split(',');
        let datos = {
            temperatura:datos_serial[1],
            humedad: datos_serial[0],
            luz: datos_serial[2],
            presion:datos_serial[3]
        };
        con.query('insert into luz(dato) values ("'+datos.luz+'")',function(error,results){
            if (error){ console.log(error); return ;
            }else{ console.log(datos.luz); }
        });
        con.query('insert into humedad(dato) values ("'+datos.humedad+'")',function(error,results){
            if (error){ console.log(error); return ;
            }else{ console.log(datos.humedad); }
        });
        con.query('insert into temperatura(dato) values ("'+datos.temperatura+'")',function(error,results){
            if (error){ console.log(error); return ;
            }else{ console.log(datos.temperatura); }
        });
        con.query('insert into presion(dato) values ("'+datos.presion+'")',function(error,results){
            if (error){ console.log(error); return ;
            }else{ console.log(datos.presion); }
        });
    res.sendFile(path.join(__dirname + '/src/pages/Historial.html'));
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
});
module.exports = server;
