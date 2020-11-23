import * as dotenv from 'dotenv';
dotenv.config();

import * as http from 'http';
import * as express from 'express';
import * as cors from 'cors';
import * as morgan from 'morgan';
import { Server } from 'socket.io';
//Sockets
import sockets from './sockets';
//Routes
import channelRouter from './channel/channel.router';
import marketRouter from './market/market.router';
import timeRouter from './time/time.router';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: (_, cb) => cb(null, true),
        credentials: true,
        preflightContinue: true,
        exposedHeaders: [
            'Access-Control-Allow-Headers',
            'Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept',
            'X-Password-Expired',
        ],
        optionsSuccessStatus: 200,
    }
});
sockets(io);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: (_, cb) => cb(null, true),
        credentials: true,
        preflightContinue: true,
        exposedHeaders: [
            'Access-Control-Allow-Headers',
            'Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept',
            'X-Password-Expired',
        ],
        optionsSuccessStatus: 200,
    })
);
app.use((req: any, res: any, next) => {
    req.io = io;
    next();
});
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/../static/index.html')
});
app.use('/channel', channelRouter);
app.use('/market', marketRouter);
app.use('/time', timeRouter);

server.listen(process.env.PORT, () => {
    console.log(`listening on *:${process.env.PORT}`);
});