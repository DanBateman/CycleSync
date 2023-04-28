import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '../auth/authSlice';

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.loggedIn);
  const dispatch = useDispatch();
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex' }}>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ color: 'white', mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h5" sx={{ color: 'white', width: '210px' }} noWrap={true}>
            CYCLE SYNC
          </Typography>
          <Box sx={{ display: 'flex', width: '100%' }}>
            {isLoggedIn && (
              <>
                <Typography variant="h6" component={Link} to={'/'} sx={{ mr: 2, color: 'white' }}>
                  Home
                </Typography>
                <Typography
                  variant="h6"
                  component={Link}
                  to={'/calendar'}
                  sx={{ mr: 2, color: 'white' }}
                >
                  Calendar
                </Typography>
                {/* <Typography
                  variant="h6"
                  component={Link}
                  to={"/account"}
                  sx={{ mr: 2, color: "white" }}
                >
                  Account
                </Typography> */}
                <Typography
                  variant="h6"
                  component={Link}
                  to={'/stats'}
                  sx={{ mr: 2, color: 'white' }}
                >
                  My Stats
                </Typography>
                <Typography
                  variant="h6"
                  component={Link}
                  to={'/blog'}
                  sx={{ mr: 2, color: 'white' }}
                >
                  Blog
                </Typography>
              </>
            )}
          </Box>
          {/* <Button sx={{ color: "white" }}>Login</Button> */}
          {isLoggedIn ? (
            <Typography
              variant="h7"
              component={Link}
              to={'/login'}
              sx={{ mr: 2, color: 'white', width: isLoggedIn ? '75px' : '100px' }}
              onClick={() => dispatch(clearUser())}
            >
              LOGOUT
            </Typography>
          ) : (
            <Typography
              variant="h7"
              component={Link}
              to={'/login'}
              sx={{ mr: 2, color: 'white', width: isLoggedIn ? '75px' : '100px' }}
            >
              LOG IN
            </Typography>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
