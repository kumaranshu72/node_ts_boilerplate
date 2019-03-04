import { Request, Response } from 'express'

const circuitBreaker = require('opossum')

import { User } from '../models'

import { gelf, RedisConnection } from '../utils'

const axios = require('axios')

export const userController = {
  add: (req: Request, res: Response) => {
    // RedisConnection.set('hello', 'hello Anshu', 100000)
    // RedisConnection.hset('correlationId', '1234', '1')
    const user = new User()
    user.name = req.body.name
    user.save((err) => {
      if (err) {
        res.status(500).send(err)
      }
      res.status(200).json(user)
    })
  },
  deleteById: (req: Request, res: Response) => {
    User.remove({ _id: req.params.user_id}, (err) => {
    if (err) {
        res.status(500).send(err)
      }
    res.status(200).json({ message: 'Successfully deleted' })
    })
  },
  getAll: (req: Request, res: Response) => {
    /*RedisConnection.get('hello').then( (result: string) => {
      res.send(result)
    })*/
    /*RedisConnection.hget('correlationId', '12345').then((result: any) => {
      console.log(result)
    })*/
    const  circuitBreakerOptions  = {
      errorThresholdPercentage :  50 ,
      resetTimeout :  5000,
      timeout :  1000,
    }
    // greylog logger
    gelf.emit('gelf.log', 'hello World')

    const  circuit  =  circuitBreaker( axios.get('http://localhost/users'), circuitBreakerOptions)
    circuit.fallback((error: any) => {
      console.log('Fallback')
      return 'Fallback'
    })

    circuit.fire().then ( (result: any)  => {
        res.send (result)
    }).catch ( (err: any)  => {
        res.send (err.message)
    })

    /*User.find( (err, users) => {
      if (err) {
        res.status(500).send(err)
      }
      res.status(200).json(users)
    })*/
  },
  getById: (req: Request, res: Response) => {
    User.findById(req.params.user_id, (err, user) => {
      if (err) {
        res.status(500).send(err)
      }
      res.status(200).json(user)
    })
  },
  update: (req: Request, res: Response) => {
    User.findById(req.params.user_id, (err, user) => {
        if (err) {
            res.send(err)
        }
        user.name = req.body.name
        user.save((error: any) => {
            if (error) {
                res.status(500).send(err)
            }
            res.status(200).json(user)
        })
    })
  },
}
