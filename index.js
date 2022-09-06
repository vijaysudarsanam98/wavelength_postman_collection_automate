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
  let messageApi = await collection.healthNews()
  console.log(messageApi)
  let messageToContact = await collection.createMessages(userId, getContacts, token, messageApi)
  console.log('hi')
  const WebSocket = require('ws');
const collections = require('./collections')


const urls = ['wss://stagemessagesapi.wvlnth.net/socket.io/?EIO=4&transport=websocket'];
let connections = [];

urls.map( function(urls) {
  const ws = new WebSocket(urls);

  ws.on('open', function open() {
    ws.send('hi');
  });

  ws.on('message', function incoming(data) {
    
    console.log(data);
  });
  // const buf = Buffer.from(url.incoming());
  // console.log(buf.toString(url.incoming()))


  connections.push(ws);
});





  console.log(`postmancollection is up ${process.env.NODE_ENV}`);









});