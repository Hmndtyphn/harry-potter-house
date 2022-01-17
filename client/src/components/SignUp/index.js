import React, { useState } from "react";
import { Input, Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";


const SignUp = () => {


  return (
    <Box>
      <Container>
        <Input placeholder="Wizarding Name">
        </Input>
        <Input placeholder="Email Address">
        </Input>
        <Input placeholder="Password">
        </Input>
      </Container>
    </Box>
  )
}


export default SignUp;
