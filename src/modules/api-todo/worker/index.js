//
// Import schemas
//
const modelImport = require('integrations/sequelize/model-import')
const dir = __dirname + '/../'
modelImport(dir, 'models', 'Todo')

const del = require('./del')
const register = require('./register')

module.exports = { del, register }