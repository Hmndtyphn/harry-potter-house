import React from 'react';
import { Button, Container } from '@mui/material';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';


const Login = (props) => {

  return (
    <div>
      <h1>Welcome to Hogwarts!</h1>
      <Link to="/login">
        <Button variant='contained'>Login</Button>
      </Link>
      <Link to="/signup">
        <Button variant='contained'>Enroll</Button>
      </Link>
    </div>
  )
};

export default Login;