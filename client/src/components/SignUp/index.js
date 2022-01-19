import React, { useState } from "react";
import { Input, Box, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { useMutation } from "@apollo/client";
import { SIGNUP_USER } from "../../utils/mutations";
import hogwartsCastle from "../../assets/images/hogwarts_castle.jpeg";


const SignUp = (props) => {

  const styledDiv = {
    backgroundImage: `url(${hogwartsCastle})`,
    backgroundSize: "cover",
    height: "100vh",
    width: "100%",
    color: "white",
    justifyContent: "center",
    alignItems:"flex-start",
  };

  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser] = useMutation(SIGNUP_USER);

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
    <Box style={styledDiv}>
      <Container id="signup-form">
        <Link to="/login">← Go to Login</Link>
        <h2>Sign Up</h2>
        <form onSubmit={handleFormSubmit}>
          <Input
            placeholder="Wizarding Name"
            name="username"
            type="username"
            id="username"
            onChange={handleChange}
            />
          <Input
            placeholder="Email Address"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
          <Input 
          placeholder="Password"
          name="password"
          type="password"
          id="pwd"
          onChange={handleChange}
          />
          <Button type='submit'>Submit</Button>
        </form>
      </Container>
    </Box>
    </div>
  )
}


export default SignUp;
