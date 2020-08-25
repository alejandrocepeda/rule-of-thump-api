const { config } = require('../config')
const chalk = require('chalk')

function withErrorStack(error, stack){
    
    if (config.modeEnv == 'development') {                
        return { error, stack }
    }

    return error
}

function logErrors(err, req, res, next){    
    console.log(chalk.red(err.stack))
    next(err)
}

function errorHandler(err, req, res, next) {
    //if (res.headersSent) {
    //    return next(err);
    //}

    res.status(err.status || 500)
    res.json(withErrorStack(err.message, err.stack))
}

module.exports = {
    logErrors,
    errorHandler
}