import { Router } from 'express'
import { healthCheck } from '../../../controllers'

const router: Router = Router()

router.route('/health')

      /**
       * @swagger
       *
       * /health:
       *   get:
       *     description: Check the health of the server
       *     produces:
       *       - application/json
       *     consumes:
       *       - application/json
       *     parameters:
       *       - in: header
       *         name: X-Forwarded-For
       *         schema:
       *           type: string
       *           format: uuid
       *         required: true
       *         description: IPv4 address of the source
       *       - in: header
       *         name: x-correlation-Id
       *         schema:
       *           type: string
       *           format: uuid
       *         required: true
       *         description: Unique Id for each request
       *       - in: header
       *         name: Accept-Encoding
       *         schema:
       *           type: string
       *         required: true
       *         description: application/gzip is allowed;
       *       - in: header
       *         name: Accept
       *         schema:
       *           type: string
       *         required: true
       *         description: application/json is allowed
       *     responses:
       *       200:
       *         description: Server is alive
       *         headers:
       *            x-correlation-Id:
       *                schema:
       *                 type: string
       *                description: Unique Id for each request.
       *            Cache-Control:
       *                schema:
       *                 type: string
       *                description: Cache Control Value
       *       422:
       *          description: Unable to process the request header
       *          headers:
       *            x-correlation-Id:
       *                schema:
       *                 type: string
       *                description: Unique Id for each request.
       *            Cache-Control:
       *                schema:
       *                 type: string
       *                description: Cache Control Value
       *       404:
       *          description: Server is dead
       */
      .get(healthCheck)

export default router
