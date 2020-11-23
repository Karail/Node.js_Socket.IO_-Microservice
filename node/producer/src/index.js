const amqp = require('amqplib');

async function start() {
  const connection = await amqp.connect(process.env.MESSAGE_QUEUE)

  const channel = await connection.createChannel();
 
  const queue = 'hello';
  const msg = 'Hello World!';

  channel.assertQueue(queue, {
    durable: false
  });
  const res = channel.sendToQueue(queue, Buffer.from(msg));

  console.log(res, " [x] Sent %s", msg);

  connection.close(); 
} 
setTimeout(() => {
  start()   
}, 1000) 

  
// import dotenv from 'dotenv';
// import { createServer } from "http";
// import { Server } from "socket.io";
// dotenv.config();

// const httpServer = createServer();
// const io = new Server(httpServer, {
//     cors: {
//         origin: (_, cb) => cb(null, true),
//         credentials: true,
//         preflightContinue: true,
//         exposedHeaders: [
//             'Access-Control-Allow-Headers',
//             'Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept',
//             'X-Password-Expired',
//         ],
//         optionsSuccessStatus: 200,
//     }
// });

// io.on('connection', async (socket) => {

//     const response =  await fetch('');
//     const channels = await response.json();

//     channels.forEach((channel) => {
//         socket.join(`channel:${channel}`);
//     });

//     socket.on('ROOM:JOIN', ({ roomId }) => {
//         socket.join(roomId);
//         socket.to(roomId).broadcast.emit('ROOM:SET_USERS', users);
//     });

//     socket.on('ROOM:NEW_MESSAGE', ({ roomId }) => {
//         socket.to(roomId).broadcast.emit('ROOM:NEW_MESSAGE', obj);
//     });

//     socket.on('disconnect', () => {
//         socket.to(roomId).broadcast.emit('ROOM:SET_USERS', users);
//     });

//     console.log('user connected', socket.id);
// });

// httpServer.listen(process.env.PORT, () => {
//     console.log(`listening on *:${process.env.PORT}`);
// });