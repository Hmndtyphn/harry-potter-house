import React, { useState } from "react";
import { Input, Box, Container, Button } from "@mui/material";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { useMutation } from "@apollo/client";
import { LOGIN } from '../../utils/mutations';
import hogwartsCastle from "../../assets/images/hogwarts_castle.jpeg";


const LoginPage = (props) => {

  const styledDiv = {
    backgroundImage: `url(${hogwartsCastle})`,
    backgroundSize: "cover",
    height: "100vh",
    width: "100%",
    color: "white",
    justifyContent: "center",
    alignItems: "flex-start",
  };

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };


  return (
    <div style={styledDiv}>
      <Box>

        <Container id="login-form">
          <Box display="flex-row">
            <Link to="/signup">
              <ArrowCircleLeftIcon>
              </ArrowCircleLeftIcon>
            </Link>
            <span>Need to Enroll?</span>
          </Box>
          <h2>Login</h2>
          <form onSubmit={handleFormSubmit}>
            <Input
              placeholder="email"
              type="email"
              name="email"
              id="email"
              onChange={handleChange}>
            </Input>
            <Input
              placeholder="password"
              type="password"
              name="password"
              id="pwd"
              onChange={handleChange}
            >
            </Input>
            {error ? (
              <div>
                <p className="error-text">The provided credentials are incorrect</p>
              </div>
            ) : null}
            <Button type="submit">Login</Button>
          </form>
        </Container>
      </Box>
    </div>
  )
};

export default LoginPage;