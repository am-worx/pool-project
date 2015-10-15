var http = require('http'),
    //url = require('url'),
    fs = require('fs'),
    express = require('express'),
    mongo = require('mongodb').MongoClient;

var app = express();

console.log('Listening on localhost:8080');
app.get('/', function(req, res) {
  fs.readFile('build/angular1.html', 'utf8', function (err, data) {
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

app.get('/:name', function(req, res, next){
  var name = req.params.name,
      getvar1 = req.query.getvar1 || '',
      getvar2 = req.query.getvar2 || '';
      res.end('hello ' + name + getvar1 + getvar2);
});
app.get('*', function(req, res){
    res.status(404).send('Sorry, page not found.');
});

app.use(express.static('.')); //Static files serving home directory
app.listen(8080);

///////////////////////////////////////////////////////////////////////////
var mongo = require('mongodb').MongoClient;

//});

mongo.connect('mongodb://localhost:27017/poolDb' , function(err, db) {
  if (err) {
    throw err
  } else {
    console.log('\n\n\n\nCONNECTED TO THE POOL DATABASE\n\n');
  }

  var userCollection = db.collection('users');
  db.collection('users', function(err, data){
    err ? console.log('\nCOLLECTION READING ERROR\n\n', err) : null;
  });

  var result = userCollection.find().toArray(function(err, documents) {
    if (err) console.log('\nCOLLECTION FIND ERROR:\n\n', err);
    console.log('\nCOLLECTION DOCUMENTS:\n\n', documents);
    db.close();
  });

});
