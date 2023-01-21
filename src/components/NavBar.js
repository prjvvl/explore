import { AppBar, Box, Button, IconButton, Menu, Toolbar, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import React from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
    return (<Box sx={{flexGrow:1}}>
        <AppBar position="static" color="transparent">
            <Toolbar>
                <Typography variant="h6" component='div' sx={{flexGrow:1}}>Explore</Typography>
                <IconButton size="large" aria-label="github" color="inherit" onClick={event =>  window.location.href='https://github.com/prjvvl'}><GitHubIcon fontSize="large"/></IconButton>
                <IconButton size="large" aria-label="github" color="inherit" onClick={event =>  alert('WIP')}><MenuIcon fontSize="large"/></IconButton>
            </Toolbar>
        </AppBar>
    </Box>)
}