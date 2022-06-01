import { RequestHandler } from "express";
import validatore from "../utils/validatore";
import { exampleSchema } from "./exampleSchema";

export const getExampleDataValidation :RequestHandler=(req,res,next)=>
validatore(exampleSchema.getExampleDate,req.body,next)

