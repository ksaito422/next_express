import { Router } from 'express';
import users from 'app/controllers/user.controller';

const router = Router();

// api/
router.get('/', (req, res, next) => {
  res.send('テスト');
});

// api/users
router.use('/users', users);

export default router;
