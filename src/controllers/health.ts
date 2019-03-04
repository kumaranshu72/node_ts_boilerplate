import { Request, Response } from 'express'

import { gelf, RespondSuccess } from '../utils'

export const healthCheck = (req: Request, res: Response) => {
    const logMsg = req.headers['x-correlation-id'] + ':' + 'Health Check Performed'
    gelf.emit('gelf.log', logMsg)
    RespondSuccess(req, res, 200, '{"status": "LIVE"}', 'no-cache', 'null')
}
