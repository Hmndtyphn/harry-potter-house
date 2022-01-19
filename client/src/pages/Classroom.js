import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CLASS } from "../utils/queries";
import { capitalizeFirstLetter } from "../utils/helpers";
import potionsImage from "../assets/images/potionsclass.jpeg";

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
  const { description,alias, image, professor, questions } = subject;
  console.log(subject);

  const styledDiv = {
    
    backgroundSize: 'cover',
    height: '100vh',
    color: "black",
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styledDiv}>
      <Container>
        <Typography variant="h3" sx={{ p:2 }} >
          {`Welcome to ${alias} class taught by Professor ${professor} where you will
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
