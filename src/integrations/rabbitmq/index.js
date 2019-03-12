const amqpConnect = require('./connection')
let channel = null

const connect = async () => {
    channel = await amqpConnect.getChannel()
    return channel
}

const consume = async (name, worker) => {
    if (!channel) await connect()
    const fn = async (msg) => {
        let content = JSON.parse(msg.content)
        await worker(content)
        return channel.ack(msg)
    }
    channel.assertQueue(name, { durable: false })
    channel.prefetch(1)
    console.log(" [*] Waiting for messages in %s.", name)
    channel.consume(name, fn)
}

const send = async (name, payload) => {
    if (!channel) await connect()
    await channel.assertQueue(name, { durable: false });
    await channel.sendToQueue(name, Buffer.from(JSON.stringify(payload)));
    console.log(" [x] Sent to %s payload: %s", name, JSON.stringify(payload));
}

module.exports = { consume, send }
