import { Router } from 'express';
import { param } from 'express-validator';
import handler from '../handlers/product';
import { handleInputErrors, handleBodyValidations } from '../middlewares';

const router: Router = Router();

router.get('/', handler.getProducts);
router.get(
  '/:id',
  param('id').isInt().withMessage('id must be an integer'),
  handleInputErrors,
  handler.getProductByID
);

router.post(
  '/',
  handleBodyValidations,
  handleInputErrors,
  handler.createProduct
);

router.put(
  '/:id',
  param('id').isInt().withMessage('id must be an integer'),
  handleBodyValidations,
  handleInputErrors,
  handler.updateProduct
);

router.patch(
  '/:id',
  param('id').isInt().withMessage('id must be an integer'),
  handleInputErrors,
  handler.updateStockAvailability
);

router.delete(
  '/:id',
  param('id').isInt().withMessage('id must be an integer'),
  handleInputErrors,
  handler.deleteProduct
);

export default router;
