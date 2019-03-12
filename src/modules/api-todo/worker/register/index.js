const { indexRegister } = require('../../controllers')
const db = require('integrations/sequelize')

const worker = async (content) => {
    console.log(`  message: ${JSON.stringify(content)}`)
    await indexRegister({ db, where: { id: content.id } })
}

module.exports = worker
