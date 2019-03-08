//
// Connect to postgres
//
require('integrations/sequelize')

//
// Setup API
//
const app = require('integrations/express')

const bs = process.env.BASE_API_PATH || '/api'
app.use(`${bs}/todo`, require('modules/api-todo'))

require('integrations/http')(app)
