import { Server } from "socket.io";

class MarketService {
    constructor() { }

    public add(io: Server, channels) {
        channels.forEach((channel) => {
            io.in(`channel:${channel}`).emit('market-add', channel);
        });
        return true;
    }
    public remove(io: Server, channels) {
        channels.forEach((channel) => {
            io.in(`channel:${channel}`).emit('market-remove', channel);
        });
        return true;
    }
    public  edit(io: Server, channels) {
        channels.forEach((channel) => {
            io.in(`channel:${channel}`).emit('market-edit', channel);
        });
        return true;
    }
}
export default new MarketService();