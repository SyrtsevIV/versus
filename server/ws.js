const WebSocket = require('ws');

const wsServer = new WebSocket.Server({ port: 1234 });
module.exports = wsServer;
