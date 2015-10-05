var http = require('http'),
    url = require('url');
    fs = require('fs');
    express = require('express');

var app = express();
app.get('/', function (req, res) {
  fs.readFile('index.html', 'utf8', function (err, data) {
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
app.use(express.static('.'));
app.listen(8080);
