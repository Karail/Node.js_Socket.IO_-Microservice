const amqp = require('amqplib');

async function start() {
  const connection = await amqp.connect(process.env.MESSAGE_QUEUE)

  const channel = await connection.createChannel();

  const queue = 'hello';

  channel.assertQueue(queue, {
    durable: false
  });
 
  console.log('Waiting tasks...');

  channel.consume(queue, async (message) => {

    const content = message.content.toString();
   
    channel.sendToQueue(queue, Buffer.from('msg'));

    console.log(content,' received!');

    channel.ack(message);
  }, {
    noAck: false
  });
}
start()  