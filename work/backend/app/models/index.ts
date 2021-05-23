import { Sequelize } from 'sequelize';
import { dbSetting } from 'config/db.config';
import { User } from 'app/models/user.model';

// sequelizeインスタンスの作成
const sequelize = new Sequelize({
  host: 'db',
  timezone: '+09:00',
  dialect: 'mysql',
  port: 3306,
  username: dbSetting['user'],
  password: dbSetting['password'],
  database: dbSetting['database'],
});

// モデルを1つのオブジェクトにまとめる
const db = {
  User: User.initialize(sequelize),
};

export { db };
