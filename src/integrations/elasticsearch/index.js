const bulk = require('./connection/bulk')
const search = require('./connection/search')
const deleteById = require('./connection/delete')
const ping = require('./connection/ping')
const indexName = require('./helpers/index-name')

module.exports = { bulk, indexName, search, deleteById, ping }

// 
// https://www.compose.com/articles/getting-started-with-elasticsearch-and-node/
// 