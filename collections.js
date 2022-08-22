const fetch = require('node-fetch');

const { post } = require('request');
let request=require('request')
const random = require("randomstring");


module.exports.signup = async function () {
    let phoneNo = '10000' + random.generate({ length: 5, charset: 'numeric' });
    const uri = 'https://stagecoreapi.wvlnth.net/users'

    
      
      let body={
                "name":"vijay",
                "phoneNumber":phoneNo,
                "phoneNumberCode":"+91"
            }
      const res = await fetch(uri,{method:'POST',body:JSON.stringify(body),headers: { 'Content-Type': 'application/json' }});
  const data = await res.json();
  console.log(data)
  return data
    
}

