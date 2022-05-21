var mongodb = require('mongodb');
var MongoClient= mongodb.MongoClient;
const mongoURI = "mongodb+srv://maryamzafar29:swihogoc@1122-ai.t9upk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
var db;
var error;
var waiting = []; // Callbacks waiting for the connection to be made

MongoClient.connect(mongoURI,function(err,database){
  error = err;
  db = database;

  waiting.forEach(function(callback) {
    callback(err, database);
  });
});

module.exports = function(callback) {
  if (db || error) {
    callback(error, db);
  } else {
    waiting.push(callback);
  }
}