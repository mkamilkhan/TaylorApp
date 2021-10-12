
import CartDetails from './compenets/cartDetails';
import Login from './pages/Login'
import Home from './pages/home'
import EnglishForm from './compenets/englishForm';
import UrduForm from './compenets/urduForm';
import UrduCard from './compenets/urduCard';
import Register from './pages/register'
import Naap from './pages/naap';
import EnglishCard from './compenets/englishCard';
import React from 'react';
import OrderCard from './pages/orderCard';
import OrderForm from '../src/pages/orderForm';
import './tailwind.min.css';
import OrderList from './compenets/orderList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
            <Route path={"/register"} component={Register}>
              <Register />
            </Route>
            <Route path={"/login"} component={Login}>
              <Login />
            </Route>

            <Route path={"/home"} component={Home}>
              <Home />
            </Route>
            <Route path={"/naap"} component={Naap}>
              <Naap />
            </Route>
            <Route path={"/englishForm"} component={EnglishForm}>
              <EnglishForm />
            </Route>
            <Route path={"/englishCard"} component={EnglishCard}>
              <EnglishCard />
            </Route>
            <Route path={"/urduForm"} component={UrduForm}>
              <UrduForm />
            </Route>
            <Route path={"/urduCard"} component={UrduCard}>
              <UrduCard />
            </Route>
            <Route path={"/orderCard"} component={OrderCard}>
              <OrderCard />
            </Route>
            <Route path={"/orderForm"} component={OrderForm}>
              <OrderForm />
            </Route>
            <Route path={"/cartDetails/:id"} component={CartDetails}>
              <CartDetails />
            </Route>
            <Route path="/">
              <OrderList />
            </Route>
          </Switch>

        </div>
      </Router>
    </div>

  );
}


