import { Injectable, Inject, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {

    private readonly logger: Logger = new Logger('AppService');

    constructor(
        @Inject('APP_SERVICE') private readonly client: ClientProxy
    ) { }

    async onApplicationBootstrap() {
        await this.client.connect();
    }
    getChannels(token: string): Observable<string[]> {
        return this.client.send<string[]>('socket-queue', token);
    }
}
