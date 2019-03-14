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
    const { workerRegister, workerDel } = require('modules/worker-todo')
    rabbitmq.consume(TODO_INDEX_REGISTER, workerRegister)
    rabbitmq.consume(TODO_INDEX_DEL, workerDel)
}

module.exports = setup