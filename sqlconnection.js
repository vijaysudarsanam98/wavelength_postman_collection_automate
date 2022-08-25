// Importing MySQL module
const { query } = require('express');
const {Client} = require('pg');


// Creating connection
const client = new Client({
host: "wa-stage-metadata-db.cluster-cjaaguhfaelo.us-east-1.rds.amazonaws.com",
port : "5656",
user: "admin_user",
password: "Getwavelength1",
database: "wa_main"
});

client.connect();


   module.exports.x = async function(){
    client.query(`select * from users where created_at>=current_date`,(err,res)=>{
    if(!err){
        console.log(res.rows);
    }
    else {
        console.log(err.message);
    }
    client.end();
})
   }

// const xy= x.id;
// console.log(xy)