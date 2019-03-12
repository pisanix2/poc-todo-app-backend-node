const client = require('./client')

const fn = async ({ index, type, id }) => {
    const options = {
        index,
        type,
        id
    }
    return await client.delete(options)
}

module.exports = fn