import 'reflect-metadata';
import 'express-async-errors';
import HttpStatus, { getReasonPhrase } from 'http-status-codes';
import express from 'express';
import { router } from './routes';
import { Database } from './app/database';
import { ExceptionHandler } from './app/handlers/exceptions';
import { AppError } from './app/handlers/exceptions/AppError';

const app = express();
app.use(express.json());
app.use(router);
app.use(ExceptionHandler);

app.listen(8080, () => {
  Database.init()
    .then(() => console.log('Server is runnig in http://localhost:8080 !'))
    .catch((error) => {
      throw new AppError(
        'Erro interno!',
        getReasonPhrase(HttpStatus.INTERNAL_SERVER_ERROR),
        HttpStatus.INTERNAL_SERVER_ERROR,
        error,
      );
    });
});
