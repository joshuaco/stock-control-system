import express from 'express';
import { connectDB } from './config/db';
import productsRouter from './routes/router';

connectDB();

const server: express.Express = express();

server.use(express.json());
server.use('/api/products', productsRouter);

server.use('/api', (_req, res) => {
  res.status(200).json({ message: 'API is running' });
});

export default server;
