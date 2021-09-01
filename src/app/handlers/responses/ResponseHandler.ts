interface ResponseHandler<T> {
  data?: T | Array<T>,
  error?: T
}

export { ResponseHandler };
