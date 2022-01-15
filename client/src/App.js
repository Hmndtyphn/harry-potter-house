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

import Login from '../src/pages/Login';
import Signup from '../src/pages/Signup';
import Classroom from '../src/pages/Classroom'
import GreatHall from '../src/components/GreatHall/GreatHall';
import CommonRoom from './pages/CommonRoom';

import Nav from '../src/components/Nav/Nav';
import Charms from '../src/components/Charms/Charms';
import DefDarkArts from '../src/components/DefDarkArts/DefDarkArts';
import HistoryMagic from '../src/components/HistoryMagic/HistoryMagic';
import Potions from '../src/components/Potions/Potions';
import CommonRoom from './pages/CommonRoom';

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

  // Add routes instead here (look at app.js in shop shop)
  return (
    <ApolloProvider client={client}>
      <Router>
      <div>
        <StoreProvider>
        <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/commonroom" component={CommonRoom} />
          <Route exact path="/classroom/:name" component={Classroom} />
          <Route exact path="greathall" component={GreatHall} />
        </Switch>
        </div>
        </StoreProvider>
      </div>
      </Router>
    </ApolloProvider>
  );
}

// exports app
export default App;
