import React from "react";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Stack,
  Box,
  TextField,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { customTheme } from "../Theme";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../Redux/actions/authAction";
import { useNavigate } from "react-router-dom";

export default () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.authReducer);
  const { blogs } = useSelector((state) => state.blogsReducer.blogs);
  // blog array
   
   // add search filter here 
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <AppBar
          sx={{
            backgroundImage: "linear-gradient(to left, red, #ff9100)",
            height: "70px",
          }}
        >
          <Toolbar>
            <Typography variant="h5" fontWeight={500}>
              <strong>
                <em>Easy Blog </em>
              </strong>
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display:"flex",
                alignItems:"center"
              }}
            >
              <TextField
                placeholder="type to search..."
                size="small"
                sx={{
                  backgroundColor: "#fff",
                  ml: "50px",
                  width: "300px",
                  borderRadius: "4px",
                  mr:"8px"
                }}
              />
              <Button variant="outlined" color="white">Search</Button>
            </Box>
            <Stack direction="row" spacing={2}>
              <Button
                onClick={() => navigate("/")}
                color="inherit"
                sx={{
                  fontSize: "19px",
                  textTransform: "none",
                }}
              >
                Home
              </Button>
              <Button
                color="inherit"
                sx={{
                  fontSize: "19px",
                  textTransform: "none",
                }}
              >
                About
              </Button>
              {userInfo && (
                <>
                  <Button
                    color="inherit"
                    sx={{
                      fontSize: "19px",
                      textTransform: "none",
                    }}
                    onClick ={()=>navigate("/myblog")}
                  >
                    My Blogs
                  </Button>
                  <Button
                    color="inherit"
                    sx={{
                      fontSize: "19px",
                      textTransform: "none",
                    }}
                  >
                    Profile
                  </Button>
                  <Button
                    color="inherit"
                    onClick={handleLogout}
                    sx={{
                      fontSize: "19px",
                      textTransform: "none",
                    }}
                  >
                    Logout
                  </Button>
                  <Avatar
                    alt="Profile photo"
                    src="/static/images/avatar/1.jpg"
                  />
                </>
              )}

              {!userInfo && (
                <Button
                  color="inherit"
                  sx={{
                    fontSize: "19px",
                    textTransform: "none",
                  }}
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Login
                </Button>
              )}
            </Stack>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
};
