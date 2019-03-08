require('dotenv').config()
const path = require('path')
const dir = path.resolve(`${__dirname}/${process.env.LAUNCHER_NAME}`)
require('integrations/launcher')(dir)
