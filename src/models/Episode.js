import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Episode = sequelize.define('Episode', {
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
  audio_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  duration_seconds: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
}, {
  tableName: 'episodes'
});
