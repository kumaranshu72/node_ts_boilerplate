import { Router } from 'express';
import { userController } from '../controllers/user';

const router: Router = Router();

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
    .post(userController.add)
    .get(userController.getAll);
router.route('/users/:user_id')
    .get(userController.getById)
    .put(userController.update)
    .delete(userController.deleteById);

export default router;
