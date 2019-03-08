const fs = require('fs')
const Joi = require('joi')

// const listExtensions = fs.readdirSync(`${__dirname}/extensions`)
// module.exports = Joi.extend(listExtensions.map(file => require(`${__dirname}/extensions/${file}`)))

module.exports = Joi
