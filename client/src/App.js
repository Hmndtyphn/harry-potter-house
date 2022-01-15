import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { StoreProvider } from './utils/GlobalState';

import GreatHall from '../src/components/GreatHall/GreatHall';
import Nav from '../src/components/Nav/Nav';
import Charms from '../src/components/Charms/Charms';
import DefDarkArts from '../src/components/DefDarkArts/DefDarkArts';
import HistoryMagic from '../src/components/HistoryMagic/HistoryMagic';
import Potions from '../src/components/Potions/Potions';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

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
  const [currentSection, setCurrentSection] = useState(sections[0])

  // Add routes instead here (look at app.js in shop shop)
  return (
    <ApolloProvider client={client}>
      <div>
        <StoreProvider>
        <Nav
          sections={sections}
          currentSection={currentSection}
          setCurrentSection={setCurrentSection} />
        <main>
          {currentSection.component}
        </main>
        </StoreProvider>
      </div>
    </ApolloProvider>
  );
}

// exports app
export default App;
