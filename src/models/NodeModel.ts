import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { database } from '../config/database';

export interface NodeInterface {
  name: string;
}

export class Node extends Model {
  id!: number;
  name!: string;
  readonly createdAt!: Date;
  readonly updatedAt!: Date;
}

Node.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false
    }
  },
  {
    tableName: 'nodes',
    sequelize: database
  }
);

Node.sync(/*{ force: true }*/).then(() => console.log('Tabela Node criada com sucesso!'));
