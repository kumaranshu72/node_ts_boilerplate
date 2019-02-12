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
    }
};
//# sourceMappingURL=user.js.map