import { Sequelize } from 'sequelize';

export const database = new Sequelize({
  database: 'db_startup',
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'root',
  define: {
    charset: 'utf8mb4',
    timestamps: true
  }
});
