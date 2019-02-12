"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../../../controllers");
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
    .post(controllers_1.userController.add)
    /**
     * This function comment is parsed by Anshu
     * @route GET /users
     * @group Get all user - Retrieve a list of users
     * @produces application/json
     * @consumes application/json
     */
    .get(controllers_1.userController.getAll);
router.route('/users/:user_id')
    .get(controllers_1.userController.getById)
    .put(controllers_1.userController.update)
    .delete(controllers_1.userController.deleteById);
exports.default = router;
//# sourceMappingURL=users.js.map