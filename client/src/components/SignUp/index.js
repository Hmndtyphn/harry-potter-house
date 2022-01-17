import React, { useState } from "react";
import { Input, Box, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { useMutation } from "@apollo/client";
import { SIGNUP_USER } from "../../utils/mutations";


const SignUp = (props) => {

  const [formState, setFormState] = useState({ username: '', email: '', password: ''});
  const [addUser, { error }] = useMutation(SIGNUP_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
      const mutationResponse = await addUser({
        variables: { 
          username: formState.username,
          email: formState.email,
          password: formState.password
        }
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token)
  };

  return (
    <Box>
      <Container>
        <Link to="/login">← Go to Login</Link>
        <h2>Sign Up</h2>
        <form onSubmit={handleFormSubmit}>
        <Input placeholder="Wizarding Name">
        </Input>
        <Input placeholder="Email Address">
        </Input>
        <Input placeholder="Password">
        </Input>
        <Button type='submit'>Submit</Button>
        </form>
      </Container>
    </Box>
  )
}


export default SignUp;
