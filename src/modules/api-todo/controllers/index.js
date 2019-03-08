const controllers = {}

controllers.get = async ({ db }) => {
    return await db.Todo.findAll()
}

controllers.getById = async ({ db, params }) => {
    const id = params.id
    const data = await db.Todo.findByPk(id)
    if (!data) throw new Error('Not found')
    return data
}

controllers.post = async ({ db, payload }) => {
    return await db.Todo.create(payload)
}

controllers.put = async ({ db, params, payload }) => {
    const id = params.id
    const data = await db.Todo.findByPk(id)
    if (!data) throw new Error('Not found')
    await data.update(payload)
    return data
}

controllers.del = async ({ db, params }) => {
    const id = params.id
    const data = await db.Todo.findByPk(id)
    if (!data) throw errors.buildError(errors.ERR_NOT_FOUND, 'Not found')
    await data.destroy()
    return data
}

module.exports = controllers