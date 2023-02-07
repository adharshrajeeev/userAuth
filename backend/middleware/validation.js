const Joi=require('joi');

const signUpValidate=(data)=>{
    const Schema=Joi.object({
        name: Joi.string().min(5).required(),
		email: Joi.string().min(6).required().email(),
		password: Joi.string().min(6).required(),
    });

    return Schema.validate(data);
}


const loginValidate=(data)=>{
    const Schema=Joi.object({
        email: Joi.string().min(6).required().email(),
		password: Joi.string().min(6).required(),
    });
    return Schema.validate(data);
}

module.exports={signUpValidate,loginValidate}