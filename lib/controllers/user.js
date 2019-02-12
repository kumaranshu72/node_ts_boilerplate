"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userController = void 0;

var _user = require("../models/user");

var userController = {
  getAll: function getAll(req, res) {
    _user.User.find(function (err, users) {
      if (err) res.status(500).send(err);
      res.status(200).json(users);
    });
  }
};
exports.userController = userController;