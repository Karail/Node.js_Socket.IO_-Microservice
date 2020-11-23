import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload, Ctx, RmqContext } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor() {}

  @MessagePattern('socket-queue')
  async handleMessagePrinted(
    @Payload() data: string, 
    @Ctx() context: RmqContext
  ) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    channel.ack(originalMsg);
    
    return ['1','2','3']
  }
}
