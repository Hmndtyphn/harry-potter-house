import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Tabs, Tab } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Auth from "../../utils/auth";
// import "./css/Nav.css";

// top page tabs, using MUI
const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& .MuiTabs-indicatorSpan": {
      backgroundColor: "transparent",
    },
  },
});

// on click event for nav bar tabs
function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

// navbar styling/ on click styling
const StyledLink = styled((props) => <LinkTab {...props} />)(({ theme }) => ({
  fontFamily: "Sans Serif",
  fontWeight: "Bold",
  color: "#00000",
  "&.Mui-selected": {
    color: "dark-blue",
  },
}));

// display page based on current tab state/ sets value to chosen value
function Nav() {
  const { currentLocation } = useParams();

  function showNav() {
    if (
      currentLocation !== "greathall" ||
      currentLocation !== "house" /* rewrite to render properly */
    ) {
      return (
        <ul>
          <li>
            <Link to="/greathall">Great Hall</Link>
          </li>
          <li>
            <Link to="/house">Common Room</Link>
          </li>
        </ul>
      );
    }
  }

  // returns above functions and maps as navbar html
  return (
    <header>
      <nav>
        <StyledTabs centered className="navigation" aria-label="nav tabs">
          {showNav()}
        </StyledTabs>
      </nav>
    </header>
  );
}

export default Nav;
