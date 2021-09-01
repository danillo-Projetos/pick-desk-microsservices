import { NextFunction, Request, Response } from 'express';
import HttpStatus, { getReasonPhrase } from 'http-status-codes';
import { ResponseHandler } from '../responses/ResponseHandler';
import { AppError } from './AppError';

function ExceptionHandler(error: Error,
  req: Request,
  res: Response<ResponseHandler<AppError>>,
  next: NextFunction) {
  if (error instanceof AppError) {
    const { code, message, statusCode } = error;
    return res.status(statusCode).json({
      error: {
        ...error,
        code,
        statusCode,
        message,
      },
    });
  }

  return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
    error: {
      code: getReasonPhrase(HttpStatus.INTERNAL_SERVER_ERROR),
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: error.message,
      error,
    },
  });
}

export { ExceptionHandler };
