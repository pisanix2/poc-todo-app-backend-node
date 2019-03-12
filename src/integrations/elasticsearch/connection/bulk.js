const client = require('./client')

const fn = async ({ index, type, body }) => {
    type = type || 'pt-br'
    const bulkList = []
    body.forEach(el => {
        const hed = {}
        // if (!el.id) {
        //   throw errors.buildError(errors.ERR_ES_ID_REQUIRED)
        //}
        hed._index = index
        hed._type = type
        hed._id = el.id
    
        bulkList.push({
          index: hed
        })
    
        delete el.id
        bulkList.push(el)
    });
    const options = {
        index: index,
        type: type,
        body: bulkList,
        refresh: 'wait_for'
    }
    return await client.bulk(options)
}

module.exports = fn