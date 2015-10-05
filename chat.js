var http = require('http'),
    url = require('url'),
    fs = require('fs'),
    express = require('express'),
    net = require('net');

var app = express();
app.get('/', function (req, res) {
  fs.readFile('build/index.html', 'utf8', function (err, data) {
    if (err) {
      throw err;
      console.log('read error');
    } else {
      res.writeHead(200, {'Content-Type' : 'text/html'});
      res.write(data, 'utf8');
      res.end();
    }
  });
});

var port = process.env.PORT || 8080;

app.use(express.static('.'));
app.listen(port);
console.log('Running on port', port);


var server = net.createServer(function(c) { //'connection' listener
    console.log('client connected');
    c.on('end', function() {
        console.log('client disconnected');
    });
    c.write('hello\r\n');
    c.pipe(c);
});
server.listen(8124, function() { //'listening' listener
    console.log('server bound', process.env.TERM);
});