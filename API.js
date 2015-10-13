var mongo = require('mongodb').MongoClient;

//mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
//  if (err) throw err;
//  var collection = db.collection('docs');
//  var newDoc = {
//    firstName: process.argv[2],
//    lastName: process.argv[3]
//  };
//  collection.insert(newDoc, function(err, data){
//    if (err) throw err;
//    console.log(JSON.stringify(newDoc));
//    db.close();
//  });
//});

mongo.connect('mongodb://localhost:27017/poolDb' , function(err, db) {
  if (err) {
    throw err
  } else {
    console.log('\n\n\n\nCONNECTED TO THE POOL DATABASE\n\n');
  }

  //db.createCollection('users', function(err, data){
  //  err ? console.log('\nCOLLECTION CREATION ERROR!\n\n', err)
  //    : console.log('\nCOLLECTION CREATED\n\n', data);
  //});

  var userCollection = db.collection('users');
  db.collection('users', function(err, data){
    err ? console.log('\nCOLLECTION READING ERROR\n\n', err) : null;
  });

  //var user1 = {
  //  name: 'Me',
  //  age: '27',
  //  sex: 'male'
  //};

  //userCollection.insert(user1, function(err, data){
  //  err ? console.log('\nDOCUMENT INSERTION ERROR!\n\n', err)
  //    : console.log('\nDOCUMENT INSERTED\n\n', data);
  //  db.close();
  //});

  var result = userCollection.find({}).toArray(function(err, documents) {
    if (err) console.log('\nCOLLECTION FIND ERROR:\n\n', err);
    console.log('\nCOLLECTION DOCUMENTS:\n\n', documents);
    db.close();
  });

  //console.log('\n\n\n\n\nHERE I AM', userCollection.listIndexes());

  //console.log(userCollection);

  //db.close();

  //db.close();
  //var collection = db.collection('prices');
  //
  //
  //collection.aggregate([
  //  { $match: { size: process.argv[2] }},
  //  { $group: {
  //    _id: 'total',
  //    average: {$avg: '$price'},
  //    total: {
  //      $sum: '$price'
  //    }
  //  }}
  //]).toArray(function(err, results) {
  //  if (err) throw err;
  //  if (!results.length) {
  //    throw new Error('No results found');
  //  }
  //  result = results[0].average;
  //  console.log(Number(result).toFixed(2));
  //  db.close();
  //})
});
