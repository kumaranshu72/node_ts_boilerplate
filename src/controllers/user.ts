import { Response, Request, NextFunction } from 'express';

import { User } from '../models/user';

export const userController = {
  getAll: (req: Request, res: Response) => {
    User.find(function(err, users) {
      if(err)res.status(500).send(err)
      res.status(200).json(users)
     })
  },
  add: (req: Request, res: Response) => {
    var user = new User();
    user.name = req.body.name;
    user.save(function(err){
      if(err) {
        res.status(500).send(err)
      }
      res.status(200).json(user);
    });
  },
  getById: (req: Request, res: Response) => {
    User.findById(req.params.user_id,function(err,user) {
      if(err) res.status(500).send(err)
      res.status(200).json(user)
    })
  },
  update: (req: Request, res: Response) => {
    User.findById(req.params.user_id, function(err, user) {
        if (err)
            res.send(err);
        user.name = req.body.name;
        user.save(function(err) {
            if (err)
                res.status(500).send(err);
            res.status(200).json(user);
        });

    });
  }
}
