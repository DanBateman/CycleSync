import React from "react";
import { useState } from "react";
import { hashSync } from "bcryptjs";
import {
  Paper,
  Box,
  Typography,
  Divider,
  FormControl,
  Button,
  TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { loginThunk } from "../auth/authSlice";

const LoginPage = () => {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  const sendLogin = () => {
    let hashedPassword = hashSync(loginPassword, 10);
    console.log(hashedPassword);
    dispatch(
      loginThunk({
        name: loginUsername,
        pass: hashedPassword,
      })
    );
  };

  return (
    <Paper
      sx={{
        width: "fit-content",
        height: "fit-content",
        mx: "auto",
        my: "200px",
      }}
    >
      <Box
        sx={{
          width: "fit-content",
          height: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" sx={{ mx: 2.7 }}>
          Login
        </Typography>
        <FormControl sx={{ mx: 2, my: 1 }}>
          <TextField
            variant="outlined"
            label={"Username"}
            value={loginUsername}
            onChange={(e) => {
              setLoginUsername(e.target.value);
            }}
          />
        </FormControl>
        <FormControl sx={{ mx: 2, my: 1 }}>
          <TextField
            variant="outlined"
            label={"Password"}
            value={loginPassword}
            onChange={(e) => {
              setLoginPassword(e.target.value);
            }}
          />
        </FormControl>
        <Box
          sx={{ display: "flex", flexDirection: "row-reverse", mx: 2, my: 1 }}
        >
          <Button variant="contained" onClick={sendLogin}>
            Login
          </Button>
        </Box>
      </Box>
      <Divider variant="middle" />
      <Box
        sx={{
          width: "fit-content",
          height: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" sx={{ mx: 2.7 }}>
          Sign Up
        </Typography>
        <FormControl sx={{ mx: 2, my: 1 }}>
          <TextField
            variant="outlined"
            label={"Email"}
            value={signUpEmail}
            onChange={(e) => {
              setSignUpEmail(e.target.value);
            }}
          />
        </FormControl>
        <FormControl sx={{ mx: 2, my: 1 }}>
          <TextField
            variant="outlined"
            label={"Username"}
            value={signUpUsername}
            onChange={(e) => {
              setSignUpUsername(e.target.value);
            }}
          />
        </FormControl>
        <FormControl sx={{ mx: 2, my: 1 }}>
          <TextField
            variant="outlined"
            label={"Password"}
            value={signUpPassword}
            onChange={(e) => {
              setSignUpPassword(e.target.value);
            }}
          />
        </FormControl>
        <FormControl sx={{ mx: 2, my: 1 }}>
          <TextField
            variant="outlined"
            label={"Confirm Password"}
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </FormControl>
        <Box
          sx={{ display: "flex", flexDirection: "row-reverse", mx: 2, my: 1 }}
        >
          <Button variant="contained">Sign Up</Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default LoginPage;
