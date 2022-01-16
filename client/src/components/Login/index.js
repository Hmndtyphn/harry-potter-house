import React, { useState } from "react";
import { Tabs, Tab, Input, Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { useMutation } from "@apollo/client";
import { LOGIN } from '../../utils/mutations';



function Login() {
    const [formState, setFormState] = useState({email: '', password: ''});
    const [login, {error}] = useMutation(LOGIN);
    return(
        <Box>
            <Container>
                <Input placeholder="email">
                </Input>
                <Input placeholder="password">
                </Input>
            </Container>
        </Box>
    )
}

export default Login;
