import React, { useEffect } from "react";
import { Typography } from '@mui/material';
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../utils/GlobalState";
import { QUERY_ME } from "../utils/queries";
import { UPDATE_CURRENT_HOUSE, UPDATE_WIZARD } from "../utils/actions";
import { Grid, CardMedia, CardContent, Card} from "@mui/material";

// .me query to get wand and house (which tells which house's common room  to display) and house points
// From common room, link to Great Hall

const CommonRoom = (props) => {

  const styledDiv = {
    backgroundImage: `url(https://res.cloudinary.com/dceprxjzq/image/upload/v1642627923/MaraudersTrivia/slytherin_common.jpg)`,
    backgroundSize: "cover",
    height: "100vh",
    width: "100%",
    color: "white",
    justifyContent: "center",
    alignItems: "flex-start",
  };

  const [state, dispatch] = useStoreContext();

  const { data: userData } = useQuery(QUERY_ME);
  console.log(userData);
  const { me, house, wand } = state;
  const wizard = me.username;
  const currentHouse = me.house;
  const myWand = me.wand;
  console.log(wizard);
  console.log(currentHouse);
  console.log(myWand);

  useEffect(() => {
    if (userData) {
      dispatch({
        type: UPDATE_WIZARD,
        me: userData.me
      })
    }
  }, [userData, dispatch])

  // useEffect(() => {
  //   dispatch({
  //     type: UPDATE_CURRENT_HOUSE,
  //     house: userData.currentHouse
  //   })
  // }, [currentHouse, dispatch])

  return (
    <div style={styledDiv}>


      <Typography container
        sx={{ pr: 5, pl: 5 }}
        direction="row"
        justifyContent="space-around"
        alignItems="center"

      >
        <h2>Welcome, {wizard}, to your common room{currentHouse}</h2>

      </Typography>

      <Grid
        container
        sx={{ pr: 5, pl: 5 }}
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
        flew-row="center"

      >

        <Card sx={{ pr: 5, pl: 5 }} style={{ backgroundColor: "maroon" }}>
          <CardMedia
            component="img"
            height="175"
            image="https://res.cloudinary.com/dceprxjzq/image/upload/v1642628199/MaraudersTrivia/gryffindor.jpg"
          />
          <CardContent style={{ backgroundColor: "gold" }}>
            <Typography color="black" gutterBottom variant="h6" >
              House Points: 375
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ pr: 5, pl: 5 }} style={{ backgroundColor: "green" }}  >
          <CardMedia
            component="img"
            height="175"
            image="https://res.cloudinary.com/dceprxjzq/image/upload/v1642628199/MaraudersTrivia/slytherin.jpg"
          />
          <CardContent style={{ backgroundColor: "silver" }}>
            <Typography color="black" gutterBottom variant="h6" >
              House Points: 400
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ pr: 5, pl: 5 }} style={{ backgroundColor: "black" }}>
          <CardMedia
            component="img"
            height="175"
            image="https://res.cloudinary.com/dceprxjzq/image/upload/v1642628199/MaraudersTrivia/hufflepuff.jpg"
          />
          <CardContent style={{ backgroundColor: "yellow" }}>
            <Typography gutterBottom variant="h6" >
              House Points: 345
            </Typography>
          </CardContent>

        </Card>

        <Card sx={{ pr: 5, pl: 5 }} style={{ backgroundColor: "silver" }}>
          <CardMedia
            component="img"
            height="175"
            image="https://res.cloudinary.com/dceprxjzq/image/upload/v1642628200/MaraudersTrivia/ravenclaw.jpg"
          />
          <CardContent style={{ backgroundColor: "mediumBlue" }}>
            <Typography gutterBottom variant="h6" alignment="center">
              House Points: 400
            </Typography>
          </CardContent>
        </Card>

      </Grid>
    </div>
  )
}

export default CommonRoom;