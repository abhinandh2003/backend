import React from 'react'
import { TextField, Button } from '@mui/material'

const Add = () => {
    return (
        <div>
            <center>
                <h1>PLEASE PROVIDE YOUR DETAILS🙏</h1>

                <TextField variant='outlined' label='name' /><br></br><br></br>
                <TextField variant='outlined' label='age' /><br></br><br></br>
                <TextField variant='outlined' label='dept' /><br></br><br></br>
                <TextField variant='outlined' label='salary' /><br></br><br></br>
                <Button variant='contained'>SUBMIT</Button>
            </center>
        </div>
    )
}

export default Add