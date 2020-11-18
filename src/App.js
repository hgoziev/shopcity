import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useEffect } from "react";
import { auth } from "./Firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import "./Style/App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Checkout from "./Pages/Checkout";
import Login from "./Pages/Login";
import Payment from "./Pages/Payment";
import Orders from "./Pages/Orders.js";
import { useStateValue } from "./Context/StateProvider";
import Footer from "./Components/Footer";

const promise = loadStripe("pk_test_T2wqJIKWILUFy05WjPptogR7");
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user : " + authUser);

      if (authUser) {
        //user logged in or was logged in
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        //user did not login
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
