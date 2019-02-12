import { Response, Request, NextFunction } from 'express';

import { User } from '../models/user';

export const userController = {
  getAll: (req: Request, res: Response) => {
    User.find(function(err, users) {
      if(err)res.status(500).send(err)
      res.status(200).json(users)
     })
  }
}
