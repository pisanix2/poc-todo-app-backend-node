const { indexDel } = require('../../controllers')
const db = require('integrations/sequelize')

const worker = async (content) => {
    console.log(`  message: ${JSON.stringify(content)}`)
    await indexDel({ db, content })
}

module.exports = worker
