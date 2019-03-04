import { Router } from 'express'
import v1 from './v1'
// create Router
const router: Router = Router()
router.use('/v1', v1)

export default router
