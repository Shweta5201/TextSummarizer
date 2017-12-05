var express = require('express');
var mysql = require('mysql');
var app = express();
//Anitha changes begin here
var sqlite3 = require('sqlite3').verbose(); //ANitha changes'
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.get("/getAllItems",function(req,res){
var db = new sqlite3.Database('./db/Summaries.db');
console.log('Start the database connection.');
// open the database
 db.all("SELECT rowid,actual_text,summary FROM SUMMARY", function(err, rows){
       if (err) {
            console.error(err.message);
            res.send();
            return;
          }
        console.log(rows);
        res.json(rows);
    });
    db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Close the database connection.');
  });


});



//Aniha changes end

var dbConnection = mysql.createPool({
    connectionLimit: 50,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'shantanu1'
});

// dbConnection.connect(function(error){
//     if(!!error){
//         console.log("Failed to connect to the database");
//     }
//     else{
//         console.log("Connected to the database");
//     }
// });

/*Anitha commenting
app.get("/getAllItems",function(req,res){

    dbConnection.getConnection(function(error,tempConnection){

        if(!!error){
            tempConnection.release();
            console.log("Failed to get a connection");
        }else{
            tempConnection.query("SELECT * from items",function(error,rows,fields){
                tempConnection.release();
                if(!!error){
                    console.log("Failed to get the records");
                }
                else{
                    res.json(rows);
                }

            });
        }

    });
});*/

app.listen(1337);