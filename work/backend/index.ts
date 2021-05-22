import express from 'express';
import router from './routes/index';

const app = express();
const port = 8000;

app.use('/api', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
