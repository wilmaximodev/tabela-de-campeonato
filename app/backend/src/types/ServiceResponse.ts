export type ServiceMessage = { message: string };

type ServiceResponseErrorType = 'invalidData' | 'notFound' | 'conflict' | 'unauthorized';

export type ServiceResponseError = {
  status: ServiceResponseErrorType,
  data: ServiceMessage
};

export type ServiceResponseSuccess<T> = {
  status: 'successful' | 'created',
  data: T | string | ServiceMessage
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;
