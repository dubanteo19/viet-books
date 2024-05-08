import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import React from "react";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        size="large"
                        color="inherit"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            Menu
                        </Typography>
                        <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default Header;