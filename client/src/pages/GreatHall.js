import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_CLASS } from "../utils/queries";
import greatHallImage from "../assets/images/great_hall3.jpeg";
import { Container, Typography } from "@mui/material";
import Quiz from "../components/Quiz";



// in Great Hall, link to House
// Will display all house points, pull props from Global State
// Map out classes to display Cards/Doors that link to classrooms
// Logout Link, need to build still
// Style with @material/mui


const GreatHall = () => {
  // grab name from params
  const { name } = useParams();

  // use useQuery(Apollo) to make query request
  const { loading, data } = useQuery(QUERY_CLASS, {
    variables: { name },
  });

  const subject = data?.subject || {};
  const { description, image, professor, questions } = subject;

  const styledDiv = {
    backgroundImage: `url(${greatHallImage})`,
    height: "100vh",
    color: "white",
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styledDiv}>
      <Container>
        <Typography variant="h3" alignment="center" sx={{ p:2 }} >
          /*/* Welcome to the Great Hall *\*\
        </Typography>
      </Container>
    </div>
  );
};

export default GreatHall;