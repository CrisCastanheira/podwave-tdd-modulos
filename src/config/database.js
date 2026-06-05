import { Sequelize } from 'sequelize';
import 'dotenv/config';

export const sequelize = new Sequelize(
  process.env.DB_NAME || 'podwave_db_tdd',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT || 3306),
    dialect: 'mysql',
    logging: false,
    define: {
      timestamps: true,
      underscored: true
    }
  }
);

export const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexão com o banco de dados realizada com sucesso.');
  } catch (error) {
    console.error('❌ Erro ao conectar com o banco de dados:', error.message);
    throw error;
  }
};
