import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CLASS } from "../utils/queries";
import { capitalizeFirstLetter } from "../utils/helpers";

import { Link, useParams } from "react-router-dom";

import { Button, Container, Typography } from "@mui/material";
// words and more words

const Classroom = () => {
  // grab name from params
  const { name } = useParams();

  // use useQuery(Apollo) to make query request
  const { loading, data } = useQuery(QUERY_CLASS, {
    variables: { name },
  });

  const subject = data?.subject || {};
  const { description, classImg, professor } = subject;

  const styledDiv = {
    backgroundImage: `url(https://res.cloudinary.com/dceprxjzq/image/upload/v1642627920/MaraudersTrivia/${classImg}.jpg)`,
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
