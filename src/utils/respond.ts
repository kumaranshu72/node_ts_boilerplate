import {  Request, Response } from 'express'

export const RespondError = (req: Request, res: Response, status: number, error_type: string, message: string) => {
    res.set({
        'Content-Type': 'appliation/json',
        'Cache-Control': 'no-cache',
        'Correlation-Id': req.headers['x-correlation-id']
      })
    res.status(status)
    res.json({
        status: status,
        error_type: error_type,
        message: message
    })
}
