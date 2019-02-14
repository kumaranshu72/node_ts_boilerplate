import { Router } from 'express'
import v1 from './v1'
// create Router
const router: Router = Router()
router.use('/v1', v1)
// console.dir(router);
export default router
