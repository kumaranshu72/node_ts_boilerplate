import { Request, Response } from 'express'

import { User } from '../models'

import { RedisConnection } from '../utils'

export const userController = {
  add: (req: Request, res: Response) => {
    // RedisConnection.set('hello', 'hello Anshu', 100000)
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
    RedisConnection.get('hello', (err: any, result: any) => {
      res.send(result)
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
