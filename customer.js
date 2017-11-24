var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
var db;

MongoClient.connect(url, function(err, database) {
    if (err) throw err;
    db = database;
    console.log("connected to " + url);
});

function findAll(req, res){
    //Get data from mongoDB
        var query = {};
        db.collection("customers").find(query).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          res.json(result);
          db.close();
        });
}

module.exports = {
    findAllL: findAll
};