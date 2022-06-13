const express = require('express')
const config = require('../config')
const { queue, port, logger } = require('../globals')

const HTTP_OK = 200
const HTTP_NO_CONTENT = 204

const app = express()

app.set('etag', false)
app.set('x-powered-by', false)

app.use('/video', express.static(config('VIDEO_SOURCE', './assets')))
app.use(express.static('./src/web/public'))
app.use(express.text())

app.get('/api/queue', (req, res) => {
    if (req.query.all) {
        res .setHeader('Queue-Size', queue.size())
            .contentType('text/plain')
            .send(queue.queue.join("\n"))
    }
    else {
        res.status(HTTP_OK).send(`${queue.size()}`)
    }
})

app.post('/api/queue', (req, res) => {
    queue.put(req.body)
    res.status(HTTP_NO_CONTENT).send()
})

app.delete('/api/queue', (req, res) => {
    if (req.query.all) {
        queue.clear()
        res.status(HTTP_NO_CONTENT).send()
    }
    else {
        const item = queue.get()

        if (item) res.status(HTTP_OK).send(item)
        else res.status(HTTP_NO_CONTENT).send()
    }
})

module.exports = () => {
    app.listen(port, () => {
        logger.info(`App listening on ${port}`)
    })
}

module.exports.queue = queue
