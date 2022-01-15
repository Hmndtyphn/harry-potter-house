import React, { useState } from 'react';
import './App.css';

import GreatHall from '../src/components/GreatHall/GreatHall'
import Nav from '../src/components/Nav/Nav'
import Charms from '../src/components/Charms/Charms'
import DefDarkArts from '../src/components/DefDarkArts/DefDarkArts'
import HistoryMagic from '../src/components/HistoryMagic/HistoryMagic'
import Potions from '../src/components/Potions/Potions'


// import sections from file structure
function App() {
  const [sections] = useState([
    // nav bar sections for page scroll
    {
      name: 'The Great Hall',
      component: <GreatHall />
    },

    {
      name: 'Charms',
      component: <Charms />
    },

    {
      name: 'Defense Against the Dark Arts',
      component: <DefDarkArts />
    },

    {
      name: 'History of Magic',
      component: <HistoryMagic />
    },

    {
      name: 'Potions',
      component: <Potions />
    }

  ])

  // uses current state of sections
  const [ currentSection, setCurrentSection ] = useState(sections[0])

// Add routes instead here (look at app.js in shop shop)
  return (
    <div>
      <Nav
      sections = {sections}
      currentSection = {currentSection}
      setCurrentSection = {setCurrentSection} />
      <main>
        {currentSection.component}
      </main>
    </div>
  );
}

// exports app
export default App;
