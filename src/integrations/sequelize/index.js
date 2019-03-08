const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development'
const config = require(path.join(__dirname, 'config'))[env]
const modelDir = path.join(__dirname, 'models')

if (!config) throw new Error(`Environment database error (process.env.NODE_ENV = ${env})`)

const db = {}
let sequelize

if (config.use_env_letiable) {
  sequelize = new Sequelize(process.env[config.use_env_letiable], config)
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config)
}

fs
  .readdirSync(modelDir)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(file => {
    let model = sequelize['import'](path.join(modelDir, file))
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db