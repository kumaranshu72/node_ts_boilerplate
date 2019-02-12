"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const router = express_1.Router();
router.route('/users')
    /**
      * This function comment is parsed by Anshu
      * @route POST /users
      * @group Add a user - Adding a new user
      * @produces application/json
      * @consumes application/json
      * @param {string} name.body.required - user Name
      * @returns {object} 200 - Newly created user
      * @return {object} 500 - Internal Server Error
      */
    .post(user_1.userController.add)
    .get(user_1.userController.getAll);
router.route('/users/:user_id')
    .get(user_1.userController.getById)
    .put(user_1.userController.update);
exports.default = router;
//# sourceMappingURL=users.js.map