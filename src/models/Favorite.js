import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Favorite = sequelize.define('Favorite', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }
}, {
  tableName: 'favorites'
});
