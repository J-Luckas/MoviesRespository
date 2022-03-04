import { Response } from 'express';
import { AppError } from '../errors/AppError';

export function defineError(err: AppError, res: Response) {
  if (err instanceof AppError) {
    return res
      .status(err.statusCode)
      .json({
        message: err.message,
      });
  }
  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
}
