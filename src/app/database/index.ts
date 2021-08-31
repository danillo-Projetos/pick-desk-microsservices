import { createConnection } from 'typeorm';

class Database {
  static async init() {
    try {
      await createConnection();
      console.log('DB Connected');
    } catch (error) {
      throw new Error(error);
    }
  }
}

export { Database };
