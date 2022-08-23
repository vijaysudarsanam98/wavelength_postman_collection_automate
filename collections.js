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
  console.log(data)
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
  console.log(body)
  console.log(res)
  const data = await res.json();
  console.log(data)
  return data

}