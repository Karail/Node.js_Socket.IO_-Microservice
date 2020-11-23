import { SubscribeMessage, WebSocketGateway, OnGatewayInit, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';
//Services
import { AppService } from '../services/app.service';
import { ClientDto } from '../dto/client.dto';

@WebSocketGateway()
export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect {

    @WebSocketServer() private readonly server: Server;
    private readonly logger: Logger = new Logger('AppGateway');

    constructor(
        private readonly appService: AppService
    ) { }

    @SubscribeMessage('msgToServer')
    handleMessage(socket: Socket, payload: ClientDto) {
        const response = this.appService.getChannels(payload.token);

        response.subscribe((channels) => {
            channels.forEach((channel) => {
                socket.join(`channel:${channel}`);
            });
            channels.forEach((channel) => {
                socket.to(`channel:${channel}`).broadcast.emit('msgToClient', channel);
            });
        }).unsubscribe();
    }

    handleDisconnect(socket: Socket) {
        this.logger.log(`Client disconnected: ${socket.id}`);
    }

    handleConnection(socket: Socket, ...args: any[]) {
        this.logger.log(`Client connected: ${socket.id}`);
    }
}