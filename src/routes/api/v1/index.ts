import { Router } from 'express'
import health from './health'
import user from './users'

const router: Router = Router()

router.use('/', user)
router.use('/', health)

export default router
