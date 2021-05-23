import { Sequelize, Model, DataTypes } from 'sequelize';

class User extends Model {
  public id!: number;
  public name!: string;
  public age!: number;
  public sex!: number;
  public email!: string;
  public password!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // 初期化
  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
        },
        age: {
          type: DataTypes.INTEGER,
        },
        sex: {
          type: DataTypes.INTEGER,
        },
        email: {
          type: DataTypes.STRING,
        },
        password: {
          type: DataTypes.STRING,
        },
      },
      {
        tableName: 'users',
        underscored: true,
        sequelize: sequelize,
      }
    );
    return this;
  }
}

export { User };
