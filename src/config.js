require('dotenv').config()

module.exports = (key, defaultValue = null) => {
    return process.env[key] || (typeof defaultValue === 'function' ? defaultValue(key) : defaultValue)
}

module.exports.REQUIRED = (key) => { throw `CONFIG: ${key} is required.` }
