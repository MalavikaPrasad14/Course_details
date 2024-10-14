import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location=useLocation();
    return (
        <>
        {/* <div>Navbar</div> */}
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="inherit" sx={{backgroundColor:"gray-dark"}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >

                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
                        LEARNERS
                    </Typography>
                    {/* Conditionally render buttons based on the current route */}
                    {location.pathname === '/home' ? (
                        <>
                            <Button href='/home' color="inherit">Home</Button>
                            <Link to='/add'><Button color="inherit">Add New</Button></Link>
                        </>
                    ) : location.pathname === '/' ? (
                        <Button href='/' color="inherit"></Button>
                    ) : null}
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar