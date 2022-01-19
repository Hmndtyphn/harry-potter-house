import { styled } from "@mui/material/styles";
import { Tabs, Tab } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Auth from "../../utils/auth";
import "./index.css";

// // top page tabs, using MUI
// const StyledTabs = styled((props) => (
//   <Tabs
//     {...props}
//     TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
//   />
// ))({
//   "& .MuiTabs-indicator": {
//     display: "flex",
//     justifyContent: "center",
//     backgroundColor: "transparent",
//     "& .MuiTabs-indicatorSpan": {
//       backgroundColor: "transparent",
//     },
//   },
// });

// // on click event for nav bar tabs
// function LinkTab(props) {
//   return (
//     <Tab
//       component="a"
//       onClick={(event) => {
//         event.preventDefault();
//       }}
//       {...props}
//     />
//   );
// }

// // navbar styling/ on click styling
// const StyledLink = styled((props) => <LinkTab {...props} />)(({ theme }) => ({
//   fontFamily: "Sans Serif",
//   fontWeight: "Bold",
//   color: "#00000",
//   "&.Mui-selected": {
//     color: "dark-blue",
//   },
// }));

// // display page based on current tab state/ sets value to chosen value
// function Nav() {
//   const { currentLocation } = useParams();

//   //  Do we want conditional rendering of the nav when logged
//   function showNav() {
//     if (Auth.loggedIn()) {
//       return (
//         <ul>
//           <li>
//             <Link to="/greathall">Great Hall</Link>
//           </li>
//           <li>
//             <Link to="/house">Common Room</Link>
//           </li>
//         </ul>
//       );
//     }
//     // if (
//     //   currentLocation !== "greathall" ||
//     //   currentLocation !== "house" /* rewrite to render properly */
//     // ) {
//     //   return (
//     //     <ul>
//     //       <li>
//     //         <Link to="/greathall">Great Hall</Link>
//     //       </li>
//     //       <li>
//     //         <Link to="/house">Common Room</Link>
//     //       </li>
//     //     </ul>
//     //   );
//     // }
//   }

//   // returns above functions and maps as navbar html
//   return (
//     <header>
//       <nav>
//         <StyledTabs centered className="navigation" aria-label="nav tabs">
//           {showNav()}
//         </StyledTabs>
//       </nav>
//     </header>
//   );
// }



import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Menu, MenuItem } from "@mui/material";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';


export default function Nav() {
  function showNav() {
        if (Auth.loggedIn()) {
          return (
            
            <ul className="navBar">
              <li className="li">Potters Marauders
              </li>
              <li className="li"></li>
              <li className="li" >
                <Link style={{ color:"black"}} to="/greathall">Great Hall</Link>
              </li>
              <li className="li">
                <Link style={{ color:"black"}} to="/house">Common Room</Link>
              </li>
            </ul>
          );
        }
      }

  
  return (
    <Box >
      <AppBar position="static" style= {{background: "#e3a000"}}>
        <Toolbar>
          <Typography 
          color="black"
          variant="h6" display="flex"
          alignItems="stretch" 
          justifyContent="space-between"
          width="65%"
          margin= "10"
          padding="10">
           {showNav()}
          </Typography>
          {/* <Button color="inherit" font="">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}



// sx={{ pr: 10, pl: 10 }}
// sx={{ pt: 25, pb: 25 }}