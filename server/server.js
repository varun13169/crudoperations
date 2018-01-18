var express 			= require('express');
var bodyParser 			= require('body-parser');
var MongoClient    = require('mongodb').MongoClient;
var database     = require('./db/db');

var url = "mongodb://localhost:27017/mydb";

var app 				  = express();
var port          = 5000;
var userList =[]


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8081');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


app.post('/create', function (req, res) {
  var newUser = { name: req.body.name,
                password: req.body.password };

  database.db.collection("Users").insertOne(newUser, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  });
  res.send("1 document inserted");
});



app.post('/update', function (req,res) {

  var userName = {name: req.body.name}

  var updatedUser = { $set: { password: req.body.password }};

  database.db.collection("Users").updateOne(userName, updatedUser, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
  });

  res.send('User Updated')
});



app.post('/delete', function (req,res) {
  var deleteUser = { name: req.body.name,
                    password: req.body.password };

  database.db.collection("Users").deleteOne(deleteUser, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
  });

  res.send('User deleted')

});



app.get('/read', function (req,res) {

  database.db.collection("Users").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });

})



app.listen(port, () => console.log(`Server listening on port ${port}!`))
