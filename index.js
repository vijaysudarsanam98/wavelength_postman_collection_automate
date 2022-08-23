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


    


  



app.listen(port, async function () {
 let signupResponse= await collection.signup()
 console.log(signupResponse)
 let verificationCodeResponse = await collection.verificationCode()
 console.log(verificationCodeResponse)
 let login=await collection.login()
 console.log("login" + login)
 let createcontacts=await collection.CreateContacts()
 console.log("createcontacts" + createcontacts)

    console.log(`postmancollection is up ${process.env.NODE_ENV}`);

  





   

});



