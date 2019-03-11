const rabbitmq = require('integrations/rabbitmq')
const setup = async () => {
    rabbitmq.consume('teste', require('modules/api-todo/worker'))
}

module.exports = setup