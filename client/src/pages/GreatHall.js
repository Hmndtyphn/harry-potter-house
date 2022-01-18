import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_CLASS } from "../utils/queries";
import greatHallImage from "../assets/images/great_hall8.jpeg";
import slytherin from "../assets/images/houseIcons/slytherin4.jpeg";
import gryffindor from "../assets/images/houseIcons/gryffindor3.jpeg";
import hufflepuff from "../assets/images/houseIcons/hufflepuff.jpeg";
import ravenclaw from "../assets/images/houseIcons/ravenclaw2.jpeg";
import { Grid, Typography, CardMedia, CardContent, CardActions, Card, Button } from "@mui/material";
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
  const SlytherinImage = {
    backgroundImage: `url(${slytherin})`,
    height: "100vh",
  };
  const GryffindorImage = {
    backgroundImage: `url(${gryffindor})`,
    height: "100vh", 
  };
  const HufflepuffImage = {
    backgroundImage: `url(${hufflepuff})`,
    height: "100vh", 
  };
  const RavenclawImage = {
    backgroundImage: `url(${hufflepuff})`,
    height: "100vh", 
  };



  


  if (loading) {
    return <div>Loading...</div>;
  }

  
  return (
    <div style={styledDiv}  >
      <Typography align="center" variant="h2" color="white" sx={{pt: 1}} gutterBottom>
          Welcome to the Great Hall!
        </Typography>

      {/* Gryffindor card */}
      <Grid 
                    container
                    sx={{ pr: 10, pl: 10 }}
                    sx={{ pt: 25, pb: 25 }}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                    rowSpacing={20}
                    flew-row="center"
                  >
      
      <Card sx={{ pr: 5, pl: 5 }} style={{backgroundColor: "maroon"}}>
      <CardMedia 
        component="img"
        height="220"
        image={gryffindor}
      />
      <CardContent style={{backgroundColor: "gold"}}>
        <Typography gutterBottom alignment="center">
          Gryffindor
        </Typography>
        <Typography color="black">
          Words about Gryffindor House
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Go to Gryffindor House</Button>
      </CardActions>
    </Card>
    

    {/* Slytherin Card */}
    <Card sx={{ pr: 5, pl: 5 }} style={{backgroundColor: "green"}}  >
      <CardMedia
        component="img"
        height="220"
        image={slytherin}
      />
      <CardContent style={{backgroundColor: "silver"}}>
        <Typography gutterBottom alignment="center">
          Slytherin
        </Typography>
        <Typography color="black">
          Info about Slytherin House
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Go to Slytherin House</Button>
      </CardActions>
    </Card>

    {/* Hufflepuff card */}
    <Card sx={{ pr: 5, pl: 5 }} style={{backgroundColor: "black"}}>
      <CardMedia
        component="img"
        height="220"
        image={hufflepuff}
      />
      <CardContent style={{backgroundColor: "yellow"}}>
        <Typography gutterBottom variant="h5" >
          HufflePuff
        </Typography>
        <Typography color="black" alignment="center">
          info about Hufflepuff
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Go to Hufflepuff House</Button>
      </CardActions>
    </Card>

    {/* Ravenclaw Card */}
    <Card sx={{ pr: 5, pl: 5  }} style={{backgroundColor: "gold"}}>
      <CardMedia
        component="img"
        height="220"
        image={ravenclaw}
      />
      <CardContent style={{backgroundColor: "mediumBlue"}}>
        <Typography gutterBottom variant="h5"  alignment="center">
          Ravenclaw
        </Typography>
        <Typography variant="body2" color="black">
          Info about Ravenclaw
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Go to Ravenclaw House</Button>
      </CardActions>
    </Card>
    </Grid> 
</div> 
  );
};

export default GreatHall;