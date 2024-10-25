import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

export const db = new Sequelize(process.env.DB_URL);

export async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
    console.log('Connected to the database');
  } catch (error) {
    console.log(error);
    console.log('Error connecting to the database');
  }
}
