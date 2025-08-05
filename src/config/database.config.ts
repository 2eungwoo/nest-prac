import { registerAs } from '@nestjs/config';
import Joi from 'joi';

export const databaseValidationSchema = Joi.object({
  DB_TYPE: Joi.string().valid('mysql').required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_DATABASE: Joi.string().required(),
});

export default registerAs('database', () => ({
  type: process.env.DB_TYPE as 'mysql',
  host: process.env.DB_HOST,
  port:process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: process.env.NODE_ENV !== 'production',
  logging: process.env.NODE_ENV === 'development',
}));