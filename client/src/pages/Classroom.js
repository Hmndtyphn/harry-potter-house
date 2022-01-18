import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CLASS } from "../utils/queries";
import { capitalizeFirstLetter } from "../utils/helpers";
import potionsImage from "../assets/images/potionsclass.jpeg";

import { Link, useParams } from "react-router-dom";

import { Button, Container, Typography } from "@mui/material";


const Classroom = () => {
  // grab name from params
  const { name } = useParams();

  // use useQuery(Apollo) to make query request
  const { loading, data } = useQuery(QUERY_CLASS, {
    variables: { name },
  });

  const subject = data?.subject || {};
  const { description, image, professor, questions } = subject;

  const styledDiv = {
    backgroundImage: `url(${potionsImage})`,
    backgroundSize: 'cover',
    height: '100vh',
    color: "white",
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styledDiv}>
      <Container>
        <Typography variant="h3" sx={{ p:2 }} >
          {`Welcome to ${capitalizeFirstLetter(name)} class taught by Professor ${professor} where you will
          learn ${description}. Take out your text and prepare to start your
          quiz.`}
        </Typography>
      </Container>
      <Container>
        <Link to={`/classroom/${name}/quiz`}>
          <Button>Start Quiz</Button>
        </Link>
      </Container>
    </div>
  );
};

export default Classroom;
