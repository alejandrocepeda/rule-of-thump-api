const express = require('express')
const app = express()
const path = require('path')
const { logErrors, errorHandler } = require('./middlewares/errorHandler')

app.use(require('./middlewares/responder'))
app.use('/api/static', express.static(`${__dirname}/public`));

// Routes middlewares
app.use('/api', require(path.join(__dirname, 'routes')))


app.use(logErrors)
app.use(errorHandler)

module.exports = app