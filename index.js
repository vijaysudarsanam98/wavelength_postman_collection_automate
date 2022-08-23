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
 let userId=login.userId
 let token=login.token
console.log(userId)
console.log(token)
let createContacts = await collection.createContacts(token,userId)
 console.log(createContacts)
    console.log(`postmancollection is up ${process.env.NODE_ENV}`);

  





   

});