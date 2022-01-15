import React from "react";
import CommonRoom from './CommonRoom'
import DefDarkArts from "../components/DefDarkArts/DefDarkArts";
import Potions from "../components/Potions/Potions";
import Charms from "../components/Charms/Charms";
import HistoryMagic from "../components/HistoryMagic/HistoryMagic";

// in Great Hall, link to Common Room
// Will display all house points
// Cards/Doors that link to classrooms


const GreatHall = () => {
  return (
    <div>
      <p>Good Morning Everyone!</p>
      <CommonRoom />
    </div>
  )
};

export default GreatHall;