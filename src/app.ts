import express from "express";
import createHttpError from "http-errors";
import exampleroutes from "./routes/exampleroutes";
import mongoose from "mongoose";
import { DB, PORT } from "./config";
import { errorHandler } from "./middleware/errorHandler";
import morgan from "morgan";
const app =express();

app.use(express.json());
app.use(morgan("tiny"));
app.use('/',exampleroutes);

app.use(()=>{
    throw createHttpError(404,"route not fount")
});


app.use(errorHandler);



mongoose
.connect(DB)
.then(()=>{
    console.log('connect to db');
    app.listen(PORT, ()=>{
        console.log(`server listen port no ${PORT}`);
    });
})
.catch(()=>{
    throw createHttpError(501,"unable to connect database");
});


