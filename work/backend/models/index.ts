import { Sequelize } from 'sequelize';
import { User } from 'models/user';

const sequelize = new Sequelize({
  host: 'db',
  timezone: '+09:00',
  dialect: 'mysql',
  port: 3306,
  username: 'admin',
  password: 'secret',
  database: 'default',
});

const db = {
  User: User.initialize(sequelize),
};

export { db };
