const client = require('./client')

const fn = async ({ index, type, body }) => {
    type = type || 'pt-br'
    const options = {
        index,
        type,
        body
    }
    return await client.search(options)
}

module.exports = fn