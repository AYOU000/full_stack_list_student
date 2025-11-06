import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import type { student } from '../utils/data';
import { useEffect, useMemo } from 'react';

interface Props{
    students: student[];
}

function StudentTable({students}: Props) {
    useEffect(() => {
    if(students.length === 5)
     alert("storge full now,you can t add more")
    }, [students])

    const studentscholarship = useMemo(() => { 
     return students.map ((s)  =>{
      let result = false;
      for(let i = 0;i < 100000;i++)
      {
        result = Math.random() > 0.5
      }
      return {...s,eligible:result}
    });
    },[students] )
  return (
    <>
      <TableContainer component={Paper} sx={{width:800}} >
        <Table>
        <TableHead sx={{background:"#000000"}}>
          <TableRow>
            <TableCell sx={{border:1,color:"#ffffff"}}>id</TableCell>
            <TableCell sx={{border:1,color:"#ffffff"}}>Full Name</TableCell>
            <TableCell sx={{border:1,color:"#ffffff"}}>Age</TableCell>
            <TableCell sx={{border:1,color:"#ffffff"}}>Email</TableCell>
            <TableCell sx={{border:1,color:"#ffffff"}}>Class</TableCell>
            <TableCell sx={{border:1,color:"#ffffff"}}>scholarship</TableCell>

          </TableRow>
        </TableHead>
        
        <TableBody >
        {students.map((item,index) =>
        
          (
            <TableRow key={item.id} sx={{background:"#ffffff"}} >
                <TableCell sx={{border:1} }>{item.id}</TableCell>
                <TableCell sx={{border:1}}>{item.fullname}</TableCell>
                <TableCell sx={{border:1}}>{item.age}</TableCell>
                <TableCell sx={{border:1}}>{item.email}</TableCell>
                <TableCell sx={{border:1}}>{item.class}</TableCell>
                <TableCell sx={{border:1}}>{studentscholarship[index].eligible? "yes":"no"}</TableCell>

            </TableRow>
          )
         )}
      </TableBody>
      </Table>
      </TableContainer>
    </>
  );
}

export default StudentTable  ;