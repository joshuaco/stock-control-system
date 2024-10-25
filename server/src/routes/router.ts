import { Router } from 'express';

const router: Router = Router();

router.get('/', (_req, res) => {
  res.json({ message: 'from GET' });
});

router.post('/', (_req, res) => {
  res.json({ message: 'from POST' });
});

router.put('/', (_req, res) => {
  res.json({ message: 'from PUT' });
});

router.delete('/', (_req, res) => {
  res.json({ message: 'from DELETE' });
});

export default router;
