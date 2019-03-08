const fs = require('fs')

const fn = async (fullPath) => {
  let isExists = fs.existsSync(fullPath)

  if (!isExists) {
    throw new Error('Launcher name not found ' + fullPath)
  }
    
  if (isExists && process.env.LAUNCHER_NAME) {
    const fn = require(fullPath)
    if (typeof fn === 'function') {
      await fn()
    }
  }
}

module.exports = fn