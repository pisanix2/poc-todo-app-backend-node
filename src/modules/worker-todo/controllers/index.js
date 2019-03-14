const elasticsearch = require('integrations/elasticsearch')
const controllers = {}

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