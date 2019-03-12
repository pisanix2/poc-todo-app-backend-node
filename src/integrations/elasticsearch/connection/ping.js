const client = require('./client')

const fn = async () => {
    return await client.ping()
}

module.exports = fn