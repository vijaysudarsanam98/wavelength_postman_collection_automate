const fetch = require('node-fetch');

const { post } = require('request');
let request = require('request')
const random = require("randomstring");

let phoneNo = '10000' + random.generate({ length: 5, charset: 'numeric' });

let body = {
  phoneNumber: phoneNo,
  phoneNumberCode: "+91",
}

module.exports.signup = async function () {
  body["name"] = "vijay"

  const uri = 'https://stagecoreapi.wvlnth.net/users'
  const res = await fetch(uri, { method: 'POST', body: JSON.stringify(body) , headers: { 'Content-Type': 'application/json' } });
  console.log(body)
  const data = await res.json();
  return data

}

module.exports.verificationCode = async function () {
  const uri = 'https://stagecoreapi.wvlnth.net/users/verification_code'
  body["deviceId"] = "1234567890123456"
  delete body.name
  console.log(body)

  const res = await fetch(uri, { 
    method: 'POST', 
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' } });
  const data = await res.json();
  return data

}
module.exports.login = async function () {
  const uri = 'https://stagecoreapi.wvlnth.net/users/login'
  body["verificationCode"] = "10000"
  console.log(body)

  const res = await fetch(uri, { 
    method: 'POST', 
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' } });
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

module.exports.createContacts = async function () {
  const uri = 'https://stagecoreapi.wvlnth.net/users/userId'
  let contacts = [ body1 = {"name":"Test1", "phoneNumber":"1000090002", "phoneNumberCode":"+91"},
   body2 =  {"name":"Test", "phoneNumber":"1000090002", "phoneNumberCode":"+91"},
   body3 ={"name":"Test1", "phoneNumber":"1000090003", "phoneNumberCode":"+91"},
   body4 ={"name":"Test1", "phoneNumber":"1000090004", "phoneNumberCode":"+91"},
   body5= {"name":"Test1", "phoneNumber":"1000090005", "phoneNumberCode":"+91"},
   body6={"name":"Test1", "phoneNumber":"1000090006", "phoneNumberCode":"+91"},
   body7={"name":"Test1", "phoneNumber":"1000090007", "phoneNumberCode":"+91"}]
    
  
  
  console.log(contacts)

  const res = await fetch(uri, { 
    method: 'POST', 
    body: JSON.stringify(contacts),
    headers: { 'Content-Type': 'application/json' } });
  const data = await res.json();
  return data

}


