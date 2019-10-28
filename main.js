var niq = require('uniq');

const express = require('express');
const path = require('path');
const router = express.Router();
const con = require('./src/js/mysql');
const app = express();
require('./src/js/arduino');

app.use(express.static('src'));
app.use(express.static('socket.io'));



router.get('/Info', (req, res) => res.sendFile(path.join(__dirname + '/src/pages/Info.html')));
router.get('/Historial', (req, res) => res.sendFile(path.join(__dirname + '/src/pages/Historial.html')));
router.get('/Grafic', (req, res) =>res.sendFile(path.join(__dirname + '/src/pages/Grafic.html')));
router.get('/',(req,res)=> res.sendFile(path.join(__dirname+'/src/pages/index.html')));

app.use('/', router);

app.listen(process.env.port || 3000,function(){
    console.log('Servidor iniciado');
});

module.exports = app;