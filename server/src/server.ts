import express from 'express';
import { connectDB } from './config/db';
import cors, { CorsOptions } from 'cors';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec, { swaggerUIoptions } from './config/swagger';
import productsRouter from './routes/router';

connectDB();

const server: express.Express = express();

server.disable('x-powered-by');

const corsOptions: CorsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

server.use(cors(corsOptions));

server.use(express.json());
server.use(morgan('dev'));

server.use('/api/products', productsRouter);
server.use('/api', (_req, res) => {
  res.status(200).json({ message: 'API is running' });
});

// Docs
server.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, swaggerUIoptions)
);

export default server;
