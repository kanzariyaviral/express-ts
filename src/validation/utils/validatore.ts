import { NextFunction } from "express";
import createHttpError from "http-errors";
import Joi from "joi";


const validatore=async(
    schemaName:Joi.ObjectSchema,
    body:object,
    next:NextFunction
)=>{
    const  value =await schemaName.validate(body);
    try{
        value.error
        ? next(createHttpError(402,value.error.details[0].message))
        :next()
    }
    catch(error){
        console.log(error);

    }
};
export default validatore;