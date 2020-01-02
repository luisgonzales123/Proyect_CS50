const serial = require('serialport');

const Readline = serial.parsers.Readline;

const port = new serial('COM14',function(){
    BaudRate: 9600
});

const parser = port.pipe(new Readline({delimeter:'\r\n'}));

parser.on('open',function(){
    console.log('connection is open');
});

module.exports = parser;
