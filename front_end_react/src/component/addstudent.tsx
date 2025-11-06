import { Button, Paper, TextField } from "@mui/material";
import {  useEffect, useState, type ChangeEvent, type Dispatch, type SetStateAction } from "react";
import {  type student } from "../utils/data";
import { creatStudent } from "../api/students";

interface Props {
        students: student[];
        setstudents:Dispatch<SetStateAction<student[]>>
}
function Addstudent({ setstudents , students }:Props) {
  
 const initionalstate = { id: "", fullname: "", age: "", email: "", class: "" };

  const [fromdata,setformdata] = useState(initionalstate)
     
   function handlechange (e: ChangeEvent<HTMLInputElement>) 
  {
     setformdata({...fromdata,[e.target.name]:e.target.value})  
  }
 
  const handlesubmit = async() =>
  {
    try
    {
    const data = await creatStudent(fromdata);
   setstudents([...students,fromdata]);
   setformdata(initionalstate);
   console.log({data})
    }catch(err)
    {
      alert(err)
    }
  }
   useEffect(() => 
 {
    console.log("firing effect");
    if(fromdata.fullname === "admin")
      alert("the name isn t allowed")
 },[fromdata.fullname]
 )

  return (
    <>
      <Paper
        sx={{
          width: 300,
          padding: 2,
          margin: 5,
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
         <TextField
          onChange={handlechange}
          value={fromdata.id}
          id="filled-basic"
          label="Id"
          name="id"
          variant="filled"
        />
        <TextField
          onChange={handlechange}
          value={fromdata.fullname}
          id="filled-basic"
          label="Full name"
          name="fullname"
          variant="filled"
        />
        <TextField
          onChange={handlechange}
          value={fromdata.age}
          id="filled-basic"
          label="Age"
          name="age"
          variant="filled"
        />
        <TextField
          onChange={handlechange}
          value={fromdata.email}
          id="filled-basic"
          label="Email"
          name="email"
          variant="filled"
        />
        <TextField
          onChange={handlechange}
          value={fromdata.class}
          id="filled-basic"
          label="class"
          name="class"
          variant="filled"
        />
        <Button onClick={handlesubmit} variant="outlined">
          submit
        </Button>
      </Paper>
    </>
  );
}
export default Addstudent;
