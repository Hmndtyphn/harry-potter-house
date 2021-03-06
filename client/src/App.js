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

import Landing from './pages/Landing';
import GreatHall from '../src/pages/GreatHall';
import Classroom from '../src/pages/Classroom';
import Quiz from '../src/components/Quiz';
import House from './pages/House';

import Auth from "./utils/auth";
import Nav from './components/Nav';
import SignUp from './components/SignUp';
import LoginPage from './components/Login';
import NoMatch from './pages/NoMatch';

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


  // Add routes instead here (look at app.js in shop shop)
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <div>
              <Nav />
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/house" component={House} />
                <Route exact path="/classroom/:name" component={Classroom} />
                <Route exact path="/classroom/:name/:quiz" component={Quiz} />
                <Route exact path="/greathall" component={GreatHall} />
                <Route component={NoMatch} />
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
