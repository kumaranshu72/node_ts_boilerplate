"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userController = void 0;

var _models = require("../models");

var userController = {
  add: function add(req, res) {
    var user = new _models.User();
    user.name = req.body.name;
    user.save(function (err) {
      if (err) {
        res.status(500).send(err);
      }

      res.status(200).json(user);
    });
  },
  deleteById: function deleteById(req, res) {
    _models.User.remove({
      _id: req.params.user_id
    }, function (err) {
      if (err) {
        res.status(500).send(err);
      }

      res.status(200).json({
        message: 'Successfully deleted'
      });
    });
  },
  getAll: function getAll(req, res) {
    _models.User.find(function (err, users) {
      if (err) {
        res.status(500).send(err);
      }

      res.status(200).json(users);
    });
  },
  getById: function getById(req, res) {
    _models.User.findById(req.params.user_id, function (err, user) {
      if (err) {
        res.status(500).send(err);
      }

      res.status(200).json(user);
    });
  },
  update: function update(req, res) {
    _models.User.findById(req.params.user_id, function (err, user) {
      if (err) {
        res.send(err);
      }

      user.name = req.body.name;
      user.save(function (error) {
        if (error) {
          res.status(500).send(err);
        }

        res.status(200).json(user);
      });
    });
  }
};
exports.userController = userController;