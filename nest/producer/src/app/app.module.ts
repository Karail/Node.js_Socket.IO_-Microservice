import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
//Gateways
import { AppGateway } from './getaways/app.gateway';
//Services
import { AppService } from './services/app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'APP_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.MESSAGE_QUEUE],
          queue: 'cats_queue',
          queueOptions: {
            durable: false
          },
        },
      },
    ]),
  ],
  providers: [AppService, AppGateway],
})
export class AppModule { }