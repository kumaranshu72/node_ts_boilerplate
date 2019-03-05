import { Router } from 'express'
import { healthCheck } from '../../../controllers'

const router: Router = Router()

router.route('/health')
      /**
       * This is an Heath Check Endpoint
       * @route GET /health
       * @headers {string} 200.Correlation-Id - Unique Id send in request
       * @headers {string} 200.Cache-Control - Cache Control value
       * @headers {string} 422.Correlation-Id - Unique Id send in request
       * @headers {string} 422.Cache-Control - Cache Control value
       * @returns 200 - Health of Server e.g, Status-LIVE
       * @returns 404 - Server is unwell
       * @returns 422 - Invalid Request Headers
       * @group Get the health of server
       * @produces application/json
       * @consumes application/json
       * @security JWT
       */
      .get(healthCheck)

export default router
