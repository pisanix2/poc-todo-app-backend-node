//
// Import schemas
//
const modelImport = require('integrations/sequelize/model-import')
const dir = `${__dirname} /../api-todo`
modelImport(dir, 'models', 'Todo')

const { workerDel, workerRegister } = require('./worker')
module.exports = { workerDel, workerRegister }