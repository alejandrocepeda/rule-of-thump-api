'use strict'

const express = require('express')
const app = express()
const { config } = require('./config/index')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const chalk = require('chalk')
const bodyParser = require('body-parser')

app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true}));



app.use(morgan('tiny'))
app.use(cors(require('./config/corsOptions')))

app.use(helmet())
app.disable('x-powered-by')
app.use(helmet.xssFilter())
app.use(require('./app.js'))

app.listen(config.port, () => {
  console.log(chalk.green(`Server up on port ${config.port}`))
})