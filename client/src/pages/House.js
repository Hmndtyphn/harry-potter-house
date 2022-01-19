import React, { useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import { useQuery } from "@apollo/client";

import { useStoreContext } from "../utils/GlobalState";
import { QUERY_ME } from "../utils/queries";
import { UPDATE_CURRENT_HOUSE, UPDATE_WIZARD } from "../utils/actions";


// .me query to get wand and house (which tells which house's common room  to display) and house points
// From common room, link to Great Hall

const CommonRoom = (props) => {
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

    <Box>
      <Container>
        <h2>Welcome, {wizard}, to {currentHouse}</h2>
        <p>Or perhaps Slytherin...</p>
        <Link to="/greathall">Visit the Great Hall</Link>
      </Container>
    </Box>
  )
}

export default CommonRoom;