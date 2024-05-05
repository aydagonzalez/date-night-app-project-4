import { Link } from "react-router-dom"
import * as userService from "../../utilities/users-service"
import { useState } from "react";
import { Favorite as FavoriteIcon, Home as HomeIcon, ExpandMore as ExpandMoreIcon, MoreVert as MoreVertIcon, Link as LinkIcon, Accessible as AccessibleIcon } from "@mui/icons-material";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
// import logo from '../../../public/logo.png'

export default function NavBar({ user, setUser, events, savedYelpData }) {
  const savedEventCount = events.length + savedYelpData.length
  const userName = user.name.charAt(0).toUpperCase() + user.name.slice(1)
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}></MenuItem>
      {/* <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
      <MenuItem onClick={handleMenuClose}>

        <Link to="" onClick={handleLogOut} >Log Out</Link></MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="medium" color="inherit">
          <Badge badgeContent={savedEventCount} color="error" sx={{
            '& .MuiBadge-badge': {
              fontSize: '0.6rem',
              padding: '0 3px'
            }
          }} >
            <Link to="/events/saved" className="custom-link" >  <FavoriteIcon /> </Link>

          </Badge>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="small"
          aria-label="Home"
          color="inherit"
        >
          <Link to="/" className="custom-link"><HomeIcon /> Home</Link>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="small"
          aria-label="Home"
          color="inherit"
        >
          <Link to="/yelp" className="custom-link">Yelp</Link >
        </IconButton>
      </MenuItem>

      <MenuItem>
        <IconButton
          size="small"
          aria-label="Home"
          color="inherit"
        >
          <Link to="/events/concerts" className="custom-link" >Concerts</Link>
        </IconButton>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );


  return (
    <Box sx={{ flexGrow: 1 }} className="NavBar" >
      <AppBar position="fixed" style={{ height: '75px', width: '100%', 
      // backgroundColor: "red"
      }} >
        <Toolbar>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
            <img src="/logo.png" alt="App logo"  className="navbar-logo" />

          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Date Night
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={savedEventCount} color="error" sx={{
                '& .MuiBadge-badge': {
                  fontSize: '0.6rem',
                  padding: '0 3px'
                }
              }} >
                <Link to="/events/saved" className="custom-link" >  <FavoriteIcon /> </Link>

              </Badge>
            </IconButton>
            <IconButton
              size="small"
              aria-label="Home"
              color="inherit"
            >

              <Link to="/" className="custom-link">Home</Link>

            </IconButton>

            <IconButton
              size="small"
              aria-label="Home"
              color="inherit"
            >
              <Link to="/yelp" className="custom-link">Yelp</Link >
            </IconButton>

            <IconButton
              size="small"
              aria-label="Home"
              color="inherit"
            >

              <Link to="/events/concerts" className="custom-link" >Concerts</Link>

            </IconButton>







            <p style={{ padding: "10px" }}>Welcome {userName}! </p>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

