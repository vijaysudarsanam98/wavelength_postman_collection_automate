const WebSocket = require('ws');
const collections = require('./collections')


const urls = ['wss://stagemessagesapi.wvlnth.net/socket.io/?EIO=4&transport=websocket'];
let connections = ['hi'];

urls.map( function(url) {
  const ws = new WebSocket(url);

  ws.on('open', function open() {
    ws.send('hi');
  });

  ws.on('message', function incoming(data) {
    
    console.log(data);
  });
  const buf = Buffer.from(url.incoming());
  console.log(buf.toString(url.incoming()))


  connections.push(ws);
});