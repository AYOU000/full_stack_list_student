import express from "express"
import mongoose from "mongoose";
import cors from "cors";
import studentsRouter from "./routers/student.ts"
const app =  express()
const port = 5000;
app.use(cors(
  {
    origin: "http://localhost:5173"
  })
);
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/students')
  .then(() => console.log('Connected!'));

app.use('/students',studentsRouter)

 
app.listen(port, () =>
{

    console.log("running on port"+port)
})

