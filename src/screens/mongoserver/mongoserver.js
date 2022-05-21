// var db = require('./database.js');
let db;
var mongodb = require('mongodb');
var MongoClient= mongodb.MongoClient;
const mongoURI = "mongodb+srv://maryamzafar29:swihogoc@1122-ai.t9upk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const express = require('express');
const app = express();
var location;
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
app.use(bodyParser.json());
// mongoose.connect(mongoURI, {
//     useNewUrlParser : true,
// })
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// mongoose.connection.on('connected', ()=>{
//     console.log('Connected to Mongo Database!');
// })
// //catch error if mongodb is not connected
// mongoose.connection.on('error', (err)=>{
//     console.error("Error connecting to Mongo", err)
// })
MongoClient.connect(mongoURI,function(err,database){
    if (err) { throw err; }
    db = database.db("myFirstDatabase");
  
    // waiting.forEach(function(callback) {
    //   callback(err, database);
    // });
  });
  

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});
app.post('/send', (req, res) => {
    
    console.log(req.body);
    db.collection('locations').insertOne(req.body, (err, data) => {
        if (err) { return console.log(err); }
        console.log("data saved");
        // res.send(('saved to db: ' + data));
    });

});
app.post('/session',async (req, res) => {
    console.log(req.body);
    
    const filteredCase = await db.collection('test').find({ "_id": req.body._id });
    
    // console.log(await filteredCase.count());
    if ((await filteredCase.count()) === 0) {
         await db.collection('test').insertOne(req.body, (err, data) => {
            if (err) { return console.log(err); }
            console.log("data saved in test");
            // res.send(('saved to db: ' + data));
        });
    }
    else {
        // console.log("Case is already registered");
        await db.collection('test').updateOne({ _id: req.body._id }, { $set: { phoneNumber: req.body.phoneNumber } } );
        
    }
    // db.collection('test').insertOne(req.body, (err, data) => {
    //     if (err) { return console.log(err); }
    //     console.log("data saved in cases");
    //     // res.send(('saved to db: ' + data));
    // });
    
    
    

});
app.listen(3001, ()=>{
    console.log("Listening on port 3001");
});