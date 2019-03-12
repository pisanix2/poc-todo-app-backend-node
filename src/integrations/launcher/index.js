const fs = require('fs')
const path = require('path')

const fn = async (basePath) => {
  const fullPath = path.resolve(`${basePath}/${process.env.LAUNCHER_NAME}`)
  let isExists = fs.existsSync(fullPath)

  if (!isExists) {
    throw new Error('LAUNCHER_NAME on process.env not found ' + fullPath)
  }

  if (isExists && process.env.LAUNCHER_NAME) {
    const fn = require(fullPath)
    if (typeof fn === 'function') {
      await fn()
    }
  }
}

module.exports = fn