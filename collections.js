const fetch = require('node-fetch');

const { post } = require('request');
let request = require('request')
const random = require("randomstring");
//newUsers=require('./index')


let payload = {
  phoneNumber: "1000000001",
  phoneNumberCode: "+91",
}









module.exports.verificationCode = async function () {
  const uri = 'https://stagecoreapi.wvlnth.net/users/verification_code'
  payload["deviceId"] = "1234567890123456"
  delete payload.name
  console.log(payload)

  const res = await fetch(uri, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' }
  });
  const data = await res.json();
  return data

}
module.exports.login = async function () {
  const uri = 'https://stagecoreapi.wvlnth.net/users/login'
  payload["deviceId"] = "1234567890123456",
    payload["verificationCode"] = "10000"
  console.log(payload)

  const res = await fetch(uri, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' }
  });
  console.log(res)
  const data = await res.json()
  let userId = data.objects.userId
  console.log(userId)
  let token = data.objects.token
  console.log(token)
  return {
    userId,
    token
  }

}

module.exports.inviteContacts = async function (token, userId, newUsers) {
  const uri = `https://stagecoreapi.wvlnth.net/contacts/users/${userId}/invite`

  const requestHeaders = {
    'Authorization': "Bearer" + " " + token,

    'Content-Type': 'application/json'
  }


  console.log(requestHeaders)


  const res = await fetch(uri, {
    method: 'POST',
    body: JSON.stringify(newUsers),
    headers: requestHeaders
  });


  const data = await res.text();
  console.log("inivte data" + data)
  return data

}

module.exports.createContacts = async function (token, newUsers, userId) {
  const uri = `https://stagecoreapi.wvlnth.net/contacts/users/${userId}`

  JSON.parse(JSON.stringify(newUsers))

  const requestHeaders = {
    'Authorization': "Bearer" + " " + token,

    'Content-Type': 'application/json'
  }

  console.log(newUsers)
  console.log(requestHeaders)


  const res = await fetch(uri, {
    method: 'POST',
    body: JSON.stringify(newUsers),
    headers: requestHeaders
  });


  // console.log(contacts)
  const data = await res.json();
  return data

}
module.exports.getContacts = async function (token, userId) {
  const uri = `https://stagemessagesapi.wvlnth.net/users/${userId}/datasync`

  const requestHeaders = {
    'Authorization': "Bearer" + " " + token,

    'Content-Type': 'application/json'
  }




  const res = await fetch(uri, {
    method: 'GET',
    headers: requestHeaders
  });


  // console.log(contacts)
  const data = await res.json();
  console.log(data)

  let contact = data.objects.contacts
  console.log(contact)

  let contactUserIds = []

  for (const member of contact) {
    console.log(member.userId)
    contactUserIds.push(member.userId)

  }

  return contactUserIds


}

module.exports.healthNews = async function () {
  const uri = 'https://saurav.tech/NewsAPI/top-headlines/category/health/in.json'

  console.log(uri)





  const res = await fetch(uri, {
    method: 'GET'
  });


  const data = await res.json();
  const string = JSON.stringify(data);
  const strreplace = string.replaceAll('"', '',);
  const slicemsg = strreplace.replace(/[{()}]/g, '');
  var msg = slicemsg.slice(87, 127)
  console.log(msg)
  return msg
}


module.exports.createMessages = async function (profileUser, contactUser, token, msg) {
  const uri = 'https://stagemessagesapi.wvlnth.net/messages'
  console.log(contactUser)

  console.log(uri)

  const requestHeaders = {
    'Authorization': "Bearer" + " " + token,

    'Content-Type': 'application/json'
  }



    for (const member of contactUser) {
      console.log(member)

      let msgBody = {
        fromUserId: profileUser, toUserId: member,
        message: msg
      }
      console.log(msgBody)

      const res = await fetch(uri, {
        method: 'POST',
        body: JSON.stringify(msgBody),
        headers: requestHeaders
      });
  
      console.log(res)
      const data = await res.text();
      console.log(data)

     
    }

    

  



}

