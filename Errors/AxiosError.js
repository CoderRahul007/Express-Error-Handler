class AxiosError extends Error {
    constructor(functionName , message, statusCode, data , errorStackInfo) {
      super(message);
      this.name = this.constructor.name;
      this.statusCode = statusCode;
      this.data = data;
      this.functionName = functionName;
      this.errorStackInfo = errorStackInfo
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  module.exports = AxiosError;
  