import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

import HeaderContainer from "./components/header/Header.container";
import HomePage from "./pages/homepage/HomePage.component.jsx";
import ShopPageContainer from "./pages/shop/Shop.container.jsx";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/SignInAndSignUp.component";
import CheckoutPageContainer from "./pages/checkout/Checkout.container";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPageContainer} />
        <Route exact path="/checkout" component={CheckoutPageContainer} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

export default App;
