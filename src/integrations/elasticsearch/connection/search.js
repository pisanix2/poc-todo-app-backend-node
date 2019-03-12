const client = require('./client')

const fn = async ({ index, type, body }) => {
    const options = {
        index,
        type,
        body
    }
    return await client.search(options)
}

module.exports = fn