import Joi from "joi";

const userValidator = Joi.object({
    userid: Joi.number()
        .min(1)
        .max(999)
        .required()
        .messages({
            'number.min':'min id is 1',
            'number.max':'max id is 999'}),
    title: Joi.string()
        .min(3)
        .required()
        .messages({'string.required.base': 'enter at least 3 chars'}),
    body: Joi.string()
        .min(3)
        .max(50)
        .required()
        .messages({
            'string.min':'body must be at least 3 chars',
            'string.max':'body cannot be more then 50 chars'}),

})



export default userValidator