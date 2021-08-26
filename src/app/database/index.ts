import { createConnection } from 'typeorm';

class Database {
  public static init() {
    createConnection()
      .then(() => console.log('DB Connected'))
      .catch((error) => console.log(error));
  }
}

export { Database };
