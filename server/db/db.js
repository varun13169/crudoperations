var MongoClient = require('mongodb').MongoClient;
// var url 		= 'mongodb://172.16.201.29:27017/';

var url 		= 'mongodb://localhost:27017/';
var dbName		= 'UserDB';

MongoClient.connect(url, function(err, db) {
  if(err) throw err;
  module.exports.db =  db.db(dbName);
});

