import express from 'express';
import { router } from './routes';
import 'reflect-metadata';
import { Database } from './app/database';

const app = express();
app.use(express.json());
app.use(router);

app.listen(8080, () => {
  Database.testConnectionMsSql();
  console.log('Server is runnig in http://localhost:8080 !');
});
