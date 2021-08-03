import express from 'express';
import { router } from './routes';

const app = express();
app.use(express.json());
app.use(router);
app.listen(8080, () => console.log('Server is runnig in http://localhost:8080 !'));
