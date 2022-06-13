const { queue, logger } = require('./src/globals')
const webServer = require('./src/web/server')

queue.put("Default data #1")
queue.put("Default data #2")

webServer()
