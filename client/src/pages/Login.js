import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Paper,
  Box,
  Typography,
  Divider,
  FormControl,
  Button,
  TextField,
  InputAdornment,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from '../components/auth/authSlice';
import ToastContext from '../contexts/toast-context';

const LoginPage = () => {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginPass, setShowLoginPass] = useState(false);
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [showSignUpPass, setShowSignUpPass] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [login, setLogin] = useState(true);
  const isLoggedIn = useSelector((state) => state.auth.loggedIn);
  const loginError = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();
  const history = useHistory();
  const { success, error } = useContext(ToastContext);

  const sendLogin = () => {
    dispatch(
      loginThunk({
        username: loginUsername,
        pass: loginPassword,
      })
    );
  };

  const sendSignUp = () => {
    if (signUpPassword !== confirmPassword) {
      setConfirmPasswordError(true);
      return;
    }
    setConfirmPasswordError(false);
    dispatch(
      loginThunk({
        username: signUpUsername,
        email: signUpEmail,
        pass: signUpPassword,
        new: true,
      })
    );
  };

  useEffect(() => {
    if (isLoggedIn && !loginError) {
      history.push('/');
      success('Login successful!');
    }
    if (loginError && loginError.message.includes('401'))
      error('Invalid username/password. Please try again.');
  }, [isLoggedIn, loginError]);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '100%',
        '@media screen and (max-width: 1200px)': {
          flexDirection: 'column',
          mx: 'auto',
          mt: 5,
        },
      }}
    >
      <Paper
        elevation={8}
        sx={{
          width: '50%',
          minWidth: '700px',
          height: '70%',
          minHeight: '460px',
          maxHeight: '600px',
          mx: 'auto',
          display: 'flex',
        }}
      >
        <Box
          sx={{
            width: '49%',
            backgroundImage: 'radial-gradient(circle, white, #FAA)',
          }}
        />
        <Divider orientation="vertical" />
        <Box
          sx={{
            width: '49%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {login && (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                mx: '15%',
              }}
            >
              <Typography variant="h5" sx={{ mx: 2.7, my: 1 }} align="center">
                Login
              </Typography>
              <FormControl sx={{ mx: 2, my: 1 }}>
                <TextField
                  variant="outlined"
                  label={'Username'}
                  value={loginUsername}
                  onChange={(e) => {
                    setLoginUsername(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') sendLogin();
                  }}
                />
              </FormControl>
              <FormControl sx={{ mx: 2, my: 1 }}>
                <TextField
                  variant="outlined"
                  label={'Password'}
                  type={showLoginPass ? 'text' : 'password'}
                  value={loginPassword}
                  onChange={(e) => {
                    setLoginPassword(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') sendLogin();
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {showLoginPass ? (
                          <VisibilityOff
                            sx={{
                              cursor: 'pointer',
                            }}
                            onClick={() => setShowLoginPass((current) => !current)}
                          />
                        ) : (
                          <Visibility
                            sx={{
                              cursor: 'pointer',
                            }}
                            onClick={() => setShowLoginPass((current) => !current)}
                          />
                        )}
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row-reverse',
                  justifyContent: 'space-between',
                  mx: 2,
                  my: 1,
                }}
              >
                <Button variant="contained" onClick={sendLogin}>
                  Login
                </Button>
                <Button onClick={() => setLogin((current) => !current)}>
                  {login ? 'Sign Up' : 'Login'}
                </Button>
              </Box>
            </Box>
          )}
          {!login && (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                mx: '15%',
              }}
            >
              <Typography variant="h5" sx={{ mx: 2.7, my: 2 }} align="center">
                Sign Up
              </Typography>
              <FormControl sx={{ mx: 2, my: 1 }}>
                <TextField
                  variant="outlined"
                  label={'Email'}
                  value={signUpEmail}
                  onChange={(e) => {
                    setSignUpEmail(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') sendSignUp();
                  }}
                />
              </FormControl>
              <FormControl sx={{ mx: 2, my: 1 }}>
                <TextField
                  variant="outlined"
                  label={'Username'}
                  value={signUpUsername}
                  onChange={(e) => {
                    setSignUpUsername(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') sendSignUp();
                  }}
                />
              </FormControl>
              <FormControl sx={{ mx: 2, my: 1 }}>
                <TextField
                  variant="outlined"
                  label={'Password'}
                  type={showSignUpPass ? 'text' : 'password'}
                  value={signUpPassword}
                  error={confirmPasswordError}
                  onChange={(e) => {
                    setSignUpPassword(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') sendSignUp();
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {showSignUpPass ? (
                          <VisibilityOff
                            sx={{
                              cursor: 'pointer',
                            }}
                            onClick={() => setShowSignUpPass((current) => !current)}
                          />
                        ) : (
                          <Visibility
                            sx={{
                              cursor: 'pointer',
                            }}
                            onClick={() => setShowSignUpPass((current) => !current)}
                          />
                        )}
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
              <FormControl sx={{ mx: 2, my: 1 }}>
                <TextField
                  variant="outlined"
                  label={'Confirm Password'}
                  type={showSignUpPass ? 'text' : 'password'}
                  value={confirmPassword}
                  error={confirmPasswordError}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') sendSignUp();
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {showSignUpPass ? (
                          <VisibilityOff
                            sx={{
                              cursor: 'pointer',
                            }}
                            onClick={() => setShowSignUpPass((current) => !current)}
                          />
                        ) : (
                          <Visibility
                            sx={{
                              cursor: 'pointer',
                            }}
                            onClick={() => setShowSignUpPass((current) => !current)}
                          />
                        )}
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row-reverse',
                  justifyContent: 'space-between',
                  mx: 2,
                  my: 1,
                }}
              >
                <Button variant="contained" onClick={sendSignUp}>
                  Sign Up
                </Button>
                <Button onClick={() => setLogin((current) => !current)}>
                  {login ? 'Sign Up' : 'Login'}
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginPage;
