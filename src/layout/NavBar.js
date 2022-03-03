import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }} className="nav-bar">
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        className="navbar-title"
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        MOVIES APP
                    </Typography>
                    <Typography
                        className="navbar-title"
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, marginLeft: 100 }}
                    >
                        BEST MOVIES
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}