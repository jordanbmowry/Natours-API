/* eslint-disable import/extensions */
import express from 'express';
import controller from '../controllers/tourController.js';

const router = express.Router();

router.route('/').get(controller.list).post(controller.create);
router
  .route('/:id')
  .patch(controller.update)
  .delete(controller.delete)
  .get(controller.read);

export default router;
