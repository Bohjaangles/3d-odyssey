import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles.header2.scss'

export default function Header2() {
  function hamburgler() {
    alert('Would you like fries with that?')
  }

  return (
    <Box sx={{ flexGrow: 1, boxShadow: 1 }} className="header-wrapper">
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon onClick={hamburgler}/>
          </IconButton>
          <Typography 
            className='header-title'
            variant="h6" 
            color="inherit" 
            component="div"
            sx={{ ml: 87 }}
          >
            3D-Odyssey
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}