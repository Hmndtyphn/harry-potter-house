import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const Landing = () => {

  const styledDiv = {
    backgroundImage: `url(https://res.cloudinary.com/dceprxjzq/image/upload/v1642627920/MaraudersTrivia/hogwarts_castle.jpg)`,
    backgroundSize: "cover",
    height: "100vh",
    width: "100%",
    color: "white",
    justifyContent: "center",
    alignItems: "flex-start",
  };

  return (
    <div style={styledDiv}>
      <Container backgroundColor="light-grey">
        <Typography>
          <h1>Welcome to Hogwarts!</h1>
          <Typography>
            <p>The messrs. Prongs, Padfoot, Wormtail, and Moony welcome you to Potter's Marauders</p>
          </Typography>
          <h2>Already a wizarding student?</h2>
          <Link to="/login">
            <Button variant='contained'>Login</Button>
          </Link>
          <h2>Or did you just get your letter?</h2>
          <Link to="/signup">
            <Button variant='contained'>Enroll</Button>
          </Link>
        </Typography>
      </Container>
    </div>
  )
};

export default Landing;