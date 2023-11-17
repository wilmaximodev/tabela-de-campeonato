import * as Joi from 'joi';

export default function validateEmail(email: string) {
  const schema = Joi.string().email().required();
  const { error } = schema.validate(email);
  return !error;
}
