import { Sequelize } from 'sequelize';
import { dbSetting } from 'config/dbConfig';
import { User } from 'models/user';

const sequelize = new Sequelize({
  host: 'db',
  timezone: '+09:00',
  dialect: 'mysql',
  port: 3306,
  username: dbSetting['user'],
  password: dbSetting['password'],
  database: dbSetting['database'],
});

const db = {
  User: User.initialize(sequelize),
};

export { db };
