import { NextFunction, Request, Response } from 'express'
import { RedisConnection, RespondError } from '../utils'

export const validateForwardedHeader = (req: Request, res: Response, next: NextFunction) => {
    if (req.headers['x-forwarded-for'] !== undefined && req.headers['x-forwarded-for'] !== '') {
        next()
    } else {
        RespondError(req, res, 422, 'Unprocessable Entity', 'X-Forwarded-For header is missing')
    }
}

export const validateCorrelationId =  (req: Request, res: Response, next: NextFunction) => {
    if (req.headers['x-correlation-id'] !== undefined && req.headers['x-correlation-id'] !== '') {
        const coorelationId = req.headers['x-correlation-id']
        RedisConnection.hget('correlationId', String(coorelationId)).then((result: any) => {
            if (result === null) {
                RedisConnection.hset('correlationId', String(coorelationId), '1')
                next()
            } else {
                RespondError(req, res, 422, 'Unprocessable Entity', 'Duplicate Correlation-Id')
            }
          })
    } else {
        RespondError(req, res, 422, 'Unprocessable Entity', 'x-correlation-id header is missing')
    }
}

export const validateAcceptEncoding = (req: Request, res: Response, next: NextFunction) => {
    if (req.headers['accept-encoding'] === 'application/gzip') {
        next()
    } else {
        RespondError(req, res, 422, 'Unprocessable Entity', 'Accept-Encoding should be gzip')
    }
}

export const validateAccept = (req: Request, res: Response, next: NextFunction) => {
    if (req.headers['accept'] === 'application/json' ) {
        next()
    } else {
        RespondError(req, res, 422, 'Unprocessable Entity', 'MIME type should be application/json')
    }
}
