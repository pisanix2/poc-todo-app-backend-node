const ErrorPoc = require('./ErrorPoc')

const errors = {
  getErrorInstance () {
    return new ErrorPoc()
  },

  buildError (code, message) {
    let error = errors.getErrorInstance()
    error.addError(code, message)
    console.log(`ERROR: ${code} ${message}`)
    return error
  }
}

module.exports = errors
