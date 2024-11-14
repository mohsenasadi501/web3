import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Web3</Link>
                </Typography>
                <Button color="inherit">
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                </Button>
                <Button color="inherit">
                    <Link to="/transfer" style={{ color: 'inherit', textDecoration: 'none' }}>Tranfer</Link>
                </Button>
            </Toolbar>
        </AppBar>
    );
};


export default Navbar;
