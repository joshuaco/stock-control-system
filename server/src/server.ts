import express from 'express';
import { connectDB } from './config/db';
import productsRouter from './routes/router';

connectDB();

const server: express.Express = express();

server.use(express.json());
server.use('/api/products', productsRouter);

export default server;
