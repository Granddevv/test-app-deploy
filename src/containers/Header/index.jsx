import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green, orange, grey } from '@material-ui/core/colors';
import './style.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    header: {
        backgroundColor: grey[800]

    }
}));

const Header = ({
    firstName,
    lastName,
    title,
    profileUrl,
    handleNavigate
}) => {
    const [ menuOpen, setMenuOpen ] = useState(false);
    const classes = useStyles();

    const handleMenuItemClick = (sectionTitle) => {
        setMenuOpen(false);
        handleNavigate(sectionTitle)
    }

    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => setMenuOpen(true)}>
                    <MenuIcon />
                </IconButton>

            </Toolbar>
            <Drawer anchor="left" open={menuOpen} onClose={() => setMenuOpen(false)}>
                <div className="sidebar-container">
                    <div className="profile-container">
                        <div className="avatar-container" style={{backgroundImage: `url("${profileUrl}")`}}></div>
                        <div className="title-container">
                            <h5>{firstName} {lastName}</h5>
                            <h6>{title}</h6>
                        </div>
                    </div>
                    <div className="menu-container">
                        <a className="menu-item" onClick={() => handleMenuItemClick('introduction')}>Introduction</a>
                        <a className="menu-item" onClick={() => handleMenuItemClick('about')}>About</a>
                        <a className="menu-item" onClick={() => handleMenuItemClick('experience')}>Experience</a>
                        <a className="menu-item" onClick={() => handleMenuItemClick('skill')}>Skill</a>
                        <a className="menu-item" onClick={() => handleMenuItemClick('education')}>Education</a>
                        <a className="menu-item" onClick={() => handleMenuItemClick('service')}>Service</a>
                        <a className="menu-item" onClick={() => handleMenuItemClick('portfolio')}>Portfolio</a>
                        <a className="menu-item" onClick={() => handleMenuItemClick('archivement')}>Archivement</a>
                        <a className="menu-item" onClick={() => handleMenuItemClick('interest')}>Interest</a>
                        <a className="menu-item" onClick={() => handleMenuItemClick('contact')}>Contact</a>
                    </div>
                </div>
            </Drawer>
        </AppBar>
    )
}

export default Header;