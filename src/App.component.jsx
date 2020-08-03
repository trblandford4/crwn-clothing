import React, { PureComponent } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

import HeaderContainer from "./components/header/Header.container";
import HomePage from "./pages/homepage/HomePage.component.jsx";
import ShopPage from "./pages/shop/Shop.component.jsx";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/SignInAndSignUp.component";
import CheckoutPageContainer from "./pages/checkout/Checkout.container";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth !== null) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPageContainer} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
