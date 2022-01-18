import React from "react";
import { Button, Container } from '@mui/material';
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../utils/GlobalState";



// in Great Hall, link to House
// Will display all house points, pull props from Global State
// Map out classes to display Cards/Doors that link to classrooms
// Logout Link, need to build still
// Style with @material/mui


const GreatHall = () => {
  const [state, dispatch] = useStoreContext();  
  return (
    <div>
      <p>Good Morning Everyone!</p>
      

    </div>
  )
};

export default GreatHall;