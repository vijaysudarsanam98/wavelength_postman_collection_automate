const express = require('express');
const port = process.env.PORT || 3000
const collection = require('./collections')


const bodyParser = require('body-parser');
const app = express();
const { json } = require('body-parser');
//const connection = require('./sqlconnection')
const model = require('./model')


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

  const newUsers = await model.getNewUsers()

  console.log(newUsers)




  let verificationCodeResponse = await collection.verificationCode()
  console.log(verificationCodeResponse)
  let login = await collection.login()
  let userId = login.userId
  let token = login.token

  console.log(userId)
  console.log(token)

  let inviteContacts = await collection.inviteContacts(token, userId, newUsers)
  console.log("invite" + inviteContacts)
  let createContacts = await collection.createContacts(token, newUsers, userId)
  console.log(createContacts)
  let getContacts = await collection.getContacts(token, userId)
  console.log(getContacts)



  let messageApi = await collection.universityNames()
  console.log(messageApi)

  let messageToContact = await collection.createMessages(userId, getContacts, token, messageApi)





  console.log(`postmancollection is up ${process.env.NODE_ENV}`);









});