import { Router } from 'express';
import { createProduct } from '../handlers/product';

const router: Router = Router();

router.get('/', (_req, res) => {
  res.json({ message: 'from GET' });
});

router.post('/', createProduct);

router.put('/', (_req, res) => {
  res.json({ message: 'from PUT' });
});

router.delete('/', (_req, res) => {
  res.json({ message: 'from DELETE' });
});

export default router;
