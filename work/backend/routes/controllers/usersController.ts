import { Router } from 'express';

const router = Router();

router.get('/', (req, res, next) => {
  res.send('user情報取得');
});

export default router;
