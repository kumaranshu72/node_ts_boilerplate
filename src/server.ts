import app from './app'
import * as config from './config/config'
const swaggerUi = require('swagger-ui-express')
const expressSwagger = require('express-swagger-generator')(app)

expressSwagger(config.options)
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Magic Happens on port ' + PORT)
})
