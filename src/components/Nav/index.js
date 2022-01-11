import React, { useState } from "react";
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const Nav = (props) => {
    const {
        pages = [],
        currentPage,
        setCurrentPage,
        pageSelected,
        setPageSelected
    } = props;
    
  const [anchorElNav, setAnchorElNav] = useState(null);
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    
    <AppBar sx={{ bgcolor:'#2b2d42'}} position="sticky">
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <MenuItem component={Link} to='/' >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            RICHARD MARTIN
          </Typography>
          </MenuItem>

          <Box  sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem component={Link} to={page.name} key={page.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <MenuItem component={Link} to='/' >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }} }
          >
            RICHARD MARTIN
          </Typography>
          </MenuItem>
          <Box sx={{ justifyContent: 'flex-end',flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button component={Link} to={page.name}
                key={page.id}
                id={`${currentPage.name === page.name && !pageSelected && 'navActive'}`}
                onClick={() => {
                    setCurrentPage(page);
                    setPageSelected(false);
                }}
                sx={{ color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;