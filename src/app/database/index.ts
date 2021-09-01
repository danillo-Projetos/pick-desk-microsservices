import HttpStatus, { getReasonPhrase } from 'http-status-codes';
import { createConnection } from 'typeorm';
import { AppError } from '../handlers/exceptions/AppError';

class Database {
  static async init() {
    try {
      await createConnection();
      console.log('DB Connected');
    } catch (error) {
      throw new AppError(
        'Erro ao conectar com banco de dados.',
        getReasonPhrase(HttpStatus.INTERNAL_SERVER_ERROR),
        HttpStatus.INTERNAL_SERVER_ERROR,
        error,
      );
    }
  }
}

export { Database };
