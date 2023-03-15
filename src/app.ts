import express from 'express'
import {json} from 'body-parser'

import todoRoutes from "./routes/todos"

const app = express()

app.use(json())

app.use('/todos',todoRoutes)

app.use((err:Error,req:express.Request,res:express.Response,next:express.NextFunction)=>{
console.log(err);
return res.status(500).send(err)
next()
})

app.listen(5000,()=>{
    console.log("Listening on port 500");
})