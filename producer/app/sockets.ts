import { Server } from "socket.io";

export default function (io: Server) {
    io.on('connection', async (socket) => {
        console.log(`Client connected: ${socket.id}`);
        
        const token = socket.handshake.query.token;

        // const response = await fetch('');
        // const { channels, userId } = await response.json();
        const channels = ['1','2','3']
        const userId = 1;

        channels.forEach((channel) => {
            socket.join(`channel:${channel}`);
        });
        socket.join(`client:${userId}`);

        socket.on('disconnect', (socket) => {
            console.log(`Client disconnected: ${socket.id}`);
        });
    });
}