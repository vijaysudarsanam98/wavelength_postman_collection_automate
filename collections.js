const fetch = require('node-fetch');

const { post } = require('request');
let request = require('request')
const random = require("randomstring");

const phoneNo = '10000' + random.generate({ length: 5, charset: 'numeric' });

let payload = {
  phoneNumber: phoneNo,
  phoneNumberCode: "+91",
}



let contacts=[{"name":"Test1", "phoneNumber":"1000090002", "phoneNumberCode":"+91"},{"name":"Test1", "phoneNumber":"1000090002", "phoneNumberCode":"+91"},{"name":"Test1", "phoneNumber":"1000090003", "phoneNumberCode":"+91"},{"name":"Test1", "phoneNumber":"1000090004", "phoneNumberCode":"+91"},{"name":"Test1", "phoneNumber":"1000090005", "phoneNumberCode":"+91"},{"name":"Test1", "phoneNumber":"1000090006", "phoneNumberCode":"+91"},{"name":"Test1", "phoneNumber":"1000090007", "phoneNumberCode":"+91"}]

JSON.parse(JSON.stringify(contacts))

// let newmessage=[
//   {
//     "source": {
//       "id": null,
//       "name": "Thestatesman.com"
//     },
//     "author": "SNS Web",
//     "title": "Olympics in 2021 unrealistic unless COVID-19 vaccine found - The Statesman",
//     "description": "Olympics is not the only sporting tournament to be pushed back because of the dreaded coronavirus pandemic and high-profile tournaments including the cash-rich Indian Premier League (IPL) have been affected.",
//     "url": "https://www.thestatesman.com/sports/olympics-in-2021-unrealistic-unless-covid-19-vaccine-found1502879079-1502879079.html",
//     "urlToImage": "https://www.thestatesman.com/wp-content/uploads/2020/03/Tokyo2020.jpg",
//     "publishedAt": "2020-04-19T14:41:24Z",
//     "content": "Holding the Tokyo Olympics any time before a vaccine is found will be “very unrealistic,” according to a leading global health expert. Professor Devi Sridhar said that the development of the vaccine will be key to when the Olympics can be held.\r\nSridhar, howe… [+1886 chars]"
//   }];
//   JSON.parse(JSON.stringify(newmessage))
// let array=[]

// array.push(contacts)
module.exports.signup = async function () {
  let payload = {
    phoneNumber: phoneNo,
    phoneNumberCode: "+91",
  }
  payload["name"] = "vijay"

  const uri = 'https://stagecoreapi.wvlnth.net/users'
  const res = await fetch(uri, { method: 'POST', body: JSON.stringify(payload) , headers: { 'Content-Type': 'application/json' } });
  console.log(payload)
  const data = await res.json();
  return data

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

module.exports.inviteContacts = async function (token,userId) {
  const uri = `https://stagecoreapi.wvlnth.net/contacts/users/${userId}/invite`
 // console.log(contacts)
  
    const requestHeaders={
      'Authorization': "Bearer"+ " " + token,

      'Content-Type': 'application/json'
    }

    console.log(contacts)
    console.log(requestHeaders)
  

  const res = await fetch(uri, { 
    method: 'POST', 
    body:JSON.stringify(contacts),
    headers: requestHeaders });

    
   // console.log(contacts)
  const data = await res.json();
  return data

}

module.exports.createContacts = async function (token,userId) {
  const uri = `https://stagecoreapi.wvlnth.net/contacts/users/${userId}`
 // console.log(contacts)
  
    const requestHeaders={
      'Authorization': "Bearer"+ " " + token,

      'Content-Type': 'application/json'
    }

    console.log(contacts)
    console.log(requestHeaders)
  

  const res = await fetch(uri, { 
    method: 'POST', 
    body:JSON.stringify(contacts),
    headers: requestHeaders });

    
   // console.log(contacts)
  const data = await res.json();
  return data

}
module.exports.getContacts = async function (token,userId) {
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
  let c1=data.objects.contacts[0]
  let c2=data.objects.contacts[1]
  let c3=data.objects.contacts[2]
  let c4=data.objects.contacts[3]
  let c5=data.objects.contacts[4]
  let c6=data.objects.contacts[5]

  console.log(c1)
  console.log(c2)
  console.log(c3)
  console.log(c4)
  console.log(c5)
  console.log(c6)
  console.log(profile)




  return {
    profile,
    c1,
    c2,
    c3,
    c4,
    c5,
    c6
  }

}
module.exports.createMessages = async function (profileUser,contactUser,token) {
  const uri='https://stagemessagesapi.wvlnth.net/messages'
  const url='https://api.coindesk.com/v1/bpi/currentprice.json'
  console.log(contactUser)

  console.log(uri)
 // console.log(contacts)
  
    const requestHeaders={
      'Authorization': "Bearer"+ " " + token,

      'Content-Type': 'application/json'
    }
   const getmessage = await fetch(url,{
      method: 'GET',
      headers:  { 'Content-Type': 'application/json' },
       })

       const value = await getmessage.text();
       //let x = getmessage.objects.articles
    
    let msgBody={
      fromUserId: profileUser, toUserId: contactUser, 
      message:value
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