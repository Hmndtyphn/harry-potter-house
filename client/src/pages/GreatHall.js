import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_CLASS } from "../utils/queries";
import greatHallImage from "../assets/images/great_hall8.jpeg";
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



  


  if (loading) {
    return <div>Loading...</div>;
  }

  
  return (
    <Grid style={styledDiv}>

      {/* Gryffindor card */}
      <Grid sx={4}
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                  >
      
      <Card sx={{ pr: 5, pl: 5 }} padding={25} >
      <CardMedia 
        component="img"
        height="140"
        image=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Gryffindor
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Words about Gryffindor House
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Go to Gryffindor House</Button>
      </CardActions>
    </Card>
    

    {/* Slytherin Card */}
    <Card sx={{ pr: 5, pl: 5 }} padding={25}>
      <CardMedia
        component="img"
        height="140"
        image=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Slytherin
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Info about Slytherin House
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Go to Slytherin House</Button>
      </CardActions>
    </Card>

    {/* Hufflepuff card */}
    <Card sx={{ pr: 5, pl: 5 }}>
      <CardMedia
        component="img"
        height="140"
        image=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          HufflePuff
        </Typography>
        <Typography variant="body2" color="text.secondary">
          info about Hufflepuff
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Go to Hufflepuff House</Button>
      </CardActions>
    </Card>

    {/* Ravenclaw Card */}
    <Card sx={{ pr: 5, pl: 5  }}>
      <CardMedia
        component="img"
        height="140"
        image=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" alignment="left">
          Ravenclaw
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Info about Ravenclaw
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Go to Ravenclaw House</Button>
      </CardActions>
    </Card>
</Grid> 
</Grid> 
  );
};

export default GreatHall;