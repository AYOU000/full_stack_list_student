import type { student } from "../utils/data";
const based_url = "http://localhost:5000/students";

 export const fetchStudents = async () =>
 { 
  try{
    const response = await fetch(based_url) ;
     if(!response.ok)
      {
        throw new Error(`${response.statusText}:${response.status}`)
      }   
    
     return await response.json();
  }catch(err)
  {
    throw err
  }
  
};
 export const creatStudent = async (data:student) =>
 {
  try 
  {
  const response = await fetch(based_url ,
  {
    method:"Post",
    body: JSON.stringify(data),
    headers:{
      "Content-Type":"application/json"
    }   
  })
   if(!response.ok)
      {
        throw new Error(`${response.statusText}:${response.status}`)
      }   
    
 return await response.json();
} catch(err)
{
  throw err
}
};