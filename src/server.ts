import app from './app'

import { swaggerOptions } from './config'

const swaggerUi = require('swagger-ui-express')

const swaggerJSDoc = require('swagger-jsdoc')

const swaggerSpec = swaggerJSDoc(swaggerOptions)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Magic Happens on port ' + PORT)
})
