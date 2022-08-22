
const { post } = require('request');
let request=require('request')
const random = require("randomstring");
const supertest = require('supertest');


module.exports.signup = function () {
    let phoneNo = '10000' + random.generate({ length: 5, charset: 'numeric' });

    return new Promise(function (resolve, reject) {
    
      const linkRequest = {
        "name":"vijay",
        "phoneNumber":phoneNo,
        "phoneNumberCode":"+91"
      }
      const requestHeaders = {
        'Content-Type': 'application/json'
    
      }
      request({
        uri: 'https://stagecoreapi.wvlnth.net/users',
        method: 'POST',
        body:JSON.stringify(linkRequest),
        headers: requestHeaders
      }, (err, response, body) => {
        if (err) {
          console.log(err)
        } else {
          const link = JSON.parse(body);
          console.log(link)
          resolve(link)
        }
      });
    });
    
  }

//   module.exports.signup = async function (app) {
//     let phoneNo = '10000' + random.generate({ length: 5, charset: 'numeric' });

//     let data={
//         "name":"vijay",
//         "phoneNumber":phoneNo,
//         "phoneNumberCode":"+91"
//     }
     
//     let url = `https://stagecoreapi.wvlnth.net/users`

//     const response = await supertest(app)
//                 .post(url)
//                 .send(data)
//                 .accept('Content-Type', 'application/json');

//                 console.log(response)

// }

  