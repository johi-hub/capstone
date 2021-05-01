import socketIOClient from 'socket.io-client';

const isDev = process.env.NODE_ENV === 'development';
const ENDPOINT = 'http://127.0.0.1:8080';

const socketIo = isDev ? socketIOClient(ENDPOINT) : socketIOClient();
socketIo.on('connection',()=>{console.log("im connected with the server")})

export default socketIo;