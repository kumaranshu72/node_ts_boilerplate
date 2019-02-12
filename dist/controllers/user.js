"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
exports.userController = {
    add: (req, res) => {
        const user = new user_1.User();
        user.name = req.body.name;
        user.save((err) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).json(user);
        });
    },
    deleteById: (req, res) => {
        user_1.User.remove({ _id: req.params.user_id }, (err) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).json({ message: 'Successfully deleted' });
        });
    },
    getAll: (req, res) => {
        user_1.User.find((err, users) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).json(users);
        });
    },
    getById: (req, res) => {
        user_1.User.findById(req.params.user_id, (err, user) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).json(user);
        });
    },
    update: (req, res) => {
        user_1.User.findById(req.params.user_id, (err, user) => {
            if (err) {
                res.send(err);
            }
            user.name = req.body.name;
            user.save((error) => {
                if (error) {
                    res.status(500).send(err);
                }
                res.status(200).json(user);
            });
        });
    },
};
//# sourceMappingURL=user.js.map