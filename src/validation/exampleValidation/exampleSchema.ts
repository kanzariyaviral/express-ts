import Joi from 'joi';
export const exampleSchema = {
    getExampleDate: Joi.object({
        name:Joi.string().min(3).max(30).required(),
        id:Joi.number().required()
    }),
};