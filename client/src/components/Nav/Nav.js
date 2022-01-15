import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import {  Tabs, Tab } from '@mui/material';
// import "./css/Nav.css";

// top page tabs, using MUI
const StyledTabs = styled((props) => (
  <Tabs 
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
)) ({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& .MuiTabs-indicatorSpan": {
     backgroundColor: "transparent"
    }
  }
})

// on click event for nav bar tabs
function LinkTab(props) {
    return (
        <Tab
          component="a"
          onClick={(event) => {
              event.preventDefault();
          }}
          {...props} />
    )
}

// navbar styling/ on click styling
const StyledLink = styled((props) => 
  <LinkTab {...props} />)(
    ({ theme }) => ({
      fontFamily: "Sans Serif",
      fontWeight: "Bold",
      color: "#00000",
      "&.Mui-selected": {
        color: "dark-blue",
       
      }
    })
  )

  // display page based on current tab state/ sets value to chosen value
function NavTabs(props) {
  const { sections = [], currentSection, setCurrentSection } = props;
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
      setValue(newValue);
  };

  // returns above functions and maps as navbar html
  return (
    <header>
      <nav>
        <StyledTabs centered className="navigation" value={value} onChange={handleChange} aria-label="nav tabs">
            {sections.map((section) => (
                <StyledLink key={section.name} label={section.name} href={`#${section.name}`} className={`${currentSection.name === section.name && 'navActive'} nav-tabs`} sx={{px: 6}} onClick={() => {
                    setCurrentSection(section);
                }}/>
            ))}
        </StyledTabs>
      </nav>
    </header>
  );
}

// exports the navtabs
export default NavTabs;