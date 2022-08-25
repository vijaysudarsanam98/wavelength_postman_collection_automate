const express = require('express');
const port = process.env.PORT || 3000
const collection=require('./collections')


const bodyParser = require('body-parser');
const app = express();
const { json } = require('body-parser');
const connection = require('./sqlconnection')
const model=require('./model')


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
 
 let verificationCodeResponse = await collection.verificationCode()
 console.log(verificationCodeResponse)
 let login=await collection.login()
 let userId=login.userId
 let token=login.token
 
console.log(userId)
console.log(token)
let newuser = await connection.x()
console.log("newuser" + newuser)
let inviteContacts = await collection.inviteContacts(token,userId)
 console.log(inviteContacts)
 let createContacts=await collection.createContacts(token,userId)
 console.log(createContacts)
 let getContacts=await collection.getContacts(token,userId)
 let profileUser=getContacts.profile
 let contact1=getContacts.c1.userId
 let contact2=getContacts.c2.userId
 let contact3=getContacts.c3.userId
 let contact4=getContacts.c4.userId
 let contact5=getContacts.c5.userId
 let contact6=getContacts.c6.userId
 
let messageApi=await collection.universityNames()
console.log(messageApi)

 let messageToContact1=await collection.createMessages(profileUser,contact1,token)
 let messageToContact2=await collection.createMessages(profileUser,contact2,token)
 let messageToContact3=await collection.createMessages(profileUser,contact3,token)
 let messageToContact4=await collection.createMessages(profileUser,contact4,token)
 let messageToContact5=await collection.createMessages(profileUser,contact5,token)
 let messageToContact6=await collection.createMessages(profileUser,contact6,token)


 console.log(messageToContact1)
 console.log(messageToContact2)
 console.log(messageToContact3)
 console.log(messageToContact4)
 console.log(messageToContact5)
 console.log(messageToContact6)

const newUsers=await model.getNewUsers()
console.log(newUsers)

    console.log(`postmancollection is up ${process.env.NODE_ENV}`);

  





   

});