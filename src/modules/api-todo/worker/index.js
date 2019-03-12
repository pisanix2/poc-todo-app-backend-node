const { index } = require('../controllers')
const db = require('integrations/sequelize')

//
// Import schemas
//
const modelImport = require('integrations/sequelize/model-import')
const dir = __dirname + '/../'
modelImport(dir, 'models', 'Todo')

const worker = async (content) => {
    console.log(`  message: ${JSON.stringify(content)}`)
    await index({ db, where: { id: content.id } })
}

module.exports = worker
