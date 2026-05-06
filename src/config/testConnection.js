import 'dotenv/config';
import { sequelize, connectDatabase } from './database.js';
import '../models/index.js';

await connectDatabase();
await sequelize.close();
