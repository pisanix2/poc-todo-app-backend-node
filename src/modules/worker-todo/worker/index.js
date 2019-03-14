const { indexDel, indexRegister } = require('../controllers')
const db = require('integrations/sequelize')

const workerDel = async (content) => {
    console.log(`  message: ${JSON.stringify(content)}`)
    await indexDel({ db, content })
}

const workerRegister = async (content) => {
    console.log(`  message: ${JSON.stringify(content)}`)
    await indexRegister({ db, where: { id: content.id } })
}

module.exports = { workerDel, workerRegister}
