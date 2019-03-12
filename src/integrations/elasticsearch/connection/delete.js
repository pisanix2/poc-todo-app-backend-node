const client = require('./client')

const fn = async ({ index, type, id }) => {
    type = type || 'pt-br'
    const options = {
        index,
        type,
        id,
        refresh: 'wait_for'
    }
    return await client.delete(options)
}

module.exports = fn