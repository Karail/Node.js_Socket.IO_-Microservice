import { Server } from "socket.io";

class ChannelService {
    constructor() { }
    public started(io: Server, channels) {
        channels.forEach((channel) => {
            io.in(`channel:${channel}`).emit('channel-started', channel);
        });
        return true;
    }
    public stopped(io: Server, channels) {
        channels.forEach((channel) => {
            io.in(`channel:${channel}`).emit('channel-stopped', channel);
        });
        return true;
    }
    public remove(io: Server, channels) {
        channels.forEach((channel) => {
            io.in(`channel:${channel}`).emit('channel-remove', channel);
        });
        return true;
    }
    public edit(io: Server, channels) {
        channels.forEach((channel) => {
            io.in(`channel:${channel}`).emit('channel-edit', channel);
        });
        return true;
    }
    public shared(io, userId) {
        io.in(`client:${userId}`).emit('channel-shared', userId);
        return true;
    }
}
export default new ChannelService();