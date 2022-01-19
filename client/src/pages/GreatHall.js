import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../utils/GlobalState";
import greatHallImage from "../assets/images/great_hall.png";
import slytherin from "../assets/images/houseIcons/slytherin4.jpeg";
import gryffindor from "../assets/images/houseIcons/gryffindor3.jpeg";
import hufflepuff from "../assets/images/houseIcons/hufflepuff.jpeg";
import ravenclaw from "../assets/images/houseIcons/ravenclaw2.jpeg";
import { Grid, Typography, CardMedia, CardContent, CardActions, Card, Button } from "@mui/material";


=======
import door from "../assets/images/houseIcons/door.jpeg";


// Conflict resolving

// in Great Hall, link to House
// Will display all house points, pull props from Global State
// Map out classes to display Cards/Doors that link to classrooms
// Logout Link, need to build still
// Style with @material/mui


const GreatHall = () => {
  const [state, dispatch] = useStoreContext();  
 
  // const { data: houseData } = useQuery(QUERY_HOUSES);

  const { me, houses } = state;
  console.log(houses);

  // useEffect(() => {
  //   if (data) {
  //     dispatch({
  //       type: UPDATE_HOUSE_SCORE,

  //     }, [data, dispatch])
  //   }
  // })

  const styledDiv = {
    backgroundImage: `url(${greatHallImage})`,
    backgroundSize: "cover",
    height: "100vh",
    width: "100%",
    color: "white",
    justifyContent: "center",
    alignItems:"flex-start",
  };
  
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div style={styledDiv}  >
      <Typography align="center" variant="h2" gutterBottom>
          Welcome, {me.username}, to the Great Hall!
        </Typography>

      {/* Gryffindor card */}
      <Grid 
                    container
                    sx={{ pr: 10, pl: 10 }}
                    sx={{ pt: 20, pb: 25 }}
                    direction="row"
                    justifyContent="space-around"
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
          Info about Gryffindor House
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
        <Link style={{ color:"white"}} to="/house">Go to Gryffindor House</Link>
        </Button>
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
        <Button size="small">
        <Link style={{ color:"white"}} to="/house">Go to Slytherin House</Link>
        </Button>
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
        <Button size="small">
        <Link style={{ color:"white"}} to="/house">Go to Hufflepuff House</Link>
        </Button>
      </CardActions>
    </Card>

    {/* Ravenclaw Card */}
    <Card sx={{ pr: 5, pl: 5  }} style={{backgroundColor: "silver"}}>
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
        <Button size="small">
        <Link style={{ color:"white"}} to="/house">Go to Ravenclaw House</Link>
        </Button>
      </CardActions>
    </Card>


    <Grid 
                    container
                    sx={{ pr: 10, pl: 10 }}
                    sx={{ pt: 25, pb: 0 }}
                    direction="row"
                    justifyContent="space-around"
                    alignItems="flex-start"
                    rowSpacing={20}
                    flew-row="center"

                  >
    <Card style={{backgroundColor: "black"}}>
    <CardMedia
        component="img"
        height="150"
        image={door}
      />
      <CardContent>
    <Typography variant="body2" color="white">
          Potions
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
        <Link style={{ color:"blue"}} to="/classroom/potions">Go to class</Link>
        </Button>
      </CardActions>
    </Card>

    <Card style={{backgroundColor: "black"}}>
    <CardMedia

        component="img"
        height="150"
        image={door}
      />
      <CardContent>
    <Typography variant="body2" color="white">
          History of Magic
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
        <Link style={{ color:"blue"}} to="/classroom/historyofmagic">Go to class</Link>
        </Button>
      </CardActions>
    </Card>

    <Card style={{backgroundColor: "black"}}>
    <CardMedia
        component="img"
        height="150"
        image={door}
      />
      <CardContent>
    <Typography variant="body2" color="white">
          Dark Arts
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
        <Link style={{ color:"blue"}} to="/classroom/darkarts">Go to class</Link>
        </Button>
      </CardActions>
    </Card>

    <Card style={{backgroundColor: "black"}}>
    <CardMedia
        component="img"
        height="150"
        image={door}
      />
      <CardContent>
    <Typography variant="body2" color="white">
          Transfiguration
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
        <Link style={{ color:"blue"}} to="/classroom/transfiguration">Go to class</Link>
        </Button>
      </CardActions>
    </Card>

    <Card style={{backgroundColor: "black"}}>
    <CardMedia
        component="img"
        height="150"
        image={door}
      />
      <CardContent>
    <Typography variant="body2" color="white">
          Charms
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
        <Link style={{ color:"blue"}} to="/classroom/charms">Go to class</Link>
        </Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid> 
</div> 
  );
};

export default GreatHall;