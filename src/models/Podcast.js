import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Podcast = sequelize.define('Podcast', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  category: {
    type: DataTypes.STRING(80),
    allowNull: false
  },
  cover_url: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'podcasts'
});
