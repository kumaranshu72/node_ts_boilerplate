import {  Request, Response } from 'express'

export const RespondError = (req: Request, res: Response, status: number, errorType: string, message: string) => {
    res.set({
        'Cache-Control': 'no-cache',
        'Content-Type': 'appliation/json',
        'Correlation-Id': req.headers['x-correlation-id']
      })
    res.status(status)
    res.json({
        status: status,
        error_type: errorType,
        message: message
    })
}

export const RespondSuccess = (req: Request, res: Response, status: number, payload: string,
                               CacheType: string, expireDate: string ) => {
    if (CacheType === 'no-cache') {
        res.set({
            'Cache-Control': 'no-cache',
            'Content-Type': 'appliation/json',
            'Correlation-Id': req.headers['x-correlation-id']
          })
    } else {
        res.set({
            'Cache-Control': CacheType,
            'Content-Type': 'appliation/json',
            'Correlation-Id': req.headers['x-correlation-id'],
            'Expires': expireDate,
          })
    }
    res.status(status)
    res.send(payload)
}