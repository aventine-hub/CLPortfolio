import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';
import './NavBar.css';
import hex from './hexpattern.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textAlign: 'left',
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "24.0263px",
    },
    navbar: {
        backgroundImage: 'url("https://i.imgur.com/99fCkda.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        height: '20vh',
        color: 'white',
    },
    links: {
        textDecoration: "none",
        color: "#484848",
        width: "10rem",
        textAlign: "right",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "24.0263px",

    },

}));

export default function MenuAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    var open = Boolean(anchorEl);


    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.navbar}>
                    <Typography variant="h6" className={classes.title}>
                        <img className="hexpattern" src={hex} alt="hex pattern" />
                    </Typography>
                    <div>
                        <IconButton aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu} onClose={handleClose} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onMouseLeave={handleClose}


                            >
                                <MenuItem onClick={{ handleClose }} ><Link className={classes.links} to=''>Home</Link></MenuItem>
                                <MenuItem onClick={{ handleClose }}><Link className={classes.links} to='/resume'>Resume</Link></MenuItem>
                                <MenuItem onClick={{ handleClose }}><Link className={classes.links} to='/projects'>Projects</Link></MenuItem>
                                <MenuItem ><a className={classes.links} href="https://www.linkedin.com/in/chrisallenlong/">LinkedIn</a></MenuItem>
                                <MenuItem ><a className={classes.links} href="https://github.com/aventine-hub/">GitHub</a></MenuItem>

                            </Menu>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
