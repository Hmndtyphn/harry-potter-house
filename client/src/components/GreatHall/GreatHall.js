// import dependencies
import React from "react";
// import "./css/About.css";

// mui
import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import { Container } from "@mui/material";

// about function
function About() {
    return (
        <Box sx={{ px: 5, pt: 0, pb: 15 }}>
        <Typography className="title" variant="h1" component="h1" align="center" sx={{pt: 10}} gutterBottom>
            Welcome To Hogwarts!
        </Typography>
    </Box>
  );
}

// export about page
export default About;