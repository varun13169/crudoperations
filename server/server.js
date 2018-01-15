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
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

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


//
// app.post('/create', function (req,res) {
//   console.log(req.body);
//   // //
//   // var myobj = {
//   //   name: req.body.name,
//   //   password: req.body.password };
//
//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var myobj = { name: req.body.name,
//         password: req.body.password };
//     db.collection("customers").insertOne(myobj, function(err, res) {
//       if (err) throw err;
//       console.log("1 document inserted");
//       db.close();
//     });
//   });
//
//   // database.db.collection("users").insertOne(myobj, function(err, res) {
//   //   if (err) throw err;
//   //   console.log("1 document inserted");
//   // });
//
//
//   // userList.push({
//   //   "name"      : req.body.name,
//   //   "password"  : req.body.password
//   // });
//   res.send('User Added')
// })
//



app.post('/update', function (req,res) {

  var userName = {name: req.body.name}

  var updatedUser = { $set: { password: req.body.password }};

  database.db.collection("Users").updateOne(userName, updatedUser, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
  });

  // MongoClient.connect(url, function(err, db) {
  //   if (err) throw err;
  //   var dbo = db.db("mydb");
  //   var query = { name: req.body.name };
  //   dbo.collection("customers").find(query).toArray(function(err, result) {
  //     if (err) throw err;
  //     console.log(result);
  //     if(result!=null){
  //       newvalues = { name: req.body.name,
  //         password: req.body.password };
  //       db.collection("customers").updateOne(query, newvalues, function(err, res) {
  //         if (err) throw err;
  //         console.log("1 document updated");
  //         db.close();
  //       });
  //     }
  //     else{
  //       res.send("User not Found")
  //     }
  //     db.close();
  //   });
  // });

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

  // MongoClient.connect(url, function(err, db) {
  //   if (err) throw err;
  //   var dbo = db.db("mydb");
  //   var myquery = { name: req.body.name,
  //     password: req.body.password };
  //   dbo.collection("customers").deleteOne(myquery, function(err, obj) {
  //     if (err) throw err;
  //     console.log("1 document deleted");
  //     db.close();
  //   });
  // });

});



app.get('/read', function (req,res) {

  database.db.collection("Users").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });

  // res.send('User read')

  // MongoClient.connect(url, function(err, db) {
  //   if (err) throw err;
  //   db.collection("customers").find({}).toArray(function(err, result) {
  //     if (err) throw err;
  //     console.log(result);
  //     db.close();
  //     res.send(result);
  //   });
  // });
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
