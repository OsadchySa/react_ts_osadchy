import Joi from "joi";

const userValidator = Joi.object({
    username: Joi.string()
        .required()
        .messages({'string.required.base': 'enter at least 3 chars'}),
    password: Joi.string()
        .min(3)
        .max(12)
        .required()
        .messages({
            'string.min':'password must be at least 3 chars',
            'string.max':'password cannot be more then 12 chars'}),
    age: Joi.number()
        .min(14)
        .max(132)
        .required()
        .messages({
            'number.min':'min age is 15',
            'number.max':'max age is 132'})
})



export default userValidator