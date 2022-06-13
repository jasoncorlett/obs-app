const FifoQueue = require('./FifoQueue.js')
const config = require('./config')
const logger = require('./logger')

const queue = new FifoQueue()
const port  = config('PORT', 3000)

module.exports = {
    queue,
    port,
    logger,
    config
}