import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, IconButton, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import './navBar.css';
import renoldLogo from '../../Images/instalogo.png';
import MenuIcon from '@mui/icons-material/Menu';

function NavBar(){
    const [value, setValue] = useState(0);
    return(
        <React.Fragment>
            <AppBar className='custom-app-bar' position='fixed' sx={{margin:0}} >
                <Toolbar className='app-toolbar'>
                    <Box component="img" src={renoldLogo} alt="Logo" sx={{ height: 48, display:{xs:'none', md:'flex'}}} />
                    <Typography variant='h5' sx={{marginLeft:'10px', display:{xs:'none', md:'flex'}}}>Renold Engineering</Typography>
                    <Tabs value={value} onChange={(e,val)=>setValue(val)} indicatorColor='secondary' sx={{marginLeft:'auto', display:{xs:'none', md:'flex'}}} className='app-tabs'>
                        <Tab className='app-bar-tab' label='Home'/>
                        <Tab className='app-bar-tab' label='Products'/>
                        <Tab className='app-bar-tab' label='About'/>
                        <Tab className='app-bar-tab' label='Contact Us'/>
                    </Tabs>
                    <Box sx={{display:{xs:'flex', md:'none'}}} className='app-tabs'>
                        <IconButton size='large' color='inherit' edge='start'>
                            <MenuIcon/>
                        </IconButton>
                        <Box component="img" src={renoldLogo} alt="Logo" sx={{ height: 48, display:{xs:'flex', md:'none'}, justifyContent:'flex-end'}} /> 
                        <Typography variant='h5' sx={{marginLeft:'10px', display:{xs:'flex', md:'none'}, alignItems:{xs:'flex-end', md:'none'}}}>Renold Engineering</Typography> 
                    </Box>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default NavBar;

