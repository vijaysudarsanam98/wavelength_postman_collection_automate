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
    headers: { 'Content-Type': 'application/json' } });
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
    headers: { 'Content-Type': 'application/json' } });
    console.log(res)
  const data = await res.json()
 // console.log(data.objects.userId)
 // const parse=JSON.parse(data[1])
  let userId=data.objects.userId
  console.log(userId)
  let token=data.objects.token
  console.log(token)
  return {
    userId,
    token
  }

}

module.exports.inviteContacts = async function (token,userId,newUsers) {
  const uri = `https://stagecoreapi.wvlnth.net/contacts/users/${userId}/invite`
 // console.log(contacts)
  
    const requestHeaders={
      'Authorization': "Bearer"+ " " + token,

      'Content-Type': 'application/json'
    }

    
    console.log(requestHeaders)
  

  const res = await fetch(uri, { 
    method: 'POST', 
    body:JSON.stringify(newUsers),
    headers: requestHeaders });

    
   // console.log(contacts)
  const data = await res.text();
  console.log("inivte data"+data)
  return data

}

module.exports.createContacts = async function (token,newUsers,userId) {
  const uri = `https://stagecoreapi.wvlnth.net/contacts/users/${userId}`
 // console.log(contacts)
  
 JSON.parse(JSON.stringify(newUsers))

    const requestHeaders={
      'Authorization': "Bearer"+ " " + token,

      'Content-Type': 'application/json'
    }

    console.log(newUsers)
    console.log(requestHeaders)
  

  const res = await fetch(uri, { 
    method: 'POST', 
    body:JSON.stringify(newUsers),
    headers: requestHeaders });

    
   // console.log(contacts)
  const data = await res.json();
  return data

}
module.exports.getContacts = async function (token,userId,contacts) {
  const uri = `https://stagemessagesapi.wvlnth.net/users/${userId}/datasync`
 // console.log(contacts)
  
    const requestHeaders={
      'Authorization': "Bearer"+ " " + token,

      'Content-Type': 'application/json'
    }

    console.log(contacts)
    console.log(requestHeaders)
  

  const res = await fetch(uri, { 
    method: 'GET', 
    headers: requestHeaders });

    
   // console.log(contacts)
  const data = await res.json();

  let profile=data.objects.profile.userId
  console.log(profile)
  // let c1=data.objects.contacts[0]
  // let c2=data.objects.contacts[1]
  // let c3=data.objects.contacts[2]
  // let c4=data.objects.contacts[3]
  // let c5=data.objects.contacts[4]
  // let c6=data.objects.contacts[5]

  // console.log(c1)
  // console.log(c2)
  // console.log(c3)
  // console.log(c4)
  // console.log(c5)
  // console.log(c6)
  // console.log(profile)




  // return {
  //   profile,
  //   c1,
  //   c2,
  //   c3,
  //   c4,
  //   c5,
  //   c6
  // }

  return profile

  
}

module.exports.universityNames = async function () {
  const uri='https://api.coindesk.com/v1/bpi/currentprice.json'

  console.log(uri)
 // console.log(contacts)
  
    

    

  const res = await fetch(uri, { 
    method: 'GET' });

   
  const msg1 = await res.json();
 const x =  JSON.stringify(msg1);
 const y = x.replaceAll('"', '',);
 const msg = y.replace(/[{()}]/g, '');
  console.log(msg)
  return msg
}

//const x = msg;

module.exports.createMessages = async function (profileUser,contactUser,token,msg) {
  const uri='https://stagemessagesapi.wvlnth.net/messages'
  console.log(contactUser)

  console.log(uri)
 // console.log(contacts)
  
    const requestHeaders={
      'Authorization': "Bearer"+ " " + token,

      'Content-Type': 'application/json'
    }

    let msgBody={
      fromUserId: profileUser, toUserId: contactUser, 
message: msg
    }
  console.log(msgBody)

  const res = await fetch(uri, { 
    method: 'POST', 
    body:JSON.stringify(msgBody),
    headers: requestHeaders });

    console.log(res)
   // console.log(contacts)
  const data = await res.text();
  return data

}

