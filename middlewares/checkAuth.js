const jwt = require('jsonwebtoken')
const { config } = require('../config/index')

module.exports = async (req, res, next) => {
    
    try {
    
        if (typeof req.headers.authorization !== 'string') {
            return res.status(401).json({
                message: `Authentication failed or unauthorized.`
            });
        }

        const token = req.headers.authorization.split(" ")[1];
        let authJwtSecret = config.authJwtSecret
        
        const decoded = jwt.verify(token, authJwtSecret);
        req.userData = decoded;
        
        next();
    } catch (error) {
        return res.status(401).json({
            message: `Authentication failed or unauthorized.`
        });
    }
}
