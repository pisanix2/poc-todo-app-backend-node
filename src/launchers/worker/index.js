//
// Connect to postgres
//
require('integrations/sequelize')

//
// Connect to rabbitmq
//
const rabbitmq = require('integrations/rabbitmq')
const { TODO_INDEX_REGISTER, TODO_INDEX_DEL } = require('modules/helpers/worker/enum')
const setup = async () => {

    //
    // Register queues
    //
    const todoWorker = require('modules/api-todo/worker')
    rabbitmq.consume(TODO_INDEX_REGISTER, todoWorker.register)
    rabbitmq.consume(TODO_INDEX_DEL, todoWorker.del)
}

module.exports = setup