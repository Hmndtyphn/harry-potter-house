import React, { useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import { useQuery } from "@apollo/client";

import { useStoreContext } from "../utils/GlobalState";
import { QUERY_ME } from "../utils/queries";
import { UPDATE_HOUSE } from "../utils/actions";


// .me query to get wand and house (which tells which house's common room  to display) and house points
// From common room, link to Great Hall

const CommonRoom = () => {
  // const [state, dispatch] = useStoreContext();

  // const { user, currentHouse } = state;

  // const { loading, data } = useQuery(QUERY_ME);


  // useEffect(() => {
  //   dispatch({
  //     type: UPDATE_HOUSE,
  //     house: currentHouse
  //   })
  // }, [state, data])

  return (

    <Box>
      <Container>
        <h2>Welcome to Ravenclaw</h2>
        <p>Or perhaps Slytherin...</p>
        <Link to="/greathall">Visit the Great Hall</Link>
      </Container>
    </Box>
  )
}

export default CommonRoom;