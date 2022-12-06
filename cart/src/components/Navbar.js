import * as React from 'react';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
export default function ButtonAppBar() {
    const [count, setcount] = useState(0)
  return (
    <div>
    <Box sx={{ flexGrow: 1}}>
      <AppBar sx={{backgroundColor:"inherit"}}  position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            < LocalMallIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,color:"black" }}>
            Cart
          </Typography>
          <Button sx={{ color:"black" }}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <div className='buttons'>
        <Button onClick={()=>{setcount(count+1)}} variant="contained">Add</Button>
        <Button onClick={()=>{setcount(count-1)}}   variant="contained">sub</Button>
    </div>
    <div className='count'>
        <h1>{count}</h1>
        </div>
    </div>
  );
}