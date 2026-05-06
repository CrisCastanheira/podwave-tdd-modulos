import 'dotenv/config';
import app from './app.js';
import { sequelize, connectDatabase } from './config/database.js';
import './models/index.js';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectDatabase();
  await sequelize.sync({ alter: true });

  app.listen(PORT, () => {
    console.log(`🎧 PodWave rodando em http://localhost:${PORT}`);
  });
};

startServer();
