import express from "express"
import { studentModel } from "../models/students.ts";

const router =  express.Router();

router.get("/",async (req,  res) =>
{
  try{
     const student =  await studentModel.find();
      res.status(200).send(student);
  }catch 
  {
    res.status(500).send("something doing wrong")
  }
 
 
});
router.get("/:id",async(req,  res) =>
{
  const id = req.params.id
  const student =  await studentModel.findById(id);
  if(!student)
    res.status(404).send("not found")
   res.status(200).send(student); 
});

router.post("/",async (req,  res) =>
{
  try{
  const data = req.body;
  const newstudent = await studentModel.create(data) ;
  newstudent.save();
  res.status(201).send(newstudent)
  } catch (err: any)
  {
    res.status(500).send(err.message)
     
  }


});
router.put("/:id",async (req,  res) =>
{
   const id = req.params.id;
   const data = req.body;
   const student =  await studentModel.findByIdAndUpdate(id,data,{new:true});
   if(!student)
    return res.status(404).send("not found");
   
    res.status(200).send(student);
});
router.delete("/:id",async (req,  res) =>
{
     const id = req.params.id;
     const student =  await studentModel.findByIdAndDelete(id); 
     if(!student)
     return  res.status(404).send("not found");
     
     res.send("done")
});


export default router;