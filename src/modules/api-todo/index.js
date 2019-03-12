//
// Import schemas
//
const modelImport = require('integrations/sequelize/model-import')
const dir = __dirname
modelImport(dir, 'models', 'Todo')

//
// Setup API
//
const router = require('express').Router()
const controller = require('./controllers')
const validation = require('./validations')
const handler = require('integrations/express/handler')

router.get('/', handler(controller, 'get'))
router.get('/fromIndex/', handler(controller, 'getFromIndex'))
router.get('/:id', handler(controller, 'getById'))
router.post('/', validation.validate, handler(controller, 'post'))
router.put('/:id', validation.validate, handler(controller, 'put'))
router.delete('/:id', handler(controller, 'del'))

module.exports = router
