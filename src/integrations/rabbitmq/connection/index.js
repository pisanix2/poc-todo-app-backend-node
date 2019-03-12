const amqp = require('amqplib')
const connection = {}
let channel = null

connection.getChannel = async () => {
    if (channel) return channel

    console.log(`Connecting on rabbitmq amqp://${process.env.AMQP_USER}:***@${process.env.AMQP_HOST}/${process.env.AMQP_VHOST}`)
    const connection = await amqp.connect({
        hostname: process.env.AMQP_HOST,
        port: process.env.AMQP_PORT,
        username: process.env.AMQP_USER,
        password: process.env.AMQP_PASS/*,
        vhost: process.env.AMQP_VHOST*/
    })
    channel = await connection.createChannel()
    return channel
}

module.exports = connection
