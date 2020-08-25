const path = require('path')

const _envFilePath = (process.env.NODE_ENV == 'development' ? '.env.development' : '.env')

require('dotenv').config(
  {
    path: path.join(__dirname, `../${_envFilePath}`)
  }
)

const config = {
  port:process.env.PORT || 8000,
  dbHost:process.env.DB_HOST,
  dbName:process.env.DB_NAME,
  dbUser:process.env.DB_USER,
  dbPassword:process.env.DB_PWD,
  dbPort:process.env.DB_PORT,
  dbDialect:process.env.DB_DIALECT,  
  authJwtSecret:process.env.AUTH_JWT_SECRET,  
  expiresIn:process.env.TOKEN_EXPIRE,
  timeZone:process.env.TIME_ZONE,
  googleClientID:process.env.GOOGLE_CLIENT_ID,
  googleMapsApiKey:process.env.GOOGLE_MAPS_API_KEY,
  googleClientSecret:process.env.GOOGLE_CLIENT_SECRET,
  apiUrlBase:process.env.API_URL_BASE,
  modeEnv:process.env.NODE_ENV,  
  mongoDBConnection:process.env.MONGODB_CONNECTION,
  refreshTokenExpire:process.env.REFRESH_TOKEN_EXPIRE || "1h",
  publicPath:process.env.PUBLIC_PATH,  
  duvaApiToken:process.env.DUVA_API_TOKEN,
  imagesUrl:process.env.IMAGES_URL,
  fireDataBaseUrl:process.env.FIREBASE_DATABASE_URL,
}


module.exports = { config }


