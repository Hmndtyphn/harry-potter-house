import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import "./index.css";



import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


function Nav() {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  function showNav() {
    if (Auth.loggedIn()) {
      return (
          <ul className="navBar">
            <li className="li">Potters Marauders
            </li>
            <li className="li"></li>
            <li className="li" >
              <Link style={{ color: "black" }} to="/greathall">Great Hall</Link>
            </li>
            <li className="li">
              <Link style={{ color: "black" }} to="/house">Common Room</Link>
            </li>
             <a href='/' onClick={logout}>
              Logout
            </a>
          </ul>
         
      );
    }
  }


  return (
    <Box >
      <AppBar position="static" style={{ background: "#e3a000" }}>
        <Toolbar>
          <Typography
            color="black"
            variant="h6" display="flex"
            alignItems="stretch"
            justifyContent="space-between"
            width="65%"
            margin="10"
            padding="10">
            {showNav()}
          </Typography>
          {/* <Button color="inherit" font="">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default Nav;