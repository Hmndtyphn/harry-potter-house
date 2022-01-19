import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import hogwartsCastle from "../assets/images/hogwarts_castle.jpeg";


const Landing = () => {

  const styledDiv = {
    backgroundImage: `url(${hogwartsCastle})`,
    backgroundSize: "cover",
    height: "100vh",
    width: "100%",
    color: "white",
    justifyContent: "center",
    alignItems:"flex-start",
  };

  return (
    <div style={styledDiv}>
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
    </div>
  )
};

export default Landing;