import Joi from 'joi';

const schema = Joi.object({
  code: Joi.string().alphanum().min(2).max(5).required(),
  name: Joi.string().required(),
  region: Joi.string().required(),
  population: Joi.number().integer().min(0).required()
});

export function validateCountry(data) {
  return schema.validate(data);
}
