const rabbitmq = require('integrations/rabbitmq')
const controllers = {}

controllers.get = async ({ db }) => {
    rabbitmq.send('teste', 'aeee')
    return await db.Todo.findAll()
}

controllers.getById = async ({ db, error, params }) => {
    const id = params.id
    const data = await db.Todo.findByPk(id)
    if (!data) throw error.buildError(404, 'Not found')
    return data
}

controllers.post = async ({ db, payload }) => {
    return await db.Todo.create(payload)
}

controllers.put = async ({ db, error, params, payload }) => {
    const id = params.id
    const data = await db.Todo.findByPk(id)
    if (!data) throw error.buildError(404, 'Not found')
    await data.update(payload)
    return data
}

controllers.del = async ({ db, error, params }) => {
    const id = params.id
    const data = await db.Todo.findByPk(id)
    if (!data) throw error.buildError(404, 'Not found')
    await data.destroy()
    return data
}

module.exports = controllers