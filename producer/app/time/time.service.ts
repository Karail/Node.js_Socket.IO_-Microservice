import { Server } from "socket.io";

class TimeSerive {
    public async add(io: Server, channels) {
        channels.forEach((channel) => {
            io.in(`channel:${channel}`).emit('time-add', channel);
        });
        return true;
    }
    public async remove(io: Server, channels) {
        channels.forEach((channel) => {
            io.in(`channel:${channel}`).emit('time-remove', channel);
        });
        return true;
    }
    public async edit(io: Server, channels) {
        channels.forEach((channel) => {
            io.in(`channel:${channel}`).emit('time-edit', channel);
        });
        return true;
    }
}
export default new TimeSerive();