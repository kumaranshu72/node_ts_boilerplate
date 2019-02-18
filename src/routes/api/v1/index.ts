import { Router } from 'express'
import getUser from './getUsers'
import user from './users'
import hystrixStream from './hystrix_stream'

const router: Router = Router()

router.use('/', user)
router.use('/getUsers', getUser)
router.get('/hystrix.stream', hystrixStream)

export default router
