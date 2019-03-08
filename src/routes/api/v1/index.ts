import { Router } from 'express'
import { validateAccept,
    validateAcceptEncoding,
    validateCorrelationId,
    validateForwardedHeader } from '../../../middleware'
import health from './health'
import user from './users'

const router: Router = Router()

router.use(validateCorrelationId)
router.use(validateForwardedHeader)
router.use(validateAccept)
router.use(validateAcceptEncoding)

router.use('/', user)
router.use('/', health)

export default router
