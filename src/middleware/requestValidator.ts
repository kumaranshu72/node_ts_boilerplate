import { NextFunction, Request, Response } from 'express'
import { gelf, RedisConnection } from '../utils'

export const validateForwardedHeader = (req: Request, res: Response, next: NextFunction) => {
    if (req.headers['x-forwarded-for'] !== undefined && req.headers['x-forwarded-for'] !== '') {
        next()
    } else {
        res.status(422).json({
            status: 422,
            error_type: 'Unprocessable Entity',
            message: 'X-Forwarded-For header is missing'
        })
    }
}

export const validateCorrelationId = async (req: Request, res: Response, next: NextFunction) => {
    if (req.headers['x-correlation-id'] !== undefined && req.headers['x-correlation-id'] !== '') {
        console.log(req.headers['x-correlation-id'])
        next()
    } else {
        res.status(422).json({
            status: 422,
            error_type: 'Unprocessable Entity',
            message: 'x-correlation-id header is missing'
        })
    }
}

export const validateAcceptEncoding = (req: Request, res: Response, next: NextFunction) => {
    if (req.headers['accept-encoding'] === 'application/gzip') {
        next()
    } else {
        res.status(422).json({
            status: 422,
            error_type: 'Unprocessable Entity',
            message: 'Accept-Encoding should be gzip'
        })
    }
}

export const validateAccept = (req: Request, res: Response, next: NextFunction) => {
    if (req.headers['accept'] === 'application/json' ) {
        next()
    } else {
        res.status(422).json({
            status: 422,
            error_type: 'Unprocessable Entity',
            message: 'MIME type should be application/json'
        })
    }
}
