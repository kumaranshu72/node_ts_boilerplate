"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
exports.userController = {
    getAll: (req, res) => {
        user_1.User.find(function (err, users) {
            if (err)
                res.status(500).send(err);
            res.status(200).json(users);
        });
    },
    add: (req, res) => {
        var user = new user_1.User();
        user.name = req.body.name;
        user.save(function (err) {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).json(user);
        });
    },
    getById: (req, res) => {
        user_1.User.findById(req.params.user_id, function (err, user) {
            if (err)
                res.status(500).send(err);
            res.status(200).json(user);
        });
    },
    update: (req, res) => {
        user_1.User.findById(req.params.user_id, function (err, user) {
            if (err)
                res.send(err);
            user.name = req.body.name;
            user.save(function (err) {
                if (err)
                    res.status(500).send(err);
                res.status(200).json(user);
            });
        });
    }
};
//# sourceMappingURL=user.js.map