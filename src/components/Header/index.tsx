import React, { useState } from 'react';
import headerStyle from "../../assets/Header";
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Drawer from '@mui/material/Drawer';
import { HOME, ABOUT_US, FAQ, CONTACT, WHATSAPP_LINK } from "../../constant";
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import WhatsApp from '@mui/icons-material/WhatsApp';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Logo from "../../assets/Images/logo.png";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Hidden from '@mui/material/Hidden';
import Typography from '@mui/material/Typography';

const useStyle = makeStyles(headerStyle);

const pages = [
    {
        'pathname': 'HOME',
        'pathUrl': HOME
    },
    {
        'pathname': 'ABOUT US',
        'pathUrl': ABOUT_US
    },
    {
        'pathname': 'FAQ',
        'pathUrl': FAQ
    },
    {
        'pathname': 'CONTACT US',
        'pathUrl': CONTACT
    }
];

interface HeaderProps {
    checkMenuItemFunc: (arg: string) => void
}

const Header: React.FC<HeaderProps> = ({ checkMenuItemFunc }) => {
    const classes = useStyle();

    const [mobileOpen, setMobileOpen] = useState(false);


    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawerWidth = 240;

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <List>
                <p>Mon to Fri:11am-8pm</p>
                <p className='mt-1'>Sat: 12pm-5pm </p>
                {pages.map((item) => (
                    <ListItem key={item.pathname} disablePadding>
                        <ListItemButton className={classes.menuItemText + " justifyCenter"} onClick={() => checkMenuItemFunc(item.pathUrl)}>
                            {item.pathname}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <div className='mt-2'>
                <a href={WHATSAPP_LINK} target="_blank"
                    rel="noreferrer noopener" className='textDeNone'> <Button variant='contained' className={classes.menuContactUsBttn}><WhatsApp />&nbsp; Contact Us</Button></a>
            </div>
        </Box>
    );

    return (
        <>
            <AppBar className={classes.header} position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Hidden smDown>
                            <LazyLoadImage
                                src={Logo}
                                width="200"
                                height="50"
                                className='pt-1 pb-1'
                            />
                        </Hidden>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleDrawerToggle}
                                style={{ color: "black" }}
                            >
                                <MenuIcon />
                            </IconButton>

                        </Box>

                        <Hidden mdUp>
                            <div className={classes.mobileLogoDiv}>
                                <LazyLoadImage
                                    src={Logo}
                                    width="200"
                                    height="50"
                                    className='pt-1 pb-1'
                                />
                            </div>
                        </Hidden>
                        <Box sx={{ flexGrow: 1, justifyContent: 'center', display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page.pathname}
                                    className={classes.menuItemText}
                                    onClick={() => checkMenuItemFunc(page.pathUrl)}
                                    //onClick={() => handleCloseNavMenu(page.pathUrl)}
                                    sx={{ my: 2, m: 2, color: 'white', display: 'block' }}
                                >
                                    {page.pathname}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box component="nav">
                <Drawer
                    //container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </>
    )
};
export default Header;