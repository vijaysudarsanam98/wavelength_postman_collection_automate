const express = require('express');
const port = process.env.PORT || 3000
const collection=require('./collections')


const bodyParser = require('body-parser');
const app = express();
const { json } = require('body-parser');



app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

//default GET request
app.get(['/', '/health'], function (req, res) {
    res.send('collection is up');
    

});


  collection.signup()



app.listen(port, async function () {
    console.log(`postmancollection is up ${process.env.NODE_ENV}`);

  





   

});



