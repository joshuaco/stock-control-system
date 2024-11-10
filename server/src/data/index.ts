import { db } from '../config/db';

const clearDB = async () => {
  try {
    await db.sync({ force: true });
    console.log('Database successfully cleaned.');
    process.exit(0);
  } catch (error) {
    process.exit(1);
  }
};

if (process.argv[2] === '--clear') {
  console.log('Cleaning DB...');
  clearDB();
}
