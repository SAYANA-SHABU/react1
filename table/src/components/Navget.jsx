
import { AppBar, Toolbar,Typography  } from '@mui/material'
import React from 'react'
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
const Navget = () => {
  return (
    <div>
<AppBar sx='background: rgb(12,13,24);
background: linear-gradient(90deg, rgba(12,13,24,1) 0%, rgba(135,179,191,1) 48%, rgba(1,10,11,1) 100%);'>
   <Toolbar>
   <Typography   variant="h6" sx={{fontFamily:'Bernard MT Condensed',fontSize:'30px'}}>Film Fare </Typography>
  <div id='t'>
  <Link to ='/home'>
  <button> < HomeIcon /></button></Link>
   <Link to ='/pro'>
<button id='q' ><MovieFilterIcon /></button></Link>
  </div>

   </Toolbar>
</AppBar>
    </div>
  )
}

export default Navget
