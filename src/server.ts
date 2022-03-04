import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import './database';
import { router } from './routes';
import { AppError } from './errors/AppError';

const app = express();
app.use(express.json());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    console.log(err);
    return res
      .status(err.statusCode)
      .json({
        message: err.message,
      });
  }

  return res.status(500).json({
    status: 'error',
    message: `Internal Server Error: ${err.message}`,
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
