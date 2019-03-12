module.exports = (...args) => `${process.env.ES_INDEX_PREFIX.toLowerCase()}.${args.join('.').toLowerCase()}`
