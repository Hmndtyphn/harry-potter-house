import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Grid, Box } from "@mui/material";
import Result from '../Result';
import images from "../../assets/images/snape_2.jpeg";
// import coverPhoto2 from "../../assets/";

// Background pic of clas
// Start button to start quiz/Link to Quiz component/
// --render Quiz component
// Take Quiz, get results and summary
// -- render Result component
// Redirect to Great Hall when Quiz is complete

const Quiz = () => {
  const { subjectName } = useParams();
  return (
    <Box sx={{ px: -100, pt: 0, pb: 15 }}>
      <Typography className="title" variant="h1" component="h1" align="Center" sx={{ pt: 10 }} gutterBottom>
       {subjectName}
      </Typography>

      <Grid container sx={{ display: "flex", flexWrap: "wrap", justifyContent: "flex" }} alignItems="center">
        <Grid item xs>

          {/* images */}
          <Container>
            <img src={images} style={{ height: "100%", width: "100%" }} align="center" alt="Professor Snape" />
          </Container>
        </Grid>


        <Grid item xs={5}>
          <Container className="background">
          {/* <Result /> */}
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Quiz;