const { execute, Joi } = require('integrations/express/validation')

const schema = {
  title: Joi.string().required()
}

module.exports = {
  schema,
  validate: execute(schema)
}
