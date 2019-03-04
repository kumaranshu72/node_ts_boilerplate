import { Router } from 'express'
import { healthCheck } from '../../../controllers'

const router: Router = Router()

router.route('/health')
      .get(healthCheck)

export default router
