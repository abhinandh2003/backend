import React, { useState } from 'react'
import { TableContainer,Table, TableHead, TableRow, TableCell ,TableBody } from '@mui/material'
import axios from 'axios'



const View = () => {
  var [emp,setEmp] = useState([]);
  
      axios.get("http://localhost:3004/view")
      .then((res) => {
        setEmp(res.data);
      })
  
  return (
    <div>
      <TableContainer>
        <Table>
        <TableHead>
          <TableRow>
           <TableCell>Name</TableCell>
           <TableCell>Age</TableCell>
            <TableCell>Dept</TableCell>
          <TableCell>Salary</TableCell>
          </TableRow>
          </TableHead>
          <TableBody>
                  {emp.map((val)=>{
                   return(
                       <TableRow>
                       <TableCell>{val.Name}</TableCell>
                       <TableCell>{val.Age}</TableCell>
                       <TableCell> {val.Dept}</TableCell>
                       <TableCell> {val.Salary}</TableCell>
                   </TableRow>


                   )
                  })}
                  
               </TableBody>


        </Table>
      </TableContainer>
    </div>
  )
}

export default View