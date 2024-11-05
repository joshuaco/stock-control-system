import { Router } from 'express';
import { param } from 'express-validator';
import {
  updateStockAvailability,
  createProduct,
  getProductByID,
  getProducts,
  updateProduct,
  deleteProduct
} from '../handlers/product';
import { handleInputErrors, handleBodyValidations } from '../middlewares';

const router: Router = Router();

router.get('/', getProducts);
router.get(
  '/:id',
  param('id').isInt().withMessage('id must be an integer'),
  handleInputErrors,
  getProductByID
);

router.post('/', handleBodyValidations, handleInputErrors, createProduct);

router.put('/:id', handleBodyValidations, handleInputErrors, updateProduct);

router.patch(
  '/:id',
  param('id').isInt().withMessage('id must be an integer'),
  handleInputErrors,
  updateStockAvailability
);

router.delete(
  '/:id',
  param('id').isInt().withMessage('id must be an integer'),
  handleInputErrors,
  deleteProduct
);

export default router;
