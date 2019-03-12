//
// Connect to postgres
//
require('integrations/sequelize')

//
// Connect to rabbitmq
//
const rabbitmq = require('integrations/rabbitmq')
const { TODO_INDEX } = require('modules/helpers/worker/enum')
const setup = async () => {

    //
    // Register queues
    //
    rabbitmq.consume(TODO_INDEX, require('modules/api-todo/worker'))
}

module.exports = setup