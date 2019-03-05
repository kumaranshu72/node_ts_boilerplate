import app from './app'

import * as config from './config/config'

const swaggerUi = require('swagger-ui-express')

const swaggerJSDoc = require('swagger-jsdoc')

const swaggerSpec = swaggerJSDoc(config.options)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Magic Happens on port ' + PORT)
})
