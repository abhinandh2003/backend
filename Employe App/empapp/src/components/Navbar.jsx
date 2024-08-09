import React from 'react'
import { AppBar, Button, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
                  <Link to='/l'>
                  <Button variant='contained'>ADD</Button>
                  </Link>
                  <Link to='/v'>
                  <Button variant='contained'>View</Button>
                  </Link> 
              </Toolbar>
          </AppBar>
          <br /><br />
    </div>
  )
}

export default Navbar