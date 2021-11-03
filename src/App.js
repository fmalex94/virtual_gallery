import React, { Fragment } from 'react';

import Footer from './components/Footer'
import Header from './components/Header'
import Galeria from './components/Galeria'
import Login from './components/Login'
import Hero from './components/Hero'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//redux
import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (

    <Router>
      <Provider store={store}>
        <Header />

        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/">
            <Hero />
            <Galeria />
          </Route>
        </Switch>

        <Footer />
      </Provider>
    </Router>

  );
}

export default App;
