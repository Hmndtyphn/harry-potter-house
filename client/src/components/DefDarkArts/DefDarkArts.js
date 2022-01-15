import React from 'react';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import images from "../../assets/images/snape_2.jpeg";
// import coverPhoto2 from "../../assets/";

const DefDarkArts = () => {

  return (
        <Box sx={{ px: -100, pt: 0, pb: 15 }}>
        <Typography className="title" variant="h1" component="h1" align="Center" sx={{pt: 10}} gutterBottom>
            Dark Arts Class
        </Typography>

        <Grid container sx={{display: "flex", flexWrap: "wrap", justifyContent: "flex"}} alignItems="center">
        <Grid item xs>

          {/* images */}
            <Container>
                <img src={images} style={{ height: "100%", width: "100%" }} align="center" alt="my image 1" />
            </Container>
        </Grid>

        
        <Grid item xs={5}>
          <Container className="background">
          </Container>
          </Grid>
      </Grid>
    </Box>
  );
}

export default DefDarkArts;