import express from 'express';
import { usersRoutes } from './controllers/UserController';

const app = express();
app.use(express.json());

app.use('/users', usersRoutes);

app.listen(8080, () => console.log('Server is runnig!'));
