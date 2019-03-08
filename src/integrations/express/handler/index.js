const db = require('integrations/sequelize')
const call = (controller, method) => {
    return async (req, res) => {
        const obj = {
            db,
            payload: req.body || null,
            params: req.params || null
        }
        const data = await controller[method](obj)
        res.send(data)
    }
}

module.exports = call