var http = require('http'),
    url = require('url');
    fs = require('fs');

var server = http.createServer(function (req, res) {
  if (req.method !== 'GET')
    return res.end('Need GET request.\n');

  var parsedReq = url.parse(req.url, true);
  var reqDate = new Date(/*parsedReq.query.iso*/);
  var result = 0;

  console.log(parsedReq.pathname);

  if (parsedReq.pathname === '/') {
    result = 'Load Angular 2 app';
  }
  else if (parsedReq.pathname === '/api/parsetime') {
    result = {
      hour : reqDate.getHours(),
      minute : reqDate.getMinutes(),
      second : reqDate.getSeconds() 
    }
  } else if (parsedReq.pathname === '/api/unixtime') {
    result = {
      unixtime : reqDate.getTime()
    }
  } else {
    res.writeHead(404)
    res.end();
  }
  // res.writeHead(200, { 'Content-Type': 'text/plain' });
  // res.write(JSON.stringify(result), 'utf-8');
  // res.end();

  res.end(JSON.stringify(result));
});

server.listen(8080);