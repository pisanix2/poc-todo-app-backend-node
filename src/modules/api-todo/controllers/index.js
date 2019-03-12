const rabbitmq = require('integrations/rabbitmq')
const elasticsearch = require('integrations/elasticsearch')
const { TODO_INDEX_REGISTER, TODO_INDEX_DEL } = require('modules/helpers/worker/enum')
const controllers = {}

controllers.get = async ({ db }) => {
    return await db.Todo.findAll()
}

controllers.getFromIndex = async () => {
    const index = elasticsearch.indexName('todo')
    data = await elasticsearch.search(index)
    return data
}

controllers.getById = async ({ db, error, params }) => {
    const id = params.id
    const data = await db.Todo.findByPk(id)
    if (!data) throw error.buildError(404, 'Not found')
    return data
}

controllers.post = async ({ db, payload }) => {
    const data = await db.Todo.create(payload)
    await rabbitmq.send(TODO_INDEX_REGISTER, data)
    return data
}

controllers.put = async ({ db, error, params, payload }) => {
    const id = params.id
    const data = await db.Todo.findByPk(id)
    if (!data) throw error.buildError(404, 'Not found')
    await data.update(payload)
    await rabbitmq.send(TODO_INDEX_REGISTER, data)
    return data
}

controllers.del = async ({ db, error, params }) => {
    const id = params.id
    const data = await db.Todo.findByPk(id)
    if (!data) throw error.buildError(404, 'Not found')
    await data.destroy()
    await rabbitmq.send(TODO_INDEX_DEL, data)
    return data
}

controllers.indexRegister = async ({ db, where }) => {
    const data = await db.Todo.findAll({ where: where })
    const mapIndex = data.map(el => ({
        id: el.id,
        title: el.title
    }))
    const index = elasticsearch.indexName('todo')
    elasticsearch.bulk({ index: index, body: mapIndex })
}

controllers.indexDel = async ({ content }) => {
    const index = elasticsearch.indexName('todo')
    elasticsearch.deleteById({ index: index, id: content.id })
}

module.exports = controllers