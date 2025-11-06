import Addstudent from "./component/addstudent";
import StudentTable from "./component/Table";
import './App.css'
import { useEffect, useState } from "react";
import type { student } from "./utils/data";
import { fetchStudents } from "./api/students";
function App() {
     const [students,setstudents] = useState<student[]>([]);
 

   
     useEffect(() =>
    {
     fetchStudents().then((data) =>setstudents(data)).catch((err) => alert(err))
    },[])

   return (
    <>
      <StudentTable students={students}/>
      <Addstudent students={students} setstudents={setstudents}/>
    </>
  );
}

export default App;
