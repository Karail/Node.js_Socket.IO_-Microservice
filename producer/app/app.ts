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
//Configs
import { corsConfig } from './config/www.config';

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: corsConfig });
sockets(io);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsConfig));
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