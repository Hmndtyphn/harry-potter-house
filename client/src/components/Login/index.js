import React, { useState } from "react";
import { Input, Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { useMutation } from "@apollo/client";
import { LOGIN } from '../../utils/mutations';



const LoginPage = () => {

  const [formState, setFormState] = useState({email: '', password: ''});
  const [login, {error}] = useMutation(LOGIN);
  return (
    <Box>
      <Container>
        <form>
          <Input placeholder="email">
          </Input>
          <Input placeholder="password">
          </Input>
        </form>
      </Container>
    </Box>
  )
};

export default LoginPage;