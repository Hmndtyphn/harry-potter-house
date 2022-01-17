import React from 'react';
import { Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';


const Landing = () => {

  return (
    <div>
      <Container>
        <h1>Welcome to Hogwarts!</h1>
        <Container>
          <p>The messrs. Prongs, Padfoot, Wormtail, and Moony welcome you to Potter's Marauders</p>
        </Container>
        <h2>Already a wizarding student?</h2>
        <Link to="/login">
          <Button variant='contained'>Login</Button>
        </Link>
        <h2>Or did you just get your letter?</h2>
        <Link to="/signup">
          <Button variant='contained'>Enroll</Button>
        </Link>
      </Container>
    </div>
  )
};

export default Landing;