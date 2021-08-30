import { createConnection } from 'typeorm';
import * as sql from 'mssql';

class Database {
  public static init() {
    createConnection()
      .then(() => console.log('DB Connected'))
      .catch((error) => console.log(error));
  }

  public static testConnectionMsSql() {
    const config = {
      user: 'sa',
      password: 'devSis2021',
      server: 'localhost',
      database: 'pick-desk',
    };

    // connect to your database
    sql.connect(config, (err) => {
      if (err) console.log(err);
    });
  }
}

export { Database };
