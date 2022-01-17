import React from 'react';
import { Button, Container } from '@mui/material';
import { useMutation } from '@apollo/client';
import { Link, Route } from 'react-router-dom';
import { LoginPage } from '../components/Login';


const Landing = () => {

  return (
    <div>
      <Container>
        <h1>Welcome to Hogwarts!</h1>
        <Link to="/login">
          <Button variant='contained'>Login</Button>
        </Link>
        <Link to="/signup">
          <Button variant='contained'>Enroll</Button>
        </Link>
      </Container>
    </div>
  )
};

export default Landing;