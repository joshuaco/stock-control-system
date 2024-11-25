import { Sequelize } from 'sequelize-typescript';
import colors from 'colors';
import dotenv from 'dotenv';
dotenv.config();

export const db = new Sequelize(process.env.DB_URL, {
  models: [__dirname + '/../models/*'],
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  },
  logging: false
});

export async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
    console.log(colors.green('Connected to the database'));
  } catch (error) {
    console.log(error);
    console.log(colors.red('Error connecting to the database'));
  }
}
