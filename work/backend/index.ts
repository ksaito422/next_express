import express from 'express';
import apiRouter from 'routes/api.route';

const app = express();
const port = 8000;

app.use('/api', apiRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
