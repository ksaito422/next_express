import { Router } from 'express';
import { db } from 'models/index';

const router = Router();

router.get('/', (req, res, next) => {
  (async () => {
    const users = await db.User.findAll({ attributes: ['id', 'name', 'age'] });
    // console.log(users);

    res.json(users);
  })();
});

export default router;
