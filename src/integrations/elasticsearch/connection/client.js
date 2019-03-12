const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
  host: `${process.env.ES_HOST}:${process.env.ES_PORT}`,
  log: 'trace'
});

module.exports = client