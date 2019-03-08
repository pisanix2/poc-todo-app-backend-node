const path = require('path')
const sequelize = require('integrations/sequelize')

const modelImport = (dirname, folder, name) => {
  const modelDir = path.join(dirname, folder)
  const model = sequelize.sequelize['import'](path.join(modelDir, `${name}.js`))
  sequelize[name] = model
  return model
}

module.exports = modelImport