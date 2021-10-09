

import Login from './pages/Login'
import Home from './pages/home'
import EnglishForm from './compenets/englishForm';
import UrduForm from './compenets/urduForm';
import Register from './pages/register'

import React from 'react';


import './tailwind.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

export default function App() {

  return (

    <div>

      <Router>
        <div>

          <Switch>
            <Route path={"/login"} component={Login}>
              <Login />
            </Route>

            <Route path={"/home"} component={Home}>
              <Home />
            </Route>
            <Route path={"/englishForm"} component={EnglishForm}>
              <EnglishForm />
            </Route>
            <Route path={"/urduForm"} component={UrduForm}>
              <UrduForm />
            </Route>
            <Route path="/">
              <Register />
            </Route>
          </Switch>

        </div>
      </Router>
    </div>

  );
}


