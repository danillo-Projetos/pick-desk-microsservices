import HttpStatus from 'http-status-codes';

class AppError {
  public readonly message: string;
  public readonly code: string;
  public readonly statusCode: number;
  public readonly error?: Error;

  constructor(
    message: string,
    code = HttpStatus.getStatusText(HttpStatus.BAD_REQUEST),
    statusCode = HttpStatus.BAD_REQUEST,
    error?: Error,
  ) {
    this.message = message;
    this.code = code;
    this.statusCode = statusCode;
    this.error = error;
  }
}

export { AppError };
