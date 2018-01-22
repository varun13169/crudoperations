var express = require('express');
var bodyParser = require('body-parser');
// var MongoClient    = require('mongodb').MongoClient;
var Promise = require('promise');
var database = require('./db/db');

var app = express();
var port = 5000;
var vuePort = 8080;
var userList = []


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', `http://localhost:${vuePort}`);

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
  var userGuid = guid();
  var newUser = {
    id: userGuid,
    name: req.body.name,
    password: req.body.password,
  };

  database.db.collection("Users").insertOne(newUser, function (err, res) {
    if (err) throw err;
    console.log("\tuser inserted");
  });


  var salaries = [{
    id: guid(),
    salary: req.body.salary1,
    userid: userGuid
  },
    {
      id: guid(),
      salary: req.body.salary2,
      userid: userGuid
    }];

  database.db.collection("salary").insertMany(salaries, function (err, res) {
    if (err) throw err;
    console.log("\tsalary inserted");
  });
  res.send("\tdocument inserted");
});


app.post('/update', function (req, res) {

  var updateUser = {
    name: req.body.name,
    password: req.body.password
  }

  // var updatedUser = { $set: { password: req.body.password }};
  // var user ={}
  // var userid;

  database.db.collection("Users").find(updateUser).toArray(function (err, result) {
    if (err) throw err;

    database.db.collection("salary").deleteMany({userid: result[0].id}, function (err, obj) {
      if (err) throw err;
      console.log(obj.result);
    });

    var salaries = [{
      id: guid(),
      salary: req.body.salary1,
      userid: result[0].id
    },
      {
        id: guid(),
        salary: req.body.salary2,
        userid: result[0].id
      }];

    database.db.collection("salary").insertMany(salaries, function (err, res) {
      if (err) throw err;
      console.log("\tsalary updated");
    });



  });

  res.send('User Updated')
});


app.post('/delete', function (req, res) {
  var deleteUser = {
    name: req.body.name,
    password: req.body.password
  };

  database.db.collection("Users").find(deleteUser).toArray(function (err, result) {
    if (err) throw err;
    console.log(result[0].id + "asd");
    database.db.collection("salary").deleteMany({userid: result[0].id}, function (err, obj) {
      if (err) throw err;
      console.log(obj.result);
    });

  });

  database.db.collection("Users").deleteOne(deleteUser, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
  });

  res.send('User deleted')

});






app.get('/read', function (req, res) {

  let data = [];
  console.log('\n\n');
  accessUserDb(function(result){
    //data = result;
    //console.log(data);
    res.send(result);
  });
})


var accessSalaryDb = function (userid, callback) {
  database.db.collection("salary").find({userid: userid}).toArray(function (err, obj) {
    callback(err, {
      salary1: obj[0].salary,
      salary2: obj[1].salary
    });
  });
}


var accessUserDb = function (callback){
  var data = [];
  database.db.collection("Users").find({}).toArray(function (err, result) {
    if (err) throw err;
    console.log(result.length);

    for (let i = 0; i < result.length; i++){
      accessSalaryDb(result[i].id, function (err, res) {
        if(err) throw err
        console.log(`${i} and ${data.length}`);

        data.push({
          name: result[i].name,
          password: result[i].password,
          salary1: res.salary1,
          salary2: res.salary2
        });
        if (data.length == result.length) {
          callback(data);
        }
      });
    }

  });
}

port = 5000;
app.listen(port, () => console.log(`Server listening on port ${port}!`))


//
guid = function () {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}
//
